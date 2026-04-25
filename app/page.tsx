import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Input } from '@/components/ui/Input/Input';

export default function Home() {
  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '48rem',
        margin: '0 auto',
        fontFamily: 'var(--font-geist-sans, system-ui)',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>
        kigumi-next-starter
      </h1>
      <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Next.js App Router + Kigumi + Web Awesome.
      </p>

      <Card style={{ padding: '1rem', marginBottom: '1.5rem' }}>
        <div data-testid="kigumi-card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            Kigumi React wrappers
          </h2>
          <div
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
            data-testid="button-row"
          >
            <Button variant="brand">Brand</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Input label="Email" placeholder="you@example.com" />
          </div>
        </div>
      </Card>

      <section data-testid="raw-wa">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
          Raw wa-button (typed via web-awesome.d.ts)
        </h2>
        <wa-button variant="brand">Raw WA</wa-button>
      </section>
    </main>
  );
}
