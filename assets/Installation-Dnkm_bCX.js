import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CBjHVw9o.js";import{M as o}from"./blocks-DdYBgGP4.js";import"./iframe-gkMfAcV3.js";import"./index-z2O2NuZi.js";import"./index-f8GCfxq-.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Design System/Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React v19 or higher"})," is required"]}),`
`,e.jsxs(n.li,{children:["Start by making sure your project uses ",e.jsx(n.strong,{children:"Tailwind v4"}),", use the ",e.jsx(n.a,{href:"https://tailwindcss.com/docs/installation/using-vite",rel:"nofollow",children:"official Tailwind documentation"})," to set it up"]}),`
`,e.jsxs(n.li,{children:["To streamline the development process, it is highly recommended to use ",e.jsx(n.code,{children:"vite"})," to bundle your frontend project (though not strictly required)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation-1",children:"Installation"}),`
`,e.jsx(n.p,{children:"Install the design library via npm"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install --save @chemican/components@git+ssh://git@github.com:GoodMoneyger/chemican_components.git#release-0.0.15
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note: Since this is a private repository, you will need to be authenticated to run this command. In CI, this means that the right SSH keys need to be available."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Ensure you are using a fixed release tag ",e.jsx(n.code,{children:"#release-x.x.x"}),", that you have to keep updated manually. This is to avoid automatically introducing breaking changes."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Include the Chemican preset in your CSS:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "tailwindcss"

@import "@chemican/components/tailwind-preset.css"
@import "@chemican/components/components.css" /* Only required if you are using the components */
`})}),`
`,e.jsxs(n.p,{children:["This will add the Chemican theme variables to your project and you can use utility classes like ",e.jsx(n.code,{children:".bg-interactive-primary-default"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Include Components in your project:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from '@chemican/components';

const MyComp = () => <div><Button>Chemican Button</Button></div>

`})})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
