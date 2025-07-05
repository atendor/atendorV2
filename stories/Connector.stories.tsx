import type { Meta, StoryObj } from '@storybook/react';
import { Connector } from '../components';

const meta: Meta<typeof Connector> = {
  title: 'Components/Connector',
  component: Connector,
  parameters: {
    docs: {
      description: {
        component: 'Shows connection between nodes.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Connector>;

export const Simple: Story = {
  args: {
    from: 'A',
    to: 'B'
  }
};
