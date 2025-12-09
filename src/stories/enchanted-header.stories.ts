import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-header';
import { HEADER_VARIANT } from '../types/cssClassEnums';

const meta: Meta = {
  title: 'Navigation/enchanted-header',
  component: 'enchanted-header',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        HEADER_VARIANT.HEADER_AUTHORING,
        HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE,
        HEADER_VARIANT.HEADER_ENDUSER,
      ],
      description: 'Header variant',
      defaultValue: HEADER_VARIANT.HEADER_AUTHORING,
    },
    showBackIcon: {
      control: 'boolean',
      description: 'Show back icon',
      defaultValue: false,
    },
    isSideNavOpen: {
      control: 'boolean',
      description: 'Is side nav open',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: 'Header title',
      defaultValue: 'Header Title',
    },
    color: {
      control: { type: 'color' },
      description: 'Header color',
      defaultValue: '#000000',
    },
  },
  args: {
    variant: HEADER_VARIANT.HEADER_AUTHORING,
    showBackIcon: false,
    isSideNavOpen: false,
    disabled: false,
    title: 'Header Title',
    color: 'rgba(0, 0, 0, .32)',
  },
  parameters: {
    docs: {
      description: {
        component: 'Header component with controls for variant and boolean properties.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  variant: string;
  showBackIcon: boolean;
  isSideNavOpen: boolean;
  disabled: boolean;
  title: string;
  color: string;
}>;

export const EnchantedHeader: Story = {
  render: (args) => {
    return html`
      <enchanted-header
        .variant=${args.variant}
        ?showBackIcon=${args.showBackIcon}
        ?isSideNavOpen=${args.isSideNavOpen}
        ?disabled=${args.disabled}
        .title=${args.title}
        .color=${args.color}
      ></enchanted-header>
    `;
  },
  name: 'EnchantedHeader',
};
