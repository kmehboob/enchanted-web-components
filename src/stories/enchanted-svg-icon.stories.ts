import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-svg-icon';
import { svgIconEnd } from '../_tests_/assets/svg-input-end-icon';

/**
 * @typedef EnchantedSvgIconProps
 * Props for the enchanted-svg-icon web component.
 *
 * @property icon - The SVG icon template
 * @property color - The icon color
 * @property size - The icon size (width/height)
 * @property useCurrentColor - Inherit color from parent
 */
export interface EnchantedSvgIconProps {
  icon?: unknown;
  color?: string;
  size?: string;
  useCurrentColor?: boolean;
}

const meta: Meta<EnchantedSvgIconProps> = {
  title: 'Icon/enchanted-svg-icon',
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false, description: 'SVG icon template', table: { defaultValue: { summary: 'svg' } } },
    color: { control: 'color', description: 'Icon color', table: { defaultValue: { summary: '' } } },
    size: { control: 'text', description: 'Icon size (e.g. 24px)', table: { defaultValue: { summary: '' } } },
    useCurrentColor: { control: 'boolean', description: 'Inherit color from parent', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    icon: '',
    color: '',
    size: '',
    useCurrentColor: false,
  },
  render: (args) => {
    return html`
      <enchanted-svg-icon
        .icon=${svgIconEnd}
        color="${args.color}"
        size="${args.size}"
        ?useCurrentColor=${args.useCurrentColor}
      ></enchanted-svg-icon>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedSvgIconProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <enchanted-svg-icon .icon=${svgIconEnd}></enchanted-svg-icon>
        </div>
        <div>
          <div>Colored</div>
          <enchanted-svg-icon .icon=${svgIconEnd} color="red"></enchanted-svg-icon>
        </div>
        <div>
          <div>Large Size</div>
          <enchanted-svg-icon .icon=${svgIconEnd} size="48px"></enchanted-svg-icon>
        </div>
        <div>
          <div>useCurrentColor</div>
          <span style="color: green; font-size: 32px;">
            <enchanted-svg-icon .icon=${svgIconEnd} useCurrentColor></enchanted-svg-icon>
          </span>
        </div>
      </div>
    `;
  },
};
