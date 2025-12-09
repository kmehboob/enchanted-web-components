import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-search-center-layout';

/**
 * @typedef EnchantedSearchCenterLayoutProps
 * Props for the enchanted-search-center-layout web component.
 *
 * @property isTagsAvailable - Whether tags are available
 */
export interface EnchantedSearchCenterLayoutProps {
  isTagsAvailable?: boolean;
}

const meta: Meta<EnchantedSearchCenterLayoutProps> = {
  title: 'Layout/enchanted-search-center-layout',
  tags: ['autodocs'],
  argTypes: {
    isTagsAvailable: { control: 'boolean', description: 'Whether tags are available', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    isTagsAvailable: false,
  },
  render: (args) => {
    return html`
      <enchanted-search-center-layout ?isTagsAvailable=${args.isTagsAvailable}>
        <div slot="enchanted-header">
          <h2>Header Content</h2>
          <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
        </div>
        <div slot="enchanted-pagination">
          <button>Prev</button>
          <span>Page 1 of 10</span>
          <button>Next</button>
        </div>
        <div slot="search-input-container">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
        <div slot="search-output-container">
          <ul>
            <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
            <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
          </ul>
        </div>
        <div slot="tag-cloud">
          <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
          <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
        </div>
      </enchanted-search-center-layout>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedSearchCenterLayoutProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (No Tags)</div>
          <enchanted-search-center-layout>
            <div slot="enchanted-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="enchanted-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </enchanted-search-center-layout>
        </div>
        <div>
          <div>With Tags</div>
          <enchanted-search-center-layout isTagsAvailable>
            <div slot="enchanted-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="enchanted-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </enchanted-search-center-layout>
        </div>
      </div>
    `;
  },
};
