import{r as c,a as ne,d as G,x as xe,e as v,j as a,c as k,m as uo}from"./iframe-DtgSHEjQ.js";import{S as Tt}from"./StatusIndicator-CtBIwuFy.js";import{T as _e}from"./Tag-BDnk8Naa.js";import{B as It}from"./Button-wnjTsVKz.js";import{P as po,c as mo,b as fo}from"./Popover-Ct7y8IP4.js";import{R as ho,P as vo,O as bo,C as go}from"./index-_wv9o6Pq.js";import{I as yo}from"./IconSearch-Gcd9t0xK.js";import{a as tt}from"./Checkbox-3Y-F859u.js";import{I as Ua}from"./IconChevronDown-BhJJby-V.js";import{c as xo}from"./createReactComponent-C84sREkH.js";import{I as rt,a as wo}from"./IconStar-BM1k4V_t.js";import{I as So}from"./IconX-C4-tcQv3.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./ProgressIndicator-BU8zpklz.js";import"./index-BnIfvaRi.js";import"./index-C5nohM2m.js";import"./IconMinus-9kjorEQN.js";import"./IconCheck-HDni-KIQ.js";import"./index-4ng4TLxp.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]],Fa=xo("outline","users","Users",Co);var Vt=1,No=.9,To=.8,Io=.17,at=.1,ot=.999,Vo=.9999,Ro=.99,jo=/[\\\/_+.#"@\[\(\{&]/,Oo=/[\\\/_+.#"@\[\(\{&]/g,Mo=/[\s-]/,_a=/[\s-]/g;function lt(e,s,t,d,n,p,h){if(p===s.length)return n===e.length?Vt:Ro;var x=`${n},${p}`;if(h[x]!==void 0)return h[x];for(var T=d.charAt(p),m=t.indexOf(T,n),w=0,C,L,j,D;m>=0;)C=lt(e,s,t,d,m+1,p+1,h),C>w&&(m===n?C*=Vt:jo.test(e.charAt(m-1))?(C*=To,j=e.slice(n,m-1).match(Oo),j&&n>0&&(C*=Math.pow(ot,j.length))):Mo.test(e.charAt(m-1))?(C*=No,D=e.slice(n,m-1).match(_a),D&&n>0&&(C*=Math.pow(ot,D.length))):(C*=Io,n>0&&(C*=Math.pow(ot,m-n))),e.charAt(m)!==s.charAt(p)&&(C*=Vo)),(C<at&&t.charAt(m-1)===d.charAt(p+1)||d.charAt(p+1)===d.charAt(p)&&t.charAt(m-1)!==d.charAt(p))&&(L=lt(e,s,t,d,m+1,p+2,h),L*at>C&&(C=L*at)),C>w&&(w=C),m=t.indexOf(T,m+1);return h[x]=w,w}function Rt(e){return e.toLowerCase().replace(_a," ")}function ko(e,s,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,lt(e,s,Rt(e),Rt(s),0,0,{})}var be='[cmdk-group=""]',st='[cmdk-group-items=""]',Ao='[cmdk-group-heading=""]',Ga='[cmdk-item=""]',jt=`${Ga}:not([aria-disabled="true"])`,nt="cmdk-item-select",se="data-value",Lo=(e,s,t)=>ko(e,s,t),Ha=c.createContext(void 0),we=()=>c.useContext(Ha),Ka=c.createContext(void 0),it=()=>c.useContext(Ka),Ya=c.createContext(void 0),Xa=c.forwardRef((e,s)=>{let t=le(()=>{var o,f;return{search:"",value:(f=(o=e.value)!=null?o:e.defaultValue)!=null?f:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),d=le(()=>new Set),n=le(()=>new Map),p=le(()=>new Map),h=le(()=>new Set),x=Ja(e),{label:T,children:m,value:w,onValueChange:C,filter:L,shouldFilter:j,loop:D,disablePointerSelection:re=!1,vimBindings:z=!0,...ee}=e,H=ne(),Se=ne(),ie=ne(),P=c.useRef(null),I=_o();Q(()=>{if(w!==void 0){let o=w.trim();t.current.value=o,O.emit()}},[w]),Q(()=>{I(6,ae)},[]);let O=c.useMemo(()=>({subscribe:o=>(h.current.add(o),()=>h.current.delete(o)),snapshot:()=>t.current,setState:(o,f,b)=>{var u,i,g,S;if(!Object.is(t.current[o],f)){if(t.current[o]=f,o==="search")te(),de(),I(1,A);else if(o==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let N=document.getElementById(ie);N?N.focus():(u=document.getElementById(H))==null||u.focus()}if(I(7,()=>{var N;t.current.selectedItemId=(N=U())==null?void 0:N.id,O.emit()}),b||I(5,ae),((i=x.current)==null?void 0:i.value)!==void 0){let N=f??"";(S=(g=x.current).onValueChange)==null||S.call(g,N);return}}O.emit()}},emit:()=>{h.current.forEach(o=>o())}}),[]),K=c.useMemo(()=>({value:(o,f,b)=>{var u;f!==((u=p.current.get(o))==null?void 0:u.value)&&(p.current.set(o,{value:f,keywords:b}),t.current.filtered.items.set(o,ce(f,b)),I(2,()=>{de(),O.emit()}))},item:(o,f)=>(d.current.add(o),f&&(n.current.has(f)?n.current.get(f).add(o):n.current.set(f,new Set([o]))),I(3,()=>{te(),de(),t.current.value||A(),O.emit()}),()=>{p.current.delete(o),d.current.delete(o),t.current.filtered.items.delete(o);let b=U();I(4,()=>{te(),(b==null?void 0:b.getAttribute("id"))===o&&A(),O.emit()})}),group:o=>(n.current.has(o)||n.current.set(o,new Set),()=>{p.current.delete(o),n.current.delete(o)}),filter:()=>x.current.shouldFilter,label:T||e["aria-label"],getDisablePointerSelection:()=>x.current.disablePointerSelection,listId:H,inputId:ie,labelId:Se,listInnerRef:P}),[]);function ce(o,f){var b,u;let i=(u=(b=x.current)==null?void 0:b.filter)!=null?u:Lo;return o?i(o,t.current.search,f):0}function de(){if(!t.current.search||x.current.shouldFilter===!1)return;let o=t.current.filtered.items,f=[];t.current.filtered.groups.forEach(u=>{let i=n.current.get(u),g=0;i.forEach(S=>{let N=o.get(S);g=Math.max(N,g)}),f.push([u,g])});let b=P.current;F().sort((u,i)=>{var g,S;let N=u.getAttribute("id"),E=i.getAttribute("id");return((g=o.get(E))!=null?g:0)-((S=o.get(N))!=null?S:0)}).forEach(u=>{let i=u.closest(st);i?i.appendChild(u.parentElement===i?u:u.closest(`${st} > *`)):b.appendChild(u.parentElement===b?u:u.closest(`${st} > *`))}),f.sort((u,i)=>i[1]-u[1]).forEach(u=>{var i;let g=(i=P.current)==null?void 0:i.querySelector(`${be}[${se}="${encodeURIComponent(u[0])}"]`);g==null||g.parentElement.appendChild(g)})}function A(){let o=F().find(b=>b.getAttribute("aria-disabled")!=="true"),f=o==null?void 0:o.getAttribute(se);O.setState("value",f||void 0)}function te(){var o,f,b,u;if(!t.current.search||x.current.shouldFilter===!1){t.current.filtered.count=d.current.size;return}t.current.filtered.groups=new Set;let i=0;for(let g of d.current){let S=(f=(o=p.current.get(g))==null?void 0:o.value)!=null?f:"",N=(u=(b=p.current.get(g))==null?void 0:b.keywords)!=null?u:[],E=ce(S,N);t.current.filtered.items.set(g,E),E>0&&i++}for(let[g,S]of n.current)for(let N of S)if(t.current.filtered.items.get(N)>0){t.current.filtered.groups.add(g);break}t.current.filtered.count=i}function ae(){var o,f,b;let u=U();u&&(((o=u.parentElement)==null?void 0:o.firstChild)===u&&((b=(f=u.closest(be))==null?void 0:f.querySelector(Ao))==null||b.scrollIntoView({block:"nearest"})),u.scrollIntoView({block:"nearest"}))}function U(){var o;return(o=P.current)==null?void 0:o.querySelector(`${Ga}[aria-selected="true"]`)}function F(){var o;return Array.from(((o=P.current)==null?void 0:o.querySelectorAll(jt))||[])}function Y(o){let f=F()[o];f&&O.setState("value",f.getAttribute(se))}function oe(o){var f;let b=U(),u=F(),i=u.findIndex(S=>S===b),g=u[i+o];(f=x.current)!=null&&f.loop&&(g=i+o<0?u[u.length-1]:i+o===u.length?u[0]:u[i+o]),g&&O.setState("value",g.getAttribute(se))}function ue(o){let f=U(),b=f==null?void 0:f.closest(be),u;for(;b&&!u;)b=o>0?Uo(b,be):Fo(b,be),u=b==null?void 0:b.querySelector(jt);u?O.setState("value",u.getAttribute(se)):oe(o)}let pe=()=>Y(F().length-1),Ce=o=>{o.preventDefault(),o.metaKey?pe():o.altKey?ue(1):oe(1)},me=o=>{o.preventDefault(),o.metaKey?Y(0):o.altKey?ue(-1):oe(-1)};return c.createElement(G.div,{ref:s,tabIndex:-1,...ee,"cmdk-root":"",onKeyDown:o=>{var f;(f=ee.onKeyDown)==null||f.call(ee,o);let b=o.nativeEvent.isComposing||o.keyCode===229;if(!(o.defaultPrevented||b))switch(o.key){case"n":case"j":{z&&o.ctrlKey&&Ce(o);break}case"ArrowDown":{Ce(o);break}case"p":case"k":{z&&o.ctrlKey&&me(o);break}case"ArrowUp":{me(o);break}case"Home":{o.preventDefault(),Y(0);break}case"End":{o.preventDefault(),pe();break}case"Enter":{o.preventDefault();let u=U();if(u){let i=new Event(nt);u.dispatchEvent(i)}}}}},c.createElement("label",{"cmdk-label":"",htmlFor:K.inputId,id:K.labelId,style:Ho},T),Ge(e,o=>c.createElement(Ka.Provider,{value:O},c.createElement(Ha.Provider,{value:K},o))))}),Eo=c.forwardRef((e,s)=>{var t,d;let n=ne(),p=c.useRef(null),h=c.useContext(Ya),x=we(),T=Ja(e),m=(d=(t=T.current)==null?void 0:t.forceMount)!=null?d:h==null?void 0:h.forceMount;Q(()=>{if(!m)return x.item(n,h==null?void 0:h.id)},[m]);let w=Qa(n,p,[e.value,e.children,p],e.keywords),C=it(),L=_(I=>I.value&&I.value===w.current),j=_(I=>m||x.filter()===!1?!0:I.search?I.filtered.items.get(n)>0:!0);c.useEffect(()=>{let I=p.current;if(!(!I||e.disabled))return I.addEventListener(nt,D),()=>I.removeEventListener(nt,D)},[j,e.onSelect,e.disabled]);function D(){var I,O;re(),(O=(I=T.current).onSelect)==null||O.call(I,w.current)}function re(){C.setState("value",w.current,!0)}if(!j)return null;let{disabled:z,value:ee,onSelect:H,forceMount:Se,keywords:ie,...P}=e;return c.createElement(G.div,{ref:xe(p,s),...P,id:n,"cmdk-item":"",role:"option","aria-disabled":!!z,"aria-selected":!!L,"data-disabled":!!z,"data-selected":!!L,onPointerMove:z||x.getDisablePointerSelection()?void 0:re,onClick:z?void 0:D},e.children)}),qo=c.forwardRef((e,s)=>{let{heading:t,children:d,forceMount:n,...p}=e,h=ne(),x=c.useRef(null),T=c.useRef(null),m=ne(),w=we(),C=_(j=>n||w.filter()===!1?!0:j.search?j.filtered.groups.has(h):!0);Q(()=>w.group(h),[]),Qa(h,x,[e.value,e.heading,T]);let L=c.useMemo(()=>({id:h,forceMount:n}),[n]);return c.createElement(G.div,{ref:xe(x,s),...p,"cmdk-group":"",role:"presentation",hidden:C?void 0:!0},t&&c.createElement("div",{ref:T,"cmdk-group-heading":"","aria-hidden":!0,id:m},t),Ge(e,j=>c.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?m:void 0},c.createElement(Ya.Provider,{value:L},j))))}),Wo=c.forwardRef((e,s)=>{let{alwaysRender:t,...d}=e,n=c.useRef(null),p=_(h=>!h.search);return!t&&!p?null:c.createElement(G.div,{ref:xe(n,s),...d,"cmdk-separator":"",role:"separator"})}),Do=c.forwardRef((e,s)=>{let{onValueChange:t,...d}=e,n=e.value!=null,p=it(),h=_(m=>m.search),x=_(m=>m.selectedItemId),T=we();return c.useEffect(()=>{e.value!=null&&p.setState("search",e.value)},[e.value]),c.createElement(G.input,{ref:s,...d,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":T.listId,"aria-labelledby":T.labelId,"aria-activedescendant":x,id:T.inputId,type:"text",value:n?e.value:h,onChange:m=>{n||p.setState("search",m.target.value),t==null||t(m.target.value)}})}),$o=c.forwardRef((e,s)=>{let{children:t,label:d="Suggestions",...n}=e,p=c.useRef(null),h=c.useRef(null),x=_(m=>m.selectedItemId),T=we();return c.useEffect(()=>{if(h.current&&p.current){let m=h.current,w=p.current,C,L=new ResizeObserver(()=>{C=requestAnimationFrame(()=>{let j=m.offsetHeight;w.style.setProperty("--cmdk-list-height",j.toFixed(1)+"px")})});return L.observe(m),()=>{cancelAnimationFrame(C),L.unobserve(m)}}},[]),c.createElement(G.div,{ref:xe(p,s),...n,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":x,"aria-label":d,id:T.listId},Ge(e,m=>c.createElement("div",{ref:xe(h,T.listInnerRef),"cmdk-list-sizer":""},m)))}),Bo=c.forwardRef((e,s)=>{let{open:t,onOpenChange:d,overlayClassName:n,contentClassName:p,container:h,...x}=e;return c.createElement(ho,{open:t,onOpenChange:d},c.createElement(vo,{container:h},c.createElement(bo,{"cmdk-overlay":"",className:n}),c.createElement(go,{"aria-label":e.label,"cmdk-dialog":"",className:p},c.createElement(Xa,{ref:s,...x}))))}),zo=c.forwardRef((e,s)=>_(t=>t.filtered.count===0)?c.createElement(G.div,{ref:s,...e,"cmdk-empty":"",role:"presentation"}):null),Po=c.forwardRef((e,s)=>{let{progress:t,children:d,label:n="Loading...",...p}=e;return c.createElement(G.div,{ref:s,...p,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n},Ge(e,h=>c.createElement("div",{"aria-hidden":!0},h)))}),q=Object.assign(Xa,{List:$o,Item:Eo,Input:Do,Group:qo,Separator:Wo,Dialog:Bo,Empty:zo,Loading:Po});function Uo(e,s){let t=e.nextElementSibling;for(;t;){if(t.matches(s))return t;t=t.nextElementSibling}}function Fo(e,s){let t=e.previousElementSibling;for(;t;){if(t.matches(s))return t;t=t.previousElementSibling}}function Ja(e){let s=c.useRef(e);return Q(()=>{s.current=e}),s}var Q=typeof window>"u"?c.useEffect:c.useLayoutEffect;function le(e){let s=c.useRef();return s.current===void 0&&(s.current=e()),s}function _(e){let s=it(),t=()=>e(s.snapshot());return c.useSyncExternalStore(s.subscribe,t,t)}function Qa(e,s,t,d=[]){let n=c.useRef(),p=we();return Q(()=>{var h;let x=(()=>{var m;for(let w of t){if(typeof w=="string")return w.trim();if(typeof w=="object"&&"current"in w)return w.current?(m=w.current.textContent)==null?void 0:m.trim():n.current}})(),T=d.map(m=>m.trim());p.value(e,x,T),(h=s.current)==null||h.setAttribute(se,x),n.current=x}),n}var _o=()=>{let[e,s]=c.useState(),t=le(()=>new Map);return Q(()=>{t.current.forEach(d=>d()),t.current=new Map},[e]),(d,n)=>{t.current.set(d,n),s({})}};function Go(e){let s=e.type;return typeof s=="function"?s(e.props):"render"in s?s.render(e.props):e}function Ge({asChild:e,children:s},t){return e&&c.isValidElement(s)?c.cloneElement(Go(s),{ref:s.ref},t(s.props.children)):t(s)}var Ho={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const ct=v.forwardRef(({className:e,...s},t)=>a.jsx(q,{ref:t,className:k(`bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,e),...s}));ct.displayName=q.displayName;const dt=v.forwardRef(({className:e,...s},t)=>a.jsx("div",{className:"border-divider-default py-sm px-md flex items-center border-b","cmdk-input-wrapper":"",children:a.jsxs("div",{className:`border-interactive-default bg-surface-primary
        hover:border-interactive-hover
        has-[:disabled]:border-interactive-disabled
        has-[:disabled]:bg-surface-disabled
        has-[:focus]:ring-interactive-focused h-10 rounded px-sm relative flex
        w-full items-center border
        has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
        has-[:focus]:outline-0`,children:[a.jsx(yo,{className:"mr-xxs h-3.5 w-3.5 shrink-0"}),a.jsx(q.Input,{ref:t,className:k(`placeholder:text-body-placeholder h-11 rounded-md py-3 flex w-full
          bg-transparent outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,e),...s})]})}));dt.displayName=q.Input.displayName;const ut=v.forwardRef(({className:e,...s},t)=>a.jsx(q.List,{ref:t,className:k("max-h-[300px] overflow-x-hidden overflow-y-auto",e),...s}));ut.displayName=q.List.displayName;const pt=v.forwardRef((e,s)=>a.jsx(q.Empty,{ref:s,className:"text-body-secondary py-6 text-center",...e}));pt.displayName=q.Empty.displayName;const ge=v.forwardRef(({className:e,...s},t)=>a.jsx(q.Group,{ref:t,className:k(`text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,e),...s}));ge.displayName=q.Group.displayName;const Za=v.forwardRef(({className:e,...s},t)=>a.jsx(q.Separator,{ref:t,className:k("-mx-1 h-px bg-[var(--token-color-border-divider-default)]",e),...s}));Za.displayName=q.Separator.displayName;const ye=v.forwardRef(({className:e,...s},t)=>a.jsx(q.Item,{ref:t,className:k(`hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg min-h-10 py-1.5 relative flex
      cursor-default items-center wrap-anywhere outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,e),...s}));ye.displayName=q.Item.displayName;ct.__docgenInfo={description:"",methods:[]};dt.__docgenInfo={description:"",methods:[]};ut.__docgenInfo={description:"",methods:[]};pt.__docgenInfo={description:"",methods:[]};ge.__docgenInfo={description:"",methods:[]};ye.__docgenInfo={description:"",methods:[]};Za.__docgenInfo={description:"",methods:[]};const Ot=uo("ease-in-out transition-all duration-300",{variants:{variant:{default:`border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,secondary:`border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,destructive:`bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`}},defaultVariants:{variant:"default"}}),Ko=({options:e,onValueChange:s=i=>i,onApplySelection:t=i=>i,variant:d,defaultValue:n=[],placeholder:p="選択してください",placeholderAriaLabel:h="選択してください",triggerDescription:x="マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",noSelectionLabel:T="オプションが選択されていません",searchHelpText:m="入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",searchAriaLabel:w="利用可能なオプションを検索",optionsListAriaLabel:C="利用可能なオプション",selectAllLabel:L="すべて選択",selectAllCountLabel:j="オプション",clearAllLabel:D="すべてクリア",closeLabel:re="閉じる",moreSelectedLabel:z="その他",searchPlaceholder:ee="オプションを検索...",maxCount:H=10,modalPopover:Se=!1,className:ie,hideSelectAll:P=!1,searchable:I=!0,emptyIndicator:O="結果が見つかりません。",autoSize:K=!1,singleLine:ce=!1,popoverClassName:de,disabled:A=!1,invalid:te=!1,responsive:ae,minWidth:U,maxWidth:F,deduplicateOptions:Y=!1,resetOnDefaultValueChange:oe=!0,closeOnSelect:ue=!1,filterByValueAndLabel:pe=!1,renderOption:Ce,customTrigger:me,selectionDisplayMode:o="default",hideSelection:f=!1,...b},u)=>{const[i,g]=v.useState(n),[S,N]=v.useState(!1),[E,He]=v.useState(""),[to,mt]=v.useState(""),[ao,ft]=v.useState(""),Ke=v.useRef(i.length),ht=v.useRef(S),vt=v.useRef(E),X=v.useCallback((l,r="polite")=>{r==="assertive"?(ft(l),setTimeout(()=>ft(""),100)):(mt(l),setTimeout(()=>mt(""),100))},[]),fe=v.useId(),bt=`${fe}-listbox`,gt=`${fe}-description`,yt=`${fe}-count`,xt=v.useRef(n),Ye=v.useCallback(l=>{const r=l[0];return!!(r&&typeof r=="object"&&"heading"in r)},[]),Xe=v.useCallback((l,r)=>{if(l.length!==r.length)return!1;const y=[...l].sort(),V=[...r].sort();return y.every((M,ve)=>M===V[ve])},[]),wt=v.useCallback(()=>{g(n),N(!1),He(""),s(n)},[n,s]),$=v.useRef(null);v.useImperativeHandle(u,()=>({reset:wt,getSelectedValues:()=>i,setSelectedValues:l=>{g(l),s(l)},clear:()=>{g([]),s([])},focus:()=>{if($.current){$.current.focus();const l=$.current.style.outline,r=$.current.style.outlineOffset;$.current.style.outline="2px solid hsl(var(--ring))",$.current.style.outlineOffset="2px",setTimeout(()=>{$.current&&($.current.style.outline=l,$.current.style.outlineOffset=r)},1e3)}}}),[wt,i,s]);const[B,Je]=v.useState("desktop");v.useEffect(()=>{if(typeof window>"u")return;const l=()=>{const r=window.innerWidth;r<640?Je("mobile"):r<1024?Je("tablet"):Je("desktop")};return l(),window.addEventListener("resize",l),()=>{typeof window<"u"&&window.removeEventListener("resize",l)}},[]);const J=(()=>{if(!ae)return{maxCount:H,compactMode:!1};if(ae===!0){const y={mobile:{maxCount:2,compactMode:!0},tablet:{maxCount:4,compactMode:!1},desktop:{maxCount:6,compactMode:!1}}[B];return{maxCount:(y==null?void 0:y.maxCount)??H,compactMode:(y==null?void 0:y.compactMode)??!1}}const l=ae[B];return{maxCount:(l==null?void 0:l.maxCount)??H,compactMode:(l==null?void 0:l.compactMode)??!1}})(),W=v.useCallback(()=>{if(e.length===0)return[];let l;Ye(e)?l=e.flatMap(M=>M.options):l=e;const r=new Set,y=[],V=[];return l.forEach(M=>{r.has(M.value)?(y.push(M.value),Y||V.push(M)):(r.add(M.value),V.push(M))}),Y?V:l},[e,Y,Ye]),he=v.useCallback(l=>W().find(y=>y.value===l),[W]),oo=v.useCallback((l,r)=>{const[y,V]=l.split(":");if(!pe)return V&&V.toLowerCase().includes(r.toLowerCase())?1:0;const M=r.toLowerCase();return V&&V.toLowerCase().includes(M)||y&&y.toLowerCase().includes(M)?1:0},[pe]),so=l=>{if(l.key==="Enter")N(!0);else if(l.key==="Backspace"&&!l.currentTarget.value){const r=[...i];r.pop(),g(r),s(r)}},Qe=l=>{if(A)return;const r=he(l);if(r!=null&&r.disabled)return;const y=i.includes(l)?i.filter(V=>V!==l):[...i,l];g(y),s(y),ue&&N(!1)},St=()=>{A||(g([]),t([]),s([]))},lo=()=>{A||N(l=>!l)},no=()=>{if(A)return;const l=i.slice(0,J.maxCount);g(l),s(l)},ro=()=>{if(A)return;const l=W().filter(r=>!r.disabled);if(i.length===l.length)St();else{const r=l.map(y=>y.value);g(r),s(r)}ue&&N(!1)},Ze=Ce||(l=>{const{option:r,location:y,onRemove:V,disabled:M}=l;return y==="badge"?a.jsx(_e,{className:k(Ot({variant:d}),J.compactMode&&"text-xs px-1.5 py-0.5",B==="mobile"&&"max-w-[120px] truncate",ce&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",M&&"cursor-not-allowed"),...!M&&{onRemove:V},children:r.label}):r.label});v.useEffect(()=>{if(!oe)return;const l=xt.current;Xe(l,n)||(Xe(i,n)||g(n),xt.current=[...n])},[n,i,Xe,oe]);const et={minWidth:U||(B==="mobile"?"0px":"200px"),maxWidth:F||"100%",popoverMaxWidth:F||"32rem",width:K?"auto":"100%"},Ct=v.useMemo(()=>o==="default"||i.length===0?p:i.map(l=>{var r;return(r=he(l))==null?void 0:r.label}).filter(Boolean).join(", "),[i,he,p,o]);return v.useEffect(()=>{S||He("")},[S]),v.useEffect(()=>{const l=i.length,r=W(),y=r.filter(V=>!V.disabled).length;if(l!==Ke.current){const V=l-Ke.current;if(V>0){const ve=i.slice(-V).map(io=>{var Nt;return(Nt=r.find(co=>co.value===io))==null?void 0:Nt.label}).filter(Boolean);ve.length===1?X(`${ve[0]} selected. ${l} of ${y} options selected.`):X(`${ve.length} options selected. ${l} of ${y} total selected.`)}else V<0&&X(`Option removed. ${l} of ${y} options selected.`);Ke.current=l}S!==ht.current&&(X(S?`Dropdown opened. ${y} options available. Use arrow keys to navigate.`:"Dropdown closed."),ht.current=S),E!==vt.current&&E!==void 0&&(E&&S&&X(`Searching for "${E}"`),vt.current=E)},[i,S,E,X,W]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"sr-only",children:[a.jsx("div",{"aria-live":"polite","aria-atomic":"true",role:"status",children:to}),a.jsx("div",{"aria-live":"assertive","aria-atomic":"true",role:"alert",children:ao})]}),a.jsxs(po,{open:S,onOpenChange:N,modal:Se,children:[a.jsx("div",{id:gt,className:"sr-only",children:x}),a.jsx("div",{id:yt,className:"sr-only","aria-live":"polite",children:i.length===0?T:`${i.length} option${i.length===1?"":"s"} selected: ${i.map(l=>{var r;return(r=he(l))==null?void 0:r.label}).filter(Boolean).join(", ")}`}),a.jsxs("div",{className:k(K&&"w-auto",ie),children:[a.jsx(mo,{asChild:!0,children:me||a.jsx("button",{ref:$,...b,onClick:lo,disabled:A,className:k(`border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,K?"w-auto":"w-full",!te&&`hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,te&&`border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,J.compactMode&&"min-h-8 text-sm",B==="mobile"&&"min-h-12"),style:{...et,maxWidth:`min(${et.maxWidth}, 100%)`},role:"combobox","aria-expanded":S,"aria-haspopup":"listbox","aria-controls":S?bt:void 0,"aria-describedby":`${gt} ${yt}`,"aria-label":`Multi-select: ${i.length} of ${W().length} options selected. ${h}`,children:a.jsxs("div",{className:"mx-auto flex w-full items-center justify-between",children:[a.jsx("span",{className:k("mx-sm",o==="inline"&&"truncate",A?"text-body-disabled":S||o==="inline"&&Ct!==p?"text-body-primary":"text-body-placeholder"),children:Ct}),a.jsx(Ua,{className:k("h-4 mx-xs cursor-pointer",A?"text-body-disabled":"text-body-primary")})]})})}),!(f||o==="inline")&&a.jsxs("div",{className:"gap-xxs mt-xxs flex flex-wrap",children:[i.slice(0,J.maxCount).map(l=>{const r=he(l);return r?a.jsx("div",{children:Ze({option:r,location:"badge",onRemove:()=>Qe(l),disabled:A})},l):null}).filter(Boolean),i.length>J.maxCount&&a.jsxs(_e,{className:k(`text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,Ot({variant:d}),J.compactMode&&"text-xs px-1.5 py-0.5",ce&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",A&&"cursor-not-allowed"),...!A&&{onRemove:no},children:["+ ",i.length-J.maxCount," ",z]})]})]}),a.jsx(fo,{id:bt,role:"listbox","aria-multiselectable":"true","aria-label":C,className:k("p-0 w-auto",B==="mobile"&&"w-[85vw] max-w-[280px]",B==="tablet"&&"max-w-md w-[70vw]",B==="desktop"&&"min-w-[300px]",de),style:{maxWidth:`min(${et.popoverMaxWidth}, 85vw)`,maxHeight:B==="mobile"?"70vh":"60vh",touchAction:"manipulation"},align:"start",children:a.jsxs(ct,{filter:oo,children:[I&&a.jsxs("header",{children:[a.jsx("div",{id:`${fe}-search-help`,className:"sr-only",children:m}),a.jsx(dt,{placeholder:ee,onKeyDown:so,value:E,onValueChange:He,"aria-label":w,"aria-describedby":`${fe}-search-help`})]}),a.jsxs(ut,{className:k("max-h-[calc(40vh-56px)] overflow-y-auto",B==="mobile"&&"max-h-[calc(50vh-56px)]"),style:{overscrollBehaviorY:"contain"},children:[a.jsx(pt,{children:O}),!P&&!E&&a.jsx(ge,{children:a.jsxs(ye,{value:"select-all",onSelect:ro,role:"option","aria-selected":i.length===W().filter(l=>!l.disabled).length,"aria-label":`Select all ${W().length} options`,className:"cursor-pointer",children:[a.jsx(tt,{className:"mr-xs",checked:i.length===W().filter(l=>!l.disabled).length}),a.jsxs("span",{children:["(",L,W().length>20?a.jsxs(a.Fragment,{children:[" - ",W().length," ",j]}):null,")"]})]},"all")}),Ye(e)?e.map(l=>a.jsx(ge,{heading:l.heading,children:l.options.map(r=>{const y=i.includes(r.value);return a.jsxs(ye,{value:`${r.value}:${r.label}`,onSelect:()=>Qe(r.value),role:"option","aria-selected":y,"aria-disabled":r.disabled??!1,"aria-label":`${r.label}${y?", selected":", not selected"}${r.disabled?", disabled":""}`,className:k("cursor-pointer",r.disabled&&`text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`),disabled:!!r.disabled,children:[a.jsx(tt,{className:"mr-xs",checked:y}),a.jsx("span",{className:"min-w-0 overflow-hidden",children:Ze({option:r,location:"dropdown",isSelected:y})})]},r.value)})},l.heading)):a.jsx(ge,{children:e.map(l=>{const r=i.includes(l.value);return a.jsxs(ye,{value:`${l.value}:${l.label}`,onSelect:()=>Qe(l.value),role:"option","aria-selected":r,"aria-disabled":l.disabled??!1,"aria-label":`${l.label}${r?", selected":", not selected"}${l.disabled?", disabled":""}`,className:k("cursor-pointer",l.disabled&&`text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`),disabled:!!l.disabled,children:[a.jsx(tt,{className:"mr-xs",checked:r}),a.jsx("span",{className:"min-w-0 overflow-hidden",children:Ze({option:l,location:"dropdown",isSelected:r})})]},l.value)})})]}),a.jsx("footer",{className:`px-md py-sm bg-surface-primary bottom-0
                border-t-divider-default flex items-center justify-between
                border-t`,children:a.jsxs(a.Fragment,{children:[a.jsx(It,{intent:"text",size:"xs",className:"min-w-auto",onClick:St,disabled:i.length===0,children:D}),a.jsx(It,{intent:"primary",size:"xs",className:"min-w-auto",onClick:()=>{t(i),N(!1)},children:re})]})})]})})]})]})},Z=v.forwardRef(Ko);Z.displayName="MultiSelect";Z.__docgenInfo={description:"",methods:[{name:"getSelectedValues",docblock:null,modifiers:[],params:[],returns:null},{name:"setSelectedValues",docblock:null,modifiers:[],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"T"}],raw:"T[]"}}],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"union",raw:"MultiSelectOption<T>[] | MultiSelectGroup<T>[]",elements:[{name:"Array",elements:[{name:"MultiSelectOption",elements:[{name:"T"}],raw:"MultiSelectOption<T>"}],raw:"MultiSelectOption<T>[]"},{name:"Array",elements:[{name:"MultiSelectGroup",elements:[{name:"T"}],raw:"MultiSelectGroup<T>"}],raw:"MultiSelectGroup<T>[]"}]},description:`Array of options or grouped options to display in the dropdown.
Can be a flat array of options or an array of groups with nested options.`},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Initial selected values when the component mounts.
Optional, defaults to an empty array.`,defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content displayed in the trigger button when no options are selected.
Optional, defaults to "選択してください" (Please select).`,defaultValue:{value:"'選択してください'",computed:!1}},placeholderAriaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the placeholder, announced to screen readers.
Optional, defaults to "選択してください" (Please select).`,defaultValue:{value:"'選択してください'",computed:!1}},triggerDescription:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Description of the component for screen readers, providing usage instructions.
Optional, defaults to navigation instructions in Japanese.`,defaultValue:{value:"'マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。'",computed:!1}},noSelectionLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label announced to screen readers when no options are selected.
Optional, defaults to "オプションが選択されていません" (No options selected).`,defaultValue:{value:"'オプションが選択されていません'",computed:!1}},searchHelpText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Help text for screen readers explaining how to use the search input.
Optional, defaults to search instructions in Japanese.`,defaultValue:{value:"'入力してオプションをフィルタリング。矢印キーで結果をナビゲート。'",computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the search input field.
Optional, defaults to "利用可能なオプションを検索" (Search available options).`,defaultValue:{value:"'利用可能なオプションを検索'",computed:!1}},optionsListAriaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the options list element.
Optional, defaults to "利用可能なオプション" (Available options).`,defaultValue:{value:"'利用可能なオプション'",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:`Maximum number of items to display. Extra selected items will be summarized.
Optional, defaults to 3.`,defaultValue:{value:"10",computed:!1}},modalPopover:{required:!1,tsType:{name:"boolean"},description:`The modality of the popover. When set to true, interaction with outside elements
will be disabled and only popover content will be visible to screen readers.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Additional class names to apply custom styles to the multi-select component.
Optional, can be used to add custom styles.`},hideSelectAll:{required:!1,tsType:{name:"boolean"},description:`If true, disables the select all functionality.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:`If true, shows search functionality in the popover.
If false, hides the search input completely.
Optional, defaults to true.`,defaultValue:{value:"true",computed:!1}},emptyIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom empty state message when no options match search.
Optional, defaults to "No results found."`,defaultValue:{value:"'結果が見つかりません。'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown in the search input when search is enabled.
Optional, defaults to "Search options...".`,defaultValue:{value:"'オプションを検索...'",computed:!1}},selectAllLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom label for the select-all option inside the list.
Optional, defaults to "Select All".`,defaultValue:{value:"'すべて選択'",computed:!1}},selectAllCountLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom label used alongside the total option count when select all is shown.
Optional, defaults to "options".`,defaultValue:{value:"'オプション'",computed:!1}},clearAllLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label displayed when clearing all selected values via the footer action.
Optional, defaults to "Clear All".`,defaultValue:{value:"'すべてクリア'",computed:!1}},closeLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label displayed for the footer close action.
Optional, defaults to "閉じる" (Close).`,defaultValue:{value:"'閉じる'",computed:!1}},moreSelectedLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label appended to the overflow badge when more selections exist than can be shown.
Optional, defaults to "more".`,defaultValue:{value:"'その他'",computed:!1}},autoSize:{required:!1,tsType:{name:"boolean"},description:`If true, allows the component to grow and shrink with its content.
If false, uses fixed width behavior.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},singleLine:{required:!1,tsType:{name:"boolean"},description:`If true, shows badges in a single line with horizontal scroll.
If false, badges wrap to multiple lines.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},popoverClassName:{required:!1,tsType:{name:"string"},description:`Custom CSS class for the popover content.
Optional, can be used to customize popover appearance.`},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, disables the component completely.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:`If true, displays the component in an error/invalid state with red border.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"union",raw:`| boolean
| {
    /** Configuration for mobile devices (< 640px) */
    mobile?: {
      maxCount?: number;
      compactMode?: boolean;
    };
    /** Configuration for tablet devices (640px - 1024px) */
    tablet?: {
      maxCount?: number;
      compactMode?: boolean;
    };
    /** Configuration for desktop devices (> 1024px) */
    desktop?: {
      maxCount?: number;
      compactMode?: boolean;
    };
  }`,elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  /** Configuration for mobile devices (< 640px) */
  mobile?: {
    maxCount?: number;
    compactMode?: boolean;
  };
  /** Configuration for tablet devices (640px - 1024px) */
  tablet?: {
    maxCount?: number;
    compactMode?: boolean;
  };
  /** Configuration for desktop devices (> 1024px) */
  desktop?: {
    maxCount?: number;
    compactMode?: boolean;
  };
}`,signature:{properties:[{key:"mobile",value:{name:"signature",type:"object",raw:`{
  maxCount?: number;
  compactMode?: boolean;
}`,signature:{properties:[{key:"maxCount",value:{name:"number",required:!1}},{key:"compactMode",value:{name:"boolean",required:!1}}]},required:!1},description:"Configuration for mobile devices (< 640px)"},{key:"tablet",value:{name:"signature",type:"object",raw:`{
  maxCount?: number;
  compactMode?: boolean;
}`,signature:{properties:[{key:"maxCount",value:{name:"number",required:!1}},{key:"compactMode",value:{name:"boolean",required:!1}}]},required:!1},description:"Configuration for tablet devices (640px - 1024px)"},{key:"desktop",value:{name:"signature",type:"object",raw:`{
  maxCount?: number;
  compactMode?: boolean;
}`,signature:{properties:[{key:"maxCount",value:{name:"number",required:!1}},{key:"compactMode",value:{name:"boolean",required:!1}}]},required:!1},description:"Configuration for desktop devices (> 1024px)"}]}}]},description:`Responsive configuration for different screen sizes.
Allows customizing maxCount and other properties based on viewport.
Can be boolean true for default responsive behavior or an object for custom configuration.`},minWidth:{required:!1,tsType:{name:"string"},description:`Minimum width for the component.
Optional, defaults to auto-sizing based on content.
When set, component will not shrink below this width.`},maxWidth:{required:!1,tsType:{name:"string"},description:`Maximum width for the component.
Optional, defaults to 100% of container.
Component will not exceed container boundaries.`},deduplicateOptions:{required:!1,tsType:{name:"boolean"},description:`If true, automatically removes duplicate options based on their value.
Optional, defaults to false (shows warning in dev mode instead).`,defaultValue:{value:"false",computed:!1}},resetOnDefaultValueChange:{required:!1,tsType:{name:"boolean"},description:`If true, the component will reset its internal state when defaultValue changes.
Useful for React Hook Form integration and form reset functionality.
Optional, defaults to true.`,defaultValue:{value:"true",computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:`If true, automatically closes the popover after selecting an option.
Useful for single-selection-like behavior or mobile UX.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},filterByValueAndLabel:{required:!1,tsType:{name:"boolean"},description:`If true, filters options by both value and label when searching.
If false, only filters by label.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},customTrigger:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom trigger element to replace the default button trigger.
Allows complete customization of the trigger component.
Optional, if not provided uses the default button with placeholder and chevron icon.`},hideSelection:{required:!1,tsType:{name:"boolean"},description:`If true, hides the selected option badges below the trigger button.
Useful when you want to show selections only in the trigger or use a custom display.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},selectionDisplayMode:{required:!1,tsType:{name:"union",raw:"'default' | 'inline'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inline'"}]},description:`Controls how selected values are displayed in the component.
- 'default': Shows selected items as removable badge components below the trigger button
- 'inline': Displays selected items as comma-separated text within the trigger button itself

Use 'inline' mode for more compact layouts or when badge removal functionality
is not needed in the trigger area. The 'default' mode provides better visual
feedback and individual item removal capabilities.

Optional, defaults to 'default'.`,defaultValue:{value:"'default'",computed:!1}},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(context: RenderOptionContext<T>) => React.ReactNode",signature:{arguments:[{type:{name:"RenderOptionContext",elements:[{name:"T"}],raw:"RenderOptionContext<T>"},name:"context"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for option content.
Allows customization of how options appear in both the dropdown and as selected badges.
If not provided, uses default rendering with label and optional icon.
Optional, defaults to a function that renders the label with remove button for badges.`},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"value"}],return:{name:"void"}}},description:`Callback fired when selected values change.
Receives the array of currently selected values.
Optional, called after each selection/deselection.`,defaultValue:{value:"(value) => value",computed:!1}},onApplySelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"value"}],return:{name:"void"}}},description:`Callback fired when the Apply button is clicked in the popover footer.
Receives the array of currently selected values.
Optional, called only when user confirms their selection.`,defaultValue:{value:"(value) => value",computed:!1}}},composes:["Omit","VariantProps"]};const Cs={title:"Components/MultiSelect",component:Z,parameters:{docs:{description:{component:"A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","inverted"],description:"Visual style variant of the component"},maxCount:{control:"number",description:'Maximum number of selected items to display before showing "+X more"'},searchable:{control:"boolean",description:"Whether to show search functionality"},hideSelectAll:{control:"boolean",description:'Whether to hide the "Select All" option'},disabled:{control:"boolean",description:"Whether the component is disabled"},closeOnSelect:{control:"boolean",description:"Whether to close the popover after selecting an option"},singleLine:{control:"boolean",description:"Whether to display selected items in a single line with scroll"},autoSize:{control:"boolean",description:"Whether the component should auto-size to its content"},filterByValueAndLabel:{control:"boolean",description:"Whether to filter by both value and label when searching"}}},R=[{label:"Apple",value:"550e8400-e29b-41d4-a716-446655440001"},{label:"Banana",value:"550e8400-e29b-41d4-a716-446655440002"},{label:"Cherry",value:"cherry-fruit"},{label:"Date",value:"550e8400-e29b-41d4-a716-446655440003"},{label:"Elderberry",value:"elderberry-premium"},{label:"Fig",value:"550e8400-e29b-41d4-a716-446655440004"},{label:"Grape",value:"grape-variety"},{label:"Honeydew",value:"550e8400-e29b-41d4-a716-446655440005"}],eo=[{label:"Users",value:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",icon:Fa},{label:"Favorites",value:"favorites-collection",icon:rt},{label:"Liked",value:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",icon:wo},{label:"Apple",value:"apple-item"},{label:"Banana",value:"6ba7b812-9dad-11d1-80b4-00c04fd430c8"}],Yo=[{heading:"Fruits",options:[{label:"Apple",value:"a1b2c3d4-e5f6-4789-a012-123456789abc"},{label:"Banana",value:"banana-tropical"},{label:"Cherry",value:"b2c3d4e5-f6a7-4890-b123-234567890bcd"}]},{heading:"Vegetables",options:[{label:"Carrot",value:"carrot-orange"},{label:"Broccoli",value:"c3d4e5f6-a7b8-4901-c234-345678901cde"},{label:"Spinach",value:"spinach-leafy"}]},{heading:"Grains",options:[{label:"Rice",value:"d4e5f6a7-b8c9-4012-d345-456789012def"},{label:"Wheat",value:"wheat-grain"},{label:"Oats",value:"e5f6a7b8-c9d0-4123-e456-567890123efa"}]}],Xo=[{label:"Available Option",value:"f6a7b8c9-d0e1-4234-f567-678901234fab"},{label:"Disabled Option",value:"disabled-item",disabled:!0},{label:"Another Available",value:"a7b8c9d0-e1f2-4345-a678-789012345abc"},{label:"Also Disabled",value:"also-disabled-slug",disabled:!0}],Ne={args:{options:R,placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},Te={args:{options:R,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},Mt=[{label:"タグアルファ",value:"project-alpha"},{label:"タグベータ",value:"project-beta"},{label:"タグガンマ",value:"project-gamma"},{label:"タグデルタ",value:"project-delta"},{label:"タグイプシロン",value:"project-epsilon"}],kt=[29,27,21,33,32],Ie={args:{options:Mt,placeholder:"選択してください",renderOption:({option:e,location:s,onRemove:t})=>{const d=Mt.findIndex(p=>p.value===e.value),n=kt[d%kt.length];return s==="badge"?a.jsx(_e,{colorCode:n,onRemove:t,children:e.label}):a.jsx("div",{className:"gap-2 flex items-center",children:a.jsx(_e,{colorCode:n,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction."},source:{code:`import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

