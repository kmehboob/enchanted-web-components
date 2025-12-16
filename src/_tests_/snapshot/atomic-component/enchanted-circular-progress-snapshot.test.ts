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
import { $, browser } from "@wdio/globals";
import { html, render } from "lit";

// Component imports
import "../../../components/atomic-component/enchanted-circular-progress";

// Helper imports
import {
  appendEnchantedStylingLink,
  SNAPSHOT_WINDOW_HEIGHT,
  SNAPSHOT_WINDOW_WIDTH,
} from "../utils";

function renderCircularProgressVariants() {
  return html`
    <div
      data-testid="enchanted-circular-progress-layout"
      style="
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        width: 400px;
        background-color: #f5f5f5;
      "
    >
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Default (40px)</label>
        <enchanted-circular-progress></enchanted-circular-progress>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Small (20px)</label>
        <enchanted-circular-progress
          size="20"
          strokewidth="2"
        ></enchanted-circular-progress>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Large (60px)</label>
        <enchanted-circular-progress
          size="60"
          strokewidth="5"
        ></enchanted-circular-progress>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Custom Colors</label>
        <enchanted-circular-progress
          trackcolor="#FFE5E5"
          progresscolor="#FF0000"
        ></enchanted-circular-progress>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Disable Shrink Animation</label>
        <enchanted-circular-progress
          disable-shrink
        ></enchanted-circular-progress>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Thick Stroke (stroke-width: 8)</label>
        <enchanted-circular-progress
          strokewidth="8"
        ></enchanted-circular-progress>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <label>Multiple Sizes with Custom Colors</label>
        <div style="display: flex; gap: 15px; align-items: center;">
          <enchanted-circular-progress
            size="30"
            strokewidth="3"
            progresscolor="#28A745"
          ></enchanted-circular-progress>
          <enchanted-circular-progress
            size="40"
            strokewidth="4"
            progresscolor="#FFC107"
          ></enchanted-circular-progress>
          <enchanted-circular-progress
            size="50"
            strokewidth="5"
            progresscolor="#6F42C1"
          ></enchanted-circular-progress>
        </div>
      </div>
    </div>
  `;
}

describe("EnchantedCircularProgress - Snapshot testing", () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it("EnchantedCircularProgress - should capture Circular Progress component with different attributes - Authoring", async () => {
    const link = appendEnchantedStylingLink();

    render(renderCircularProgressVariants(), document.body);
    let enchantedCircularProgressLayout = await $(
      '>>>div[data-testid="enchanted-circular-progress-layout"]'
    );

    await browser.checkElement(
      enchantedCircularProgressLayout,
      "enchanted-circular-progress-snapshot-baseline-authoring"
    );

    document.head.removeChild(link);
  });
});
