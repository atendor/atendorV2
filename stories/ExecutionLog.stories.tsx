import type { Meta, StoryObj } from '@storybook/react';
import { ExecutionLog } from '../components';

const meta: Meta<typeof ExecutionLog> = {
  title: 'Components/ExecutionLog',
  component: ExecutionLog,
  parameters: {
    docs: {
      description: {
        component: 'Displays execution log lines.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof ExecutionLog>;

export const Sample: Story = {
  args: {
    entries: ['Started', 'Finished']
  }
};
