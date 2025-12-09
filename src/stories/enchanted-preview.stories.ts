import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-preview';

/**
 * @typedef AssetRendition
 * @property id - Rendition id
 * @property type - Rendition type
 * @property source - Source URL
 * @property dimension - Optional dimension
 */
export interface AssetRendition {
  id: string;
  type: string;
  source: string;
  dimension?: string;
}

/**
 * @typedef PreviewItem
 * @property id - Item id
 * @property title - Item title
 * @property type - Item type (e.g. 'image', 'video', 'pdf')
 * @property renditions - Optional renditions
 * @property fileExtension - Optional file extension
 */
export interface PreviewItem {
  id: number | string;
  title: string;
  type: string;
  renditions?: AssetRendition[];
  fileExtension?: string;
}

/**
 * @typedef EnchantedPreviewProps
 * Props for the enchanted-preview web component.
 *
 * @property open - Whether the preview is open
 * @property items - The preview items
 * @property customHeaderTitle - Custom header title
 * @property initialItemIndex - Initial item index
 */
export interface EnchantedPreviewProps {
  open?: boolean;
  items?: PreviewItem[];
  customHeaderTitle?: string;
  initialItemIndex?: number;
}

const IMAGE_RENDITIONS: AssetRendition[] = [
  { id: 'original', type: 'Original', source: 'https://via.placeholder.com/600x400', dimension: '600x400' },
  { id: 'thumb', type: 'Thumbnail', source: 'https://via.placeholder.com/150x100', dimension: '150x100' },
];

const PREVIEW_ITEMS: PreviewItem[] = [
  { id: 1, title: 'Sample Image', type: 'image', renditions: IMAGE_RENDITIONS, fileExtension: 'jpg' },
  { id: 2, title: 'Sample Video', type: 'video', fileExtension: 'mp4' },
  { id: 3, title: 'Unsupported File', type: 'pdf', fileExtension: 'pdf' },
];

const meta: Meta<EnchantedPreviewProps> = {
  title: 'Overlay/enchanted-preview',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether the preview is open', table: { defaultValue: { summary: 'false' } } },
    items: { control: 'object', description: 'Preview items', table: { defaultValue: { summary: '[]' } } },
    customHeaderTitle: { control: 'text', description: 'Custom header title', table: { defaultValue: { summary: '' } } },
    initialItemIndex: { control: 'number', description: 'Initial item index', table: { defaultValue: { summary: '0' } } },
  },
  args: {
    open: true,
    items: PREVIEW_ITEMS,
    customHeaderTitle: '',
    initialItemIndex: 0,
  },
  render: (args) => {
    return html`
      <enchanted-preview
        ?open=${args.open}
        .items=${args.items}
        customHeaderTitle="${args.customHeaderTitle}"
        .initialItemIndex=${args.initialItemIndex}
      ></enchanted-preview>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedPreviewProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 900px;">
        <div>
          <div>Image Preview</div>
          <enchanted-preview open .items=${[PREVIEW_ITEMS[0]]}></enchanted-preview>
        </div>
        <div>
          <div>Video Preview</div>
          <enchanted-preview open .items=${[PREVIEW_ITEMS[1]]}></enchanted-preview>
        </div>
        <div>
          <div>Unsupported File</div>
          <enchanted-preview open .items=${[PREVIEW_ITEMS[2]]}></enchanted-preview>
        </div>
        <div>
          <div>Custom Header Title</div>
          <enchanted-preview open .items=${[PREVIEW_ITEMS[0]]} customHeaderTitle="Custom Preview Header"></enchanted-preview>
        </div>
        <div>
          <div>Closed</div>
          <enchanted-preview .items=${[PREVIEW_ITEMS[0]]}></enchanted-preview>
        </div>
      </div>
    `;
  },
};
