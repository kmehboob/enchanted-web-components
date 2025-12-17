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
import { browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-popover';
import '../../../components/ac/dx-button';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { DxPopoverArrowPosition } from '../../../types/dx-popover';

describe('DxPopover - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('DxPopover - should capture popover with open attribute', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open>
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-open', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with closed state', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover>
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-closed', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with showLabel', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel label="Popover Title">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-with-label', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with showText', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showText text="This is popover text content">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-with-text', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with showLabel and showText', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText label="Popover Title" text="This is popover content">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-with-label-and-text', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with showCloseIcon', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText showCloseIcon label="Title" text="Content with close button">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-with-close-icon', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with inverse theme', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText inverse label="Dark Theme" text="Popover with dark styling">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-inverse', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at TOP position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.TOP} label="Top Arrow" text="Arrow at top">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-top', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at BOTTOM position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.BOTTOM} label="Bottom Arrow" text="Arrow at bottom">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-bottom', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at LEFT position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.LEFT} label="Left Arrow" text="Arrow at left">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-left', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at RIGHT position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.RIGHT} label="Right Arrow" text="Arrow at right">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-right', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at TOP_LEFT position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.TOP_LEFT} label="Top Left" text="Arrow at top-left">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-top-left', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at TOP_RIGHT position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.TOP_RIGHT} label="Top Right" text="Arrow at top-right">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-top-right', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at BOTTOM_LEFT position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.BOTTOM_LEFT} label="Bottom Left" text="Arrow at bottom-left">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-bottom-left', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at BOTTOM_RIGHT position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.BOTTOM_RIGHT} label="Bottom Right" text="Arrow at bottom-right">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-bottom-right', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at LEFT_TOP position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.LEFT_TOP} label="Left Top" text="Arrow at left-top">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-left-top', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at LEFT_BOTTOM position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.LEFT_BOTTOM} label="Left Bottom" text="Arrow at left-bottom">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-left-bottom', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at RIGHT_TOP position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.RIGHT_TOP} label="Right Top" text="Arrow at right-top">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-right-top', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with arrow at RIGHT_BOTTOM position', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.RIGHT_BOTTOM} label="Right Bottom" text="Arrow at right-bottom">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-right-bottom', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with no arrow (NONE)', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText .arrow=${DxPopoverArrowPosition.NONE} label="No Arrow" text="Popover without arrow">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-arrow-none', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with withpadding enabled', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText withpadding label="With Padding" text="Popover content has internal padding">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-with-padding', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover without padding', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText label="No Padding" text="Popover without internal padding">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-without-padding', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with disableHover enabled', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText disableHover label="Hover Disabled" text="Hover interactions disabled">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-disable-hover', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with custom label slot', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showLabel showText>
            <dx-button slot="target" buttontext="Target"></dx-button>
            <span slot="label" style="color: #0066B0; font-weight: bold;">Custom Label Slot</span>
            <span slot="text">Custom text slot content</span>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-custom-slots', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with all features combined', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover 
            open 
            showLabel 
            showText 
            showCloseIcon 
            inverse 
            withpadding 
            .arrow=${DxPopoverArrowPosition.RIGHT_TOP}
            label="Full Featured" 
            text="Popover with all properties enabled"
          >
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-all-features', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover minimal configuration', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover open showText text="Minimal popover">
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-minimal', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover inverse with close icon', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover 
            open 
            showLabel 
            showText 
            showCloseIcon 
            inverse 
            .arrow=${DxPopoverArrowPosition.BOTTOM}
            label="Dark with Close" 
            text="Dark theme with close button"
          >
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-inverse-with-close', 100);

    document.head.removeChild(link);
  });

  it('DxPopover - should capture popover with long text content', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="padding: 100px;">
          <dx-popover 
            open 
            showLabel 
            showText 
            withpadding
            .arrow=${DxPopoverArrowPosition.TOP}
            label="Long Content" 
            text="This is a popover with longer text content to test how the component handles multiple lines of text and content wrapping within the popover container."
          >
            <dx-button slot="target" buttontext="Target"></dx-button>
          </dx-popover>
        </div>
      `,
      document.body,
    );

    await expect(browser).toMatchFullPageSnapshot('dx-popover-snapshot-baseline-long-content', 100);

    document.head.removeChild(link);
  });
});
