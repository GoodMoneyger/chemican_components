import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c,e as v}from"./iframe-D7WzbVqD.js";import{S as It}from"./StatusIndicator-CSYeyXNw.js";import{T as Fe}from"./Tag-DHEnhG6r.js";import{c as po}from"./index-Cmh7hi9D.js";import{c as k}from"./utils-BF1SrmGL.js";import{B as Vt}from"./Button-Cw4xtqjT.js";import{P as mo,c as fo,b as ho}from"./Popover-2uLJPw3K.js";import{R as vo,P as bo,O as go,C as yo}from"./index-Bt69GL9S.js";import{P as F}from"./index-BRl6zXgE.js";import{u as ne}from"./index-C8Ew3oCa.js";import{b as xe}from"./index-DaJKEsrv.js";import{I as xo}from"./IconSearch-CF-hYR1q.js";import{a as tt}from"./Checkbox-CCndQYCA.js";import{I as _a}from"./IconChevronDown-qMpcHxz6.js";import{c as rt}from"./createReactComponent-B5z-s8GL.js";import{I as wo}from"./IconX-DCX-I4CM.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./ProgressIndicator-DEXKuKYB.js";import"./index-CMHom0kR.js";import"./index-7D727_E8.js";import"./index-D9mEo9aT.js";import"./index-DiPHunEC.js";import"./index-D9M6y4tp.js";import"./index-C3Xb3rbc.js";import"./index-DmFJ4e6c.js";import"./index-obTSwVr1.js";import"./index-Csd9-ST0.js";import"./index-Cxo9u8pe.js";import"./IconMinus-ixSk_iOK.js";import"./IconCheck-BobDneo4.js";import"./index-DvrrevMS.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]],Co=rt("outline","heart","Heart",So);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]],it=rt("outline","star","Star",No);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]],Fa=rt("outline","users","Users",To);var Rt=1,Io=.9,Vo=.8,Ro=.17,at=.1,ot=.999,jo=.9999,Oo=.99,Mo=/[\\\/_+.#"@\[\(\{&]/,ko=/[\\\/_+.#"@\[\(\{&]/g,Ao=/[\s-]/,Ha=/[\s-]/g;function st(e,l,t,d,n,p,h){if(p===l.length)return n===e.length?Rt:Oo;var x=`${n},${p}`;if(h[x]!==void 0)return h[x];for(var T=d.charAt(p),m=t.indexOf(T,n),w=0,C,L,j,$;m>=0;)C=st(e,l,t,d,m+1,p+1,h),C>w&&(m===n?C*=Rt:Mo.test(e.charAt(m-1))?(C*=Vo,j=e.slice(n,m-1).match(ko),j&&n>0&&(C*=Math.pow(ot,j.length))):Ao.test(e.charAt(m-1))?(C*=Io,$=e.slice(n,m-1).match(Ha),$&&n>0&&(C*=Math.pow(ot,$.length))):(C*=Ro,n>0&&(C*=Math.pow(ot,m-n))),e.charAt(m)!==l.charAt(p)&&(C*=jo)),(C<at&&t.charAt(m-1)===d.charAt(p+1)||d.charAt(p+1)===d.charAt(p)&&t.charAt(m-1)!==d.charAt(p))&&(L=st(e,l,t,d,m+1,p+2,h),L*at>C&&(C=L*at)),C>w&&(w=C),m=t.indexOf(T,m+1);return h[x]=w,w}function jt(e){return e.toLowerCase().replace(Ha," ")}function Lo(e,l,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,st(e,l,jt(e),jt(l),0,0,{})}var be='[cmdk-group=""]',lt='[cmdk-group-items=""]',Eo='[cmdk-group-heading=""]',Ga='[cmdk-item=""]',Ot=`${Ga}:not([aria-disabled="true"])`,nt="cmdk-item-select",le="data-value",qo=(e,l,t)=>Lo(e,l,t),Ka=c.createContext(void 0),we=()=>c.useContext(Ka),Ya=c.createContext(void 0),ct=()=>c.useContext(Ya),Xa=c.createContext(void 0),Ja=c.forwardRef((e,l)=>{let t=se(()=>{var o,f;return{search:"",value:(f=(o=e.value)!=null?o:e.defaultValue)!=null?f:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),d=se(()=>new Set),n=se(()=>new Map),p=se(()=>new Map),h=se(()=>new Set),x=Qa(e),{label:T,children:m,value:w,onValueChange:C,filter:L,shouldFilter:j,loop:$,disablePointerSelection:re=!1,vimBindings:z=!0,...ee}=e,H=ne(),Se=ne(),ie=ne(),P=c.useRef(null),I=Go();Q(()=>{if(w!==void 0){let o=w.trim();t.current.value=o,O.emit()}},[w]),Q(()=>{I(6,ae)},[]);let O=c.useMemo(()=>({subscribe:o=>(h.current.add(o),()=>h.current.delete(o)),snapshot:()=>t.current,setState:(o,f,b)=>{var u,i,g,S;if(!Object.is(t.current[o],f)){if(t.current[o]=f,o==="search")te(),de(),I(1,A);else if(o==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let N=document.getElementById(ie);N?N.focus():(u=document.getElementById(H))==null||u.focus()}if(I(7,()=>{var N;t.current.selectedItemId=(N=U())==null?void 0:N.id,O.emit()}),b||I(5,ae),((i=x.current)==null?void 0:i.value)!==void 0){let N=f??"";(S=(g=x.current).onValueChange)==null||S.call(g,N);return}}O.emit()}},emit:()=>{h.current.forEach(o=>o())}}),[]),G=c.useMemo(()=>({value:(o,f,b)=>{var u;f!==((u=p.current.get(o))==null?void 0:u.value)&&(p.current.set(o,{value:f,keywords:b}),t.current.filtered.items.set(o,ce(f,b)),I(2,()=>{de(),O.emit()}))},item:(o,f)=>(d.current.add(o),f&&(n.current.has(f)?n.current.get(f).add(o):n.current.set(f,new Set([o]))),I(3,()=>{te(),de(),t.current.value||A(),O.emit()}),()=>{p.current.delete(o),d.current.delete(o),t.current.filtered.items.delete(o);let b=U();I(4,()=>{te(),(b==null?void 0:b.getAttribute("id"))===o&&A(),O.emit()})}),group:o=>(n.current.has(o)||n.current.set(o,new Set),()=>{p.current.delete(o),n.current.delete(o)}),filter:()=>x.current.shouldFilter,label:T||e["aria-label"],getDisablePointerSelection:()=>x.current.disablePointerSelection,listId:H,inputId:ie,labelId:Se,listInnerRef:P}),[]);function ce(o,f){var b,u;let i=(u=(b=x.current)==null?void 0:b.filter)!=null?u:qo;return o?i(o,t.current.search,f):0}function de(){if(!t.current.search||x.current.shouldFilter===!1)return;let o=t.current.filtered.items,f=[];t.current.filtered.groups.forEach(u=>{let i=n.current.get(u),g=0;i.forEach(S=>{let N=o.get(S);g=Math.max(N,g)}),f.push([u,g])});let b=P.current;K().sort((u,i)=>{var g,S;let N=u.getAttribute("id"),E=i.getAttribute("id");return((g=o.get(E))!=null?g:0)-((S=o.get(N))!=null?S:0)}).forEach(u=>{let i=u.closest(lt);i?i.appendChild(u.parentElement===i?u:u.closest(`${lt} > *`)):b.appendChild(u.parentElement===b?u:u.closest(`${lt} > *`))}),f.sort((u,i)=>i[1]-u[1]).forEach(u=>{var i;let g=(i=P.current)==null?void 0:i.querySelector(`${be}[${le}="${encodeURIComponent(u[0])}"]`);g==null||g.parentElement.appendChild(g)})}function A(){let o=K().find(b=>b.getAttribute("aria-disabled")!=="true"),f=o==null?void 0:o.getAttribute(le);O.setState("value",f||void 0)}function te(){var o,f,b,u;if(!t.current.search||x.current.shouldFilter===!1){t.current.filtered.count=d.current.size;return}t.current.filtered.groups=new Set;let i=0;for(let g of d.current){let S=(f=(o=p.current.get(g))==null?void 0:o.value)!=null?f:"",N=(u=(b=p.current.get(g))==null?void 0:b.keywords)!=null?u:[],E=ce(S,N);t.current.filtered.items.set(g,E),E>0&&i++}for(let[g,S]of n.current)for(let N of S)if(t.current.filtered.items.get(N)>0){t.current.filtered.groups.add(g);break}t.current.filtered.count=i}function ae(){var o,f,b;let u=U();u&&(((o=u.parentElement)==null?void 0:o.firstChild)===u&&((b=(f=u.closest(be))==null?void 0:f.querySelector(Eo))==null||b.scrollIntoView({block:"nearest"})),u.scrollIntoView({block:"nearest"}))}function U(){var o;return(o=P.current)==null?void 0:o.querySelector(`${Ga}[aria-selected="true"]`)}function K(){var o;return Array.from(((o=P.current)==null?void 0:o.querySelectorAll(Ot))||[])}function Y(o){let f=K()[o];f&&O.setState("value",f.getAttribute(le))}function oe(o){var f;let b=U(),u=K(),i=u.findIndex(S=>S===b),g=u[i+o];(f=x.current)!=null&&f.loop&&(g=i+o<0?u[u.length-1]:i+o===u.length?u[0]:u[i+o]),g&&O.setState("value",g.getAttribute(le))}function ue(o){let f=U(),b=f==null?void 0:f.closest(be),u;for(;b&&!u;)b=o>0?Fo(b,be):Ho(b,be),u=b==null?void 0:b.querySelector(Ot);u?O.setState("value",u.getAttribute(le)):oe(o)}let pe=()=>Y(K().length-1),Ce=o=>{o.preventDefault(),o.metaKey?pe():o.altKey?ue(1):oe(1)},me=o=>{o.preventDefault(),o.metaKey?Y(0):o.altKey?ue(-1):oe(-1)};return c.createElement(F.div,{ref:l,tabIndex:-1,...ee,"cmdk-root":"",onKeyDown:o=>{var f;(f=ee.onKeyDown)==null||f.call(ee,o);let b=o.nativeEvent.isComposing||o.keyCode===229;if(!(o.defaultPrevented||b))switch(o.key){case"n":case"j":{z&&o.ctrlKey&&Ce(o);break}case"ArrowDown":{Ce(o);break}case"p":case"k":{z&&o.ctrlKey&&me(o);break}case"ArrowUp":{me(o);break}case"Home":{o.preventDefault(),Y(0);break}case"End":{o.preventDefault(),pe();break}case"Enter":{o.preventDefault();let u=U();if(u){let i=new Event(nt);u.dispatchEvent(i)}}}}},c.createElement("label",{"cmdk-label":"",htmlFor:G.inputId,id:G.labelId,style:Yo},T),He(e,o=>c.createElement(Ya.Provider,{value:O},c.createElement(Ka.Provider,{value:G},o))))}),Wo=c.forwardRef((e,l)=>{var t,d;let n=ne(),p=c.useRef(null),h=c.useContext(Xa),x=we(),T=Qa(e),m=(d=(t=T.current)==null?void 0:t.forceMount)!=null?d:h==null?void 0:h.forceMount;Q(()=>{if(!m)return x.item(n,h==null?void 0:h.id)},[m]);let w=Za(n,p,[e.value,e.children,p],e.keywords),C=ct(),L=_(I=>I.value&&I.value===w.current),j=_(I=>m||x.filter()===!1?!0:I.search?I.filtered.items.get(n)>0:!0);c.useEffect(()=>{let I=p.current;if(!(!I||e.disabled))return I.addEventListener(nt,$),()=>I.removeEventListener(nt,$)},[j,e.onSelect,e.disabled]);function $(){var I,O;re(),(O=(I=T.current).onSelect)==null||O.call(I,w.current)}function re(){C.setState("value",w.current,!0)}if(!j)return null;let{disabled:z,value:ee,onSelect:H,forceMount:Se,keywords:ie,...P}=e;return c.createElement(F.div,{ref:xe(p,l),...P,id:n,"cmdk-item":"",role:"option","aria-disabled":!!z,"aria-selected":!!L,"data-disabled":!!z,"data-selected":!!L,onPointerMove:z||x.getDisablePointerSelection()?void 0:re,onClick:z?void 0:$},e.children)}),$o=c.forwardRef((e,l)=>{let{heading:t,children:d,forceMount:n,...p}=e,h=ne(),x=c.useRef(null),T=c.useRef(null),m=ne(),w=we(),C=_(j=>n||w.filter()===!1?!0:j.search?j.filtered.groups.has(h):!0);Q(()=>w.group(h),[]),Za(h,x,[e.value,e.heading,T]);let L=c.useMemo(()=>({id:h,forceMount:n}),[n]);return c.createElement(F.div,{ref:xe(x,l),...p,"cmdk-group":"",role:"presentation",hidden:C?void 0:!0},t&&c.createElement("div",{ref:T,"cmdk-group-heading":"","aria-hidden":!0,id:m},t),He(e,j=>c.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?m:void 0},c.createElement(Xa.Provider,{value:L},j))))}),Do=c.forwardRef((e,l)=>{let{alwaysRender:t,...d}=e,n=c.useRef(null),p=_(h=>!h.search);return!t&&!p?null:c.createElement(F.div,{ref:xe(n,l),...d,"cmdk-separator":"",role:"separator"})}),Bo=c.forwardRef((e,l)=>{let{onValueChange:t,...d}=e,n=e.value!=null,p=ct(),h=_(m=>m.search),x=_(m=>m.selectedItemId),T=we();return c.useEffect(()=>{e.value!=null&&p.setState("search",e.value)},[e.value]),c.createElement(F.input,{ref:l,...d,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":T.listId,"aria-labelledby":T.labelId,"aria-activedescendant":x,id:T.inputId,type:"text",value:n?e.value:h,onChange:m=>{n||p.setState("search",m.target.value),t==null||t(m.target.value)}})}),zo=c.forwardRef((e,l)=>{let{children:t,label:d="Suggestions",...n}=e,p=c.useRef(null),h=c.useRef(null),x=_(m=>m.selectedItemId),T=we();return c.useEffect(()=>{if(h.current&&p.current){let m=h.current,w=p.current,C,L=new ResizeObserver(()=>{C=requestAnimationFrame(()=>{let j=m.offsetHeight;w.style.setProperty("--cmdk-list-height",j.toFixed(1)+"px")})});return L.observe(m),()=>{cancelAnimationFrame(C),L.unobserve(m)}}},[]),c.createElement(F.div,{ref:xe(p,l),...n,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":x,"aria-label":d,id:T.listId},He(e,m=>c.createElement("div",{ref:xe(h,T.listInnerRef),"cmdk-list-sizer":""},m)))}),Po=c.forwardRef((e,l)=>{let{open:t,onOpenChange:d,overlayClassName:n,contentClassName:p,container:h,...x}=e;return c.createElement(vo,{open:t,onOpenChange:d},c.createElement(bo,{container:h},c.createElement(go,{"cmdk-overlay":"",className:n}),c.createElement(yo,{"aria-label":e.label,"cmdk-dialog":"",className:p},c.createElement(Ja,{ref:l,...x}))))}),Uo=c.forwardRef((e,l)=>_(t=>t.filtered.count===0)?c.createElement(F.div,{ref:l,...e,"cmdk-empty":"",role:"presentation"}):null),_o=c.forwardRef((e,l)=>{let{progress:t,children:d,label:n="Loading...",...p}=e;return c.createElement(F.div,{ref:l,...p,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n},He(e,h=>c.createElement("div",{"aria-hidden":!0},h)))}),q=Object.assign(Ja,{List:zo,Item:Wo,Input:Bo,Group:$o,Separator:Do,Dialog:Po,Empty:Uo,Loading:_o});function Fo(e,l){let t=e.nextElementSibling;for(;t;){if(t.matches(l))return t;t=t.nextElementSibling}}function Ho(e,l){let t=e.previousElementSibling;for(;t;){if(t.matches(l))return t;t=t.previousElementSibling}}function Qa(e){let l=c.useRef(e);return Q(()=>{l.current=e}),l}var Q=typeof window>"u"?c.useEffect:c.useLayoutEffect;function se(e){let l=c.useRef();return l.current===void 0&&(l.current=e()),l}function _(e){let l=ct(),t=()=>e(l.snapshot());return c.useSyncExternalStore(l.subscribe,t,t)}function Za(e,l,t,d=[]){let n=c.useRef(),p=we();return Q(()=>{var h;let x=(()=>{var m;for(let w of t){if(typeof w=="string")return w.trim();if(typeof w=="object"&&"current"in w)return w.current?(m=w.current.textContent)==null?void 0:m.trim():n.current}})(),T=d.map(m=>m.trim());p.value(e,x,T),(h=l.current)==null||h.setAttribute(le,x),n.current=x}),n}var Go=()=>{let[e,l]=c.useState(),t=se(()=>new Map);return Q(()=>{t.current.forEach(d=>d()),t.current=new Map},[e]),(d,n)=>{t.current.set(d,n),l({})}};function Ko(e){let l=e.type;return typeof l=="function"?l(e.props):"render"in l?l.render(e.props):e}function He({asChild:e,children:l},t){return e&&c.isValidElement(l)?c.cloneElement(Ko(l),{ref:l.ref},t(l.props.children)):t(l)}var Yo={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const dt=v.forwardRef(({className:e,...l},t)=>a.jsx(q,{ref:t,className:k(`bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,e),...l}));dt.displayName=q.displayName;const ut=v.forwardRef(({className:e,...l},t)=>a.jsx("div",{className:"border-divider-default py-sm px-md flex items-center border-b","cmdk-input-wrapper":"",children:a.jsxs("div",{className:`border-interactive-default bg-surface-primary
        hover:border-interactive-hover
        has-[:disabled]:border-interactive-disabled
        has-[:disabled]:bg-surface-disabled
        has-[:focus]:ring-interactive-focused h-10 rounded px-sm relative flex
        w-full items-center border
        has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
        has-[:focus]:outline-0`,children:[a.jsx(xo,{className:"mr-xxs h-3.5 w-3.5 shrink-0"}),a.jsx(q.Input,{ref:t,className:k(`placeholder:text-body-placeholder h-11 rounded-md py-3 flex w-full
          bg-transparent outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,e),...l})]})}));ut.displayName=q.Input.displayName;const pt=v.forwardRef(({className:e,...l},t)=>a.jsx(q.List,{ref:t,className:k("max-h-[300px] overflow-x-hidden overflow-y-auto",e),...l}));pt.displayName=q.List.displayName;const mt=v.forwardRef((e,l)=>a.jsx(q.Empty,{ref:l,className:"text-body-secondary py-6 text-center",...e}));mt.displayName=q.Empty.displayName;const ge=v.forwardRef(({className:e,...l},t)=>a.jsx(q.Group,{ref:t,className:k(`text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,e),...l}));ge.displayName=q.Group.displayName;const eo=v.forwardRef(({className:e,...l},t)=>a.jsx(q.Separator,{ref:t,className:k("-mx-1 h-px bg-[var(--token-color-border-divider-default)]",e),...l}));eo.displayName=q.Separator.displayName;const ye=v.forwardRef(({className:e,...l},t)=>a.jsx(q.Item,{ref:t,className:k(`hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg h-10 py-1.5 relative flex
      cursor-default items-center outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,e),...l}));ye.displayName=q.Item.displayName;dt.__docgenInfo={description:"",methods:[]};ut.__docgenInfo={description:"",methods:[]};pt.__docgenInfo={description:"",methods:[]};mt.__docgenInfo={description:"",methods:[]};ge.__docgenInfo={description:"",methods:[]};ye.__docgenInfo={description:"",methods:[]};eo.__docgenInfo={description:"",methods:[]};const Mt=po("ease-in-out transition-all duration-300",{variants:{variant:{default:`border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,secondary:`border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,destructive:`bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`}},defaultVariants:{variant:"default"}}),Xo=({options:e,onValueChange:l=i=>i,onApplySelection:t=i=>i,variant:d,defaultValue:n=[],placeholder:p="選択してください",placeholderAriaLabel:h="選択してください",triggerDescription:x="マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",noSelectionLabel:T="オプションが選択されていません",searchHelpText:m="入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",searchAriaLabel:w="利用可能なオプションを検索",optionsListAriaLabel:C="利用可能なオプション",selectAllLabel:L="すべて選択",selectAllCountLabel:j="オプション",clearAllLabel:$="すべてクリア",closeLabel:re="閉じる",moreSelectedLabel:z="その他",searchPlaceholder:ee="オプションを検索...",maxCount:H=10,modalPopover:Se=!1,className:ie,hideSelectAll:P=!1,searchable:I=!0,emptyIndicator:O="結果が見つかりません。",autoSize:G=!1,singleLine:ce=!1,popoverClassName:de,disabled:A=!1,invalid:te=!1,responsive:ae,minWidth:U,maxWidth:K,deduplicateOptions:Y=!1,resetOnDefaultValueChange:oe=!0,closeOnSelect:ue=!1,filterByValueAndLabel:pe=!1,renderOption:Ce,customTrigger:me,selectionDisplayMode:o="default",hideSelection:f=!1,...b},u)=>{const[i,g]=v.useState(n),[S,N]=v.useState(!1),[E,Ge]=v.useState(""),[ao,ft]=v.useState(""),[oo,ht]=v.useState(""),Ke=v.useRef(i.length),vt=v.useRef(S),bt=v.useRef(E),X=v.useCallback((s,r="polite")=>{r==="assertive"?(ht(s),setTimeout(()=>ht(""),100)):(ft(s),setTimeout(()=>ft(""),100))},[]),fe=v.useId(),gt=`${fe}-listbox`,yt=`${fe}-description`,xt=`${fe}-count`,wt=v.useRef(n),Ye=v.useCallback(s=>{const r=s[0];return!!(r&&typeof r=="object"&&"heading"in r)},[]),Xe=v.useCallback((s,r)=>{if(s.length!==r.length)return!1;const y=[...s].sort(),V=[...r].sort();return y.every((M,ve)=>M===V[ve])},[]),St=v.useCallback(()=>{g(n),N(!1),Ge(""),l(n)},[n,l]),D=v.useRef(null);v.useImperativeHandle(u,()=>({reset:St,getSelectedValues:()=>i,setSelectedValues:s=>{g(s),l(s)},clear:()=>{g([]),l([])},focus:()=>{if(D.current){D.current.focus();const s=D.current.style.outline,r=D.current.style.outlineOffset;D.current.style.outline="2px solid hsl(var(--ring))",D.current.style.outlineOffset="2px",setTimeout(()=>{D.current&&(D.current.style.outline=s,D.current.style.outlineOffset=r)},1e3)}}}),[St,i,l]);const[B,Je]=v.useState("desktop");v.useEffect(()=>{if(typeof window>"u")return;const s=()=>{const r=window.innerWidth;r<640?Je("mobile"):r<1024?Je("tablet"):Je("desktop")};return s(),window.addEventListener("resize",s),()=>{typeof window<"u"&&window.removeEventListener("resize",s)}},[]);const J=(()=>{if(!ae)return{maxCount:H,compactMode:!1};if(ae===!0){const y={mobile:{maxCount:2,compactMode:!0},tablet:{maxCount:4,compactMode:!1},desktop:{maxCount:6,compactMode:!1}}[B];return{maxCount:(y==null?void 0:y.maxCount)??H,compactMode:(y==null?void 0:y.compactMode)??!1}}const s=ae[B];return{maxCount:(s==null?void 0:s.maxCount)??H,compactMode:(s==null?void 0:s.compactMode)??!1}})(),W=v.useCallback(()=>{if(e.length===0)return[];let s;Ye(e)?s=e.flatMap(M=>M.options):s=e;const r=new Set,y=[],V=[];return s.forEach(M=>{r.has(M.value)?(y.push(M.value),Y||V.push(M)):(r.add(M.value),V.push(M))}),Y?V:s},[e,Y,Ye]),he=v.useCallback(s=>W().find(y=>y.value===s),[W]),lo=v.useCallback((s,r)=>{const[y,V]=s.split(":");if(!pe)return V&&V.toLowerCase().includes(r.toLowerCase())?1:0;const M=r.toLowerCase();return V&&V.toLowerCase().includes(M)||y&&y.toLowerCase().includes(M)?1:0},[pe]),so=s=>{if(s.key==="Enter")N(!0);else if(s.key==="Backspace"&&!s.currentTarget.value){const r=[...i];r.pop(),g(r),l(r)}},Qe=s=>{if(A)return;const r=he(s);if(r!=null&&r.disabled)return;const y=i.includes(s)?i.filter(V=>V!==s):[...i,s];g(y),l(y),ue&&N(!1)},Ct=()=>{A||(g([]),t([]),l([]))},no=()=>{A||N(s=>!s)},ro=()=>{if(A)return;const s=i.slice(0,J.maxCount);g(s),l(s)},io=()=>{if(A)return;const s=W().filter(r=>!r.disabled);if(i.length===s.length)Ct();else{const r=s.map(y=>y.value);g(r),l(r)}ue&&N(!1)},Ze=Ce||(s=>{const{option:r,location:y,onRemove:V,disabled:M}=s;return y==="badge"?a.jsx(Fe,{className:k(Mt({variant:d}),J.compactMode&&"text-xs px-1.5 py-0.5",B==="mobile"&&"max-w-[120px] truncate",ce&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",M&&"cursor-not-allowed"),...!M&&{onRemove:V},children:r.label}):r.label});v.useEffect(()=>{if(!oe)return;const s=wt.current;Xe(s,n)||(Xe(i,n)||g(n),wt.current=[...n])},[n,i,Xe,oe]);const et={minWidth:U||(B==="mobile"?"0px":"200px"),maxWidth:K||"100%",width:G?"auto":"100%"},Nt=v.useMemo(()=>o==="default"||i.length===0?p:i.map(s=>{var r;return(r=he(s))==null?void 0:r.label}).filter(Boolean).join(", "),[i,he,p,o]);return v.useEffect(()=>{S||Ge("")},[S]),v.useEffect(()=>{const s=i.length,r=W(),y=r.filter(V=>!V.disabled).length;if(s!==Ke.current){const V=s-Ke.current;if(V>0){const ve=i.slice(-V).map(co=>{var Tt;return(Tt=r.find(uo=>uo.value===co))==null?void 0:Tt.label}).filter(Boolean);ve.length===1?X(`${ve[0]} selected. ${s} of ${y} options selected.`):X(`${ve.length} options selected. ${s} of ${y} total selected.`)}else V<0&&X(`Option removed. ${s} of ${y} options selected.`);Ke.current=s}S!==vt.current&&(X(S?`Dropdown opened. ${y} options available. Use arrow keys to navigate.`:"Dropdown closed."),vt.current=S),E!==bt.current&&E!==void 0&&(E&&S&&X(`Searching for "${E}"`),bt.current=E)},[i,S,E,X,W]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"sr-only",children:[a.jsx("div",{"aria-live":"polite","aria-atomic":"true",role:"status",children:ao}),a.jsx("div",{"aria-live":"assertive","aria-atomic":"true",role:"alert",children:oo})]}),a.jsxs(mo,{open:S,onOpenChange:N,modal:Se,children:[a.jsx("div",{id:yt,className:"sr-only",children:x}),a.jsx("div",{id:xt,className:"sr-only","aria-live":"polite",children:i.length===0?T:`${i.length} option${i.length===1?"":"s"} selected: ${i.map(s=>{var r;return(r=he(s))==null?void 0:r.label}).filter(Boolean).join(", ")}`}),a.jsxs("div",{className:k(G&&"w-auto",ie),children:[a.jsx(fo,{asChild:!0,children:me||a.jsx("button",{ref:D,...b,onClick:no,disabled:A,className:k(`border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,G?"w-auto":"w-full",!te&&`hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,te&&`border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,J.compactMode&&"min-h-8 text-sm",B==="mobile"&&"min-h-12"),style:{...et,maxWidth:`min(${et.maxWidth}, 100%)`},role:"combobox","aria-expanded":S,"aria-haspopup":"listbox","aria-controls":S?gt:void 0,"aria-describedby":`${yt} ${xt}`,"aria-label":`Multi-select: ${i.length} of ${W().length} options selected. ${h}`,children:a.jsxs("div",{className:"mx-auto flex w-full items-center justify-between",children:[a.jsx("span",{className:k("mx-sm",o==="inline"&&"truncate",A?"text-body-disabled":S||o==="inline"&&Nt!==p?"text-body-primary":"text-body-placeholder"),children:Nt}),a.jsx(_a,{className:k("h-4 mx-xs cursor-pointer",A?"text-body-disabled":"text-body-primary")})]})})}),!(f||o==="inline")&&a.jsxs("div",{className:"gap-xxs mt-xxs flex flex-wrap",children:[i.slice(0,J.maxCount).map(s=>{const r=he(s);return r?a.jsx("div",{children:Ze({option:r,location:"badge",onRemove:()=>Qe(s),disabled:A})},s):null}).filter(Boolean),i.length>J.maxCount&&a.jsxs(Fe,{className:k(`text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,Mt({variant:d}),J.compactMode&&"text-xs px-1.5 py-0.5",ce&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",A&&"cursor-not-allowed"),...!A&&{onRemove:ro},children:["+ ",i.length-J.maxCount," ",z]})]})]}),a.jsx(ho,{id:gt,role:"listbox","aria-multiselectable":"true","aria-label":C,className:k("p-0 w-auto",B==="mobile"&&"w-[85vw] max-w-[280px]",B==="tablet"&&"max-w-md w-[70vw]",B==="desktop"&&"min-w-[300px]",de),style:{maxWidth:`min(${et.maxWidth}, 85vw)`,maxHeight:B==="mobile"?"70vh":"60vh",touchAction:"manipulation"},align:"start",children:a.jsxs(dt,{filter:lo,children:[I&&a.jsxs("header",{children:[a.jsx("div",{id:`${fe}-search-help`,className:"sr-only",children:m}),a.jsx(ut,{placeholder:ee,onKeyDown:so,value:E,onValueChange:Ge,"aria-label":w,"aria-describedby":`${fe}-search-help`})]}),a.jsxs(pt,{className:k("max-h-[calc(40vh-56px)] overflow-y-auto",B==="mobile"&&"max-h-[calc(50vh-56px)]"),style:{overscrollBehaviorY:"contain"},children:[a.jsx(mt,{children:O}),!P&&!E&&a.jsx(ge,{children:a.jsxs(ye,{value:"select-all",onSelect:io,role:"option","aria-selected":i.length===W().filter(s=>!s.disabled).length,"aria-label":`Select all ${W().length} options`,className:"cursor-pointer",children:[a.jsx(tt,{className:"mr-xs",checked:i.length===W().filter(s=>!s.disabled).length}),a.jsxs("span",{children:["(",L,W().length>20?a.jsxs(a.Fragment,{children:[" - ",W().length," ",j]}):null,")"]})]},"all")}),Ye(e)?e.map(s=>a.jsx(ge,{heading:s.heading,children:s.options.map(r=>{const y=i.includes(r.value);return a.jsxs(ye,{value:`${r.value}:${r.label}`,onSelect:()=>Qe(r.value),role:"option","aria-selected":y,"aria-disabled":r.disabled??!1,"aria-label":`${r.label}${y?", selected":", not selected"}${r.disabled?", disabled":""}`,className:k("cursor-pointer",r.disabled&&`text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`),disabled:!!r.disabled,children:[a.jsx(tt,{className:"mr-xs",checked:y}),Ze({option:r,location:"dropdown",isSelected:y})]},r.value)})},s.heading)):a.jsx(ge,{children:e.map(s=>{const r=i.includes(s.value);return a.jsxs(ye,{value:`${s.value}:${s.label}`,onSelect:()=>Qe(s.value),role:"option","aria-selected":r,"aria-disabled":s.disabled??!1,"aria-label":`${s.label}${r?", selected":", not selected"}${s.disabled?", disabled":""}`,className:k("cursor-pointer",s.disabled&&`text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`),disabled:!!s.disabled,children:[a.jsx(tt,{className:"mr-xs",checked:r}),Ze({option:s,location:"dropdown",isSelected:r})]},s.value)})})]}),a.jsx("footer",{className:`px-md py-sm bg-surface-primary bottom-0
                border-t-divider-default flex items-center justify-between
                border-t`,children:a.jsxs(a.Fragment,{children:[a.jsx(Vt,{intent:"text",size:"xs",className:"min-w-auto",onClick:Ct,disabled:i.length===0,children:$}),a.jsx(Vt,{intent:"primary",size:"xs",className:"min-w-auto",onClick:()=>{t(i),N(!1)},children:re})]})})]})})]})]})},Z=v.forwardRef(Xo);Z.displayName="MultiSelect";Z.__docgenInfo={description:"",methods:[{name:"getSelectedValues",docblock:null,modifiers:[],params:[],returns:null},{name:"setSelectedValues",docblock:null,modifiers:[],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"T"}],raw:"T[]"}}],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"union",raw:"MultiSelectOption<T>[] | MultiSelectGroup<T>[]",elements:[{name:"Array",elements:[{name:"MultiSelectOption",elements:[{name:"T"}],raw:"MultiSelectOption<T>"}],raw:"MultiSelectOption<T>[]"},{name:"Array",elements:[{name:"MultiSelectGroup",elements:[{name:"T"}],raw:"MultiSelectGroup<T>"}],raw:"MultiSelectGroup<T>[]"}]},description:`Array of options or grouped options to display in the dropdown.
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
Optional, called only when user confirms their selection.`,defaultValue:{value:"(value) => value",computed:!1}}},composes:["Omit","VariantProps"]};const $l={title:"Components/MultiSelect",component:Z,parameters:{docs:{description:{component:"A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","inverted"],description:"Visual style variant of the component"},maxCount:{control:"number",description:'Maximum number of selected items to display before showing "+X more"'},searchable:{control:"boolean",description:"Whether to show search functionality"},hideSelectAll:{control:"boolean",description:'Whether to hide the "Select All" option'},disabled:{control:"boolean",description:"Whether the component is disabled"},closeOnSelect:{control:"boolean",description:"Whether to close the popover after selecting an option"},singleLine:{control:"boolean",description:"Whether to display selected items in a single line with scroll"},autoSize:{control:"boolean",description:"Whether the component should auto-size to its content"},filterByValueAndLabel:{control:"boolean",description:"Whether to filter by both value and label when searching"}}},R=[{label:"Apple",value:"550e8400-e29b-41d4-a716-446655440001"},{label:"Banana",value:"550e8400-e29b-41d4-a716-446655440002"},{label:"Cherry",value:"cherry-fruit"},{label:"Date",value:"550e8400-e29b-41d4-a716-446655440003"},{label:"Elderberry",value:"elderberry-premium"},{label:"Fig",value:"550e8400-e29b-41d4-a716-446655440004"},{label:"Grape",value:"grape-variety"},{label:"Honeydew",value:"550e8400-e29b-41d4-a716-446655440005"}],to=[{label:"Users",value:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",icon:Fa},{label:"Favorites",value:"favorites-collection",icon:it},{label:"Liked",value:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",icon:Co},{label:"Apple",value:"apple-item"},{label:"Banana",value:"6ba7b812-9dad-11d1-80b4-00c04fd430c8"}],Jo=[{heading:"Fruits",options:[{label:"Apple",value:"a1b2c3d4-e5f6-4789-a012-123456789abc"},{label:"Banana",value:"banana-tropical"},{label:"Cherry",value:"b2c3d4e5-f6a7-4890-b123-234567890bcd"}]},{heading:"Vegetables",options:[{label:"Carrot",value:"carrot-orange"},{label:"Broccoli",value:"c3d4e5f6-a7b8-4901-c234-345678901cde"},{label:"Spinach",value:"spinach-leafy"}]},{heading:"Grains",options:[{label:"Rice",value:"d4e5f6a7-b8c9-4012-d345-456789012def"},{label:"Wheat",value:"wheat-grain"},{label:"Oats",value:"e5f6a7b8-c9d0-4123-e456-567890123efa"}]}],Qo=[{label:"Available Option",value:"f6a7b8c9-d0e1-4234-f567-678901234fab"},{label:"Disabled Option",value:"disabled-item",disabled:!0},{label:"Another Available",value:"a7b8c9d0-e1f2-4345-a678-789012345abc"},{label:"Also Disabled",value:"also-disabled-slug",disabled:!0}],Ne={args:{options:R,placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},Te={args:{options:R,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},kt=[{label:"タグアルファ",value:"project-alpha"},{label:"タグベータ",value:"project-beta"},{label:"タグガンマ",value:"project-gamma"},{label:"タグデルタ",value:"project-delta"},{label:"タグイプシロン",value:"project-epsilon"}],At=[29,27,21,33,32],Ie={args:{options:kt,placeholder:"選択してください",renderOption:({option:e,location:l,onRemove:t})=>{const d=kt.findIndex(p=>p.value===e.value),n=At[d%At.length];return l==="badge"?a.jsx(Fe,{colorCode:n,onRemove:t,children:e.label}):a.jsx("div",{className:"gap-2 flex items-center",children:a.jsx(Fe,{colorCode:n,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction."},source:{code:`import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

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
/>`}}}},Lt=[{label:"成功",value:"status-success",statusLevel:"success"},{label:"進行中",value:"status-inprogress",statusLevel:"inProgress"},{label:"準備中",value:"status-queue",statusLevel:"queue"},{label:"エラー",value:"status-alert",statusLevel:"alert"},{label:"注意",value:"status-warning",statusLevel:"warning"},{label:"開始前",value:"status-neutral",statusLevel:"neutral"}],Ve={args:{options:Lt,placeholder:"選択してください",renderOption:({option:e,location:l,onRemove:t})=>{const d=Lt.find(p=>p.value===e.value),n=d==null?void 0:d.statusLevel;return l==="badge"?a.jsx(It,{level:n,onRemove:t,children:e.label}):a.jsx("div",{className:"gap-2 flex items-center",children:a.jsx(It,{level:n,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction."},source:{code:`import { MultiSelect, Status } from '@chemican/components';

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
/>`}}}},Re={args:{options:to,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},je={args:{options:Jo,placeholder:"Select food items...",onValueChange:e=>console.log("Selected values:",e)}},Oe={args:{options:Qo,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},Me={args:{options:R,maxCount:2,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003"],placeholder:"Max 2 visible...",onValueChange:e=>console.log("Selected values:",e)}},ke={args:{options:R,searchable:!1,placeholder:"No search functionality...",onValueChange:e=>console.log("Selected values:",e)}},Ae={args:{options:R,hideSelectAll:!0,placeholder:"No select all option...",onValueChange:e=>console.log("Selected values:",e)}},Le={args:{options:R,closeOnSelect:!0,placeholder:"Closes after selection...",onValueChange:e=>console.log("Selected values:",e)}},Ee={args:{options:R,disabled:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Disabled state...",onValueChange:e=>console.log("Selected values:",e)}},qe={args:{options:[],emptyIndicator:a.jsxs("div",{className:"py-6 flex flex-col items-center text-center",children:[a.jsx(it,{className:"h-12 w-12 text-body-secondary mb-2"}),a.jsx("p",{className:"text-body-secondary",children:"No options available"}),a.jsx("p",{className:"text-xs text-body-secondary mt-1",children:"Try a different search term"})]}),placeholder:"Custom empty state...",onValueChange:e=>console.log("Selected values:",e)}},We={args:{options:R,filterByValueAndLabel:!0,placeholder:"Search by label or value...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'}}}},$e={args:{options:to,placeholder:"Custom render...",renderOption:({option:e,location:l,isSelected:t,onRemove:d})=>{const n=e.icon;return l==="badge"?a.jsxs("div",{className:`gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border`,children:[n&&a.jsx(n,{className:"h-3 w-3"}),a.jsx("span",{className:"text-sm font-medium",children:e.label}),d&&a.jsx("button",{onClick:p=>{p.stopPropagation(),d()},className:"ml-1 hover:bg-interactive-alert-hover rounded p-0.5",children:a.jsx(wo,{className:"h-3 w-3 text-interactive-alert-default"})})]}):a.jsxs("div",{className:"gap-2 flex items-center",children:[n&&a.jsx(n,{className:`h-4 w-4
              ${t?"text-interactive-primary-default":"text-body-secondary"}`}),a.jsx("span",{className:t?"font-bold text-interactive-primary-default":"",children:e.label}),t&&a.jsx("span",{className:"text-xs text-body-success ml-auto",children:"✓ Selected"})]})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button."}}}},Zo=()=>{const[e,l]=v.useState([]);return a.jsxs("div",{className:"gap-4 flex flex-col",children:[a.jsx(Z,{options:R,placeholder:"Select fruits and click Apply...",onValueChange:t=>console.log("Values changed (not applied yet):",t),onApplySelection:t=>{console.log("Values applied:",t),l(t)}}),a.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[a.jsx("p",{className:"text-sm font-medium text-body-primary mb-2",children:"Applied Values:"}),e.length>0?a.jsx("ul",{className:"text-sm text-body-secondary list-inside list-disc",children:e.map(t=>{const d=R.find(n=>n.value===t);return a.jsx("li",{children:(d==null?void 0:d.label)||t},t)})}):a.jsx("p",{className:"text-sm text-body-secondary italic",children:"No values applied yet"})]})]})},De={render:()=>a.jsx(Zo,{}),parameters:{docs:{description:{story:'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.'},source:{code:`import { MultiSelect } from '@chemican/components';
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
          focus:ring-interactive-focused focus:ring-4 focus:outline-none`,children:a.jsxs("div",{className:"gap-2 flex items-center",children:[a.jsx(it,{className:"h-5 w-5"}),a.jsx("span",{className:"font-medium",children:"Custom Trigger Button"})]})}),onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},el=()=>{const[e,l]=v.useState(["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"]),t=e.map(d=>{var n;return(n=R.find(p=>p.value===d))==null?void 0:n.label}).filter(Boolean);return a.jsxs("div",{className:"gap-4 flex flex-col",children:[a.jsx(Z,{options:R,hideSelection:!0,customTrigger:a.jsx("button",{className:`px-4 py-3 rounded-md bg-surface-primary
              border-interactive-default hover:bg-surface-secondary
              focus:ring-interactive-focused border focus:ring-4
              focus:outline-none`,children:a.jsxs("div",{className:"gap-4 flex min-w-[300px] items-center justify-between",children:[a.jsxs("div",{className:"gap-2 flex items-center",children:[a.jsx(Fa,{className:"h-5 w-5 text-body-secondary"}),a.jsx("span",{className:"font-medium text-body-primary",children:e.length>0?`${e.length} selected`:"Select options"})]}),a.jsx(_a,{className:"h-4 w-4 text-body-secondary"})]})}),onValueChange:d=>l(d)}),a.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[a.jsxs("p",{className:"text-sm font-medium text-body-primary mb-2",children:["Selected Items (",e.length,"):"]}),t.length>0?a.jsx("div",{className:"gap-2 flex flex-wrap",children:t.map((d,n)=>a.jsx("span",{className:`px-2 py-1 rounded-md bg-surface-primary text-sm
                  text-body-primary border-divider-default border`,children:d},n))}):a.jsx("p",{className:"text-sm text-body-secondary italic",children:"No items selected"})]})]})},Pe={render:()=>a.jsx(el,{}),parameters:{docs:{description:{story:"This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},tl=()=>a.jsxs("div",{className:"gap-6 flex flex-col",children:[a.jsxs("div",{className:"gap-2 flex flex-col",children:[a.jsx("h3",{className:"font-semibold text-body-primary",children:"Default Mode (Badges Below)"}),a.jsx(Z,{options:R,placeholder:"Select fruits...",selectionDisplayMode:"default",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]}),a.jsxs("div",{className:"gap-2 flex flex-col",children:[a.jsx("h3",{className:"font-semibold text-body-primary",children:"Inline Mode (Inside Trigger)"}),a.jsx(Z,{options:R,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]})]}),_e={render:()=>a.jsx(tl,{}),parameters:{docs:{description:{story:"This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area."},source:{code:`import { MultiSelect } from '@chemican/components';

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
/>`}}}};var Et,qt,Wt;Ne.parameters={...Ne.parameters,docs:{...(Et=Ne.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Wt=(qt=Ne.parameters)==null?void 0:qt.docs)==null?void 0:Wt.source}}};var $t,Dt,Bt;Te.parameters={...Te.parameters,docs:{...($t=Te.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Bt=(Dt=Te.parameters)==null?void 0:Dt.docs)==null?void 0:Bt.source}}};var zt,Pt,Ut;Ie.parameters={...Ie.parameters,docs:{...(zt=Ie.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Pt=Ie.parameters)==null?void 0:Pt.docs)==null?void 0:Ut.source}}};var _t,Ft,Ht;Ve.parameters={...Ve.parameters,docs:{...(_t=Ve.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Ht=(Ft=Ve.parameters)==null?void 0:Ft.docs)==null?void 0:Ht.source}}};var Gt,Kt,Yt;Re.parameters={...Re.parameters,docs:{...(Gt=Re.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Yt=(Kt=Re.parameters)==null?void 0:Kt.docs)==null?void 0:Yt.source}}};var Xt,Jt,Qt;je.parameters={...je.parameters,docs:{...(Xt=je.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Qt=(Jt=je.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Zt,ea,ta;Oe.parameters={...Oe.parameters,docs:{...(Zt=Oe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ta=(ea=Oe.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,oa,la;Me.parameters={...Me.parameters,docs:{...(aa=Me.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003'],
    placeholder: 'Max 2 visible...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(la=(oa=Me.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var sa,na,ra;ke.parameters={...ke.parameters,docs:{...(sa=ke.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ra=(na=ke.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var ia,ca,da;Ae.parameters={...Ae.parameters,docs:{...(ia=Ae.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(da=(ca=Ae.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;Le.parameters={...Le.parameters,docs:{...(ua=Le.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ma=(pa=Le.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var fa,ha,va;Ee.parameters={...Ee.parameters,docs:{...(fa=Ee.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Disabled state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(va=(ha=Ee.parameters)==null?void 0:ha.docs)==null?void 0:va.source}}};var ba,ga,ya;qe.parameters={...qe.parameters,docs:{...(ba=qe.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(ya=(ga=qe.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var xa,wa,Sa;We.parameters={...We.parameters,docs:{...(xa=We.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Sa=(wa=We.parameters)==null?void 0:wa.docs)==null?void 0:Sa.source}}};var Ca,Na,Ta;$e.parameters={...$e.parameters,docs:{...(Ca=$e.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ta=(Na=$e.parameters)==null?void 0:Na.docs)==null?void 0:Ta.source}}};var Ia,Va,Ra;De.parameters={...De.parameters,docs:{...(Ia=De.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(Ra=(Va=De.parameters)==null?void 0:Va.docs)==null?void 0:Ra.source}}};var ja,Oa,Ma;Be.parameters={...Be.parameters,docs:{...(ja=Be.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Ma=(Oa=Be.parameters)==null?void 0:Oa.docs)==null?void 0:Ma.source}}};var ka,Aa,La;ze.parameters={...ze.parameters,docs:{...(ka=ze.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(La=(Aa=ze.parameters)==null?void 0:Aa.docs)==null?void 0:La.source}}};var Ea,qa,Wa;Pe.parameters={...Pe.parameters,docs:{...(Ea=Pe.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Wa=(qa=Pe.parameters)==null?void 0:qa.docs)==null?void 0:Wa.source}}};var $a,Da,Ba;Ue.parameters={...Ue.parameters,docs:{...($a=Ue.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(Ba=(Da=Ue.parameters)==null?void 0:Da.docs)==null?void 0:Ba.source}}};var za,Pa,Ua;_e.parameters={..._e.parameters,docs:{...(za=_e.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(Ua=(Pa=_e.parameters)==null?void 0:Pa.docs)==null?void 0:Ua.source}}};const Dl=["Default","WithDefaultValues","WithTagsAsItems","WithStatusAsItems","WithIcons","Grouped","WithDisabledOptions","MaxCountLimited","NoSearch","NoSelectAll","CloseOnSelect","Disabled","CustomEmptyState","FilterByValueAndLabel","CustomRenderOption","WithOnApplySelection","WithCustomTrigger","WithHideSelection","CustomTriggerWithHideSelection","InlineSelectionDisplay","InlineSelectionComparison"];export{Le as CloseOnSelect,qe as CustomEmptyState,$e as CustomRenderOption,Pe as CustomTriggerWithHideSelection,Ne as Default,Ee as Disabled,We as FilterByValueAndLabel,je as Grouped,_e as InlineSelectionComparison,Ue as InlineSelectionDisplay,Me as MaxCountLimited,ke as NoSearch,Ae as NoSelectAll,Be as WithCustomTrigger,Te as WithDefaultValues,Oe as WithDisabledOptions,ze as WithHideSelection,Re as WithIcons,De as WithOnApplySelection,Ve as WithStatusAsItems,Ie as WithTagsAsItems,Dl as __namedExportsOrder,$l as default};
