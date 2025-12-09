/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-popover';
import '../components/atomic-component/enchanted-button';
import { EnchantedPopoverArrowPosition } from '../types/enchanted-popover';

const meta: Meta = {
  title: 'Display/enchanted-popover',
  component: 'enchanted-popover',
  tags: ['autodocs'],

  argTypes: {
    open: { control: 'boolean', description: 'Controls the popover visibility' },

    label: { control: 'text', description: 'Popover label text' },
    text: { control: 'text', description: 'Popover description text' },

    showLabel: { control: 'boolean', description: 'Show the label section' },
    showText: { control: 'boolean', description: 'Show the text section' },
    showCloseIcon: { control: 'boolean', description: 'Show close button inside popover' },

    inverse: {
      control: 'boolean',
      description: 'Sets the popover to dark theme when true',
    },

    arrow: {
      control: { type: 'radio' },
      options: [
        EnchantedPopoverArrowPosition.TOP,
        EnchantedPopoverArrowPosition.BOTTOM,
        EnchantedPopoverArrowPosition.LEFT,
        EnchantedPopoverArrowPosition.RIGHT,
        EnchantedPopoverArrowPosition.BOTTOM_LEFT,
        EnchantedPopoverArrowPosition.BOTTOM_RIGHT,
        EnchantedPopoverArrowPosition.LEFT_BOTTOM,
        EnchantedPopoverArrowPosition.LEFT_TOP,
        EnchantedPopoverArrowPosition.RIGHT_BOTTOM,
        EnchantedPopoverArrowPosition.RIGHT_TOP,
        EnchantedPopoverArrowPosition.TOP_LEFT,
        EnchantedPopoverArrowPosition.TOP_RIGHT,
        EnchantedPopoverArrowPosition.NONE
      ],
      description: 'Position of the arrow',
    },

    withpadding: {
      control: 'boolean',
      description: 'Applies internal padding to the popover content',
    },

    disableHover: {
      control: 'boolean',
      description: 'Disables hover-based show/hide behavior',
    },

    buttontext: {
      control: 'text',
      description: 'Button text',
    },
  },

  args: {
    open: false,
    label: 'Popover Title',
    text: 'This is a sample popover description.',
    showLabel: true,
    showText: true,
    showCloseIcon: true,
    inverse: true,
    arrow: '3:00',
    withpadding: true,
    disableHover: false,
    buttontext: 'Hover on Me',
  },

  parameters: {
    docs: {
      description: {
        component:
          'A flexible popover component with arrow positioning, show-on-load, hover control, padding, dark/light theme, and full RTL support.'
      },
    },
  },
};

export default meta;

type Story = StoryObj<{
  open: boolean;
  label: string;
  text: string;
  showLabel: boolean;
  showText: boolean;
  showCloseIcon: boolean;
  inverse: boolean;
  arrow: EnchantedPopoverArrowPosition | undefined;
  withpadding: boolean;
  disableHover: boolean;
  buttontext: string;
}>;

export const EnchantedPopoverStory: Story = {
  name: 'Default',

  render: (args) => {
    return html`
    <enchanted-popover
      ?open=${args.open}
      label=${args.label}
      text=${args.text}
      ?showLabel=${args.showLabel}
      ?showText=${args.showText}
      ?showCloseIcon=${args.showCloseIcon}
      ?inverse=${args.inverse}
      arrow=${args.arrow}
      ?withpadding=${args.withpadding}
      ?disableHover=${args.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <enchanted-button slot="target" buttontext="${args.buttontext}"></enchanted-button>
    </enchanted-popover>
  `;
  }
};
