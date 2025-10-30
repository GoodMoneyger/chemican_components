import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CJw2_7Co.js";import{M as r}from"./blocks-BmvR3CaQ.js";import"./iframe-Cg4IhQ5V.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dm1p3zII.js";import"./index-Cn6gezY5.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design System/Themes"}),`
`,e.jsx(n.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(n.p,{children:"The Chemican Design System supports multiple color themes that can be switched dynamically in your application."}),`
`,e.jsx(n.h2,{id:"available-themes",children:"Available Themes"}),`
`,e.jsx(n.p,{children:"The design system currently provides two themes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Green Mode"})," (Default) - The default Chemican brand theme with green accents"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Blue Mode"})," - An alternative theme with blue accents"]}),`
`]}),`
`,e.jsx(n.p,{children:"Both themes share the same semantic token structure, ensuring consistent component behavior across themes."}),`
`,e.jsx(n.h2,{id:"how-to-change-the-theme",children:"How to Change the Theme"}),`
`,e.jsxs(n.p,{children:["Themes are controlled via the ",e.jsx(n.code,{children:"data-theme"})," attribute on any parent HTML element. Typically, you would set this on the ",e.jsx(n.code,{children:"<html>"})," or ",e.jsx(n.code,{children:"<body>"})," element to apply the theme globally."]}),`
`,e.jsx(n.h3,{id:"default-theme-green-mode",children:"Default Theme (Green Mode)"}),`
`,e.jsxs(n.p,{children:["The Green Mode theme is active by default when no ",e.jsx(n.code,{children:"data-theme"})," attribute is set:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- No data-theme attribute needed for default theme -->
<html>
  <body>
    <!-- Your app content -->
  </body>
</html>
`})}),`
`,e.jsx(n.h3,{id:"switching-to-blue-mode",children:"Switching to Blue Mode"}),`
`,e.jsxs(n.p,{children:["To activate the Blue Mode theme, set the ",e.jsx(n.code,{children:"data-theme"})," attribute to ",e.jsx(n.code,{children:"'Blue Mode'"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html data-theme="Blue Mode">
  <body>
    <!-- Your app content -->
  </body>
</html>
`})}),`
`,e.jsx(n.h2,{id:"implementation-examples",children:"Implementation Examples"}),`
`,e.jsx(n.h3,{id:"vanilla-javascript",children:"Vanilla JavaScript"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Switch to Blue Mode
document.documentElement.setAttribute('data-theme', 'Blue Mode');

// Switch back to Green Mode (default)
document.documentElement.removeAttribute('data-theme');
`})}),`
`,e.jsx(n.h3,{id:"react-with-usestate",children:"React with useState"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'Green Mode' | 'Blue Mode'>('Green Mode');

  const toggleTheme = () => {
    const newTheme = theme === 'Green Mode' ? 'Blue Mode' : 'Green Mode';
    setTheme(newTheme);

    if (newTheme === 'Blue Mode') {
      document.documentElement.setAttribute('data-theme', 'Blue Mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'Green Mode' ? 'Blue' : 'Green'} Mode
      </button>
      {/* Your app content */}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"react-with-useeffect",children:"React with useEffect"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState<'Green Mode' | 'Blue Mode'>('Green Mode');

  useEffect(() => {
    if (theme === 'Blue Mode') {
      document.documentElement.setAttribute('data-theme', 'Blue Mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === 'Green Mode' ? 'Blue Mode' : 'Green Mode')}>
        Current: {theme}
      </button>
      {/* Your app content */}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"persisting-theme-selection",children:"Persisting Theme Selection"}),`
`,e.jsxs(n.p,{children:["To remember the user's theme preference across sessions, you can use ",e.jsx(n.code,{children:"localStorage"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useEffect, useState } from 'react';

function usePersistedTheme() {
  const [theme, setTheme] = useState<'Green Mode' | 'Blue Mode'>(() => {
    // Initialize from localStorage or default to Green Mode
    const saved = localStorage.getItem('chemican-theme');
    return (saved === 'Blue Mode' ? 'Blue Mode' : 'Green Mode');
  });

  useEffect(() => {
    // Update DOM
    if (theme === 'Blue Mode') {
      document.documentElement.setAttribute('data-theme', 'Blue Mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    // Persist to localStorage
    localStorage.setItem('chemican-theme', theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
`})}),`
`,e.jsx(n.h3,{id:"nextjs-with-server-side-rendering",children:"Next.js with Server-Side Rendering"}),`
`,e.jsx(n.p,{children:"When using Next.js or other SSR frameworks, you'll want to prevent theme flashing on page load:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/layout.tsx
import { cookies } from 'next/headers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value || 'Green Mode';

  return (
    <html data-theme={theme === 'Blue Mode' ? 'Blue Mode' : undefined}>
      <body>
        {children}
      </body>
    </html>
  );
}

// app/ThemeToggle.tsx (client component)
'use client';

import { useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'Green Mode' | 'Blue Mode'>('Green Mode');

  const handleThemeChange = (newTheme: 'Green Mode' | 'Blue Mode') => {
    setTheme(newTheme);
    document.documentElement.setAttribute(
      'data-theme',
      newTheme === 'Blue Mode' ? 'Blue Mode' : ''
    );
    document.cookie = \`theme=\${newTheme}; path=/; max-age=31536000\`;
  };

  return (
    <button onClick={() => handleThemeChange(
      theme === 'Green Mode' ? 'Blue Mode' : 'Green Mode'
    )}>
      Toggle Theme
    </button>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Apply theme at the highest level"}),": Set the ",e.jsx(n.code,{children:"data-theme"})," attribute on the ",e.jsx(n.code,{children:"<html>"})," or ",e.jsx(n.code,{children:"<body>"})," element to ensure all components are affected."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use semantic tokens"}),": All components use semantic design tokens that automatically adapt to the selected theme. Avoid using primitive color values directly."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test both themes"}),": When developing components, ensure they work correctly in both Green and Blue Mode."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Consider accessibility"}),": When implementing theme switching, ensure it doesn't interfere with system-level accessibility preferences (like prefers-color-scheme)."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Initialize early"}),": Apply the theme as early as possible in your application lifecycle to prevent flickering during load."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"technical-details",children:"Technical Details"}),`
`,e.jsxs(n.p,{children:["The theme system works through CSS custom properties (CSS variables). When you set the ",e.jsx(n.code,{children:"data-theme"})," attribute, it activates a different set of CSS variable definitions:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Default (Green Mode) - active when data-theme is not set */
:root:not([data-theme]) {
  --token-color-background-interactive-primary-default: var(--chemican-green-800);
  /* ... other tokens */
}

/* Blue Mode - active when data-theme='Blue Mode' */
[data-theme='Blue Mode'] {
  --token-color-background-interactive-primary-default: var(--sea-500);
  /* ... other tokens */
}
`})}),`
`,e.jsx(n.p,{children:"All components reference these semantic tokens, so changing the theme updates all components automatically without requiring any component-level changes."})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
