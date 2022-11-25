import{_ as t}from"./3d006159.js";import{e,s as i,$ as s,x as r}from"./03cd2f8f.js";import{t as n}from"./5b45ad00.js";import{v as o,V as h,c as a}from"./75e5b9f4.js";import{B as d,d as l,a as c}from"./0b054011.js";import{r as p,i as u}from"./e50c5e8d.js";import{R as g}from"./464e15ff.js";import"./89c02dc9.js";const m=t=>t,_=(t,e)=>s`${e}: ${JSON.stringify(t,null,2)}`;class f extends i{constructor(){super(...arguments),this._renderItem=(t,e)=>_(t,e+this._first),this._providedRenderItem=_,this.items=[],this.scroller=!1,this.keyFunction=m,this._first=0,this._last=-1}set renderItem(t){this._providedRenderItem=t,this._renderItem=(e,i)=>t(e,i+this._first),this.requestUpdate()}get renderItem(){return this._providedRenderItem}set layout(t){this._layout=t,t&&this._virtualizer&&(this._virtualizer.layout=t)}get layout(){return this[o].layout}scrollToIndex(t,e="start"){this._virtualizer.scrollToIndex={index:t,position:e}}updated(){this._virtualizer&&(void 0!==this._layout&&(this._virtualizer.layout=this._layout),this._virtualizer.items=this.items)}firstUpdated(){const t=this._layout;this._virtualizer=new h({hostElement:this,layout:t,scroller:this.scroller}),this.addEventListener("rangeChanged",(t=>{t.stopPropagation(),this._first=t.first,this._last=t.last})),this._virtualizer.connected()}connectedCallback(){super.connectedCallback(),this._virtualizer&&this._virtualizer.connected()}disconnectedCallback(){this._virtualizer&&this._virtualizer.disconnected(),super.disconnectedCallback()}createRenderRoot(){return this}render(){const{items:t,_renderItem:e,keyFunction:i}=this,s=[],r=Math.min(t.length,this._last+1);if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<r;e++)s.push(t[e]);return a(s,i||m,e)}}function z(t){return"horizontal"===t?"row":"column"}t([e()],f.prototype,"renderItem",null),t([e({attribute:!1})],f.prototype,"items",void 0),t([e({reflect:!0,type:Boolean})],f.prototype,"scroller",void 0),t([e()],f.prototype,"keyFunction",void 0),t([n()],f.prototype,"_first",void 0),t([n()],f.prototype,"_last",void 0),t([e({attribute:!1})],f.prototype,"layout",null);class v extends d{constructor(){super(...arguments),this._itemSize={},this._gaps={},this._padding={}}get _defaultConfig(){return Object.assign({},super._defaultConfig,{itemSize:{width:"300px",height:"300px"},gap:"8px",padding:"match-gap"})}get _gap(){return this._gaps.row}get _idealSize(){return this._itemSize[l(this.direction)]}get _idealSize1(){return this._itemSize[l(this.direction)]}get _idealSize2(){return this._itemSize[c(this.direction)]}get _gap1(){return this._gaps[(t=this.direction,"horizontal"===t?"column":"row")];var t}get _gap2(){return this._gaps[z(this.direction)]}get _padding1(){const t=this._padding,[e,i]="horizontal"===this.direction?["left","right"]:["top","bottom"];return[t[e],t[i]]}get _padding2(){const t=this._padding,[e,i]="horizontal"===this.direction?["top","bottom"]:["left","right"];return[t[e],t[i]]}set itemSize(t){const e=this._itemSize,i=parseInt(t.width),s=parseInt(t.height);i!==e.width&&(e.width=i,this._triggerReflow()),s!==e.height&&(e.height=s,this._triggerReflow())}_setGap(t){const e=t.split(" ").map((t=>function(t){return"auto"===t?1/0:parseInt(t)}(t))),i=this._gaps;e[0]!==i.row&&(i.row=e[0],this._triggerReflow()),void 0===e[1]?e[0]!==i.column&&(i.column=e[0],this._triggerReflow()):e[1]!==i.column&&(i.column=e[1],this._triggerReflow())}set padding(t){const e=this._padding,i=t.split(" ").map((t=>function(t){return"match-gap"===t?1/0:parseInt(t)}(t)));1===i.length?e.top=e.right=e.bottom=e.left=i[0]:2===i.length?(e.top=e.bottom=i[0],e.right=e.left=i[1]):3===i.length?(e.top=i[0],e.right=e.left=i[1],e.bottom=i[2]):4===i.length&&["top","right","bottom","left"].forEach(((t,s)=>e[t]=i[s]))}}class y extends v{constructor(){super(...arguments),this._metrics=null,this.flex=null,this.justify=null}get _defaultConfig(){return Object.assign({},super._defaultConfig,{flex:!1,justify:"start"})}set gap(t){this._setGap(t)}_updateLayout(){const t=this.justify,[e,i]=this._padding1,[s,r]=this._padding2;["_gap1","_gap2"].forEach((e=>{const i=this[e];if(i===1/0&&!["space-between","space-around","space-evenly"].includes(t))throw new Error("grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'");if(i===1/0&&"_gap2"===e)throw new Error(`grid layout: ${z(this.direction)}-gap cannot be set to 'auto' when direction is set to ${this.direction}`)}));const n={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:this._gap2,padding1:{start:e===1/0?this._gap1:e,end:i===1/0?this._gap1:i},padding2:{start:s===1/0?this._gap2:s,end:r===1/0?this._gap2:r},positions:[]};let o=this._viewDim2;this.flex||["start","center","end"].includes(t)?(o-=n.padding2.start,o-=n.padding2.end):"space-between"===t?o+=n.gap2:"space-evenly"===t&&(o-=n.gap2);const h=o/(this._idealSize2+n.gap2);if(this.flex){n.rolumns=Math.round(h),n.itemSize2=Math.round((o-n.gap2*(n.rolumns-1))/n.rolumns);switch(!0===this.flex?"area":this.flex.preserve){case"aspect-ratio":n.itemSize1=Math.round(this._idealSize1/this._idealSize2*n.itemSize2);break;case l(this.direction):n.itemSize1=Math.round(this._idealSize1);break;default:n.itemSize1=Math.round(this._idealSize1*this._idealSize2/n.itemSize2)}}else n.itemSize1=this._idealSize1,n.itemSize2=this._idealSize2,n.rolumns=Math.floor(h);let a,d;if(this.flex||["start","center","end"].includes(t)){const e=n.rolumns*n.itemSize2+(n.rolumns-1)*n.gap2;a=this.flex||"start"===t?n.padding2.start:"end"===t?this._viewDim2-n.padding2.end-e:Math.round(this._viewDim2/2-e/2),d=n.gap2}else{const s=o-n.rolumns*n.itemSize2;"space-between"===t?(d=Math.round(s/(n.rolumns-1)),a=0):"space-around"===t?(d=Math.round(s/n.rolumns),a=Math.round(d/2)):(d=Math.round(s/(n.rolumns+1)),a=d),this._gap1===1/0&&(n.gap1=d,e===1/0&&(n.padding1.start=a),i===1/0&&(n.padding1.end=a))}for(let t=0;t<n.rolumns;t++)n.positions.push(a),a+=n.itemSize2+d;this._metrics=n}get _delta(){return this._metrics.itemSize1+this._metrics.gap1}_getItemSize(t){return{[this._sizeDim]:this._metrics.itemSize1,[this._secondarySizeDim]:this._metrics.itemSize2}}_getActiveItems(){const{padding1:t}=this._metrics,e=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),s=Math.max(0,Math.floor((e-t.start)/this._delta)),r=Math.max(0,Math.ceil((i-t.start)/this._delta));this._first=s*this._metrics.rolumns,this._last=Math.min(r*this._metrics.rolumns-1,this._totalItems-1),this._physicalMin=t.start+this._delta*s,this._physicalMax=t.start+this._delta*r}_getItemPosition(t){const{rolumns:e,padding1:i,positions:s,itemSize1:r,itemSize2:n}=this._metrics;return{[this._positionDim]:i.start+Math.floor(t/e)*this._delta,[this._secondaryPositionDim]:s[t%e],[l(this.direction)]:r,[c(this.direction)]:n}}_updateScrollSize(){this._scrollSize=Math.max(1,Math.ceil(this._totalItems/this._metrics.rolumns)*this._delta+this._gap)}}var S=p`
:host{contain:strict;display:block;pointer-events:none;position:relative}::slotted(*){pointer-events:all}
`;class b{constructor(t,{target:e,config:i,callback:s,skipInitial:r}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.l=i,this.o=null!=r?r:this.o,this.callback=s,window.ResizeObserver?(this.u=new ResizeObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}}class w{constructor(t,{elements:e,itemSize:i,gap:s,padding:r}){this._first=0,this._last=0,this.handleFocusin=t=>{const e=t=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t()}))}))},i=()=>this.host.scrollToIndex(0),s=()=>{this.focus(),this.host.tabIndex=-1};t.target===this.host&&(this._first>0?e((()=>{i(),e(s)})):e(s))},this.handleFocusout=t=>{(!t.relatedTarget||!this.host.contains(t.relatedTarget))&&(this.host.tabIndex=0)},this.handleRangeChanged=t=>{this.rovingTabindexController.clearElementCache(t.first)},this.handleVisibleChanged=t=>{this._first=t.first,this._last=t.last},this.host=t,this.host.addController(this),this.applyLayout(i,s,r),this.resizeController=new b(this.host,{callback:t=>{t.forEach((t=>{this.measureDirectionLength(t.contentRect)}))}}),this.rovingTabindexController=new g(this.host,{direction:"grid",elements:e,focusInIndex:()=>this.host.getRootNode().activeElement===this.host?0:-1})}get itemSize(){return this._itemSize()}_itemSize(){return{width:100,height:100}}get gap(){return this._gap()}_gap(){}get padding(){return this._padding()}_padding(){}focus(t){this.rovingTabindexController.focus(t)}applyLayout(t,e,i){"object"==typeof t?this._itemSize=()=>t:"function"==typeof t&&void 0!==t()&&(this._itemSize=t),"string"==typeof e?this._gap=()=>e:"function"==typeof e&&(this._gap=e),"string"==typeof i?this._padding=()=>i:"function"==typeof i&&(this._padding=i)}update({elements:t,itemSize:e,gap:i,padding:s}){this.rovingTabindexController.update({elements:t}),this.applyLayout(e,i,s);const r=this.host.getBoundingClientRect();this.measureDirectionLength(r)}measureDirectionLength(t){const e=this.gap?parseFloat(this.gap):0,i=this.padding?parseFloat(this.padding):0,s=t.width-2*i,r=Math.floor((s-this.itemSize.width)/(e+this.itemSize.width))+1;this.rovingTabindexController.directionLength=Math.floor(r)}hostConnected(){this.host.addEventListener("rangeChanged",this.handleRangeChanged),this.host.addEventListener("visibilityChanged",this.handleVisibleChanged),this.host.addEventListener("focusin",this.handleFocusin),this.host.addEventListener("focusout",this.handleFocusout),this.host.tabIndex=0,this.host.style.setProperty("outline","none","important")}hostDisconnected(){this.host.removeEventListener("rangeChanged",this.handleRangeChanged),this.host.removeEventListener("visibilityChanged",this.handleVisibleChanged),this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout)}}var C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,I=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?x(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&C(e,i,n),n};class M extends f{constructor(){super(...arguments),this.gap="0",this.items=[],this.itemSize={width:200,height:200},this.selected=[],this.gridController=new w(this,{elements:()=>[],itemSize:()=>this.itemSize,gap:()=>this.gap,padding:()=>this.padding||this.gap})}static get styles(){return[S]}get renderItem(){return super.renderItem}set renderItem(t){super.renderItem=(e,i)=>{const s=this.selected.includes(e);return t(e,i,s)}}handleChange(t){const e=t.target,i=this.items[parseFloat(e.getAttribute("key")||"")],s=[...this.selected];if(s.includes(i)){const t=s.indexOf(i);t>-1&&s.splice(t,1)}else s.push(i);this.selected=s}createRenderRoot(){var t;const e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}render(){return s`
            <slot></slot>
        `}update(t){var e;(t.has("itemSize")||t.has("gap")||t.has("padding")||t.has("focusableSelector"))&&(this.updateComplete.then((()=>{this.gridController.update({elements:()=>[...this.querySelectorAll(this.focusableSelector)],itemSize:()=>this.itemSize,gap:()=>this.gap,padding:()=>this.padding||this.gap})})),this.layout=(e={itemSize:{width:`${this.itemSize.width}px`,height:`${this.itemSize.height}px`},gap:this.gap,padding:this.padding||this.gap},Object.assign({type:y},e))),this.isConnected&&r(super.render(),this),super.update(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.handleChange,{capture:!0})}disconnectedCallback(){this.removeEventListener("change",this.handleChange,{capture:!0}),super.disconnectedCallback()}}I([e({type:String})],M.prototype,"focusableSelector",2),I([e({type:String})],M.prototype,"gap",2),I([e({type:String})],M.prototype,"padding",2),I([e({type:Array})],M.prototype,"items",2),I([e({type:Object})],M.prototype,"itemSize",2),I([e({type:Array})],M.prototype,"selected",2),customElements.define("sp-grid",M);
//# sourceMappingURL=0ab58e67.js.map
