import type { Meta, StoryObj } from '@storybook/react';
import NodeSidebar from '../components/NodeSidebar';
import NodeBlock from '../components/NodeBlock';

const meta: Meta<typeof NodeSidebar> = {
  title: 'Components/NodeSidebar',
  component: NodeSidebar,
  parameters: {
    docs: {
      description: {
        component: 'Sidebar for node list or options.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof NodeSidebar>;

export const Basic: Story = {
  render: (args) => (
    <NodeSidebar {...args}>
      <NodeBlock title="Example Node" />
    </NodeSidebar>
  )
};
