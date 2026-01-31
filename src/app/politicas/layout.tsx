export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
            {children}
        </div>
    );
}
