import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from '../components';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    docs: {
      description: {
        component: 'Animated spinner used to indicate loading state.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {}
};
