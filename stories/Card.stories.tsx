import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button, Input } from '../components';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Container for grouping content with a shadow.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: (args) => (
    <Card {...args}>
      <Input placeholder="Type here" />
      <Button>Button</Button>
    </Card>
  ),
};
