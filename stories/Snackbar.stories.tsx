import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from '../components';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    docs: {
      description: {
        component: 'Temporary message popup that appears near the bottom.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Open: Story = {
  args: {
    message: 'Saved successfully',
    open: true
  }
};
