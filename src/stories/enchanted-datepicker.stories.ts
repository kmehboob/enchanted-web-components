import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-datepicker';
import { DEFAULT_CALENDAR_LOCALE } from '../types/enchanted-datepicker';

const meta: Meta = {
  title: 'Input/enchanted-datepicker',
  component: 'enchanted-datepicker',
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: { type: 'radio' },
      options: [
        'en',
        'fr',
        'de',
        'es',
        'it',
        'zh',
        'ja',
      ],
      description: 'Calendar locale',
      defaultValue: DEFAULT_CALENDAR_LOCALE,
    },
    showInputAction: {
      control: 'boolean',
      description: 'Show input action',
      defaultValue: false,
    },
    requiredField: {
      control: 'boolean',
      description: 'Required field',
      defaultValue: false,
    },
    open: {
      control: 'boolean',
      description: 'Open',
      defaultValue: false,
    },
    hideHelperText: {
      control: 'boolean',
      description: 'Hide helper text',
      defaultValue: false,
    },
    showRemoveLabel: {
      control: 'boolean',
      description: 'Show remove label',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Label',
      defaultValue: 'Label',
    },
    helperIconTooltip: {
      control: 'text',
      description: 'Helper icon tooltip',
      defaultValue: 'Label helper tooltip',
    },
    field: {
      control: 'text',
      description: 'Field',
      defaultValue: '',
    },
  },
  args: {
    locale: DEFAULT_CALENDAR_LOCALE,
    showInputAction: false,
    requiredField: false,
    open: false,
    hideHelperText: false,
    showRemoveLabel: false,
    disabled: false,
    label: 'Label',
    helperIconTooltip: 'Label helper tooltip',
    field: '',
  },
  parameters: {
    docs: {
      description: {
        component: 'Datepicker component with controls for locale and boolean properties.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  locale: string;
  showInputAction: boolean;
  requiredField: boolean;
  open: boolean;
  hideHelperText: boolean;
  showRemoveLabel: boolean;
  disabled: boolean;
  label: string;
  helperIconTooltip: string;
  field: string;
}>;

export const EnchantedDatepicker: Story = {
  render: (args) => {
    return html`
      <enchanted-datepicker
        .locale=${args.locale}
        ?showInputAction=${args.showInputAction}
        ?requiredField=${args.requiredField}
        ?open=${args.open}
        ?hideHelperText=${args.hideHelperText}
        ?showRemoveLabel=${args.showRemoveLabel}
        ?disabled=${args.disabled}
        .label=${args.label}
        .helperIconTooltip=${args.helperIconTooltip}
        .field=${args.field}
      ></enchanted-datepicker>
    `;
  },
  name: 'EnchantedDatepicker',
};
