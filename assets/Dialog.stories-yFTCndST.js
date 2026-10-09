import{r as c,j as e}from"./iframe-CmhbSo3O.js";import{B as T}from"./Button-D7H8TWqf.js";import{S as Te}from"./Select-BHBeymUF.js";import{T as qe}from"./TextArea-DGJ_HlhX.js";import{T as n}from"./index-X2Q-G5iR.js";import{D}from"./Dialog-DOH3fyOq.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-IHUmHUQ8.js";import"./IconChevronDown-BkK3KLj9.js";import"./createReactComponent-CsBaePyT.js";import"./IconSearch-DbSYfUCc.js";import"./index-BqKYhYIx.js";import"./index-CIxq7X_O.js";import"./index-CrfFhd-1.js";import"./index-B-YipN-Q.js";import"./useCompositionGuard-BVgO9bUj.js";import"./TextField-D_inb41a.js";import"./Popover-DTJ_PS9E.js";import"./index-C8a-2pS9.js";import"./Tag-mKy4U0AL.js";import"./tokens-ClON5slf.js";import"./index-kTneYO-v.js";const os={title:"Components/Dialog",component:D,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},S=s=>{const[o,a]=c.useState(s.isOpen),[l,r]=c.useState(null),F=w=>{a(!1),r(w),console.log("Dialog closed with value:",w)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),l&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(l)]}),e.jsx(D,{...s,isOpen:o,onClose:F})]})},C=S.bind({});C.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const N=S.bind({});N.args={isOpen:!1,size:"lg",title:"Wide Dialog",children:e.jsxs("div",{className:"gap-xl grid grid-cols-2",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Left column"}),e.jsx("p",{children:"Use the large size for dialogs laid out in columns, which do not read well at the default width."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Right column"}),e.jsx("p",{children:"Both columns keep a comfortable measure at this width."})]})]}),actions:[{label:"Apply",value:!0,intent:"primary"}]};const j=S.bind({});j.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const A=S.bind({});A.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const I=S.bind({});I.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const k=S.bind({});k.args={isOpen:!1,title:"Terms and Conditions",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{marginTop:"16px"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginTop:"16px"},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."}),e.jsx("p",{style:{marginTop:"16px"},children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."}),e.jsx("p",{style:{marginTop:"16px"},children:"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("p",{style:{marginTop:"16px"},children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."})]}),actions:[{label:"Decline",value:"declined",intent:"secondary"},{label:"Accept",value:"accepted",intent:"primary"}]};const d=s=>{const[o,a]=c.useState(s.isOpen),[l,r]=c.useState(!0),[F,w]=c.useState(null),Fe=u=>{a(!1),w(u),console.log("Dialog closed with value:",u)},we=u=>{l?confirm("You have unsaved changes. Are you sure you want to close?")&&u():u()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:u=>r(u.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(T,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),F&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(F)]}),e.jsx(D,{...s,isOpen:o,onClose:Fe,onCancel:we})]})};d.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const p=s=>{const[o,a]=c.useState(s.isOpen),l=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(D,{...s,isOpen:o,onClose:l,onOpenAutoFocus:r=>r.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(n,{placeholder:"Type to search..."})]})]})})]})};p.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};const i=({note:s,children:o,...a})=>{const[l,r]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(T,{intent:"secondary",onClick:()=>r(!0),children:"Open Modal"}),e.jsx(D,{...a,isOpen:l,onClose:()=>r(!1),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx("p",{className:"text-body-secondary text-sm",children:s}),o]})})]})},t="text-body-primary text-sm font-medium",Be=["Acetone","Ethanol","Toluene"],m=i.bind({});m.storyName="Auto focus: empty text field";m.args={title:"Add product",note:"The first field is an empty text input, so it takes the focus and you can type immediately.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Product name"}),e.jsx(n,{placeholder:"Product name"})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const g=i.bind({});g.storyName="Auto focus: empty textarea";g.args={title:"Request re-digitization",note:"A textarea counts as a plain text field, so an empty one is focused too.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Comment"}),e.jsx(qe,{placeholder:"What went wrong?"})]}),actions:[{label:"Send",value:!0,intent:"primary"}]};const h=i.bind({});h.storyName="No auto focus: prefilled field";h.args={title:"Edit product",note:"The first field already has a value, as in every edit dialog, so it is left alone rather than dropping the caret in the middle of the existing text. The dialog holds the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Product name"}),e.jsx(n,{defaultValue:"Acetone 99.5%"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Manufacturer"}),e.jsx(n,{defaultValue:"Example Chemicals"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const x=i.bind({});x.storyName="Auto focus: only field, even prefilled";x.args={title:"Edit product name",note:"A filled field is normally skipped, but when it is the dialog's only field there is nothing else to reach for, so it takes the focus and saves the user a click.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Product name"}),e.jsx(n,{defaultValue:"Acetone 99.5%"})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const f=i.bind({});f.storyName="Auto focus: skips a disabled field";f.args={title:"Add exposure limit",note:"The first field is disabled, so it is not a field the user can act on. The focus goes to the first one they can, which is the empty text field below it.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"CAS number"}),e.jsx(n,{disabled:!0,defaultValue:"67-64-1"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Amount"}),e.jsx(n,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const O=i.bind({});O.storyName="Auto focus: only enabled field, even prefilled";O.args={title:"Edit IP address name",note:"The disabled field does not count towards the dialog's fields, so the prefilled name below it is the only field the user can act on and takes the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"IP address"}),e.jsx(n,{disabled:!0,defaultValue:"192.0.2.1"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Name"}),e.jsx(n,{defaultValue:"Tokyo office"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const v=i.bind({});v.storyName="No auto focus: auto suggest";v.args={title:"Add material",note:"An auto suggest is an input, but focusing it opens its suggestion list. It is skipped even while empty.",children:e.jsx(Me,{}),actions:[{label:"Add",value:!0,intent:"primary"}]};const y=i.bind({});y.storyName="No auto focus: select";y.args={title:"Add exposure limit",note:"The first field is a select, which the user cannot type into, so the focus stays on the dialog. Note the text field below it is not focused either: only the FIRST field is considered.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Organization"}),e.jsx(Te,{options:[{value:"acgih",label:"ACGIH"},{value:"jsoh",label:"JSOH"}],placeholder:"Select an organization"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Amount"}),e.jsx(n,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const b=i.bind({});b.storyName="No auto focus: dialog without fields";b.args={title:"Delete SDS",note:"A confirmation dialog has no field to focus, so the dialog itself takes the focus and Escape and Tab keep working.",children:e.jsx("p",{children:"This cannot be undone."}),actions:[{label:"Delete",value:!0,intent:"primary"}]};function Me(){const[s,o]=c.useState("");return e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Material name"}),e.jsx(n.AutoSuggest,{value:s,onChange:o,suggestions:Be,placeholder:"Start typing a material"})]})}d.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};p.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var q,B,M;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(M=(B=C.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,E,L;N.parameters={...N.parameters,docs:{...(R=N.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
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
}`,...(L=(E=N.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,W,J;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(J=(W=j.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var U,_,V;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(V=(_=A.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var z,H,Y;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(Y=(H=I.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var Q,G,K;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(K=(G=k.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Z,$;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,te;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
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
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,ae,oe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(oe=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,ie,re;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(re=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,ue,de;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(de=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,ge;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(ge=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,xe,fe;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(fe=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Oe,ve,ye;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(ye=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,Se,Ce;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(Ce=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Ne,je,Ae;y.parameters={...y.parameters,docs:{...(Ne=y.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(Ae=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Ie,ke,De;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`({
  note,
  children,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">{note}</p>
          {children}
        </div>
      </Dialog>
    </>;
}`,...(De=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};const ls=["Default","Large","MultipleActions","NonCancellable","WithCustomActions","LongContent","WithOnCancelControl","WithPreventedAutoFocus","AutoFocusEmptyTextField","AutoFocusEmptyTextArea","AutoFocusSkippedWhenPrefilled","AutoFocusOnlyFieldPrefilled","AutoFocusSkipsDisabledField","AutoFocusOnlyEnabledFieldPrefilled","AutoFocusSkippedForAutoSuggest","AutoFocusSkippedForSelect","AutoFocusNoFields"];export{g as AutoFocusEmptyTextArea,m as AutoFocusEmptyTextField,b as AutoFocusNoFields,O as AutoFocusOnlyEnabledFieldPrefilled,x as AutoFocusOnlyFieldPrefilled,v as AutoFocusSkippedForAutoSuggest,y as AutoFocusSkippedForSelect,h as AutoFocusSkippedWhenPrefilled,f as AutoFocusSkipsDisabledField,C as Default,N as Large,k as LongContent,j as MultipleActions,A as NonCancellable,I as WithCustomActions,d as WithOnCancelControl,p as WithPreventedAutoFocus,ls as __namedExportsOrder,os as default};
