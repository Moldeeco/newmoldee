import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="prose">
            <h1>Política de Privacidad</h1>
            <p className="text-sm text-gray-500">Última actualización: {new Date().getFullYear()}</p>

            <section className="mb-8">
                <h2>1. Responsable del Tratamiento</h2>
                <p>
                    Moldee.co ("nosotros", "nuestro") es el responsable del tratamiento de los datos personales
                    recopilados a través de este sitio web. Estamos comprometidos con la protección de su privacidad
                    y el cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Habeas Data).
                </p>
            </section>

            <section className="mb-8">
                <h2>2. Datos que Recopilamos</h2>
                <p>Podemos recopilar la siguiente información personal:</p>
                <ul>
                    <li>Información de contacto (nombre, email, dirección, teléfono) para el procesamiento de pedidos.</li>
                    <li>Información de pago procesada de forma segura a través de Mercado Pago (no almacenamos datos completos de tarjetas de crédito).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>3. Finalidad del Tratamiento</h2>
                <p>Sus datos se utilizan exclusivamente para:</p>
                <ul>
                    <li>Procesar y enviar sus pedidos.</li>
                    <li>Comunicarnos sobre el estado de su compra.</li>
                    <li>Responder a sus consultas de servicio al cliente.</li>
                    <li>Cumplir con obligaciones legales y contables.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>4. Sus Derechos</h2>
                <p>
                    Como titular de los datos, tiene derecho a conocer, actualizar, rectificar y suprimir su información personal.
                    Para ejercer estos derechos, puede contactarnos a través de nuestros canales de atención.
                </p>
            </section>

            <div className="mt-8 pt-8 border-t">
                <Link href="/" className="text-blue-600 hover:underline">&larr; Volver al inicio</Link>
            </div>
        </main>
    );
}
