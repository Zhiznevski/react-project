import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './button';
import '../../../styles.css';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'large',
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: 'small',
    variant: 'secondary',
  },
};

export const Medium: Story = {
  args: {
    children: 'medium',
    variant: 'danger',
  },
};
