import{r as h,e as y,j as e,c as f,T as ge,b as le}from"./iframe-DcSk_wzL.js";import{B as k}from"./Button-BjWHnloS.js";import{u as ve}from"./useCompositionGuard-DS87adQx.js";import{T as xe}from"./Tag-DDws2ewO.js";import{I as be}from"./IconSearch-NpfYajbj.js";import{I as ye}from"./IconX-CrBt7ASo.js";import{c as we}from"./createReactComponent-D8NpDzyf.js";import{I as Se}from"./IconDownload-H40T6ODK.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-Bqwu_cCE.js";import"./tokens-ClON5slf.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z",key:"svg-0"}]],je=we("outline","filter","Filter",Te);function Ne(){const r=h.useRef(null),[i,n]=h.useState(!1);return h.useEffect(()=>{const o=r.current;if(!o)return;const l=()=>n(o.scrollWidth>o.clientWidth);l();const a=new ResizeObserver(l);return a.observe(o),()=>a.disconnect()},[]),{ref:r,isTruncated:i}}const Ce=le(`rounded-sm bg-surface-primary border-interactive-default
  hover:border-interactive-hover focus-within:border-interactive-hover
  focus-within:ring-interactive-focused flex w-auto overflow-hidden border
  transition-all focus-within:ring-4`,{variants:{size:{sm:"min-h-8 text-sm",md:"min-h-10 text-md",lg:"min-h-12 text-md"},state:{default:"",filled:"",disabled:`!border-interactive-default bg-input-disabled
        text-body-disabled pointer-events-none cursor-not-allowed`}},defaultVariants:{size:"md",state:"default"}}),Ee="gap-xxs px-sm py-xxs disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 items-center",Ie=`rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 flex-row
  flex-wrap items-center justify-start`,De=`min-w-24 min-h-5.5 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`,Ve=le(`bg-shape-accent-gray-pale px-sm text-md text-shape-primary
  border-l-interactive-default hover:bg-interactive-neutral-hover
  hover:text-interactive-primary-hover focus:bg-shape-accent-gray-pale
  focus:text-interactive-primary-hover
  group-hover/wrapper:bg-shape-accent-gray-pale
  disabled:bg-shape-accent-gray-pale disabled:text-body-disabled
  disabled:hover:bg-shape-accent-gray-pale disabled:hover:text-body-disabled
  focus:ring-interactive-focused
  group-focus-within:border-l-interactive-primary-default cursor-pointer
  items-center justify-center border-l text-center focus:ring-4
  focus:outline-none disabled:cursor-not-allowed`,{variants:{size:{sm:"text-sm",md:"text-md",lg:"text-md"}},defaultVariants:{size:"md"}}),Be="gap-xs text-sm text-body-inverse flex-row",Ke=({keyword:r,size:i,disabled:n,onRemove:o,removeAriaLabel:l})=>{const{ref:a,isTruncated:D}=Ne(),[V,I]=y.useState(!1);return e.jsx("span",{className:"min-w-0 flex max-w-full",onMouseDown:b=>b.preventDefault(),children:e.jsx(xe,{variant:"secondary",size:i,disabled:n,onRemove:o,removeAriaLabel:l,children:e.jsx(ge,{content:r,open:V,onOpenChange:b=>I(b&&D),children:e.jsx("span",{ref:a,className:"block h-full truncate",children:r})})})})},E=y.forwardRef(({size:r="md",state:i,value:n="",className:o,onChange:l,onSearch:a,placeholder:D,disabled:V,supportText:I,searchButtonText:b="検索",searchOnKeywordAdd:B=!1,initialKeywords:ie,removeKeywordAriaLabel:oe="Remove keyword",...p},de)=>{const d=V||i==="disabled",[c,g]=y.useState(ie??[]),[ce,K]=y.useState(!1);let u;typeof i=="string"?u=i:d?u="disabled":c.length>0?u="filled":u="default";const R=y.useRef(u),{compositionHandlers:_,guardKeyHandler:ue}=ve();h.useEffect(()=>{R.current==="filled"&&u!=="filled"&&g([]),R.current=u},[u]);const me=t=>{d||l&&l(t)},pe=t=>{if(!d){if(t.key==="Enter"&&n.trim()){const s=[...c,n.trim()];if(g(s),l){const z={...t,target:{value:""}};l(z)}B&&a&&a(s),t.preventDefault()}if((t.key==="Backspace"||t.key==="Delete")&&!n&&c.length>0){const s=c.slice(0,-1);g(s),B&&a&&a(s),t.preventDefault()}}},fe=t=>{if(d)return;const s=c.filter((z,he)=>he!==t);g(s),B&&a&&a(s)};return e.jsxs("div",{className:f("group relative flex flex-col",d?"pointer-events-none":"",o),"aria-disabled":d?"true":void 0,children:[e.jsxs("div",{className:f(Ce({size:r,state:u}),"group/wrapper"),children:[e.jsxs("div",{className:f(Ee),children:[e.jsx("span",{className:`text-shape-primary
                disabled:text-shape-interactive-disabled flex items-center`,children:e.jsx(be,{size:20})}),e.jsxs("div",{className:f(Ie),children:[c.map((t,s)=>e.jsx(Ke,{keyword:t,size:r==="sm"?"sm":"md",disabled:d,onRemove:()=>fe(s),removeAriaLabel:oe},`${s}-${t}`)),e.jsx("input",{ref:de,className:f(De),type:"text",value:n,onChange:me,onKeyDown:ue(pe),onCompositionStart:_.onCompositionStart,onCompositionEnd:_.onCompositionEnd,onFocus:t=>{var s;K(!0),(s=p.onFocus)==null||s.call(p,t)},onBlur:t=>{var s;K(!1),(s=p.onBlur)==null||s.call(p,t)},placeholder:u==="filled"||c.length>0?"":D,disabled:d,...p})]}),(n||c.length>0)&&!d&&e.jsx("button",{type:"button","aria-label":"Clear",className:"text-shape-primary cursor-pointer",onClick:()=>{l&&l({target:{value:""}}),a==null||a([]),g([])},tabIndex:-1,children:e.jsx(ye,{size:20})})]}),e.jsx("button",{type:"button",className:f(Ve({size:r})),onClick:()=>{let t=c;n.trim()&&(t=[...c,n.trim()],g(t),l&&l({target:{value:""}})),a==null||a(t)},disabled:d,children:b})]}),I&&e.jsx("div",{className:f(Be,`z-tooltip bg-surface-tooltip-neutral rounded-sm px-xs py-xxs
              leading-tight left-0 mt-xxs absolute top-full`,ce?"flex":"hidden"),children:I})]})});E.displayName="SearchBar";E.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},classname:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(keywords: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keywords"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'disabled'"}]},description:""},supportText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},searchButtonText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'検索'",computed:!1}},searchOnKeywordAdd:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialKeywords:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},removeKeywordAriaLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of each keyword's remove button.",defaultValue:{value:"'Remove keyword'",computed:!1}}},composes:["Omit","VariantProps"]};const Pe={title:"Components/SearchBar",component:E,parameters:{docs:{description:{component:"A search input component with keyword chip functionality and natural hover/focus states using Tailwind CSS."}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},placeholder:{control:{type:"text"}},state:{control:{type:"radio"},options:["default","filled","disabled"]},value:{table:{disable:!0}},onChange:{table:{disable:!0}},onSearch:{table:{disable:!0}},searchButtonText:{table:{disable:!0}},disabled:{table:{disable:!0}}}},v=r=>{const[i,n]=h.useState("");return e.jsx(E,{...r,value:i,onChange:o=>n(o.target.value),onSearch:()=>alert("Search: "+i),state:r.state})},x={placeholder:"SDS ID/SDSファイル名/製品名/化学物質名/CAS番号/法令名/細則名",supportText:"Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。",size:"md",state:"default"},w=v.bind({});w.args=x;const S=v.bind({});S.args={...x,size:"sm"};const T=v.bind({});T.args={...x,size:"lg"};const j=v.bind({});j.args={...x,state:"filled"};const N=v.bind({});N.args={...x,state:"disabled"};const C=v.bind({});C.args={...x,initialKeywords:["SDS ID","化学物質名"]};const Re="1IK_COPPER SELENIDE (CU2SE)_SDS-US_English.pdf_ filename_=UTF-8_1IK_COPPER_20SELENIDE_20_28CU2SE_29_SDS-US_English_20405-64-5.pdf",m=r=>{const[i,n]=h.useState(""),[o,l]=h.useState(r.initialKeywords??[]);return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{className:`bg-surface-secondary px-xxl h-19 flex w-full items-center
          justify-between`,children:[e.jsxs("div",{className:"gap-2 flex items-center",children:[e.jsx(E,{...r,className:"w-112",value:i,onChange:a=>n(a.target.value),onSearch:l,searchOnKeywordAdd:!0}),e.jsx(k,{intent:"secondary",size:"sm",className:"min-w-20",icon:e.jsx(je,{size:20}),children:"フィルター"})]}),e.jsx(k,{intent:"primary",size:"sm",icon:e.jsx(Se,{size:20}),children:"エクスポート"})]}),e.jsxs("p",{className:"text-body-primary px-xxl text-sm",children:["Searched: ",o.join(" / ")||"(none)"]})]})};m.args={size:"md",placeholder:"SDSを検索（CAS番号・法令名・化学物質名など）",supportText:"Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。SDS ID/SDSファイル名/製品名/製造者名/化学物質名/CAS番号/法令名/細則名から検索ができます。",searchButtonText:"検索",initialKeywords:[Re,"20405-64-5"]};m.parameters={layout:"fullscreen"};m.__docgenInfo={description:`A keyword longer than the bar, such as a pasted file name, truncates with
the full text in a tooltip. Laid out like a list page toolbar, where the
bar has a fixed width next to other actions.`,methods:[],displayName:"LongKeyword"};var L,q,A;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(A=(q=w.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,O,W;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(W=(O=S.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var H,M,P;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(P=(M=T.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,G,$;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...($=(G=j.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var X,J,Q;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(Q=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se,re,ne;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const [searched, setSearched] = useState<string[]>(args.initialKeywords ?? []);
  return <div className="gap-md flex flex-col">
      <div className="bg-surface-secondary px-xxl h-19 flex w-full items-center
          justify-between">
        <div className="gap-2 flex items-center">
          <SearchBar {...args} className="w-112" value={value} onChange={e => setValue(e.target.value)} onSearch={setSearched} searchOnKeywordAdd />
          <Button intent="secondary" size="sm" className="min-w-20" icon={<IconFilter size={20} />}>
            フィルター
          </Button>
        </div>
        <Button intent="primary" size="sm" icon={<IconDownload size={20} />}>
          エクスポート
        </Button>
      </div>
      <p className="text-body-primary px-xxl text-sm">
        Searched: {searched.join(' / ') || '(none)'}
      </p>
    </div>;
}`,...(se=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:`A keyword longer than the bar, such as a pasted file name, truncates with
the full text in a tooltip. Laid out like a list page toolbar, where the
bar has a fixed width next to other actions.`,...(ne=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ne.description}}};const Ue=["Default","Small","Large","Filled","Disabled","WithInitialKeywords","LongKeyword"];export{w as Default,N as Disabled,j as Filled,T as Large,m as LongKeyword,S as Small,C as WithInitialKeywords,Ue as __namedExportsOrder,Pe as default};
