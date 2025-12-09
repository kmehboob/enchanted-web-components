import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-chip';

const meta: Meta = {
  title: 'Data display/enchanted-chip',
  component: 'enchanted-chip',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'primary', 'secondary'],
      description: 'Chip variant',
      defaultValue: 'default',
    },
    name: {
      control: 'text',
      description: 'Chip name',
      defaultValue: 'Chip Name',
    },
    count: {
      control: { type: 'number', min: 0, max: 99, step: 1 },
      description: 'Chip count',
      defaultValue: 0,
    },
    showChipCount: {
      control: 'boolean',
      description: 'Show chip count',
      defaultValue: false,
    },
    showAvatar: {
      control: 'boolean',
      description: 'Show avatar',
      defaultValue: false,
    },
    clearIcon: {
      control: 'boolean',
      description: 'Show clear icon',
      defaultValue: false,
    },
  },
  args: {
    variant: 'default',
    name: 'Chip Name',
    count: 0,
    showChipCount: false,
    showAvatar: false,
    clearIcon: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Chip component with controls for variant and boolean properties.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  variant: string;
  name: string;
  count: number;
  showChipCount: boolean;
  showAvatar: boolean;
  clearIcon: boolean;
}>;

export const EnchantedChip: Story = {
  render: (args) => {
    return html`
      <enchanted-chip
        .name=${args.name}
        .count=${args.count}
        ?showChipCount=${args.showChipCount}
        ?showAvatar=${args.showAvatar}
        ?clearIcon=${args.clearIcon}
      ></enchanted-chip>
    `;
  },
  name: 'EnchantedChip',
};
