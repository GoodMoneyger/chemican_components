import{r as i,a as ge,d as ee,y as Ae,e as m,j as t,c as D,n as mn}from"./iframe-B3jjdAjO.js";import{B as Ie}from"./Button-DBj4MU-t.js";import{S as oa}from"./StatusIndicator-3gu3-7wY.js";import{T as ft}from"./Tag-CtWC30RW.js";import{P as hn}from"./ProgressIndicator-tKKjzGRJ.js";import{P as fn,c as gn,b as vn}from"./Popover-Bo9liZKo.js";import{R as bn,P as yn,O as xn,C as Sn}from"./index-fpGtmdEy.js";import{I as wn}from"./IconSearch-B3xU61-k.js";import{a as Vt}from"./Checkbox-D7hfkVKt.js";import{I as zo}from"./IconChevronDown-CRxnVEaR.js";import{c as Cn}from"./createReactComponent-1v86D7vV.js";import{I as Lt,a as Nn}from"./IconStar-IqaOLH0y.js";import{I as Tn}from"./IconX-BypXRlUw.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./index-BIi4ykCi.js";import"./index-DKGVz6qo.js";import"./IconMinus-BNDEXvQh.js";import"./IconCheck-jibOOelq.js";import"./index-DNSATLFE.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]],Fo=Cn("outline","users","Users",Rn);var na=1,On=.9,Vn=.8,jn=.17,jt=.1,It=.999,In=.9999,Mn=.99,kn=/[\\\/_+.#"@\[\(\{&]/,An=/[\\\/_+.#"@\[\(\{&]/g,Ln=/[\s-]/,Uo=/[\s-]/g;function kt(e,o,a,r,l,c,h){if(c===o.length)return l===e.length?na:Mn;var f=`${l},${c}`;if(h[f]!==void 0)return h[f];for(var S=r.charAt(c),u=a.indexOf(S,l),w=0,R,W,A,z;u>=0;)R=kt(e,o,a,r,u+1,c+1,h),R>w&&(u===l?R*=na:kn.test(e.charAt(u-1))?(R*=Vn,A=e.slice(l,u-1).match(An),A&&l>0&&(R*=Math.pow(It,A.length))):Ln.test(e.charAt(u-1))?(R*=On,z=e.slice(l,u-1).match(Uo),z&&l>0&&(R*=Math.pow(It,z.length))):(R*=jn,l>0&&(R*=Math.pow(It,u-l))),e.charAt(u)!==o.charAt(c)&&(R*=In)),(R<jt&&a.charAt(u-1)===r.charAt(c+1)||r.charAt(c+1)===r.charAt(c)&&a.charAt(u-1)!==r.charAt(c))&&(W=kt(e,o,a,r,u+1,c+2,h),W*jt>R&&(R=W*jt)),R>w&&(w=R),u=a.indexOf(S,u+1);return h[f]=w,w}function sa(e){return e.toLowerCase().replace(Uo," ")}function Dn(e,o,a){return e=a&&a.length>0?`${e+" "+a.join(" ")}`:e,kt(e,o,sa(e),sa(o),0,0,{})}var je='[cmdk-group=""]',Mt='[cmdk-group-items=""]',Wn='[cmdk-group-heading=""]',_o='[cmdk-item=""]',la=`${_o}:not([aria-disabled="true"])`,At="cmdk-item-select",he="data-value",qn=(e,o,a)=>Dn(e,o,a),Ho=i.createContext(void 0),Le=()=>i.useContext(Ho),Go=i.createContext(void 0),Dt=()=>i.useContext(Go),Ko=i.createContext(void 0),Yo=i.forwardRef((e,o)=>{let a=fe(()=>{var s,g;return{search:"",value:(g=(s=e.value)!=null?s:e.defaultValue)!=null?g:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),r=fe(()=>new Set),l=fe(()=>new Map),c=fe(()=>new Map),h=fe(()=>new Set),f=Xo(e),{label:S,children:u,value:w,onValueChange:R,filter:W,shouldFilter:A,loop:z,disablePointerSelection:ve=!1,vimBindings:K=!0,...ce}=e,be=ge(),De=ge(),de=ge(),Y=i.useRef(null),O=Kn();ie(()=>{if(w!==void 0){let s=w.trim();a.current.value=s,j.emit()}},[w]),ie(()=>{O(6,qe)},[]);let j=i.useMemo(()=>({subscribe:s=>(h.current.add(s),()=>h.current.delete(s)),snapshot:()=>a.current,setState:(s,g,b)=>{var p,x,N,V;if(!Object.is(a.current[s],g)){if(a.current[s]=g,s==="search")Se(),ye(),O(1,xe);else if(s==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let M=document.getElementById(de);M?M.focus():(p=document.getElementById(be))==null||p.focus()}if(O(7,()=>{var M;a.current.selectedItemId=(M=J())==null?void 0:M.id,j.emit()}),b||O(5,qe),((x=f.current)==null?void 0:x.value)!==void 0){let M=g??"";(V=(N=f.current).onValueChange)==null||V.call(N,M);return}}j.emit()}},emit:()=>{h.current.forEach(s=>s())}}),[]),F=i.useMemo(()=>({value:(s,g,b)=>{var p;g!==((p=c.current.get(s))==null?void 0:p.value)&&(c.current.set(s,{value:g,keywords:b}),a.current.filtered.items.set(s,We(g,b)),O(2,()=>{ye(),j.emit()}))},item:(s,g)=>(r.current.add(s),g&&(l.current.has(g)?l.current.get(g).add(s):l.current.set(g,new Set([s]))),O(3,()=>{Se(),ye(),a.current.value||xe(),j.emit()}),()=>{c.current.delete(s),r.current.delete(s),a.current.filtered.items.delete(s);let b=J();O(4,()=>{Se(),(b==null?void 0:b.getAttribute("id"))===s&&xe(),j.emit()})}),group:s=>(l.current.has(s)||l.current.set(s,new Set),()=>{c.current.delete(s),l.current.delete(s)}),filter:()=>f.current.shouldFilter,label:S||e["aria-label"],getDisablePointerSelection:()=>f.current.disablePointerSelection,listId:be,inputId:de,labelId:De,listInnerRef:Y}),[]);function We(s,g){var b,p;let x=(p=(b=f.current)==null?void 0:b.filter)!=null?p:qn;return s?x(s,a.current.search,g):0}function ye(){if(!a.current.search||f.current.shouldFilter===!1)return;let s=a.current.filtered.items,g=[];a.current.filtered.groups.forEach(p=>{let x=l.current.get(p),N=0;x.forEach(V=>{let M=s.get(V);N=Math.max(M,N)}),g.push([p,N])});let b=Y.current;te().sort((p,x)=>{var N,V;let M=p.getAttribute("id"),oe=x.getAttribute("id");return((N=s.get(oe))!=null?N:0)-((V=s.get(M))!=null?V:0)}).forEach(p=>{let x=p.closest(Mt);x?x.appendChild(p.parentElement===x?p:p.closest(`${Mt} > *`)):b.appendChild(p.parentElement===b?p:p.closest(`${Mt} > *`))}),g.sort((p,x)=>x[1]-p[1]).forEach(p=>{var x;let N=(x=Y.current)==null?void 0:x.querySelector(`${je}[${he}="${encodeURIComponent(p[0])}"]`);N==null||N.parentElement.appendChild(N)})}function xe(){let s=te().find(b=>b.getAttribute("aria-disabled")!=="true"),g=s==null?void 0:s.getAttribute(he);j.setState("value",g||void 0)}function Se(){var s,g,b,p;if(!a.current.search||f.current.shouldFilter===!1){a.current.filtered.count=r.current.size;return}a.current.filtered.groups=new Set;let x=0;for(let N of r.current){let V=(g=(s=c.current.get(N))==null?void 0:s.value)!=null?g:"",M=(p=(b=c.current.get(N))==null?void 0:b.keywords)!=null?p:[],oe=We(V,M);a.current.filtered.items.set(N,oe),oe>0&&x++}for(let[N,V]of l.current)for(let M of V)if(a.current.filtered.items.get(M)>0){a.current.filtered.groups.add(N);break}a.current.filtered.count=x}function qe(){var s,g,b;let p=J();p&&(((s=p.parentElement)==null?void 0:s.firstChild)===p&&((b=(g=p.closest(je))==null?void 0:g.querySelector(Wn))==null||b.scrollIntoView({block:"nearest"})),p.scrollIntoView({block:"nearest"}))}function J(){var s;return(s=Y.current)==null?void 0:s.querySelector(`${_o}[aria-selected="true"]`)}function te(){var s;return Array.from(((s=Y.current)==null?void 0:s.querySelectorAll(la))||[])}function ae(s){let g=te()[s];g&&j.setState("value",g.getAttribute(he))}function ue(s){var g;let b=J(),p=te(),x=p.findIndex(V=>V===b),N=p[x+s];(g=f.current)!=null&&g.loop&&(N=x+s<0?p[p.length-1]:x+s===p.length?p[0]:p[x+s]),N&&j.setState("value",N.getAttribute(he))}function Ee(s){let g=J(),b=g==null?void 0:g.closest(je),p;for(;b&&!p;)b=s>0?Hn(b,je):Gn(b,je),p=b==null?void 0:b.querySelector(la);p?j.setState("value",p.getAttribute(he)):ue(s)}let q=()=>ae(te().length-1),we=s=>{s.preventDefault(),s.metaKey?q():s.altKey?Ee(1):ue(1)},pe=s=>{s.preventDefault(),s.metaKey?ae(0):s.altKey?Ee(-1):ue(-1)};return i.createElement(ee.div,{ref:o,tabIndex:-1,...ce,"cmdk-root":"",onKeyDown:s=>{var g;(g=ce.onKeyDown)==null||g.call(ce,s);let b=s.nativeEvent.isComposing||s.keyCode===229;if(!(s.defaultPrevented||b))switch(s.key){case"n":case"j":{K&&s.ctrlKey&&we(s);break}case"ArrowDown":{we(s);break}case"p":case"k":{K&&s.ctrlKey&&pe(s);break}case"ArrowUp":{pe(s);break}case"Home":{s.preventDefault(),ae(0);break}case"End":{s.preventDefault(),q();break}case"Enter":{s.preventDefault();let p=J();if(p){let x=new Event(At);p.dispatchEvent(x)}}}}},i.createElement("label",{"cmdk-label":"",htmlFor:F.inputId,id:F.labelId,style:Xn},S),vt(e,s=>i.createElement(Go.Provider,{value:j},i.createElement(Ho.Provider,{value:F},s))))}),En=i.forwardRef((e,o)=>{var a,r;let l=ge(),c=i.useRef(null),h=i.useContext(Ko),f=Le(),S=Xo(e),u=(r=(a=S.current)==null?void 0:a.forceMount)!=null?r:h==null?void 0:h.forceMount;ie(()=>{if(!u)return f.item(l,h==null?void 0:h.id)},[u]);let w=Jo(l,c,[e.value,e.children,c],e.keywords),R=Dt(),W=Z(O=>O.value&&O.value===w.current),A=Z(O=>u||f.filter()===!1?!0:O.search?O.filtered.items.get(l)>0:!0);i.useEffect(()=>{let O=c.current;if(!(!O||e.disabled))return O.addEventListener(At,z),()=>O.removeEventListener(At,z)},[A,e.onSelect,e.disabled]);function z(){var O,j;ve(),(j=(O=S.current).onSelect)==null||j.call(O,w.current)}function ve(){R.setState("value",w.current,!0)}if(!A)return null;let{disabled:K,value:ce,onSelect:be,forceMount:De,keywords:de,...Y}=e;return i.createElement(ee.div,{ref:Ae(c,o),...Y,id:l,"cmdk-item":"",role:"option","aria-disabled":!!K,"aria-selected":!!W,"data-disabled":!!K,"data-selected":!!W,onPointerMove:K||f.getDisablePointerSelection()?void 0:ve,onClick:K?void 0:z},e.children)}),$n=i.forwardRef((e,o)=>{let{heading:a,children:r,forceMount:l,...c}=e,h=ge(),f=i.useRef(null),S=i.useRef(null),u=ge(),w=Le(),R=Z(A=>l||w.filter()===!1?!0:A.search?A.filtered.groups.has(h):!0);ie(()=>w.group(h),[]),Jo(h,f,[e.value,e.heading,S]);let W=i.useMemo(()=>({id:h,forceMount:l}),[l]);return i.createElement(ee.div,{ref:Ae(f,o),...c,"cmdk-group":"",role:"presentation",hidden:R?void 0:!0},a&&i.createElement("div",{ref:S,"cmdk-group-heading":"","aria-hidden":!0,id:u},a),vt(e,A=>i.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":a?u:void 0},i.createElement(Ko.Provider,{value:W},A))))}),Bn=i.forwardRef((e,o)=>{let{alwaysRender:a,...r}=e,l=i.useRef(null),c=Z(h=>!h.search);return!a&&!c?null:i.createElement(ee.div,{ref:Ae(l,o),...r,"cmdk-separator":"",role:"separator"})}),Pn=i.forwardRef((e,o)=>{let{onValueChange:a,...r}=e,l=e.value!=null,c=Dt(),h=Z(u=>u.search),f=Z(u=>u.selectedItemId),S=Le();return i.useEffect(()=>{e.value!=null&&c.setState("search",e.value)},[e.value]),i.createElement(ee.input,{ref:o,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":S.listId,"aria-labelledby":S.labelId,"aria-activedescendant":f,id:S.inputId,type:"text",value:l?e.value:h,onChange:u=>{l||c.setState("search",u.target.value),a==null||a(u.target.value)}})}),zn=i.forwardRef((e,o)=>{let{children:a,label:r="Suggestions",...l}=e,c=i.useRef(null),h=i.useRef(null),f=Z(u=>u.selectedItemId),S=Le();return i.useEffect(()=>{if(h.current&&c.current){let u=h.current,w=c.current,R,W=new ResizeObserver(()=>{R=requestAnimationFrame(()=>{let A=u.offsetHeight;w.style.setProperty("--cmdk-list-height",A.toFixed(1)+"px")})});return W.observe(u),()=>{cancelAnimationFrame(R),W.unobserve(u)}}},[]),i.createElement(ee.div,{ref:Ae(c,o),...l,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":f,"aria-label":r,id:S.listId},vt(e,u=>i.createElement("div",{ref:Ae(h,S.listInnerRef),"cmdk-list-sizer":""},u)))}),Fn=i.forwardRef((e,o)=>{let{open:a,onOpenChange:r,overlayClassName:l,contentClassName:c,container:h,...f}=e;return i.createElement(bn,{open:a,onOpenChange:r},i.createElement(yn,{container:h},i.createElement(xn,{"cmdk-overlay":"",className:l}),i.createElement(Sn,{"aria-label":e.label,"cmdk-dialog":"",className:c},i.createElement(Yo,{ref:o,...f}))))}),Un=i.forwardRef((e,o)=>Z(a=>a.filtered.count===0)?i.createElement(ee.div,{ref:o,...e,"cmdk-empty":"",role:"presentation"}):null),_n=i.forwardRef((e,o)=>{let{progress:a,children:r,label:l="Loading...",...c}=e;return i.createElement(ee.div,{ref:o,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},vt(e,h=>i.createElement("div",{"aria-hidden":!0},h)))}),E=Object.assign(Yo,{List:zn,Item:En,Input:Pn,Group:$n,Separator:Bn,Dialog:Fn,Empty:Un,Loading:_n});function Hn(e,o){let a=e.nextElementSibling;for(;a;){if(a.matches(o))return a;a=a.nextElementSibling}}function Gn(e,o){let a=e.previousElementSibling;for(;a;){if(a.matches(o))return a;a=a.previousElementSibling}}function Xo(e){let o=i.useRef(e);return ie(()=>{o.current=e}),o}var ie=typeof window>"u"?i.useEffect:i.useLayoutEffect;function fe(e){let o=i.useRef();return o.current===void 0&&(o.current=e()),o}function Z(e){let o=Dt(),a=()=>e(o.snapshot());return i.useSyncExternalStore(o.subscribe,a,a)}function Jo(e,o,a,r=[]){let l=i.useRef(),c=Le();return ie(()=>{var h;let f=(()=>{var u;for(let w of a){if(typeof w=="string")return w.trim();if(typeof w=="object"&&"current"in w)return w.current?(u=w.current.textContent)==null?void 0:u.trim():l.current}})(),S=r.map(u=>u.trim());c.value(e,f,S),(h=o.current)==null||h.setAttribute(he,f),l.current=f}),l}var Kn=()=>{let[e,o]=i.useState(),a=fe(()=>new Map);return ie(()=>{a.current.forEach(r=>r()),a.current=new Map},[e]),(r,l)=>{a.current.set(r,l),o({})}};function Yn(e){let o=e.type;return typeof o=="function"?o(e.props):"render"in o?o.render(e.props):e}function vt({asChild:e,children:o},a){return e&&i.isValidElement(o)?i.cloneElement(Yn(o),{ref:o.ref},a(o.props.children)):a(o)}var Xn={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Wt=m.forwardRef(({className:e,...o},a)=>t.jsx(E,{ref:a,className:D(`bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,e),...o}));Wt.displayName=E.displayName;const qt=m.forwardRef(({className:e,...o},a)=>t.jsx("div",{className:"border-divider-default py-sm px-md flex items-center border-b","cmdk-input-wrapper":"",children:t.jsxs("div",{className:`border-interactive-default bg-surface-primary
        hover:border-interactive-hover
        has-[:disabled]:border-interactive-disabled
        has-[:disabled]:bg-surface-disabled
        has-[:focus]:ring-interactive-focused h-10 rounded px-sm relative flex
        w-full items-center border
        has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
        has-[:focus]:outline-0`,children:[t.jsx(wn,{className:"mr-xxs h-3.5 w-3.5 shrink-0"}),t.jsx(E.Input,{ref:a,className:D(`placeholder:text-body-placeholder h-11 rounded-md py-3 flex w-full
          bg-transparent outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,e),...o})]})}));qt.displayName=E.Input.displayName;const Et=m.forwardRef(({className:e,...o},a)=>t.jsx(E.List,{ref:a,className:D("max-h-[18.75rem] overflow-x-hidden overflow-y-auto",e),...o}));Et.displayName=E.List.displayName;const $t=m.forwardRef((e,o)=>t.jsx(E.Empty,{ref:o,className:"text-body-secondary py-6 text-center",...e}));$t.displayName=E.Empty.displayName;const Me=m.forwardRef(({className:e,...o},a)=>t.jsx(E.Group,{ref:a,className:D(`text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,e),...o}));Me.displayName=E.Group.displayName;const Qo=m.forwardRef(({className:e,...o},a)=>t.jsx(E.Separator,{ref:a,className:D("-mx-1 h-px bg-[var(--token-color-border-divider-default)]",e),...o}));Qo.displayName=E.Separator.displayName;const ke=m.forwardRef(({className:e,...o},a)=>t.jsx(E.Item,{ref:a,className:D(`hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg min-h-10 py-1.5 relative flex
      cursor-default items-center wrap-anywhere outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,e),...o}));ke.displayName=E.Item.displayName;Wt.__docgenInfo={description:"",methods:[]};qt.__docgenInfo={description:"",methods:[]};Et.__docgenInfo={description:"",methods:[]};$t.__docgenInfo={description:"",methods:[]};Me.__docgenInfo={description:"",methods:[]};ke.__docgenInfo={description:"",methods:[]};Qo.__docgenInfo={description:"",methods:[]};const ra=mn("ease-in-out transition-all duration-300",{variants:{variant:{default:`border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,secondary:`border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,destructive:`bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`}},defaultVariants:{variant:"default"}}),Jn=({options:e,onValueChange:o=ne=>ne,onSearchValueChange:a,loading:r=!1,loadingLabel:l="読み込み中...",onApplySelection:c=ne=>ne,variant:h,defaultValue:f=[],value:S,placeholder:u="選択してください",placeholderAriaLabel:w="選択してください",triggerDescription:R="マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",noSelectionLabel:W="オプションが選択されていません",searchHelpText:A="入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",searchAriaLabel:z="利用可能なオプションを検索",optionsListAriaLabel:ve="利用可能なオプション",selectAllLabel:K="すべて選択",selectAllCountLabel:ce="オプション",clearAllLabel:be="すべてクリア",closeLabel:De="閉じる",footerContent:de,moreSelectedLabel:Y="その他",searchPlaceholder:O="オプションを検索...",maxCount:j=10,maxSelected:F,maxSelectedReachedLabel:We="選択できる上限に達しました。",modalPopover:ye=!1,className:xe,hideSelectAll:Se=!1,searchable:qe=!0,emptyIndicator:J="結果が見つかりません。",noOptionsIndicator:te="利用可能なオプションがありません。",autoSize:ae=!1,singleLine:ue=!1,popoverClassName:Ee,disabled:q=!1,invalid:we=!1,responsive:pe,minWidth:s,maxWidth:g,deduplicateOptions:b=!1,resetOnDefaultValueChange:p=!0,closeOnSelect:x=!1,filterByValueAndLabel:N=!1,filterOption:V,renderOption:M,customTrigger:oe,selectionDisplayMode:Ce="default",hideSelection:tn=!1,maxDisplayedOptions:bt,totalOptionsCount:Pt,moreOptionsLabel:zt=ne=>`検索テキストを入力して他${ne}件を表示`,...an},on)=>{const[ne,Ft]=m.useState(f),[B,se]=m.useState(!1),[U,yt]=m.useState(""),Ne=S!==void 0,y=Ne?S:ne,xt=F!==void 0&&y.length>=F,[nn,Ut]=m.useState(""),[sn,_t]=m.useState(""),St=m.useRef(y.length),Ht=m.useRef(B),Gt=m.useRef(U),Q=m.useCallback((n,d="polite")=>{d==="assertive"?(_t(n),setTimeout(()=>_t(""),100)):(Ut(n),setTimeout(()=>Ut(""),100))},[]),_=m.useCallback(n=>{Ne||Ft(n),o(n)},[Ne,o]),Te=m.useId(),Kt=`${Te}-listbox`,Yt=`${Te}-description`,Xt=`${Te}-count`,Jt=m.useRef(f),Re=m.useCallback(n=>{const d=n[0];return!!(d&&typeof d=="object"&&"heading"in d)},[]),wt=m.useCallback((n,d)=>{if(n.length!==d.length)return!1;const v=[...n].sort(),C=[...d].sort();return v.every((T,I)=>T===C[I])},[]),Qt=m.useCallback(()=>{se(!1),yt(""),_(f)},[f,_]),H=m.useRef(null);m.useImperativeHandle(on,()=>({reset:Qt,getSelectedValues:()=>y,setSelectedValues:_,clear:()=>_([]),focus:()=>{if(H.current){H.current.focus();const n=H.current.style.outline,d=H.current.style.outlineOffset;H.current.style.outline="2px solid hsl(var(--ring))",H.current.style.outlineOffset="2px",setTimeout(()=>{H.current&&(H.current.style.outline=n,H.current.style.outlineOffset=d)},1e3)}}}),[Qt,y,_]);const[G,Ct]=m.useState("desktop");m.useEffect(()=>{if(typeof window>"u")return;const n=()=>{const d=window.innerWidth;d<640?Ct("mobile"):d<1024?Ct("tablet"):Ct("desktop")};return n(),window.addEventListener("resize",n),()=>{typeof window<"u"&&window.removeEventListener("resize",n)}},[]);const le=(()=>{if(!pe)return{maxCount:j,compactMode:!1};if(pe===!0){const v={mobile:{maxCount:2,compactMode:!0},tablet:{maxCount:4,compactMode:!1},desktop:{maxCount:6,compactMode:!1}}[G];return{maxCount:(v==null?void 0:v.maxCount)??j,compactMode:(v==null?void 0:v.compactMode)??!1}}const n=pe[G];return{maxCount:(n==null?void 0:n.maxCount)??j,compactMode:(n==null?void 0:n.compactMode)??!1}})(),$=m.useCallback(()=>{if(e.length===0)return[];let n;Re(e)?n=e.flatMap(T=>T.options):n=e;const d=new Set,v=[],C=[];return n.forEach(T=>{d.has(T.value)?(v.push(T.value),b||C.push(T)):(d.add(T.value),C.push(T))}),b?C:n},[e,b,Re]),Oe=m.useCallback(n=>$().find(v=>v.value===n),[$]),ln=m.useCallback((n,d)=>{const[v,C]=n.split(":");if(!N)return C&&C.toLowerCase().includes(d.toLowerCase())?1:0;const T=d.toLowerCase();return C&&C.toLowerCase().includes(T)||v&&v.toLowerCase().includes(T)?1:0},[N]),rn=n=>{if(n.key==="Enter")se(!0);else if(n.key==="Backspace"&&!n.currentTarget.value){const d=[...y];d.pop(),_(d)}},Nt=n=>{if(q)return;const d=Oe(n);if(d!=null&&d.disabled)return;const v=y.includes(n);if(!v&&xt){Q(We,"assertive");return}const C=v?y.filter(T=>T!==n):[...y,n];_(C),x&&se(!1)},Zt=()=>{q||_([])},cn=()=>{q||se(n=>!n)},dn=()=>{if(q)return;const n=y.slice(0,le.maxCount);_(n)},un=()=>{if(q)return;const n=$().filter(d=>!d.disabled);F!==void 0&&n.length>F||(y.length===n.length?Zt():_(n.map(d=>d.value)),x&&se(!1))},Tt=M||(n=>{const{option:d,location:v,onRemove:C,disabled:T}=n;return v==="badge"?t.jsx(ft,{className:D(ra({variant:h}),le.compactMode&&"text-xs px-1.5 py-0.5",G==="mobile"&&"max-w-[7.5rem] truncate",ue&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",T&&"cursor-not-allowed"),...!T&&{onRemove:C},children:d.label}):d.label}),Rt=$().length>0,Ve=U.trim(),$e=!!Ve,ea=!!V&&$e,re=m.useMemo(()=>!V||!Ve?e:Re(e)?e.map(n=>({...n,options:n.options.filter(d=>V(d,Ve))})):e.filter(n=>V(n,Ve)),[e,V,Ve,Re]),Be=bt!==void 0&&(!$e||!!a||!!V),ta=m.useCallback(n=>!!n.disabled||xt&&!y.includes(n.value),[xt,y]),pn=F!==void 0&&$().filter(n=>!n.disabled).length>F;m.useEffect(()=>{if(!p||Ne)return;const n=Jt.current;wt(n,f)||(wt(y,f)||Ft(f),Jt.current=[...f])},[f,y,wt,p,Ne]);const Ot={minWidth:s||(G==="mobile"?"0px":"12.5rem"),maxWidth:g||"100%",popoverMaxWidth:g||"32rem",width:ae?"auto":"100%"},aa=m.useMemo(()=>Ce==="default"||y.length===0?u:y.map(n=>{var d;return(d=Oe(n))==null?void 0:d.label}).filter(Boolean).join(", "),[y,Oe,u,Ce]);return m.useEffect(()=>{B||yt("")},[B]),m.useEffect(()=>{const n=y.length,d=$(),v=d.filter(C=>!C.disabled).length;if(n!==St.current){const C=n-St.current;if(C>0){const I=y.slice(-C).map(L=>{var X;return(X=d.find(me=>me.value===L))==null?void 0:X.label}).filter(Boolean);I.length===1?Q(`${I[0]} selected. ${n} of ${v} options selected.`):Q(`${I.length} options selected. ${n} of ${v} total selected.`)}else C<0&&Q(`Option removed. ${n} of ${v} options selected.`);St.current=n}B!==Ht.current&&(Q(B?`Dropdown opened. ${v} options available. Use arrow keys to navigate.`:"Dropdown closed."),Ht.current=B),U!==Gt.current&&U!==void 0&&(U&&B&&Q(`Searching for "${U}"`),Gt.current=U)},[y,B,U,Q,$]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"sr-only",children:[t.jsx("div",{"aria-live":"polite","aria-atomic":"true",role:"status",children:nn}),t.jsx("div",{"aria-live":"assertive","aria-atomic":"true",role:"alert",children:sn})]}),t.jsxs(fn,{open:B,onOpenChange:se,modal:ye,children:[t.jsx("div",{id:Yt,className:"sr-only",children:R}),t.jsx("div",{id:Xt,className:"sr-only","aria-live":"polite",children:y.length===0?W:`${y.length} option${y.length===1?"":"s"} selected: ${y.map(n=>{var d;return(d=Oe(n))==null?void 0:d.label}).filter(Boolean).join(", ")}`}),t.jsxs("div",{className:D(ae&&"w-auto",xe),children:[t.jsx(gn,{asChild:!0,children:oe||t.jsx("button",{ref:H,...an,onClick:cn,disabled:q,className:D(`border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,ae?"w-auto":"w-full",!we&&`hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,we&&`border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,le.compactMode&&"min-h-8 text-sm",G==="mobile"&&"min-h-12"),style:{...Ot,maxWidth:`min(${Ot.maxWidth}, 100%)`},role:"combobox","aria-expanded":B,"aria-haspopup":"listbox","aria-controls":B?Kt:void 0,"aria-describedby":`${Yt} ${Xt}`,"aria-label":`Multi-select: ${y.length} of ${$().length} options selected. ${w}`,children:t.jsxs("div",{className:"mx-auto flex w-full items-center justify-between",children:[t.jsx("span",{className:D("mx-sm",Ce==="inline"&&"truncate",q?"text-body-disabled":B||Ce==="inline"&&aa!==u?"text-body-primary":"text-body-placeholder"),children:aa}),t.jsx(zo,{className:D("h-4 mx-xs cursor-pointer",q?"text-body-disabled":"text-body-primary")})]})})}),!(tn||Ce==="inline")&&t.jsxs("div",{className:"gap-xxs mt-xxs flex flex-wrap",children:[y.slice(0,le.maxCount).map(n=>{const d=Oe(n);return d?t.jsx(m.Fragment,{children:Tt({option:d,location:"badge",onRemove:()=>Nt(n),disabled:q})},n):null}).filter(Boolean),y.length>le.maxCount&&t.jsxs(ft,{className:D(`text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,ra({variant:h}),le.compactMode&&"text-xs px-1.5 py-0.5",ue&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",q&&"cursor-not-allowed"),...!q&&{onRemove:dn},children:["+ ",y.length-le.maxCount," ",Y]})]})]}),t.jsx(vn,{id:Kt,role:"listbox","aria-multiselectable":"true","aria-label":ve,className:D("p-0 w-auto",G==="mobile"&&"w-[85vw] max-w-[17.5rem]",G==="tablet"&&"max-w-md w-[70vw]",G==="desktop"&&"min-w-[18.75rem]",Ee),style:{maxWidth:`min(${Ot.popoverMaxWidth}, 85vw)`,maxHeight:G==="mobile"?"70vh":"60vh",touchAction:"manipulation"},align:"start",children:t.jsxs(Wt,{filter:ln,shouldFilter:!a&&!V,children:[qe&&t.jsxs("header",{children:[t.jsx("div",{id:`${Te}-search-help`,className:"sr-only",children:A}),t.jsx(qt,{placeholder:O,onKeyDown:rn,value:U,onValueChange:n=>{yt(n),a==null||a(n)},"aria-label":z,"aria-describedby":`${Te}-search-help`})]}),t.jsxs(Et,{className:D("max-h-[calc(40vh-56px)] overflow-y-auto",G==="mobile"&&"max-h-[calc(50vh-56px)]"),style:{overscrollBehaviorY:"contain"},children:[r&&t.jsx("div",{role:"status",className:`px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,children:t.jsx(hn.Circular,{size:"sm",children:l})}),!r&&(Rt||$e)&&t.jsx($t,{children:J}),!r&&!Rt&&!$e&&t.jsx("div",{role:"status",className:`px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,children:te}),!r&&!Se&&!pn&&!U&&Rt&&t.jsx(Me,{children:t.jsxs(ke,{value:"select-all",onSelect:un,role:"option","aria-selected":y.length===$().filter(n=>!n.disabled).length,"aria-label":`Select all ${$().length} options`,className:"cursor-pointer",children:[t.jsx(Vt,{className:"mr-xs",checked:y.length===$().filter(n=>!n.disabled).length}),t.jsxs("span",{children:["(",K,$().length>20?t.jsxs(t.Fragment,{children:[" - ",$().length," ",ce]}):null,")"]})]},"all")}),!r&&(Re(re)?(()=>{let n=0;const d=re.reduce((I,L)=>I+L.options.length,0),v=re.map(I=>{const L=Be?I.options.filter(X=>n++<bt||y.includes(X.value)):I.options;return{...I,options:L}}),C=v.reduce((I,L)=>I+L.options.length,0),T=(ea?d:Pt??d)-C;return t.jsxs(t.Fragment,{children:[v.map(I=>I.options.length===0?null:t.jsx(Me,{heading:I.heading,children:I.options.map(L=>{const X=y.includes(L.value),me=ta(L);return t.jsxs(ke,{value:`${L.value}:${L.label}`,onSelect:()=>Nt(L.value),role:"option","aria-selected":X,"aria-disabled":me,"aria-label":`${L.label}${X?", selected":", not selected"}${me?", disabled":""}`,className:D("cursor-pointer",me&&"text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"),disabled:me,children:[t.jsx(Vt,{className:"mr-xs",checked:X}),t.jsx("span",{className:"min-w-0 overflow-hidden",children:Tt({option:L,location:"dropdown",isSelected:X})})]},L.value)})},I.heading)),Be&&T>0&&t.jsx("div",{className:"text-body-secondary px-lg py-sm text-sm italic",children:zt(T)})]})})():t.jsx(Me,{children:(()=>{const n=Be?re.filter((v,C)=>C<bt||y.includes(v.value)):re,d=(ea?re.length:Pt??re.length)-n.length;return t.jsxs(t.Fragment,{children:[n.map(v=>{const C=y.includes(v.value),T=ta(v);return t.jsxs(ke,{value:`${v.value}:${v.label}`,onSelect:()=>Nt(v.value),role:"option","aria-selected":C,"aria-disabled":T,"aria-label":`${v.label}${C?", selected":", not selected"}${T?", disabled":""}`,className:D("cursor-pointer",T&&"text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"),disabled:T,children:[t.jsx(Vt,{className:"mr-xs",checked:C}),t.jsx("span",{className:"min-w-0 overflow-hidden",children:Tt({option:v,location:"dropdown",isSelected:C})})]},v.value)}),Be&&d>0&&t.jsx("div",{className:"text-body-secondary px-lg py-sm text-sm italic",children:zt(d)})]})})()}))]}),t.jsxs("footer",{className:`bg-surface-primary bottom-0 border-t-divider-default
                border-t`,children:[de&&t.jsx("div",{className:"px-md pt-sm text-body-secondary text-sm",children:de}),t.jsxs("div",{className:"px-md py-sm flex items-center justify-between",children:[t.jsx(Ie,{intent:"text",size:"xs",className:"min-w-auto",onClick:Zt,disabled:y.length===0,children:be}),t.jsx(Ie,{intent:"primary",size:"xs",className:"min-w-auto",onClick:()=>{c(y),se(!1)},children:De})]})]})]})})]})]})},P=m.forwardRef(Jn);P.displayName="MultiSelect";P.__docgenInfo={description:"",methods:[{name:"getSelectedValues",docblock:null,modifiers:[],params:[],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"union",raw:"MultiSelectOption<T>[] | MultiSelectGroup<T>[]",elements:[{name:"Array",elements:[{name:"MultiSelectOption",elements:[{name:"T"}],raw:"MultiSelectOption<T>"}],raw:"MultiSelectOption<T>[]"},{name:"Array",elements:[{name:"MultiSelectGroup",elements:[{name:"T"}],raw:"MultiSelectGroup<T>"}],raw:"MultiSelectGroup<T>[]"}]},description:`Array of options or grouped options to display in the dropdown.
Can be a flat array of options or an array of groups with nested options.`},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Initial selected values when the component mounts.\nIgnored when `value` is provided.\nOptional, defaults to an empty array.",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Selected values. Providing this makes the component controlled: it renders
exactly what is passed and never changes the selection on its own, so every
mutation has to be applied by the parent from \`onValueChange\`.

Use this when the selection has to stay in sync with state the parent also
writes to (resetting a draft when a popover reopens, confirming a
destructive change before applying it), instead of pushing values in
through the ref.

When omitted, the component keeps its own selection state and \`defaultValue\`
seeds it.
Optional.`},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content displayed in the trigger button when no options are selected.
Optional, defaults to "選択してください" (Please select).`,defaultValue:{value:"'選択してください'",computed:!1}},placeholderAriaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the placeholder, announced to screen readers.
Optional, defaults to "選択してください" (Please select).`,defaultValue:{value:"'選択してください'",computed:!1}},triggerDescription:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Description of the component for screen readers, providing usage instructions.
Optional, defaults to navigation instructions in Japanese.`,defaultValue:{value:"'マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。'",computed:!1}},noSelectionLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label announced to screen readers when no options are selected.
Optional, defaults to "オプションが選択されていません" (No options selected).`,defaultValue:{value:"'オプションが選択されていません'",computed:!1}},searchHelpText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Help text for screen readers explaining how to use the search input.
Optional, defaults to search instructions in Japanese.`,defaultValue:{value:"'入力してオプションをフィルタリング。矢印キーで結果をナビゲート。'",computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the search input field.
Optional, defaults to "利用可能なオプションを検索" (Search available options).`,defaultValue:{value:"'利用可能なオプションを検索'",computed:!1}},optionsListAriaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the options list element.
Optional, defaults to "利用可能なオプション" (Available options).`,defaultValue:{value:"'利用可能なオプション'",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:`Maximum number of items to display. Extra selected items will be summarized.
Optional, defaults to 3.`,defaultValue:{value:"10",computed:!1}},maxSelected:{required:!1,tsType:{name:"number"},description:`Maximum number of options that can be selected at once.
Once the limit is reached, unselected options render disabled (they stay
visible, so the user can see what they would have to deselect first) and
select-all is hidden when it would overshoot the limit.
Optional, defaults to undefined (no limit).`},maxSelectedReachedLabel:{required:!1,tsType:{name:"string"},description:'Message announced to screen readers when the user tries to select past\n`maxSelected`.\nOptional, defaults to "選択できる上限に達しました。" (Selection limit reached).',defaultValue:{value:"'選択できる上限に達しました。'",computed:!1}},modalPopover:{required:!1,tsType:{name:"boolean"},description:`The modality of the popover. When set to true, interaction with outside elements
will be disabled and only popover content will be visible to screen readers.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Additional class names to apply custom styles to the multi-select component.
Optional, can be used to add custom styles.`},hideSelectAll:{required:!1,tsType:{name:"boolean"},description:`If true, disables the select all functionality.
Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:`If true, shows search functionality in the popover.
If false, hides the search input completely.
Optional, defaults to true.`,defaultValue:{value:"true",computed:!1}},emptyIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom empty state message when no options match search.
Optional, defaults to "No results found."`,defaultValue:{value:"'結果が見つかりません。'",computed:!1}},noOptionsIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Message shown in the popover when the component has no options at all.
In that case the select-all option is not rendered either.
Optional, defaults to "No options available."`,defaultValue:{value:"'利用可能なオプションがありません。'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown in the search input when search is enabled.
Optional, defaults to "Search options...".`,defaultValue:{value:"'オプションを検索...'",computed:!1}},selectAllLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom label for the select-all option inside the list.
Optional, defaults to "Select All".`,defaultValue:{value:"'すべて選択'",computed:!1}},selectAllCountLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom label used alongside the total option count when select all is shown.
Optional, defaults to "options".`,defaultValue:{value:"'オプション'",computed:!1}},clearAllLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label displayed when clearing all selected values via the footer action.
Optional, defaults to "Clear All".`,defaultValue:{value:"'すべてクリア'",computed:!1}},closeLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label displayed for the footer close action.
Optional, defaults to "閉じる" (Close).`,defaultValue:{value:"'閉じる'",computed:!1}},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content rendered in the popover footer, above the clear/close actions.
It sits outside the scroll container, so it stays visible while the user
scrolls or searches - use it for counters, limits and hints that have to
remain readable for the whole session (e.g. "3 / 15 seats used").
Optional.`},moreSelectedLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Label appended to the overflow badge when more selections exist than can be shown.
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
Optional, defaults to false.
Ignored when \`filterOption\` is provided.`,defaultValue:{value:"false",computed:!1}},filterOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MultiSelectOption<T>, search: string) => boolean",signature:{arguments:[{type:{name:"MultiSelectOption",elements:[{name:"T"}],raw:"MultiSelectOption<T>"},name:"option"},{type:{name:"string"},name:"search"}],return:{name:"boolean"}}},description:`Custom match predicate used to filter options as the user searches.
Receives the whole option object, so it can match on fields the built-in
filter never sees (secondary text, ids, tags) - return true to keep the
option. \`search\` is passed trimmed but with its original casing.

Takes precedence over both the built-in filter and \`filterByValueAndLabel\`.
Do not combine it with \`onSearchValueChange\`-driven server-side search: the
predicate filters the options the parent already narrowed down.

Because the component then knows the real match count, \`maxDisplayedOptions\`
keeps truncating while searching and \`moreOptionsLabel\` reports how many
matches are hidden.
Optional.`},customTrigger:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom trigger element to replace the default button trigger.
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
Optional, called after each selection/deselection.`,defaultValue:{value:"(value) => value",computed:!1}},onSearchValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(search: string) => void",signature:{arguments:[{type:{name:"string"},name:"search"}],return:{name:"void"}}},description:`Callback fired whenever the search input value changes.
Use this to drive server-side search. When provided, the component disables
its built-in client-side filtering so the parent fully controls \`options\`.
Optional.`},loading:{required:!1,tsType:{name:"boolean"},description:`If true, shows a loading indicator inside the dropdown instead of the
options list. Useful while options are being fetched (e.g. server-side
search). Optional, defaults to false.`,defaultValue:{value:"false",computed:!1}},loadingLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Label displayed next to the spinner while `loading` is true.\nOptional, defaults to "読み込み中..." (Loading...).',defaultValue:{value:"'読み込み中...'",computed:!1}},maxDisplayedOptions:{required:!1,tsType:{name:"number"},description:`Maximum number of options to display before the user starts searching.
When set and the total exceeds this number, only the first N options are shown
with an indicator for the remaining items. Selected items always remain visible.
All matching options are shown when searching.
Optional, defaults to undefined (show all).`},totalOptionsCount:{required:!1,tsType:{name:"number"},description:`Total number of options available, used to compute the truncation indicator
count. Set this when \`options\` is only a server-provided subset (e.g.
server-side search returns a page) so the "+N more" hint reflects the true
total instead of just the loaded options.
Optional, defaults to the number of loaded options.`},moreOptionsLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Label template for the truncation indicator shown when options exceed maxDisplayedOptions.\nReceives the number of hidden items as a parameter.\nOptional, defaults to (count) => `検索テキストを入力して他${count}件を表示`.",defaultValue:{value:"(count: number) =>\n`検索テキストを入力して他${count}件を表示`",computed:!1}},onApplySelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"value"}],return:{name:"void"}}},description:`Callback fired when the Apply button is clicked in the popover footer.
Receives the array of currently selected values.
Optional, called only when user confirms their selection.`,defaultValue:{value:"(value) => value",computed:!1}}},composes:["Omit","VariantProps"]};const ks={title:"Components/MultiSelect",component:P,parameters:{docs:{description:{component:"A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","inverted"],description:"Visual style variant of the component"},maxCount:{control:"number",description:'Maximum number of selected items to display before showing "+X more"'},searchable:{control:"boolean",description:"Whether to show search functionality"},hideSelectAll:{control:"boolean",description:'Whether to hide the "Select All" option'},disabled:{control:"boolean",description:"Whether the component is disabled"},closeOnSelect:{control:"boolean",description:"Whether to close the popover after selecting an option"},singleLine:{control:"boolean",description:"Whether to display selected items in a single line with scroll"},autoSize:{control:"boolean",description:"Whether the component should auto-size to its content"},filterByValueAndLabel:{control:"boolean",description:"Whether to filter by both value and label when searching"},loading:{control:"boolean",description:"Whether to show a loading indicator inside the dropdown"},maxSelected:{control:"number",description:"Maximum number of options that can be selected at once"}}},k=[{label:"Apple",value:"550e8400-e29b-41d4-a716-446655440001"},{label:"Banana",value:"550e8400-e29b-41d4-a716-446655440002"},{label:"Cherry",value:"cherry-fruit"},{label:"Date",value:"550e8400-e29b-41d4-a716-446655440003"},{label:"Elderberry",value:"elderberry-premium"},{label:"Fig",value:"550e8400-e29b-41d4-a716-446655440004"},{label:"Grape",value:"grape-variety"},{label:"Honeydew",value:"550e8400-e29b-41d4-a716-446655440005"}],Zo=[{label:"Users",value:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",icon:Fo},{label:"Favorites",value:"favorites-collection",icon:Lt},{label:"Liked",value:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",icon:Nn},{label:"Apple",value:"apple-item"},{label:"Banana",value:"6ba7b812-9dad-11d1-80b4-00c04fd430c8"}],Qn=[{heading:"Fruits",options:[{label:"Apple",value:"a1b2c3d4-e5f6-4789-a012-123456789abc"},{label:"Banana",value:"banana-tropical"},{label:"Cherry",value:"b2c3d4e5-f6a7-4890-b123-234567890bcd"}]},{heading:"Vegetables",options:[{label:"Carrot",value:"carrot-orange"},{label:"Broccoli",value:"c3d4e5f6-a7b8-4901-c234-345678901cde"},{label:"Spinach",value:"spinach-leafy"}]},{heading:"Grains",options:[{label:"Rice",value:"d4e5f6a7-b8c9-4012-d345-456789012def"},{label:"Wheat",value:"wheat-grain"},{label:"Oats",value:"e5f6a7b8-c9d0-4123-e456-567890123efa"}]}],Zn=[{label:"Available Option",value:"f6a7b8c9-d0e1-4234-f567-678901234fab"},{label:"Disabled Option",value:"disabled-item",disabled:!0},{label:"Another Available",value:"a7b8c9d0-e1f2-4345-a678-789012345abc"},{label:"Also Disabled",value:"also-disabled-slug",disabled:!0}],Pe={args:{options:k,placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},ze={args:{options:k,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},ia=[{label:"タグアルファ",value:"project-alpha"},{label:"タグベータ",value:"project-beta"},{label:"タグガンマ",value:"project-gamma"},{label:"タグデルタ",value:"project-delta"},{label:"タグイプシロン",value:"project-epsilon"}],ca=[29,27,21,33,32],Fe={args:{options:ia,placeholder:"選択してください",renderOption:({option:e,location:o,onRemove:a})=>{const r=ia.findIndex(c=>c.value===e.value),l=ca[r%ca.length];return o==="badge"?t.jsx(ft,{colorCode:l,onRemove:a,children:e.label}):t.jsx("div",{className:"gap-2 flex items-center",children:t.jsx(ft,{colorCode:l,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction."},source:{code:`import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

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
/>`}}}},da=[{label:"成功",value:"status-success",statusLevel:"success"},{label:"進行中",value:"status-inprogress",statusLevel:"inProgress"},{label:"準備中",value:"status-queue",statusLevel:"queue"},{label:"エラー",value:"status-alert",statusLevel:"alert"},{label:"注意",value:"status-warning",statusLevel:"warning"},{label:"開始前",value:"status-neutral",statusLevel:"neutral"}],Ue={args:{options:da,placeholder:"選択してください",renderOption:({option:e,location:o,onRemove:a})=>{const r=da.find(c=>c.value===e.value),l=r==null?void 0:r.statusLevel;return o==="badge"?t.jsx(oa,{level:l,onRemove:a,children:e.label}):t.jsx("div",{className:"gap-2 flex items-center",children:t.jsx(oa,{level:l,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction."},source:{code:`import { MultiSelect, Status } from '@chemican/components';

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
/>`}}}},_e={args:{options:Zo,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},He={args:{options:Qn,placeholder:"Select food items...",onValueChange:e=>console.log("Selected values:",e)}},Ge={args:{options:Zn,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},Ke={args:{options:k,maxCount:2,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003"],placeholder:"Max 2 visible...",onValueChange:e=>console.log("Selected values:",e)}},Ye={args:{options:k,searchable:!1,placeholder:"No search functionality...",onValueChange:e=>console.log("Selected values:",e)}},Xe={args:{options:k,hideSelectAll:!0,placeholder:"No select all option...",onValueChange:e=>console.log("Selected values:",e)}},Je={args:{options:k,closeOnSelect:!0,placeholder:"Closes after selection...",onValueChange:e=>console.log("Selected values:",e)}},Qe={args:{options:k,disabled:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Disabled state...",onValueChange:e=>console.log("Selected values:",e)}},Ze={args:{options:[],placeholder:"No options...",onValueChange:e=>console.log("Selected values:",e)}},et={args:{options:[],noOptionsIndicator:t.jsxs("div",{className:"py-6 flex flex-col items-center text-center",children:[t.jsx(Lt,{className:"h-12 w-12 text-body-secondary mb-2"}),t.jsx("p",{className:"text-body-secondary",children:"No options available"})]}),placeholder:"Custom empty state...",onValueChange:e=>console.log("Selected values:",e)}},tt={args:{options:k,filterByValueAndLabel:!0,placeholder:"Search by label or value...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'}}}},at={args:{options:Zo,placeholder:"Custom render...",renderOption:({option:e,location:o,isSelected:a,onRemove:r})=>{const l=e.icon;return o==="badge"?t.jsxs("div",{className:`gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border`,children:[l&&t.jsx(l,{className:"h-3 w-3"}),t.jsx("span",{className:"text-sm font-medium",children:e.label}),r&&t.jsx("button",{onClick:c=>{c.stopPropagation(),r()},className:"ml-1 hover:bg-interactive-alert-hover rounded p-0.5",children:t.jsx(Tn,{className:"h-3 w-3 text-interactive-alert-default"})})]}):t.jsxs("div",{className:"gap-2 flex items-center",children:[l&&t.jsx(l,{className:`h-4 w-4
              ${a?"text-interactive-primary-default":"text-body-secondary"}`}),t.jsx("span",{className:a?"font-bold text-interactive-primary-default":"",children:e.label}),a&&t.jsx("span",{className:"text-xs text-body-success ml-auto",children:"✓ Selected"})]})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button."}}}},es=()=>{const[e,o]=m.useState([]);return t.jsxs("div",{className:"gap-4 flex flex-col",children:[t.jsx(P,{options:k,placeholder:"Select fruits and click Apply...",onValueChange:a=>console.log("Values changed (not applied yet):",a),onApplySelection:a=>{console.log("Values applied:",a),o(a)}}),t.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[t.jsx("p",{className:"text-sm font-medium text-body-primary mb-2",children:"Applied Values:"}),e.length>0?t.jsx("ul",{className:"text-sm text-body-secondary list-inside list-disc",children:e.map(a=>{const r=k.find(l=>l.value===a);return t.jsx("li",{children:(r==null?void 0:r.label)||a},a)})}):t.jsx("p",{className:"text-sm text-body-secondary italic",children:"No values applied yet"})]})]})},ot={render:()=>t.jsx(es,{}),parameters:{docs:{description:{story:'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.'},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},nt={args:{options:k,customTrigger:t.jsx("button",{className:`px-4 py-2 rounded-md bg-interactive-primary-default
          text-interactive-inverse hover:bg-interactive-primary-hover
          focus:ring-interactive-focused focus:ring-4 focus:outline-none`,children:t.jsxs("div",{className:"gap-2 flex items-center",children:[t.jsx(Lt,{className:"h-5 w-5"}),t.jsx("span",{className:"font-medium",children:"Custom Trigger Button"})]})}),onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},st={args:{options:k,placeholder:"Select fruits (badges hidden)...",hideSelection:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates the hideSelection prop which hides the selected option badges below the trigger button. This is useful when you want to show selections only in the dropdown or when you need a more compact layout."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits (badges hidden)..."
  hideSelection={true}
  defaultValue={['apple', 'banana', 'cherry']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},ts=()=>{const[e,o]=m.useState(["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"]),a=e.map(r=>{var l;return(l=k.find(c=>c.value===r))==null?void 0:l.label}).filter(Boolean);return t.jsxs("div",{className:"gap-4 flex flex-col",children:[t.jsx(P,{options:k,hideSelection:!0,customTrigger:t.jsx("button",{className:`px-4 py-3 rounded-md bg-surface-primary
              border-interactive-default hover:bg-surface-secondary
              focus:ring-interactive-focused border focus:ring-4
              focus:outline-none`,children:t.jsxs("div",{className:"gap-4 flex min-w-[300px] items-center justify-between",children:[t.jsxs("div",{className:"gap-2 flex items-center",children:[t.jsx(Fo,{className:"h-5 w-5 text-body-secondary"}),t.jsx("span",{className:"font-medium text-body-primary",children:e.length>0?`${e.length} selected`:"Select options"})]}),t.jsx(zo,{className:"h-4 w-4 text-body-secondary"})]})}),onValueChange:r=>o(r)}),t.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[t.jsxs("p",{className:"text-sm font-medium text-body-primary mb-2",children:["Selected Items (",e.length,"):"]}),a.length>0?t.jsx("div",{className:"gap-2 flex flex-wrap",children:a.map((r,l)=>t.jsx("span",{className:`px-2 py-1 rounded-md bg-surface-primary text-sm
                  text-body-primary border-divider-default border`,children:r},l))}):t.jsx("p",{className:"text-sm text-body-secondary italic",children:"No items selected"})]})]})},lt={render:()=>t.jsx(ts,{}),parameters:{docs:{description:{story:"This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges."},source:{code:`import { MultiSelect } from '@chemican/components';
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
</>`}}}},rt={args:{options:k,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates the inline selection display mode. When selectionDisplayMode is set to "inline", selected values are displayed as comma-separated text within the trigger button instead of as badge elements below it. This provides a more compact layout that is suitable for space-constrained interfaces.'},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},as=()=>t.jsxs("div",{className:"gap-6 flex flex-col",children:[t.jsxs("div",{className:"gap-2 flex flex-col",children:[t.jsx("h3",{className:"font-semibold text-body-primary",children:"Default Mode (Badges Below)"}),t.jsx(P,{options:k,placeholder:"Select fruits...",selectionDisplayMode:"default",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]}),t.jsxs("div",{className:"gap-2 flex flex-col",children:[t.jsx("h3",{className:"font-semibold text-body-primary",children:"Inline Mode (Inside Trigger)"}),t.jsx(P,{options:k,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]})]}),it={render:()=>t.jsx(as,{}),parameters:{docs:{description:{story:"This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area."},source:{code:`import { MultiSelect } from '@chemican/components';

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
/>`}}}},os=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Nectarine",value:"nectarine"},{label:"Orange",value:"orange"},{label:"Papaya",value:"papaya"},{label:"Quince",value:"quince"},{label:"Raspberry",value:"raspberry"},{label:"Strawberry",value:"strawberry"},{label:"Tangerine",value:"tangerine"},{label:"Watermelon",value:"watermelon"},{label:"Yuzu",value:"yuzu"}],ct={args:{options:os,placeholder:"Select fruits...",maxDisplayedOptions:5,moreOptionsLabel:e=>`Search to see ${e} more...`},parameters:{docs:{description:{story:"When `maxDisplayedOptions` is set, only the first N options are shown by default. A hint indicates how many more are available. Selected items always remain visible. Typing in the search input reveals all matching options."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  maxDisplayedOptions={5}
/>`}}}},gt=Array.from({length:60},(e,o)=>({label:`SDS Document ${o+1}`,value:`sds-${o+1}`})),ns=()=>{const[e,o]=m.useState(gt.slice(0,10)),[a,r]=m.useState(!1),l=m.useRef(void 0),c=h=>{r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const f=gt.filter(S=>S.label.toLowerCase().includes(h.toLowerCase()));o(f.slice(0,10)),r(!1)},800)};return t.jsx(P,{options:e,loading:a,onSearchValueChange:c,hideSelectAll:!0,placeholder:"Select SDS...",searchPlaceholder:"サーバー検索...",emptyIndicator:"該当する項目がありません"})},dt={render:()=>t.jsx(ns,{}),parameters:{docs:{description:{story:"Demonstrates server-side search. `onSearchValueChange` fires as the user types so the parent can fetch matching options, and `loading` shows a spinner inside the dropdown while the request is in flight. When `onSearchValueChange` is provided the built-in client-side filtering is disabled, so the parent fully controls `options`."},source:{code:`import { MultiSelect } from '@chemican/components';
import { useRef, useState } from 'react';

const [options, setOptions] = useState(initialOptions);
const [loading, setLoading] = useState(false);
const timerRef = useRef<ReturnType<typeof setTimeout>>();

const handleSearchValueChange = (search: string) => {
  setLoading(true);
  if (timerRef.current) clearTimeout(timerRef.current);
  timerRef.current = setTimeout(async () => {
    const results = await fetchSdsFromServer(search); // your API call
    setOptions(results);
    setLoading(false);
  }, 300);
};

<MultiSelect
  options={options}
  loading={loading}
  onSearchValueChange={handleSearchValueChange}
  hideSelectAll
  placeholder="Select SDS..."
/>`}}}},ss=()=>{const[e,o]=m.useState(gt),[a,r]=m.useState(!1),l=m.useRef(void 0),c=h=>{r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const f=gt.filter(S=>S.label.toLowerCase().includes(h.toLowerCase()));o(f),r(!1)},800)};return t.jsx(P,{options:e,loading:a,onSearchValueChange:c,maxDisplayedOptions:5,moreOptionsLabel:h=>`検索して他${h}件を表示`,hideSelectAll:!0,placeholder:"Select SDS...",searchPlaceholder:"サーバー検索...",emptyIndicator:"該当する項目がありません"})},ut={render:()=>t.jsx(ss,{}),parameters:{docs:{description:{story:'Combines `maxDisplayedOptions` with server-side search. Before searching, only the first N server-returned options are shown with a "type to see more" hint. As soon as the user types, `onSearchValueChange` fetches matching options (with `loading` shown meanwhile) and the truncation is lifted so every returned match is visible.'},source:{code:`import { MultiSelect } from '@chemican/components';
import { useRef, useState } from 'react';

const [options, setOptions] = useState(initialOptions);
const [loading, setLoading] = useState(false);
const timerRef = useRef<ReturnType<typeof setTimeout>>();

const handleSearchValueChange = (search: string) => {
  setLoading(true);
  if (timerRef.current) clearTimeout(timerRef.current);
  timerRef.current = setTimeout(async () => {
    setOptions(await fetchSdsFromServer(search));
    setLoading(false);
  }, 300);
};

<MultiSelect
  options={options}
  loading={loading}
  onSearchValueChange={handleSearchValueChange}
  maxDisplayedOptions={5}
  hideSelectAll
  placeholder="Select SDS..."
/>`}}}},Bt=[{label:"aoki@example.com",value:"aoki@example.com",name:"Aoki Haruka",department:"Quality Assurance"},{label:"baba@example.com",value:"baba@example.com",name:"Baba Ren",department:"Manufacturing"},{label:"chiba@example.com",value:"chiba@example.com",name:"Chiba Sora",department:"Research"},{label:"doi@example.com",value:"doi@example.com",name:"Doi Kaede",department:"Manufacturing"},{label:"endo@example.com",value:"endo@example.com",name:"Endo Tsubasa",department:"Logistics"},{label:"fujii@example.com",value:"fujii@example.com",name:"Fujii Nao",department:"Quality Assurance"},{label:"goto@example.com",value:"goto@example.com",name:"Goto Rin",department:"Research"},{label:"hara@example.com",value:"hara@example.com",name:"Hara Yuu",department:"Logistics"}],en=(e,o)=>[e.label,e.name,e.department].join(" ").toLowerCase().includes(o.toLowerCase()),ls=({option:e})=>t.jsxs("span",{className:"flex flex-col items-start",children:[t.jsx("span",{children:e.label}),t.jsxs("span",{className:"text-body-secondary text-xs",children:[e.name," · ",e.department]})]}),rs=()=>{const[e,o]=m.useState(["aoki@example.com","chiba@example.com"]),[a,r]=m.useState(e),[l,c]=m.useState(null),h=u=>{o(u),r(u)},f=u=>{if(e.some(w=>!u.includes(w))){c(u);return}h(u)},S=l?e.filter(u=>!l.includes(u)):[];return t.jsxs("div",{className:"gap-4 flex flex-col items-start",children:[t.jsx(P,{options:Bt,value:a,onValueChange:r,onApplySelection:f,customTrigger:t.jsx(Ie,{size:"xs",onClick:()=>r(e),children:"Assign users"}),hideSelection:!0,hideSelectAll:!0,autoSize:!0,closeLabel:"Done",clearAllLabel:"Clear all"}),l&&t.jsxs("div",{className:`gap-3 border-divider-default p-3 rounded flex items-center
            border`,children:[t.jsxs("span",{className:"text-sm",children:["Unassign ",S.join(", "),"?"]}),t.jsx(Ie,{size:"xs",danger:!0,onClick:()=>{h(l),c(null)},children:"Unassign"}),t.jsx(Ie,{size:"xs",intent:"secondary",onClick:()=>{r(e),c(null)},children:"Cancel"})]}),t.jsxs("p",{className:"text-body-secondary text-sm",children:["Draft: ",a.join(", ")||"(none)"]}),t.jsxs("p",{className:"text-body-primary text-sm",children:["Committed: ",e.join(", ")||"(none)"]})]})},pt={render:()=>t.jsx(rs,{}),parameters:{docs:{description:{story:"Passing `value` makes the component controlled: it renders exactly what the parent passes and never changes the selection itself. That is what lets the parent reset a draft (reopening the dropdown starts from the committed assignment, so an abandoned draft cannot be applied later) or hold a change behind a confirmation and reject it - both as plain state updates, with no imperative `ref` calls. `onValueChange` reports every edit, `onApplySelection` fires when the user closes the popover."},source:{code:`import { Button, MultiSelect } from '@chemican/components';
import { useState } from 'react';

const [assigned, setAssigned] = useState<string[]>([]);
const [draft, setDraft] = useState<string[]>(assigned);

<MultiSelect
  options={users}
  value={draft}
  onValueChange={setDraft}
  onApplySelection={handleApplySelection}
  customTrigger={
    // Discard an abandoned draft: plain state, no ref needed.
    <Button onClick={() => setDraft(assigned)}>Assign users</Button>
  }
/>`}}}},mt={args:{options:Bt,filterOption:en,renderOption:ls,hideSelectAll:!0,placeholder:"Select users...",searchPlaceholder:"Search name, email or department...",emptyIndicator:"No matching users"},parameters:{docs:{description:{story:'The built-in filter only ever sees an option\'s value and label. `filterOption` receives the whole option object instead, so search can match on anything the option carries - here the person\'s name and department, neither of which is in the label. Try searching "logistics" or "sora".'},source:{code:`<MultiSelect
  options={users}
  filterOption={(option, search) =>
    [option.label, option.name, option.department]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  }
  renderOption={renderUserOption}
/>`}}}},is=()=>{const[e,o]=m.useState([]),a=3;return t.jsx(P,{options:Bt,value:e,onValueChange:o,maxSelected:a,maxDisplayedOptions:4,moreOptionsLabel:r=>`Search to see ${r} more`,footerContent:t.jsxs("span",{className:"flex justify-end",children:[e.length," / ",a," seats used"]}),filterOption:en,hideSelection:!0,autoSize:!0,placeholder:"Assign seats...",closeLabel:"Done",clearAllLabel:"Clear all"})},ht={render:()=>t.jsx(is,{}),parameters:{docs:{description:{story:"`footerContent` renders above the clear/close actions and outside the scroll container, so a counter or limit hint stays readable while the user scrolls and searches. `maxSelected` caps the selection: once it is reached, unselected options render disabled (still listed, so the user can see what to free up first) and select-all is hidden because it would overshoot the cap. Deselecting always stays possible."},source:{code:`<MultiSelect
  options={users}
  value={selected}
  onValueChange={setSelected}
  maxSelected={3}
  footerContent={
    <span className="flex justify-end">
      {selected.length} / 3 seats used
    </span>
  }
/>`}}}};var ua,pa,ma;Pe.parameters={...Pe.parameters,docs:{...(ua=Pe.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ma=(pa=Pe.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,fa,ga;ze.parameters={...ze.parameters,docs:{...(ha=ze.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ga=(fa=ze.parameters)==null?void 0:fa.docs)==null?void 0:ga.source}}};var va,ba,ya;Fe.parameters={...Fe.parameters,docs:{...(va=Fe.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ya=(ba=Fe.parameters)==null?void 0:ba.docs)==null?void 0:ya.source}}};var xa,Sa,wa;Ue.parameters={...Ue.parameters,docs:{...(xa=Ue.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(wa=(Sa=Ue.parameters)==null?void 0:Sa.docs)==null?void 0:wa.source}}};var Ca,Na,Ta;_e.parameters={..._e.parameters,docs:{...(Ca=_e.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ta=(Na=_e.parameters)==null?void 0:Na.docs)==null?void 0:Ta.source}}};var Ra,Oa,Va;He.parameters={...He.parameters,docs:{...(Ra=He.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Va=(Oa=He.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var ja,Ia,Ma;Ge.parameters={...Ge.parameters,docs:{...(ja=Ge.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ma=(Ia=Ge.parameters)==null?void 0:Ia.docs)==null?void 0:Ma.source}}};var ka,Aa,La;Ke.parameters={...Ke.parameters,docs:{...(ka=Ke.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003'],
    placeholder: 'Max 2 visible...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(La=(Aa=Ke.parameters)==null?void 0:Aa.docs)==null?void 0:La.source}}};var Da,Wa,qa;Ye.parameters={...Ye.parameters,docs:{...(Da=Ye.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(qa=(Wa=Ye.parameters)==null?void 0:Wa.docs)==null?void 0:qa.source}}};var Ea,$a,Ba;Xe.parameters={...Xe.parameters,docs:{...(Ea=Xe.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ba=($a=Xe.parameters)==null?void 0:$a.docs)==null?void 0:Ba.source}}};var Pa,za,Fa;Je.parameters={...Je.parameters,docs:{...(Pa=Je.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Fa=(za=Je.parameters)==null?void 0:za.docs)==null?void 0:Fa.source}}};var Ua,_a,Ha;Qe.parameters={...Qe.parameters,docs:{...(Ua=Qe.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Disabled state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ha=(_a=Qe.parameters)==null?void 0:_a.docs)==null?void 0:Ha.source}}};var Ga,Ka,Ya;Ze.parameters={...Ze.parameters,docs:{...(Ga=Ze.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  args: {
    options: [],
    placeholder: 'No options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ya=(Ka=Ze.parameters)==null?void 0:Ka.docs)==null?void 0:Ya.source}}};var Xa,Ja,Qa;et.parameters={...et.parameters,docs:{...(Xa=et.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  args: {
    options: [],
    noOptionsIndicator: <div className="py-6 flex flex-col items-center text-center">
        <IconStar className="h-12 w-12 text-body-secondary mb-2" />
        <p className="text-body-secondary">No options available</p>
      </div>,
    placeholder: 'Custom empty state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Qa=(Ja=et.parameters)==null?void 0:Ja.docs)==null?void 0:Qa.source}}};var Za,eo,to;tt.parameters={...tt.parameters,docs:{...(Za=tt.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(to=(eo=tt.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var ao,oo,no;at.parameters={...at.parameters,docs:{...(ao=at.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(no=(oo=at.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var so,lo,ro;ot.parameters={...ot.parameters,docs:{...(so=ot.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(ro=(lo=ot.parameters)==null?void 0:lo.docs)==null?void 0:ro.source}}};var io,co,uo;nt.parameters={...nt.parameters,docs:{...(io=nt.parameters)==null?void 0:io.docs,source:{originalSource:`{
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
}`,...(uo=(co=nt.parameters)==null?void 0:co.docs)==null?void 0:uo.source}}};var po,mo,ho;st.parameters={...st.parameters,docs:{...(po=st.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(ho=(mo=st.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};var fo,go,vo;lt.parameters={...lt.parameters,docs:{...(fo=lt.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
}`,...(vo=(go=lt.parameters)==null?void 0:go.docs)==null?void 0:vo.source}}};var bo,yo,xo;rt.parameters={...rt.parameters,docs:{...(bo=rt.parameters)==null?void 0:bo.docs,source:{originalSource:`{
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
}`,...(xo=(yo=rt.parameters)==null?void 0:yo.docs)==null?void 0:xo.source}}};var So,wo,Co;it.parameters={...it.parameters,docs:{...(So=it.parameters)==null?void 0:So.docs,source:{originalSource:`{
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
}`,...(Co=(wo=it.parameters)==null?void 0:wo.docs)==null?void 0:Co.source}}};var No,To,Ro;ct.parameters={...ct.parameters,docs:{...(No=ct.parameters)==null?void 0:No.docs,source:{originalSource:`{
  args: {
    options: manyOptions,
    placeholder: 'Select fruits...',
    maxDisplayedOptions: 5,
    moreOptionsLabel: (count: number) => \`Search to see \${count} more...\`
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`maxDisplayedOptions\` is set, only the first N options are shown by default. A hint indicates how many more are available. Selected items always remain visible. Typing in the search input reveals all matching options.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  maxDisplayedOptions={5}
/>\`
      }
    }
  }
}`,...(Ro=(To=ct.parameters)==null?void 0:To.docs)==null?void 0:Ro.source}}};var Oo,Vo,jo;dt.parameters={...dt.parameters,docs:{...(Oo=dt.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
  render: () => <WithServerSideSearchComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates server-side search. \`onSearchValueChange\` fires as the user types so the parent can fetch matching options, and \`loading\` shows a spinner inside the dropdown while the request is in flight. When \`onSearchValueChange\` is provided the built-in client-side filtering is disabled, so the parent fully controls \`options\`.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';
import { useRef, useState } from 'react';

const [options, setOptions] = useState(initialOptions);
const [loading, setLoading] = useState(false);
const timerRef = useRef<ReturnType<typeof setTimeout>>();

const handleSearchValueChange = (search: string) => {
  setLoading(true);
  if (timerRef.current) clearTimeout(timerRef.current);
  timerRef.current = setTimeout(async () => {
    const results = await fetchSdsFromServer(search); // your API call
    setOptions(results);
    setLoading(false);
  }, 300);
};

<MultiSelect
  options={options}
  loading={loading}
  onSearchValueChange={handleSearchValueChange}
  hideSelectAll
  placeholder="Select SDS..."
/>\`
      }
    }
  }
}`,...(jo=(Vo=dt.parameters)==null?void 0:Vo.docs)==null?void 0:jo.source}}};var Io,Mo,ko;ut.parameters={...ut.parameters,docs:{...(Io=ut.parameters)==null?void 0:Io.docs,source:{originalSource:`{
  render: () => <WithServerSideSearchAndMaxDisplayedComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Combines \`maxDisplayedOptions\` with server-side search. Before searching, only the first N server-returned options are shown with a "type to see more" hint. As soon as the user types, \`onSearchValueChange\` fetches matching options (with \`loading\` shown meanwhile) and the truncation is lifted so every returned match is visible.'
      },
      source: {
        code: \`import { MultiSelect } from '@chemican/components';
import { useRef, useState } from 'react';

const [options, setOptions] = useState(initialOptions);
const [loading, setLoading] = useState(false);
const timerRef = useRef<ReturnType<typeof setTimeout>>();

const handleSearchValueChange = (search: string) => {
  setLoading(true);
  if (timerRef.current) clearTimeout(timerRef.current);
  timerRef.current = setTimeout(async () => {
    setOptions(await fetchSdsFromServer(search));
    setLoading(false);
  }, 300);
};

<MultiSelect
  options={options}
  loading={loading}
  onSearchValueChange={handleSearchValueChange}
  maxDisplayedOptions={5}
  hideSelectAll
  placeholder="Select SDS..."
/>\`
      }
    }
  }
}`,...(ko=(Mo=ut.parameters)==null?void 0:Mo.docs)==null?void 0:ko.source}}};var Ao,Lo,Do;pt.parameters={...pt.parameters,docs:{...(Ao=pt.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  render: () => <ControlledSelectionComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Passing \`value\` makes the component controlled: it renders exactly what the parent passes and never changes the selection itself. That is what lets the parent reset a draft (reopening the dropdown starts from the committed assignment, so an abandoned draft cannot be applied later) or hold a change behind a confirmation and reject it - both as plain state updates, with no imperative \`ref\` calls. \`onValueChange\` reports every edit, \`onApplySelection\` fires when the user closes the popover.'
      },
      source: {
        code: \`import { Button, MultiSelect } from '@chemican/components';
import { useState } from 'react';

const [assigned, setAssigned] = useState<string[]>([]);
const [draft, setDraft] = useState<string[]>(assigned);

<MultiSelect
  options={users}
  value={draft}
  onValueChange={setDraft}
  onApplySelection={handleApplySelection}
  customTrigger={
    // Discard an abandoned draft: plain state, no ref needed.
    <Button onClick={() => setDraft(assigned)}>Assign users</Button>
  }
/>\`
      }
    }
  }
}`,...(Do=(Lo=pt.parameters)==null?void 0:Lo.docs)==null?void 0:Do.source}}};var Wo,qo,Eo;mt.parameters={...mt.parameters,docs:{...(Wo=mt.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
  args: {
    options: seatUsers,
    filterOption: matchUserFields,
    renderOption: renderUserOption,
    hideSelectAll: true,
    placeholder: 'Select users...',
    searchPlaceholder: 'Search name, email or department...',
    emptyIndicator: 'No matching users'
  },
  parameters: {
    docs: {
      description: {
        story: 'The built-in filter only ever sees an option\\'s value and label. \`filterOption\` receives the whole option object instead, so search can match on anything the option carries - here the person\\'s name and department, neither of which is in the label. Try searching "logistics" or "sora".'
      },
      source: {
        code: \`<MultiSelect
  options={users}
  filterOption={(option, search) =>
    [option.label, option.name, option.department]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  }
  renderOption={renderUserOption}
/>\`
      }
    }
  }
}`,...(Eo=(qo=mt.parameters)==null?void 0:qo.docs)==null?void 0:Eo.source}}};var $o,Bo,Po;ht.parameters={...ht.parameters,docs:{...($o=ht.parameters)==null?void 0:$o.docs,source:{originalSource:`{
  render: () => <WithFooterContentComponent />,
  parameters: {
    docs: {
      description: {
        story: '\`footerContent\` renders above the clear/close actions and outside the scroll container, so a counter or limit hint stays readable while the user scrolls and searches. \`maxSelected\` caps the selection: once it is reached, unselected options render disabled (still listed, so the user can see what to free up first) and select-all is hidden because it would overshoot the cap. Deselecting always stays possible.'
      },
      source: {
        code: \`<MultiSelect
  options={users}
  value={selected}
  onValueChange={setSelected}
  maxSelected={3}
  footerContent={
    <span className="flex justify-end">
      {selected.length} / 3 seats used
    </span>
  }
/>\`
      }
    }
  }
}`,...(Po=(Bo=ht.parameters)==null?void 0:Bo.docs)==null?void 0:Po.source}}};const As=["Default","WithDefaultValues","WithTagsAsItems","WithStatusAsItems","WithIcons","Grouped","WithDisabledOptions","MaxCountLimited","NoSearch","NoSelectAll","CloseOnSelect","Disabled","NoOptions","CustomEmptyState","FilterByValueAndLabel","CustomRenderOption","WithOnApplySelection","WithCustomTrigger","WithHideSelection","CustomTriggerWithHideSelection","InlineSelectionDisplay","InlineSelectionComparison","MaxDisplayedOptions","WithServerSideSearch","WithServerSideSearchAndMaxDisplayed","ControlledSelection","WithCustomFilterOption","WithFooterContentAndMaxSelected"];export{Je as CloseOnSelect,pt as ControlledSelection,et as CustomEmptyState,at as CustomRenderOption,lt as CustomTriggerWithHideSelection,Pe as Default,Qe as Disabled,tt as FilterByValueAndLabel,He as Grouped,it as InlineSelectionComparison,rt as InlineSelectionDisplay,Ke as MaxCountLimited,ct as MaxDisplayedOptions,Ze as NoOptions,Ye as NoSearch,Xe as NoSelectAll,mt as WithCustomFilterOption,nt as WithCustomTrigger,ze as WithDefaultValues,Ge as WithDisabledOptions,ht as WithFooterContentAndMaxSelected,st as WithHideSelection,_e as WithIcons,ot as WithOnApplySelection,dt as WithServerSideSearch,ut as WithServerSideSearchAndMaxDisplayed,Ue as WithStatusAsItems,Fe as WithTagsAsItems,As as __namedExportsOrder,ks as default};
