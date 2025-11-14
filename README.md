# GhostShare Landing Page

A single-page marketing site for **GhostShare** — the open-source, free, and 100% secure messaging platform.

## Features

- Hero, mission, feature, download, contact, and credits sections with the official GhostShare messaging.
- Responsive layout with a glassmorphism aesthetic and subtle gradient highlights.
- Accessible navigation (reduced mobile menu, aria labels) and quick contact actions.
- Clipboard helpers to copy the contact email plus a lightweight toast notification.

## Getting Started

```bash
npm install
npm run dev
```

The `dev` script spins up a static server on port `4173` using [`serve`](https://github.com/vercel/serve). Open the printed URL in your browser to explore the page.

## Quality checks

```bash
npm run lint        # HTMLHint pass/fail summary
npm run format      # Formats HTML/CSS/JS/MD via Prettier
npm run format:check
```

## Project structure

```
GhostShare/
├── index.html      # Main document with all sections
├── styles.css      # Visual design tokens, layout, and responsive rules
├── script.js       # Mobile navigation + clipboard helper
├── README.md
├── package.json
├── package-lock.json
└── .htmlhintrc
```

## Credits

All copy references originate from the GhostShare community brief provided by the project owners.
