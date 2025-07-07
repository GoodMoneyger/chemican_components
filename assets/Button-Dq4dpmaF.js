import{c as y}from"./createReactComponent-CVqf1ShL.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{e as f}from"./iframe-9o_36HvW.js";import{c as v}from"./index-CRGxjvZy.js";import{c as u}from"./index-CIpRgEyu.js";import{S as h}from"./index-IABH4dJ8.js";import{t as r}from"./bundle-mjs-yGZq-iow.js";/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var B=y("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const p=v(`inline-flex cursor-pointer items-center justify-center gap-xxs rounded-sm
  border border-transparent font-medium decoration-1 focus-visible:ring-2
  focus-visible:ring-interactive-light focus-visible:ring-offset-2
  focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline`,{variants:{intent:{primary:`bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,secondary:`border bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active enabled:border-interactive-light
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,tertiary:`border border-interactive-muted
        bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-light disabled:bg-interactive-disabled`,ghost:`text-interactive-primary-default underline
        hover:text-interactive-primary-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled`},size:{xs:"h-8 min-w-15 px-xs text-sm",sm:"h-10 min-w-20 px-lg",md:"h-[2.875rem] min-w-1.5",lg:"h-14 min-w-36 text-lg"},iconOnly:{true:"aspect-square h-auto min-w-auto"},textOnly:{true:""}},compoundVariants:[{iconOnly:!0,intent:"ghost",class:"text-shape-interactive-primary-default"},{textOnly:!0,size:"md",class:"px-xl"},{textOnly:!0,size:"lg",class:"px-md"},{iconOnly:!1,size:"md",class:"px-xl"},{iconOnly:!1,size:"lg",class:"px-md"},{iconOnly:!0,size:"xs",class:"px-xxs"},{iconOnly:!0,size:"sm",class:"px-xs"},{iconOnly:!0,size:"md",class:"px-sm"},{iconOnly:!0,size:"lg",class:"px-md"}],defaultVariants:{intent:"primary",size:"md"}}),z=v("",{variants:{ghost:{true:""},iconOnly:{true:""},size:{xs:"size-[0.875rem]",sm:"size-[0.875rem]",md:"size-[0.875rem]",lg:"size-4"}},compoundVariants:[{iconOnly:!0,size:"xs",ghost:!0,class:"size-4"},{iconOnly:!0,size:"sm",ghost:!0,class:"size-4"},{iconOnly:!0,size:"md",ghost:!0,class:"size-4"},{iconOnly:!0,size:"lg",ghost:!0,class:"size-6"}],defaultVariants:{size:"md"}}),g=f.forwardRef(({intent:i,size:a,className:n,icon:e,asChild:b=!1,children:t,...o},l)=>{const c=b?h:"button",m=!!(e&&!t),d=!!(t&&!e);if(e){const x=e;return s.jsxs(c,{ref:l,className:r(u(p({intent:i,size:a,iconOnly:m,textOnly:d}),n)),...o,children:[s.jsx(x,{className:r(z({size:a,iconOnly:m,ghost:i==="ghost"}))}),t]})}return s.jsx(c,{ref:l,className:r(u(p({intent:i,size:a,textOnly:d}),n)),children:t,...o})});g.displayName="Button";g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"TablerIcon | React.ComponentType<{ className: string }>",elements:[{name:"TablerIcon"},{name:"ReactComponentType",raw:"React.ComponentType<{ className: string }>",elements:[{name:"signature",type:"object",raw:"{ className: string }",signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}]}]},description:""}},composes:["VariantProps"]};export{g as B,B as I};
