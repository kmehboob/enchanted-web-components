import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-list';
import '../components/atomic-component/enchanted-list-item';

/**
 * @typedef EnchantedListProps
 * Props for the enchanted-list web component.
 *
 * @property role - The ARIA role for the list.
 */
export interface EnchantedListProps {
  role?: string;
}

const meta: Meta<EnchantedListProps> = {
  title: 'Data Display/enchanted-list',
  tags: ['autodocs'],
  argTypes: {
    role: { control: 'text', description: 'The ARIA role for the list.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    role: '',
  },
  render: (args) => {
    return html`
      <enchanted-list role="${args.role}">
        <enchanted-list-item>Item 1</enchanted-list-item>
        <enchanted-list-item>Item 2</enchanted-list-item>
        <enchanted-list-item>Item 3</enchanted-list-item>
      </enchanted-list>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedListProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <enchanted-list>
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
          </enchanted-list>
        </div>
        <div>
          <div>With role="listbox"</div>
          <enchanted-list role="listbox">
            <enchanted-list-item>Option A</enchanted-list-item>
            <enchanted-list-item>Option B</enchanted-list-item>
          </enchanted-list>
        </div>
        <div>
          <div>Empty List</div>
          <enchanted-list></enchanted-list>
        </div>
        <div>
          <div>Custom Content</div>
          <enchanted-list>
            <li style="color: red;">Custom HTML Item</li>
            <enchanted-list-item>Standard Item</enchanted-list-item>
          </enchanted-list>
        </div>
      </div>
    `;
  },
};
