import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-panel';
import '../components/atomic-component/enchanted-button';

/**
 * @typedef EnchantedPanelProps
 * Props for the enchanted-panel web component.
 *
 * @property open - Whether the panel is open
 * @property title - The panel title
 * @property position - The panel position (left, right, etc.)
 */
export interface EnchantedPanelProps {
  open?: boolean;
  title?: string;
  position?: string;
}

const meta: Meta<EnchantedPanelProps> = {
  title: 'Overlay/enchanted-panel',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether the panel is open', table: { defaultValue: { summary: 'false' } } },
    title: { control: 'text', description: 'Panel title', table: { defaultValue: { summary: '' } } },
    position: { control: 'text', description: 'Panel position', table: { defaultValue: { summary: 'left' } } },
  },
  args: {
    open: true,
    title: 'Panel Title',
    position: 'left',
  },
  render: (args) => {
    return html`
      <enchanted-panel
        ?open=${args.open}
        title="${args.title}"
        position="${args.position}"
      >
        <div slot="center-title-content">Center Title Content</div>
        <div slot="content">
          <p>This is the panel content area. You can put any HTML or components here.</p>

        </div>
      </enchanted-panel>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedPanelProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (Open, Left)</div>
          <enchanted-panel open title="Panel Title" position="left">
            <div slot="center-title-content">Center Title Content</div>
            <div slot="content">Panel content goes here.</div>
          </enchanted-panel>
        </div>
        <div>
          <div>Right Position</div>
          <enchanted-panel open title="Right Panel" position="right">
            <div slot="content">Panel on the right.</div>
          </enchanted-panel>
        </div>
      </div>
    `;
  },
};
