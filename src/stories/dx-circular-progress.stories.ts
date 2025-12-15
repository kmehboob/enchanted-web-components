import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-circular-progress';

const meta: Meta = {
  title: 'Feedback/dx-circular-progress',
  component: 'dx-circular-progress',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Size of the circular progress in pixels',
      defaultValue: 40,
    },
    strokewidth: {
      control: { type: 'number', min: 1, max: 20, step: 0.1 },
      description: 'Stroke width of the progress circle in pixels',
      defaultValue: 3.6,
    },
    trackcolor: {
      control: { type: 'color' },
      description: 'Color of the track (background circle)',
      defaultValue: '#D6D6D6',
    },
    progresscolor: {
      control: { type: 'color' },
      description: 'Color of the progress indicator',
      defaultValue: '#0550DC',
    },
  },
  args: {
    size: 40,
    strokewidth: 3.6,
    trackcolor: '#D6D6D6',
    progresscolor: '#0550DC',
  },
  parameters: {
    docs: {
      description: {
        component: 'Circular progress component - Indeterminate variant. Displays an animated circular progress indicator '
          + 'with separate track and progress colors, inspired by Material UI CircularProgress. '
          + 'Use the controls below to adjust size, colors, and disable shrink animation.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  size: number;
  strokewidth: number;
  trackcolor: string;
  progresscolor: string;
}>;

/**
 * Interactive circular progress component with controls for size, colors, and shrink animation.
 * 
 * Use the controls panel to:
 * - Adjust the size (20-200px)
 * - Change the progress color
 * - Customize the track (background) color
 * - Toggle the shrink animation on/off for performance optimization
 */
export const Default: Story = {
  render: (args) => {
    return html`
      <dx-circular-progress
        .size=${args.size}
        .strokewidth=${args.strokewidth}
        .trackcolor=${args.trackcolor}
        .progresscolor=${args.progresscolor}
      ></dx-circular-progress>
    `;
  },
};

export const AllStates: Story = {
  render: () => {
    const gridStyle = [
      'display: grid',
      'grid-template-columns: repeat(2, 1fr)',
      'gap: 48px',
      'padding: 40px',
      'min-height: 400px',
      'justify-items: center',
      'align-items: center'
    ].join('; ') + ';';

    const itemContainerStyle = [
      'display: flex',
      'flex-direction: column',
      'align-items: center',
      'gap: 16px'
    ].join('; ') + ';';

    const labelStyle = [
      'font-weight: 600',
      'font-size: 14px',
      'color: #333'
    ].join('; ') + ';';

    return html`
      <div style="${gridStyle}">
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Default</span>
          <dx-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></dx-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Large Size</span>
          <dx-circular-progress size="100" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></dx-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Custom Colors</span>
          <dx-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#e61010"></dx-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Thick Stroke</span>
          <dx-circular-progress size="40" strokewidth="8" trackcolor="#D6D6D6" progresscolor="#0550DC"></dx-circular-progress>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all main visual states: default, large, custom colors, and thick stroke. Demonstrates appearance and customization options for dx-circular-progress.'
      }
    },
    controls: { disable: true },
  },
};
