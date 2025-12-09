import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-menu';
import '../components/atomic-component/enchanted-menu-item';
import '../components/atomic-component/enchanted-button';
import { EnchantedMenuPlacement, EnchantedMenuSize } from '../types/enchanted-menu';

// Styling constants to avoid overly long inline style lines and satisfy max-len lint rule
const containerStyle = [
  'display: flex',
  'justify-content: center',
  'align-items: center',
  'min-height: 400px',
  'padding: 40px'
].join('; ') + ';';

/**
 * @typedef EnchantedMenuProps
 * Props for the enchanted-menu web component.
 *
 * @property items - The menu items as an array of objects with text and value.
 * @property menuDelay - Delay in ms before opening the menu.
 * @property placement - Menu placement relative to anchor: 'bottom-start' or 'bottom-end'.
 * @property size - Menu size: 'sm' or 'md'.
 */
export interface EnchantedMenuProps {
  items?: { text: string; value: string }[];
  menuDelay?: number;
  placement?: EnchantedMenuPlacement;
  size?: EnchantedMenuSize;
  dropdownMinWidth?: string;
}

const meta: Meta<EnchantedMenuProps> = {
  title: 'Navigation/enchanted-menu',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object', description: 'The menu items as an array of objects with text and value.', table: { defaultValue: { summary: '[]' } } },
    menuDelay: { control: 'number', description: 'Delay in ms before opening the menu.', table: { defaultValue: { summary: '300' } } },
    placement: { 
      control: 'select', 
      options: Object.values(EnchantedMenuPlacement), 
      description: 'Menu placement relative to anchor.', 
      table: { defaultValue: { summary: EnchantedMenuPlacement.BOTTOM_START } } 
    },
    size: { control: 'select', options: Object.values(EnchantedMenuSize), description: 'Menu size.', table: { defaultValue: { summary: EnchantedMenuSize.MEDIUM } } },
    dropdownMinWidth: { control: 'text', description: 'CSS var --dropdown-menu-min-width (e.g., 240px).', table: { defaultValue: { summary: '' } } },
  },
  args: {
    items: [
      { text: 'Menu Item 1', value: '1' },
      { text: 'Menu Item 2', value: '2' },
      { text: 'Menu Item 3', value: '3' },
    ],
    menuDelay: 300,
    placement: EnchantedMenuPlacement.BOTTOM_START,
    size: EnchantedMenuSize.MEDIUM,
    dropdownMinWidth: '240px',
  },
  render: (args) => {
    return html`
      <div style="${containerStyle}">
        <enchanted-menu 
          style=${args.dropdownMinWidth ? `--dropdown-menu-min-width: ${args.dropdownMinWidth};` : ''}
          menuDelay=${args.menuDelay}
          placement=${args.placement}
          size=${args.size}
        >
          <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Menu"></enchanted-button>
          ${args.items && args.items.map((item) => { return html`
            <enchanted-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></enchanted-menu-item>
          `; })}
        </enchanted-menu>
      </div>
    `;
  },  
};

export default meta;
type Story = StoryObj<EnchantedMenuProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    const items = [
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
      { text: 'Option 4', value: '4' },
    ];

    const gridStyle = [
      'display: grid',
      'grid-template-columns: repeat(2, 1fr)',
      'gap: 60px',
      'padding: 40px',
      'min-height: 600px'
    ].join('; ') + ';';

    const itemContainerStyle = [
      'display: flex',
      'flex-direction: column',
      'align-items: center',
      'gap: 20px'
    ].join('; ') + ';';

    const labelStyle = [
      'font-weight: 600',
      'font-size: 14px',
      'color: #333'
    ].join('; ') + ';';

    // Open all menus via their public toggle to trigger internal scroll-lock/anchor
    setTimeout(() => {
      const menus = document.querySelectorAll('enchanted-menu');
      menus.forEach((menu) => {
        // eslint-why: Accessing component instance methods for testing convenience
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const menuElement = menu as any;

        // Call the component's toggle once to open and lock scroll on its container
        if (!menuElement.openMenu && typeof menuElement.toggleMenuOpen === 'function') {
          menuElement.toggleMenuOpen(new MouseEvent('click'));
        }

        // Keep it open for snapshots: ignore subsequent toggles that would close
        const originalToggle = menuElement.toggleMenuOpen;
        menuElement.toggleMenuOpen = function(evt: MouseEvent | KeyboardEvent) {
          if (!menuElement.openMenu) {
            originalToggle.call(menuElement, evt);
          }
          // Do nothing if already open (prevents closing)
        };
      });
    }, 200);

    return html`
      <div style="${gridStyle}">
        <!-- Small size, Bottom Start -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Small, Placement: Bottom Start</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${EnchantedMenuPlacement.BOTTOM_START}"
            size="${EnchantedMenuSize.SMALL}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></enchanted-button>
            ${items.map((item) => { return html`
              <enchanted-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></enchanted-menu-item>
            `; })}
          </enchanted-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Small, Placement: Bottom End</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${EnchantedMenuPlacement.BOTTOM_END}"
            size="${EnchantedMenuSize.SMALL}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></enchanted-button>
            ${items.map((item) => { return html`
              <enchanted-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></enchanted-menu-item>
            `; })}
          </enchanted-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Medium, Placement: Bottom Start</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${EnchantedMenuPlacement.BOTTOM_START}"
            size="${EnchantedMenuSize.MEDIUM}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></enchanted-button>
            ${items.map((item) => { return html`
              <enchanted-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></enchanted-menu-item>
            `; })}
          </enchanted-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Medium, Placement: Bottom End</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${EnchantedMenuPlacement.BOTTOM_END}"
            size="${EnchantedMenuSize.MEDIUM}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></enchanted-button>
            ${items.map((item) => { return html`
              <enchanted-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></enchanted-menu-item>
            `; })}
          </enchanted-menu>
        </div>
      </div>
    `;
  },
};
