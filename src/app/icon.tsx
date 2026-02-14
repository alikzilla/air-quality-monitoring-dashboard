import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 20% 15%, #2d7fe8 0%, #174070 45%, #0d1117 100%)',
          borderRadius: 14,
          position: 'relative',
          overflow: 'hidden',
          border: '3px solid #2f3a49',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 8,
            borderRadius: 10,
            border: '2px solid rgba(88, 166, 255, 0.55)',
          }}
        />
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: -1,
            color: '#c9d1d9',
            textShadow: '0 0 12px rgba(88, 166, 255, 0.45)',
          }}
        >
          AQ
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 9,
            width: 34,
            height: 4,
            borderRadius: 999,
            background: '#58a6ff',
            boxShadow: '0 0 8px rgba(88, 166, 255, 0.8)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
