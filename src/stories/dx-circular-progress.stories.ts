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
    trackcolor: {
      control: { type: 'color' },
      description: 'Color of the track (background circle)',
      defaultValue: 'rgba(0, 0, 0, 0.12)',
    },
    progresscolor: {
      control: { type: 'color' },
      description: 'Color of the progress indicator',
      defaultValue: '#1976d2',
    },
    disableshrink: {
      control: 'boolean',
      description: 'Disables the shrink animation for better performance under high CPU load',
      defaultValue: false,
    },
  },
  args: {
    size: 40,
    trackcolor: 'rgba(0, 0, 0, 0.12)',
    progresscolor: '#1976d2',
    disableshrink: false,
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
  trackcolor: string;
  progresscolor: string;
  disableshrink: boolean;
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
        .trackcolor=${args.trackcolor}
        .progresscolor=${args.progresscolor}
        ?disableshrink=${args.disableshrink}
      ></dx-circular-progress>
    `;
  },
};
