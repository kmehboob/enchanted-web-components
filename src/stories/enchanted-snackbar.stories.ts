import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-snackbar';
import '../components/atomic-component/enchanted-button';
import { SNACKBAR_TYPE } from '../types/cssClassEnums';

/**
 * @typedef EnchantedSnackbarProps
 * Props for the enchanted-snackbar web component.
 *
 * @property message - The snackbar message
 * @property open - Whether the snackbar is open
 * @property type - The snackbar type (info, success, warning, error)
 */
export interface EnchantedSnackbarProps {
  message?: string;
  open?: boolean;
  type?: SNACKBAR_TYPE;
}

const meta: Meta<EnchantedSnackbarProps> = {
  title: 'Feedback/enchanted-snackbar',
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Snackbar message', table: { defaultValue: { summary: '' } } },
    open: { control: 'boolean', description: 'Whether the snackbar is open', table: { defaultValue: { summary: 'false' } } },
    type: {
      control: 'select',
      options: [
        SNACKBAR_TYPE.SNACKBAR_INFO,
        SNACKBAR_TYPE.SNACKBAR_SUCCESS,
        SNACKBAR_TYPE.SNACKBAR_WARNING,
        SNACKBAR_TYPE.SNACKBAR_ERROR,
      ],
      description: 'Snackbar type',
      table: { defaultValue: { summary: SNACKBAR_TYPE.SNACKBAR_INFO } },
    },
  },
  args: {
    message: 'Sample snackbar message',
    open: true,
    type: SNACKBAR_TYPE.SNACKBAR_INFO,
  },
  render: (args) => {
    return html`
      <enchanted-snackbar
        message="${args.message}"
        ?open=${args.open}
        .type="${args.type}"
      >
        <div slot="snackbar-buttons">
          <enchanted-button buttontext="Action" variant="text"></enchanted-button>
        </div>
      </enchanted-snackbar>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedSnackbarProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Info</div>
          <enchanted-snackbar message="Info message" open type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
        <div>
          <div>Success</div>
          <enchanted-snackbar message="Success!" open type="${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></enchanted-snackbar>
        </div>
        <div>
          <div>Warning</div>
          <enchanted-snackbar message="Warning!" open type="${SNACKBAR_TYPE.SNACKBAR_WARNING}"></enchanted-snackbar>
        </div>
        <div>
          <div>Error</div>
          <enchanted-snackbar message="Error!" open type="${SNACKBAR_TYPE.SNACKBAR_ERROR}"></enchanted-snackbar>
        </div>
        <div>
          <div>With Button</div>
          <enchanted-snackbar message="With action button" open type="${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <enchanted-button buttontext="Undo" variant="text"></enchanted-button>
            </div>
          </enchanted-snackbar>
        </div>
        <div>
          <div>With Complex HTML Message</div>
          <enchanted-snackbar message="This is a <strong>bold</strong> message.<br>With a line break." open type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
        <div>
          <div>Closed</div>
          <enchanted-snackbar message="Closed snackbar" type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
      </div>
    `;
  },
};
