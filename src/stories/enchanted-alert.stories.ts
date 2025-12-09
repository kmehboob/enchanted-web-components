import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-alert';
import { ALERT_SEVERITY, ALERT_VARIANTS } from '../types/cssClassEnums';

const meta: Meta = {
  title: 'Feedback/enchanted-alert',
  component: 'enchanted-alert',
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'radio' },
      options: [
        ALERT_SEVERITY.ALERT_INFO,
        ALERT_SEVERITY.ALERT_SUCCESS,
        ALERT_SEVERITY.ALERT_WARNING,
        ALERT_SEVERITY.ALERT_ERROR,
      ],
      description: 'Severity of the alert',
      defaultValue: ALERT_SEVERITY.ALERT_INFO,
    },
    variant: {
      control: { type: 'radio' },
      options: [
        ALERT_VARIANTS.ALERT_CONTAINED,
        ALERT_VARIANTS.ALERT_OUTLINED,
      ],
      description: 'Variant of the alert',
      defaultValue: ALERT_VARIANTS.ALERT_CONTAINED,
    },
    message: {
      control: 'text',
      description: 'Alert message',
      defaultValue: 'This is a enchanted-alert!',
    },
  },
  args: {
    severity: ALERT_SEVERITY.ALERT_INFO,
    variant: ALERT_VARIANTS.ALERT_CONTAINED,
    message: 'This is a enchanted-alert!',
  },
  parameters: {
    docs: {
      description: {
        component: 'Alert component for displaying important messages to users.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{ message: string; severity: string; variant: string }>;

export const EnchantedAlert: Story = {
  render: (args) => {
    return html`
      <enchanted-alert .message=${args.message} severity=${args.severity} variant=${args.variant}></enchanted-alert>
    `;
  },
  name: 'EnchantedAlert',
};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <enchanted-alert message="Info alert (contained)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (contained)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (contained)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (contained)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <enchanted-alert message="Info alert (outlined)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (outlined)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (outlined)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (outlined)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
    </div>
  `;},
  name: 'All States (Severity × Variant)',
};