const options = [
  { label: 'タグアルファ', value: 'project-alpha' },
  { label: 'タグベータ', value: 'project-beta' },
  { label: 'タグガンマ', value: 'project-gamma' },
  { label: 'タグデルタ', value: 'project-delta' },
  { label: 'タグイプシロン', value: 'project-epsilon' },
];

const tagColorCodes: TagColorCode[] = [29, 27, 21, 33, 32]; // Lime, Green, Purple, Orange, Yellow

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const colorIndex = options.findIndex((opt) => opt.value === option.value);
    const colorCode = tagColorCodes[colorIndex % tagColorCodes.length];

    if (location === 'badge') {
      return (
        <Tag colorCode={colorCode} onRemove={onRemove}>
          {option.label}
        </Tag>
      );
    }

    // Render in dropdown with Tag
    return (
      <div className="gap-2 flex items-center">
        <Tag colorCode={colorCode} size="sm">
          {option.label}
        </Tag>
      </div>
    );
  }}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},At=[{label:"成功",value:"status-success",statusLevel:"success"},{label:"進行中",value:"status-inprogress",statusLevel:"inProgress"},{label:"準備中",value:"status-queue",statusLevel:"queue"},{label:"エラー",value:"status-alert",statusLevel:"alert"},{label:"注意",value:"status-warning",statusLevel:"warning"},{label:"開始前",value:"status-neutral",statusLevel:"neutral"}],Ve={args:{options:At,placeholder:"選択してください",renderOption:({option:e,location:s,onRemove:t})=>{const d=At.find(p=>p.value===e.value),n=d==null?void 0:d.statusLevel;return s==="badge"?a.jsx(Tt,{level:n,onRemove:t,children:e.label}):a.jsx("div",{className:"gap-2 flex items-center",children:a.jsx(Tt,{level:n,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction."},source:{code:`import { MultiSelect, Status } from '@chemican/components';

const options = [
  { label: '成功', value: 'status-success', statusLevel: 'success' },
  { label: '進行中', value: 'status-inprogress', statusLevel: 'inProgress' },
  { label: '準備中', value: 'status-queue', statusLevel: 'queue' },
  { label: 'エラー', value: 'status-alert', statusLevel: 'alert' },
  { label: '注意', value: 'status-warning', statusLevel: 'warning' },
  { label: '開始前', value: 'status-neutral', statusLevel: 'neutral' },
];

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const statusOption = options.find((opt) => opt.value === option.value);
    const statusLevel = statusOption?.statusLevel;

    if (location === 'badge') {
      return (
        <StatusIndicator level={statusLevel} onRemove={onRemove}>
          {option.label}
        </StatusIndicator>
      );
    }

    // Render in dropdown with Status
    return (
      <div className="gap-2 flex items-center">
        <StatusIndicator level={statusLevel} size="sm">
          {option.label}
        </StatusIndicator>
      </div>
    );
  }}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},Re={args:{options:eo,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},je={args:{options:Yo,placeholder:"Select food items...",onValueChange:e=>console.log("Selected values:",e)}},Oe={args:{options:Xo,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},Me={args:{options:R,maxCount:2,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003"],placeholder:"Max 2 visible...",onValueChange:e=>console.log("Selected values:",e)}},ke={args:{options:R,searchable:!1,placeholder:"No search functionality...",onValueChange:e=>console.log("Selected values:",e)}},Ae={args:{options:R,hideSelectAll:!0,placeholder:"No select all option...",onValueChange:e=>console.log("Selected values:",e)}},Le={args:{options:R,closeOnSelect:!0,placeholder:"Closes after selection...",onValueChange:e=>console.log("Selected values:",e)}},Ee={args:{options:R,disabled:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Disabled state...",onValueChange:e=>console.log("Selected values:",e)}},qe={args:{options:[],emptyIndicator:a.jsxs("div",{className:"py-6 flex flex-col items-center text-center",children:[a.jsx(rt,{className:"h-12 w-12 text-body-secondary mb-2"}),a.jsx("p",{className:"text-body-secondary",children:"No options available"}),a.jsx("p",{className:"text-xs text-body-secondary mt-1",children:"Try a different search term"})]}),placeholder:"Custom empty state...",onValueChange:e=>console.log("Selected values:",e)}},We={args:{options:R,filterByValueAndLabel:!0,placeholder:"Search by label or value...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'}}}},De={args:{options:eo,placeholder:"Custom render...",renderOption:({option:e,location:s,isSelected:t,onRemove:d})=>{const n=e.icon;return s==="badge"?a.jsxs("div",{className:`gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border`,children:[n&&a.jsx(n,{className:"h-3 w-3"}),a.jsx("span",{className:"text-sm font-medium",children:e.label}),d&&a.jsx("button",{onClick:p=>{p.stopPropagation(),d()},className:"ml-1 hover:bg-interactive-alert-hover rounded p-0.5",children:a.jsx(So,{className:"h-3 w-3 text-interactive-alert-default"})})]}):a.jsxs("div",{className:"gap-2 flex items-center",children:[n&&a.jsx(n,{className:`h-4 w-4
              ${t?"text-interactive-primary-default":"text-body-secondary"}`}),a.jsx("span",{className:t?"font-bold text-interactive-primary-default":"",children:e.label}),t&&a.jsx("span",{className:"text-xs text-body-success ml-auto",children:"✓ Selected"})]})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button."}}}},Jo=()=>{const[e,s]=v.useState([]);return a.jsxs("div",{className:"gap-4 flex flex-col",children:[a.jsx(Z,{options:R,placeholder:"Select fruits and click Apply...",onValueChange:t=>console.log("Values changed (not applied yet):",t),onApplySelection:t=>{console.log("Values applied:",t),s(t)}}),a.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[a.jsx("p",{className:"text-sm font-medium text-body-primary mb-2",children:"Applied Values:"}),e.length>0?a.jsx("ul",{className:"text-sm text-body-secondary list-inside list-disc",children:e.map(t=>{const d=R.find(n=>n.value===t);return a.jsx("li",{children:(d==null?void 0:d.label)||t},t)})}):a.jsx("p",{className:"text-sm text-body-secondary italic",children:"No values applied yet"})]})]})},$e={render:()=>a.jsx(Jo,{}),parameters:{docs:{description:{story:'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.'},source:{code:`import { MultiSelect } from '@chemican/components';
import { useState } from 'react';

const [appliedValues, setAppliedValues] = useState<string[]>([]);

<MultiSelect
  options={options}
  placeholder="Select fruits and click Apply..."
  onValueChange={(values) => console.log('Values changed:', values)}
  onApplySelection={(values) => {
    console.log('Values applied:', values);
    setAppliedValues(values);
  }}
/>`}}}},Be={args:{options:R,customTrigger:a.jsx("button",{className:`px-4 py-2 rounded-md bg-interactive-primary-default
          text-interactive-inverse hover:bg-interactive-primary-hover
          focus:ring-interactive-focused focus:ring-4 focus:outline-none`,children:a.jsxs("div",{className:"gap-2 flex items-center",children:[a.jsx(rt,{className:"h-5 w-5"}),a.jsx("span",{className:"font-medium",children:"Custom Trigger Button"})]})}),onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality."},source:{code:`import { MultiSelect } from '@chemican/components';
import { IconStar } from '@tabler/icons-react';

<MultiSelect
  options={options}
  customTrigger={
    <button className="px-4 py-2 rounded-md bg-interactive-primary-default text-interactive-inverse hover:bg-interactive-primary-hover focus:ring-4 focus:ring-interactive-focused focus:outline-none">
      <div className="flex items-center gap-2">
        <IconStar className="h-5 w-5" />
        <span className="font-medium">Custom Trigger Button</span>
      </div>
    </button>
  }
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},ze={args:{options:R,placeholder:"Select fruits (badges hidden)...",hideSelection:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates the hideSelection prop which hides the selected option badges below the trigger button. This is useful when you want to show selections only in the dropdown or when you need a more compact layout."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits (badges hidden)..."
  hideSelection={true}
  defaultValue={['apple', 'banana', 'cherry']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},Qo=()=>{const[e,s]=v.useState(["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"]),t=e.map(d=>{var n;return(n=R.find(p=>p.value===d))==null?void 0:n.label}).filter(Boolean);return a.jsxs("div",{className:"gap-4 flex flex-col",children:[a.jsx(Z,{options:R,hideSelection:!0,customTrigger:a.jsx("button",{className:`px-4 py-3 rounded-md bg-surface-primary
              border-interactive-default hover:bg-surface-secondary
              focus:ring-interactive-focused border focus:ring-4
              focus:outline-none`,children:a.jsxs("div",{className:"gap-4 flex min-w-[300px] items-center justify-between",children:[a.jsxs("div",{className:"gap-2 flex items-center",children:[a.jsx(Fa,{className:"h-5 w-5 text-body-secondary"}),a.jsx("span",{className:"font-medium text-body-primary",children:e.length>0?`${e.length} selected`:"Select options"})]}),a.jsx(Ua,{className:"h-4 w-4 text-body-secondary"})]})}),onValueChange:d=>s(d)}),a.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[a.jsxs("p",{className:"text-sm font-medium text-body-primary mb-2",children:["Selected Items (",e.length,"):"]}),t.length>0?a.jsx("div",{className:"gap-2 flex flex-wrap",children:t.map((d,n)=>a.jsx("span",{className:`px-2 py-1 rounded-md bg-surface-primary text-sm
                  text-body-primary border-divider-default border`,children:d},n))}):a.jsx("p",{className:"text-sm text-body-secondary italic",children:"No items selected"})]})]})},Pe={render:()=>a.jsx(Qo,{}),parameters:{docs:{description:{story:"This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges."},source:{code:`import { MultiSelect } from '@chemican/components';
import { useState } from 'react';
import { IconUsers, IconChevronDown } from '@tabler/icons-react';

const [selectedValues, setSelectedValues] = useState<string[]>(['apple', 'banana']);

const selectedLabels = selectedValues
  .map((value) => options.find((opt) => opt.value === value)?.label)
  .filter(Boolean);

<>
  <MultiSelect
    options={options}
    hideSelection={true}
    customTrigger={
      <button className="px-4 py-3 rounded-md bg-surface-primary border-interactive-default border hover:bg-surface-secondary focus:ring-4 focus:ring-interactive-focused focus:outline-none">
        <div className="flex items-center justify-between gap-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <IconUsers className="h-5 w-5 text-body-secondary" />
            <span className="font-medium text-body-primary">
              {selectedValues.length > 0
                ? \`\${selectedValues.length} selected\`
                : 'Select options'}
            </span>
          </div>
          <IconChevronDown className="h-4 w-4 text-body-secondary" />
        </div>
      </button>
    }
    onValueChange={(values) => setSelectedValues(values)}
  />

  <div className="p-4 rounded-md bg-surface-secondary">
    <p className="text-sm font-medium mb-2">
      Selected Items ({selectedValues.length}):
    </p>
    {selectedLabels.map((label, index) => (
      <span key={index} className="px-2 py-1 rounded-md bg-surface-primary text-sm">
        {label}
      </span>
    ))}
  </div>
</>`}}}},Ue={args:{options:R,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates the inline selection display mode. When selectionDisplayMode is set to "inline", selected values are displayed as comma-separated text within the trigger button instead of as badge elements below it. This provides a more compact layout that is suitable for space-constrained interfaces.'},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},Zo=()=>a.jsxs("div",{className:"gap-6 flex flex-col",children:[a.jsxs("div",{className:"gap-2 flex flex-col",children:[a.jsx("h3",{className:"font-semibold text-body-primary",children:"Default Mode (Badges Below)"}),a.jsx(Z,{options:R,placeholder:"Select fruits...",selectionDisplayMode:"default",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]}),a.jsxs("div",{className:"gap-2 flex flex-col",children:[a.jsx("h3",{className:"font-semibold text-body-primary",children:"Inline Mode (Inside Trigger)"}),a.jsx(Z,{options:R,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]})]}),Fe={render:()=>a.jsx(Zo,{}),parameters:{docs:{description:{story:"This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area."},source:{code:`import { MultiSelect } from '@chemican/components';

// Default mode - badges below trigger
<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="default"
  defaultValue={['apple', 'banana', 'cherry']}
/>

// Inline mode - text inside trigger
<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana', 'cherry']}
/>`}}}};var Lt,Et,qt;Ne.parameters={...Ne.parameters,docs:{...(Lt=Ne.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(qt=(Et=Ne.parameters)==null?void 0:Et.docs)==null?void 0:qt.source}}};var Wt,Dt,$t;Te.parameters={...Te.parameters,docs:{...(Wt=Te.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...($t=(Dt=Te.parameters)==null?void 0:Dt.docs)==null?void 0:$t.source}}};var Bt,zt,Pt;Ie.parameters={...Ie.parameters,docs:{...(Bt=Ie.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    options: optionsWithTags,
    placeholder: '選択してください',
    renderOption: ({
      option,
      location,
      onRemove
    }: RenderOptionContext) => {
      const colorIndex = optionsWithTags.findIndex(opt => opt.value === option.value);
      const colorCode = tagColorCodes[colorIndex % tagColorCodes.length];
      if (location === 'badge') {
        return <Tag colorCode={colorCode} onRemove={onRemove}>
            {option.label}
          </Tag>;
      }

      // Render in dropdown with Tag
      return <div className="gap-2 flex items-center">
          <Tag colorCode={colorCode} size="sm">
            {option.label}
          </Tag>
        </div>;
    },
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction.'
      },
      source: {
        code: \`import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

const options = [
  { label: 'タグアルファ', value: 'project-alpha' },
  { label: 'タグベータ', value: 'project-beta' },
  { label: 'タグガンマ', value: 'project-gamma' },
  { label: 'タグデルタ', value: 'project-delta' },
  { label: 'タグイプシロン', value: 'project-epsilon' },
];

const tagColorCodes: TagColorCode[] = [29, 27, 21, 33, 32]; // Lime, Green, Purple, Orange, Yellow

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const colorIndex = options.findIndex((opt) => opt.value === option.value);
    const colorCode = tagColorCodes[colorIndex % tagColorCodes.length];

    if (location === 'badge') {
      return (
        <Tag colorCode={colorCode} onRemove={onRemove}>
          {option.label}
        </Tag>
      );
    }

    // Render in dropdown with Tag
    return (
      <div className="gap-2 flex items-center">
        <Tag colorCode={colorCode} size="sm">
          {option.label}
        </Tag>
      </div>
    );
  }}
  onValueChange={(values) => console.log('Selected values:', values)}
/>\`
      }
    }
  }
}`,...(Pt=(zt=Ie.parameters)==null?void 0:zt.docs)==null?void 0:Pt.source}}};var Ut,Ft,_t;Ve.parameters={...Ve.parameters,docs:{...(Ut=Ve.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  args: {
    options: optionsWithStatus,
    placeholder: '選択してください',
    renderOption: ({
      option,
      location,
      onRemove
    }: RenderOptionContext) => {
      const statusOption = optionsWithStatus.find(opt => opt.value === option.value);
      const statusLevel = statusOption?.statusLevel;
      if (location === 'badge') {
        return <StatusIndicator level={statusLevel} onRemove={onRemove}>
            {option.label}
          </StatusIndicator>;
      }

      // Render in dropdown with Status
      return <div className="gap-2 flex items-center">
          <StatusIndicator level={statusLevel} size="sm">
            {option.label}
          </StatusIndicator>
        </div>;
    },
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction.'
      },
      source: {
        code: \`import { MultiSelect, Status } from '@chemican/components';

const options = [
  { label: '成功', value: 'status-success', statusLevel: 'success' },
  { label: '進行中', value: 'status-inprogress', statusLevel: 'inProgress' },
  { label: '準備中', value: 'status-queue', statusLevel: 'queue' },
  { label: 'エラー', value: 'status-alert', statusLevel: 'alert' },
  { label: '注意', value: 'status-warning', statusLevel: 'warning' },
  { label: '開始前', value: 'status-neutral', statusLevel: 'neutral' },
];

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const statusOption = options.find((opt) => opt.value === option.value);
    const statusLevel = statusOption?.statusLevel;

    if (location === 'badge') {
      return (
        <StatusIndicator level={statusLevel} onRemove={onRemove}>
          {option.label}
        </StatusIndicator>
      );
    }

    // Render in dropdown with Status
    return (
      <div className="gap-2 flex items-center">
        <StatusIndicator level={statusLevel} size="sm">
          {option.label}
        </StatusIndicator>
      </div>
    );
  }}
  onValueChange={(values) => console.log('Selected values:', values)}
/>\`
      }
    }
  }
}`,...(_t=(Ft=Ve.parameters)==null?void 0:Ft.docs)==null?void 0:_t.source}}};var Gt,Ht,Kt;Re.parameters={...Re.parameters,docs:{...(Gt=Re.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Kt=(Ht=Re.parameters)==null?void 0:Ht.docs)==null?void 0:Kt.source}}};var Yt,Xt,Jt;je.parameters={...je.parameters,docs:{...(Yt=je.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Jt=(Xt=je.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};var Qt,Zt,ea;Oe.parameters={...Oe.parameters,docs:{...(Qt=Oe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ea=(Zt=Oe.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,oa;Me.parameters={...Me.parameters,docs:{...(ta=Me.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003'],
    placeholder: 'Max 2 visible...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(oa=(aa=Me.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var sa,la,na;ke.parameters={...ke.parameters,docs:{...(sa=ke.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(na=(la=ke.parameters)==null?void 0:la.docs)==null?void 0:na.source}}};var ra,ia,ca;Ae.parameters={...Ae.parameters,docs:{...(ra=Ae.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ca=(ia=Ae.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var da,ua,pa;Le.parameters={...Le.parameters,docs:{...(da=Le.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(pa=(ua=Le.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var ma,fa,ha;Ee.parameters={...Ee.parameters,docs:{...(ma=Ee.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Disabled state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ha=(fa=Ee.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};var va,ba,ga;qe.parameters={...qe.parameters,docs:{...(va=qe.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    options: [],
    emptyIndicator: <div className="py-6 flex flex-col items-center text-center">
        <IconStar className="h-12 w-12 text-body-secondary mb-2" />
        <p className="text-body-secondary">No options available</p>
        <p className="text-xs text-body-secondary mt-1">
          Try a different search term
        </p>
      </div>,
    placeholder: 'Custom empty state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ga=(ba=qe.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var ya,xa,wa;We.parameters={...We.parameters,docs:{...(ya=We.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    filterByValueAndLabel: true,
    placeholder: 'Search by label or value...',
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'
      }
    }
  }
}`,...(wa=(xa=We.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Sa,Ca,Na;De.parameters={...De.parameters,docs:{...(Sa=De.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Custom render...',
    renderOption: ({
      option,
      location,
      isSelected,
      onRemove
    }: RenderOptionContext) => {
      const IconComponent = option.icon as React.ComponentType<{
        className?: string;
      }>;
      if (location === 'badge') {
        return <div className="gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border">
            {IconComponent && <IconComponent className="h-3 w-3" />}
            <span className="text-sm font-medium">{option.label}</span>
            {onRemove && <button onClick={e => {
            e.stopPropagation();
            onRemove();
          }} className="ml-1 hover:bg-interactive-alert-hover rounded p-0.5">
                <IconX className="h-3 w-3 text-interactive-alert-default" />
              </button>}
          </div>;
      }

      // Render in dropdown
      return <div className="gap-2 flex items-center">
          {IconComponent && <IconComponent className={\`h-4 w-4
              \${isSelected ? 'text-interactive-primary-default' : 'text-body-secondary'}\`} />}
          <span className={isSelected ? 'font-bold text-interactive-primary-default' : ''}>
            {option.label}
          </span>
          {isSelected && <span className="text-xs text-body-success ml-auto">
              ✓ Selected
            </span>}
        </div>;
    },
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button.'
      }
    }
  }
}`,...(Na=(Ca=De.parameters)==null?void 0:Ca.docs)==null?void 0:Na.source}}};var Ta,Ia,Va;$e.parameters={...$e.parameters,docs:{...(Ta=$e.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  render: () => <WithOnApplySelectionComponent />,
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';
import { useState } from 'react';

const [appliedValues, setAppliedValues] = useState<string[]>([]);

<MultiSelect
  options={options}
  placeholder="Select fruits and click Apply..."
  onValueChange={(values) => console.log('Values changed:', values)}
  onApplySelection={(values) => {
    console.log('Values applied:', values);
    setAppliedValues(values);
  }}
/>\`
      }
    }
  }
}`,...(Va=(Ia=$e.parameters)==null?void 0:Ia.docs)==null?void 0:Va.source}}};var Ra,ja,Oa;Be.parameters={...Be.parameters,docs:{...(Ra=Be.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    customTrigger: <button className="px-4 py-2 rounded-md bg-interactive-primary-default
          text-interactive-inverse hover:bg-interactive-primary-hover
          focus:ring-interactive-focused focus:ring-4 focus:outline-none">
        <div className="gap-2 flex items-center">
          <IconStar className="h-5 w-5" />
          <span className="font-medium">Custom Trigger Button</span>
        </div>
      </button>,
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';
import { IconStar } from '@tabler/icons-react';

<MultiSelect
  options={options}
  customTrigger={
    <button className="px-4 py-2 rounded-md bg-interactive-primary-default text-interactive-inverse hover:bg-interactive-primary-hover focus:ring-4 focus:ring-interactive-focused focus:outline-none">
      <div className="flex items-center gap-2">
        <IconStar className="h-5 w-5" />
        <span className="font-medium">Custom Trigger Button</span>
      </div>
    </button>
  }
  onValueChange={(values) => console.log('Selected values:', values)}
/>\`
      }
    }
  }
}`,...(Oa=(ja=Be.parameters)==null?void 0:ja.docs)==null?void 0:Oa.source}}};var Ma,ka,Aa;ze.parameters={...ze.parameters,docs:{...(Ma=ze.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits (badges hidden)...',
    hideSelection: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit'],
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the hideSelection prop which hides the selected option badges below the trigger button. This is useful when you want to show selections only in the dropdown or when you need a more compact layout.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits (badges hidden)..."
  hideSelection={true}
  defaultValue={['apple', 'banana', 'cherry']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>\`
      }
    }
  }
}`,...(Aa=(ka=ze.parameters)==null?void 0:ka.docs)==null?void 0:Aa.source}}};var La,Ea,qa;Pe.parameters={...Pe.parameters,docs:{...(La=Pe.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: () => <CustomTriggerWithHideSelectionComponent />,
  parameters: {
    docs: {
      description: {
        story: 'This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';
import { useState } from 'react';
import { IconUsers, IconChevronDown } from '@tabler/icons-react';

const [selectedValues, setSelectedValues] = useState<string[]>(['apple', 'banana']);

const selectedLabels = selectedValues
  .map((value) => options.find((opt) => opt.value === value)?.label)
  .filter(Boolean);

<>
  <MultiSelect
    options={options}
    hideSelection={true}
    customTrigger={
      <button className="px-4 py-3 rounded-md bg-surface-primary border-interactive-default border hover:bg-surface-secondary focus:ring-4 focus:ring-interactive-focused focus:outline-none">
        <div className="flex items-center justify-between gap-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <IconUsers className="h-5 w-5 text-body-secondary" />
            <span className="font-medium text-body-primary">
              {selectedValues.length > 0
                ? \\\`\\\${selectedValues.length} selected\\\`
                : 'Select options'}
            </span>
          </div>
          <IconChevronDown className="h-4 w-4 text-body-secondary" />
        </div>
      </button>
    }
    onValueChange={(values) => setSelectedValues(values)}
  />

  <div className="p-4 rounded-md bg-surface-secondary">
    <p className="text-sm font-medium mb-2">
      Selected Items ({selectedValues.length}):
    </p>
    {selectedLabels.map((label, index) => (
      <span key={index} className="px-2 py-1 rounded-md bg-surface-primary text-sm">
        {label}
      </span>
    ))}
  </div>
</>\`
      }
    }
  }
}`,...(qa=(Ea=Pe.parameters)==null?void 0:Ea.docs)==null?void 0:qa.source}}};var Wa,Da,$a;Ue.parameters={...Ue.parameters,docs:{...(Wa=Ue.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    selectionDisplayMode: 'inline',
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the inline selection display mode. When selectionDisplayMode is set to "inline", selected values are displayed as comma-separated text within the trigger button instead of as badge elements below it. This provides a more compact layout that is suitable for space-constrained interfaces.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>\`
      }
    }
  }
}`,...($a=(Da=Ue.parameters)==null?void 0:Da.docs)==null?void 0:$a.source}}};var Ba,za,Pa;Fe.parameters={...Fe.parameters,docs:{...(Ba=Fe.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  render: () => <InlineSelectionComparisonComponent />,
  parameters: {
    docs: {
      description: {
        story: 'This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';

// Default mode - badges below trigger
<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="default"
  defaultValue={['apple', 'banana', 'cherry']}
/>

// Inline mode - text inside trigger
<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana', 'cherry']}
/>\`
      }
    }
  }
}`,...(Pa=(za=Fe.parameters)==null?void 0:za.docs)==null?void 0:Pa.source}}};const Ns=["Default","WithDefaultValues","WithTagsAsItems","WithStatusAsItems","WithIcons","Grouped","WithDisabledOptions","MaxCountLimited","NoSearch","NoSelectAll","CloseOnSelect","Disabled","CustomEmptyState","FilterByValueAndLabel","CustomRenderOption","WithOnApplySelection","WithCustomTrigger","WithHideSelection","CustomTriggerWithHideSelection","InlineSelectionDisplay","InlineSelectionComparison"];export{Le as CloseOnSelect,qe as CustomEmptyState,De as CustomRenderOption,Pe as CustomTriggerWithHideSelection,Ne as Default,Ee as Disabled,We as FilterByValueAndLabel,je as Grouped,Fe as InlineSelectionComparison,Ue as InlineSelectionDisplay,Me as MaxCountLimited,ke as NoSearch,Ae as NoSelectAll,Be as WithCustomTrigger,Te as WithDefaultValues,Oe as WithDisabledOptions,ze as WithHideSelection,Re as WithIcons,$e as WithOnApplySelection,Ve as WithStatusAsItems,Ie as WithTagsAsItems,Ns as __namedExportsOrder,Cs as default};
