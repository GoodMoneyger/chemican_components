import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as z}from"./iframe--ywS61NI.js";import{c as g}from"./index-VFRA1EAd.js";import{S as O}from"./Spinner-B1eY72sB.js";import{c as s,r as x}from"./utils-zRovIat4.js";import{S as w}from"./index-C1YEi2Ea.js";const b=g(`gap-xxs rounded font-medium box-border inline-flex cursor-pointer
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
        disabled:text-interactive-disabled border`,ghost:`text-interactive-primary-default
        hover:text-interactive-primary-hover hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled`},danger:{true:"focus-visible:ring-interactive-alert-focused",false:"focus-visible:ring-interactive-focused"},size:{xs:"px-sm h-8 min-w-15 text-sm",sm:"px-md h-10 min-w-20",md:"min-w-24 h-[2.875rem]",lg:"h-14 min-w-34 text-lg",xl:"h-17 min-w-43 text-xl"},iconOnly:{true:"min-w-0 aspect-square h-auto"},textOnly:{true:""}},compoundVariants:[{iconOnly:!0,intent:"ghost",class:"text-shape-interactive-primary-default"},{textOnly:!0,size:"md",class:"px-lg"},{textOnly:!0,size:"lg",class:"px-xl"},{iconOnly:!1,size:"md",class:"px-lg"},{iconOnly:!1,size:"lg",class:"px-xl"},{iconOnly:!0,size:"xs",class:"p-0"},{iconOnly:!0,size:"sm",class:"size-6 p-0!"},{iconOnly:!0,size:"md",class:"size-10"},{iconOnly:!0,size:"lg",class:"size-12"},{intent:"primary",danger:!0,class:`bg-interactive-alert-default hover:bg-interactive-alert-hover
        active:bg-interactive-alert-active`},{intent:"secondary",danger:!0,class:`bg-interactive-neutral-default text-interactive-alert-default
        hover:bg-interactive-neutral-alert-active
        active:bg-interactive-neutral-alert-active
        enabled:border-interactive-alert-default`},{intent:"tertiary",danger:!0,class:`text-interactive-alert-default
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active border-none`},{intent:"ghost",danger:!0,class:`text-interactive-alert-default
        hover:text-interactive-alert-hover
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active
        active:text-interactive-alert-active`}],defaultVariants:{intent:"primary",size:"md"}}),p=g("",{variants:{ghost:{true:""},iconOnly:{true:""},size:{xs:"size-4",sm:"size-5",md:"size-5",lg:"size-6",xl:"size-7"}},defaultVariants:{size:"md"}}),y=z.forwardRef(({intent:t,size:a,className:c,icon:i,asChild:h=!1,loading:f=!1,danger:o=!1,children:r,...n},d)=>{const v=h?w:"button",l=!!(i&&!r),u=!!(r&&!i),m=f||n.disabled;return f?e.jsxs(v,{ref:d,className:s(b({intent:t,size:a,iconOnly:l,textOnly:u,danger:o}),"relative",c),...n,disabled:m,children:[e.jsxs("span",{className:"gap-xxs invisible flex items-center",children:[x(i,{className:s(p({size:a,iconOnly:l,ghost:t==="ghost"}))}),r]}),e.jsx("span",{className:"inset-0 absolute flex items-center justify-center",children:e.jsx(O,{size:"sm",layout:"row"})})]}):i?e.jsxs(v,{ref:d,className:s(b({intent:t,size:a,iconOnly:l,textOnly:u,danger:o}),c),...n,disabled:m,children:[x(i,{className:s(p({size:a,iconOnly:l,ghost:t==="ghost"}))}),r]}):e.jsx(v,{ref:d,className:s(b({intent:t,size:a,textOnly:u,danger:o}),c),children:r,...n,disabled:m})});y.displayName="Button";y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{y as B};
