import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'Circular user image display.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://placekitten.com/100/100',
    alt: 'Avatar'
  }
};
