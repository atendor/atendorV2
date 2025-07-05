import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Toggleable checkbox with optional label.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms',
  },
};
