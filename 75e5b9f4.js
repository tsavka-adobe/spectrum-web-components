import{b as t}from"./03cd2f8f.js";import{e,i,t as s}from"./89c02dc9.js";import{a as n,c as r,u as l,m as o,s as h}from"./5b45ad00.js";const a=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},c=e(class extends i{constructor(t){if(super(t),t.type!==s.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let l=0;for(const e of t)n[l]=s?s(e,l):l,r[l]=i(e,l),l++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(e,[i,s,c]){var u;const _=n(e),{values:d,keys:m}=this.dt(i,s,c);if(!Array.isArray(_))return this.ut=m,d;const f=null!==(u=this.ut)&&void 0!==u?u:this.ut=[],p=[];let v,g,y=0,b=_.length-1,E=0,w=d.length-1;for(;y<=b&&E<=w;)if(null===_[y])y++;else if(null===_[b])b--;else if(f[y]===m[E])p[E]=r(_[y],d[E]),y++,E++;else if(f[b]===m[w])p[w]=r(_[b],d[w]),b--,w--;else if(f[y]===m[w])p[w]=r(_[y],d[w]),l(e,p[w+1],_[y]),y++,w--;else if(f[b]===m[E])p[E]=r(_[b],d[E]),l(e,_[y],_[b]),b--,E++;else if(void 0===v&&(v=a(m,E,w),g=a(f,y,b)),v.has(f[y]))if(v.has(f[b])){const t=g.get(m[E]),i=void 0!==t?_[t]:null;if(null===i){const t=l(e,_[y]);r(t,d[E]),p[E]=t}else p[E]=r(i,d[E]),l(e,_[y],i),_[t]=null;E++}else o(_[b]),b--;else o(_[y]),y++;for(;E<=w;){const t=l(e,p[w+1]);r(t,d[E]),p[E++]=t}for(;y<=b;){const t=_[y++];null!==t&&o(t)}return this.ut=m,h(e,p),t}});let u,_;async function d(){return _||async function(){if(u)return(await u).default;u=window.ResizeObserver;try{new u((function(){}))}catch(t){u=import("./3716bd52.js"),u=(await u).default}return _=u}()}const m=Symbol("virtualizerRef");class f extends Event{constructor(t){super(f.eventName,{bubbles:!0}),this.first=t.first,this.last=t.last}}f.eventName="rangeChanged";class p extends Event{constructor(t){super(p.eventName,{bubbles:!0}),this.first=t.first,this.last=t.last}}p.eventName="visibilityChanged";class v{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._mutationPromise=null,this._mutationPromiseResolver=null,this._mutationsObserved=!1,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollToIndex=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,!t)throw new Error("Virtualizer constructor requires a configuration object");if(!t.hostElement)throw new Error('Virtualizer configuration requires the "hostElement" property');this._init(t)}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t),this._initLayout(t)}async _initObservers(){this._mutationObserver=new MutationObserver(this._observeMutations.bind(this));const t=await d();this._hostElementRO=new t((()=>this._hostElementSizeChanged())),this._childrenRO=new t(this._childrenSizeChanged.bind(this))}async _initLayout(t){t.layout?this.layout=t.layout:this.layout=(await import("./2c6ec3e4.js")).FlowLayout}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[m]=this}async connected(){await this._initObservers();const t=this._isScroller;this._clippingAncestors=function(t,e=!1){return function(t,e=!1){const i=[];let s=e?t:y(t);for(;null!==s;)i.push(s),s=y(s);return i}(t,e).filter((t=>"visible"!==getComputedStyle(t).overflow))}(this._hostElement,t),this._schedule(this._updateLayout),this._observeAndListen()}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach((t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)})),this._children.forEach((t=>this._childrenRO.observe(t))),this._scrollEventListeners.forEach((t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions)))}disconnected(){this._scrollEventListeners.forEach((t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions))),this._scrollEventListeners=[],this._clippingAncestors=[],this._mutationObserver.disconnect(),this._hostElementRO.disconnect(),this._childrenRO.disconnect()}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"strict",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector("[virtualizer-sizer]");e||(e=document.createElement("div"),e.setAttribute("virtualizer-sizer",""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.innerHTML="&nbsp;",e.setAttribute("virtualizer-sizer",""),this._sizer=e}return this._sizer}get layout(){return this._layout}set layout(t){if(this._layout===t)return;let e=null,i={};if("object"==typeof t?(void 0!==t.type&&(e=t.type),i=t):e=t,"function"==typeof e){if(this._layout instanceof e)return void(i&&(this._layout.config=i));e=new e(i)}this._layout&&(this._measureCallback=null,this._measureChildOverride=null,this._layout.removeEventListener("scrollsizechange",this),this._layout.removeEventListener("scrollerrorchange",this),this._layout.removeEventListener("itempositionchange",this),this._layout.removeEventListener("rangechange",this),this._sizeHostElement(void 0),this._hostElement.removeEventListener("load",this._loadListener,!0)),this._layout=e,this._layout&&(this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout))}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){const t=window.performance.now(),e=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter((e=>e.startTime>=this._benchmarkStart&&e.startTime<t)).reduce(((t,e)=>t+e.duration),0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:i}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let s=0;s<e.length;s++){const n=e[s],r=this._first+s;(this._itemsChanged||this._toBeMeasured.has(n))&&(t[r]=i.call(this,n,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},function(t){const e=window.getComputedStyle(t);return{marginTop:g(e.marginTop),marginRight:g(e.marginRight),marginBottom:g(e.marginBottom),marginLeft:g(e.marginLeft)}}(t))}set scrollToIndex(t){this._scrollToIndex=t,this._schedule(this._updateLayout)}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(){const{_rangeChanged:t,_itemsChanged:e}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||e)&&(this._notifyRange(),await this._mutationPromise),this._children.forEach((t=>this._childrenRO.observe(t))),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._scrollError&&(this._correctScrollError(this._scrollError),this._scrollError=null),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout&&(this._layout.totalItems=this._items.length,null!==this._scrollToIndex&&(this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position),this._scrollToIndex=null),this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(this._itemsChanged),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;case"scrollsizechange":this._scrollSize=t.detail,this._schedule(this._updateDOM);break;case"scrollerrorchange":this._scrollError=t.detail,this._schedule(this._updateDOM);break;case"itempositionchange":this._childrenPos=t.detail,this._schedule(this._updateDOM);break;case"rangechange":this._adjustRange(t.detail),this._schedule(this._updateDOM);break;default:console.warn("event not handled",t)}}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute("virtualizer-sizer")||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._layout;let i,s,n,r;const l=t.getBoundingClientRect();i=0,s=0,n=window.innerHeight,r=window.innerWidth;for(const t of this._clippingAncestors){const e=t.getBoundingClientRect();i=Math.max(i,e.top),s=Math.max(s,e.left),n=Math.min(n,e.bottom),r=Math.min(r,e.right)}const o=i-l.top+t.scrollTop,h=s-l.left+t.scrollLeft,a=Math.max(1,n-i),c=Math.max(1,r-s);e.viewportSize={width:c,height:a},e.viewportScroll={top:o,left:h}}_sizeHostElement(t){const e=82e5,i=t&&null!==t.width?Math.min(e,t.width):0,s=t&&null!==t.height?Math.min(e,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${s}px)`;else{const t=this._hostElement.style;t.minWidth=i?`${i}px`:"100%",t.minHeight=s?`${s}px`:"100%"}}_positionChildren(t){if(t){const e=this._children;Object.keys(t).forEach((i=>{const s=i-this._first,n=e[s];if(n){const{top:e,left:s,width:r,height:l,xOffset:o,yOffset:h}=t[i];n.style.position="absolute",n.style.boxSizing="border-box",n.style.transform=`translate(${s}px, ${e}px)`,void 0!==r&&(n.style.width=r+"px"),void 0!==l&&(n.style.height=l+"px"),n.style.left=void 0===o?null:o+"px",n.style.top=void 0===h?null:h+"px"}}))}}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:s,_lastVisible:n}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==n}_correctScrollError(t){const e=this._clippingAncestors[0];e?(e.scrollTop-=t.top,e.scrollLeft-=t.left):window.scroll(window.pageXOffset-t.left,window.pageYOffset-t.top)}_notifyRange(){this._hostElement.dispatchEvent(new f({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new p({first:this._firstVisible,last:this._lastVisible}))}_hostElementSizeChanged(){this._schedule(this._updateLayout)}async _observeMutations(){this._mutationsObserved||(this._mutationsObserved=!0,this._mutationPromiseResolver(),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._mutationsObserved=!1)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._itemsChanged=!1,this._rangeChanged=!1}}function g(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function y(t){if(null!==t.parentElement)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}export{v as V,c,m as v};
//# sourceMappingURL=75e5b9f4.js.map
