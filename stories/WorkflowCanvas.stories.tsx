import type { Meta, StoryObj } from '@storybook/react';
import { WorkflowCanvas } from '../components';
import { NodeBlock } from '../components';
import { Connector } from '../components';

const meta: Meta<typeof WorkflowCanvas> = {
  title: 'Components/WorkflowCanvas',
  component: WorkflowCanvas,
  parameters: {
    docs: {
      description: {
        component: 'Container for nodes and connectors.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof WorkflowCanvas>;

export const Basic: Story = {
  render: (args) => (
    <WorkflowCanvas {...args}>
      <NodeBlock title="Node A" />
      <Connector from="A" to="B" />
      <NodeBlock title="Node B" />
    </WorkflowCanvas>
  )
};
