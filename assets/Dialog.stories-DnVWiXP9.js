import{e as _e,j as e,c as _,r}from"./iframe-sL5ep0tq.js";import{B as S}from"./Button-ac2X6EcJ.js";import{S as Ve}from"./Select-8-8TIeWe.js";import{T as He}from"./TextArea-DHixeeFG.js";import{T as p}from"./index-uYYUuwxp.js";import{R as Ue,P as We,O as Je,C as ze,T as Ye}from"./index-B6KHToZH.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-DdVt2LMC.js";import"./IconChevronDown-DWwd9qw8.js";import"./createReactComponent-BK5acoKq.js";import"./IconSearch-DApcJo2R.js";import"./index-By4MZsl5.js";import"./index-BgNcV4GB.js";import"./index-sk4yiOv5.js";import"./index-CGBkiBva.js";import"./useCompositionGuard-BdOaWCbz.js";import"./TextField-B2QjAR9w.js";import"./Popover-DeEDuoGL.js";import"./index-DQDUpTeZ.js";import"./Tag-B9rZR_wd.js";import"./tokens-ClON5slf.js";const Ke=new Set(["text","search","email","url","tel","number","password"]),Qe='input, textarea, select, [role="combobox"], [contenteditable="true"]';function Ge(t){var n;if(t.hasAttribute("hidden")||t.closest('[aria-hidden="true"]')||t instanceof HTMLInputElement&&t.type==="hidden")return!1;const s=(n=t.ownerDocument.defaultView)==null?void 0:n.getComputedStyle(t);return(s==null?void 0:s.display)!=="none"&&(s==null?void 0:s.visibility)!=="hidden"}function Xe(t){const s=t.getAttribute("role");return s!==null&&s!=="textbox"||t.hasAttribute("aria-autocomplete")||t.hasAttribute("aria-haspopup")?!1:t instanceof HTMLTextAreaElement?!0:t instanceof HTMLInputElement?Ke.has(t.type):!1}function $e(t){const s=Array.from(t.querySelectorAll(Qe)).filter(Ge),n=s[0];return!n||!Xe(n)||n.disabled||n.readOnly||n.value.trim()!==""&&s.length>1?null:n}function Ze(t){t.preventDefault();const s=t.currentTarget instanceof HTMLElement?t.currentTarget:t.target;s instanceof HTMLElement&&($e(s)??s).focus()}const et={md:"max-w-screen-sm",lg:"max-w-screen-lg"},tt=[{label:"Confirm",value:!0,intent:"primary"}],N=({isOpen:t,onClose:s,onCancel:n=F=>F(),title:o,children:l,busy:u,actions:d=tt,cancellable:T=!0,cancelButtonLabel:M="キャンセル",allowClickOutside:i=!0,onOpenAutoFocus:P=Ze,bodyClassName:qe,size:Fe="md"})=>{const[F,R]=_e.useState(-1),L=u!==void 0?u:F!==-1,Be=async a=>{const B=d.indexOf(a);if(a.onAction){R(B);const E=await a.onAction(s);if(R(-1),E===!1)return}else R(-1);t&&s(a.value)},Me=()=>{n(s)},Re=a=>{a.preventDefault(),T&&!L&&i&&n(s)},Le=a=>{if(L){a.preventDefault();return}a.preventDefault(),n(s)};return e.jsx(Ue,{open:t,onOpenChange:s,children:e.jsx(We,{children:e.jsx(Je,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:e.jsxs(ze,{"aria-describedby":void 0,onPointerDownOutside:Re,onEscapeKeyDown:Le,onOpenAutoFocus:P,className:_(`bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,et[Fe]),children:[e.jsx("header",{className:"px-xl py-lg",children:o&&e.jsx(Ye,{className:`text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,children:o})}),e.jsx("div",{className:_(`border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-h-[calc(100vh-40px-68px-78px)]
                overflow-hidden overflow-y-auto border-y-1`,qe),children:l}),e.jsxs("footer",{className:"px-xl py-md flex justify-between",children:[T&&e.jsx(S,{intent:"tertiary",onClick:Me,disabled:L,children:M}),e.jsx("div",{className:`gap-xs flex ${T?"":"ml-auto"}`,children:d.map((a,B)=>{const{label:E,classNames:Ee,onAction:ot,value:lt,...Pe}=a;return e.jsx(S,{loading:F===B,...Pe,intent:a.intent||"primary",className:Ee,onClick:()=>Be(a),children:E},B)})})]})]})})})})};N.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}},allowClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenAutoFocus:{required:!1,tsType:{name:"ReactComponentProps['onOpenAutoFocus']",raw:`React.ComponentProps<
  typeof RadixDialog.Content
>['onOpenAutoFocus']`},description:`Focus handling when the dialog opens. Defaults to focusing the first
field only when it is a plain text input or textarea that is either
empty or the only field, and focusing the dialog itself otherwise. Pass
a handler to override, e.g. \`(e) => e.preventDefault()\` to never move
the focus into the content.`,defaultValue:{value:`function focusFirstTextField(event: Event): void {
  // Take over the default focus handling in every case, so a field that
  // does not qualify is not focused instead.
  event.preventDefault();

  const root =
    event.currentTarget instanceof HTMLElement
      ? event.currentTarget
      : event.target;
  if (!(root instanceof HTMLElement)) return;

  // The dialog element is focusable itself (Radix gives it tabIndex -1).
  (findFieldToFocus(root) ?? root).focus();
}`,computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Maximum width of the dialog. Use `lg` for content laid out in columns,\nwhich does not read well at the default width.",defaultValue:{value:"'md'",computed:!1}}}};const wt={title:"Components/Dialog",component:N,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},A=t=>{const[s,n]=r.useState(t.isOpen),[o,l]=r.useState(null),u=d=>{n(!1),l(d),console.log("Dialog closed with value:",d)};return e.jsxs(e.Fragment,{children:[e.jsx(S,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),o&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(o)]}),e.jsx(N,{...t,isOpen:s,onClose:u})]})},j=A.bind({});j.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const w=A.bind({});w.args={isOpen:!1,size:"lg",title:"Wide Dialog",children:e.jsxs("div",{className:"gap-xl grid grid-cols-2",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Left column"}),e.jsx("p",{children:"Use the large size for dialogs laid out in columns, which do not read well at the default width."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Right column"}),e.jsx("p",{children:"Both columns keep a comfortable measure at this width."})]})]}),actions:[{label:"Apply",value:!0,intent:"primary"}]};const D=A.bind({});D.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const I=A.bind({});I.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const k=A.bind({});k.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const q=A.bind({});q.args={isOpen:!1,title:"Terms and Conditions",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{marginTop:"16px"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginTop:"16px"},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."}),e.jsx("p",{style:{marginTop:"16px"},children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."}),e.jsx("p",{style:{marginTop:"16px"},children:"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("p",{style:{marginTop:"16px"},children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."})]}),actions:[{label:"Decline",value:"declined",intent:"secondary"},{label:"Accept",value:"accepted",intent:"primary"}]};const g=t=>{const[s,n]=r.useState(t.isOpen),[o,l]=r.useState(!0),[u,d]=r.useState(null),T=i=>{n(!1),d(i),console.log("Dialog closed with value:",i)},M=i=>{o?confirm("You have unsaved changes. Are you sure you want to close?")&&i():i()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:i=>l(i.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(S,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),u&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(u)]}),e.jsx(N,{...t,isOpen:s,onClose:T,onCancel:M})]})};g.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const f=t=>{const[s,n]=r.useState(t.isOpen),o=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(S,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(N,{...t,isOpen:s,onClose:o,onOpenAutoFocus:l=>l.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(p,{placeholder:"Type to search..."})]})]})})]})};f.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};const m=({note:t,children:s,...n})=>{const[o,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(S,{intent:"secondary",onClick:()=>l(!0),children:"Open Modal"}),e.jsx(N,{...n,isOpen:o,onClose:()=>l(!1),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx("p",{className:"text-body-secondary text-sm",children:t}),s]})})]})},c="text-body-primary text-sm font-medium",st=["Acetone","Ethanol","Toluene"],h=m.bind({});h.storyName="Auto focus: empty text field";h.args={title:"Add product",note:"The first field is an empty text input, so it takes the focus and you can type immediately.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Product name"}),e.jsx(p,{placeholder:"Product name"})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const x=m.bind({});x.storyName="Auto focus: empty textarea";x.args={title:"Request re-digitization",note:"A textarea counts as a plain text field, so an empty one is focused too.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Comment"}),e.jsx(He,{placeholder:"What went wrong?"})]}),actions:[{label:"Send",value:!0,intent:"primary"}]};const v=m.bind({});v.storyName="No auto focus: prefilled field";v.args={title:"Edit product",note:"The first field already has a value, as in every edit dialog, so it is left alone rather than dropping the caret in the middle of the existing text. The dialog holds the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Product name"}),e.jsx(p,{defaultValue:"Acetone 99.5%"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Manufacturer"}),e.jsx(p,{defaultValue:"Example Chemicals"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const y=m.bind({});y.storyName="Auto focus: only field, even prefilled";y.args={title:"Edit product name",note:"A filled field is normally skipped, but when it is the dialog's only field there is nothing else to reach for, so it takes the focus and saves the user a click.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Product name"}),e.jsx(p,{defaultValue:"Acetone 99.5%"})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const O=m.bind({});O.storyName="No auto focus: auto suggest";O.args={title:"Add material",note:"An auto suggest is an input, but focusing it opens its suggestion list. It is skipped even while empty.",children:e.jsx(nt,{}),actions:[{label:"Add",value:!0,intent:"primary"}]};const b=m.bind({});b.storyName="No auto focus: select";b.args={title:"Add exposure limit",note:"The first field is a select, which the user cannot type into, so the focus stays on the dialog. Note the text field below it is not focused either: only the FIRST field is considered.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Organization"}),e.jsx(Ve,{options:[{value:"acgih",label:"ACGIH"},{value:"jsoh",label:"JSOH"}],placeholder:"Select an organization"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Amount"}),e.jsx(p,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const C=m.bind({});C.storyName="No auto focus: dialog without fields";C.args={title:"Delete SDS",note:"A confirmation dialog has no field to focus, so the dialog itself takes the focus and Escape and Tab keep working.",children:e.jsx("p",{children:"This cannot be undone."}),actions:[{label:"Delete",value:!0,intent:"primary"}]};function nt(){const[t,s]=r.useState("");return e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:c,children:"Material name"}),e.jsx(p.AutoSuggest,{value:t,onChange:s,suggestions:st,placeholder:"Start typing a material"})]})}g.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};f.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var V,H,U;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
}`,...(U=(H=j.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,J,z;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...(z=(J=w.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var Y,K,Q;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var G,X,$;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
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
}`,...($=(X=I.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,ae;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
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
}`,...(ae=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,le,ie;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
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
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var re,ce,ue;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
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
}`,...(ue=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`({
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
}`,...(me=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,fe,he;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`({
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
}`,...(he=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,ve,ye;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`({
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
}`,...(ye=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Oe,be,Ce;y.parameters={...y.parameters,docs:{...(Oe=y.parameters)==null?void 0:Oe.docs,source:{originalSource:`({
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
}`,...(Ce=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Se,Ne,Ae;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`({
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
}`,...(Ae=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Te,je,we;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`({
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
}`,...(we=(je=b.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var De,Ie,ke;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`({
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
}`,...(ke=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};const Dt=["Default","Large","MultipleActions","NonCancellable","WithCustomActions","LongContent","WithOnCancelControl","WithPreventedAutoFocus","AutoFocusEmptyTextField","AutoFocusEmptyTextArea","AutoFocusSkippedWhenPrefilled","AutoFocusOnlyFieldPrefilled","AutoFocusSkippedForAutoSuggest","AutoFocusSkippedForSelect","AutoFocusNoFields"];export{x as AutoFocusEmptyTextArea,h as AutoFocusEmptyTextField,C as AutoFocusNoFields,y as AutoFocusOnlyFieldPrefilled,O as AutoFocusSkippedForAutoSuggest,b as AutoFocusSkippedForSelect,v as AutoFocusSkippedWhenPrefilled,j as Default,w as Large,q as LongContent,D as MultipleActions,I as NonCancellable,k as WithCustomActions,g as WithOnCancelControl,f as WithPreventedAutoFocus,Dt as __namedExportsOrder,wt as default};
