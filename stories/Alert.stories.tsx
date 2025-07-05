import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Notification element with contextual color.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    children: 'Info alert',
    color: 'info',
  },
};
