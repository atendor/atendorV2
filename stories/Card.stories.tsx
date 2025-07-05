import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
