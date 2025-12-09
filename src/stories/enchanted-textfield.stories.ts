import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-textfield';
import { svgIconClear } from '../_tests_/assets/svg-clear';
import { svgIconSearch } from '../_tests_/assets/svg-search';

/**
 * @interface EnchantedInputTextfieldProps
 * Props for the enchanted-textfield web component.
 *
 * @property value - The value of the textfield.
 * @property type - The input type (e.g., 'text', 'password').
 * @property label - The label for the textfield.
 * @property placeholder - The placeholder text for the textfield.
 * @property disabled - If true, disables the textfield.
 * @property clearIconUrl - The URL for the clear icon.
 * @property actionIconUrl - The URL for the action icon.
 */
export interface EnchantedInputTextfieldProps {
  value?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  clearIconUrl?: string;
  actionIconUrl?: string;
}

const meta: Meta<EnchantedInputTextfieldProps> = {
  title: 'Input/enchanted-textfield',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'The value of the textfield.', table: { defaultValue: { summary: '' } } },
    type: { control: 'text', description: 'The input type (e.g., "text", "password").', table: { defaultValue: { summary: 'text' } } },
    label: { control: 'text', description: 'The label for the textfield.', table: { defaultValue: { summary: '' } } },
    placeholder: { control: 'text', description: 'The placeholder text for the textfield.', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'If true, disables the textfield.', table: { defaultValue: { summary: 'false' } } },
    clearIconUrl: { control: 'text', description: 'The URL for the clear icon.', table: { defaultValue: { summary: '' } } },
    actionIconUrl: { control: 'text', description: 'The URL for the action icon.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    value: '',
    type: 'text',
    label: 'Text Field',
    placeholder: 'Enter text',
    disabled: false,
    clearIconUrl: '',
    actionIconUrl: '',
  },
  render: (args) => {return html`
    <enchanted-textfield
      .value=${args.value}
      type="${args.type}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?disabled=${args.disabled}
      .clearIconUrl=${svgIconClear}
      .actionIconUrl=${svgIconSearch}
    ></enchanted-textfield>
  `;},
};

export default meta;
type Story = StoryObj<EnchantedInputTextfieldProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <enchanted-textfield
          label="Text Field"
          placeholder="Enter text"
        ></enchanted-textfield>
      </div>
      <div>
        <div>Disabled</div>
        <enchanted-textfield
          label="Text Field"
          value="Disabled"
          ?disabled=${true}
        ></enchanted-textfield>
      </div>
      <div>
        <div>With Placeholder</div>
        <enchanted-textfield
          label="Text Field"
          placeholder="Type here..."
        ></enchanted-textfield>
      </div>
      <div>
        <div>With Clear Icon</div>
        <enchanted-textfield
          label="Text Field"
          clearIconUrl="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
        ></enchanted-textfield>
      </div>
      <div>
        <div>With Action Icon</div>
        <enchanted-textfield
          label="Text Field"
          actionIconUrl="https://cdn-icons-png.flaticon.com/512/709/709586.png"
        ></enchanted-textfield>
      </div>
    </div>
  `;},
};
