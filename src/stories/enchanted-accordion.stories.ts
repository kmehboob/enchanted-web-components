import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-accordion';

const meta: Meta = {
  title: 'Navigation/enchanted-accordion',
  component: 'enchanted-accordion',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['outlined', 'no-outline'],
      description: 'Accordion type',
      defaultValue: 'outlined',
    },
    showCheckbox: {
      control: 'boolean',
      description: 'Show checkbox',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
      defaultValue: false,
    },
    showSecondaryText: {
      control: 'boolean',
      description: 'Show secondary text',
      defaultValue: false,
    },
    open: {
      control: 'boolean',
      description: 'Open',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Label',
      defaultValue: 'Accordion label',
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text',
      defaultValue: 'Secondary text',
    },
  },
  args: {
    type: 'outlined',
    showCheckbox: false,
    disabled: false,
    showSecondaryText: false,
    open: false,
    label: 'Accordion label',
    secondaryText: 'Secondary text',
  },
  parameters: {
    docs: {
      description: {
        component: 'Accordion component with boolean and type property controls.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  type: 'outlined' | 'no-outline';
  showCheckbox: boolean;
  disabled: boolean;
  showSecondaryText: boolean;
  open: boolean;
  label: string;
  secondaryText: string;
}>;

export const EnchantedAccordion: Story = {
  render: (args) => {
    return html`
      <enchanted-accordion
        type=${args.type}
        .type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=${args.type}
        .type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=${args.type}
        .type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
    `;
  },
  name: 'EnchantedAccordion',
};
