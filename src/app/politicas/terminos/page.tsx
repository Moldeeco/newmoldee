import Link from 'next/link';

export default function TermsPage() {
    return (
        <main className="prose">
            <h1>Términos y Condiciones</h1>

            <section className="mb-8">
                <h2>1. Introducción</h2>
                <p>
                    Bienvenido a Moldee.co. Al acceder y utilizar nuestro sitio web, usted acepta estar sujeto a los siguientes términos y condiciones.
                </p>
            </section>

            <section className="mb-8">
                <h2>2. Productos y Disponibilidad</h2>
                <p>
                    Nos esforzamos por mostrar con precisión los colores y detalles de nuestros productos impresos en 3D.
                    Sin embargo, debido a la naturaleza de la impresión 3D (FDM), las piezas pueden presentar ligeras variaciones en la textura superficial (líneas de capa),
                    lo cual es característico del proceso de fabricación y no se considera un defecto.
                </p>
            </section>

            <section className="mb-8">
                <h2>3. Precios y Pagos</h2>
                <p>
                    Todos los precios están expresados en pesos colombianos (COP). Nos reservamos el derecho de modificar los precios en cualquier momento.
                    Los pagos son procesados de forma segura a través de la pasarela de pagos Mercado Pago.
                </p>
            </section>

            <section className="mb-8">
                <h2>4. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido de este sitio (imágenes, textos, logotipos, diseños) es propiedad de Moldee.co o de sus respectivos creadores si se trata de diseños con licencia comercial.
                    Está prohibida su reproducción sin autorización.
                </p>
            </section>

            <section className="mb-8">
                <h2>5. Ley Aplicable</h2>
                <p>
                    Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa se resolverá bajo la jurisdicción colombiana.
                </p>
            </section>

            <div className="mt-8 pt-8 border-t">
                <Link href="/" className="text-blue-600 hover:underline">&larr; Volver al inicio</Link>
            </div>
        </main>
    );
}
