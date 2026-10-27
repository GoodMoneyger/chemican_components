import{r as c,j as e}from"./iframe-Dty1CWy9.js";import{B}from"./Button-BRddOA2h.js";import{S as Le}from"./Select-BRuIf1lL.js";import{T as Ee}from"./TextArea-uCk-Ze-0.js";import{T as n}from"./index-DZvw6uEW.js";import{D as w}from"./Dialog-CYNeJhOn.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-CLiFYASU.js";import"./IconChevronDown-1XfRtLh8.js";import"./createReactComponent-BU3VSqll.js";import"./IconSearch-CVLMi6AR.js";import"./index-DfKPvJjd.js";import"./index-ChU-TLl1.js";import"./index-BOAGiJSd.js";import"./index-DdZyYgkP.js";import"./useCompositionGuard-BnomuBZv.js";import"./TextField-CVhz-Iei.js";import"./Popover-BSyvFyOL.js";import"./index-Z4JZa8kH.js";import"./Tag-BcOcZbpt.js";import"./tokens-ClON5slf.js";import"./index-PT4f1lh0.js";const us={title:"Components/Dialog",component:w,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},d=s=>{const[o,a]=c.useState(s.isOpen),[l,r]=c.useState(null),F=T=>{a(!1),r(T),console.log("Dialog closed with value:",T)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),l&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(l)]}),e.jsx(w,{...s,isOpen:o,onClose:F})]})},A=d.bind({});A.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const I=d.bind({});I.args={isOpen:!1,size:"lg",title:"Wide Dialog",children:e.jsxs("div",{className:"gap-xl grid grid-cols-2",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Left column"}),e.jsx("p",{children:"Use the large size for dialogs laid out in columns, which do not read well at the default width."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Right column"}),e.jsx("p",{children:"Both columns keep a comfortable measure at this width."})]})]}),actions:[{label:"Apply",value:!0,intent:"primary"}]};const p=d.bind({});p.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const k=d.bind({});k.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const D=d.bind({});D.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const m=d.bind({});m.args={isOpen:!1,title:"Terms and Conditions",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{marginTop:"16px"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginTop:"16px"},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."}),e.jsx("p",{style:{marginTop:"16px"},children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."}),e.jsx("p",{style:{marginTop:"16px"},children:"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("p",{style:{marginTop:"16px"},children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."})]}),actions:[{label:"Decline",value:"declined",intent:"secondary"},{label:"Accept",value:"accepted",intent:"primary"}]};const g=s=>{const[o,a]=c.useState(s.isOpen),[l,r]=c.useState(!0),[F,T]=c.useState(null),Me=u=>{a(!1),T(u),console.log("Dialog closed with value:",u)},Re=u=>{l?confirm("You have unsaved changes. Are you sure you want to close?")&&u():u()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:u=>r(u.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(B,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),F&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(F)]}),e.jsx(w,{...s,isOpen:o,onClose:Me,onCancel:Re})]})};g.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const h=s=>{const[o,a]=c.useState(s.isOpen),l=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{intent:"secondary",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(w,{...s,isOpen:o,onClose:l,onOpenAutoFocus:r=>r.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(n,{placeholder:"Type to search..."})]})]})})]})};h.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};const i=({note:s,children:o,...a})=>{const[l,r]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(B,{intent:"secondary",onClick:()=>r(!0),children:"Open Modal"}),e.jsx(w,{...a,isOpen:l,onClose:()=>r(!1),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx("p",{className:"text-body-secondary text-sm",children:s}),o]})})]})},t="text-body-primary text-sm font-medium",Pe=["Acetone","Ethanol","Toluene"],x=i.bind({});x.storyName="Auto focus: empty text field";x.args={title:"Add product",note:"The first field is an empty text input, so it takes the focus and you can type immediately.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Product name"}),e.jsx(n,{placeholder:"Product name"})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const f=i.bind({});f.storyName="Auto focus: empty textarea";f.args={title:"Request re-digitization",note:"A textarea counts as a plain text field, so an empty one is focused too.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Comment"}),e.jsx(Ee,{placeholder:"What went wrong?"})]}),actions:[{label:"Send",value:!0,intent:"primary"}]};const O=i.bind({});O.storyName="No auto focus: prefilled field";O.args={title:"Edit product",note:"The first field already has a value, as in every edit dialog, so it is left alone rather than dropping the caret in the middle of the existing text. The dialog holds the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Product name"}),e.jsx(n,{defaultValue:"Acetone 99.5%"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Manufacturer"}),e.jsx(n,{defaultValue:"Example Chemicals"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const v=i.bind({});v.storyName="Auto focus: only field, even prefilled";v.args={title:"Edit product name",note:"A filled field is normally skipped, but when it is the dialog's only field there is nothing else to reach for, so it takes the focus and saves the user a click.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Product name"}),e.jsx(n,{defaultValue:"Acetone 99.5%"})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const y=i.bind({});y.storyName="Auto focus: skips a disabled field";y.args={title:"Add exposure limit",note:"The first field is disabled, so it is not a field the user can act on. The focus goes to the first one they can, which is the empty text field below it.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"CAS number"}),e.jsx(n,{disabled:!0,defaultValue:"67-64-1"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Amount"}),e.jsx(n,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const b=i.bind({});b.storyName="Auto focus: only enabled field, even prefilled";b.args={title:"Edit IP address name",note:"The disabled field does not count towards the dialog's fields, so the prefilled name below it is the only field the user can act on and takes the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"IP address"}),e.jsx(n,{disabled:!0,defaultValue:"192.0.2.1"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Name"}),e.jsx(n,{defaultValue:"Tokyo office"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const S=i.bind({});S.storyName="No auto focus: auto suggest";S.args={title:"Add material",note:"An auto suggest is an input, but focusing it opens its suggestion list. It is skipped even while empty.",children:e.jsx(We,{}),actions:[{label:"Add",value:!0,intent:"primary"}]};const C=i.bind({});C.storyName="No auto focus: select";C.args={title:"Add exposure limit",note:"The first field is a select, which the user cannot type into, so the focus stays on the dialog. Note the text field below it is not focused either: only the FIRST field is considered.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Organization"}),e.jsx(Le,{options:[{value:"acgih",label:"ACGIH"},{value:"jsoh",label:"JSOH"}],placeholder:"Select an organization"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Amount"}),e.jsx(n,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const N=i.bind({});N.storyName="No auto focus: dialog without fields";N.args={title:"Delete SDS",note:"A confirmation dialog has no field to focus, so the dialog itself takes the focus and Escape and Tab keep working.",children:e.jsx("p",{children:"This cannot be undone."}),actions:[{label:"Delete",value:!0,intent:"primary"}]};function We(){const[s,o]=c.useState("");return e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:t,children:"Material name"}),e.jsx(n.AutoSuggest,{value:s,onChange:o,suggestions:Pe,placeholder:"Start typing a material"})]})}const j=d.bind({});var q;j.args={...m.args,actions:(q=p.args)==null?void 0:q.actions,isOpen:!0};j.globals={viewport:{value:"mobile",isRotated:!1}};g.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};h.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var M,R,L;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(L=(R=A.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var E,P,W;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(W=(P=I.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var J,U,_;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
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
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var V,z,H;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
}`,...(H=(z=k.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var Y,Q,G;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(G=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var K,X,Z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,se;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
}`,...(se=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ne,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
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
}`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,le,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`({
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
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var re,ce,ue;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`({
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
}`,...(ue=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`({
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
}`,...(me=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,xe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`({
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
}`,...(xe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,Oe,ve;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`({
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
}`,...(ve=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:ve.source}}};var ye,be,Se;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`({
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
}`,...(Se=(be=b.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ce,Ne,je;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`({
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
}`,...(je=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Ae,Ie,ke;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`({
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
}`,...(ke=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var De,we,Fe;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`({
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
}`,...(Fe=(we=N.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Te,Be,qe;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`args => {
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
}`,...(qe=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:qe.source}}};const ds=["Default","Large","MultipleActions","NonCancellable","WithCustomActions","LongContent","WithOnCancelControl","WithPreventedAutoFocus","AutoFocusEmptyTextField","AutoFocusEmptyTextArea","AutoFocusSkippedWhenPrefilled","AutoFocusOnlyFieldPrefilled","AutoFocusSkipsDisabledField","AutoFocusOnlyEnabledFieldPrefilled","AutoFocusSkippedForAutoSuggest","AutoFocusSkippedForSelect","AutoFocusNoFields","Mobile"];export{f as AutoFocusEmptyTextArea,x as AutoFocusEmptyTextField,N as AutoFocusNoFields,b as AutoFocusOnlyEnabledFieldPrefilled,v as AutoFocusOnlyFieldPrefilled,S as AutoFocusSkippedForAutoSuggest,C as AutoFocusSkippedForSelect,O as AutoFocusSkippedWhenPrefilled,y as AutoFocusSkipsDisabledField,A as Default,I as Large,m as LongContent,j as Mobile,p as MultipleActions,k as NonCancellable,D as WithCustomActions,g as WithOnCancelControl,h as WithPreventedAutoFocus,ds as __namedExportsOrder,us as default};
