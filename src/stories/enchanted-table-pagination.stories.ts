import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-table-pagination';

/**
 * @typedef EnchantedTablePaginationProps
 * Props for the enchanted-table-pagination web component.
 *
 * @property disabled - Whether the pagination is disabled
 * @property currentPage - The current page number
 * @property totalCount - The total number of items
 * @property rowSize - The number of rows per page
 * @property options - The selectable row size options
 */
export interface EnchantedTablePaginationProps {
  disabled?: boolean;
  currentPage?: number;
  totalCount?: number;
  rowSize?: number;
  options?: string[];
}

const meta: Meta<EnchantedTablePaginationProps> = {
  title: 'Table/enchanted-table-pagination',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
    currentPage: { control: 'number', description: 'Current page', table: { defaultValue: { summary: '"1"' } } },
    totalCount: { control: 'number', description: 'Total count', table: { defaultValue: { summary: '"100"' } } },
    rowSize: { control: 'number', description: 'Rows per page', table: { defaultValue: { summary: '"10"' } } },
    options: { control: 'object', description: 'Row size options', table: { defaultValue: { summary: '["10","20","50"]' } } },
  },
  args: {
    disabled: false,
    currentPage: 1,
    totalCount: 100,
    rowSize: 10,
    options: ['10', '20', '50'],
  },
  render: (args) => {
    return html`
      <enchanted-table-pagination
        ?disabled=${args.disabled}
        .currentPage=${args.currentPage}
        .totalCount=${args.totalCount}
        .rowSize=${args.rowSize}
        .options=${args.options}
      ></enchanted-table-pagination>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedTablePaginationProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Default</div>
          <enchanted-table-pagination currentPage="1" totalCount="100" rowSize="10" .options=${['10', '20', '50']}></enchanted-table-pagination>
        </div>
        <div>
          <div>Disabled</div>
          <enchanted-table-pagination disabled currentPage="1" totalCount="100" rowSize="10" .options=${['10', '20', '50']}></enchanted-table-pagination>
        </div>
        <div>
          <div>Custom Row Size</div>
          <enchanted-table-pagination currentPage="1" totalCount="100" rowSize="20" .options=${['10', '20', '50']}></enchanted-table-pagination>
        </div>
        <div>
          <div>Few Pages</div>
          <enchanted-table-pagination currentPage="1" totalCount="15" rowSize="10" .options=${['10', '20', '50']}></enchanted-table-pagination>
        </div>
        <div>
          <div>Many Pages</div>
          <enchanted-table-pagination currentPage="1" totalCount="1000" rowSize="10" .options=${['10', '20', '50', '100']}></enchanted-table-pagination>
        </div>
      </div>
    `;
  },
};
