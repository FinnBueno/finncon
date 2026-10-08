# FinnCon

A static event website using Vite, React, TypeScript, styled-components, React Bootstrap, and Bootstrap 5.
No backend, router, or business logic is included.

## Development

Use a current Node.js LTS release that meets Vite's requirement (Node 20.19+ or 22.12+).

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. On Windows, `npm.cmd` avoids PowerShell execution-policy issues. On other platforms, use `npm`.

## Customize

- `src/App.tsx`: header, responsive navigation, event sections, and footer.
- `src/styles.ts`: named styled components and global colors, typography, spacing, and responsive styles.
- `src/main.tsx`: imports Bootstrap CSS and renders the styled-components global styles.
- `index.html`: page title and description.

The event name, copy, date, venue, and programme are placeholders. Replace them with actual event information before publishing.
The hero uses an externally hosted Unsplash stock photo as a placeholder, not a photo of the actual event. Replace its URL in `src/styles.ts` with your own image, ideally stored in `public/` so the site does not depend on an external image service.

Use named styled components for custom styling. React Bootstrap still generates Bootstrap classes internally; Bootstrap's JavaScript bundle is not needed.

## Checks and Publishing

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

The build checks TypeScript and writes deployable static files to `dist/`. Preview serves that build locally.
Deploy `dist/` to a static hosting provider. For hosting under a subdirectory, configure Vite's `base` setting to match the deployment path before building.
