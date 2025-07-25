React Design System

A fully customizable, accessible, and scalable UI system built with React and Tailwind CSS.
Built with Reactbits, React, Tailwind CSS, Storybook, Lucide Icons, and the Geist font.

You can view the design system online at [https://atendor.xyz](https://atendor.xyz). In some deployments it may be served from the `/atendor-ds` path.


✨ Key Features

UI Kit: Reactbits https://github.com/DavidHDev/react-bits, fully customizable with design tokens and typography

Tech stack: React (TypeScript), Tailwind (4px grid), Lucide, Geist (Google Fonts)

Color tokens:

Primary: #925CFF / #7F4AFF

Accent: #37D7FF / #2DB8E4

Secondary: #EADFFD / #3B2A58

Background: #FAFAFA / #09090B

Surface: #FFFFFF / #18181A

Muted: #F1F1F6 / #242428

Text: #231942 / #E2E2E8

Success: #30E39B / #22C55E

Error: #FF6680 / #F43F5E

Warning: #FFD666 / #FACC15

Accessibility: Keyboard navigation, visible focus, ARIA (see `ACCESSIBILITY.md`)

Animated Lucide icons on hover (scale/color)

Atomic folder structure ready for future backend integration


🗂️ Project Structure


/components/       # All base UI components
/tokens/           # Design tokens and theme settings
/styles/           # Global styles
/stories/          # Storybook stories (one per component, full docs)
/public/           # Static assets

.env.example       # Example for future API keys (N8N_API_URL)
README.md          # This documentation

🚀 Getting Started

1. Installation

Clone the repository and install dependencies:

git clone https://github.com/atendor/atendorV2.git
cd atendorV2
npm install

2. Start the development server

npm run dev

Open http://localhost:3000 to view the app.

3. Storybook

Run `npm run storybook` to open the component docs.
It is served by default at http://localhost:6006.

4. Development

All UI code lives in the `components/` directory.


All styling uses Tailwind CSS configured for a 4px grid and the design system color tokens (see `tokens/`).


The main font is Geist, loaded via Google Fonts in the application.

Lucide icons are imported via npm and used in components with optional hover animation.

Each component is accessible (ARIA roles, keyboard, focus ring). For details see `ACCESSIBILITY.md`.

All mock data is used for demo purposes only. Where real data/API integration is needed, you’ll see clear TODOs and code comments.

For future backend and the design system login, set up your credentials in `.env.local` based on the sample `.env.example` file:

N8N_API_URL=https://your-api-url-here
NEXT_PUBLIC_DS_USER=your-ds-user
NEXT_PUBLIC_DS_PASS=your-ds-pass

🧩 Base Components Checklist

- Alert
- Button
- Card
- Checkbox
- Input
- Modal
- Select

Components not available in Reactbits are composed with existing primitives and placeholder logic.

### Usage Examples

```tsx
import { Button } from "./components";

export default function Example() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
```

```tsx
import { Input } from "./components";

export default function Example() {
  return <Input label="Email" placeholder="you@example.com" />;
}
```

```tsx
import { Card } from "./components";

export default function Example() {
  return (
    <Card>
      <p>Your content here</p>
    </Card>
  );
}
```


🔮 Future Custom Modules

Placeholder folders (e.g., `builder/`) are scaffolded for upcoming modules like Visual Builder and AI integrations.

README files indicate where to add custom modules and API logic.

🛠️ Contributing & Customization

Fork the repo, create a feature branch, open a Pull Request.

Follow the 4px grid and color palette for all custom components.

Use only Lucide icons via npm imports (no raw SVGs).

Run `npm run lint` before submitting changes to check for ESLint errors.

All code, docs, and comments must be in English.

🔐 Environment Variables

.env.example is included:

N8N_API_URL=https://your-n8n-api-url.example
NEXT_PUBLIC_DS_USER=your-ds-user
NEXT_PUBLIC_DS_PASS=your-ds-pass

Use .env.local for your local setup. No secrets are committed to the repo.

👀 License

MIT

💬 Need Help?

Open an issue or Pull Request if you need help.

06-07-2025
