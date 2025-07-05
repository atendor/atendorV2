import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../components';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Toggle component for on/off states.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable feature'
  }
};
