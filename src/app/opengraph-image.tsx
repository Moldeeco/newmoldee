import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Moldee - Diseño y Tecnología'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#f8f9fa',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Logo Text/Icon representation */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg
                        width="150"
                        height="150"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginBottom: 20 }}
                    >
                        <path
                            d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"
                            fill="#000"
                        />
                    </svg>
                </div>
                <div
                    style={{
                        fontSize: 60,
                        fontWeight: 800,
                        letterSpacing: '-0.025em',
                        color: 'black',
                        marginTop: 20,
                        lineHeight: 1.4,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    moldee.co
                </div>
                <div
                    style={{
                        fontSize: 30,
                        color: '#666',
                        marginTop: 10,
                    }}
                >
                    Moldeamos tus ideas
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
