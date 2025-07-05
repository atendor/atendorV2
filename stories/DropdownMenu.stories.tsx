import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../components';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: 'Menu with a trigger to reveal list items.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </DropdownMenu>
  ),
  args: {
    label: 'Open menu'
  }
};
