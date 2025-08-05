import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as O}from"./iframe-Ve9Q3wgJ.js";import{c as f}from"./index-CRGxjvZy.js";import{S as j}from"./index-DQuQd1IK.js";import{c as n}from"./utils-COfndj38.js";import{S as z}from"./Spinner-DXoHyAKo.js";const g=f(`gap-xxs box-border inline-flex cursor-pointer items-center justify-center
  rounded-sm border border-transparent font-medium decoration-1
  focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed
  disabled:no-underline`,{variants:{intent:{primary:`bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-interactive-disabled`,secondary:`bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border
        enabled:border-[var(--chemican-green-800)]`,tertiary:`bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-default disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border`,ghost:`text-interactive-primary-default
        hover:text-interactive-primary-hover hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled underline`},danger:{true:"focus-visible:ring-interactive-alert-focused",false:"focus-visible:ring-interactive-focused"},size:{xs:"px-xs h-8 min-w-15 text-sm",sm:"px-lg h-10 min-w-20",md:"h-[2.875rem] min-w-24",lg:"h-14 min-w-34 text-lg"},iconOnly:{true:"aspect-square h-auto min-w-0 p-0!"},textOnly:{true:""}},compoundVariants:[{iconOnly:!0,intent:"ghost",class:"text-shape-interactive-primary-default"},{textOnly:!0,size:"md",class:"px-xl"},{textOnly:!0,size:"lg",class:"px-md"},{iconOnly:!1,size:"md",class:"px-xl"},{iconOnly:!1,size:"lg",class:"px-md"},{iconOnly:!0,size:"xs",class:"px-xxs"},{iconOnly:!0,size:"sm",class:"px-xs"},{iconOnly:!0,size:"md",class:"px-sm"},{iconOnly:!0,size:"lg",class:"px-md"},{intent:"primary",danger:!0,class:`bg-interactive-danger-default hover:bg-interactive-danger-hover
        active:bg-interactive-danger-active`},{intent:"secondary",danger:!0,class:`bg-interactive-neutral-default text-interactive-danger-default
        hover:bg-interactive-neutral-danger-active
        active:bg-interactive-neutral-danger-active
        enabled:border-interactive-alert-default`},{intent:"tertiary",danger:!0,class:`text-interactive-danger-default
        hover:bg-interactive-neutral-danger-hover
        active:bg-interactive-neutral-danger-active border-none`},{intent:"ghost",danger:!0,class:`text-interactive-danger-default
        hover:text-interactive-danger-hover
        hover:bg-interactive-neutral-danger-hover
        active:bg-interactive-neutral-danger-active
        active:text-interactive-danger-active`}],defaultVariants:{intent:"primary",size:"md"}}),x=f("",{variants:{ghost:{true:""},iconOnly:{true:""},size:{xs:"size-4",sm:"size-5",md:"size-5",lg:"size-6"}},defaultVariants:{size:"md"}}),y=O.forwardRef(({intent:a,size:i,className:c,icon:t,asChild:h=!1,loading:p=!1,danger:o=!1,children:r,...s},d)=>{const v=h?j:"button",l=!!(t&&!r),u=!!(r&&!t),m=p||s.disabled;if(p)return e.jsxs(v,{ref:d,className:n(g({intent:a,size:i,iconOnly:l,textOnly:u,danger:o}),"relative",c),...s,disabled:m,children:[e.jsxs("span",{className:"gap-xxs invisible flex items-center",children:[t&&(()=>{const b=t;return e.jsx(b,{className:n(x({size:i,iconOnly:l,ghost:a==="ghost"}))})})(),r]}),e.jsx("span",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(z,{size:"sm",layout:"row"})})]});if(t){const b=t;return e.jsxs(v,{ref:d,className:n(g({intent:a,size:i,iconOnly:l,textOnly:u,danger:o}),c),...s,disabled:m,children:[e.jsx(b,{className:n(x({size:i,iconOnly:l,ghost:a==="ghost"}))}),r]})}return e.jsx(v,{ref:d,className:n(g({intent:a,size:i,textOnly:u,danger:o}),c),children:r,...s,disabled:m})});y.displayName="Button";y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"TablerIcon | React.ComponentType<{ className: string }>",elements:[{name:"TablerIcon"},{name:"ReactComponentType",raw:"React.ComponentType<{ className: string }>",elements:[{name:"signature",type:"object",raw:"{ className: string }",signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}]}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{y as B};
