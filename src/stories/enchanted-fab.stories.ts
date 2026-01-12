import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit';
import '../components/atomic-component/enchanted-fab';
import '../components/atomic-component/enchanted-badge';

/**
 * @typedef EnchantedFabProps
 * Props for the enchanted-fab web component.
 *
 * @property badge - Whether to show the badge.
 * @property type - The type of the FAB (contained, outlined, AI).
 * @property extended - Whether the FAB is extended.
 * @property disabled - Whether the FAB is disabled.
 * @property label - The label for the FAB.
 * @property icon - The icon to display in the FAB. Pass any icon name from the enchanted-icon repository.
 */
export interface EnchantedFabProps {
  badge?: boolean;
  type?: 'contained' | 'outlined' | 'AI';
  extended?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: TemplateResult;
}

const meta: Meta<EnchantedFabProps> = {
  title: 'Inputs/enchanted-fab',
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: { type: 'boolean' },
      description: 'Whether to show the badge.',
      table: { category: 'Appearance', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    type: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'AI'],
      description: 'The type of the FAB.',
      table: { category: 'Appearance', type: { summary: 'string' }, defaultValue: { summary: 'contained' } },
    },
    extended: {
      control: { type: 'boolean' },
      description: 'Whether the FAB is extended.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the FAB is disabled.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the FAB.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    icon: {
      control: { type: 'select' },
      options: [
        'ai-sparkle',
        'search',
      ],
      description: 'Select an icon from the enchanted-icon repository.',
      table: {
        category: 'Content',
        type: { summary: 'TemplateResult' },
        defaultValue: { summary: 'ai-sparkle' },
      },
    },
  },
  args: {
    badge: true,
    type: 'contained',
    extended: false,
    disabled: false,
    label: 'Default FAB',
    icon: html`<icon-ai-sparkle></icon-ai-sparkle>`,
  },
  parameters: {
    docs: {
      description: {
        component: 'Floating Action Button (FAB) component with support for badges, multiple types, and extended mode. ' +
          'Customizable via properties and slots for flexible usage in various contexts.'
      }
    }
  },
  render: (args) => {
    const iconMap = {
      'ai-sparkle': html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
          <path
            d="M21.8119 14.3881L18.0667 4.26667L14.3214 14.3881L4.2 
              18.1333L14.3214 21.8786L18.0667 32L21.8119 21.8786L31.9333 
              18.1333L21.8119 14.3881ZM26.1484 18.1333L20.1911 15.929L18.0667 
              10.1877L15.9422 15.929L9.98497 18.1333L15.9422 20.3377L18.0667 
              26.0789L20.1911 20.3377L26.1484 18.1333ZM5.28213 7.4512L6.86667 
              11.7333L8.4512 7.4512L12.7333 5.86667L8.4512 4.28213L6.86667 
              0L5.28213 4.28213L1 5.86667L5.28213 7.4512ZM6.78497 5.86667L6.86667 
              5.8969L6.94836 5.86667L6.86667 5.83644L6.78497 5.86667Z"
            fill="currentColor"
            stroke="none"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      `,
      'search': html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
          <path d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm11.71 3.29-3.4-3.4a1 1 0 0 0-1.42 1.42l3.4 3.4a1 1 0 0 0 1.42-1.42z"/>
        </svg>
      `,
      'custom': args.icon, // Allow passing custom SVGs directly
    };

    const selectedIcon = typeof args.icon === 'string' && Object.prototype.hasOwnProperty.call(iconMap, args.icon)
      ? iconMap[args.icon]
      : args.icon || html``;

    return html`
      <enchanted-fab
        .badge=${args.badge}
        .type=${args.type}
        .extended=${args.extended}
        .disabled=${args.disabled}
        .label=${args.label}
        .icon=${selectedIcon}
      ></enchanted-fab>
    `;
  },
};

export default meta;

type Story = StoryObj<EnchantedFabProps>;

export const Default: Story = {};
export const Extended: Story = {
  args: {
    extended: true,
    label: 'Extended FAB',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled FAB',
  },
};