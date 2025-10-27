import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-BJ1xBd3R.js";import{B as g}from"./Button-jykr4eYz.js";import{R as M,O as J,C as _,T as E,a as x}from"./index-Dzymx4dh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5gfEbQFy.js";import"./utils-CL1dkygU.js";import"./ProgressIndicator-DpmhzL1E.js";import"./index-DNLOzA8X.js";import"./index-BUS7zVjI.js";import"./index-CIuOl3nY.js";import"./index-DDWTZHNv.js";import"./index-D3VpcHFA.js";import"./index-CVypEBh-.js";import"./index-C_yUhVGf.js";import"./index-CC5H5iI5.js";import"./index-DBspKmrf.js";import"./index-DWC0WXUb.js";const V=[{label:"Confirm",value:!0,intent:"primary"}],f=({isOpen:i,onClose:s,title:n,children:u,actions:m=V,cancellable:c=!0,cancelButtonLabel:p="キャンセル"})=>{const I=t=>{t.onAction&&t.onAction(),s(t.value)},R=()=>{s()};return e.jsxs(M,{open:i,onOpenChange:s,children:[e.jsx(J,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
          w-full`}),e.jsx(_,{className:`bg-surface-primary rounded-lg z-dialog max-w-screen-sm
          min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
          -translate-y-1/2 transform`,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-xl py-lg flex flex-grow items-center justify-between",children:n&&e.jsx(E,{className:`text-xxl text-body-primary font-bold h-4.5 flex
                  items-center`,children:n})}),e.jsx("div",{className:`border-divider-default bg-surface-secondary px-xl py-lg
              text-body-primary min-h-40 flex flex-grow-0 border-y-1`,children:u}),e.jsxs("div",{className:"px-md py-lg flex justify-between",children:[c&&e.jsx(x,{asChild:!0,children:e.jsx(g,{intent:"tertiary",onClick:R,children:p})}),e.jsx("div",{className:`gap-xs flex ${c?"":"ml-auto"}`,children:m.map((t,T)=>{const{label:B,classNames:q,onAction:z,value:P,...L}=t;return e.jsx(x,{asChild:!0,disabled:t.disabled,children:e.jsx(g,{...L,intent:t.intent||"primary",className:q,onClick:()=>I(t),children:B})},T)})})]})]})})]})};f.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}}}};const re={title:"Components/Dialog",component:f,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},d=i=>{const[s,n]=h.useState(i.isOpen),[u,m]=h.useState(null),c=p=>{n(!1),m(p),console.log("Dialog closed with value:",p)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),u&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(u)]}),e.jsx(f,{...i,isOpen:s,onClose:c})]})},o=d.bind({});o.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const l=d.bind({});l.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const a=d.bind({});a.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const r=d.bind({});r.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};var y,O,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(v=(O=o.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var C,b,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var D,S,N;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var j,A,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(k=(A=r.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const ie=["Default","MultipleActions","NonCancellable","WithCustomActions"];export{o as Default,l as MultipleActions,a as NonCancellable,r as WithCustomActions,ie as __namedExportsOrder,re as default};
