# Project Notes

- This is a static event website built with Vite, React, TypeScript, styled-components, React Bootstrap, and Bootstrap 5.
- Keep the project simple. Do not add a backend, router, or business logic unless requested.
- Import Bootstrap CSS in src/main.tsx and render GlobalStyle before App.
- Event sections and shared header/footer components live in src/App.tsx. Named styled components and global styles live in src/styles.ts.
- Use styled-components for custom styling instead of authored CSS classes. Keep React Bootstrap for its existing components.
- Event details and the stock photo are placeholders to replace before publishing.
- Use npm.cmd for PowerShell commands on Windows.
- Validate changes with npm.cmd run build and npm.cmd run lint.

## Setup Checklist

- [x] Requirements confirmed: React, TypeScript, Vite, React Bootstrap; static site only.
- [x] Scaffold created and dependencies installed.
- [x] Responsive starter page and project documentation added.
- [x] No additional editor extensions required.
- [x] Production build and lint checks passed.
- [x] Development task launched; desktop layout, image loading, mobile overflow, and navigation checked.