import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components';
import { Button } from '../components';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Displays informative text when hovering over an element.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    content: 'Tooltip text',
    position: 'top'
  }
};
