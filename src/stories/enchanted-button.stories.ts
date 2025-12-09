import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-button';
import { BUTTON_VARIANT, ICON_BUTTON_SIZES } from '../types/cssClassEnums';

const meta: Meta = {
  title: 'Input/enchanted-button',
  component: 'enchanted-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        BUTTON_VARIANT.BUTTON_CONTAINED_VAR,
        BUTTON_VARIANT.BUTTON_TEXT_VAR,
        BUTTON_VARIANT.BUTTON_OUTLINED_VAR,
      ],
      description: 'Button variant',
      defaultValue: BUTTON_VARIANT.BUTTON_CONTAINED_VAR,
    },
    size: {
      control: { type: 'radio' },
      options: [
        ICON_BUTTON_SIZES.SMALL,
        ICON_BUTTON_SIZES.MEDIUM,
      ],
      description: 'Button size',
      defaultValue: ICON_BUTTON_SIZES.SMALL,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
      defaultValue: false,
    },
    endicon: {
      control: 'boolean',
      description: 'End icon',
      defaultValue: false,
    },
    withPadding: {
      control: 'boolean',
      description: 'With padding',
      defaultValue: false,
    },
    inverseColor: {
      control: 'boolean',
      description: 'Inverse color',
      defaultValue: false,
    },
    buttontext: {
      control: 'text',
      description: 'Button text',
      defaultValue: 'Button',
    },
    imgurl: {
      control: 'text',
      description: 'Image URL',
      defaultValue: '',
    },
  },
  args: {
    variant: BUTTON_VARIANT.BUTTON_CONTAINED_VAR,
    size: ICON_BUTTON_SIZES.SMALL,
    disabled: false,
    endicon: false,
    withPadding: false,
    inverseColor: false,
    buttontext: 'Button',
    imgurl: '',
  },
  parameters: {
    docs: {
      description: {
        component: 'Button component with controls for variant, size, and boolean properties.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  variant: string;
  size: string;
  disabled: boolean;
  endicon: boolean;
  withPadding: boolean;
  inverseColor: boolean;
  buttontext: string;
  imgurl: string;
}>;

export const EnchantedButton: Story = {
  render: (args) => {
    return html`
      <enchanted-button
        .variant=${args.variant}
        .size=${args.size}
        ?disabled=${args.disabled}
        ?endicon=${args.endicon}
        ?withPadding=${args.withPadding}
        ?inverseColor=${args.inverseColor}
        .buttontext=${args.buttontext}
        .imgurl=${args.imgurl}
      ></enchanted-button>
    `;
  },
  name: 'EnchantedButton',
};
