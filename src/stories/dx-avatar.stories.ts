import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-avatar';
import { AVATAR_VARIANT, AVATAR_TYPE, AVATAR_COLOR } from '../types/cssClassEnums';

import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/link';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/template';
import testAvatarImageUrl from '../_tests_/assets/test-avatar-image.jpg';

const meta: Meta = {
  title: 'Data display/dx-avatar',
  component: 'dx-avatar',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        AVATAR_VARIANT.AVATAR_LETTER,
        AVATAR_VARIANT.AVATAR_ICON,
        AVATAR_VARIANT.AVATAR_ICON_TEMPLATE,
        AVATAR_VARIANT.AVATAR_IMG,
      ],
      description: 'Defines the content type displayed in the avatar (letter, icon, icon template, or image)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: AVATAR_VARIANT.AVATAR_LETTER },
      },
    },
    type: {
      control: { type: 'radio' },
      options: [
        AVATAR_TYPE.AVATAR_ROUNDED,
        AVATAR_TYPE.AVATAR_CIRCULAR,
      ],
      description: 'Defines the shape of the avatar (rounded corners or fully circular)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: AVATAR_TYPE.AVATAR_ROUNDED },
      },
    },
    color: {
      control: { type: 'radio' },
      options: [
        AVATAR_COLOR.AVATAR_DEFAULT_COLOR,
        AVATAR_COLOR.AVATAR_RED,
        AVATAR_COLOR.AVATAR_ORANGE,
        AVATAR_COLOR.AVATAR_YELLOW,
        AVATAR_COLOR.AVATAR_LIME,
        AVATAR_COLOR.AVATAR_GREEN,
        AVATAR_COLOR.AVATAR_TEAL,
        AVATAR_COLOR.AVATAR_BLUE,
        AVATAR_COLOR.AVATAR_INDIGO,
        AVATAR_COLOR.AVATAR_PURPLE,
        AVATAR_COLOR.AVATAR_PINK,
      ],
      description: 'Defines the background color of the avatar',
      table: {
        type: { summary: 'AVATAR_COLOR' },
        defaultValue: { summary: AVATAR_COLOR.AVATAR_DEFAULT_COLOR },
      },
    },
    imgUrl: {
      control: { type: 'text' },
      description: 'URL of the image to display when variant is set to AVATAR_IMG',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconUrl: {
      control: { type: 'object' },
      description: 'Icon component to display when variant is set to AVATAR_ICON (Lit TemplateResult)',
    },
    avatarText: {
      control: { type: 'text' },
      description: 'Text to display when variant is set to AVATAR_LETTER (max 2 characters)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconTemplate: {
      control: { type: 'object' },
      description: 'Icon template to display when variant is set to AVATAR_ICON_TEMPLATE (Lit TemplateResult)',
    },
  },
  args: {
    variant: AVATAR_VARIANT.AVATAR_LETTER,
    type: AVATAR_TYPE.AVATAR_ROUNDED,
    color: AVATAR_COLOR.AVATAR_DEFAULT_COLOR,
    imgUrl: testAvatarImageUrl,
    iconUrl: html`<icon-link></icon-link>`,
    avatarText: 'AB',
    iconTemplate: html`<icon-template></icon-template>`,
  },
  parameters: {
    docs: {
      description: {
        component: 'Avatar component for displaying user profile pictures, initials, or icons. '
          + 'Supports multiple variants (letter, icon, icon template, image), shapes (rounded, circular), '
          + 'and a variety of color options. Letter avatars automatically truncate text to 2 characters.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<{
  variant: string;
  type: string;
  color: string;
  imgUrl: string;
  iconUrl: string;
  avatarText: string;
  iconTemplate: string;
}>;

export const DxAvatar: Story = {
  render: (args) => {
    return html`
      <dx-avatar
        .variant=${args.variant}
        .type=${args.type}
        .color=${args.color}
        .imgUrl=${args.imgUrl}
        .iconUrl=${args.iconUrl}
        .avatarText=${args.avatarText}
        .iconTemplate=${args.iconTemplate}
      ></dx-avatar>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default avatar with customizable variant, type, color, and content. '
          + 'Switch between variants to see letters, icons, or images. '
          + 'Try different colors and shapes to match your design requirements.',
      },
    },
  },
};
