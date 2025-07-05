import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Text input field with optional label.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here',
  },
};
