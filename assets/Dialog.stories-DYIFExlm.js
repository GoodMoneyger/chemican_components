import{e as Ke,j as e,c as H,r as d}from"./iframe-BiTGkfip.js";import{B as A}from"./Button-1gz90F7m.js";import{S as Qe}from"./Select-Dqzh1OF4.js";import{T as Ge}from"./TextArea-BgiDr8_3.js";import{T as i}from"./index-E_0lpU2d.js";import{R as Xe,P as $e,O as Ze,C as es,T as ss}from"./index-T5Ltee_0.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-DbkU6sI1.js";import"./IconChevronDown-CAADH5x-.js";import"./createReactComponent-DsTilhpp.js";import"./IconSearch-CLKXbvLU.js";import"./index-BK2VWmEe.js";import"./index-DdsZgrSh.js";import"./index-Bf6jGUhQ.js";import"./index-AxaEGHTO.js";import"./useCompositionGuard-CMYIPOVD.js";import"./TextField-BHNjLRf5.js";import"./Popover-CdDM7_id.js";import"./index-gnj9qsgA.js";import"./Tag-qgaZzzA1.js";import"./tokens-ClON5slf.js";const ts=new Set(["text","search","email","url","tel","number","password"]),ns='input, textarea, select, [role="combobox"], [contenteditable="true"]';function as(s){var n;if(s.hasAttribute("hidden")||s.closest('[aria-hidden="true"]')||s instanceof HTMLInputElement&&s.type==="hidden")return!1;const t=(n=s.ownerDocument.defaultView)==null?void 0:n.getComputedStyle(s);return(t==null?void 0:t.display)!=="none"&&(t==null?void 0:t.visibility)!=="hidden"}function os(s){if(s.getAttribute("aria-disabled")==="true")return!1;const t=s;return!t.disabled&&!t.readOnly}function ls(s){const t=s.getAttribute("role");return t!==null&&t!=="textbox"||s.hasAttribute("aria-autocomplete")||s.hasAttribute("aria-haspopup")?!1:s instanceof HTMLTextAreaElement?!0:s instanceof HTMLInputElement?ts.has(s.type):!1}function is(s){const t=Array.from(s.querySelectorAll(ns)).filter(as).filter(os),n=t[0];return!n||!ls(n)||n.value.trim()!==""&&t.length>1?null:n}function rs(s){s.preventDefault();const t=s.currentTarget instanceof HTMLElement?s.currentTarget:s.target;t instanceof HTMLElement&&(is(t)??t).focus()}const cs={md:"max-w-screen-sm",lg:"max-w-screen-lg"},us=[{label:"Confirm",value:!0,intent:"primary"}],j=({isOpen:s,onClose:t,onCancel:n=M=>M(),title:o,children:r,busy:p,actions:m=us,cancellable:w=!0,cancelButtonLabel:R="キャンセル",allowClickOutside:c=!0,onOpenAutoFocus:_=rs,bodyClassName:Ve,size:_e="md"})=>{const[M,L]=Ke.useState(-1),P=p!==void 0?p:M!==-1,He=async a=>{const E=m.indexOf(a);if(a.onAction){L(E);const V=await a.onAction(t);if(L(-1),V===!1)return}else L(-1);s&&t(a.value)},Ue=()=>{n(t)},We=a=>{a.preventDefault(),w&&!P&&c&&n(t)},Je=a=>{if(P){a.preventDefault();return}a.preventDefault(),n(t)};return e.jsx(Xe,{open:s,onOpenChange:t,children:e.jsx($e,{children:e.jsx(Ze,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:e.jsxs(es,{"aria-describedby":void 0,onPointerDownOutside:We,onEscapeKeyDown:Je,onOpenAutoFocus:_,className:H(`bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,cs[_e]),children:[e.jsx("header",{className:"px-xl py-lg",children:o&&e.jsx(ss,{className:`text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,children:o})}),e.jsx("div",{className:H(`border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-h-[calc(100vh-40px-68px-78px)]
                overflow-hidden overflow-y-auto border-y-1`,Ve),children:r}),e.jsxs("footer",{className:"px-xl py-md flex justify-between",children:[w&&e.jsx(A,{intent:"tertiary",onClick:Ue,disabled:P,children:R}),e.jsx("div",{className:`gap-xs flex ${w?"":"ml-auto"}`,children:m.map((a,E)=>{const{label:V,classNames:ze,onAction:fs,value:gs,...Ye}=a;return e.jsx(A,{loading:M===E,...Ye,intent:a.intent||"primary",className:ze,onClick:()=>He(a),children:V},E)})})]})]})})})})};j.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
]`,computed:!1}},cancellable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'キャンセル'",computed:!1}},allowClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenAutoFocus:{required:!1,tsType:{name:"ReactComponentProps['onOpenAutoFocus']",raw:`React.ComponentProps<
  typeof RadixDialog.Content
