import{r as d,e as C,j as e,c as x,T as Te,b as pe}from"./iframe-D7gHdX4A.js";import{B as L}from"./Button-Bb-auOBn.js";import{T as fe}from"./Tag-BhMr6bLA.js";import{u as je}from"./useCompositionGuard-CGl-oA1p.js";import{I as Ke}from"./IconSearch-BoksRCsA.js";import{I as Ce}from"./IconX-DqTrg1ML.js";import{c as ke}from"./createReactComponent-Blq4bVNU.js";import{I as Ve}from"./IconDownload-DGEa9UNG.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-Dy1mfgzC.js";import"./tokens-ClON5slf.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z",key:"svg-0"}]],Ie=ke("outline","filter","Filter",Ee);function Re(){const s=d.useRef(null),[l,n]=d.useState(!1);return d.useEffect(()=>{const o=s.current;if(!o)return;const r=()=>n(o.scrollWidth>o.clientWidth);r();const t=new ResizeObserver(r);return t.observe(o),()=>t.disconnect()},[]),{ref:s,isTruncated:l}}const _e=pe(`rounded-sm bg-surface-primary border-interactive-default
  hover:border-interactive-hover focus-within:border-interactive-hover
  focus-within:ring-interactive-focused flex w-auto overflow-hidden border
  transition-all focus-within:ring-4`,{variants:{size:{sm:"min-h-8 text-sm",md:"min-h-10 text-md",lg:"min-h-12 text-md"},state:{default:"",filled:"",disabled:`!border-interactive-default bg-input-disabled
        text-body-disabled pointer-events-none cursor-not-allowed`}},defaultVariants:{size:"md",state:"default"}}),De="gap-xxs px-sm py-xxs disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 items-center",Be=`rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 flex-row
  flex-wrap items-center justify-start`,ze=`min-w-24 min-h-5.5 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`,Ae=pe(`bg-shape-accent-gray-pale px-sm text-md text-shape-primary
  border-l-interactive-default hover:bg-interactive-neutral-hover
  hover:text-interactive-primary-hover focus:bg-shape-accent-gray-pale
  focus:text-interactive-primary-hover
  group-hover/wrapper:bg-shape-accent-gray-pale
  disabled:bg-shape-accent-gray-pale disabled:text-body-disabled
  disabled:hover:bg-shape-accent-gray-pale disabled:hover:text-body-disabled
  focus:ring-interactive-focused
  group-focus-within:border-l-interactive-primary-default cursor-pointer
  items-center justify-center border-l text-center focus:ring-4
  focus:outline-none disabled:cursor-not-allowed`,{variants:{size:{sm:"text-sm",md:"text-md",lg:"text-md"}},defaultVariants:{size:"md"}}),Le="gap-xs text-sm text-body-inverse flex-row",qe=({keyword:s,size:l,disabled:n,onRemove:o,removeAriaLabel:r})=>{const{ref:t,isTruncated:T}=Re(),[p,g]=C.useState(!1);return e.jsx("span",{className:"min-w-0 flex max-w-full",onMouseDown:f=>f.preventDefault(),children:e.jsx(fe,{variant:"secondary",size:l,disabled:n,onRemove:o,removeAriaLabel:r,children:e.jsx(Te,{content:s,open:p,onOpenChange:f=>g(f&&T),children:e.jsx("span",{ref:t,className:"block h-full truncate",children:s})})})})},S=C.forwardRef(({size:s="md",state:l,value:n="",className:o,onChange:r,onSearch:t,placeholder:T,disabled:p,supportText:g,searchButtonText:f="検索",searchOnKeywordAdd:j=!1,initialKeywords:he,removeKeywordAriaLabel:ge="Remove keyword",hideKeywords:K=!1,...v},ve)=>{const c=p||l==="disabled",[u,w]=C.useState(he??[]),[xe,D]=C.useState(!1);let m;typeof l=="string"?m=l:c?m="disabled":u.length>0?m="filled":m="default";const B=C.useRef(m),{compositionHandlers:z,guardKeyHandler:ye}=je();d.useEffect(()=>{B.current==="filled"&&m!=="filled"&&w([]),B.current=m},[m]);const be=a=>{c||r&&r(a)},we=a=>{if(!c){if(a.key==="Enter"&&n.trim()){const i=[...u,n.trim()];if(w(i),r){const A={...a,target:{value:""}};r(A)}j&&t&&t(i),a.preventDefault()}if((a.key==="Backspace"||a.key==="Delete")&&!n&&u.length>0&&!K){const i=u.slice(0,-1);w(i),j&&t&&t(i),a.preventDefault()}}},Se=a=>{if(c)return;const i=u.filter((A,Ne)=>Ne!==a);w(i),j&&t&&t(i)};return e.jsxs("div",{className:x("group relative flex flex-col",c?"pointer-events-none":"",o),"aria-disabled":c?"true":void 0,children:[e.jsxs("div",{className:x(_e({size:s,state:m}),"group/wrapper"),children:[e.jsxs("div",{className:x(De),children:[e.jsx("span",{className:`text-shape-primary
                disabled:text-shape-interactive-disabled flex items-center`,children:e.jsx(Ke,{size:20})}),e.jsxs("div",{className:x(Be),children:[!K&&u.map((a,i)=>e.jsx(qe,{keyword:a,size:s==="sm"?"sm":"md",disabled:c,onRemove:()=>Se(i),removeAriaLabel:ge},`${i}-${a}`)),e.jsx("input",{ref:ve,className:x(ze),type:"text",value:n,onChange:be,onKeyDown:ye(we),onCompositionStart:z.onCompositionStart,onCompositionEnd:z.onCompositionEnd,onFocus:a=>{var i;D(!0),(i=v.onFocus)==null||i.call(v,a)},onBlur:a=>{var i;D(!1),(i=v.onBlur)==null||i.call(v,a)},placeholder:!K&&(m==="filled"||u.length>0)?"":T,disabled:c,...v})]}),(n||u.length>0&&!K)&&!c&&e.jsx("button",{type:"button","aria-label":"Clear",className:"text-shape-primary cursor-pointer",onClick:()=>{r&&r({target:{value:""}}),!K&&(t==null||t([]),w([]))},tabIndex:-1,children:e.jsx(Ce,{size:20})})]}),e.jsx("button",{type:"button",className:x(Ae({size:s})),onClick:()=>{let a=u;n.trim()&&(a=[...u,n.trim()],w(a),r&&r({target:{value:""}})),t==null||t(a)},disabled:c,children:f})]}),g&&e.jsx("div",{className:x(Le,`z-tooltip bg-surface-tooltip-neutral rounded-sm px-xs py-xxs
              leading-tight left-0 mt-xxs absolute top-full`,xe?"flex":"hidden"),children:g})]})});S.displayName="SearchBar";S.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},classname:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(keywords: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keywords"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'disabled'"}]},description:""},supportText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},searchButtonText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'検索'",computed:!1}},searchOnKeywordAdd:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialKeywords:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},removeKeywordAriaLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of each keyword's remove button.",defaultValue:{value:"'Remove keyword'",computed:!1}},hideKeywords:{required:!1,tsType:{name:"boolean"},description:`Leaves the keywords out of the bar, for pages that list them elsewhere.
The bar then only holds the text being typed.`,defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const Ye={title:"Components/SearchBar",component:S,parameters:{docs:{description:{component:"A search input component with keyword chip functionality and natural hover/focus states using Tailwind CSS."}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},placeholder:{control:{type:"text"}},state:{control:{type:"radio"},options:["default","filled","disabled"]},value:{table:{disable:!0}},onChange:{table:{disable:!0}},onSearch:{table:{disable:!0}},searchButtonText:{table:{disable:!0}},disabled:{table:{disable:!0}}}},N=s=>{const[l,n]=d.useState("");return e.jsx(S,{...s,value:l,onChange:o=>n(o.target.value),onSearch:()=>alert("Search: "+l),state:s.state})},b={placeholder:"SDS ID/SDSファイル名/製品名/化学物質名/CAS番号/法令名/細則名",supportText:"Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。",size:"md",state:"default"},k=N.bind({});k.args=b;const V=N.bind({});V.args={...b,size:"sm"};const E=N.bind({});E.args={...b,size:"lg"};const I=N.bind({});I.args={...b,state:"filled"};const R=N.bind({});R.args={...b,state:"disabled"};const _=N.bind({});_.args={...b,initialKeywords:["SDS ID","化学物質名"]};const Fe="1IK_COPPER SELENIDE (CU2SE)_SDS-US_English.pdf_ filename_=UTF-8_1IK_COPPER_20SELENIDE_20_28CU2SE_29_SDS-US_English_20405-64-5.pdf",h=s=>{const[l,n]=d.useState(""),[o,r]=d.useState(s.initialKeywords??[]);return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{className:`bg-surface-secondary px-xxl h-19 flex w-full items-center
          justify-between`,children:[e.jsxs("div",{className:"gap-2 flex items-center",children:[e.jsx(S,{...s,className:"w-112",value:l,onChange:t=>n(t.target.value),onSearch:r,searchOnKeywordAdd:!0}),e.jsx(L,{intent:"secondary",size:"sm",className:"min-w-20",icon:e.jsx(Ie,{size:20}),children:"フィルター"})]}),e.jsx(L,{intent:"primary",size:"sm",icon:e.jsx(Ve,{size:20}),children:"エクスポート"})]}),e.jsxs("p",{className:"text-body-primary px-xxl text-sm",children:["Searched: ",o.join(" / ")||"(none)"]})]})};h.args={size:"md",placeholder:"SDSを検索（CAS番号・法令名・化学物質名など）",supportText:"Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。SDS ID/SDSファイル名/製品名/製造者名/化学物質名/CAS番号/法令名/細則名から検索ができます。",searchButtonText:"検索",initialKeywords:[Fe,"20405-64-5"]};h.parameters={layout:"fullscreen"};const y=s=>{const[l,n]=d.useState(""),[o,r]=d.useState(s.initialKeywords??[]),[t,T]=d.useState(0);return e.jsxs("div",{className:"gap-md p-md flex flex-col",children:[d.createElement(S,{...s,key:t,initialKeywords:o,value:l,onChange:p=>n(p.target.value),onSearch:r,searchOnKeywordAdd:!0}),o.length>0&&e.jsxs("div",{className:"gap-xxs flex flex-col items-start",children:[e.jsx("p",{className:"text-body-secondary text-sm",children:"キーワード"}),e.jsx("div",{className:"gap-1 flex flex-wrap",children:o.map((p,g)=>e.jsx(fe,{size:"sm",onRemove:()=>{r(o.filter((f,j)=>j!==g)),T(f=>f+1)},children:p},`${g}-${p}`))})]})]})};y.args={...b,hideKeywords:!0,initialKeywords:["アセトン","67-64-1"]};h.__docgenInfo={description:`A keyword longer than the bar, such as a pasted file name, truncates with
the full text in a tooltip. Laid out like a list page toolbar, where the
bar has a fixed width next to other actions.`,methods:[],displayName:"LongKeyword"};y.__docgenInfo={description:"The keywords leave the bar, so the page can list them with its other\nsearch conditions. Removing one there remounts the bar with the new\n`initialKeywords`.",methods:[],displayName:"HideKeywords"};var q,F,O;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(O=(F=k.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var H,W,$;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...($=(W=V.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,P,U;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(U=(P=E.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var G,X,J;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(J=(X=I.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Y,Z;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={e => setValue(e.target.value)} onSearch={() => alert('Search: ' + value)} state={args.state} // <-- pass state prop
  />;
}`,...(ae=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,ne,oe,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
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
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:`A keyword longer than the bar, such as a pasted file name, truncates with
the full text in a tooltip. Laid out like a list page toolbar, where the
bar has a fixed width next to other actions.`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var le,de,ce,ue,me;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const [keywords, setKeywords] = useState<string[]>(args.initialKeywords ?? []);
  const [version, setVersion] = useState(0);
  return <div className="gap-md p-md flex flex-col">
      <SearchBar {...args} key={version} initialKeywords={keywords} value={value} onChange={e => setValue(e.target.value)} onSearch={setKeywords} searchOnKeywordAdd />
      {keywords.length > 0 && <div className="gap-xxs flex flex-col items-start">
          <p className="text-body-secondary text-sm">キーワード</p>
          <div className="gap-1 flex flex-wrap">
            {keywords.map((keyword, idx) => <Tag key={\`\${idx}-\${keyword}\`} size="sm" onRemove={() => {
          setKeywords(keywords.filter((_, i) => i !== idx));
          setVersion(v => v + 1);
        }}>
                {keyword}
              </Tag>)}
          </div>
        </div>}
    </div>;
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"The keywords leave the bar, so the page can list them with its other\nsearch conditions. Removing one there remounts the bar with the new\n`initialKeywords`.",...(me=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};const Ze=["Default","Small","Large","Filled","Disabled","WithInitialKeywords","LongKeyword","HideKeywords"];export{k as Default,R as Disabled,I as Filled,y as HideKeywords,E as Large,h as LongKeyword,V as Small,_ as WithInitialKeywords,Ze as __namedExportsOrder,Ye as default};
