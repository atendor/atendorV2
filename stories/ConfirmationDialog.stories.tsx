import type { Meta, StoryObj } from '@storybook/react';
import ConfirmationDialog from '../components/ConfirmationDialog';

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
  parameters: {
    docs: {
      description: {
        component: 'Modal dialog asking the user to confirm or cancel an action.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof ConfirmationDialog>;

export const Open: Story = {
  args: {
    open: true,
    title: 'Delete item',
    message: 'Are you sure you want to delete this item?',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    onConfirm: () => alert('Confirmed'),
    onCancel: () => alert('Cancelled')
  }
};
