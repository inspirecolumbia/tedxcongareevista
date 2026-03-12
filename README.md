# TEDxCongaree Vista — Official Event Website

The official website for **TEDxCongaree Vista**, a TEDx event independently organized in the Congaree Vista neighborhood of Columbia, South Carolina. The site provides event information, speaker profiles, sponsorship opportunities, news updates, and details about the organizing team.

> "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience."

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/)) |
| Animations | [Motion](https://motion.dev/) (Framer Motion) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [GitHub Pages](https://pages.github.com/) via `gh-pages` |

---

## Pages

| Route | Description |
|---|---|
| `/` | **Home** — Hero section, event highlights, and key stats |
| `/speakers` | **Speakers** — Profiles of confirmed TEDx speakers |
| `/sponsors` | **Sponsors** — Current sponsors and sponsorship tier information |
| `/support` | **Support** — Donation info, volunteer roles, and how to get involved |
| `/news` | **News** — Latest announcements and updates |
| `/about` | **About** — Team bios, organization values, and mission statement |
| `/about-ted` | **About TED** — Background on the TED and TEDx programs |

---

## Running the Code Locally

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or later recommended) and npm.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/changemakers-events/tedxcongareevista.git
   cd tedxcongareevista
   ```

2. **Install dependencies:**
   ```bash
   npm i
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` by default.

---

## Building for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` directory.

---

## Deployment

The site is deployed to GitHub Pages. To deploy a new version:

```bash
npm run deploy
```

This runs `vite build` and then publishes the `dist/` folder to the `gh-pages` branch.

---

## Project Structure

```
tedxcongareevista/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, headshots, and other media
│   ├── components/     # React page and UI components
│   │   ├── ui/         # Reusable shadcn/ui base components
│   │   └── figma/      # Figma-generated utility components
│   ├── styles/         # Global and shared CSS
│   ├── types/          # Shared TypeScript types
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── package.json
```

---

## Attributions

- UI components from [shadcn/ui](https://ui.shadcn.com/), used under the [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).
- Photos from [Unsplash](https://unsplash.com), used under the [Unsplash License](https://unsplash.com/license).

---

## Contact

For questions about the event or website, reach out to the team at **info@tedxcongareevista.com**.
