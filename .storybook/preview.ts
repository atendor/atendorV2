import type { Preview } from "@storybook/react";
import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
      current: 'light'
    }
  },
};

export default preview;
