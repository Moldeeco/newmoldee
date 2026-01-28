import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { products } from '@/lib/data';

// Initialize Mercado Pago client
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || '' });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'Invalid items format' }, { status: 400 });
    }

    // Validate items and calculate prices server-side
    const validItems = items.map((item: any) => {
      const product = products.find(p => p.id === item.id);
      if (!product) {
        throw new Error(`Product not found: ${item.id}`);
      }
      return {
        id: item.id,
        title: `${item.name} (${item.selectedMaterial} - ${item.selectedColor})`,
        quantity: Number(item.quantity),
        unit_price: Number(product.price), // Use server-side price
        currency_id: 'COP',
      };
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: validItems,
        back_urls: {
          success: `${request.headers.get('origin')}/success`,
          failure: `${request.headers.get('origin')}/?status=failure`,
          pending: `${request.headers.get('origin')}/?status=pending`,
        },
        auto_return: 'approved',
      }
    });

    if (!result.init_point) {
      throw new Error('Failed to create preference');
    }

    return NextResponse.json({ url: result.init_point });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Error processing checkout' },
      { status: 500 }
    );
  }
}
