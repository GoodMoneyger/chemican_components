import{e as ue,j as e,c as N,r as p}from"./iframe-DBfe7RgA.js";import{B as C}from"./Button-BIHeIdQL.js";import{T as ce}from"./index-N0kYQZe6.js";import{R as de,P as pe,O as me,C as ge,T as he}from"./index-DWpOgD_H.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-CqoIK3cR.js";import"./TextField-BHAv916D.js";import"./useCompositionGuard-DwAccjQn.js";import"./Popover-Bd5zuLfk.js";import"./index-BStT6n4_.js";import"./index-CSO6MHWT.js";import"./createReactComponent-CDLrL93k.js";import"./Tag-EYmVa6s6.js";import"./tokens-ClON5slf.js";const fe={md:"max-w-screen-sm",lg:"max-w-screen-lg"},ve=[{label:"Confirm",value:!0,intent:"primary"}],b=({isOpen:a,onClose:t,onCancel:n=w=>w(),title:o,children:l,busy:r,actions:u=ve,cancellable:g=!0,cancelButtonLabel:S="キャンセル",allowClickOutside:i=!0,onOpenAutoFocus:k,bodyClassName:se,size:te="md"})=>{const[w,j]=ue.useState(-1),D=r!==void 0?r:w!==-1,ne=async s=>{const q=u.indexOf(s);if(s.onAction){j(q);const T=await s.onAction(t);if(j(-1),T===!1)return}else j(-1);a&&t(s.value)},ae=()=>{n(t)},oe=s=>{s.preventDefault(),g&&!D&&i&&n(t)},ie=s=>{if(D){s.preventDefault();return}s.preventDefault(),n(t)};return e.jsx(de,{open:a,onOpenChange:t,children:e.jsx(pe,{children:e.jsx(me,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:e.jsxs(ge,{"aria-describedby":void 0,onPointerDownOutside:oe,onEscapeKeyDown:ie,onOpenAutoFocus:k,className:N(`bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,fe[te]),children:[e.jsx("header",{className:"px-xl py-lg",children:o&&e.jsx(he,{className:`text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,children:o})}),e.jsx("div",{className:N(`border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-h-[calc(100vh-40px-68px-78px)]
                overflow-hidden overflow-y-auto border-y-1`,se),children:l}),e.jsxs("footer",{className:"px-xl py-md flex justify-between",children:[g&&e.jsx(C,{intent:"tertiary",onClick:ae,disabled:D,children:S}),e.jsx("div",{className:`gap-xs flex ${g?"":"ml-auto"}`,children:u.map((s,q)=>{const{label:T,classNames:le,onAction:ye,value:Oe,...re}=s;return e.jsx(C,{loading:w===q,...re,intent:s.intent||"primary",className:le,onClick:()=>ne(s),children:T},q)})})]})]})})})})};b.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}},allowClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenAutoFocus:{required:!1,tsType:{name:"ReactComponentProps['onOpenAutoFocus']",raw:`React.ComponentProps<
  typeof RadixDialog.Content
>['onOpenAutoFocus']`},description:""},bodyClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Maximum width of the dialog. Use `lg` for content laid out in columns,\nwhich does not read well at the default width.",defaultValue:{value:"'md'",computed:!1}}}};const Le={title:"Components/Dialog",component:b,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},m=a=>{const[t,n]=p.useState(a.isOpen),[o,l]=p.useState(null),r=u=>{n(!1),l(u),console.log("Dialog closed with value:",u)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),o&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(o)]}),e.jsx(b,{...a,isOpen:t,onClose:r})]})},h=m.bind({});h.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const f=m.bind({});f.args={isOpen:!1,size:"lg",title:"Wide Dialog",children:e.jsxs("div",{className:"gap-xl grid grid-cols-2",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Left column"}),e.jsx("p",{children:"Use the large size for dialogs laid out in columns, which do not read well at the default width."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Right column"}),e.jsx("p",{children:"Both columns keep a comfortable measure at this width."})]})]}),actions:[{label:"Apply",value:!0,intent:"primary"}]};const v=m.bind({});v.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const x=m.bind({});x.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const y=m.bind({});y.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const O=m.bind({});O.args={isOpen:!1,title:"Terms and Conditions",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{marginTop:"16px"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginTop:"16px"},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."}),e.jsx("p",{style:{marginTop:"16px"},children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."}),e.jsx("p",{style:{marginTop:"16px"},children:"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("p",{style:{marginTop:"16px"},children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."})]}),actions:[{label:"Decline",value:"declined",intent:"secondary"},{label:"Accept",value:"accepted",intent:"primary"}]};const c=a=>{const[t,n]=p.useState(a.isOpen),[o,l]=p.useState(!0),[r,u]=p.useState(null),g=i=>{n(!1),u(i),console.log("Dialog closed with value:",i)},S=i=>{o?confirm("You have unsaved changes. Are you sure you want to close?")&&i():i()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:i=>l(i.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(C,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),r&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(r)]}),e.jsx(b,{...a,isOpen:t,onClose:g,onCancel:S})]})};c.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const d=a=>{const[t,n]=p.useState(a.isOpen),o=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(b,{...a,isOpen:t,onClose:o,onOpenAutoFocus:l=>l.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(ce,{placeholder:"Type to search..."})]})]})})]})};d.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};c.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};d.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var A,I,R;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
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
}`,...(R=(I=h.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var B,L,F;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(F=(L=f.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var M,P,U;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(U=(P=v.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var J,W,_;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
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
}`,...(_=(W=x.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,z,V;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(V=(z=y.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,Y,K;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
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
}`,...(K=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,$,G;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(G=($=c.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var X,Z,ee;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Fe=["Default","Large","MultipleActions","NonCancellable","WithCustomActions","LongContent","WithOnCancelControl","WithPreventedAutoFocus"];export{h as Default,f as Large,O as LongContent,v as MultipleActions,x as NonCancellable,y as WithCustomActions,c as WithOnCancelControl,d as WithPreventedAutoFocus,Fe as __namedExportsOrder,Le as default};
