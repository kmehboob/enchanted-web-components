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
import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

/**
 * EnchantedCircularProgress component - Indeterminate variant
 * Displays an animated circular progress indicator with track and progress colors
 * Based on Material UI's CircularProgress component
 */
@customElement('enchanted-circular-progress')
export class EnchantedCircularProgress extends EnchantedAcBaseElement {
  /**
   * Inline styles are required for this component due to Shadow DOM encapsulation.
   * 
   * IMPORTANT: Unlike other components that use external SCSS with ::part() selectors,
   * this component MUST use inline `static styles` because:
   * 
   * 1. **CSS Animations in Shadow DOM**: The @keyframes animations (enchanted-circular-rotate 
   *    and enchanted-circular-dash) must be defined in the same stylesheet where they are 
   *    referenced. External CSS cannot inject animations into Shadow DOM.
   * 
   * 2. **Shadow Boundary Limitation**: External stylesheets (even with ::part() selectors) 
   *    cannot penetrate the Shadow DOM boundary to apply animations to internal elements.
   *    The ::part() mechanism only allows styling of exposed parts from outside, not animating them.
   * 
   * 3. **Animation Timing Critical**: The indeterminate progress animation requires precise
   *    coordination between SVG rotation and stroke-dash animations. These must be encapsulated
   *    within the component's Shadow DOM for reliable cross-browser behavior.
   * 
   * 4. **Performance**: Inline styles in Shadow DOM are more performant for animated components
   *    as they don't require style recalculation across the Shadow boundary.
   * 
   * This pattern is consistent with Material UI and other animation-heavy web component libraries.
   * 
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
   * @see https://lit.dev/docs/components/styles/#static-styles
   */
  static styles = css`
    :host {
      display: inline-block;
    }

    .enchanted-circular-progress-root {
      display: inline-block;
      line-height: 1;
    }

    .enchanted-circular-progress-svg {
      display: block;
      animation: enchanted-circular-rotate 1.4s linear infinite;
    }

    .enchanted-circular-progress-track {
      opacity: 1;
    }

    .enchanted-circular-progress-circle {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
      animation: enchanted-circular-dash 1.4s ease-in-out infinite;
    }

    .enchanted-circular-progress-circle.disable-shrink {
      stroke-dasharray: 80px, 200px;
      animation: none;
    }

    @keyframes enchanted-circular-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes enchanted-circular-dash {
      0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
      }
      100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
      }
    }
  `;

  /**
   * Size of the circular progress in pixels
   * @default 40
   */
  @property({ type: Number }) size = 40;

  /**
   * Stroke width of the progress circle in pixels
   * @default 3.6
   */
  @property({ type: Number }) strokewidth = 3.6;

  /**
   * Color of the track (background circle)
   * Equivalent to $NG200 in enchanted styles
   * @default '#D6D6D6'
   */
  @property({ type: String }) trackcolor = '#D6D6D6';

  /**
   * Color of the progress indicator
   * Equivalent to $HCLSOFTWAREBLUE06 in enchanted styles
   * @default '#0550DC'
   */
  @property({ type: String }) progresscolor = '#0550DC';

  /**
   * Disables the shrink animation (keeps constant stroke length)
   * @default false
   */
  @property({ type: Boolean, attribute: 'disable-shrink' }) disableShrink = false;

  /**
   * Get the radius of the circle
   */
  private get radius(): number {
    return (this.size - this.strokewidth) / 2;
  }

  /**
   * Get the viewBox dimensions
   */
  private get viewBox(): string {
    return `0 0 ${this.size} ${this.size}`;
  }

  /**
   * Get the center coordinates of the circle
   */
  private get center(): number {
    return this.size / 2;
  }

  render() {
    const circleClasses = `enchanted-circular-progress-circle${this.disableShrink ? ' disable-shrink' : ''}`;
    
    return html`
      <div class="enchanted-circular-progress-root" style="width: ${this.size}px; height: ${this.size}px;">
        <svg
          class="enchanted-circular-progress-svg"
          viewBox="${this.viewBox}"
          role="progressbar"
          aria-label="Loading"
        >
          <!-- Track circle (background) -->
          <circle
            class="enchanted-circular-progress-track"
            cx="${this.center}"
            cy="${this.center}"
            r="${this.radius}"
            fill="none"
            stroke="${this.trackcolor}"
            stroke-width="${this.strokewidth}"
          />
          <!-- Progress circle (animated) -->
          <circle
            class="${circleClasses}"
            cx="${this.center}"
            cy="${this.center}"
            r="${this.radius}"
            fill="none"
            stroke="${this.progresscolor}"
            stroke-width="${this.strokewidth}"
            stroke-linecap="round"
          />
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-circular-progress': EnchantedCircularProgress
  }
}
