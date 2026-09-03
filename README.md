# CoinCover developer docs

Source for the CoinCover developer documentation site, hosted on
[Mintlify](https://www.mintlify.com).

- Repository: [coincover/docs](https://github.com/coincover/docs)
- Dashboard: [dashboard.mintlify.com](https://dashboard.mintlify.com)
- Mintlify docs: [mintlify.com/docs](https://www.mintlify.com/docs)

## Prerequisites

- Node.js 20.17 or newer (LTS recommended)
- npm
- Git, with access to `coincover/docs`
- A Mintlify account in the CoinCover org

## Clone and install

```bash
git clone git@github.com:coincover/docs.git
cd docs
npm install
npm i -g mint
```

Confirm the CLI:

```bash
node --version
mint --version
```

If `mint` is missing or stale:

```bash
npm i -g mint@latest
```

Do not install the old `mintlify` package. If both are present, uninstall
`mintlify` and keep `mint`.

## Point the CLI at the Mintlify project

Local search and the assistant only work after the CLI is logged into the
CoinCover Mintlify project.

```bash
mint status
```

If you are not authenticated:

```bash
mint login
```

That opens a browser. Approve it, then pick the CoinCover docs project when the
CLI asks for a default project. Credentials are stored in
`~/.config/mintlify/config.json`.

Check the link:

```bash
mint status
```

You should see your email, the CoinCover organisation, and the project
subdomain. If the org is there but no subdomain is listed, finish connecting
the GitHub repo in
[Git Settings](https://dashboard.mintlify.com) and run `mint status` again.

The dashboard must point at **`coincover/docs`**, branch **`main`**, with the
content root at the repository root (where `docs.json` lives). A subdirectory
like `docs/` will make PR previews skip with “No changes to preview.”

## Run locally

From the repo root (the directory that contains `docs.json`):

```bash
mint dev
```

Preview: [http://localhost:3000](http://localhost:3000)

Useful flags:

```bash
mint dev --no-open
mint dev --port 3333
mint dev --disable-openapi
```

If the preview does not match production, update the CLI:

```bash
mint update
```

Validate before you push:

```bash
mint validate
mint broken-links
```

Local formatting and snippet types:

```bash
npm run format
npm run format:check
npm run typecheck
```

## Repo layout

| Path | Role |
| --- | --- |
| `docs.json` | Site config: navigation, theme, colours, fonts |
| `index.mdx` | Homepage (`mode: "custom"`) |
| `style.css` | Global CSS. Mintlify loads every `.css` file next to `docs.json` |
| `snippets/` | Reusable React components for MDX pages |
| `images/` | Static assets, including partner logos and badges |
| `specs/` | OpenAPI files for the API reference tabs |

Official references:

- [Install the CLI](https://www.mintlify.com/docs/installation)
- [Preview locally](https://www.mintlify.com/docs/cli/preview)
- [Pages and page modes](https://www.mintlify.com/docs/organize/pages)
- [Custom layouts](https://www.mintlify.com/docs/guides/custom-layouts)
- [React components / snippets](https://www.mintlify.com/docs/customize/react-components)
- [Custom CSS](https://www.mintlify.com/docs/customize/custom-scripts)
- [GitHub app](https://www.mintlify.com/docs/deploy/github)
- [Preview deployments](https://www.mintlify.com/docs/deploy/preview-deployments)

## Homepage and styling notes

The homepage is a custom-mode page. A few Mintlify constraints matter:

- Tailwind is v3 only. **Arbitrary values are not supported**
  (`w-[350px]`, `animate-[...]`). Put those values in `style.css`.
- User Tailwind classes are compiled with a `mint-` prefix. Classes that
  Mintlify does not ship, such as `max-w-8xl`, do nothing unless you also
  define them in CSS. The homepage max width lives on `.cc-hero` in
  `style.css` (`90rem`). Do not delete it to “fix” overflow.
- The intro copy uses `lg:max-w-5xl` so the lock graphic has room from
  1024px up. The hero background is hidden below 1024px.
- Prefer Tailwind or `style.css` over inline `style` props. Inline styles
  can flash on custom-mode pages.

### Snippets

- Export named **arrow** components (`export const Foo = () => {}`).
  `function` declarations and `export default` are not supported.
- Import snippets with the full path and extension:
  `import { Foo } from "/snippets/Foo.tsx"`.
- If snippet A renders snippet B, the **MDX page** must import both.
  Relative imports between snippets fail at build time.
- Do not add npm packages for use inside snippets. Mintlify does not bundle
  them.

## Raise a pull request

1. Start from an up-to-date `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/short-description
   ```

2. Make the change. Preview with `mint dev` and run `mint validate`.

3. Commit with a conventional subject (`feat:`, `fix:`, `docs:`).

4. Push and open a PR against `main`:

   ```bash
   git push -u origin HEAD
   gh pr create --base main --title "feat: short description" --body "$(cat <<'EOF'
   ## Summary

   - What changed
   - Why

   ## Test plan

   - [ ] `mint dev` and check the changed pages
   - [ ] Light and dark mode
   - [ ] 375px and 1024px if the homepage or layout changed
   EOF
   )"
   ```

5. Automatic Mintlify previews only run for PRs targeting the **deployment
   branch** (`main`), and only on Pro/Enterprise. If the check is
   **skipped** with “No eligible deployments found for changes”, the
   dashboard Git Settings almost certainly point at the wrong repo, branch,
   or content subdirectory. You can still create a manual preview from
   **Activity → Previews → Create custom preview** and pass the branch name.

Do not open PRs from a fork. The Mintlify GitHub App cannot build those.

## Troubleshooting

| Symptom | What to try |
| --- | --- |
| `mint` not found | `npm i -g mint` |
| Preview missing search / assistant | `mint login`, then `mint status` |
| Preview looks unlike production | `mint update` |
| `sharp` / darwin-arm64 error | Node 20.17+, reinstall `mint` |
| CLI client version is `none` | Allowlist `releases.mintlify.com` |
| Unknown CLI errors | Delete `~/.mintlify` and run `mint dev` again |
| PR preview skipped | Check dashboard Git Settings; try a manual preview |
