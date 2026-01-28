import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Moldee.co - Impresión 3D Premium';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: '-0.05em',
            color: '#111',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              background: '#000',
              borderRadius: '50%',
              marginRight: 20,
            }}
          />
          Moldee.co
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#666',
            fontWeight: 500,
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Impresión 3D Premium en Colombia
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
