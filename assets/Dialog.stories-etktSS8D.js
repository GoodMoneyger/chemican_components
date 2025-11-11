import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as _,r as b}from"./iframe-BGEiw82u.js";import{B as x}from"./Button-C43H0q0c.js";import{R as E,P as V,O as z,C as W,T as F,a as Y}from"./index-DV139X9N.js";import"./preload-helper-Dp1pzeXC.js";import"./index-jPeIKass.js";import"./utils-CNFdBqpa.js";import"./ProgressIndicator-Cwh87p9_.js";import"./index-DNczSWoN.js";import"./index-CRJUJU5i.js";import"./index-O9gwwFta.js";import"./index-CmCxJEgZ.js";import"./index-CJc4DCGt.js";import"./index-DPFLwEam.js";import"./index-CzlzeJnF.js";import"./index-C0k5xVk3.js";import"./index-BifuTffV.js";import"./index-BSmHwu9j.js";const $=[{label:"Confirm",value:!0,intent:"primary"}],h=({isOpen:o,onClose:s,title:a,children:c,busy:p,actions:d=$,cancellable:n=!0,cancelButtonLabel:q="キャンセル"})=>{const[v,f]=_.useState(-1),O=p!==void 0?p:v!==-1,M=async t=>{const m=d.indexOf(t);if(t.onAction){f(m);const y=await t.onAction(s);if(f(-1),y===!1)return}else f(-1);o&&s(t.value)},L=()=>{s()};return e.jsx(E,{open:o,onOpenChange:s,children:e.jsxs(V,{children:[e.jsx(z,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`}),e.jsxs(W,{"aria-describedby":void 0,onPointerDownOutside:t=>{(!n||O)&&t.preventDefault()},className:`bg-surface-primary rounded-lg z-dialog max-w-screen-sm
            min-w-96 fixed top-1/2 left-1/2 flex max-h-[90vh] w-2/3
            -translate-x-1/2 -translate-y-1/2 transform flex-col`,children:[e.jsx("div",{className:`px-xl py-lg flex flex-shrink-0 items-center
              justify-between`,children:a&&e.jsx(F,{className:`text-xxl text-body-primary font-bold h-4.5 flex
                  items-center`,children:a})}),e.jsx("div",{className:`border-divider-default bg-surface-secondary px-xl pt-md
              pb-xxl text-body-primary min-h-40 flex-1 overflow-y-auto
              border-y-1`,children:c}),e.jsxs("div",{className:"px-xl py-md flex flex-shrink-0 justify-between",children:[n&&e.jsx(Y,{asChild:!0,children:e.jsx(x,{intent:"tertiary",onClick:L,disabled:O,children:q})}),e.jsx("div",{className:`gap-xs flex ${n?"":"ml-auto"}`,children:d.map((t,m)=>{const{label:y,classNames:J,onAction:H,value:K,...P}=t;return e.jsx(x,{loading:v===m,...P,intent:t.intent||"primary",className:J,onClick:()=>M(t),children:y},m)})})]})]})]})})};h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}}}};const ge={title:"Components/Dialog",component:h,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},g=o=>{const[s,a]=b.useState(o.isOpen),[c,p]=b.useState(null),d=n=>{a(!1),p(n),console.log("Dialog closed with value:",n)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),c&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(c)]}),e.jsx(h,{...o,isOpen:s,onClose:d})]})},l=g.bind({});l.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const r=g.bind({});r.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const i=g.bind({});i.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const u=g.bind({});u.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};var C,w,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [result, setResult] = useState<unknown>(null);
  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && <p style={{
      marginTop: '10px',
      color: '#666'
    }}>
          Last result: {JSON.stringify(result)}
        </p>}
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} />
    </>;
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,k,N;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [result, setResult] = useState<unknown>(null);
  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && <p style={{
      marginTop: '10px',
      color: '#666'
    }}>
          Last result: {JSON.stringify(result)}
        </p>}
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} />
    </>;
}`,...(N=(k=r.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var j,A,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [result, setResult] = useState<unknown>(null);
  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && <p style={{
      marginTop: '10px',
      color: '#666'
    }}>
          Last result: {JSON.stringify(result)}
        </p>}
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} />
    </>;
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,R,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [result, setResult] = useState<unknown>(null);
  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && <p style={{
      marginTop: '10px',
      color: '#666'
    }}>
          Last result: {JSON.stringify(result)}
        </p>}
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} />
    </>;
}`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const fe=["Default","MultipleActions","NonCancellable","WithCustomActions"];export{l as Default,r as MultipleActions,i as NonCancellable,u as WithCustomActions,fe as __namedExportsOrder,ge as default};
