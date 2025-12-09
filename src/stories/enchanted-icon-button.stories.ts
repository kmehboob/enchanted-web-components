import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-icon-button';
import { ICON_BUTTON_SIZES } from '../types/cssClassEnums';
import { svgIconSearch } from '../_tests_/assets/svg-search';

/**
 * @interface EnchantedIconButtonProps
 * Props for the enchanted-icon-button web component.
 *
 * @property size - The size of the icon button: 'SMALL' and 'MEDIUM'.
 * @property withPadding - If true, adds padding to the button.
 * @property imgurl - The image URL for the icon.
 * @property disabled - If true, disables the button.
 * @property inverseColor - If true, uses the inverse color scheme.
 */
export interface EnchantedIconButtonProps {
  size?: ICON_BUTTON_SIZES;
  withPadding?: boolean;
  imgurl?: string;
  disabled?: boolean;
  inverseColor?: boolean;
}

const meta: Meta<EnchantedIconButtonProps> = {
  title: 'Input/enchanted-icon-button',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [ICON_BUTTON_SIZES.SMALL, ICON_BUTTON_SIZES.MEDIUM, ICON_BUTTON_SIZES.FAB],
      description: 'The size of the icon button.',
      table: { defaultValue: { summary: ICON_BUTTON_SIZES.SMALL } },
    },
    withPadding: { control: 'boolean', description: 'If true, adds padding to the button.', table: { defaultValue: { summary: 'false' } } },
    imgurl: { control: 'text', description: 'The image URL for the icon.', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'If true, disables the button.', table: { defaultValue: { summary: 'false' } } },
    inverseColor: { control: 'boolean', description: 'If true, uses the inverse color scheme.', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    size: ICON_BUTTON_SIZES.SMALL,
    withPadding: false,
    imgurl: 'https://cdn-icons-png.flaticon.com/512/61/61456.png',
    disabled: false,
    inverseColor: false,
  },
  render: (args) => {return html`
    <enchanted-icon-button
      size="${args.size}"
      ?withPadding=${args.withPadding}
      ?disabled=${args.disabled}
      .icon=${
        html`
          ${svgIconSearch}
        `
      }
      ?inverseColor=${args.inverseColor}
    ></enchanted-icon-button>
  `;},
};

export default meta;
type Story = StoryObj<EnchantedIconButtonProps>;

export const Default: Story = {
  args: {
    imgurl: '',
  },
};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Default</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
        ></enchanted-icon-button>
      </div>
      <div>
        <div>Disabled</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
          ?disabled=${true}
        ></enchanted-icon-button>
      </div>
      <div>
        <div>With Padding</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
          ?withPadding=${true}
        ></enchanted-icon-button>
      </div>
      <div>
        <div>Inverse Color</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
          ?inverseColor=${true}
        ></enchanted-icon-button>
      </div>
      <div>
        <div>Medium Size</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.MEDIUM}"
          .icon=${html`${svgIconSearch}`}
        ></enchanted-icon-button>
      </div>
      <div>
        <div>Image Icon</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
        ></enchanted-icon-button>
      </div>
      <div>
        <div>No Icon</div>
        <enchanted-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
        ></enchanted-icon-button>
      </div>
    </div>
  `;},
};

