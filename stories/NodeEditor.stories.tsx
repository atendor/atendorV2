import type { Meta, StoryObj } from '@storybook/react';
import { NodeEditor } from '../components';
import { Input } from '../components';

const meta: Meta<typeof NodeEditor> = {
  title: 'Components/NodeEditor',
  component: NodeEditor,
  parameters: {
    docs: {
      description: {
        component: 'Interface for editing a node.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof NodeEditor>;

export const Form: Story = {
  render: (args) => (
    <NodeEditor {...args}>
      <Input label="Name" />
    </NodeEditor>
  )
};
