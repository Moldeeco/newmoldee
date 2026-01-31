import Link from 'next/link';

export default function ReturnsPage() {
    return (
        <main className="prose">
            <h1>Envíos y Devoluciones</h1>

            <section className="mb-8">
                <h2>Políticas de Envío</h2>
                <p>
                    <strong>Tiempos de Procesamiento:</strong> Como somos un taller de fabricación bajo demanda, algunos productos pueden tardar entre 1 a 3 días hábiles en fabricarse antes de ser enviados.
                </p>
                <p>
                    <strong>Tiempos de Entrega:</strong> Una vez despachado, el tiempo de entrega depende de la transportadora (generalmente 1-2 días en ciudades principales, 3-5 días en otras zonas).
                </p>
                <p>
                    <strong>Costo:</strong> Envío tarifa plana de $9.900 a nivel nacional. Envío GRATIS en compras superiores a $89.000.
                </p>
            </section>

            <section className="mb-8">
                <h2>Política de Devoluciones y Garantía</h2>
                <p>
                    Cumplimos con el Estatuto del Consumidor de Colombia.
                </p>

                <h3>Derecho de Retracto</h3>
                <p>
                    Tiene derecho a retractarse de su compra dentro de los cinco (5) días hábiles siguientes a la recepción del producto,
                    siempre y cuando el producto se devuelva en las mismas condiciones en que se recibió (sin usar y en su empaque original).
                    Los costos de envío de devolución por retracto corren por cuenta del cliente.
                </p>

                <h3>Garantía</h3>
                <p>
                    Nuestros productos tienen garantía por defectos de fabricación. Si recibe un producto roto o defectuoso,
                    por favor contáctenos inmediatamente con fotos del empaque y del producto para gestionar el reemplazo sin costo adicional.
                </p>
                <p>
                    <em>Nota: La garantía no cubre daños ocasionados por mal uso, caídas o exposición a altas temperaturas ( el material PLA puede deformarse a más de 50°C).</em>
                </p>
            </section>

            <div className="mt-8 pt-8 border-t">
                <Link href="/" className="text-blue-600 hover:underline">&larr; Volver al inicio</Link>
            </div>
        </main>
    );
}
