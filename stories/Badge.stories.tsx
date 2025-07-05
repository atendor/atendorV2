import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Small label for statuses and counts.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'Badge',
    color: 'primary'
  }
};
