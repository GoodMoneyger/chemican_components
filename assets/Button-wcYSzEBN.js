import{c as b}from"./createReactComponent-qXPipbKR.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{e as y}from"./iframe-JUtkP01M.js";import{c as p}from"./index-CRGxjvZy.js";import{S as f}from"./index-DOg5LMSR.js";import{e as h}from"./bundle-mjs-ReFrbYi5.js";import{c as z}from"./index-DV709PYD.js";/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R=b("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const O=h({extend:{theme:{spacing:["xxs","xs","sm","md","lg","xl","xxxl"]}}}),r=(...e)=>O(z(e)),u=p(`gap-xxs focus-visible:ring-interactive-light inline-flex cursor-pointer
  items-center justify-center rounded-sm border border-transparent font-medium
  decoration-1 focus-visible:ring-2 focus-visible:ring-offset-2
  focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline`,{variants:{intent:{primary:`bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,secondary:`bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active enabled:border-interactive-light
        disabled:bg-interactive-disabled disabled:text-interactive-disabled
        border`,tertiary:`border-interactive-muted bg-interactive-neutral-default
        text-interactive-heavy hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active enabled:border-interactive-light
        disabled:bg-interactive-disabled border`,ghost:`text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled underline`},size:{xs:"px-xs h-8 min-w-15 text-sm",sm:"px-lg h-10 min-w-20",md:"h-[2.875rem] min-w-1.5",lg:"h-14 min-w-36 text-lg"},iconOnly:{true:"aspect-square h-auto min-w-auto"},textOnly:{true:""}},compoundVariants:[{iconOnly:!0,intent:"ghost",class:"text-shape-interactive-primary-default"},{textOnly:!0,size:"md",class:"px-xl"},{textOnly:!0,size:"lg",class:"px-md"},{iconOnly:!1,size:"md",class:"px-xl"},{iconOnly:!1,size:"lg",class:"px-md"},{iconOnly:!0,size:"xs",class:"px-xxs"},{iconOnly:!0,size:"sm",class:"px-xs"},{iconOnly:!0,size:"md",class:"px-sm"},{iconOnly:!0,size:"lg",class:"px-md"}],defaultVariants:{intent:"primary",size:"md"}}),w=p("",{variants:{ghost:{true:""},iconOnly:{true:""},size:{xs:"size-[0.875rem]",sm:"size-[0.875rem]",md:"size-[0.875rem]",lg:"size-4"}},compoundVariants:[{iconOnly:!0,size:"xs",ghost:!0,class:"size-4"},{iconOnly:!0,size:"sm",ghost:!0,class:"size-4"},{iconOnly:!0,size:"md",ghost:!0,class:"size-4"},{iconOnly:!0,size:"lg",ghost:!0,class:"size-6"}],defaultVariants:{size:"md"}}),v=y.forwardRef(({intent:e,size:a,className:n,icon:t,asChild:x=!1,children:i,...o},l)=>{const c=x?f:"button",m=!!(t&&!i),d=!!(i&&!t);if(t){const g=t;return s.jsxs(c,{ref:l,className:r(u({intent:e,size:a,iconOnly:m,textOnly:d}),n),...o,children:[s.jsx(g,{className:r(w({size:a,iconOnly:m,ghost:e==="ghost"}))}),i]})}return s.jsx(c,{ref:l,className:r(u({intent:e,size:a,textOnly:d}),n),children:i,...o})});v.displayName="Button";v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"TablerIcon | React.ComponentType<{ className: string }>",elements:[{name:"TablerIcon"},{name:"ReactComponentType",raw:"React.ComponentType<{ className: string }>",elements:[{name:"signature",type:"object",raw:"{ className: string }",signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}]}]},description:""}},composes:["VariantProps"]};export{v as B,R as I};
