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
import { LitElement, TemplateResult, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// Helper imports
import { getCurrentDirection } from "../localization";
import { LOCALE_DIRECTIONS } from "../constants";
import { FAB_PARTS, EnchantedFabType } from '../../types/cssClassEnums';

// Component imports
import  "./enchanted-badge";

@customElement('enchanted-fab')
export class EnchantedFab extends LitElement {
  @property({ reflect: true }) type: EnchantedFabType = EnchantedFabType.CONTAINED;
  @property({ type: Boolean, reflect: true }) extended = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Object }) icon?: TemplateResult;
  @property({ type: String }) label = "";
  @property({ type: Boolean, reflect: true }) badge = false;

  @state()
  private isLTR: boolean = getCurrentDirection() === 'ltr';

  private get iconColor(): string {
    if (this.disabled) {
      return 'rgba(0, 0, 0, 0.38)'; // Disabled color
    }
    switch (this.type) {
      case EnchantedFabType.CONTAINED:
        return '#FFFFFF'; // White for contained
      case EnchantedFabType.OUTLINED:
        return '#0550dc'; // Primary color for outlined
      case EnchantedFabType.AI:
        return '#0550dc'; // Accent color for AI
      default:
        return '#0550dc'; // Fallback to primary color
    }
  }

  private normalizeIcon(element: HTMLElement) {
    element.style.width = '24px';
    element.style.height = '24px';
    element.style.color = this.iconColor;
  }

  private handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const assignedElements = slot.assignedElements({ flatten: true });
    assignedElements.forEach((el) => {
      this.normalizeIcon(el as HTMLElement);
    });
  }

  protected updated(changed: Map<string, unknown>) {
    super.updated(changed);

    // Adjust layout for localization (LTR/RTL)
    this.isLTR = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;

    if (changed.has('type') || changed.has('disabled')) {
      const slot = this.renderRoot.querySelector('slot[name="icon"]') as HTMLSlotElement | null;
      slot?.assignedElements({ flatten: true }).forEach((el) => {
        this.normalizeIcon(el as HTMLElement);
      });
    }
  }

  render() {
    const localizationPart = this.isLTR ? '' : FAB_PARTS.FAB_RTL;

    return html`
      <button
        part="${FAB_PARTS.FAB} ${localizationPart}"
        ?disabled=${this.disabled}
        exportparts="icon, ${FAB_PARTS.LABEL}, ${FAB_PARTS.BADGE}"
        aria-label=${this.label || ''}
      >
        <span part="${FAB_PARTS.ICON}">
          <slot name="icon" @slotchange=${this.handleSlotChange}>
            ${this.icon ? this.icon : nothing}
          </slot>
        </span>
        ${this.badge
          ? html`<enchanted-badge
              badge="text"
              text="1"
              border="none"
              color="primary"
            ></enchanted-badge>`
          : nothing}
        ${this.extended && this.label
          ? html`<span part="${FAB_PARTS.LABEL}">${this.label}</span>`
          : nothing}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-fab': EnchantedFab;
  }
}