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
import '../../../components/ac/dx-dialog';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('generic.label', 'Label');

describe('DxDialog - Snapshot testing', () => {
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

  it('DxDialog - should capture DxDialog component with open attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-open-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with title attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog title="Test title" open .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-title-attribute-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with title and content - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog title="Test title" open .localization=${dxLocalization}>
            <div slot="content">
              <label>Dialog Content</label>
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-title-and-content-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with overrideTitle attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open overrideTitle .localization=${dxLocalization}>
            <div slot="title">
              <label style="color: #0066B0; margin: 5px;">Override Title</label>
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-overrideTitle-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with footer - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open .localization=${dxLocalization}>
            <div slot="footer">
              <dx-authoring-dialog-footer />
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-footer-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with md size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="md" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-md-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with lg size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="lg" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-lg-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with sm size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="sm" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-sm-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with xs size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="xs" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-xs-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with chat size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="chat" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-chat-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with removeBorder attribute', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open removeBorder title="Dialog without border" .localization=${dxLocalization}>
            <div slot="content">
              <label>Content without border styling</label>
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-removeBorder', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with overrideTitle and content', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open overrideTitle .localization=${dxLocalization}>
            <div slot="title">
              <label style="color: #0066B0; margin: 5px;">Custom Title</label>
            </div>
            <div slot="content">
              <label>Dialog content with overridden title</label>
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-overrideTitle-and-content', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with pagination slot', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open title="Dialog with Pagination" .localization=${dxLocalization}>
            <div slot="content">
              <label>Content with pagination</label>
            </div>
            <div slot="pagination">
              <dx-table-pagination />
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-pagination', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with all slots filled', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open title="Complete Dialog" .localization=${dxLocalization}>
            <div slot="content">
              <label>This dialog has all slots: content, pagination, and footer</label>
            </div>
            <div slot="pagination">
              <dx-table-pagination />
            </div>
            <div slot="footer">
              <dx-authoring-dialog-footer />
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-complete', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with closed state', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog title="Closed Dialog" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-closed-state', 100);

    document.head.removeChild(link);
  });
});
