/*
Copyright 2020 Adobe. All rights reserved.
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

import stylesDefault from './spectrum-banner.min.css' with { type: 'css' };
import stylesOveride from './banner.min.css' with { type: 'css' };

/**
 * @element sp-banner
 *
 * @attr type - Determines the style, can be "info", "warning", or "error". Default is "info"
 * @attr corner - Determines if banner sets position at upper right corner or not.
 *
 * @slot header - Primary message of the banner.
 * @slot content - Secondary message of the banner. Used to provide a description.
 */
export class Banner extends SpectrumElement {
    @property({ reflect: true, type: String })
    public type: 'info' | 'warning' | 'error' = 'info';

    @property({ reflect: true, type: Boolean })
    public corner = false;

    public static override get styles(): CSSResultArray {
        return [stylesDefault, stylesOveride];
    }

    protected override update(changes: PropertyValues<this>): void {
        super.update(changes);
        if (window.__swc.DEBUG) {
            window.__swc.warn(
                this,
                `<${this.localName}> is deprecated and it will be removed in the future release.`,
                'https://opensource.adobe.com/spectrum-web-components/components/banner/#deprecation',
                { level: 'deprecation' }
            );
        }
    }

    protected override render(): TemplateResult {
        return html`
            <div id="header"><slot name="header"></slot></div>
            <div id="content"><slot name="content"></slot></div>
        `;
    }
}
