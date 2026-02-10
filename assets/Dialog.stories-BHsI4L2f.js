import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as z,r as v}from"./iframe-BS3dkECt.js";import{B as O}from"./Button-xo5Hph5C.js";import{R as K,P as $,O as G,C as Q,T as X}from"./index-Bob0auRW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-w0ozU3u-.js";import"./utils-CJKYiIMO.js";import"./ProgressIndicator-Cwq8lf9O.js";import"./index-_umt6yaQ.js";import"./index-ByYzvxXC.js";import"./index-DqoKkbWS.js";import"./index--NlgwGfF.js";import"./index-b54FJRB0.js";import"./index-JObRCqvH.js";import"./index-BD1ep7OW.js";import"./index-DrSls-yV.js";import"./index-azbDDtyD.js";import"./index-BK0NX5T8.js";const Z=[{label:"Confirm",value:!0,intent:"primary"}],x=({isOpen:a,onClose:t,onCancel:n=p=>p(),title:l,children:u,busy:r,actions:i=Z,cancellable:d=!0,cancelButtonLabel:b="キャンセル",allowClickOutside:o=!0})=>{const[p,w]=z.useState(-1),S=r!==void 0?r:p!==-1,_=async s=>{const y=i.indexOf(s);if(s.onAction){w(y);const k=await s.onAction(t);if(w(-1),k===!1)return}else w(-1);a&&t(s.value)},V=()=>{n(t)},W=s=>{s.preventDefault(),d&&!S&&o&&n(t)},F=s=>{if(S){s.preventDefault();return}s.preventDefault(),n(t)};return e.jsx(K,{open:a,onOpenChange:t,children:e.jsx($,{children:e.jsx(G,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:e.jsxs(Q,{"aria-describedby":void 0,onPointerDownOutside:W,onEscapeKeyDown:F,className:`bg-surface-primary rounded-lg z-dialog max-w-screen-sm
              min-w-96 fixed top-1/2 left-1/2 flex max-h-[90vh] w-2/3
              -translate-x-1/2 -translate-y-1/2 transform flex-col
              overflow-auto`,children:[e.jsx("div",{className:`px-xl py-lg flex flex-shrink-0 items-center
                justify-between`,children:l&&e.jsx(X,{className:`text-xxl text-body-primary font-bold h-4.5 flex
                    items-center`,children:l})}),e.jsx("div",{className:`border-divider-default bg-surface-secondary px-xl pt-md
                pb-xxl text-body-primary flex-1 border-y-1`,children:u}),e.jsxs("div",{className:"px-xl py-md flex flex-shrink-0 justify-between",children:[d&&e.jsx(O,{intent:"tertiary",onClick:V,disabled:S,children:b}),e.jsx("div",{className:`gap-xs flex ${d?"":"ml-auto"}`,children:i.map((s,y)=>{const{label:k,classNames:H,onAction:se,value:te,...Y}=s;return e.jsx(O,{loading:p===y,...Y,intent:s.intent||"primary",className:H,onClick:()=>_(s),children:k},y)})})]})]})})})})};x.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}},allowClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Ce={title:"Components/Dialog",component:x,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},C=a=>{const[t,n]=v.useState(a.isOpen),[l,u]=v.useState(null),r=i=>{n(!1),u(i),console.log("Dialog closed with value:",i)};return e.jsxs(e.Fragment,{children:[e.jsx(O,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),l&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(l)]}),e.jsx(x,{...a,isOpen:t,onClose:r})]})},m=C.bind({});m.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const g=C.bind({});g.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const h=C.bind({});h.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const f=C.bind({});f.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const c=a=>{const[t,n]=v.useState(a.isOpen),[l,u]=v.useState(!0),[r,i]=v.useState(null),d=o=>{n(!1),i(o),console.log("Dialog closed with value:",o)},b=o=>{l?confirm("You have unsaved changes. Are you sure you want to close?")&&o():o()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:o=>u(o.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(O,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),r&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(r)]}),e.jsx(x,{...a,isOpen:t,onClose:d,onCancel:b})]})};c.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};c.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};var D,j,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var I,T,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(A=(T=g.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,R,q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var M,L,P;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var E,J,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);
  const [result, setResult] = useState<unknown>(null);
  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };
  const handleCancel = (close: () => void) => {
    if (hasUnsavedChanges) {
      const confirmed = confirm('You have unsaved changes. Are you sure you want to close?');
      if (confirmed) {
        close();
      }
      // If not confirmed, don't call close() - dialog stays open
    } else {
      close(); // No changes, close immediately
    }
  };
  return <>
      <div style={{
      marginBottom: '10px'
    }}>
        <label>
          <input type="checkbox" checked={hasUnsavedChanges} onChange={e => setHasUnsavedChanges(e.target.checked)} />{' '}
          Simulate unsaved changes
        </label>
      </div>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && <p style={{
      marginTop: '10px',
      color: '#666'
    }}>
          Last result: {JSON.stringify(result)}
        </p>}
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} onCancel={handleCancel} />
    </>;
}`,...(U=(J=c.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const be=["Default","MultipleActions","NonCancellable","WithCustomActions","WithOnCancelControl"];export{m as Default,g as MultipleActions,h as NonCancellable,f as WithCustomActions,c as WithOnCancelControl,be as __namedExportsOrder,Ce as default};
