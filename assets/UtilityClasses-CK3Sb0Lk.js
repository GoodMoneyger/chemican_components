import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DRN1yOsW.js";import{M as r}from"./blocks-c5esrzKf.js";import"./iframe-BpubQJy7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B6LKDQs0.js";import"./index-B3CjSMfS.js";function a(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design System/Utility Classes"}),`
`,e.jsx(s.h1,{id:"chemican-design-system-token-based-utility-classes",children:"Chemican Design System: Token-Based Utility Classes"}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(s.p,{children:["The Chemican Design System provides custom utility classes generated from ",e.jsx(s.a,{href:"?path=/story/design-system-tokens-colors--default",children:"design tokens"}),", allowing for consistent styling across your application."]}),`
`,e.jsx(s.p,{children:"Below is a list of examples of utility classes that exist, based on our design tokens. Note that this is just a very small fraction of available utilities."}),`
`,e.jsx(s.h2,{id:"token-categories",children:"Token Categories"}),`
`,e.jsx(s.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Background Colors"}),":",`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<div className="bg-surface-primary">Primary Surface</div>
<div className="bg-surface-secondary">Secondary Surface</div>
<div className="bg-interactive-primary-default">Interactive Primary</div>
`})}),`
`]}),`
`]}),`
`,e.jsx(s.h3,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Base & Interactive"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<p className="text-body-primary">Primary text</p>
<p className="text-body-secondary">Secondary text</p>
<a className="text-interactive-default">Default link</a>
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Accent Colors"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<span className="text-accent-blue-soft">Blue (soft)</span>
<span className="text-accent-green-strong">Green (strong)</span>
`})}),`
`]}),`
`]}),`
`,e.jsx(s.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<div className="p-xxs">XXS Padding</div>
<div className="m-sm">SM Margin</div>
<div className="gap-lg">LG Gap</div>
`})}),`
`,e.jsxs(s.p,{children:["Available spacing tokens: ",e.jsx(s.code,{children:"xxxs"}),", ",e.jsx(s.code,{children:"xxs"}),", ",e.jsx(s.code,{children:"xs"}),", ",e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"md"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"}),", ",e.jsx(s.code,{children:"xxl"}),", ",e.jsx(s.code,{children:"xxxl"})]}),`
`,e.jsx(s.h3,{id:"typography",children:"Typography"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<p className="text-xs">Extra Small Text</p>
<p className="text-md">Medium Text</p>
<p className="text-xxl">Extra Extra Large Text</p>
`})}),`
`,e.jsxs(s.p,{children:["Available size tokens: ",e.jsx(s.code,{children:"xs"}),", ",e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"md"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"}),", ",e.jsx(s.code,{children:"xxl"}),", ",e.jsx(s.code,{children:"xxxl"})]}),`
`,e.jsx(s.h3,{id:"border-radius",children:"Border Radius"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<div className="rounded-xs">Extra Small Radius</div>
<div className="rounded-md">Medium Radius</div>
<div className="rounded-max">Maximum Radius (pill)</div>
`})}),`
`,e.jsx(s.h2,{id:"state-variants",children:"State Variants"}),`
`,e.jsx(s.h3,{id:"interactive-states",children:"Interactive States"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<button className="bg-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-active">
  Interactive Button
</button>
`})}),`
`,e.jsx(s.h3,{id:"form-states",children:"Form States"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<input className="border-input-default focus:border-input-focused" placeholder="Focus me" />
<input className="border-input-alert" placeholder="Error state" />
<input className="border-input-disabled bg-input-disabled" disabled placeholder="Disabled" />
`})}),`
`,e.jsx(s.h2,{id:"status-indicators",children:"Status Indicators"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<div className="bg-status-success text-body-inverse">Success</div>
<div className="bg-status-warning">Warning</div>
<div className="bg-status-alert">Alert</div>
<div className="bg-status-neutral">Neutral</div>
<div className="bg-status-inProgress">In Progress</div>
<div className="bg-status-queue">Queue</div>
`})}),`
`,e.jsx(s.h2,{id:"responsive-design",children:"Responsive Design"}),`
`,e.jsx(s.p,{children:"Combine with standard Tailwind responsive prefixes:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<div className="p-sm md:p-md lg:p-lg">
  Responsive padding that increases at each breakpoint
</div>
`})})]})}function m(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{m as default};
