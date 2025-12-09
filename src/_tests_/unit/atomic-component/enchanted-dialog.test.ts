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
// External imports
import { html, render } from 'lit';
import { $, browser, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-dialog';
import '../../../components/atomic-component/enchanted-textfield';
import '../../../components/atomic-component/enchanted-circular-progress';
import '../../../components/atomic-component/enchanted-header';

// Helper imports
import { initSessionStorage } from '../../utils';
import { DialogSizes } from '../../../types/enchanted-dialog';
import { DIALOG_PARTS } from '../../../types/cssClassEnums';

const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('generic.label', 'Label');

describe('EnchantedDialog component testing', () => {
  before(async () => {
    await initSessionStorage();
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(async () => {
    // Wait for any pending setTimeout callbacks to complete (100ms cleanup + 20ms focus delay)
    await browser.pause(150);

    while (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('EnchantedDialog - should render without crashing', async () => {
    let component = document.createElement('enchanted-dialog');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedDialog - removes component from document body and validates removal', async () => {
    let component = document.createElement('EnchantedDialog');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedDialog - should NOT render default dialog children when open attribute is not present', async () => {
    render(
      html`
        <enchanted-dialog .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    expect(component).not.toHaveText(dxLocalization.get('generic.label'));
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).not.toBeDisplayed();
  });

  it('EnchantedDialog - should render default dialog children when open attribute is present', async () => {
    render(
      html`
        <enchanted-dialog open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText(dxLocalization.get('generic.label'));
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).toBeDisplayed();
  });

  it('EnchantedDialog - should render dialog with title and content attribute property', async () => {
    render(
      html`
        <enchanted-dialog title="Test Title" open .localization=${dxLocalization}>
          <enchanted-circular-progress slot="content"></enchanted-circular-progress>
        </enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('Test Title');
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).toBeDisplayed();
    let circularProgress = await component.$('>>>enchanted-circular-progress').getElement();
    expect(circularProgress).toBeDisplayed();
  });

  it('EnchantedDialog - should render dialog with overrideTitle property', async () => {
    render(
      html`
        <enchanted-dialog open overrideTitle .localization=${dxLocalization}>
          <enchanted-header variant="header-authoring-modal" />
          <enchanted-circular-progress slot="content"></enchanted-circular-progress>
        </enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).not.toBeDisplayed();
    let circularProgress = await component.$('>>>enchanted-circular-progress').getElement();
    expect(circularProgress).toBeDisplayed();
    let headerAuthoring = await component.$('>>>enchanted-header').getElement();
    expect(headerAuthoring).toBeDisplayed();
  });

  it('EnchantedDialog - should close the dialog when handleClose() is triggered', async () => {
    render(
      html`
        <enchanted-dialog open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    // Click on the close button
    let closeButton = await component.$('>>>[part="icon-close"]').getElement();
    await closeButton.click();

    await browser.pause(400);
    await expect(component).not.toHaveAttribute('open');
  });
  
  it('EnchantedDialog - should automatically focus on itself when opened', async () => {
    render(
      html`
        <enchanted-dialog open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );

    await browser.pause(10); // Check immediately after open

    let component = await document.querySelector('enchanted-dialog');
    const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`) as HTMLElement;
    await expect(component).toBeDisplayed();

    // Dialog should be focused initially
    const hasFocus = dialogElement === component?.shadowRoot?.activeElement;
    await expect(hasFocus).toBeTruthy();
  });

  it('EnchantedDialog - support size md', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.MD}" open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.MD);
  });

  it('EnchantedDialog - support size lg', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.LG}" open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.LG);
  });

  it('EnchantedDialog - support size sm', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.SM}" open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.SM);
  });

  it('EnchantedDialog - support size xl', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.XL}" open .localization=${dxLocalization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.XL);
  });

  it('EnchantedDialog - should render dialog in chat mode', async () => {
    render(
      html`
        <enchanted-dialog size="chat" open .localization=${dxLocalization}>
        </enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    let dialogRootChat = await component.$(`>>>[part="${DIALOG_PARTS.DIALOG_ROOT_CHAT}"]`).getElement();
    expect(dialogRootChat).toBeDisplayed();
  });

  describe('Accessibility - Dialog Focus and Announcement Flow', () => {
    it('EnchantedDialog - should have aria-modal when opened', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" placeholder="Search" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      const component = document.querySelector('enchanted-dialog');
      await browser.pause(10); // Check immediately after open

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should have aria-modal initially
      expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('EnchantedDialog - should temporarily focus dialog element on open', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" id="test-input" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(10); // Check immediately after open

      const component = document.querySelector('enchanted-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`) as HTMLElement;

      // Dialog should be focused initially
      const hasFocus = dialogElement === component?.shadowRoot?.activeElement;

      expect(hasFocus).toBeTruthy();
    });

    it('EnchantedDialog - should move focus to first focusable element after delay', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" id="test-input" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(150); // Wait for focus sequence to complete (100ms + 20ms)

      const component = document.querySelector('enchanted-dialog');
      const activeElement = component?.shadowRoot?.activeElement as HTMLElement;

      // The first focusable element in the dialog (close button) should be focused
      expect(activeElement).not.toBeNull();
    });

    it('EnchantedDialog - should remove aria-label after initial announcement', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(150); // Wait for cleanup (100ms + 20ms)

      const component = document.querySelector('enchanted-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // aria-label should be removed to prevent re-announcement
      expect(dialogElement).not.toHaveAttribute('aria-label');
    });

    it('EnchantedDialog - should remove aria-hidden from content wrapper after announcement', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(150); // Wait for cleanup (100ms + 20ms)

      const component = document.querySelector('enchanted-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      const contentWrapper = dialogElement?.querySelector('div[role="presentation"]');

      // aria-hidden should be removed so content is accessible
      expect(contentWrapper).not.toHaveAttribute('aria-hidden');
    });

    it('EnchantedDialog - refocusDialog() should re-announce dialog', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('enchanted-dialog') as any;
      await browser.pause(150); // Wait for initial focus sequence

      // Call refocusDialog
      await component.refocusDialog();

      await browser.pause(10); // Check immediately after refocus

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`) as HTMLElement;

      // Dialog should be focused again
      const hasFocus = dialogElement === component?.shadowRoot?.activeElement;

      expect(hasFocus).toBeTruthy();
    });

    it('EnchantedDialog - refocusDialog() should restore aria-label temporarily', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('enchanted-dialog') as any;
      await browser.pause(150); // Wait for initial cleanup

      // Call refocusDialog and check immediately
      await component.refocusDialog();

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // aria-label should be temporarily restored (check before cleanup at 100ms)
      expect(dialogElement).toHaveAttribute('aria-label', 'Select an item');
    });

    it('EnchantedDialog - refocusDialog() should clean up attributes after announcement', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('enchanted-dialog') as any;
      await browser.pause(150); // Wait for initial sequence

      // Call refocusDialog
      await component.refocusDialog();
      await browser.pause(150); // Wait for cleanup (100ms + 20ms)

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // aria-label should be removed again after refocus
      expect(dialogElement).not.toHaveAttribute('aria-label');
    });

    it('EnchantedDialog - refocusDialog() should not run if dialog is closed', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('enchanted-dialog') as any;

      // Attempt to refocus a closed dialog
      await component.refocusDialog();

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should not exist (not rendered when closed)
      expect(dialogElement).toBeFalsy();
    });

    it('EnchantedDialog - should handle shadow DOM input focus correctly', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <enchanted-textfield></enchanted-textfield>
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(150); // Wait for focus sequence to complete

      const component = await document.querySelector('enchanted-dialog');
      // eslint-why accessing shadowRoot which is not in type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputField = component?.shadowRoot?.querySelector('enchanted-textfield') as any;
      const shadowInput = inputField?.shadowRoot?.querySelector('input') as HTMLElement;

      // Shadow DOM input should be focused
      expect(shadowInput).toBe(inputField?.shadowRoot?.activeElement);
    });

    it('EnchantedDialog - should remove role="dialog" after announcement to prevent VoiceOver context', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(150); // Wait for full sequence and cleanup

      const component = document.querySelector('enchanted-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // role="dialog" should be removed to prevent VoiceOver from announcing dialog context
      expect(dialogElement).not.toHaveAttribute('role');
      expect(dialogElement).not.toHaveAttribute('aria-label');
    });

    it('EnchantedDialog - should have proper ARIA attributes for accessibility', async () => {
      render(
        html`
          <enchanted-dialog open dialogTitle="Accessible Dialog" .localization=${dxLocalization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      let dialogElement = await component.$(`>>>[part*="${DIALOG_PARTS.PAPER_XL}"]`).getElement();
      let backdrop = await component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`).getElement();
      let closeButton = await component.$('>>>[part="icon-close"]').getElement();
      let presentationElements = await component.$$('>>>[role="presentation"]');
      
      // Verify dialog element has proper ARIA attributes (initially)
      await expect(dialogElement).toBeDisplayed();
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
      
      // Verify backdrop is hidden from screenreaders
      await expect(backdrop).toHaveAttribute('aria-hidden', 'true');
      
      // Verify close button is keyboard accessible
      await expect(closeButton).toHaveAttribute('tabindex', '0');
      
      // Verify presentation elements exist
      await expect(presentationElements.length).toBeGreaterThan(0);
    });

    it('EnchantedDialog - should close when Enter key is pressed on close button', async () => {
      render(
        html`
          <enchanted-dialog open .localization=${dxLocalization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      
      // Tab to focus the close button
      await browser.keys(['Tab']);
      await browser.pause(100);
      await browser.keys(['Enter']);
      await browser.pause(400);
      
      await expect(component).not.toHaveAttribute('open');
    });

    it('EnchantedDialog - should close when Space key is pressed on close button', async () => {
      render(
        html`
          <enchanted-dialog open .localization=${dxLocalization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      
      // Tab to focus the close button
      await browser.keys(['Tab']);
      await browser.pause(100);
      await browser.keys([' ']);
      await browser.pause(400);
      
      await expect(component).not.toHaveAttribute('open');
    });

    it('EnchantedDialog - should not have backdrop in chat mode for better accessibility', async () => {
      render(
        html`
          <enchanted-dialog size="chat" open .localization=${dxLocalization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      let backdrop = await component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`);
      
      await expect(backdrop).not.toBeExisting();
    });

    it('EnchantedDialog - dialog title should be accessible to screenreaders', async () => {
      const customTitle = 'Important Announcement';
      render(
        html`
          <enchanted-dialog open dialogTitle="${customTitle}" .localization=${dxLocalization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      
      await expect(component).toHaveText(customTitle);
    });
  });
});
