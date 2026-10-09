import{e as E,j as r,c as m}from"./iframe-DoX-NEVL.js";import{B as h}from"./Button-BzWu4gE9.js";import{R as O,P,O as j,C as R,T as F}from"./index-CLo2bG-Q.js";const L=new Set(["text","search","email","url","tel","number","password"]),M='input, textarea, select, [role="combobox"], [contenteditable="true"]';function k(e){var n;if(e.hasAttribute("hidden")||e.closest('[aria-hidden="true"]')||e instanceof HTMLInputElement&&e.type==="hidden")return!1;const t=(n=e.ownerDocument.defaultView)==null?void 0:n.getComputedStyle(e);return(t==null?void 0:t.display)!=="none"&&(t==null?void 0:t.visibility)!=="hidden"}function V(e){if(e.getAttribute("aria-disabled")==="true")return!1;const t=e;return!t.disabled&&!t.readOnly}function I(e){const t=e.getAttribute("role");return t!==null&&t!=="textbox"||e.hasAttribute("aria-autocomplete")||e.hasAttribute("aria-haspopup")?!1:e instanceof HTMLTextAreaElement?!0:e instanceof HTMLInputElement?L.has(e.type):!1}function S(e){const t=Array.from(e.querySelectorAll(M)).filter(k).filter(V),n=t[0];return!n||!I(n)||n.value.trim()!==""&&t.length>1?null:n}function H(e){e.preventDefault();const t=e.currentTarget instanceof HTMLElement?e.currentTarget:e.target;if(!(t instanceof HTMLElement))return;const n=S(t);if(!n){t.focus();return}n.focus(),n.value!==""&&n.select()}const _={md:"max-w-screen-sm",lg:"max-w-screen-lg"},B=[{label:"Confirm",value:!0,intent:"primary"}],z=({isOpen:e,onClose:t,onCancel:n=i=>i(),title:c,children:y,busy:f,actions:p=B,cancellable:s=!0,cancelButtonLabel:v="キャンセル",allowClickOutside:x=!0,onOpenAutoFocus:g=H,bodyClassName:b,size:T="md"})=>{const[i,l]=E.useState(-1),u=f!==void 0?f:i!==-1,w=async a=>{const o=p.indexOf(a);if(a.onAction){l(o);const d=await a.onAction(t);if(l(-1),d===!1)return}else l(-1);e&&t(a.value)},A=()=>{n(t)},D=a=>{a.preventDefault(),s&&!u&&x&&n(t)},C=a=>{if(u){a.preventDefault();return}a.preventDefault(),n(t)};return r.jsx(O,{open:e,onOpenChange:t,children:r.jsx(P,{children:r.jsx(j,{className:`bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,children:r.jsxs(R,{"aria-describedby":void 0,onPointerDownOutside:D,onEscapeKeyDown:C,onOpenAutoFocus:g,className:m(`bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,_[T]),children:[r.jsx("header",{className:"px-xl py-lg",children:c&&r.jsx(F,{className:`text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,children:c})}),r.jsx("div",{className:m(`border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-h-[calc(100vh-40px-68px-78px)]
                overflow-hidden overflow-y-auto border-y-1`,b),children:y}),r.jsxs("footer",{className:"px-xl py-md flex justify-between",children:[s&&r.jsx(h,{intent:"tertiary",onClick:A,disabled:u,children:v}),r.jsx("div",{className:`gap-xs flex ${s?"":"ml-auto"}`,children:p.map((a,o)=>{const{label:d,classNames:N,onAction:U,value:X,...q}=a;return r.jsx(h,{loading:i===o,...q,intent:a.intent||"primary",className:N,onClick:()=>w(a),children:d},o)})})]})]})})})})};z.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(close: () => void) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:"(close) => close()",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},busy:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"",defaultValue:{value:`[
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

  const field = findFieldToFocus(root);

  if (!field) {
    // The dialog element is focusable itself (Radix gives it tabIndex -1).
    root.focus();
    return;
  }

  field.focus();

  // Select what is already there, so typing replaces the value rather than
  // appending to it. This is what a rename dialog is for, and it matches
  // the focus behaviour Radix applies by default.
  if (field.value !== '') {
    field.select();
  }
}`,computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Maximum width of the dialog. Use `lg` for content laid out in columns,\nwhich does not read well at the default width.",defaultValue:{value:"'md'",computed:!1}}}};export{z as D};
