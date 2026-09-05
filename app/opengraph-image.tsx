import { ImageResponse } from 'next/og';
import { site } from './lib/site';

// Edge runtime: @vercel/og fails to prerender under the Node runtime on Windows
// (fileURLToPath on a Windows path). Rendered on demand and cached by the CDN.
export const runtime = 'edge';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0C09',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#2FA968',
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 92,
              lineHeight: 1.05,
              color: '#F3F1E6',
              fontWeight: 600,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 34,
              color: '#A6A395',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {site.role} — {site.headline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            borderTop: '1px solid #262A20',
            paddingTop: 28,
            fontSize: 24,
            color: '#A6A395',
            letterSpacing: 1,
          }}
        >
          <span style={{ color: '#2FA968' }}>5 years</span>
          <span>·</span>
          <span>US &amp; AU clients</span>
          <span>·</span>
          <span>Lighthouse 30 → 95</span>
        </div>
      </div>
    ),
    size
  );
}
