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
import '../components/ac/dx-popover';
import '../components/ac/dx-button';
import { DxPopoverArrowPosition } from '../types/dx-popover';

const meta: Meta = {
  title: 'Display/dx-popover',
  component: 'dx-popover',
  tags: ['autodocs'],

  argTypes: {
    open: { control: 'boolean', description: 'Controls the popover visibility' },

    label: { control: 'text', description: 'Popover label text' },
    text: { control: 'text', description: 'Popover description text' },

    showLabel: { control: 'boolean', description: 'Show the label section' },
    showText: { control: 'boolean', description: 'Show the text section' },
    showCloseIcon: { control: 'boolean', description: 'Show close button inside popover' },

    inverse: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Sets the popover color scheme',
    },

    arrow: {
      control: { type: 'radio' },
      options: [
        DxPopoverArrowPosition.TOP,
        DxPopoverArrowPosition.BOTTOM,
        DxPopoverArrowPosition.LEFT,
        DxPopoverArrowPosition.RIGHT,
        DxPopoverArrowPosition.BOTTOM_LEFT,
        DxPopoverArrowPosition.BOTTOM_RIGHT,
        DxPopoverArrowPosition.LEFT_BOTTOM,
        DxPopoverArrowPosition.LEFT_TOP,
        DxPopoverArrowPosition.RIGHT_BOTTOM,
        DxPopoverArrowPosition.RIGHT_TOP,
        DxPopoverArrowPosition.TOP_LEFT,
        DxPopoverArrowPosition.TOP_RIGHT,
        DxPopoverArrowPosition.NONE
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
    showLabel: false,
    showText: false,
    showCloseIcon: false,
    inverse: 'light',
    arrow: undefined,
    withpadding: false,
    disableHover: false,
    buttontext: 'Hover or Click Me',
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
  inverse: 'light';
  arrow: DxPopoverArrowPosition | undefined;
  withpadding: boolean;
  disableHover: boolean;
  buttontext: string;
}>;

export const DxPopoverStory: Story = {
  name: 'Default',

  render: (args) => {
    return html`
    <dx-popover
      ?open=${args.open}
      .label=${args.label}
      .text=${args.text}
      ?showLabel=${args.showLabel}
      ?showText=${args.showText}
      ?showCloseIcon=${args.showCloseIcon}
      .inverse=${args.inverse}
      .arrow=${args.arrow}
      ?withpadding=${args.withpadding}
      ?disableHover=${args.disableHover}
      style="position: absolute; margin-left: 10%;"
    >
      <dx-button slot="target" buttontext="${args.buttontext}"></dx-button>
    </dx-popover>
  `;
  }
};
