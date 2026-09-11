# kigumi-next-starter

Next.js App Router baseline for [Kigumi](https://kigumi.style) + [Web Awesome](https://webawesome.com).

This repo is a sibling to `kigumi-react`, `kigumi-vue`, and `kigumi-angular`. It serves two purposes:

1. A clonable starter template for anyone who wants Next.js + Kigumi wired up correctly.
2. The E2E testbed fixture for the `kigumi` CLI (`tests/e2e/nextjs-starter.test.ts`).

The repo is intentionally minimal: it ships a vanilla `create-next-app` scaffold with Kigumi-generated paths pre-gitignored. Kigumi components are added by running the CLI, not committed to this repo.

## Use as a starter

```bash
git clone https://github.com/kigumi-ui/kigumi-next-starter.git
cd kigumi-next-starter
pnpm install
pnpm dlx kigumi init
pnpm dlx kigumi add button dialog
pnpm dev
```

The `init` step generates `src/lib/kigumi.ts`, `src/styles/layers.css`, `src/styles/theme.css`, `src/global.d.ts`, and `kigumi-components.json`. Import `@/lib/kigumi` from `app/layout.tsx` once, then use components from `@/components/ui` anywhere.

For a full walkthrough of Kigumi commands, see [kigumi.style](https://kigumi.style).

## Use as Kigumi CLI E2E testbed

The [`kigumi-cli`](https://github.com/kigumi-ui/kigumi-cli) repo runs end-to-end tests against this starter. The test contract:

- Env var: `KIGUMI_NEXT_STARTER_PATH`, default `../kigumi-next-starter` (sibling directory).
- Between runs the test performs:
  ```bash
  git -C "$KIGUMI_NEXT_STARTER_PATH" clean -fdx
  git -C "$KIGUMI_NEXT_STARTER_PATH" reset --hard
  ```
  Any uncommitted change or untracked file in this repo will be wiped when the test runs locally. Keep this working copy clean, or point the env var at a dedicated checkout.
- The test invokes `kigumi init` + `kigumi add` against the starter, writes a fixture page under `app/__kigumi_test__/` (gitignored), runs `next build` + `next start`, and asserts on the server-rendered HTML.

### Layout

- App Router at `app/`, no `src/` directory. Import alias `@/*` maps to the project root.
- Kigumi-generated files live under `src/` (created on first `kigumi init`) and are listed in `.gitignore`.
- The Next version is pinned (no `^` prefix) so E2E runs remain reproducible across the `kigumi-cli` release cycle.

## Keeping this repo in sync with kigumi-cli

On every `kigumi` release:

1. Bump the pinned Next version if a Next major has shipped.
2. Run a manual happy path (`pnpm install && pnpm dlx kigumi init && pnpm dlx kigumi add button dialog && pnpm build`) to catch drift.
3. Update this README if the CLI surface changed.
