import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as X,r as p}from"./iframe-Dt2BBw78.js";import{B as y}from"./Button-BQnJjIuP.js";import{T as Z}from"./index-C5jmC9Ha.js";import{R as ee,P as se,O as ne,C as te,T as oe}from"./index-BWyAggXO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8PfugGE.js";import"./utils-DoEQ0xaN.js";import"./ProgressIndicator-BK-eSQpX.js";import"./index-D76DQfnm.js";import"./index-mX85hzjs.js";import"./index-C4L3uze5.js";import"./index-BKXoYOJ5.js";import"./TextField-C66pjnd6.js";import"./Popover-nIt4flsU.js";import"./index-DtzecMhN.js";import"./index-CGZOvReu.js";import"./index-BLuzXT3X.js";import"./index-Bwav_egN.js";import"./index-CuQdDx4z.js";import"./index-CrmIfzYy.js";import"./index-3kQ-1d6Q.js";import"./index-Cg7oCmH7.js";import"./index-D8ZaTwDM.js";import"./createReactComponent-C50zSRXJ.js";import"./Tag-DjSak7sZ.js";import"./tokens-ClON5slf.js";const ae=[{label:"Confirm",value:!0,intent:"primary"}],x=({isOpen:o,onClose:n,onCancel:t=O=>O(),title:a,children:r,busy:i,actions:c=ae,cancellable:m=!0,cancelButtonLabel:w="キャンセル",allowClickOutside:l=!0,onOpenAutoFocus:j})=>{const[O,S]=X.useState(-1),D=i!==void 0?i:O!==-1,Y=async s=>{const C=c.indexOf(s);if(s.onAction){S(C);const k=await s.onAction(n);if(S(-1),k===!1)return}else S(-1);o&&n(s.value)},z=()=>{t(n)},K=s=>{s.preventDefault(),m&&!D&&l&&t(n)},$=s=>{if(D){s.preventDefault();return}s.preventDefault(),t(n)};return e.jsx(ee,{open:o,onOpenChange:n,children:e.jsx(se,{children:e.jsx(ne,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:e.jsxs(te,{"aria-describedby":void 0,onPointerDownOutside:K,onEscapeKeyDown:$,onOpenAutoFocus:j,className:`bg-surface-primary rounded-lg z-dialog max-w-screen-sm
              min-w-96 fixed top-1/2 left-1/2 flex max-h-[90vh] w-2/3
              -translate-x-1/2 -translate-y-1/2 transform flex-col
              overflow-auto`,children:[e.jsx("div",{className:`px-xl py-lg flex flex-shrink-0 items-center
                justify-between`,children:a&&e.jsx(oe,{className:`text-xxl text-body-primary font-bold h-4.5 flex
                    items-center`,children:a})}),e.jsx("div",{className:`border-divider-default bg-surface-secondary px-xl pt-md
                pb-xxl text-body-primary flex-1 border-y-1`,children:r}),e.jsxs("div",{className:"px-xl py-md flex flex-shrink-0 justify-between",children:[m&&e.jsx(y,{intent:"tertiary",onClick:z,disabled:D,children:w}),e.jsx("div",{className:`gap-xs flex ${m?"":"ml-auto"}`,children:c.map((s,C)=>{const{label:k,classNames:G,onAction:re,value:ie,...Q}=s;return e.jsx(y,{loading:O===C,...Q,intent:s.intent||"primary",className:G,onClick:()=>Y(s),children:k},C)})})]})]})})})})};x.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}},allowClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenAutoFocus:{required:!1,tsType:{name:"ReactComponentProps['onOpenAutoFocus']",raw:`React.ComponentProps<
  typeof RadixDialog.Content
>['onOpenAutoFocus']`},description:""}}};const Me={title:"Components/Dialog",component:x,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},b=o=>{const[n,t]=p.useState(o.isOpen),[a,r]=p.useState(null),i=c=>{t(!1),r(c),console.log("Dialog closed with value:",c)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{intent:"secondary",onClick:()=>t(!0),children:"Open Modal"}),a&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(a)]}),e.jsx(x,{...o,isOpen:n,onClose:i})]})},g=b.bind({});g.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const h=b.bind({});h.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const f=b.bind({});f.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const v=b.bind({});v.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const u=o=>{const[n,t]=p.useState(o.isOpen),[a,r]=p.useState(!0),[i,c]=p.useState(null),m=l=>{t(!1),c(l),console.log("Dialog closed with value:",l)},w=l=>{a?confirm("You have unsaved changes. Are you sure you want to close?")&&l():l()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:l=>r(l.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(y,{intent:"secondary",onClick:()=>t(!0),children:"Open Modal"}),i&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(i)]}),e.jsx(x,{...o,isOpen:n,onClose:m,onCancel:w})]})};u.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const d=o=>{const[n,t]=p.useState(o.isOpen),a=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{intent:"secondary",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(x,{...o,isOpen:n,onClose:a,onOpenAutoFocus:r=>r.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(Z,{placeholder:"Type to search..."})]})]})})]})};d.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};u.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};d.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var N,A,T;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(T=(A=g.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var I,R,B;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(B=(R=h.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var F,P,M;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(M=(P=f.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var q,L,_;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(_=(L=v.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var W,E,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...(J=(E=u.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var U,V,H;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} onOpenAutoFocus={e => e.preventDefault()}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">
            This dialog uses <code>onOpenAutoFocus</code> to prevent the input
            from being focused when the dialog opens.
          </p>
          <div className="gap-xs flex flex-col">
            <label className="text-body-primary text-sm font-medium">
              Search
            </label>
            <TextField placeholder="Type to search..." />
          </div>
        </div>
      </Dialog>
    </>;
}`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const qe=["Default","MultipleActions","NonCancellable","WithCustomActions","WithOnCancelControl","WithPreventedAutoFocus"];export{g as Default,h as MultipleActions,f as NonCancellable,v as WithCustomActions,u as WithOnCancelControl,d as WithPreventedAutoFocus,qe as __namedExportsOrder,Me as default};
