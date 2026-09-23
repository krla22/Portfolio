import { ImageResponse } from 'next/og';
import { site } from './lib/site';

// Edge runtime: @vercel/og fails to prerender under the Node runtime on Windows
// (fileURLToPath on a Windows path). Rendered on demand and cached by the CDN.
export const runtime = 'edge';

export const alt = `${site.name} | ${site.role}`;
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
          backgroundColor: '#0B0B0B',
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
              color: '#3DBE7A',
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 92,
              lineHeight: 1.05,
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 34,
              color: '#D6D6D6',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {site.role} · {site.headline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            borderTop: '1px solid #2A2A2A',
            paddingTop: 28,
            fontSize: 24,
            color: '#D6D6D6',
            letterSpacing: 1,
          }}
        >
          <span style={{ color: '#3DBE7A' }}>5 years</span>
          <span>·</span>
          <span>US &amp; AU clients</span>
          <span>·</span>
          <span>Lighthouse 30 → 92</span>
        </div>
      </div>
    ),
    size
  );
}
