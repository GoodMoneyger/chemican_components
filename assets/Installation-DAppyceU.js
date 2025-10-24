import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-RLTDBfuH.js";import{M as i}from"./blocks-BFJBXBAI.js";import"./iframe-BGOKsVmy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-By5ALYZv.js";import"./index-CjW1-O-k.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design System/Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React v19 or higher"})," is required"]}),`
`,e.jsxs(n.li,{children:["Start by making sure your project uses ",e.jsx(n.strong,{children:"Tailwind v4"}),", use the ",e.jsx(n.a,{href:"https://tailwindcss.com/docs/installation/using-vite",rel:"nofollow",children:"official Tailwind documentation"})," to set it up"]}),`
`,e.jsxs(n.li,{children:["To streamline the development process, it is highly recommended to use ",e.jsx(n.code,{children:"vite"})," to bundle your frontend project (though not strictly required)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation-1",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install --save @chemican/components@git+ssh://git@github.com:GoodMoneyger/chemican_components.git#release-0.0.17
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note: Since this is a private repository, you will need to be authenticated to run this command. In CI, this means that the right SSH keys need to be available."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Ensure you are using a fixed release tag ",e.jsx(n.code,{children:"#release-x.x.x"}),", that you have to keep updated manually. This is to avoid automatically introducing breaking changes."]}),`
`]}),`
`,e.jsx(n.h3,{id:"recommended-method-import-source-files",children:"Recommended method: Import source files"}),`
`,e.jsx(n.p,{children:"Install the design library via npm"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Include the Chemican preset in your CSS:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "tailwindcss"
@import "@chemican/components/tailwind-preset-next.css"
// @import "@chemican/components/tailwind-preset.css" // Use this for non-Next.js projects instead
@source "../node_modules/@chemican/components";
`})}),`
`,e.jsxs(n.p,{children:["This will add the Chemican theme variables to your project and you can use utility classes like ",e.jsx(n.code,{children:".bg-interactive-primary-default"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"@source"})," line is a tailwind directive that ensures tailwind classes of the Chemican components are detected by your Tailwind setup."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"tailwind-preset-next.css"})," file is optimized for Next.js projects in that it does not include font-face declarations, as Next.js has built-in support for fonts. If you are not using Next.js, use ",e.jsx(n.code,{children:"tailwind-preset.css"})," instead."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Include the font files (Next.js only):"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const notoJp = localFont({
  src: [
    {
      path: '../node_modules/@chemican/components/src/assets/fonts/NotoSansJP-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/@chemican/components/src/assets/fonts/NotoSansJP-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../node_modules/@chemican/components/src/assets/fonts/NotoSansJP-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <main className={notoJp.className}>
      {children}
    </main>
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Include Components in your project:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from '@chemican/components';

const MyComp = () => <div><Button>Chemican Button</Button></div>

`})}),`
`,e.jsx(n.h3,{id:"alternative-method-import-pre-built-css",children:"Alternative method: Import pre-built CSS"}),`
`,e.jsx(n.p,{children:"For simple, one-off projects that do not use Tailwind themselves, you can also use the pre-built CSS file."}),`
`,e.jsx(n.p,{children:"In this case, you can download the bundled CSS file from the repository (use the release branch) and include it directly in your HTML:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="/assets/chemican-components.css">
`})}),`
`,e.jsxs(n.p,{children:["Additionally, you will need to expose the font files in your project under ",e.jsx(n.code,{children:"/fonts/*"}),", as the pre-built CSS does not include them. You can find the font files in the ",e.jsx(n.code,{children:"assets/fonts"})," directory of the repository."]}),`
`,e.jsx(n.p,{children:"This will include all tokens as CSS variables into your project, but you will not be able to use any components or utility classes."})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
