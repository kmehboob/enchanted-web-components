import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit';
// Component imports
import '../components/atomic-component/enchanted-fab';
import '../components/atomic-component/enchanted-badge';

// Helper imports
import { EnchantedFabType } from '../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/ai--sparkle';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/arrows';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/circle';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/images';

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
  type?: EnchantedFabType;
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
      options: Object.values(EnchantedFabType),
      description: 'The type of the FAB.',
      table: { category: 'Appearance', type: { summary: Object.values(EnchantedFabType).join(' | ') }, defaultValue: { summary: EnchantedFabType.CONTAINED } },
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
        'arrows',
        'circle',
        'images'
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
    type: EnchantedFabType.CONTAINED,
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
      'ai-sparkle': html`<icon-ai-sparkle></icon-ai-sparkle>`,
      'arrows': html`<icon-arrows></icon-arrows>`,
      'circle': html`<icon-circle></icon-circle>`,
      'images': html`<icon-images></icon-images>`,
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