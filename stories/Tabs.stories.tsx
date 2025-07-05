import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'Navigation component switching between views.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} />
  ),
  args: {
    items: [
      { key: 'first', label: 'First' },
      { key: 'second', label: 'Second' },
      { key: 'third', label: 'Third' }
    ],
    activeKey: 'first'
  }
};
