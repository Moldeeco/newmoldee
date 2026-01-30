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

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

    const preference = new Preference(client);

    const backUrls = {
      success: `${origin}/success`,
      failure: `${origin}/?status=failure`,
      pending: `${origin}/?status=pending`,
    };

    console.log('Creating preference with back_urls:', backUrls);

    const result = await preference.create({
      body: {
        items: validItems,
        back_urls: backUrls,
        // auto_return: 'approved',
      }
    });

    if (!result.init_point) {
      throw new Error('Failed to create preference');
    }

    return NextResponse.json({ url: result.init_point });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Error processing checkout: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
}
