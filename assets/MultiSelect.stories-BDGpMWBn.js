import{r as i,a as ue,d as Q,x as Re,e as g,j as t,c as W,m as ko}from"./iframe-BPsNP9xN.js";import{S as Wt}from"./StatusIndicator-C8wnCW3T.js";import{T as at}from"./Tag-4IqDaSeM.js";import{B as qt}from"./Button-BNLDX4t5.js";import{P as Ao}from"./ProgressIndicator-f-T9ZyeE.js";import{P as Lo,c as Do,b as Wo}from"./Popover-4bgrKXo0.js";import{R as qo,P as Eo,O as $o,C as Bo}from"./index-hoefCsjT.js";import{I as Po}from"./IconSearch-DMfKs-tB.js";import{a as mt}from"./Checkbox-HBCJGUL7.js";import{I as co}from"./IconChevronDown-BQJ-C-lr.js";import{c as zo}from"./createReactComponent-BIrrGxxZ.js";import{I as yt,a as Fo}from"./IconStar-anlUkEEA.js";import{I as Uo}from"./IconX-DiysKsTr.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./index-DLKKB0Sm.js";import"./index-DJfrvKLg.js";import"./IconMinus-pr4aHCsf.js";import"./IconCheck-C8-ee28R.js";import"./index-XMYGq-NP.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]],uo=zo("outline","users","Users",_o);var Et=1,Go=.9,Ho=.8,Ko=.17,ft=.1,ht=.999,Yo=.9999,Xo=.99,Jo=/[\\\/_+.#"@\[\(\{&]/,Qo=/[\\\/_+.#"@\[\(\{&]/g,Zo=/[\s-]/,po=/[\s-]/g;function gt(e,o,a,r,l,u,h){if(u===o.length)return l===e.length?Et:Xo;var m=`${l},${u}`;if(h[m]!==void 0)return h[m];for(var w=r.charAt(u),f=a.indexOf(w,l),C=0,T,q,A,z;f>=0;)T=gt(e,o,a,r,f+1,u+1,h),T>C&&(f===l?T*=Et:Jo.test(e.charAt(f-1))?(T*=Ho,A=e.slice(l,f-1).match(Qo),A&&l>0&&(T*=Math.pow(ht,A.length))):Zo.test(e.charAt(f-1))?(T*=Go,z=e.slice(l,f-1).match(po),z&&l>0&&(T*=Math.pow(ht,z.length))):(T*=Ko,l>0&&(T*=Math.pow(ht,f-l))),e.charAt(f)!==o.charAt(u)&&(T*=Yo)),(T<ft&&a.charAt(f-1)===r.charAt(u+1)||r.charAt(u+1)===r.charAt(u)&&a.charAt(f-1)!==r.charAt(u))&&(q=gt(e,o,a,r,f+1,u+2,h),q*ft>T&&(T=q*ft)),T>C&&(C=T),f=a.indexOf(w,f+1);return h[m]=C,C}function $t(e){return e.toLowerCase().replace(po," ")}function es(e,o,a){return e=a&&a.length>0?`${e+" "+a.join(" ")}`:e,gt(e,o,$t(e),$t(o),0,0,{})}var Ce='[cmdk-group=""]',vt='[cmdk-group-items=""]',ts='[cmdk-group-heading=""]',mo='[cmdk-item=""]',Bt=`${mo}:not([aria-disabled="true"])`,bt="cmdk-item-select",ce="data-value",as=(e,o,a)=>es(e,o,a),fo=i.createContext(void 0),Ve=()=>i.useContext(fo),ho=i.createContext(void 0),xt=()=>i.useContext(ho),vo=i.createContext(void 0),go=i.forwardRef((e,o)=>{let a=de(()=>{var s,v;return{search:"",value:(v=(s=e.value)!=null?s:e.defaultValue)!=null?v:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),r=de(()=>new Set),l=de(()=>new Map),u=de(()=>new Map),h=de(()=>new Set),m=bo(e),{label:w,children:f,value:C,onValueChange:T,filter:q,shouldFilter:A,loop:z,disablePointerSelection:pe=!1,vimBindings:G=!0,...ne}=e,me=ue(),Oe=ue(),fe=ue(),B=i.useRef(null),R=ms();se(()=>{if(C!==void 0){let s=C.trim();a.current.value=s,L.emit()}},[C]),se(()=>{R(6,je)},[]);let L=i.useMemo(()=>({subscribe:s=>(h.current.add(s),()=>h.current.delete(s)),snapshot:()=>a.current,setState:(s,v,y)=>{var c,x,N,D;if(!Object.is(a.current[s],v)){if(a.current[s]=v,s==="search")le(),ve(),R(1,Z);else if(s==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let j=document.getElementById(fe);j?j.focus():(c=document.getElementById(me))==null||c.focus()}if(R(7,()=>{var j;a.current.selectedItemId=(j=I())==null?void 0:j.id,L.emit()}),y||R(5,je),((x=m.current)==null?void 0:x.value)!==void 0){let j=v??"";(D=(N=m.current).onValueChange)==null||D.call(N,j);return}}L.emit()}},emit:()=>{h.current.forEach(s=>s())}}),[]),he=i.useMemo(()=>({value:(s,v,y)=>{var c;v!==((c=u.current.get(s))==null?void 0:c.value)&&(u.current.set(s,{value:v,keywords:y}),a.current.filtered.items.set(s,Ie(v,y)),R(2,()=>{ve(),L.emit()}))},item:(s,v)=>(r.current.add(s),v&&(l.current.has(v)?l.current.get(v).add(s):l.current.set(v,new Set([s]))),R(3,()=>{le(),ve(),a.current.value||Z(),L.emit()}),()=>{u.current.delete(s),r.current.delete(s),a.current.filtered.items.delete(s);let y=I();R(4,()=>{le(),(y==null?void 0:y.getAttribute("id"))===s&&Z(),L.emit()})}),group:s=>(l.current.has(s)||l.current.set(s,new Set),()=>{u.current.delete(s),l.current.delete(s)}),filter:()=>m.current.shouldFilter,label:w||e["aria-label"],getDisablePointerSelection:()=>m.current.disablePointerSelection,listId:me,inputId:fe,labelId:Oe,listInnerRef:B}),[]);function Ie(s,v){var y,c;let x=(c=(y=m.current)==null?void 0:y.filter)!=null?c:as;return s?x(s,a.current.search,v):0}function ve(){if(!a.current.search||m.current.shouldFilter===!1)return;let s=a.current.filtered.items,v=[];a.current.filtered.groups.forEach(c=>{let x=l.current.get(c),N=0;x.forEach(D=>{let j=s.get(D);N=Math.max(j,N)}),v.push([c,N])});let y=B.current;X().sort((c,x)=>{var N,D;let j=c.getAttribute("id"),ie=x.getAttribute("id");return((N=s.get(ie))!=null?N:0)-((D=s.get(j))!=null?D:0)}).forEach(c=>{let x=c.closest(vt);x?x.appendChild(c.parentElement===x?c:c.closest(`${vt} > *`)):y.appendChild(c.parentElement===y?c:c.closest(`${vt} > *`))}),v.sort((c,x)=>x[1]-c[1]).forEach(c=>{var x;let N=(x=B.current)==null?void 0:x.querySelector(`${Ce}[${ce}="${encodeURIComponent(c[0])}"]`);N==null||N.parentElement.appendChild(N)})}function Z(){let s=X().find(y=>y.getAttribute("aria-disabled")!=="true"),v=s==null?void 0:s.getAttribute(ce);L.setState("value",v||void 0)}function le(){var s,v,y,c;if(!a.current.search||m.current.shouldFilter===!1){a.current.filtered.count=r.current.size;return}a.current.filtered.groups=new Set;let x=0;for(let N of r.current){let D=(v=(s=u.current.get(N))==null?void 0:s.value)!=null?v:"",j=(c=(y=u.current.get(N))==null?void 0:y.keywords)!=null?c:[],ie=Ie(D,j);a.current.filtered.items.set(N,ie),ie>0&&x++}for(let[N,D]of l.current)for(let j of D)if(a.current.filtered.items.get(j)>0){a.current.filtered.groups.add(N);break}a.current.filtered.count=x}function je(){var s,v,y;let c=I();c&&(((s=c.parentElement)==null?void 0:s.firstChild)===c&&((y=(v=c.closest(Ce))==null?void 0:v.querySelector(ts))==null||y.scrollIntoView({block:"nearest"})),c.scrollIntoView({block:"nearest"}))}function I(){var s;return(s=B.current)==null?void 0:s.querySelector(`${mo}[aria-selected="true"]`)}function X(){var s;return Array.from(((s=B.current)==null?void 0:s.querySelectorAll(Bt))||[])}function ee(s){let v=X()[s];v&&L.setState("value",v.getAttribute(ce))}function ge(s){var v;let y=I(),c=X(),x=c.findIndex(D=>D===y),N=c[x+s];(v=m.current)!=null&&v.loop&&(N=x+s<0?c[c.length-1]:x+s===c.length?c[0]:c[x+s]),N&&L.setState("value",N.getAttribute(ce))}function be(s){let v=I(),y=v==null?void 0:v.closest(Ce),c;for(;y&&!c;)y=s>0?us(y,Ce):ps(y,Ce),c=y==null?void 0:y.querySelector(Bt);c?L.setState("value",c.getAttribute(ce)):ge(s)}let re=()=>ee(X().length-1),ye=s=>{s.preventDefault(),s.metaKey?re():s.altKey?be(1):ge(1)},xe=s=>{s.preventDefault(),s.metaKey?ee(0):s.altKey?be(-1):ge(-1)};return i.createElement(Q.div,{ref:o,tabIndex:-1,...ne,"cmdk-root":"",onKeyDown:s=>{var v;(v=ne.onKeyDown)==null||v.call(ne,s);let y=s.nativeEvent.isComposing||s.keyCode===229;if(!(s.defaultPrevented||y))switch(s.key){case"n":case"j":{G&&s.ctrlKey&&ye(s);break}case"ArrowDown":{ye(s);break}case"p":case"k":{G&&s.ctrlKey&&xe(s);break}case"ArrowUp":{xe(s);break}case"Home":{s.preventDefault(),ee(0);break}case"End":{s.preventDefault(),re();break}case"Enter":{s.preventDefault();let c=I();if(c){let x=new Event(bt);c.dispatchEvent(x)}}}}},i.createElement("label",{"cmdk-label":"",htmlFor:he.inputId,id:he.labelId,style:hs},w),st(e,s=>i.createElement(ho.Provider,{value:L},i.createElement(fo.Provider,{value:he},s))))}),os=i.forwardRef((e,o)=>{var a,r;let l=ue(),u=i.useRef(null),h=i.useContext(vo),m=Ve(),w=bo(e),f=(r=(a=w.current)==null?void 0:a.forceMount)!=null?r:h==null?void 0:h.forceMount;se(()=>{if(!f)return m.item(l,h==null?void 0:h.id)},[f]);let C=yo(l,u,[e.value,e.children,u],e.keywords),T=xt(),q=J(R=>R.value&&R.value===C.current),A=J(R=>f||m.filter()===!1?!0:R.search?R.filtered.items.get(l)>0:!0);i.useEffect(()=>{let R=u.current;if(!(!R||e.disabled))return R.addEventListener(bt,z),()=>R.removeEventListener(bt,z)},[A,e.onSelect,e.disabled]);function z(){var R,L;pe(),(L=(R=w.current).onSelect)==null||L.call(R,C.current)}function pe(){T.setState("value",C.current,!0)}if(!A)return null;let{disabled:G,value:ne,onSelect:me,forceMount:Oe,keywords:fe,...B}=e;return i.createElement(Q.div,{ref:Re(u,o),...B,id:l,"cmdk-item":"",role:"option","aria-disabled":!!G,"aria-selected":!!q,"data-disabled":!!G,"data-selected":!!q,onPointerMove:G||m.getDisablePointerSelection()?void 0:pe,onClick:G?void 0:z},e.children)}),ss=i.forwardRef((e,o)=>{let{heading:a,children:r,forceMount:l,...u}=e,h=ue(),m=i.useRef(null),w=i.useRef(null),f=ue(),C=Ve(),T=J(A=>l||C.filter()===!1?!0:A.search?A.filtered.groups.has(h):!0);se(()=>C.group(h),[]),yo(h,m,[e.value,e.heading,w]);let q=i.useMemo(()=>({id:h,forceMount:l}),[l]);return i.createElement(Q.div,{ref:Re(m,o),...u,"cmdk-group":"",role:"presentation",hidden:T?void 0:!0},a&&i.createElement("div",{ref:w,"cmdk-group-heading":"","aria-hidden":!0,id:f},a),st(e,A=>i.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":a?f:void 0},i.createElement(vo.Provider,{value:q},A))))}),ns=i.forwardRef((e,o)=>{let{alwaysRender:a,...r}=e,l=i.useRef(null),u=J(h=>!h.search);return!a&&!u?null:i.createElement(Q.div,{ref:Re(l,o),...r,"cmdk-separator":"",role:"separator"})}),ls=i.forwardRef((e,o)=>{let{onValueChange:a,...r}=e,l=e.value!=null,u=xt(),h=J(f=>f.search),m=J(f=>f.selectedItemId),w=Ve();return i.useEffect(()=>{e.value!=null&&u.setState("search",e.value)},[e.value]),i.createElement(Q.input,{ref:o,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":w.listId,"aria-labelledby":w.labelId,"aria-activedescendant":m,id:w.inputId,type:"text",value:l?e.value:h,onChange:f=>{l||u.setState("search",f.target.value),a==null||a(f.target.value)}})}),rs=i.forwardRef((e,o)=>{let{children:a,label:r="Suggestions",...l}=e,u=i.useRef(null),h=i.useRef(null),m=J(f=>f.selectedItemId),w=Ve();return i.useEffect(()=>{if(h.current&&u.current){let f=h.current,C=u.current,T,q=new ResizeObserver(()=>{T=requestAnimationFrame(()=>{let A=f.offsetHeight;C.style.setProperty("--cmdk-list-height",A.toFixed(1)+"px")})});return q.observe(f),()=>{cancelAnimationFrame(T),q.unobserve(f)}}},[]),i.createElement(Q.div,{ref:Re(u,o),...l,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":m,"aria-label":r,id:w.listId},st(e,f=>i.createElement("div",{ref:Re(h,w.listInnerRef),"cmdk-list-sizer":""},f)))}),is=i.forwardRef((e,o)=>{let{open:a,onOpenChange:r,overlayClassName:l,contentClassName:u,container:h,...m}=e;return i.createElement(qo,{open:a,onOpenChange:r},i.createElement(Eo,{container:h},i.createElement($o,{"cmdk-overlay":"",className:l}),i.createElement(Bo,{"aria-label":e.label,"cmdk-dialog":"",className:u},i.createElement(go,{ref:o,...m}))))}),cs=i.forwardRef((e,o)=>J(a=>a.filtered.count===0)?i.createElement(Q.div,{ref:o,...e,"cmdk-empty":"",role:"presentation"}):null),ds=i.forwardRef((e,o)=>{let{progress:a,children:r,label:l="Loading...",...u}=e;return i.createElement(Q.div,{ref:o,...u,"cmdk-loading":"",role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},st(e,h=>i.createElement("div",{"aria-hidden":!0},h)))}),E=Object.assign(go,{List:rs,Item:os,Input:ls,Group:ss,Separator:ns,Dialog:is,Empty:cs,Loading:ds});function us(e,o){let a=e.nextElementSibling;for(;a;){if(a.matches(o))return a;a=a.nextElementSibling}}function ps(e,o){let a=e.previousElementSibling;for(;a;){if(a.matches(o))return a;a=a.previousElementSibling}}function bo(e){let o=i.useRef(e);return se(()=>{o.current=e}),o}var se=typeof window>"u"?i.useEffect:i.useLayoutEffect;function de(e){let o=i.useRef();return o.current===void 0&&(o.current=e()),o}function J(e){let o=xt(),a=()=>e(o.snapshot());return i.useSyncExternalStore(o.subscribe,a,a)}function yo(e,o,a,r=[]){let l=i.useRef(),u=Ve();return se(()=>{var h;let m=(()=>{var f;for(let C of a){if(typeof C=="string")return C.trim();if(typeof C=="object"&&"current"in C)return C.current?(f=C.current.textContent)==null?void 0:f.trim():l.current}})(),w=r.map(f=>f.trim());u.value(e,m,w),(h=o.current)==null||h.setAttribute(ce,m),l.current=m}),l}var ms=()=>{let[e,o]=i.useState(),a=de(()=>new Map);return se(()=>{a.current.forEach(r=>r()),a.current=new Map},[e]),(r,l)=>{a.current.set(r,l),o({})}};function fs(e){let o=e.type;return typeof o=="function"?o(e.props):"render"in o?o.render(e.props):e}function st({asChild:e,children:o},a){return e&&i.isValidElement(o)?i.cloneElement(fs(o),{ref:o.ref},a(o.props.children)):a(o)}var hs={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const St=g.forwardRef(({className:e,...o},a)=>t.jsx(E,{ref:a,className:W(`bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,e),...o}));St.displayName=E.displayName;const wt=g.forwardRef(({className:e,...o},a)=>t.jsx("div",{className:"border-divider-default py-sm px-md flex items-center border-b","cmdk-input-wrapper":"",children:t.jsxs("div",{className:`border-interactive-default bg-surface-primary
        hover:border-interactive-hover
        has-[:disabled]:border-interactive-disabled
        has-[:disabled]:bg-surface-disabled
        has-[:focus]:ring-interactive-focused h-10 rounded px-sm relative flex
        w-full items-center border
        has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
        has-[:focus]:outline-0`,children:[t.jsx(Po,{className:"mr-xxs h-3.5 w-3.5 shrink-0"}),t.jsx(E.Input,{ref:a,className:W(`placeholder:text-body-placeholder h-11 rounded-md py-3 flex w-full
          bg-transparent outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,e),...o})]})}));wt.displayName=E.Input.displayName;const Ct=g.forwardRef(({className:e,...o},a)=>t.jsx(E.List,{ref:a,className:W("max-h-[300px] overflow-x-hidden overflow-y-auto",e),...o}));Ct.displayName=E.List.displayName;const Nt=g.forwardRef((e,o)=>t.jsx(E.Empty,{ref:o,className:"text-body-secondary py-6 text-center",...e}));Nt.displayName=E.Empty.displayName;const Ne=g.forwardRef(({className:e,...o},a)=>t.jsx(E.Group,{ref:a,className:W(`text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,e),...o}));Ne.displayName=E.Group.displayName;const xo=g.forwardRef(({className:e,...o},a)=>t.jsx(E.Separator,{ref:a,className:W("-mx-1 h-px bg-[var(--token-color-border-divider-default)]",e),...o}));xo.displayName=E.Separator.displayName;const Te=g.forwardRef(({className:e,...o},a)=>t.jsx(E.Item,{ref:a,className:W(`hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg min-h-10 py-1.5 relative flex
      cursor-default items-center wrap-anywhere outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,e),...o}));Te.displayName=E.Item.displayName;St.__docgenInfo={description:"",methods:[]};wt.__docgenInfo={description:"",methods:[]};Ct.__docgenInfo={description:"",methods:[]};Nt.__docgenInfo={description:"",methods:[]};Ne.__docgenInfo={description:"",methods:[]};Te.__docgenInfo={description:"",methods:[]};xo.__docgenInfo={description:"",methods:[]};const Pt=ko("ease-in-out transition-all duration-300",{variants:{variant:{default:`border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,secondary:`border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,destructive:`bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`}},defaultVariants:{variant:"default"}}),vs=({options:e,onValueChange:o=b=>b,onSearchValueChange:a,loading:r=!1,loadingLabel:l="読み込み中...",onApplySelection:u=b=>b,variant:h,defaultValue:m=[],placeholder:w="選択してください",placeholderAriaLabel:f="選択してください",triggerDescription:C="マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",noSelectionLabel:T="オプションが選択されていません",searchHelpText:q="入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",searchAriaLabel:A="利用可能なオプションを検索",optionsListAriaLabel:z="利用可能なオプション",selectAllLabel:pe="すべて選択",selectAllCountLabel:G="オプション",clearAllLabel:ne="すべてクリア",closeLabel:me="閉じる",moreSelectedLabel:Oe="その他",searchPlaceholder:fe="オプションを検索...",maxCount:B=10,modalPopover:R=!1,className:L,hideSelectAll:he=!1,searchable:Ie=!0,emptyIndicator:ve="結果が見つかりません。",autoSize:Z=!1,singleLine:le=!1,popoverClassName:je,disabled:I=!1,invalid:X=!1,responsive:ee,minWidth:ge,maxWidth:be,deduplicateOptions:re=!1,resetOnDefaultValueChange:ye=!0,closeOnSelect:xe=!1,filterByValueAndLabel:s=!1,renderOption:v,customTrigger:y,selectionDisplayMode:c="default",hideSelection:x=!1,maxDisplayedOptions:N,totalOptionsCount:D,moreOptionsLabel:j=b=>`検索テキストを入力して他${b}件を表示`,...ie},wo)=>{const[b,H]=g.useState(m),[$,te]=g.useState(!1),[F,nt]=g.useState(""),[Co,Tt]=g.useState(""),[No,Rt]=g.useState(""),lt=g.useRef(b.length),Vt=g.useRef($),Ot=g.useRef(F),ae=g.useCallback((n,d="polite")=>{d==="assertive"?(Rt(n),setTimeout(()=>Rt(""),100)):(Tt(n),setTimeout(()=>Tt(""),100))},[]),Se=g.useId(),It=`${Se}-listbox`,jt=`${Se}-description`,Mt=`${Se}-count`,kt=g.useRef(m),rt=g.useCallback(n=>{const d=n[0];return!!(d&&typeof d=="object"&&"heading"in d)},[]),it=g.useCallback((n,d)=>{if(n.length!==d.length)return!1;const p=[...n].sort(),S=[...d].sort();return p.every((V,M)=>V===S[M])},[]),At=g.useCallback(()=>{H(m),te(!1),nt(""),o(m)},[m,o]),U=g.useRef(null);g.useImperativeHandle(wo,()=>({reset:At,getSelectedValues:()=>b,setSelectedValues:n=>{H(n),o(n)},clear:()=>{H([]),o([])},focus:()=>{if(U.current){U.current.focus();const n=U.current.style.outline,d=U.current.style.outlineOffset;U.current.style.outline="2px solid hsl(var(--ring))",U.current.style.outlineOffset="2px",setTimeout(()=>{U.current&&(U.current.style.outline=n,U.current.style.outlineOffset=d)},1e3)}}}),[At,b,o]);const[_,ct]=g.useState("desktop");g.useEffect(()=>{if(typeof window>"u")return;const n=()=>{const d=window.innerWidth;d<640?ct("mobile"):d<1024?ct("tablet"):ct("desktop")};return n(),window.addEventListener("resize",n),()=>{typeof window<"u"&&window.removeEventListener("resize",n)}},[]);const oe=(()=>{if(!ee)return{maxCount:B,compactMode:!1};if(ee===!0){const p={mobile:{maxCount:2,compactMode:!0},tablet:{maxCount:4,compactMode:!1},desktop:{maxCount:6,compactMode:!1}}[_];return{maxCount:(p==null?void 0:p.maxCount)??B,compactMode:(p==null?void 0:p.compactMode)??!1}}const n=ee[_];return{maxCount:(n==null?void 0:n.maxCount)??B,compactMode:(n==null?void 0:n.compactMode)??!1}})(),P=g.useCallback(()=>{if(e.length===0)return[];let n;rt(e)?n=e.flatMap(V=>V.options):n=e;const d=new Set,p=[],S=[];return n.forEach(V=>{d.has(V.value)?(p.push(V.value),re||S.push(V)):(d.add(V.value),S.push(V))}),re?S:n},[e,re,rt]),we=g.useCallback(n=>P().find(p=>p.value===n),[P]),To=g.useCallback((n,d)=>{const[p,S]=n.split(":");if(!s)return S&&S.toLowerCase().includes(d.toLowerCase())?1:0;const V=d.toLowerCase();return S&&S.toLowerCase().includes(V)||p&&p.toLowerCase().includes(V)?1:0},[s]),Ro=n=>{if(n.key==="Enter")te(!0);else if(n.key==="Backspace"&&!n.currentTarget.value){const d=[...b];d.pop(),H(d),o(d)}},dt=n=>{if(I)return;const d=we(n);if(d!=null&&d.disabled)return;const p=b.includes(n)?b.filter(S=>S!==n):[...b,n];H(p),o(p),xe&&te(!1)},Lt=()=>{I||(H([]),u([]),o([]))},Vo=()=>{I||te(n=>!n)},Oo=()=>{if(I)return;const n=b.slice(0,oe.maxCount);H(n),o(n)},Io=()=>{if(I)return;const n=P().filter(d=>!d.disabled);if(b.length===n.length)Lt();else{const d=n.map(p=>p.value);H(d),o(d)}xe&&te(!1)},ut=v||(n=>{const{option:d,location:p,onRemove:S,disabled:V}=n;return p==="badge"?t.jsx(at,{className:W(Pt({variant:h}),oe.compactMode&&"text-xs px-1.5 py-0.5",_==="mobile"&&"max-w-[120px] truncate",le&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",V&&"cursor-not-allowed"),...!V&&{onRemove:S},children:d.label}):d.label}),jo=!!F.trim(),Me=N!==void 0&&(!jo||!!a);g.useEffect(()=>{if(!ye)return;const n=kt.current;it(n,m)||(it(b,m)||H(m),kt.current=[...m])},[m,b,it,ye]);const pt={minWidth:ge||(_==="mobile"?"0px":"200px"),maxWidth:be||"100%",popoverMaxWidth:be||"32rem",width:Z?"auto":"100%"},Dt=g.useMemo(()=>c==="default"||b.length===0?w:b.map(n=>{var d;return(d=we(n))==null?void 0:d.label}).filter(Boolean).join(", "),[b,we,w,c]);return g.useEffect(()=>{$||nt("")},[$]),g.useEffect(()=>{const n=b.length,d=P(),p=d.filter(S=>!S.disabled).length;if(n!==lt.current){const S=n-lt.current;if(S>0){const M=b.slice(-S).map(O=>{var K;return(K=d.find(Mo=>Mo.value===O))==null?void 0:K.label}).filter(Boolean);M.length===1?ae(`${M[0]} selected. ${n} of ${p} options selected.`):ae(`${M.length} options selected. ${n} of ${p} total selected.`)}else S<0&&ae(`Option removed. ${n} of ${p} options selected.`);lt.current=n}$!==Vt.current&&(ae($?`Dropdown opened. ${p} options available. Use arrow keys to navigate.`:"Dropdown closed."),Vt.current=$),F!==Ot.current&&F!==void 0&&(F&&$&&ae(`Searching for "${F}"`),Ot.current=F)},[b,$,F,ae,P]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"sr-only",children:[t.jsx("div",{"aria-live":"polite","aria-atomic":"true",role:"status",children:Co}),t.jsx("div",{"aria-live":"assertive","aria-atomic":"true",role:"alert",children:No})]}),t.jsxs(Lo,{open:$,onOpenChange:te,modal:R,children:[t.jsx("div",{id:jt,className:"sr-only",children:C}),t.jsx("div",{id:Mt,className:"sr-only","aria-live":"polite",children:b.length===0?T:`${b.length} option${b.length===1?"":"s"} selected: ${b.map(n=>{var d;return(d=we(n))==null?void 0:d.label}).filter(Boolean).join(", ")}`}),t.jsxs("div",{className:W(Z&&"w-auto",L),children:[t.jsx(Do,{asChild:!0,children:y||t.jsx("button",{ref:U,...ie,onClick:Vo,disabled:I,className:W(`border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,Z?"w-auto":"w-full",!X&&`hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,X&&`border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,oe.compactMode&&"min-h-8 text-sm",_==="mobile"&&"min-h-12"),style:{...pt,maxWidth:`min(${pt.maxWidth}, 100%)`},role:"combobox","aria-expanded":$,"aria-haspopup":"listbox","aria-controls":$?It:void 0,"aria-describedby":`${jt} ${Mt}`,"aria-label":`Multi-select: ${b.length} of ${P().length} options selected. ${f}`,children:t.jsxs("div",{className:"mx-auto flex w-full items-center justify-between",children:[t.jsx("span",{className:W("mx-sm",c==="inline"&&"truncate",I?"text-body-disabled":$||c==="inline"&&Dt!==w?"text-body-primary":"text-body-placeholder"),children:Dt}),t.jsx(co,{className:W("h-4 mx-xs cursor-pointer",I?"text-body-disabled":"text-body-primary")})]})})}),!(x||c==="inline")&&t.jsxs("div",{className:"gap-xxs mt-xxs flex flex-wrap",children:[b.slice(0,oe.maxCount).map(n=>{const d=we(n);return d?t.jsx(g.Fragment,{children:ut({option:d,location:"badge",onRemove:()=>dt(n),disabled:I})},n):null}).filter(Boolean),b.length>oe.maxCount&&t.jsxs(at,{className:W(`text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,Pt({variant:h}),oe.compactMode&&"text-xs px-1.5 py-0.5",le&&"flex-shrink-0 whitespace-nowrap","[&>svg]:pointer-events-auto",I&&"cursor-not-allowed"),...!I&&{onRemove:Oo},children:["+ ",b.length-oe.maxCount," ",Oe]})]})]}),t.jsx(Wo,{id:It,role:"listbox","aria-multiselectable":"true","aria-label":z,className:W("p-0 w-auto",_==="mobile"&&"w-[85vw] max-w-[280px]",_==="tablet"&&"max-w-md w-[70vw]",_==="desktop"&&"min-w-[300px]",je),style:{maxWidth:`min(${pt.popoverMaxWidth}, 85vw)`,maxHeight:_==="mobile"?"70vh":"60vh",touchAction:"manipulation"},align:"start",children:t.jsxs(St,{filter:To,shouldFilter:!a,children:[Ie&&t.jsxs("header",{children:[t.jsx("div",{id:`${Se}-search-help`,className:"sr-only",children:q}),t.jsx(wt,{placeholder:fe,onKeyDown:Ro,value:F,onValueChange:n=>{nt(n),a==null||a(n)},"aria-label":A,"aria-describedby":`${Se}-search-help`})]}),t.jsxs(Ct,{className:W("max-h-[calc(40vh-56px)] overflow-y-auto",_==="mobile"&&"max-h-[calc(50vh-56px)]"),style:{overscrollBehaviorY:"contain"},children:[r&&t.jsx("div",{role:"status",className:`px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,children:t.jsx(Ao.Circular,{size:"sm",children:l})}),!r&&t.jsx(Nt,{children:ve}),!r&&!he&&!F&&t.jsx(Ne,{children:t.jsxs(Te,{value:"select-all",onSelect:Io,role:"option","aria-selected":b.length===P().filter(n=>!n.disabled).length,"aria-label":`Select all ${P().length} options`,className:"cursor-pointer",children:[t.jsx(mt,{className:"mr-xs",checked:b.length===P().filter(n=>!n.disabled).length}),t.jsxs("span",{children:["(",pe,P().length>20?t.jsxs(t.Fragment,{children:[" - ",P().length," ",G]}):null,")"]})]},"all")}),!r&&(rt(e)?(()=>{let n=0;const d=e.reduce((M,O)=>M+O.options.length,0),p=e.map(M=>{const O=Me?M.options.filter(K=>n++<N||b.includes(K.value)):M.options;return{...M,options:O}}),S=p.reduce((M,O)=>M+O.options.length,0),V=(D??d)-S;return t.jsxs(t.Fragment,{children:[p.map(M=>M.options.length===0?null:t.jsx(Ne,{heading:M.heading,children:M.options.map(O=>{const K=b.includes(O.value);return t.jsxs(Te,{value:`${O.value}:${O.label}`,onSelect:()=>dt(O.value),role:"option","aria-selected":K,"aria-disabled":O.disabled??!1,"aria-label":`${O.label}${K?", selected":", not selected"}${O.disabled?", disabled":""}`,className:W("cursor-pointer",O.disabled&&"text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"),disabled:!!O.disabled,children:[t.jsx(mt,{className:"mr-xs",checked:K}),t.jsx("span",{className:"min-w-0 overflow-hidden",children:ut({option:O,location:"dropdown",isSelected:K})})]},O.value)})},M.heading)),Me&&V>0&&t.jsx("div",{className:"text-body-secondary px-lg py-sm text-sm italic",children:j(V)})]})})():t.jsx(Ne,{children:(()=>{const n=Me?e.filter((p,S)=>S<N||b.includes(p.value)):e,d=(D??e.length)-n.length;return t.jsxs(t.Fragment,{children:[n.map(p=>{const S=b.includes(p.value);return t.jsxs(Te,{value:`${p.value}:${p.label}`,onSelect:()=>dt(p.value),role:"option","aria-selected":S,"aria-disabled":p.disabled??!1,"aria-label":`${p.label}${S?", selected":", not selected"}${p.disabled?", disabled":""}`,className:W("cursor-pointer",p.disabled&&"text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"),disabled:!!p.disabled,children:[t.jsx(mt,{className:"mr-xs",checked:S}),t.jsx("span",{className:"min-w-0 overflow-hidden",children:ut({option:p,location:"dropdown",isSelected:S})})]},p.value)}),Me&&d>0&&t.jsx("div",{className:"text-body-secondary px-lg py-sm text-sm italic",children:j(d)})]})})()}))]}),t.jsx("footer",{className:`px-md py-sm bg-surface-primary bottom-0
                border-t-divider-default flex items-center justify-between
                border-t`,children:t.jsxs(t.Fragment,{children:[t.jsx(qt,{intent:"text",size:"xs",className:"min-w-auto",onClick:Lt,disabled:b.length===0,children:ne}),t.jsx(qt,{intent:"primary",size:"xs",className:"min-w-auto",onClick:()=>{u(b),te(!1)},children:me})]})})]})})]})]})},Y=g.forwardRef(vs);Y.displayName="MultiSelect";Y.__docgenInfo={description:"",methods:[{name:"getSelectedValues",docblock:null,modifiers:[],params:[],returns:null},{name:"setSelectedValues",docblock:null,modifiers:[],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"T"}],raw:"T[]"}}],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"union",raw:"MultiSelectOption<T>[] | MultiSelectGroup<T>[]",elements:[{name:"Array",elements:[{name:"MultiSelectOption",elements:[{name:"T"}],raw:"MultiSelectOption<T>"}],raw:"MultiSelectOption<T>[]"},{name:"Array",elements:[{name:"MultiSelectGroup",elements:[{name:"T"}],raw:"MultiSelectGroup<T>"}],raw:"MultiSelectGroup<T>[]"}]},description:`Array of options or grouped options to display in the dropdown.
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
Optional, called only when user confirms their selection.`,defaultValue:{value:"(value) => value",computed:!1}}},composes:["Omit","VariantProps"]};const Ks={title:"Components/MultiSelect",component:Y,parameters:{docs:{description:{component:"A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","inverted"],description:"Visual style variant of the component"},maxCount:{control:"number",description:'Maximum number of selected items to display before showing "+X more"'},searchable:{control:"boolean",description:"Whether to show search functionality"},hideSelectAll:{control:"boolean",description:'Whether to hide the "Select All" option'},disabled:{control:"boolean",description:"Whether the component is disabled"},closeOnSelect:{control:"boolean",description:"Whether to close the popover after selecting an option"},singleLine:{control:"boolean",description:"Whether to display selected items in a single line with scroll"},autoSize:{control:"boolean",description:"Whether the component should auto-size to its content"},filterByValueAndLabel:{control:"boolean",description:"Whether to filter by both value and label when searching"},loading:{control:"boolean",description:"Whether to show a loading indicator inside the dropdown"}}},k=[{label:"Apple",value:"550e8400-e29b-41d4-a716-446655440001"},{label:"Banana",value:"550e8400-e29b-41d4-a716-446655440002"},{label:"Cherry",value:"cherry-fruit"},{label:"Date",value:"550e8400-e29b-41d4-a716-446655440003"},{label:"Elderberry",value:"elderberry-premium"},{label:"Fig",value:"550e8400-e29b-41d4-a716-446655440004"},{label:"Grape",value:"grape-variety"},{label:"Honeydew",value:"550e8400-e29b-41d4-a716-446655440005"}],So=[{label:"Users",value:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",icon:uo},{label:"Favorites",value:"favorites-collection",icon:yt},{label:"Liked",value:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",icon:Fo},{label:"Apple",value:"apple-item"},{label:"Banana",value:"6ba7b812-9dad-11d1-80b4-00c04fd430c8"}],gs=[{heading:"Fruits",options:[{label:"Apple",value:"a1b2c3d4-e5f6-4789-a012-123456789abc"},{label:"Banana",value:"banana-tropical"},{label:"Cherry",value:"b2c3d4e5-f6a7-4890-b123-234567890bcd"}]},{heading:"Vegetables",options:[{label:"Carrot",value:"carrot-orange"},{label:"Broccoli",value:"c3d4e5f6-a7b8-4901-c234-345678901cde"},{label:"Spinach",value:"spinach-leafy"}]},{heading:"Grains",options:[{label:"Rice",value:"d4e5f6a7-b8c9-4012-d345-456789012def"},{label:"Wheat",value:"wheat-grain"},{label:"Oats",value:"e5f6a7b8-c9d0-4123-e456-567890123efa"}]}],bs=[{label:"Available Option",value:"f6a7b8c9-d0e1-4234-f567-678901234fab"},{label:"Disabled Option",value:"disabled-item",disabled:!0},{label:"Another Available",value:"a7b8c9d0-e1f2-4345-a678-789012345abc"},{label:"Also Disabled",value:"also-disabled-slug",disabled:!0}],ke={args:{options:k,placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},Ae={args:{options:k,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},zt=[{label:"タグアルファ",value:"project-alpha"},{label:"タグベータ",value:"project-beta"},{label:"タグガンマ",value:"project-gamma"},{label:"タグデルタ",value:"project-delta"},{label:"タグイプシロン",value:"project-epsilon"}],Ft=[29,27,21,33,32],Le={args:{options:zt,placeholder:"選択してください",renderOption:({option:e,location:o,onRemove:a})=>{const r=zt.findIndex(u=>u.value===e.value),l=Ft[r%Ft.length];return o==="badge"?t.jsx(at,{colorCode:l,onRemove:a,children:e.label}):t.jsx("div",{className:"gap-2 flex items-center",children:t.jsx(at,{colorCode:l,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction."},source:{code:`import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

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
/>`}}}},Ut=[{label:"成功",value:"status-success",statusLevel:"success"},{label:"進行中",value:"status-inprogress",statusLevel:"inProgress"},{label:"準備中",value:"status-queue",statusLevel:"queue"},{label:"エラー",value:"status-alert",statusLevel:"alert"},{label:"注意",value:"status-warning",statusLevel:"warning"},{label:"開始前",value:"status-neutral",statusLevel:"neutral"}],De={args:{options:Ut,placeholder:"選択してください",renderOption:({option:e,location:o,onRemove:a})=>{const r=Ut.find(u=>u.value===e.value),l=r==null?void 0:r.statusLevel;return o==="badge"?t.jsx(Wt,{level:l,onRemove:a,children:e.label}):t.jsx("div",{className:"gap-2 flex items-center",children:t.jsx(Wt,{level:l,size:"sm",children:e.label})})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction."},source:{code:`import { MultiSelect, Status } from '@chemican/components';

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
/>`}}}},We={args:{options:So,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},qe={args:{options:gs,placeholder:"Select food items...",onValueChange:e=>console.log("Selected values:",e)}},Ee={args:{options:bs,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},$e={args:{options:k,maxCount:2,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003"],placeholder:"Max 2 visible...",onValueChange:e=>console.log("Selected values:",e)}},Be={args:{options:k,searchable:!1,placeholder:"No search functionality...",onValueChange:e=>console.log("Selected values:",e)}},Pe={args:{options:k,hideSelectAll:!0,placeholder:"No select all option...",onValueChange:e=>console.log("Selected values:",e)}},ze={args:{options:k,closeOnSelect:!0,placeholder:"Closes after selection...",onValueChange:e=>console.log("Selected values:",e)}},Fe={args:{options:k,disabled:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Disabled state...",onValueChange:e=>console.log("Selected values:",e)}},Ue={args:{options:[],emptyIndicator:t.jsxs("div",{className:"py-6 flex flex-col items-center text-center",children:[t.jsx(yt,{className:"h-12 w-12 text-body-secondary mb-2"}),t.jsx("p",{className:"text-body-secondary",children:"No options available"}),t.jsx("p",{className:"text-xs text-body-secondary mt-1",children:"Try a different search term"})]}),placeholder:"Custom empty state...",onValueChange:e=>console.log("Selected values:",e)}},_e={args:{options:k,filterByValueAndLabel:!0,placeholder:"Search by label or value...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'}}}},Ge={args:{options:So,placeholder:"Custom render...",renderOption:({option:e,location:o,isSelected:a,onRemove:r})=>{const l=e.icon;return o==="badge"?t.jsxs("div",{className:`gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border`,children:[l&&t.jsx(l,{className:"h-3 w-3"}),t.jsx("span",{className:"text-sm font-medium",children:e.label}),r&&t.jsx("button",{onClick:u=>{u.stopPropagation(),r()},className:"ml-1 hover:bg-interactive-alert-hover rounded p-0.5",children:t.jsx(Uo,{className:"h-3 w-3 text-interactive-alert-default"})})]}):t.jsxs("div",{className:"gap-2 flex items-center",children:[l&&t.jsx(l,{className:`h-4 w-4
              ${a?"text-interactive-primary-default":"text-body-secondary"}`}),t.jsx("span",{className:a?"font-bold text-interactive-primary-default":"",children:e.label}),a&&t.jsx("span",{className:"text-xs text-body-success ml-auto",children:"✓ Selected"})]})},onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button."}}}},ys=()=>{const[e,o]=g.useState([]);return t.jsxs("div",{className:"gap-4 flex flex-col",children:[t.jsx(Y,{options:k,placeholder:"Select fruits and click Apply...",onValueChange:a=>console.log("Values changed (not applied yet):",a),onApplySelection:a=>{console.log("Values applied:",a),o(a)}}),t.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[t.jsx("p",{className:"text-sm font-medium text-body-primary mb-2",children:"Applied Values:"}),e.length>0?t.jsx("ul",{className:"text-sm text-body-secondary list-inside list-disc",children:e.map(a=>{const r=k.find(l=>l.value===a);return t.jsx("li",{children:(r==null?void 0:r.label)||a},a)})}):t.jsx("p",{className:"text-sm text-body-secondary italic",children:"No values applied yet"})]})]})},He={render:()=>t.jsx(ys,{}),parameters:{docs:{description:{story:'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.'},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},Ke={args:{options:k,customTrigger:t.jsx("button",{className:`px-4 py-2 rounded-md bg-interactive-primary-default
          text-interactive-inverse hover:bg-interactive-primary-hover
          focus:ring-interactive-focused focus:ring-4 focus:outline-none`,children:t.jsxs("div",{className:"gap-2 flex items-center",children:[t.jsx(yt,{className:"h-5 w-5"}),t.jsx("span",{className:"font-medium",children:"Custom Trigger Button"})]})}),onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},Ye={args:{options:k,placeholder:"Select fruits (badges hidden)...",hideSelection:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates the hideSelection prop which hides the selected option badges below the trigger button. This is useful when you want to show selections only in the dropdown or when you need a more compact layout."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits (badges hidden)..."
  hideSelection={true}
  defaultValue={['apple', 'banana', 'cherry']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},xs=()=>{const[e,o]=g.useState(["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"]),a=e.map(r=>{var l;return(l=k.find(u=>u.value===r))==null?void 0:l.label}).filter(Boolean);return t.jsxs("div",{className:"gap-4 flex flex-col",children:[t.jsx(Y,{options:k,hideSelection:!0,customTrigger:t.jsx("button",{className:`px-4 py-3 rounded-md bg-surface-primary
              border-interactive-default hover:bg-surface-secondary
              focus:ring-interactive-focused border focus:ring-4
              focus:outline-none`,children:t.jsxs("div",{className:"gap-4 flex min-w-[300px] items-center justify-between",children:[t.jsxs("div",{className:"gap-2 flex items-center",children:[t.jsx(uo,{className:"h-5 w-5 text-body-secondary"}),t.jsx("span",{className:"font-medium text-body-primary",children:e.length>0?`${e.length} selected`:"Select options"})]}),t.jsx(co,{className:"h-4 w-4 text-body-secondary"})]})}),onValueChange:r=>o(r)}),t.jsxs("div",{className:`p-4 rounded-md bg-surface-secondary border-divider-default
          border`,children:[t.jsxs("p",{className:"text-sm font-medium text-body-primary mb-2",children:["Selected Items (",e.length,"):"]}),a.length>0?t.jsx("div",{className:"gap-2 flex flex-wrap",children:a.map((r,l)=>t.jsx("span",{className:`px-2 py-1 rounded-md bg-surface-primary text-sm
                  text-body-primary border-divider-default border`,children:r},l))}):t.jsx("p",{className:"text-sm text-body-secondary italic",children:"No items selected"})]})]})},Xe={render:()=>t.jsx(xs,{}),parameters:{docs:{description:{story:"This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges."},source:{code:`import { MultiSelect } from '@chemican/components';
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
</>`}}}},Je={args:{options:k,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates the inline selection display mode. When selectionDisplayMode is set to "inline", selected values are displayed as comma-separated text within the trigger button instead of as badge elements below it. This provides a more compact layout that is suitable for space-constrained interfaces.'},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`}}}},Ss=()=>t.jsxs("div",{className:"gap-6 flex flex-col",children:[t.jsxs("div",{className:"gap-2 flex flex-col",children:[t.jsx("h3",{className:"font-semibold text-body-primary",children:"Default Mode (Badges Below)"}),t.jsx(Y,{options:k,placeholder:"Select fruits...",selectionDisplayMode:"default",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]}),t.jsxs("div",{className:"gap-2 flex flex-col",children:[t.jsx("h3",{className:"font-semibold text-body-primary",children:"Inline Mode (Inside Trigger)"}),t.jsx(Y,{options:k,placeholder:"Select fruits...",selectionDisplayMode:"inline",defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit"]})]})]}),Qe={render:()=>t.jsx(Ss,{}),parameters:{docs:{description:{story:"This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area."},source:{code:`import { MultiSelect } from '@chemican/components';

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
/>`}}}},ws=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Nectarine",value:"nectarine"},{label:"Orange",value:"orange"},{label:"Papaya",value:"papaya"},{label:"Quince",value:"quince"},{label:"Raspberry",value:"raspberry"},{label:"Strawberry",value:"strawberry"},{label:"Tangerine",value:"tangerine"},{label:"Watermelon",value:"watermelon"},{label:"Yuzu",value:"yuzu"}],Ze={args:{options:ws,placeholder:"Select fruits...",maxDisplayedOptions:5,moreOptionsLabel:e=>`Search to see ${e} more...`},parameters:{docs:{description:{story:"When `maxDisplayedOptions` is set, only the first N options are shown by default. A hint indicates how many more are available. Selected items always remain visible. Typing in the search input reveals all matching options."},source:{code:`import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  maxDisplayedOptions={5}
/>`}}}},ot=Array.from({length:60},(e,o)=>({label:`SDS Document ${o+1}`,value:`sds-${o+1}`})),Cs=()=>{const[e,o]=g.useState(ot.slice(0,10)),[a,r]=g.useState(!1),l=g.useRef(void 0),u=h=>{r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const m=ot.filter(w=>w.label.toLowerCase().includes(h.toLowerCase()));o(m.slice(0,10)),r(!1)},800)};return t.jsx(Y,{options:e,loading:a,onSearchValueChange:u,hideSelectAll:!0,placeholder:"Select SDS...",searchPlaceholder:"サーバー検索...",emptyIndicator:"該当する項目がありません"})},et={render:()=>t.jsx(Cs,{}),parameters:{docs:{description:{story:"Demonstrates server-side search. `onSearchValueChange` fires as the user types so the parent can fetch matching options, and `loading` shows a spinner inside the dropdown while the request is in flight. When `onSearchValueChange` is provided the built-in client-side filtering is disabled, so the parent fully controls `options`."},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}},Ns=()=>{const[e,o]=g.useState(ot),[a,r]=g.useState(!1),l=g.useRef(void 0),u=h=>{r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const m=ot.filter(w=>w.label.toLowerCase().includes(h.toLowerCase()));o(m),r(!1)},800)};return t.jsx(Y,{options:e,loading:a,onSearchValueChange:u,maxDisplayedOptions:5,moreOptionsLabel:h=>`検索して他${h}件を表示`,hideSelectAll:!0,placeholder:"Select SDS...",searchPlaceholder:"サーバー検索...",emptyIndicator:"該当する項目がありません"})},tt={render:()=>t.jsx(Ns,{}),parameters:{docs:{description:{story:'Combines `maxDisplayedOptions` with server-side search. Before searching, only the first N server-returned options are shown with a "type to see more" hint. As soon as the user types, `onSearchValueChange` fetches matching options (with `loading` shown meanwhile) and the truncation is lifted so every returned match is visible.'},source:{code:`import { MultiSelect } from '@chemican/components';
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
/>`}}}};var _t,Gt,Ht;ke.parameters={...ke.parameters,docs:{...(_t=ke.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ht=(Gt=ke.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Kt,Yt,Xt;Ae.parameters={...Ae.parameters,docs:{...(Kt=Ae.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Xt=(Yt=Ae.parameters)==null?void 0:Yt.docs)==null?void 0:Xt.source}}};var Jt,Qt,Zt;Le.parameters={...Le.parameters,docs:{...(Jt=Le.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Zt=(Qt=Le.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;De.parameters={...De.parameters,docs:{...(ea=De.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=De.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var oa,sa,na;We.parameters={...We.parameters,docs:{...(oa=We.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(na=(sa=We.parameters)==null?void 0:sa.docs)==null?void 0:na.source}}};var la,ra,ia;qe.parameters={...qe.parameters,docs:{...(la=qe.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ia=(ra=qe.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ca,da,ua;Ee.parameters={...Ee.parameters,docs:{...(ca=Ee.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ua=(da=Ee.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,ma,fa;$e.parameters={...$e.parameters,docs:{...(pa=$e.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003'],
    placeholder: 'Max 2 visible...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(fa=(ma=$e.parameters)==null?void 0:ma.docs)==null?void 0:fa.source}}};var ha,va,ga;Be.parameters={...Be.parameters,docs:{...(ha=Be.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ga=(va=Be.parameters)==null?void 0:va.docs)==null?void 0:ga.source}}};var ba,ya,xa;Pe.parameters={...Pe.parameters,docs:{...(ba=Pe.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(xa=(ya=Pe.parameters)==null?void 0:ya.docs)==null?void 0:xa.source}}};var Sa,wa,Ca;ze.parameters={...ze.parameters,docs:{...(Sa=ze.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ca=(wa=ze.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source}}};var Na,Ta,Ra;Fe.parameters={...Fe.parameters,docs:{...(Na=Fe.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Disabled state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Ra=(Ta=Fe.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var Va,Oa,Ia;Ue.parameters={...Ue.parameters,docs:{...(Va=Ue.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ia=(Oa=Ue.parameters)==null?void 0:Oa.docs)==null?void 0:Ia.source}}};var ja,Ma,ka;_e.parameters={..._e.parameters,docs:{...(ja=_e.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(ka=(Ma=_e.parameters)==null?void 0:Ma.docs)==null?void 0:ka.source}}};var Aa,La,Da;Ge.parameters={...Ge.parameters,docs:{...(Aa=Ge.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Da=(La=Ge.parameters)==null?void 0:La.docs)==null?void 0:Da.source}}};var Wa,qa,Ea;He.parameters={...He.parameters,docs:{...(Wa=He.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ea=(qa=He.parameters)==null?void 0:qa.docs)==null?void 0:Ea.source}}};var $a,Ba,Pa;Ke.parameters={...Ke.parameters,docs:{...($a=Ke.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(Pa=(Ba=Ke.parameters)==null?void 0:Ba.docs)==null?void 0:Pa.source}}};var za,Fa,Ua;Ye.parameters={...Ye.parameters,docs:{...(za=Ye.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(Ua=(Fa=Ye.parameters)==null?void 0:Fa.docs)==null?void 0:Ua.source}}};var _a,Ga,Ha;Xe.parameters={...Xe.parameters,docs:{...(_a=Xe.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Ha=(Ga=Xe.parameters)==null?void 0:Ga.docs)==null?void 0:Ha.source}}};var Ka,Ya,Xa;Je.parameters={...Je.parameters,docs:{...(Ka=Je.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Xa=(Ya=Je.parameters)==null?void 0:Ya.docs)==null?void 0:Xa.source}}};var Ja,Qa,Za;Qe.parameters={...Qe.parameters,docs:{...(Ja=Qe.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
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
}`,...(Za=(Qa=Qe.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var eo,to,ao;Ze.parameters={...Ze.parameters,docs:{...(eo=Ze.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(ao=(to=Ze.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var oo,so,no;et.parameters={...et.parameters,docs:{...(oo=et.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(no=(so=et.parameters)==null?void 0:so.docs)==null?void 0:no.source}}};var lo,ro,io;tt.parameters={...tt.parameters,docs:{...(lo=tt.parameters)==null?void 0:lo.docs,source:{originalSource:`{
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
}`,...(io=(ro=tt.parameters)==null?void 0:ro.docs)==null?void 0:io.source}}};const Ys=["Default","WithDefaultValues","WithTagsAsItems","WithStatusAsItems","WithIcons","Grouped","WithDisabledOptions","MaxCountLimited","NoSearch","NoSelectAll","CloseOnSelect","Disabled","CustomEmptyState","FilterByValueAndLabel","CustomRenderOption","WithOnApplySelection","WithCustomTrigger","WithHideSelection","CustomTriggerWithHideSelection","InlineSelectionDisplay","InlineSelectionComparison","MaxDisplayedOptions","WithServerSideSearch","WithServerSideSearchAndMaxDisplayed"];export{ze as CloseOnSelect,Ue as CustomEmptyState,Ge as CustomRenderOption,Xe as CustomTriggerWithHideSelection,ke as Default,Fe as Disabled,_e as FilterByValueAndLabel,qe as Grouped,Qe as InlineSelectionComparison,Je as InlineSelectionDisplay,$e as MaxCountLimited,Ze as MaxDisplayedOptions,Be as NoSearch,Pe as NoSelectAll,Ke as WithCustomTrigger,Ae as WithDefaultValues,Ee as WithDisabledOptions,Ye as WithHideSelection,We as WithIcons,He as WithOnApplySelection,et as WithServerSideSearch,tt as WithServerSideSearchAndMaxDisplayed,De as WithStatusAsItems,Le as WithTagsAsItems,Ys as __namedExportsOrder,Ks as default};
