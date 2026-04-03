import{e as te,j as e,r as p}from"./iframe-CmH369xt.js";import{B as y}from"./Button-BbhRMEjG.js";import{T as ne}from"./index-DBvFU-xT.js";import{R as oe,P as ae,O as ie,C as le,T as re}from"./index-B0M1hXfv.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-DXzm4xwH.js";import"./TextField-D3Fr9rks.js";import"./Popover-vcTmjV-h.js";import"./index-Dj98T-_u.js";import"./index-CAIod6lv.js";import"./createReactComponent-BwG384Zg.js";import"./Tag-BZmREYfD.js";import"./tokens-ClON5slf.js";const ue=[{label:"Confirm",value:!0,intent:"primary"}],O=({isOpen:o,onClose:t,onCancel:n=b=>b(),title:a,children:l,busy:r,actions:u=ue,cancellable:m=!0,cancelButtonLabel:q="キャンセル",allowClickOutside:i=!0,onOpenAutoFocus:T})=>{const[b,S]=te.useState(-1),j=r!==void 0?r:b!==-1,$=async s=>{const w=u.indexOf(s);if(s.onAction){S(w);const D=await s.onAction(t);if(S(-1),D===!1)return}else S(-1);o&&t(s.value)},G=()=>{n(t)},X=s=>{s.preventDefault(),m&&!j&&i&&n(t)},Z=s=>{if(j){s.preventDefault();return}s.preventDefault(),n(t)};return e.jsx(oe,{open:o,onOpenChange:t,children:e.jsx(ae,{children:e.jsx(ie,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:e.jsxs(le,{"aria-describedby":void 0,onPointerDownOutside:X,onEscapeKeyDown:Z,onOpenAutoFocus:T,className:`bg-surface-primary rounded-lg z-dialog max-w-screen-sm
              min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
              -translate-y-1/2 transform`,children:[e.jsx("header",{className:"px-xl py-lg",children:a&&e.jsx(re,{className:`text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,children:a})}),e.jsx("div",{className:`border-divider-default bg-surface-secondary px-xl pt-md
                pb-xxl text-body-primary max-h-[70vh] flex-1 overflow-hidden
                overflow-y-auto border-y-1`,children:l}),e.jsxs("footer",{className:"px-xl py-md flex flex-shrink-0 justify-between",children:[m&&e.jsx(y,{intent:"tertiary",onClick:G,disabled:j,children:q}),e.jsx("div",{className:`gap-xs flex ${m?"":"ml-auto"}`,children:u.map((s,w)=>{const{label:D,classNames:ee,onAction:de,value:pe,...se}=s;return e.jsx(y,{loading:b===w,...se,intent:s.intent||"primary",className:ee,onClick:()=>$(s),children:D},w)})})]})]})})})})};O.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}},allowClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenAutoFocus:{required:!1,tsType:{name:"ReactComponentProps['onOpenAutoFocus']",raw:`React.ComponentProps<
  typeof RadixDialog.Content
>['onOpenAutoFocus']`},description:""}}};const je={title:"Components/Dialog",component:O,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},C=o=>{const[t,n]=p.useState(o.isOpen),[a,l]=p.useState(null),r=u=>{n(!1),l(u),console.log("Dialog closed with value:",u)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),a&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(a)]}),e.jsx(O,{...o,isOpen:t,onClose:r})]})},g=C.bind({});g.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const h=C.bind({});h.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const f=C.bind({});f.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const v=C.bind({});v.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const x=C.bind({});x.args={isOpen:!1,title:"Terms and Conditions",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{marginTop:"16px"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginTop:"16px"},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."}),e.jsx("p",{style:{marginTop:"16px"},children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."}),e.jsx("p",{style:{marginTop:"16px"},children:"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("p",{style:{marginTop:"16px"},children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."})]}),actions:[{label:"Decline",value:"declined",intent:"secondary"},{label:"Accept",value:"accepted",intent:"primary"}]};const c=o=>{const[t,n]=p.useState(o.isOpen),[a,l]=p.useState(!0),[r,u]=p.useState(null),m=i=>{n(!1),u(i),console.log("Dialog closed with value:",i)},q=i=>{a?confirm("You have unsaved changes. Are you sure you want to close?")&&i():i()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:i=>l(i.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(y,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),r&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(r)]}),e.jsx(O,{...o,isOpen:t,onClose:m,onCancel:q})]})};c.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const d=o=>{const[t,n]=p.useState(o.isOpen),a=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(O,{...o,isOpen:t,onClose:a,onOpenAutoFocus:l=>l.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(ne,{placeholder:"Type to search..."})]})]})})]})};d.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};c.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};d.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var k,N,A;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(A=(N=g.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var I,R,B;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(B=(R=h.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var F,L,M;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,U,_;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(_=(U=v.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var E,J,W;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(W=(J=x.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var V,H,Y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
}`,...(Y=(H=c.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var z,K,Q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const De=["Default","MultipleActions","NonCancellable","WithCustomActions","LongContent","WithOnCancelControl","WithPreventedAutoFocus"];export{g as Default,x as LongContent,h as MultipleActions,f as NonCancellable,v as WithCustomActions,c as WithOnCancelControl,d as WithPreventedAutoFocus,De as __namedExportsOrder,je as default};
