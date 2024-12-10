/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import {
    CSSResultArray,
    html,
    PropertyValues,
    SpectrumElement,
    TemplateResult,
} from '@spectrum-web-components/base';
import { property } from '@spectrum-web-components/base/src/decorators.js';
import '@spectrum-web-components/button/sp-close-button.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-info.js';
import styles from './alert-banner.css.js';

// Valid variants for the alert banner
const VALID_VARIANTS = ['neutral', 'info', 'negative'];

// Type definition for alert banner variants
export type AlertBannerVariants = (typeof VALID_VARIANTS)[number];

/**
 * @element sp-alert-banner
 *
 * @slot - The alert banner text context
 * @slot action - Slot for the button element that surfaces the contextual action a user can take
 *
 * @fires close - Announces the alert banner has been closed
 */
export class AlertBanner extends SpectrumElement {
    public static override get styles(): CSSResultArray {
        return [styles];
    }

    /**
     * Controls the display of the alert banner.
     */
    @property({ type: Boolean, reflect: true })
    public open = false;

    /**
     * Whether to include an icon-only close button to dismiss the alert banner.
     */
    @property({ type: Boolean, reflect: true })
    public dismissible = false;

    /**
     * The variant applies specific styling when set to `negative` or `info`.
     * The `variant` attribute is removed when it's passed an invalid variant.
     */
    @property({ type: String })
    public set variant(variant: AlertBannerVariants) {
        if (variant === this.variant) {
            return;
        }
        const oldValue = this.variant;

        if (this.isValidVariant(variant)) {
            this.setAttribute('variant', variant);
            this._variant = variant;
        } else {
            this.removeAttribute('variant');
            this._variant = '';

            if (window.__swc.DEBUG) {
                window.__swc.warn(
                    this,
                    `<${this.localName}> element expects the "variant" attribute to be one of the following:`,
                    'https://opensource.adobe.com/spectrum-web-components/components/alert-banner/#variants',
                    {
                        issues: [...VALID_VARIANTS],
                    }
                );
            }
        }
        this.requestUpdate('variant', oldValue);
    }

    public get variant(): AlertBannerVariants {
        return this._variant;
    }

    private _variant: AlertBannerVariants = '';

    /**
     * Checks if the provided variant is valid.
     */
    protected isValidVariant(variant: string): boolean {
        return VALID_VARIANTS.includes(variant);
    }

    /**
     * Renders the appropriate icon based on the variant.
     */
    protected renderIcon(variant: string): TemplateResult {
        switch (variant) {
            case 'info':
                return html`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;
            case 'negative':
                return html`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;
            default:
                return html``;
        }
    }

    /**
     * Dispatches a 'close' event and closes the alert banner if the event is not canceled.
     */
    private shouldClose(): void {
        const applyDefault = this.dispatchEvent(
            new CustomEvent('close', {
                composed: true,
                bubbles: true,
                cancelable: true,
            })
        );
        if (applyDefault) {
            this.close();
        }
    }

    /**
     * Closes the alert banner by setting the open property to false.
     */
    public close(): void {
        this.open = false;
    }

    /**
     * Handles the keydown event to close the alert banner when the Escape key is pressed.
     */
    private handleKeydown(event: KeyboardEvent): void {
        if (event.code === 'Escape' && this.dismissible) {
            this.shouldClose();
        }
    }

    /**
     * Renders the alert banner template.
     * Includes the body with content and an optional close button.
     */
    protected override render(): TemplateResult {
        return html`
            <div class="body" role="alert">
                <div class="content">
                    ${this.renderIcon(this.variant)}
                    <div class="text"><slot></slot></div>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="end">
                ${this.dismissible
                    ? html`
                          <sp-close-button
                              @click=${this.shouldClose}
                              label="Close"
                              static-color="white"
                          ></sp-close-button>
                      `
                    : html``}
            </div>
        `;
    }

    /**
     * Updates the alert banner when properties change.
     * Adds or removes the keydown event listener based on the open property.
     */
    protected override updated(changes: PropertyValues): void {
        super.updated(changes);

        if (changes.has('open')) {
            if (this.open) {
                this.addEventListener('keydown', this.handleKeydown);
            } else {
                this.removeEventListener('keydown', this.handleKeydown);
            }
        }
    }
}
