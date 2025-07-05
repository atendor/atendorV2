import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Dialog overlay for displaying content on top of the page.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Open: Story = {
  render: (args) => (
    <Modal {...args}>
      <h3 className="font-bold text-lg">Modal Title</h3>
      <p className="py-4">This is an open modal.</p>
      <Button onClick={args.onClose}>Close</Button>
    </Modal>
  ),
  args: {
    open: true,
  },
};
