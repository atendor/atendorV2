import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'Collapse panels to show and hide content.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Item 1', content: <p>First content</p> },
      { title: 'Item 2', content: <p>Second content</p> }
    ]
  }
};
