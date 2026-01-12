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
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { isLTR } from '../localization';
import { EnchantedBadgeColor, EnchantedBadgeBorder, EnchantedBadgeType } from '../../types/cssClassEnums';
 
@customElement('enchanted-badge')
export class EnchantedBadge extends EnchantedAcBaseElement {


  @property({ reflect: true }) color: EnchantedBadgeColor = EnchantedBadgeColor.PRIMARY;

  @property({ reflect: true }) border: EnchantedBadgeBorder = EnchantedBadgeBorder.DEFAULT;

  @property({ reflect: true }) badge: EnchantedBadgeType = EnchantedBadgeType.TEXT;

  @property() text: string = ''; // Added property to allow user to pass any string for badge:text

  static styles = css`
  
    :host {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      top: -6px;
      inset-inline-end: -6px;
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px; 
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }

    :host([badge="text"]) {
      min-width: 15px;
      height: 15px;
    }

    :host([badge="dot"]) {
      min-width: 8px;
      height: 8px;
      top:-4px;
      inset-inline-end: -4px;
      }

    :host([color="primary"]) {
      background-color: #0550DC;
      color: #FFFFFF;
    }
    
    :host([color="error"]) {
      background-color: #C10C0D;
      color: #FFFFFF;
    }

    :host([color="error-inverse"]) {
      background-color: #FFADAD;
      color: rgba(0, 0, 0, .87);
    }

    :host([color="primary-inverse"]) {
      background-color: #B3D9F8;
      color: rgba(0, 0, 0, .87);
    }

    :host([border="paper"]) {
      border: 2px solid  #FFFFFF;
    }

    :host([border="default"]) {
      border: 2px solid  #F6F6F6;
    }
    
    :host([border="secondary"]) {
      border: 2px solid  #E5E5E5;
    }
    
    :host([border="tertiary"]) {
      border: 2px solid  #D6D6D6;
    }
    
    :host([border="dark"]) {
      border: 2px solid  #383838;
    }
    :host([border="darker"]) {
      border: 2px solid  #1E1E1E;
    }
    .badge.ltr {
      text-align: left;
    }

    .badge.rtl {
      text-align: right;
    }
  `;

  render() {
    const localization = isLTR() ? 'ltr' : 'rtl'; // Use localization as a variable
    return html`
      <div
        class="badge ${localization}"
        color="${this.color}"
        data-testid="enchanted-badge"
      >
        ${this.badge === EnchantedBadgeType.TEXT ? this.text : ''} <!-- Render user-provided text -->
      </div>
    `;
  }
}
 
declare global {
  interface HTMLElementTagNameMap {
    'enchanted-badge': EnchantedBadge
  }
}
