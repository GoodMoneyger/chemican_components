import{r as i,a as ue,d as Q,y as Te,e as g,j as t,c as W,m as Eo}from"./iframe-DtiatmZk.js";import{S as $t}from"./StatusIndicator-iFj5QQ4D.js";import{T as ot}from"./Tag-TLth4wK3.js";import{B as Bt}from"./Button-D-cXko6g.js";import{P as $o}from"./ProgressIndicator-Bfss4lEU.js";import{P as Bo,c as Po,b as zo}from"./Popover-rsN21bb2.js";import{R as Fo,P as Uo,O as _o,C as Go}from"./index-CSwZAga7.js";import{I as Ho}from"./IconSearch-CwLv7tqd.js";import{a as vt}from"./Checkbox-CfCiOVGJ.js";import{I as vo}from"./IconChevronDown-C4WDZ5CK.js";import{c as Ko}from"./createReactComponent-CgS_4yu1.js";import{I as wt,a as Yo}from"./IconStar-CzMKtxRf.js";import{I as Xo}from"./IconX-2eHtcGTH.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./index-eTayC4kH.js";import"./index-CK4ViMtY.js";import"./IconMinus-DtRjIVn-.js";import"./IconCheck-DfNN7qwF.js";import"./index-DORycS5e.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]],go=Ko("outline","users","Users",Jo);var Pt=1,Qo=.9,Zo=.8,en=.17,gt=.1,bt=.999,tn=.9999,an=.99,on=/[\\\/_+.#"@\[\(\{&]/,nn=/[\\\/_+.#"@\[\(\{&]/g,sn=/[\s-]/,bo=/[\s-]/g;function xt(e,o,a,r,l,d,v){if(d===o.length)return l===e.length?Pt:an;var m=`${l},${d}`;if(v[m]!==void 0)return v[m];for(var w=r.charAt(d),f=a.indexOf(w,l),C=0,N,q,L,z;f>=0;)N=xt(e,o,a,r,f+1,d+1,v),N>C&&(f===l?N*=Pt:on.test(e.charAt(f-1))?(N*=Zo,L=e.slice(l,f-1).match(nn),L&&l>0&&(N*=Math.pow(bt,L.length))):sn.test(e.charAt(f-1))?(N*=Qo,z=e.slice(l,f-1).match(bo),z&&l>0&&(N*=Math.pow(bt,z.length))):(N*=en,l>0&&(N*=Math.pow(bt,f-l))),e.charAt(f)!==o.charAt(d)&&(N*=tn)),(N<gt&&a.charAt(f-1)===r.charAt(d+1)||r.charAt(d+1)===r.charAt(d)&&a.charAt(f-1)!==r.charAt(d))&&(q=xt(e,o,a,r,f+1,d+2,v),q*gt>N&&(N=q*gt)),N>C&&(C=N),f=a.indexOf(w,f+1);return v[m]=C,C}function zt(e){return e.toLowerCase().replace(bo," ")}function ln(e,o,a){return e=a&&a.length>0?`${e+" "+a.join(" ")}`:e,xt(e,o,zt(e),zt(o),0,0,{})}var Ce='[cmdk-group=""]',yt='[cmdk-group-items=""]',rn='[cmdk-group-heading=""]',yo='[cmdk-item=""]',Ft=`${yo}:not([aria-disabled="true"])`,St="cmdk-item-select",ce="data-value",cn=(e,o,a)=>ln(e,o,a),xo=i.createContext(void 0),Oe=()=>i.useContext(xo),So=i.createContext(void 0),Ct=()=>i.useContext(So),wo=i.createContext(void 0),Co=i.forwardRef((e,o)=>{let a=de(()=>{var n,h;return{search:"",value:(h=(n=e.value)!=null?n:e.defaultValue)!=null?h:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),r=de(()=>new Set),l=de(()=>new Map),d=de(()=>new Map),v=de(()=>new Set),m=No(e),{label:w,children:f,value:C,onValueChange:N,filter:q,shouldFilter:L,loop:z,disablePointerSelection:pe=!1,vimBindings:G=!0,...le}=e,me=ue(),Ve=ue(),fe=ue(),P=i.useRef(null),T=xn();se(()=>{if(C!==void 0){let n=C.trim();a.current.value=n,D.emit()}},[C]),se(()=>{T(6,be)},[]);let D=i.useMemo(()=>({subscribe:n=>(v.current.add(n),()=>v.current.delete(n)),snapshot:()=>a.current,setState:(n,h,y)=>{var u,x,R,k;if(!Object.is(a.current[n],h)){if(a.current[n]=h,n==="search")Z(),ve(),T(1,ge);else if(n==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let I=document.getElementById(fe);I?I.focus():(u=document.getElementById(me))==null||u.focus()}if(T(7,()=>{var I;a.current.selectedItemId=(I=X())==null?void 0:I.id,D.emit()}),y||T(5,be),((x=m.current)==null?void 0:x.value)!==void 0){let I=h??"";(k=(R=m.current).onValueChange)==null||k.call(R,I);return}}D.emit()}},emit:()=>{v.current.forEach(n=>n())}}),[]),he=i.useMemo(()=>({value:(n,h,y)=>{var u;h!==((u=d.current.get(n))==null?void 0:u.value)&&(d.current.set(n,{value:h,keywords:y}),a.current.filtered.items.set(n,Ie(h,y)),T(2,()=>{ve(),D.emit()}))},item:(n,h)=>(r.current.add(n),h&&(l.current.has(h)?l.current.get(h).add(n):l.current.set(h,new Set([n]))),T(3,()=>{Z(),ve(),a.current.value||ge(),D.emit()}),()=>{d.current.delete(n),r.current.delete(n),a.current.filtered.items.delete(n);let y=X();T(4,()=>{Z(),(y==null?void 0:y.getAttribute("id"))===n&&ge(),D.emit()})}),group:n=>(l.current.has(n)||l.current.set(n,new Set),()=>{d.current.delete(n),l.current.delete(n)}),filter:()=>m.current.shouldFilter,label:w||e["aria-label"],getDisablePointerSelection:()=>m.current.disablePointerSelection,listId:me,inputId:fe,labelId:Ve,listInnerRef:P}),[]);function Ie(n,h){var y,u;let x=(u=(y=m.current)==null?void 0:y.filter)!=null?u:cn;return n?x(n,a.current.search,h):0}function ve(){if(!a.current.search||m.current.shouldFilter===!1)return;let n=a.current.filtered.items,h=[];a.current.filtered.groups.forEach(u=>{let x=l.current.get(u),R=0;x.forEach(k=>{let I=n.get(k);R=Math.max(I,R)}),h.push([u,R])});let y=P.current;M().sort((u,x)=>{var R,k;let I=u.getAttribute("id"),te=x.getAttribute("id");return((R=n.get(te))!=null?R:0)-((k=n.get(I))!=null?k:0)}).forEach(u=>{let x=u.closest(yt);x?x.appendChild(u.parentElement===x?u:u.closest(`${yt} > *`)):y.appendChild(u.parentElement===y?u:u.closest(`${yt} > *`))}),h.sort((u,x)=>x[1]-u[1]).forEach(u=>{var x;let R=(x=P.current)==null?void 0:x.querySelector(`${Ce}[${ce}="${encodeURIComponent(u[0])}"]`);R==null||R.parentElement.appendChild(R)})}function ge(){let n=M().find(y=>y.getAttribute("aria-disabled")!=="true"),h=n==null?void 0:n.getAttribute(ce);D.setState("value",h||void 0)}function Z(){var n,h,y,u;if(!a.current.search||m.current.shouldFilter===!1){a.current.filtered.count=r.current.size;return}a.current.filtered.groups=new Set;let x=0;for(let R of r.current){let k=(h=(n=d.current.get(R))==null?void 0:n.value)!=null?h:"",I=(u=(y=d.current.get(R))==null?void 0:y.keywords)!=null?u:[],te=Ie(k,I);a.current.filtered.items.set(R,te),te>0&&x++}for(let[R,k]of l.current)for(let I of k)if(a.current.filtered.items.get(I)>0){a.current.filtered.groups.add(R);break}a.current.filtered.count=x}function be(){var n,h,y;let u=X();u&&(((n=u.parentElement)==null?void 0:n.firstChild)===u&&((y=(h=u.closest(Ce))==null?void 0:h.querySelector(rn))==null||y.scrollIntoView({block:"nearest"})),u.scrollIntoView({block:"nearest"}))}function X(){var n;return(n=P.current)==null?void 0:n.querySelector(`${yo}[aria-selected="true"]`)}function M(){var n;return Array.from(((n=P.current)==null?void 0:n.querySelectorAll(Ft))||[])}function re(n){let h=M()[n];h&&D.setState("value",h.getAttribute(ce))}function ee(n){var h;let y=X(),u=M(),x=u.findIndex(k=>k===y),R=u[x+n];(h=m.current)!=null&&h.loop&&(R=x+n<0?u[u.length-1]:x+n===u.length?u[0]:u[x+n]),R&&D.setState("value",R.getAttribute(ce))}function je(n){let h=X(),y=h==null?void 0:h.closest(Ce),u;for(;y&&!u;)y=n>0?bn(y,Ce):yn(y,Ce),u=y==null?void 0:y.querySelector(Ft);u?D.setState("value",u.getAttribute(ce)):ee(n)}let ye=()=>re(M().length-1),ie=n=>{n.preventDefault(),n.metaKey?ye():n.altKey?je(1):ee(1)},xe=n=>{n.preventDefault(),n.metaKey?re(0):n.altKey?je(-1):ee(-1)};return i.createElement(Q.div,{ref:o,tabIndex:-1,...le,"cmdk-root":"",onKeyDown:n=>{var h;(h=le.onKeyDown)==null||h.call(le,n);let y=n.nativeEvent.isComposing||n.keyCode===229;if(!(n.defaultPrevented||y))switch(n.key){case"n":case"j":{G&&n.ctrlKey&&ie(n);break}case"ArrowDown":{ie(n);break}case"p":case"k":{G&&n.ctrlKey&&xe(n);break}case"ArrowUp":{xe(n);break}case"Home":{n.preventDefault(),re(0);break}case"End":{n.preventDefault(),ye();break}case"Enter":{n.preventDefault();let u=X();if(u){let x=new Event(St);u.dispatchEvent(x)}}}}},i.createElement("label",{"cmdk-label":"",htmlFor:he.inputId,id:he.labelId,style:wn},w),st(e,n=>i.createElement(So.Provider,{value:D},i.createElement(xo.Provider,{value:he},n))))}),dn=i.forwardRef((e,o)=>{var a,r;let l=ue(),d=i.useRef(null),v=i.useContext(wo),m=Oe(),w=No(e),f=(r=(a=w.current)==null?void 0:a.forceMount)!=null?r:v==null?void 0:v.forceMount;se(()=>{if(!f)return m.item(l,v==null?void 0:v.id)},[f]);let C=Ro(l,d,[e.value,e.children,d],e.keywords),N=Ct(),q=J(T=>T.value&&T.value===C.current),L=J(T=>f||m.filter()===!1?!0:T.search?T.filtered.items.get(l)>0:!0);i.useEffect(()=>{let T=d.current;if(!(!T||e.disabled))return T.addEventListener(St,z),()=>T.removeEventListener(St,z)},[L,e.onSelect,e.disabled]);function z(){var T,D;pe(),(D=(T=w.current).onSelect)==null||D.call(T,C.current)}function pe(){N.setState("value",C.current,!0)}if(!L)return null;let{disabled:G,value:le,onSelect:me,forceMount:Ve,keywords:fe,...P}=e;return i.createElement(Q.div,{ref:Te(d,o),...P,id:l,"cmdk-item":"",role:"option","aria-disabled":!!G,"aria-selected":!!q,"data-disabled":!!G,"data-selected":!!q,onPointerMove:G||m.getDisablePointerSelection()?void 0:pe,onClick:G?void 0:z},e.children)}),un=i.forwardRef((e,o)=>{let{heading:a,children:r,forceMount:l,...d}=e,v=ue(),m=i.useRef(null),w=i.useRef(null),f=ue(),C=Oe(),N=J(L=>l||C.filter()===!1?!0:L.search?L.filtered.groups.has(v):!0);se(()=>C.group(v),[]),Ro(v,m,[e.value,e.heading,w]);let q=i.useMemo(()=>({id:v,forceMount:l}),[l]);return i.createElement(Q.div,{ref:Te(m,o),...d,"cmdk-group":"",role:"presentation",hidden:N?void 0:!0},a&&i.createElement("div",{ref:w,"cmdk-group-heading":"","aria-hidden":!0,id:f},a),st(e,L=>i.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":a?f:void 0},i.createElement(wo.Provider,{value:q},L))))}),pn=i.forwardRef((e,o)=>{let{alwaysRender:a,...r}=e,l=i.useRef(null),d=J(v=>!v.search);return!a&&!d?null:i.createElement(Q.div,{ref:Te(l,o),...r,"cmdk-separator":"",role:"separator"})}),mn=i.forwardRef((e,o)=>{let{onValueChange:a,...r}=e,l=e.value!=null,d=Ct(),v=J(f=>f.search),m=J(f=>f.selectedItemId),w=Oe();return i.useEffect(()=>{e.value!=null&&d.setState("search",e.value)},[e.value]),i.createElement(Q.input,{ref:o,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":w.listId,"aria-labelledby":w.labelId,"aria-activedescendant":m,id:w.inputId,type:"text",value:l?e.value:v,onChange:f=>{l||d.setState("search",f.target.value),a==null||a(f.target.value)}})}),fn=i.forwardRef((e,o)=>{let{children:a,label:r="Suggestions",...l}=e,d=i.useRef(null),v=i.useRef(null),m=J(f=>f.selectedItemId),w=Oe();return i.useEffect(()=>{if(v.current&&d.current){let f=v.current,C=d.current,N,q=new ResizeObserver(()=>{N=requestAnimationFrame(()=>{let L=f.offsetHeight;C.style.setProperty("--cmdk-list-height",L.toFixed(1)+"px")})});return q.observe(f),()=>{cancelAnimationFrame(N),q.unobserve(f)}}},[]),i.createElement(Q.div,{ref:Te(d,o),...l,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":m,"aria-label":r,id:w.listId},st(e,f=>i.createElement("div",{ref:Te(v,w.listInnerRef),"cmdk-list-sizer":""},f)))}),hn=i.forwardRef((e,o)=>{let{open:a,onOpenChange:r,overlayClassName:l,contentClassName:d,container:v,...m}=e;return i.createElement(Fo,{open:a,onOpenChange:r},i.createElement(Uo,{container:v},i.createElement(_o,{"cmdk-overlay":"",className:l}),i.createElement(Go,{"aria-label":e.label,"cmdk-dialog":"",className:d},i.createElement(Co,{ref:o,...m}))))}),vn=i.forwardRef((e,o)=>J(a=>a.filtered.count===0)?i.createElement(Q.div,{ref:o,...e,"cmdk-empty":"",role:"presentation"}):null),gn=i.forwardRef((e,o)=>{let{progress:a,children:r,label:l="Loading...",...d}=e;return i.createElement(Q.div,{ref:o,...d,"cmdk-loading":"",role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},st(e,v=>i.createElement("div",{"aria-hidden":!0},v)))}),E=Object.assign(Co,{List:fn,Item:dn,Input:mn,Group:un,Separator:pn,Dialog:hn,Empty:vn,Loading:gn});function bn(e,o){let a=e.nextElementSibling;for(;a;){if(a.matches(o))return a;a=a.nextElementSibling}}function yn(e,o){let a=e.previousElementSibling;for(;a;){if(a.matches(o))return a;a=a.previousElementSibling}}function No(e){let o=i.useRef(e);return se(()=>{o.current=e}),o}var se=typeof window>"u"?i.useEffect:i.useLayoutEffect;function de(e){let o=i.useRef();return o.current===void 0&&(o.current=e()),o}function J(e){let o=Ct(),a=()=>e(o.snapshot());return i.useSyncExternalStore(o.subscribe,a,a)}function Ro(e,o,a,r=[]){let l=i.useRef(),d=Oe();return se(()=>{var v;let m=(()=>{var f;for(let C of a){if(typeof C=="string")return C.trim();if(typeof C=="object"&&"current"in C)return C.current?(f=C.current.textContent)==null?void 0:f.trim():l.current}})(),w=r.map(f=>f.trim());d.value(e,m,w),(v=o.current)==null||v.setAttribute(ce,m),l.current=m}),l}var xn=()=>{let[e,o]=i.useState(),a=de(()=>new Map);return se(()=>{a.current.forEach(r=>r()),a.current=new Map},[e]),(r,l)=>{a.current.set(r,l),o({})}};function Sn(e){let o=e.type;return typeof o=="function"?o(e.props):"render"in o?o.render(e.props):e}function st({asChild:e,children:o},a){return e&&i.isValidElement(o)?i.cloneElement(Sn(o),{ref:o.ref},a(o.props.children)):a(o)}var wn={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Nt=g.forwardRef(({className:e,...o},a)=>t.jsx(E,{ref:a,className:W(`bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,e),...o}));Nt.displayName=E.displayName;const Rt=g.forwardRef(({className:e,...o},a)=>t.jsx("div",{className:"border-divider-default py-sm px-md flex items-center border-b","cmdk-input-wrapper":"",children:t.jsxs("div",{className:`border-interactive-default bg-surface-primary
        hover:border-interactive-hover
        has-[:disabled]:border-interactive-disabled
        has-[:disabled]:bg-surface-disabled
        has-[:focus]:ring-interactive-focused h-10 rounded px-sm relative flex
        w-full items-center border
        has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
        has-[:focus]:outline-0`,children:[t.jsx(Ho,{className:"mr-xxs h-3.5 w-3.5 shrink-0"}),t.jsx(E.Input,{ref:a,className:W(`placeholder:text-body-placeholder h-11 rounded-md py-3 flex w-full
          bg-transparent outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,e),...o})]})}));Rt.displayName=E.Input.displayName;const Tt=g.forwardRef(({className:e,...o},a)=>t.jsx(E.List,{ref:a,className:W("max-h-[300px] overflow-x-hidden overflow-y-auto",e),...o}));Tt.displayName=E.List.displayName;const Ot=g.forwardRef((e,o)=>t.jsx(E.Empty,{ref:o,className:"text-body-secondary py-6 text-center",...e}));Ot.displayName=E.Empty.displayName;const Ne=g.forwardRef(({className:e,...o},a)=>t.jsx(E.Group,{ref:a,className:W(`text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,e),...o}));Ne.displayName=E.Group.displayName;const To=g.forwardRef(({className:e,...o},a)=>t.jsx(E.Separator,{ref:a,className:W("-mx-1 h-px bg-[var(--token-color-border-divider-default)]",e),...o}));To.displayName=E.Separator.displayName;const Re=g.forwardRef(({className:e,...o},a)=>t.jsx(E.Item,{ref:a,className:W(`hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg min-h-10 py-1.5 relative flex
      cursor-default items-center wrap-anywhere outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,e),...o}));Re.displayName=E.Item.displayName;Nt.__docgenInfo={description:"",methods:[]};Rt.__docgenInfo={description:"",methods:[]};Tt.__docgenInfo={description:"",methods:[]};Ot.__docgenInfo={description:"",methods:[]};Ne.__docgenInfo={description:"",methods:[]};Re.__docgenInfo={description:"",methods:[]};To.__docgenInfo={description:"",methods:[]};const Ut=Eo("ease-in-out transition-all duration-300",{variants:{variant:{default:`border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,secondary:`border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,destructive:`bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`}},defaultVariants:{variant:"default"}}),Cn=({options:e,onValueChange:o=b=>b,onSearchValueChange:a,loading:r=!1,loadingLabel:l="読み込み中...",onApplySelection:d=b=>b,variant:v,defaultValue:m=[],placeholder:w="選択してください",placeholderAriaLabel:f="選択してください",triggerDescription:C="マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",noSelectionLabel:N="オプションが選択されていません",searchHelpText:q="入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",searchAriaLabel:L="利用可能なオプションを検索",optionsListAriaLabel:z="利用可能なオプション",selectAllLabel:pe="すべて選択",selectAllCountLabel:G="オプション",clearAllLabel:le="すべてクリア",closeLabel:me="閉じる",moreSelectedLabel:Ve="その他",searchPlaceholder:fe="オプションを検索...",maxCount:P=10,modalPopover:T=!1,className:D,hideSelectAll:he=!1,searchable:Ie=!0,emptyIndicator:ve="結果が見つかりません。",noOptionsIndicator:ge="利用可能なオプションがありません。",autoSize:Z=!1,singleLine:be=!1,popoverClassName:X,disabled:M=!1,invalid:re=!1,responsive:ee,minWidth:je,maxWidth:ye,deduplicateOptions:ie=!1,resetOnDefaultValueChange:xe=!0,closeOnSelect:n=!1,filterByValueAndLabel:h=!1,renderOption:y,customTrigger:u,selectionDisplayMode:x="default",hideSelection:R=!1,maxDisplayedOptions:k,totalOptionsCount:I,moreOptionsLabel:te=b=>`検索テキストを入力して他${b}件を表示`,...Vo},Io)=>{const[b,H]=g.useState(m),[$,ae]=g.useState(!1),[F,lt]=g.useState(""),[jo,Vt]=g.useState(""),[Mo,It]=g.useState(""),rt=g.useRef(b.length),jt=g.useRef($),Mt=g.useRef(F),oe=g.useCallback((s,c="polite")=>{c==="assertive"?(It(s),setTimeout(()=>It(""),100)):(Vt(s),setTimeout(()=>Vt(""),100))},[]),Se=g.useId(),kt=`${Se}-listbox`,At=`${Se}-description`,Lt=`${Se}-count`,Dt=g.useRef(m),it=g.useCallback(s=>{const c=s[0];return!!(c&&typeof c=="object"&&"heading"in c)},[]),ct=g.useCallback((s,c)=>{if(s.length!==c.length)return!1;const p=[...s].sort(),S=[...c].sort();return p.every((O,j)=>O===S[j])},[]),Wt=g.useCallback(()=>{H(m),ae(!1),lt(""),o(m)},[m,o]),U=g.useRef(null);g.useImperativeHandle(Io,()=>({reset:Wt,getSelectedValues:()=>b,setSelectedValues:s=>{H(s),o(s)},clear:()=>{H([]),o([])},focus:()=>{if(U.current){U.current.focus();const s=U.current.style.outline,c=U.current.style.outlineOffset;U.current.style.outline="2px solid hsl(var(--ring))",U.current.style.outlineOffset="2px",setTimeout(()=>{U.current&&(U.current.style.outline=s,U.current.style.outlineOffset=c)},1e3)}}}),[Wt,b,o]);const[_,dt]=g.useState("desktop");g.useEffect(()=>{if(typeof window>"u")return;const s=()=>{const c=window.innerWidth;c<640?dt("mobile"):c<1024?dt("tablet"):dt("desktop")};return s(),window.addEventListener("resize",s),()=>{typeof window<"u"&&window.removeEventListener("resize",s)}},[]);const ne=(()=>{if(!ee)return{maxCount:P,compactMode:!1};if(ee===!0){const p={mobile:{maxCount:2,compactMode:!0},tablet:{maxCount:4,compactMode:!1},desktop:{maxCount:6,compactMode:!1}}[_];return{maxCount:(p==null?void 0:p.maxCount)??P,compactMode:(p==null?void 0:p.compactMode)??!1}}const s=ee[_];return{maxCount:(s==null?void 0:s.maxCount)??P,compactMode:(s==null?void 0:s.compactMode)??!1}})(),B=g.useCallback(()=>{if(e.length===0)return[];let s;it(e)?s=e.flatMap(O=>O.options):s=e;const c=new Set,p=[],S=[];return s.forEach(O=>{c.has(O.value)?(p.push(O.value),ie||S.push(O)):(c.add(O.value),S.push(O))}),ie?S:s},[e,ie,it]),we=g.useCallback(s=>B().find(p=>p.value===s),[B]),ko=g.useCallback((s,c)=>{const[p,S]=s.split(":");if(!h)return S&&S.toLowerCase().includes(c.toLowerCase())?1:0;const O=c.toLowerCase();return S&&S.toLowerCase().includes(O)||p&&p.toLowerCase().includes(O)?1:0},[h]),Ao=s=>{if(s.key==="Enter")ae(!0);else if(s.key==="Backspace"&&!s.currentTarget.value){const c=[...b];c.pop(),H(c),o(c)}},ut=s=>{if(M)return;const c=we(s);if(c!=null&&c.disabled)return;const p=b.includes(s)?b.filter(S=>S!==s):[...b,s];H(p),o(p),n&&ae(!1)},qt=()=>{M||(H([]),d([]),o([]))},Lo=()=>{M||ae(s=>!s)},Do=()=>{if(M)return;const s=b.slice(0,ne.maxCount);H(s),o(s)},Wo=()=>{if(M)return;const s=B().filter(c=>!c.disabled);if(b.length===s.length)qt();else{const c=s.map(p=>p.value);H(c),o(c)}n&&ae(!1)},pt=y||(s=>{const{option:c,location:p,onRemove:S,disabled:O}=s;return p==="badge"?t.jsx(ot,{className:W(Ut({variant:v}),ne.compactMode&&"text-xs px-1.5 py-0.5",_==="mobile"&&"max-w-[120px] truncate",be&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",O&&"cursor-not-allowed"),...!O&&{onRemove:S},children:c.label}):c.label}),mt=B().length>0,ft=!!F.trim(),Me=k!==void 0&&(!ft||!!a);g.useEffect(()=>{if(!xe)return;const s=Dt.current;ct(s,m)||(ct(b,m)||H(m),Dt.current=[...m])},[m,b,ct,xe]);const ht={minWidth:je||(_==="mobile"?"0px":"200px"),maxWidth:ye||"100%",popoverMaxWidth:ye||"32rem",width:Z?"auto":"100%"},Et=g.useMemo(()=>x==="default"||b.length===0?w:b.map(s=>{var c;return(c=we(s))==null?void 0:c.label}).filter(Boolean).join(", "),[b,we,w,x]);return g.useEffect(()=>{$||lt("")},[$]),g.useEffect(()=>{const s=b.length,c=B(),p=c.filter(S=>!S.disabled).length;if(s!==rt.current){const S=s-rt.current;if(S>0){const j=b.slice(-S).map(V=>{var K;return(K=c.find(qo=>qo.value===V))==null?void 0:K.label}).filter(Boolean);j.length===1?oe(`${j[0]} selected. ${s} of ${p} options selected.`):oe(`${j.length} options selected. ${s} of ${p} total selected.`)}else S<0&&oe(`Option removed. ${s} of ${p} options selected.`);rt.current=s}$!==jt.current&&(oe($?`Dropdown opened. ${p} options available. Use arrow keys to navigate.`:"Dropdown closed."),jt.current=$),F!==Mt.current&&F!==void 0&&(F&&$&&oe(`Searching for "${F}"`),Mt.current=F)},[b,$,F,oe,B]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"sr-only",children:[t.jsx("div",{"aria-live":"polite","aria-atomic":"true",role:"status",children:jo}),t.jsx("div",{"aria-live":"assertive","aria-atomic":"true",role:"alert",children:Mo})]}),t.jsxs(Bo,{open:$,onOpenChange:ae,modal:T,children:[t.jsx("div",{id:At,className:"sr-only",children:C}),t.jsx("div",{id:Lt,className:"sr-only","aria-live":"polite",children:b.length===0?N:`${b.length} option${b.length===1?"":"s"} selected: ${b.map(s=>{var c;return(c=we(s))==null?void 0:c.label}).filter(Boolean).join(", ")}`}),t.jsxs("div",{className:W(Z&&"w-auto",D),children:[t.jsx(Po,{asChild:!0,children:u||t.jsx("button",{ref:U,...Vo,onClick:Lo,disabled:M,className:W(`border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,Z?"w-auto":"w-full",!re&&`hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,re&&`border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,ne.compactMode&&"min-h-8 text-sm",_==="mobile"&&"min-h-12"),style:{...ht,maxWidth:`min(${ht.maxWidth}, 100%)`},role:"combobox","aria-expanded":$,"aria-haspopup":"listbox","aria-controls":$?kt:void 0,"aria-describedby":`${At} ${Lt}`,"aria-label":`Multi-select: ${b.length} of ${B().length} options selected. ${f}`,children:t.jsxs("div",{className:"mx-auto flex w-full items-center justify-between",children:[t.jsx("span",{className:W("mx-sm",x==="inline"&&"truncate",M?"text-body-disabled":$||x==="inline"&&Et!==w?"text-body-primary":"text-body-placeholder"),children:Et}),t.jsx(vo,{className:W("h-4 mx-xs cursor-pointer",M?"text-body-disabled":"text-body-primary")})]})})}),!(R||x==="inline")&&t.jsxs("div",{className:"gap-xxs mt-xxs flex flex-wrap",children:[b.slice(0,ne.maxCount).map(s=>{const c=we(s);return c?t.jsx(g.Fragment,{children:pt({option:c,location:"badge",onRemove:()=>ut(s),disabled:M})},s):null}).filter(Boolean),b.length>ne.maxCount&&t.jsxs(ot,{className:W(`text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,Ut({variant:v}),ne.compactMode&&"text-xs px-1.5 py-0.5",be&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",M&&"cursor-not-allowed"),...!M&&{onRemove:Do},children:["+ ",b.length-ne.maxCount," ",Ve]})]})]}),t.jsx(zo,{id:kt,role:"listbox","aria-multiselectable":"true","aria-label":z,className:W("p-0 w-auto",_==="mobile"&&"w-[85vw] max-w-[280px]",_==="tablet"&&"max-w-md w-[70vw]",_==="desktop"&&"min-w-[300px]",X),style:{maxWidth:`min(${ht.popoverMaxWidth}, 85vw)`,maxHeight:_==="mobile"?"70vh":"60vh",touchAction:"manipulation"},align:"start",children:t.jsxs(Nt,{filter:ko,shouldFilter:!a,children:[Ie&&t.jsxs("header",{children:[t.jsx("div",{id:`${Se}-search-help`,className:"sr-only",children:q}),t.jsx(Rt,{placeholder:fe,onKeyDown:Ao,value:F,onValueChange:s=>{lt(s),a==null||a(s)},"aria-label":L,"aria-describedby":`${Se}-search-help`})]}),t.jsxs(Tt,{className:W("max-h-[calc(40vh-56px)] overflow-y-auto",_==="mobile"&&"max-h-[calc(50vh-56px)]"),style:{overscrollBehaviorY:"contain"},children:[r&&t.jsx("div",{role:"status",className:`px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,children:t.jsx($o.Circular,{size:"sm",children:l})}),!r&&(mt||ft)&&t.jsx(Ot,{children:ve}),!r&&!mt&&!ft&&t.jsx("div",{role:"status",className:`px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,children:ge}),!r&&!he&&!F&&mt&&t.jsx(Ne,{children:t.jsxs(Re,{value:"select-all",onSelect:Wo,role:"option","aria-selected":b.length===B().filter(s=>!s.disabled).length,"aria-label":`Select all ${B().length} options`,className:"cursor-pointer",children:[t.jsx(vt,{className:"mr-xs",checked:b.length===B().filter(s=>!s.disabled).length}),t.jsxs("span",{children:["(",pe,B().length>20?t.jsxs(t.Fragment,{children:[" - ",B().length," ",G]}):null,")"]})]},"all")}),!r&&(it(e)?(()=>{let s=0;const c=e.reduce((j,V)=>j+V.options.length,0),p=e.map(j=>{const V=Me?j.options.filter(K=>s++<k||b.includes(K.value)):j.options;return{...j,options:V}}),S=p.reduce((j,V)=>j+V.options.length,0),O=(I??c)-S;return t.jsxs(t.Fragment,{children:[p.map(j=>j.options.length===0?null:t.jsx(Ne,{heading:j.heading,children:j.options.map(V=>{const K=b.includes(V.value);return t.jsxs(Re,{value:`${V.value}:${V.label}`,onSelect:()=>ut(V.value),role:"option","aria-selected":K,"aria-disabled":V.disabled??!1,"aria-label":`${V.label}${K?", selected":", not selected"}${V.disabled?", disabled":""}`,className:W("cursor-pointer",V.disabled&&"text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"),disabled:!!V.disabled,children:[t.jsx(vt,{className:"mr-xs",checked:K}),t.jsx("span",{className:"min-w-0 overflow-hidden",children:pt({option:V,location:"dropdown",isSelected:K})})]},V.value)})},j.heading)),Me&&O>0&&t.jsx("div",{className:"text-body-secondary px-lg py-sm text-sm italic",children:te(O)})]})})():t.jsx(Ne,{children:(()=>{const s=Me?e.filter((p,S)=>S<k||b.includes(p.value)):e,c=(I??e.length)-s.length;return t.jsxs(t.Fragment,{children:[s.map(p=>{const S=b.includes(p.value);return t.jsxs(Re,{value:`${p.value}:${p.label}`,onSelect:()=>ut(p.value),role:"option","aria-selected":S,"aria-disabled":p.disabled??!1,"aria-label":`${p.label}${S?", selected":", not selected"}${p.disabled?", disabled":""}`,className:W("cursor-pointer",p.disabled&&"text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"),disabled:!!p.disabled,children:[t.jsx(vt,{className:"mr-xs",checked:S}),t.jsx("span",{className:"min-w-0 overflow-hidden",children:pt({option:p,location:"dropdown",isSelected:S})})]},p.value)}),Me&&c>0&&t.jsx("div",{className:"text-body-secondary px-lg py-sm text-sm italic",children:te(c)})]})})()}))]}),t.jsx("footer",{className:`px-md py-sm bg-surface-primary bottom-0
                border-t-divider-default flex items-center justify-between
                border-t`,children:t.jsxs(t.Fragment,{children:[t.jsx(Bt,{intent:"text",size:"xs",className:"min-w-auto",onClick:qt,disabled:b.length===0,children:le}),t.jsx(Bt,{intent:"primary",size:"xs",className:"min-w-auto",onClick:()=>{d(b),ae(!1)},children:me})]})})]})})]})]})},Y=g.forwardRef(Cn);Y.displayName="MultiSelect";Y.__docgenInfo={description:"",methods:[{name:"getSelectedValues",docblock:null,modifiers:[],params:[],returns:null},{name:"setSelectedValues",docblock:null,modifiers:[],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"T"}],raw:"T[]"}}],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"union",raw:"MultiSelectOption<T>[] | MultiSelectGroup<T>[]",elements:[{name:"Array",elements:[{name:"MultiSelectOption",elements:[{name:"T"}],raw:"MultiSelectOption<T>"}],raw:"MultiSelectOption<T>[]"},{name:"Array",elements:[{name:"MultiSelectGroup",elements:[{name:"T"}],raw:"MultiSelectGroup<T>"}],raw:"MultiSelectGroup<T>[]"}]},description:`Array of options or grouped options to display in the dropdown.
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
Optional, defaults to "No results found."`,defaultValue:{value:"'結果が見つかりません。'",computed:!1}},noOptionsIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Message shown in the popover when the component has no options at all.
In that case the select-all option is not rendered either.
Optional, defaults to "No options available."`,defaultValue:{value:"'利用可能なオプションがありません。'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown in the search input when search is enabled.
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
Optional, called only when user confirms their selection.`,defaultValue:{value:"(value) => value",computed:!1}}},composes:["Omit","VariantProps"]};const ts={title:"Components/MultiSelect",component:Y,parameters:{docs:{description:{component:"A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","inverted"],description:"Visual style variant of the component"},maxCount:{control:"number",description:'Maximum number of selected items to display before showing "+X more"'},searchable:{control:"boolean",description:"Whether to show search functionality"},hideSelectAll:{control:"boolean",description:'Whether to hide the "Select All" option'},disabled:{control:"boolean",description:"Whether the component is disabled"},closeOnSelect:{control:"boolean",description:"Whether to close the popover after selecting an option"},singleLine:{control:"boolean",description:"Whether to display selected items in a single line with scroll"},autoSize:{control:"boolean",description:"Whether the component should auto-size to its content"},filterByValueAndLabel:{control:"boolean",description:"Whether to filter by both value and label when searching"},loading:{control:"boolean",description:"Whether to show a loading indicator inside the dropdown"}}},A=[{label:"Apple",value:"550e8400-e29b-41d4-a716-446655440001"},{label:"Banana",value:"550e8400-e29b-41d4-a716-446655440002"},{label:"Cherry",value:"cherry-fruit"},{label:"Date",value:"550e8400-e29b-41d4-a716-446655440003"},{label:"Elderberry",value:"elderberry-premium"},{label:"Fig",value:"550e8400-e29b-41d4-a716-446655440004"},{label:"Grape",value:"grape-variety"},{label:"Honeydew",value:"550e8400-e29b-41d4-a716-446655440005"}],Oo=[{label:"Users",value:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",icon:go},{label:"Favorites",value:"favorites-collection",icon:wt},{label:"Liked",value:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",icon:Yo},{label:"Apple",value:"apple-item"},{label:"Banana",value:"6ba7b812-9dad-11d1-80b4-00c04fd430c8"}],Nn=[{heading:"Fruits",options:[{label:"Apple",value:"a1b2c3d4-e5f6-4789-a012-123456789abc"},{label:"Banana",value:"banana-tropical"},{label:"Cherry",value:"b2c3d4e5-f6a7-4890-b123-234567890bcd"}]},{heading:"Vegetables",options:[{label:"Carrot",value:"carrot-orange"},{label:"Broccoli",value:"c3d4e5f6-a7b8-4901-c234-345678901cde"},{label:"Spinach",value:"spinach-leafy"}]},{heading:"Grains",options:[{label:"Rice",value:"d4e5f6a7-b8c9-4012-d345-456789012def"},{label:"Wheat",value:"wheat-grain"},{label:"Oats",value:"e5f6a7b8-c9d0-4123-e456-567890123efa"}]}],Rn=[{label:"Available Option",value:"f6a7b8c9-d0e1-4234-f567-678901234fab"},{label:"Disabled Option",value:"disabled-item",disabled:!0},{label:"Another Available",value:"a7b8c9d0-e1f2-4345-a678-789012345abc"},{label:"Also Disabled",value:"also-disabled-slug",disabled:!0}],ke={args:{options:A,placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},Ae={args:{options:A,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},_t=[{label:"タグアルファ",value:"project-alpha"},{label:"タグベータ",value:"project-beta"},{label:"タグガンマ",value:"project-gamma"},{label:"タグデルタ",value:"project-delta"},{label:"タグイプシロン",value:"project-epsilon"}],Gt=[29,27,21,33,32],Le={args:{options:_t,placeholder:"選択してください",renderOption:({option:e,location:o,onRemove:a})=>{const r=_t.findIndex(d=>d.value===e.value),l=Gt[r%Gt.length];return o==="badge"?t.jsx(ot,{colorCode:l,onRemove:a,children:e.label}):t.jsx("div",{className:"gap-2 flex items-center",children:t.jsx(ot,{colorCode:l,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction."},source:{code:`import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

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
/>`}}}},Ht=[{label:"成功",value:"status-success",statusLevel:"success"},{label:"進行中",value:"status-inprogress",statusLevel:"inProgress"},{label:"準備中",value:"status-queue",statusLevel:"queue"},{label:"エラー",value:"status-alert",statusLevel:"alert"},{label:"注意",value:"status-warning",statusLevel:"warning"},{label:"開始前",value:"status-neutral",statusLevel:"neutral"}],De={args:{options:Ht,placeholder:"選択してください",renderOption:({option:e,location:o,onRemove:a})=>{const r=Ht.find(d=>d.value===e.value),l=r==null?void 0:r.statusLevel;return o==="badge"?t.jsx($t,{level:l,onRemove:a,children:e.label}):t.jsx("div",{className:"gap-2 flex items-center",children:t.jsx($t,{level:l,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction."},source:{code:`import { MultiSelect, Status } from '@chemican/components';

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
/>`}}}},We={args:{options:Oo,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},qe={args:{options:Nn,placeholder:"Select food items...",onValueChange:e=>console.log("Selected values:",e)}},Ee={args:{options:Rn,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},$e={args:{options:A,maxCount:2,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003"],placeholder:"Max 2 visible...",onValueChange:e=>console.log("Selected values:",e)}},Be={args:{options:A,searchable:!1,placeholder:"No search functionality...",onValueChange:e=>console.log("Selected values:",e)}},Pe={args:{options:A,hideSelectAll:!0,placeholder:"No select all option...",onValueChange:e=>console.log("Selected values:",e)}},ze={args:{options:A,closeOnSelect:!0,placeholder:"Closes after selection...",onValueChange:e=>console.log("Selected values:",e)}},Fe={args:{options:A,disabled:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Disabled state...",onValueChange:e=>console.log("Selected values:",e)}},Ue={args:{options:[],placeholder:"No options...",onValueChange:e=>console.log("Selected values:",e)}},_e={args:{options:[],noOptionsIndicator:t.jsxs("div",{className:"py-6 flex flex-col items-center text-center",children:[t.jsx(wt,{className:"h-12 w-12 text-body-secondary mb-2"}),t.jsx("p",{className:"text-body-secondary",children:"No options available"})]}),placeholder:"Custom empty state...",onValueChange:e=>console.log("Selected values:",e)}},Ge={args:{options:A,filterByValueAndLabel:!0,placeholder:"Search by label or value...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'}}}},He={args:{options:Oo,placeholder:"Custom render...",renderOption:({option:e,location:o,isSelected:a,onRemove:r})=>{const l=e.icon;return o==="badge"?t.jsxs("div",{className:`gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border`,children:[l&&t.jsx(l,{className:"h-3 w-3"}),t.jsx("span",{className:"text-sm font-medium",children:e.label}),r&&t.jsx("button",{onClick:d=>{d.stopPropagation(),r()},className:"ml-1 hover:bg-interactive-alert-hover rounded p-0.5",children:t.jsx(Xo,{className:"h-3 w-3 text-interactive-alert-default"})})]}):t.jsxs("div",{className:"gap-2 flex items-center",children:[l&&t.jsx(l,{className:`h-4 w-4
              ${a?"text-interactive-primary-default":"text-body-secondary"}`}),t.jsx("span",{className:a?"font-bold text-interactive-primary-default":"",children:e.label}),a&&t.jsx("span",{className:"text-xs text-body-success ml-auto",children:"✓ Selected"})]})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button."}}}},Tn=()=>{const[e,o]=g.useState([]);return t.jsxs("div",{className:"gap-4 flex flex-col",children:[t.jsx(Y,{options:A,placeholder:"Select fruits and click Apply...",onValueChange:a=>console.log("Values changed (not applied yet):",a),onApplySelection:a=>{console.log("Values applied:",a),o(a)}}),t.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[t.jsx("p",{className:"text-sm font-medium text-body-primary mb-2",children:"Applied Values:"}),e.length>0?t.jsx("ul",{className:"text-sm text-body-secondary list-inside list-disc",children:e.map(a=>{const r=A.find(l=>l.value===a);return t.jsx("li",{children:(r==null?void 0:r.label)||a},a)})}):t.jsx("p",{className:"text-sm text-body-secondary italic",children:"No values applied yet"})]})]})},Ke={render:()=>t.jsx(Tn,{}),parameters:{docs:{description:{story:'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.'},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},Ye={args:{options:A,customTrigger:t.jsx("button",{className:`px-4 py-2 rounded-md bg-interactive-primary-default
          text-interactive-inverse hover:bg-interactive-primary-hover
          focus:ring-interactive-focused focus:ring-4 focus:outline-none`,children:t.jsxs("div",{className:"gap-2 flex items-center",children:[t.jsx(wt,{className:"h-5 w-5"}),t.jsx("span",{className:"font-medium",children:"Custom Trigger Button"})]})}),onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},Xe={args:{options:A,placeholder:"Select fruits (badges hidden)...",hideSelection:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates the hideSelection prop which hides the selected option badges below the trigger button. This is useful when you want to show selections only in the dropdown or when you need a more compact layout."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits (badges hidden)..."
  hideSelection={true}
  defaultValue={['apple', 'banana', 'cherry']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},On=()=>{const[e,o]=g.useState(["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"]),a=e.map(r=>{var l;return(l=A.find(d=>d.value===r))==null?void 0:l.label}).filter(Boolean);return t.jsxs("div",{className:"gap-4 flex flex-col",children:[t.jsx(Y,{options:A,hideSelection:!0,customTrigger:t.jsx("button",{className:`px-4 py-3 rounded-md bg-surface-primary
              border-interactive-default hover:bg-surface-secondary
              focus:ring-interactive-focused border focus:ring-4
              focus:outline-none`,children:t.jsxs("div",{className:"gap-4 flex min-w-[300px] items-center justify-between",children:[t.jsxs("div",{className:"gap-2 flex items-center",children:[t.jsx(go,{className:"h-5 w-5 text-body-secondary"}),t.jsx("span",{className:"font-medium text-body-primary",children:e.length>0?`${e.length} selected`:"Select options"})]}),t.jsx(vo,{className:"h-4 w-4 text-body-secondary"})]})}),onValueChange:r=>o(r)}),t.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[t.jsxs("p",{className:"text-sm font-medium text-body-primary mb-2",children:["Selected Items (",e.length,"):"]}),a.length>0?t.jsx("div",{className:"gap-2 flex flex-wrap",children:a.map((r,l)=>t.jsx("span",{className:`px-2 py-1 rounded-md bg-surface-primary text-sm
                  text-body-primary border-divider-default border`,children:r},l))}):t.jsx("p",{className:"text-sm text-body-secondary italic",children:"No items selected"})]})]})},Je={render:()=>t.jsx(On,{}),parameters:{docs:{description:{story:"This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges."},source:{code:`import { MultiSelect } from '@chemican/components';
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
</>`}}}},Qe={args:{options:A,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates the inline selection display mode. When selectionDisplayMode is set to "inline", selected values are displayed as comma-separated text within the trigger button instead of as badge elements below it. This provides a more compact layout that is suitable for space-constrained interfaces.'},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},Vn=()=>t.jsxs("div",{className:"gap-6 flex flex-col",children:[t.jsxs("div",{className:"gap-2 flex flex-col",children:[t.jsx("h3",{className:"font-semibold text-body-primary",children:"Default Mode (Badges Below)"}),t.jsx(Y,{options:A,placeholder:"Select fruits...",selectionDisplayMode:"default",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]}),t.jsxs("div",{className:"gap-2 flex flex-col",children:[t.jsx("h3",{className:"font-semibold text-body-primary",children:"Inline Mode (Inside Trigger)"}),t.jsx(Y,{options:A,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]})]}),Ze={render:()=>t.jsx(Vn,{}),parameters:{docs:{description:{story:"This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area."},source:{code:`import { MultiSelect } from '@chemican/components';

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
/>`}}}},In=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Nectarine",value:"nectarine"},{label:"Orange",value:"orange"},{label:"Papaya",value:"papaya"},{label:"Quince",value:"quince"},{label:"Raspberry",value:"raspberry"},{label:"Strawberry",value:"strawberry"},{label:"Tangerine",value:"tangerine"},{label:"Watermelon",value:"watermelon"},{label:"Yuzu",value:"yuzu"}],et={args:{options:In,placeholder:"Select fruits...",maxDisplayedOptions:5,moreOptionsLabel:e=>`Search to see ${e} more...`},parameters:{docs:{description:{story:"When `maxDisplayedOptions` is set, only the first N options are shown by default. A hint indicates how many more are available. Selected items always remain visible. Typing in the search input reveals all matching options."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  maxDisplayedOptions={5}
/>`}}}},nt=Array.from({length:60},(e,o)=>({label:`SDS Document ${o+1}`,value:`sds-${o+1}`})),jn=()=>{const[e,o]=g.useState(nt.slice(0,10)),[a,r]=g.useState(!1),l=g.useRef(void 0),d=v=>{r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const m=nt.filter(w=>w.label.toLowerCase().includes(v.toLowerCase()));o(m.slice(0,10)),r(!1)},800)};return t.jsx(Y,{options:e,loading:a,onSearchValueChange:d,hideSelectAll:!0,placeholder:"Select SDS...",searchPlaceholder:"サーバー検索...",emptyIndicator:"該当する項目がありません"})},tt={render:()=>t.jsx(jn,{}),parameters:{docs:{description:{story:"Demonstrates server-side search. `onSearchValueChange` fires as the user types so the parent can fetch matching options, and `loading` shows a spinner inside the dropdown while the request is in flight. When `onSearchValueChange` is provided the built-in client-side filtering is disabled, so the parent fully controls `options`."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},Mn=()=>{const[e,o]=g.useState(nt),[a,r]=g.useState(!1),l=g.useRef(void 0),d=v=>{r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const m=nt.filter(w=>w.label.toLowerCase().includes(v.toLowerCase()));o(m),r(!1)},800)};return t.jsx(Y,{options:e,loading:a,onSearchValueChange:d,maxDisplayedOptions:5,moreOptionsLabel:v=>`検索して他${v}件を表示`,hideSelectAll:!0,placeholder:"Select SDS...",searchPlaceholder:"サーバー検索...",emptyIndicator:"該当する項目がありません"})},at={render:()=>t.jsx(Mn,{}),parameters:{docs:{description:{story:'Combines `maxDisplayedOptions` with server-side search. Before searching, only the first N server-returned options are shown with a "type to see more" hint. As soon as the user types, `onSearchValueChange` fetches matching options (with `loading` shown meanwhile) and the truncation is lifted so every returned match is visible.'},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}};var Kt,Yt,Xt;ke.parameters={...ke.parameters,docs:{...(Kt=ke.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Xt=(Yt=ke.parameters)==null?void 0:Yt.docs)==null?void 0:Xt.source}}};var Jt,Qt,Zt;Ae.parameters={...Ae.parameters,docs:{...(Jt=Ae.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Zt=(Qt=Ae.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;Le.parameters={...Le.parameters,docs:{...(ea=Le.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=Le.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var oa,na,sa;De.parameters={...De.parameters,docs:{...(oa=De.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(na=De.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var la,ra,ia;We.parameters={...We.parameters,docs:{...(la=We.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ia=(ra=We.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ca,da,ua;qe.parameters={...qe.parameters,docs:{...(ca=qe.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ua=(da=qe.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,ma,fa;Ee.parameters={...Ee.parameters,docs:{...(pa=Ee.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(fa=(ma=Ee.parameters)==null?void 0:ma.docs)==null?void 0:fa.source}}};var ha,va,ga;$e.parameters={...$e.parameters,docs:{...(ha=$e.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003'],
    placeholder: 'Max 2 visible...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ga=(va=$e.parameters)==null?void 0:va.docs)==null?void 0:ga.source}}};var ba,ya,xa;Be.parameters={...Be.parameters,docs:{...(ba=Be.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(xa=(ya=Be.parameters)==null?void 0:ya.docs)==null?void 0:xa.source}}};var Sa,wa,Ca;Pe.parameters={...Pe.parameters,docs:{...(Sa=Pe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ca=(wa=Pe.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source}}};var Na,Ra,Ta;ze.parameters={...ze.parameters,docs:{...(Na=ze.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ta=(Ra=ze.parameters)==null?void 0:Ra.docs)==null?void 0:Ta.source}}};var Oa,Va,Ia;Fe.parameters={...Fe.parameters,docs:{...(Oa=Fe.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Disabled state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ia=(Va=Fe.parameters)==null?void 0:Va.docs)==null?void 0:Ia.source}}};var ja,Ma,ka;Ue.parameters={...Ue.parameters,docs:{...(ja=Ue.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  args: {
    options: [],
    placeholder: 'No options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ka=(Ma=Ue.parameters)==null?void 0:Ma.docs)==null?void 0:ka.source}}};var Aa,La,Da;_e.parameters={..._e.parameters,docs:{...(Aa=_e.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  args: {
    options: [],
    noOptionsIndicator: <div className="py-6 flex flex-col items-center text-center">
        <IconStar className="h-12 w-12 text-body-secondary mb-2" />
        <p className="text-body-secondary">No options available</p>
      </div>,
    placeholder: 'Custom empty state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Da=(La=_e.parameters)==null?void 0:La.docs)==null?void 0:Da.source}}};var Wa,qa,Ea;Ge.parameters={...Ge.parameters,docs:{...(Wa=Ge.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ea=(qa=Ge.parameters)==null?void 0:qa.docs)==null?void 0:Ea.source}}};var $a,Ba,Pa;He.parameters={...He.parameters,docs:{...($a=He.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(Pa=(Ba=He.parameters)==null?void 0:Ba.docs)==null?void 0:Pa.source}}};var za,Fa,Ua;Ke.parameters={...Ke.parameters,docs:{...(za=Ke.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(Ua=(Fa=Ke.parameters)==null?void 0:Fa.docs)==null?void 0:Ua.source}}};var _a,Ga,Ha;Ye.parameters={...Ye.parameters,docs:{...(_a=Ye.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Ha=(Ga=Ye.parameters)==null?void 0:Ga.docs)==null?void 0:Ha.source}}};var Ka,Ya,Xa;Xe.parameters={...Xe.parameters,docs:{...(Ka=Xe.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Xa=(Ya=Xe.parameters)==null?void 0:Ya.docs)==null?void 0:Xa.source}}};var Ja,Qa,Za;Je.parameters={...Je.parameters,docs:{...(Ja=Je.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
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
}`,...(Za=(Qa=Je.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var eo,to,ao;Qe.parameters={...Qe.parameters,docs:{...(eo=Qe.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(ao=(to=Qe.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var oo,no,so;Ze.parameters={...Ze.parameters,docs:{...(oo=Ze.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(so=(no=Ze.parameters)==null?void 0:no.docs)==null?void 0:so.source}}};var lo,ro,io;et.parameters={...et.parameters,docs:{...(lo=et.parameters)==null?void 0:lo.docs,source:{originalSource:`{
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
}`,...(io=(ro=et.parameters)==null?void 0:ro.docs)==null?void 0:io.source}}};var co,uo,po;tt.parameters={...tt.parameters,docs:{...(co=tt.parameters)==null?void 0:co.docs,source:{originalSource:`{
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
}`,...(po=(uo=tt.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,fo,ho;at.parameters={...at.parameters,docs:{...(mo=at.parameters)==null?void 0:mo.docs,source:{originalSource:`{
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
}`,...(ho=(fo=at.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};const as=["Default","WithDefaultValues","WithTagsAsItems","WithStatusAsItems","WithIcons","Grouped","WithDisabledOptions","MaxCountLimited","NoSearch","NoSelectAll","CloseOnSelect","Disabled","NoOptions","CustomEmptyState","FilterByValueAndLabel","CustomRenderOption","WithOnApplySelection","WithCustomTrigger","WithHideSelection","CustomTriggerWithHideSelection","InlineSelectionDisplay","InlineSelectionComparison","MaxDisplayedOptions","WithServerSideSearch","WithServerSideSearchAndMaxDisplayed"];export{ze as CloseOnSelect,_e as CustomEmptyState,He as CustomRenderOption,Je as CustomTriggerWithHideSelection,ke as Default,Fe as Disabled,Ge as FilterByValueAndLabel,qe as Grouped,Ze as InlineSelectionComparison,Qe as InlineSelectionDisplay,$e as MaxCountLimited,et as MaxDisplayedOptions,Ue as NoOptions,Be as NoSearch,Pe as NoSelectAll,Ye as WithCustomTrigger,Ae as WithDefaultValues,Ee as WithDisabledOptions,Xe as WithHideSelection,We as WithIcons,Ke as WithOnApplySelection,tt as WithServerSideSearch,at as WithServerSideSearchAndMaxDisplayed,De as WithStatusAsItems,Le as WithTagsAsItems,as as __namedExportsOrder,ts as default};