>['onOpenAutoFocus']`},description:`Focus handling when the dialog opens. Defaults to focusing the first
field the user can act on, and only when it is a plain text input or
textarea that is either empty or the only such field. Disabled and read
only controls are ignored. Pass a handler to override, e.g.
\`(e) => e.preventDefault()\` to never move the focus into the content.`,defaultValue:{value:`function focusFirstTextField(event: Event): void {
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
}`,computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Maximum width of the dialog. Use `lg` for content laid out in columns,\nwhich does not read well at the default width.",defaultValue:{value:"'md'",computed:!1}}}};const Rs={title:"Components/Dialog",component:j,parameters:{radixDocs:{primitive:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog"}}},T=s=>{const[t,n]=d.useState(s.isOpen),[o,r]=d.useState(null),p=m=>{n(!1),r(m),console.log("Dialog closed with value:",m)};return e.jsxs(e.Fragment,{children:[e.jsx(A,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),o&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(o)]}),e.jsx(j,{...s,isOpen:t,onClose:p})]})},D=T.bind({});D.args={isOpen:!1,title:"Confirmation Dialog",children:"Are you sure you want to proceed with this action?",actions:[{label:"Confirm",value:!0,intent:"primary"}]};const I=T.bind({});I.args={isOpen:!1,size:"lg",title:"Wide Dialog",children:e.jsxs("div",{className:"gap-xl grid grid-cols-2",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Left column"}),e.jsx("p",{children:"Use the large size for dialogs laid out in columns, which do not read well at the default width."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"pb-xs font-bold",children:"Right column"}),e.jsx("p",{children:"Both columns keep a comfortable measure at this width."})]})]}),actions:[{label:"Apply",value:!0,intent:"primary"}]};const k=T.bind({});k.args={isOpen:!1,title:"Save Document",children:"Choose how you want to save your document.",actions:[{label:"Save as Draft",value:"draft",intent:"secondary"},{label:"Publish",value:"publish",intent:"primary"}]};const F=T.bind({});F.args={isOpen:!1,title:"Required Action",children:"You must choose one of the following options to continue.",cancellable:!1,actions:[{label:"Option A",value:"optionA",intent:"secondary"},{label:"Option B",value:"optionB",intent:"primary"}]};const q=T.bind({});q.args={isOpen:!1,title:"Custom Actions",children:"This dialog demonstrates custom action handlers.",actions:[{label:"Log Info",value:"info",intent:"tertiary",onAction:()=>console.log("Info action triggered")},{label:"Delete",value:"delete",intent:"text",onAction:()=>console.log("Delete action triggered"),classNames:"text-red-600 hover:bg-red-50"},{label:"Save",value:"save",intent:"primary",onAction:()=>console.log("Save action triggered")}]};const B=T.bind({});B.args={isOpen:!1,title:"Terms and Conditions",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{marginTop:"16px"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginTop:"16px"},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."}),e.jsx("p",{style:{marginTop:"16px"},children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."}),e.jsx("p",{style:{marginTop:"16px"},children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."}),e.jsx("p",{style:{marginTop:"16px"},children:"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("p",{style:{marginTop:"16px"},children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."})]}),actions:[{label:"Decline",value:"declined",intent:"secondary"},{label:"Accept",value:"accepted",intent:"primary"}]};const f=s=>{const[t,n]=d.useState(s.isOpen),[o,r]=d.useState(!0),[p,m]=d.useState(null),w=c=>{n(!1),m(c),console.log("Dialog closed with value:",c)},R=c=>{o?confirm("You have unsaved changes. Are you sure you want to close?")&&c():c()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:c=>r(c.target.checked)})," ","Simulate unsaved changes"]})}),e.jsx(A,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),p&&e.jsxs("p",{style:{marginTop:"10px",color:"#666"},children:["Last result: ",JSON.stringify(p)]}),e.jsx(j,{...s,isOpen:t,onClose:w,onCancel:R})]})};f.args={isOpen:!1,title:"Edit Form",children:"This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.",actions:[{label:"Save",value:"saved",intent:"primary"}]};const g=s=>{const[t,n]=d.useState(s.isOpen),o=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(A,{intent:"secondary",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(j,{...s,isOpen:t,onClose:o,onOpenAutoFocus:r=>r.preventDefault(),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("p",{className:"text-body-secondary text-sm",children:["This dialog uses ",e.jsx("code",{children:"onOpenAutoFocus"})," to prevent the input from being focused when the dialog opens."]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:"text-body-primary text-sm font-medium",children:"Search"}),e.jsx(i,{placeholder:"Type to search..."})]})]})})]})};g.args={isOpen:!1,title:"Search Dialog",actions:[{label:"Search",value:!0,intent:"primary"}]};const u=({note:s,children:t,...n})=>{const[o,r]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(A,{intent:"secondary",onClick:()=>r(!0),children:"Open Modal"}),e.jsx(j,{...n,isOpen:o,onClose:()=>r(!1),children:e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx("p",{className:"text-body-secondary text-sm",children:s}),t]})})]})},l="text-body-primary text-sm font-medium",ds=["Acetone","Ethanol","Toluene"],h=u.bind({});h.storyName="Auto focus: empty text field";h.args={title:"Add product",note:"The first field is an empty text input, so it takes the focus and you can type immediately.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Product name"}),e.jsx(i,{placeholder:"Product name"})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const x=u.bind({});x.storyName="Auto focus: empty textarea";x.args={title:"Request re-digitization",note:"A textarea counts as a plain text field, so an empty one is focused too.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Comment"}),e.jsx(Ge,{placeholder:"What went wrong?"})]}),actions:[{label:"Send",value:!0,intent:"primary"}]};const v=u.bind({});v.storyName="No auto focus: prefilled field";v.args={title:"Edit product",note:"The first field already has a value, as in every edit dialog, so it is left alone rather than dropping the caret in the middle of the existing text. The dialog holds the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Product name"}),e.jsx(i,{defaultValue:"Acetone 99.5%"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Manufacturer"}),e.jsx(i,{defaultValue:"Example Chemicals"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const y=u.bind({});y.storyName="Auto focus: only field, even prefilled";y.args={title:"Edit product name",note:"A filled field is normally skipped, but when it is the dialog's only field there is nothing else to reach for, so it takes the focus and saves the user a click.",children:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Product name"}),e.jsx(i,{defaultValue:"Acetone 99.5%"})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const O=u.bind({});O.storyName="Auto focus: skips a disabled field";O.args={title:"Add exposure limit",note:"The first field is disabled, so it is not a field the user can act on. The focus goes to the first one they can, which is the empty text field below it.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"CAS number"}),e.jsx(i,{disabled:!0,defaultValue:"67-64-1"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Amount"}),e.jsx(i,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const b=u.bind({});b.storyName="Auto focus: only enabled field, even prefilled";b.args={title:"Edit IP address name",note:"The disabled field does not count towards the dialog's fields, so the prefilled name below it is the only field the user can act on and takes the focus.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"IP address"}),e.jsx(i,{disabled:!0,defaultValue:"192.0.2.1"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Name"}),e.jsx(i,{defaultValue:"Tokyo office"})]})]}),actions:[{label:"Save",value:!0,intent:"primary"}]};const C=u.bind({});C.storyName="No auto focus: auto suggest";C.args={title:"Add material",note:"An auto suggest is an input, but focusing it opens its suggestion list. It is skipped even while empty.",children:e.jsx(ps,{}),actions:[{label:"Add",value:!0,intent:"primary"}]};const S=u.bind({});S.storyName="No auto focus: select";S.args={title:"Add exposure limit",note:"The first field is a select, which the user cannot type into, so the focus stays on the dialog. Note the text field below it is not focused either: only the FIRST field is considered.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Organization"}),e.jsx(Qe,{options:[{value:"acgih",label:"ACGIH"},{value:"jsoh",label:"JSOH"}],placeholder:"Select an organization"})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Amount"}),e.jsx(i,{placeholder:"Amount"})]})]}),actions:[{label:"Add",value:!0,intent:"primary"}]};const N=u.bind({});N.storyName="No auto focus: dialog without fields";N.args={title:"Delete SDS",note:"A confirmation dialog has no field to focus, so the dialog itself takes the focus and Escape and Tab keep working.",children:e.jsx("p",{children:"This cannot be undone."}),actions:[{label:"Delete",value:!0,intent:"primary"}]};function ps(){const[s,t]=d.useState("");return e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("label",{className:l,children:"Material name"}),e.jsx(i.AutoSuggest,{value:s,onChange:t,suggestions:ds,placeholder:"Start typing a material"})]})}f.__docgenInfo={description:"",methods:[],displayName:"WithOnCancelControl"};g.__docgenInfo={description:"",methods:[],displayName:"WithPreventedAutoFocus"};var U,W,J;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(J=(W=D.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var z,Y,K;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(K=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,G,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(X=(G=k.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var $,Z,ee;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
}`,...(ee=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,ne;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
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
}`,...(ne=(te=q.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,le;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
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
}`,...(le=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,re,ce;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
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
}`,...(ce=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ue,de,pe;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
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
}`,...(pe=(de=g.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,fe,ge;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`({
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
}`,...(ge=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,xe,ve;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`({
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
}`,...(ve=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ye,Oe,be;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`({
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
}`,...(be=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};var Ce,Se,Ne;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`({
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
}`,...(Ne=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ae,je,Te;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`({
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
}`,...(Te=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var we,De,Ie;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`({
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
}`,...(Ie=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var ke,Fe,qe;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`({
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
}`,...(qe=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Be,Me,Ee;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`({
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
}`,...(Ee=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var Re,Le,Pe;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`({
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
}`,...(Pe=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};const Ls=["Default","Large","MultipleActions","NonCancellable","WithCustomActions","LongContent","WithOnCancelControl","WithPreventedAutoFocus","AutoFocusEmptyTextField","AutoFocusEmptyTextArea","AutoFocusSkippedWhenPrefilled","AutoFocusOnlyFieldPrefilled","AutoFocusSkipsDisabledField","AutoFocusOnlyEnabledFieldPrefilled","AutoFocusSkippedForAutoSuggest","AutoFocusSkippedForSelect","AutoFocusNoFields"];export{x as AutoFocusEmptyTextArea,h as AutoFocusEmptyTextField,N as AutoFocusNoFields,b as AutoFocusOnlyEnabledFieldPrefilled,y as AutoFocusOnlyFieldPrefilled,C as AutoFocusSkippedForAutoSuggest,S as AutoFocusSkippedForSelect,v as AutoFocusSkippedWhenPrefilled,O as AutoFocusSkipsDisabledField,D as Default,I as Large,B as LongContent,k as MultipleActions,F as NonCancellable,q as WithCustomActions,f as WithOnCancelControl,g as WithPreventedAutoFocus,Ls as __namedExportsOrder,Rs as default};
