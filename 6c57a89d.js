import{_ as e}from"./3d006159.js";import{e as s,s as t,$ as o}from"./03cd2f8f.js";import{r}from"./e50c5e8d.js";import"./e77073e6.js";import{i,l as a}from"./5a184a55.js";import{n}from"./5dba1fa8.js";import{o as l}from"./34e6c8b4.js";import"./52a00724.js";import"./97119b6f.js";import"./4878d6c7.js";import"./f447cac7.js";import"./77d4c924.js";import"./89c02dc9.js";import"./5b45ad00.js";import"./47debb83.js";import"./79272576.js";import"./c1652ba1.js";import"./fa806c4a.js";import"./464e15ff.js";const c=r`:host{display:block}sp-search{--spectrum-alias-single-line-width:100%;width:100%}#search-container sp-popover{display:none}`,p=e=>e.stopPropagation();let d=class extends t{constructor(){super(...arguments),this.searchResultsPopover=null,this.results=[]}static get styles(){return[c]}focus(){this.searchField.focus()}handleSearchInput(e){if(e.target){const{value:s}=e.target;this.updateSearchResults(s)}}handleKeydown(e){const{code:s,shiftKey:t}=e,o="ArrowDown"===s||"ArrowUp"===s;(!t&&"Tab"===s||o)&&(o&&e.preventDefault(),this.focusResults({shouldFocusResultsList:o}))}handlePopoverKeydown(e){const{code:s,shiftKey:t}=e;"Tab"===s&&(t?this.focusReturn.focus():this.focus())}async focusResults({shouldFocusResultsList:e}){if(await this.updateComplete,this.searchResultsPopover)if(e){this.searchResultsPopover.querySelector("sp-menu").focus()}else this.searchResultsPopover.focus();else if(e){await this.updateSearchResults(this.searchField.value)&&this.focusResults({shouldFocusResultsList:e})}}async openPopover(){if(!this.popover)return;this.searchResultsPopover=this.popover;const{popover:e}=this;this.closeOverlay=await l(this.searchField,"click",e,{placement:"bottom-start"}),await this.searchResultsPopover.updateComplete}closePopover(){this.closeOverlay&&this.closeOverlay()}handleClosed(){this.searchResultsPopover=null,this.closeOverlay&&delete this.closeOverlay}handleSubmit(e){if(e.preventDefault(),this.results.length<0||!this.searchResultsPopover)return;this.searchResultsPopover.querySelector("sp-menu").focus()}async updateSearchResults(e){if(e.length<3)return this.closePopover(),!1;const s=`${e.trim()}*`,t=await import("./6f4ed3df.js").then((({search:e})=>e));return this.results=await t(s),await this.openPopover(),this.results.length>0}onFocusout(e){const s=e.relatedTarget;s&&this.searchResultsPopover&&this.shadowRoot&&!this.shadowRoot.contains(s)&&!this.searchResultsPopover.contains(s)&&this.closePopover()}handleMenuKeydown(e){e.preventDefault()}renderResults(){return this.results.length>0?o`<sp-menu @keydown="${this.handleMenuKeydown}">${this.results.map((e=>o`<sp-menu-group><span slot="header">${e.name}</span> ${e.results.map((e=>o`<sp-menu-item href="${e.url}">${e.label}</sp-menu-item>`))}</sp-menu-group>`))}</sp-menu>`:o`<sp-illustrated-message heading="No results found" description="Try another search term."></sp-illustrated-message>`}render(){return o`<div id="search-container" @focusout="${this.onFocusout}"><sp-search id="search" @focusin="${this.handleSearchInput}" @input="${this.handleSearchInput}" @change="${this.handleSearchInput}" @keydown="${this.handleKeydown}" @click="${p}" @submit="${this.handleSubmit}" autocomplete="off"></sp-search><sp-popover id="search-results-menu" open tabindex="0" @sp-overlay-closed="${this.handleClosed}" @keydown="${this.handlePopoverKeydown}"><style>#search-results-menu{width:250px;max-height:calc(100vh - 200px);display:flex;flex-direction:column}sp-illustrated-message{flex:1 1;margin-bottom:2em;color:var(--spectrum-global-color-gray-800)}</style>${this.renderResults()}</sp-popover><span id="focus-return" tabindex="-1"></span></div>`}};e([i("sp-popover")],d.prototype,"popover",void 0),e([i("sp-search")],d.prototype,"searchField",void 0),e([i("#focus-return")],d.prototype,"focusReturn",void 0),e([s({type:Array})],d.prototype,"results",void 0),d=e([n("docs-search")],d);const h=r`::slotted(*){width:100%}aside{background-color:var(--spectrum-global-color-gray-75);display:flex;flex-direction:column;height:100vh;left:0;max-height:100vh;overflow:auto;position:sticky;top:0}@media screen and (max-width:960px){aside{left:0;min-height:100vh;position:fixed;top:0;transform:translateX(-100%);transition:transform var(
                --spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
            ) cubic-bezier(0,0,.4,1);z-index:10}:host([open]) aside{transform:translateX(0)}.scrim{touch-action:none;z-index:10}}#nav-header a,#nav-header a:visited{color:var(--spectrum-global-color-gray-800);text-decoration:none}.navigation{flex:1;flex-grow:1;overflow:auto;overflow-x:hidden;overflow-y:auto;padding:0 24px 24px;width:var(--spectrum-global-dimension-size-2400)}docs-spectrum-logo{display:block;height:32px;padding-top:7px;width:36px}:host([dir=ltr]) docs-spectrum-logo{margin-right:16px}:host([dir=rtl]) docs-spectrum-logo{margin-left:16px}#logo-container{border-radius:4px;outline:none}docs-search{padding:0 var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-300);width:var(--spectrum-global-dimension-size-2400)}sp-sidenav{width:100%}.spectrum-web{display:block;margin-top:80px}sp-underlay:not(:defined){opacity:0}`;let u=class extends t{constructor(){super(...arguments),this.open=!1}static get styles(){return[h]}toggle(){this.open=!this.open}focus(){const e=document.querySelector('[slot="logo"]');e?e.focus():this.shadowRoot.querySelector("#logo").focus()}render(){return o`<sp-underlay class="scrim" @click="${this.toggle}" ?open="${this.open}"></sp-underlay><aside><div id="nav-header"><div id="logo-container"><slot name="logo"></slot></div><docs-search tabindex="${a(!this.open&&matchMedia("(max-width: 960px)").matches?-1:void 0)}"></docs-search></div><div class="navigation"><slot></slot></div></aside>`}updated(e){e.has("open")&&!this.open&&e.get("open")&&this.dispatchEvent(new Event("close"))}};e([s({type:Boolean,reflect:!0})],u.prototype,"open",void 0),u=e([n("docs-side-nav")],u);export{u as SideNav};
//# sourceMappingURL=6c57a89d.js.map
