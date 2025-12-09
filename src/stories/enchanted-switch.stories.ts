import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-switch';

/**
 * @typedef EnchantedSwitchProps
 * Props for the enchanted-switch web component.
 *
 * @property isChecked - Whether the switch is checked
 * @property isDisabled - Whether the switch is disabled
 */
export interface EnchantedSwitchProps {
  isChecked?: boolean;
  isDisabled?: boolean;
}

const meta: Meta<EnchantedSwitchProps> = {
  title: 'Input/enchanted-switch',
  tags: ['autodocs'],
  argTypes: {
    isChecked: { control: 'boolean', description: 'Checked', table: { defaultValue: { summary: 'false' } } },
    isDisabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    isChecked: false,
    isDisabled: false,
  },
  render: (args) => {
    return html`
      <enchanted-switch
        ?isChecked=${args.isChecked}
        ?isDisabled=${args.isDisabled}
      ></enchanted-switch>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedSwitchProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default (Unchecked)</div>
          <enchanted-switch></enchanted-switch>
        </div>
        <div>
          <div>Checked</div>
          <enchanted-switch isChecked></enchanted-switch>
        </div>
        <div>
          <div>Disabled</div>
          <enchanted-switch isDisabled></enchanted-switch>
        </div>
        <div>
          <div>Checked & Disabled</div>
          <enchanted-switch isChecked isDisabled></enchanted-switch>
        </div>
      </div>
    `;
  },
};
