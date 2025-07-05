import type { Meta, StoryObj } from '@storybook/react';
import { NodeBlock } from '../components';

const meta: Meta<typeof NodeBlock> = {
  title: 'Components/NodeBlock',
  component: NodeBlock,
  parameters: {
    docs: {
      description: {
        component: 'Placeholder node block.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof NodeBlock>;

export const Default: Story = {
  args: {
    title: 'My Node',
    children: 'Content'
  }
};
