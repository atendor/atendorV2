import type { Meta, StoryObj } from '@storybook/react';
import Select from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Dropdown select element with optional label.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Choose one</option>
      <option value="a">Option A</option>
      <option value="b">Option B</option>
    </Select>
  ),
  args: {
    label: 'Select option',
  },
};
