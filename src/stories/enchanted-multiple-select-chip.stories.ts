import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-multiple-select-chip';

/**
 * @typedef OptionData
 * @property id - Unique id for the option
 * @property name - Display name
 * @property value - Value
 */
export interface OptionData {
  id: string;
  name: string;
  value: string;
}

/**
 * @typedef EnchantedMultipleSelectChipProps
 * Props for the enchanted-multiple-select-chip web component.
 *
 * @property options - The selectable options
 * @property selectedValues - The selected options
 * @property label - The input label
 * @property placeholder - The input placeholder
 * @property disabled - Disabled state
 * @property error - Error state
 * @property showHelperText - Show helper text
 * @property helperText - Helper text
 * @property showRemoveLabel - Show remove label
 * @property emptyOptions - Show as empty
 * @property clearIcon - Show clear icon
 * @property customWidth - Custom width
 */
export interface EnchantedMultipleSelectChipProps {
  options?: OptionData[];
  selectedValues?: OptionData[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  showHelperText?: boolean;
  helperText?: string;
  showRemoveLabel?: boolean;
  emptyOptions?: boolean;
  clearIcon?: boolean;
  customWidth?: string;
}

const OPTIONS: OptionData[] = [
  { id: 'apple', name: 'Apple', value: 'apple' },
  { id: 'banana', name: 'Banana', value: 'banana' },
  { id: 'cherry', name: 'Cherry', value: 'cherry' },
  { id: 'date', name: 'Date', value: 'date' },
];

const meta: Meta<EnchantedMultipleSelectChipProps> = {
  title: 'Input/enchanted-multiple-select-chip',
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object', description: 'Selectable options', table: { defaultValue: { summary: '[]' } } },
    selectedValues: { control: 'object', description: 'Selected options', table: { defaultValue: { summary: '[]' } } },
    label: { control: 'text', description: 'Input label', table: { defaultValue: { summary: '' } } },
    placeholder: { control: 'text', description: 'Input placeholder', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
    error: { control: 'boolean', description: 'Error', table: { defaultValue: { summary: 'false' } } },
    showHelperText: { control: 'boolean', description: 'Show helper text', table: { defaultValue: { summary: 'false' } } },
    helperText: { control: 'text', description: 'Helper text', table: { defaultValue: { summary: '' } } },
    showRemoveLabel: { control: 'boolean', description: 'Show remove label', table: { defaultValue: { summary: 'false' } } },
    emptyOptions: { control: 'boolean', description: 'Show as empty', table: { defaultValue: { summary: 'false' } } },
    clearIcon: { control: 'boolean', description: 'Show clear icon', table: { defaultValue: { summary: 'true' } } },
    customWidth: { control: 'text', description: 'Custom width', table: { defaultValue: { summary: '' } } },
  },
  args: {
    options: OPTIONS,
    selectedValues: [],
    label: 'Fruits',
    placeholder: 'Select fruits',
    disabled: false,
    error: false,
    showHelperText: false,
    helperText: '',
    showRemoveLabel: false,
    emptyOptions: false,
    clearIcon: true,
    customWidth: '',
  },
  render: (args) => {
    return html`
      <enchanted-multiple-select-chip
        .options=${args.options}
        .selectedValues=${args.selectedValues}
        label="${args.label}"
        placeholder="${args.placeholder}"
        ?disabled=${args.disabled}
        ?error=${args.error}
        ?showHelperText=${args.showHelperText}
        helperText="${args.helperText}"
        ?showRemoveLabel=${args.showRemoveLabel}
        ?emptyOptions=${args.emptyOptions}
        ?clearIcon=${args.clearIcon}
        customWidth="${args.customWidth}"
      ></enchanted-multiple-select-chip>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedMultipleSelectChipProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[OPTIONS[0], OPTIONS[1]]}
          label="Default (with chips)"
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[]}
          label="Default (no chips)"
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[OPTIONS[2]]}
          label="Disabled"
          ?disabled=${true}
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[OPTIONS[3]]}
          label="Error"
          ?error=${true}
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[OPTIONS[0]]}
          label="With Helper Text"
          ?showHelperText=${true}
          helperText="You can select multiple fruits."
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${[]}
          .selectedValues=${[]}
          label="Empty Options"
          ?emptyOptions=${true}
          placeholder="No options available"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[OPTIONS[1]]}
          label="Custom Width"
          customWidth="300"
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
        <enchanted-multiple-select-chip
          .options=${OPTIONS}
          .selectedValues=${[OPTIONS[0]]}
          label="With Remove Label"
          ?showRemoveLabel=${true}
          placeholder="Select fruits"
        ></enchanted-multiple-select-chip>
      </div>
    `;
  },
};
