import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as O}from"./iframe-9Hncxsb8.js";import{c as g}from"./index-DpPH1Yfi.js";import{S as N}from"./Spinner-DIHwb7hD.js";import{c as a,r as o}from"./utils-024pnGpB.js";import{S as w}from"./index-wYtlL844.js";const p=g(`gap-xxs rounded font-medium box-border inline-flex cursor-pointer
  items-center justify-center border border-transparent decoration-1
  focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed
  disabled:no-underline`,{variants:{intent:{primary:`bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-interactive-disabled`,secondary:`bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active disabled:bg-interactive-disabled
        disabled:text-interactive-disabled
        enabled:border-interactive-primary-default border`,tertiary:`bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-default disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border`,text:`text-interactive-primary-default
        hover:text-interactive-primary-hover hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-transparent`},danger:{true:"focus-visible:ring-interactive-alert-focused",false:"focus-visible:ring-interactive-focused"},size:{icon:"",xs:"px-sm h-8 min-w-15 text-sm",sm:"px-md h-10 min-w-20",md:"min-w-24 h-[2.875rem]",lg:"h-14 min-w-34 text-lg",xl:"h-17 min-w-43 text-xl"},iconOnly:{true:"min-w-0 p-0! aspect-square h-auto"},textOnly:{true:""}},compoundVariants:[{iconOnly:!0,intent:"text",class:"text-shape-interactive-primary-default"},{textOnly:!0,size:"md",class:"px-lg"},{textOnly:!0,size:"lg",class:"px-xl"},{iconOnly:!1,size:"md",class:"px-lg"},{iconOnly:!1,size:"lg",class:"px-xl"},{iconOnly:!1,size:"icon",class:"px-sm h-8 min-w-15 text-sm"},{iconOnly:!0,size:"icon",class:"p-0"},{iconOnly:!0,size:"xs",class:"size-8"},{iconOnly:!0,size:"sm",class:"size-10"},{iconOnly:!0,size:"md",class:"size-[2.875rem]"},{iconOnly:!0,size:"lg",class:"size-14"},{iconOnly:!0,size:"xl",class:"size-17"},{intent:"primary",danger:!0,class:`bg-interactive-alert-default hover:bg-interactive-alert-hover
        active:bg-interactive-alert-active`},{intent:"secondary",danger:!0,class:`bg-interactive-neutral-default text-interactive-alert-default
        hover:bg-interactive-neutral-alert-active
        active:bg-interactive-neutral-alert-active
        enabled:border-interactive-alert-default`},{intent:"tertiary",danger:!0,class:`text-interactive-alert-default
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active border-none`},{intent:"text",danger:!0,class:`text-interactive-alert-default
        hover:text-interactive-alert-hover
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active
        active:text-interactive-alert-active`}],defaultVariants:{intent:"primary",size:"md"}}),d=g("",{variants:{text:{true:""},iconOnly:{true:""},size:{icon:"size-4",xs:"size-4",sm:"size-5",md:"size-5",lg:"size-6",xl:"size-7"}},defaultVariants:{size:"md"}}),h=O.forwardRef(({intent:e,size:t,className:v,icon:i,trailingIcon:r,asChild:z=!1,loading:y=!1,danger:u=!1,children:l,...c},m)=>{const b=z?w:"button",s=!!((i||r)&&!l&&!(i&&r)),x=!!(l&&!i&&!r),f=y||c.disabled;return y?n.jsxs(b,{ref:m,className:a(p({intent:e,size:t,iconOnly:s,textOnly:x,danger:u}),"relative",v),...c,disabled:f,children:[n.jsxs("span",{className:"gap-xxs invisible flex items-center",children:[o(i,{className:a(d({size:t,iconOnly:s,text:e==="text"}))}),l,o(r,{className:a(d({size:t,iconOnly:s,text:e==="text"}))})]}),n.jsx("span",{className:"inset-0 absolute flex items-center justify-center",children:n.jsx(N,{size:"sm",layout:"row"})})]}):i||r?n.jsxs(b,{ref:m,className:a(p({intent:e,size:t,iconOnly:s,textOnly:x,danger:u}),v),...c,disabled:f,children:[o(i,{className:a(d({size:t,iconOnly:s,text:e==="text"}))}),l,o(r,{className:a(d({size:t,iconOnly:s,text:e==="text"}))})]}):n.jsx(b,{ref:m,className:a(p({intent:e,size:t,textOnly:x,danger:u}),v),children:l,...c,disabled:f})});h.displayName="Button";h.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:""},trailingIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{h as B};
