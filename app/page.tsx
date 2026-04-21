export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "48rem",
        margin: "0 auto",
        fontFamily: "var(--font-geist-sans, system-ui)",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
        kigumi-next-starter
      </h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1rem" }}>
        A Next.js App Router baseline for Kigumi + Web Awesome. This page is a
        placeholder. Run Kigumi to scaffold components, then start editing.
      </p>
      <pre
        style={{
          background: "#f4f4f5",
          padding: "1rem",
          borderRadius: "0.5rem",
          overflowX: "auto",
          fontFamily: "var(--font-geist-mono, ui-monospace, monospace)",
          fontSize: "0.875rem",
        }}
      >
        {`pnpm install
pnpm kigumi init
pnpm kigumi add button dialog
pnpm dev`}
      </pre>
    </main>
  );
}
