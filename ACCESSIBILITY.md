# Accessibility Guide

This design system aims to provide keyboard-friendly and screen reader friendly components.
All interactive elements show a visible focus ring thanks to DaisyUI styles and can be reached using the `Tab` key.

## Component overview

### Button
- Uses the native `<button>` element.
- Activate with **Enter** or **Space** when focused.
- Storybook: **Components/Button → Primary** demonstrates focus and activation.

### Input
- `<input>` wrapped in a `<label>`.
- `aria-label` is taken from the label text when provided.
- Storybook: **Components/Input → Default** shows standard keyboard entry.

### Checkbox
- `<input type="checkbox">` with optional label.
- Toggle using **Space** when focused.
- Storybook: **Components/Checkbox → Default**.

### Select
- Built with `<select>`.
- Open with **Alt+Down** or **Space**, navigate with arrow keys.
- Storybook: **Components/Select → Basic**.

### Alert
- `<div role="alert">` for non-interactive messages.
- Not focusable, announced automatically by screen readers.
- Storybook: **Components/Alert → Info**.

### Card
- Semantic `<div>` container for grouping content.
- Not interactive by itself. The **Components/Card → Basic** story includes keyboard-focusable children.

### Modal
- `<div role="dialog">` with an optional close button.
- Focus should stay within the modal while open; navigate with **Tab** and close with the button.
- Storybook: **Components/Modal → Open** shows keyboard interaction.

