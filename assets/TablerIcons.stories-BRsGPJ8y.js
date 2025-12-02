import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./iframe-BcXVJV_p.js";import{B as t}from"./Button-DFOsOwCP.js";import{I as E}from"./IconExternalLink-DH5f3mTP.js";import{I as U}from"./IconAlertCircle-Du05r8YM.js";import{I as V}from"./IconAlertTriangle-B8NmtwcL.js";import{I as W}from"./IconCalendarEvent-BjCoVir1.js";import{I as L}from"./IconCheck-Cuproe5B.js";import{I as $}from"./IconChevronDown-_csgngis.js";import{I as F}from"./IconChevronLeft-Bw8dJcnr.js";import{I as X}from"./IconChevronRight-kmlvASE6.js";import{c as x}from"./createReactComponent-BMfPxDWG.js";import{I as O}from"./IconEdit-BLeeqq66.js";import{a as q,I as G}from"./IconEye-Dr0AX7B_.js";import{I as J}from"./IconFileCheck-fv9dN097.js";import{I as K}from"./IconInfoCircle-Ci-r4P3x.js";import{I as Q}from"./IconMinus-CS6vUhoM.js";import{I as r}from"./IconSearch-DISwb2D7.js";import{I as o}from"./IconSettings-OPVMJYYX.js";import{I as _}from"./IconTrash-2CHKPWEg.js";import{I as M}from"./IconUser-CRkDCYzs.js";import{I as Y}from"./IconX-3Fcg4P2Y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAQ3pbcW.js";import"./utils-Dcqtc42h.js";import"./ProgressIndicator-D5p61Veb.js";import"./index-DVDGuhMe.js";import"./index-gZF7KosK.js";import"./index-DQKEjMdr.js";import"./index-B5N5CKW-.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]],ee=x("outline","chevron-up","ChevronUp",Z);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]],D=x("outline","home","Home",se);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]],H=x("outline","plus","Plus",oe),_e={title:"Components/Tabler Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Tabler Icons are a set of over 4,000 MIT-licensed icons for web projects. This library re-exports all Tabler icons for convenient use."}}}},ne=[{name:"IconAlertCircle",Component:U},{name:"IconAlertTriangle",Component:V},{name:"IconCalendarEvent",Component:W},{name:"IconCheck",Component:L},{name:"IconChevronDown",Component:$},{name:"IconChevronLeft",Component:F},{name:"IconChevronRight",Component:X},{name:"IconChevronUp",Component:ee},{name:"IconEdit",Component:O},{name:"IconExternalLink",Component:E},{name:"IconEye",Component:q},{name:"IconEyeOff",Component:G},{name:"IconFileCheck",Component:J},{name:"IconHome",Component:D},{name:"IconInfoCircle",Component:K},{name:"IconMinus",Component:Q},{name:"IconPlus",Component:H},{name:"IconSearch",Component:r},{name:"IconSettings",Component:o},{name:"IconTrash",Component:_},{name:"IconUser",Component:M},{name:"IconX",Component:Y}],te=({name:s})=>{const[n,a]=R.useState(!1),P=async()=>{await navigator.clipboard.writeText(s),a(!0),setTimeout(()=>a(!1),2e3)};return e.jsx("code",{className:`text-xs text-body-secondary hover:text-body-primary
        cursor-pointer transition-colors`,onClick:P,title:"Click to copy",children:n?"Copied!":s})},c={render:()=>e.jsxs("div",{className:"gap-4 flex flex-col",children:[e.jsx("div",{className:"gap-2 rounded-lg bg-surface-secondary p-4 flex flex-col",children:e.jsxs("p",{className:"text-sm",children:["This is a small selection of commonly used icons. Browse all 4,000+ icons in the"," ",e.jsxs("a",{href:"https://tabler.io/icons",target:"_blank",rel:"noopener noreferrer",className:`gap-1 text-body-primary inline-flex items-center
              underline`,children:["Tabler Icons catalog",e.jsx(E,{size:14})]})]})}),e.jsx("div",{className:"gap-4 md:grid-cols-4 lg:grid-cols-6 grid grid-cols-3",children:ne.map(({name:s,Component:n})=>e.jsxs("div",{className:"gap-2 rounded-lg p-4 flex flex-col items-center border",children:[e.jsx(n,{size:48}),e.jsx(te,{name:s})]},s))})]}),parameters:{docs:{description:{story:"A selection of commonly used Tabler icons in the library. Click on icon names to copy them."}}}},i={render:()=>e.jsxs("div",{className:"gap-4 rounded-md bg-surface-secondary p-4 flex flex-col",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Import and Usage"}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`import {
  IconSearch,
  IconUser,
  IconSettings,
  IconAlertCircle
} from '@chemican/components/tabler-icons';

// Use like any React component
<IconSearch size={24} />
<IconUser size={32} className="text-body-primary" />
<IconSettings size={48} color="#ef4444" />
<IconAlertCircle size={24} stroke={1.5} />`})}),e.jsxs("p",{className:"text-sm text-body-secondary",children:["All 4,000+ Tabler icons are available through the @chemican/components/tabler-icons export. Visit"," ",e.jsx("a",{href:"https://tabler.io/icons",target:"_blank",rel:"noopener noreferrer",className:"text-body-primary underline",children:"tabler.io/icons"})," ","to browse the full catalog."]})]}),parameters:{docs:{description:{story:"Example showing how to import and use Tabler icons in your application."}}}},l={render:()=>e.jsxs("div",{className:"gap-6 flex flex-col",children:[e.jsxs("div",{className:"gap-4 flex items-end",children:[e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(r,{size:16}),e.jsx("code",{className:"text-xs text-body-secondary",children:"16px"})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(r,{size:24}),e.jsx("code",{className:"text-xs text-body-secondary",children:"24px"})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(r,{size:32}),e.jsx("code",{className:"text-xs text-body-secondary",children:"32px"})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(r,{size:48}),e.jsx("code",{className:"text-xs text-body-secondary",children:"48px"})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(r,{size:64}),e.jsx("code",{className:"text-xs text-body-secondary",children:"64px"})]})]}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`<IconSearch size={16} />
<IconSearch size={24} />
<IconSearch size={32} />
<IconSearch size={48} />
<IconSearch size={64} />`})})]}),parameters:{docs:{description:{story:"Tabler icons support the size prop to control their dimensions. The size can be any number (in pixels) or string value."}}}},d={render:()=>e.jsxs("div",{className:"gap-6 flex flex-col",children:[e.jsxs("div",{className:"gap-4 flex items-center",children:[e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(o,{size:48,stroke:1}),e.jsxs("code",{className:"text-xs text-body-secondary",children:["stroke=",1]})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(o,{size:48,stroke:1.5}),e.jsxs("code",{className:"text-xs text-body-secondary",children:["stroke=",1.5]})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(o,{size:48,stroke:2}),e.jsxs("code",{className:"text-xs text-body-secondary",children:["stroke=",2]})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(o,{size:48,stroke:2.5}),e.jsxs("code",{className:"text-xs text-body-secondary",children:["stroke=",2.5]})]}),e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(o,{size:48,stroke:3}),e.jsxs("code",{className:"text-xs text-body-secondary",children:["stroke=",3]})]})]}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`<IconSettings size={48} stroke={1} />
<IconSettings size={48} stroke={1.5} />
<IconSettings size={48} stroke={2} />
<IconSettings size={48} stroke={2.5} />
<IconSettings size={48} stroke={3} />`})}),e.jsx("p",{className:"text-sm text-body-secondary",children:"Default stroke width is 2. Adjust the stroke prop to control the thickness of icon lines."})]}),parameters:{docs:{description:{story:"Tabler icons support the stroke prop to control the line thickness. The default stroke width is 2."}}}},m={render:()=>{const s=[{token:"--token-color-background-interactive-primary-default",label:"Primary"},{token:"--token-color-background-interactive-neutral-hover",label:"Neutral Hover"},{token:"--token-color-background-status-alert",label:"Alert"},{token:"--token-color-background-status-success",label:"Success"},{token:"--token-color-background-status-warning",label:"Warning"}];return e.jsxs("div",{className:"gap-6 flex flex-col",children:[e.jsx("div",{className:"gap-4 flex items-center",children:s.map(({token:n,label:a})=>e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(U,{size:48,style:{color:`var(${n})`}}),e.jsx("code",{className:"text-xs text-body-secondary max-w-24 text-center",children:a})]},n))}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`// Using design tokens
<IconAlertCircle
  size={48}
  style={{ color: 'var(--token-color-background-interactive-primary-default)' }}
/>

// Or use Tailwind classes with design tokens
<IconAlertCircle size={48} className="text-body-primary" />
<IconAlertCircle size={48} className="text-body-secondary" />
<IconAlertCircle size={48} className="text-body-alert" />`})})]})},parameters:{docs:{description:{story:"Tabler icons support color control using design tokens via the style prop, or you can use className with Tailwind text utilities that map to design tokens."}}}},p={render:()=>e.jsxs("div",{className:"gap-6 flex flex-col",children:[e.jsxs("div",{className:"gap-4 flex flex-col",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Common Use Cases"}),e.jsxs("div",{className:"gap-2 flex flex-col",children:[e.jsx("h4",{className:"text-sm font-medium text-body-secondary",children:"Icon-only Buttons"}),e.jsxs("div",{className:"gap-2 flex items-center",children:[e.jsx(t,{intent:"tertiary",size:"sm",iconOnly:!0,icon:D}),e.jsx(t,{intent:"tertiary",size:"sm",iconOnly:!0,icon:o}),e.jsx(t,{intent:"tertiary",size:"sm",iconOnly:!0,icon:M})]})]}),e.jsxs("div",{className:"gap-2 flex flex-col",children:[e.jsx("h4",{className:"text-sm font-medium text-body-secondary",children:"Buttons with Icons"}),e.jsxs("div",{className:"gap-2 flex items-center",children:[e.jsx(t,{intent:"secondary",size:"sm",icon:H,children:"Add Item"}),e.jsx(t,{intent:"tertiary",size:"sm",icon:O,children:"Edit"}),e.jsx(t,{intent:"tertiary",size:"sm",icon:_,danger:!0,children:"Delete"})]})]})]}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`// Icon-only Buttons
<Button intent="tertiary" size="sm" iconOnly icon={IconHome} />
<Button intent="tertiary" size="sm" iconOnly icon={IconSettings} />

// Buttons with Icons and Text
<Button intent="secondary" size="sm" icon={IconPlus}>
  Add Item
</Button>
<Button intent="tertiary" size="sm" icon={IconEdit}>
  Edit
</Button>
<Button intent="tertiary" size="sm" icon={IconTrash} danger>
  Delete
</Button>`})})]}),parameters:{docs:{description:{story:"Examples of how Tabler icons are commonly used in real-world UI patterns like search inputs, alerts, navigation, and action buttons."}}}};var h,u,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="gap-4 flex flex-col">
      <div className="gap-2 rounded-lg bg-surface-secondary p-4 flex flex-col">
        <p className="text-sm">
          This is a small selection of commonly used icons. Browse all 4,000+
          icons in the{' '}
          <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer" className="gap-1 text-body-primary inline-flex items-center
              underline">
            Tabler Icons catalog
            <IconExternalLink size={14} />
          </a>
        </p>
      </div>
      <div className="gap-4 md:grid-cols-4 lg:grid-cols-6 grid grid-cols-3">
        {commonTablerIcons.map(({
        name,
        Component
      }) => <div key={name} className="gap-2 rounded-lg p-4 flex flex-col items-center border">
            <Component size={48} />
            <CopyableIconName name={name} />
          </div>)}
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A selection of commonly used Tabler icons in the library. Click on icon names to copy them.'
      }
    }
  }
}`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,g,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="gap-4 rounded-md bg-surface-secondary p-4 flex flex-col">
      <h3 className="text-lg font-semibold">Import and Usage</h3>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{\`import {
  IconSearch,
  IconUser,
  IconSettings,
  IconAlertCircle
} from '@chemican/components/tabler-icons';

// Use like any React component
<IconSearch size={24} />
<IconUser size={32} className="text-body-primary" />
<IconSettings size={48} color="#ef4444" />
<IconAlertCircle size={24} stroke={1.5} />\`}</code>
      </pre>
      <p className="text-sm text-body-secondary">
        All 4,000+ Tabler icons are available through the
        @chemican/components/tabler-icons export. Visit{' '}
        <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer" className="text-body-primary underline">
          tabler.io/icons
        </a>{' '}
        to browse the full catalog.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to import and use Tabler icons in your application.'
      }
    }
  }
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var v,b,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="gap-6 flex flex-col">
      <div className="gap-4 flex items-end">
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={16} />
          <code className="text-xs text-body-secondary">16px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={24} />
          <code className="text-xs text-body-secondary">24px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={32} />
          <code className="text-xs text-body-secondary">32px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={48} />
          <code className="text-xs text-body-secondary">48px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={64} />
          <code className="text-xs text-body-secondary">64px</code>
        </div>
      </div>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{\`<IconSearch size={16} />
<IconSearch size={24} />
<IconSearch size={32} />
<IconSearch size={48} />
<IconSearch size={64} />\`}</code>
      </pre>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabler icons support the size prop to control their dimensions. The size can be any number (in pixels) or string value.'
      }
    }
  }
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var k,z,j;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="gap-6 flex flex-col">
      <div className="gap-4 flex items-center">
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={1} />
          <code className="text-xs text-body-secondary">stroke={1}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={1.5} />
          <code className="text-xs text-body-secondary">stroke={1.5}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={2} />
          <code className="text-xs text-body-secondary">stroke={2}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={2.5} />
          <code className="text-xs text-body-secondary">stroke={2.5}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={3} />
          <code className="text-xs text-body-secondary">stroke={3}</code>
        </div>
      </div>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{\`<IconSettings size={48} stroke={1} />
<IconSettings size={48} stroke={1.5} />
<IconSettings size={48} stroke={2} />
<IconSettings size={48} stroke={2.5} />
<IconSettings size={48} stroke={3} />\`}</code>
      </pre>
      <p className="text-sm text-body-secondary">
        Default stroke width is 2. Adjust the stroke prop to control the
        thickness of icon lines.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabler icons support the stroke prop to control the line thickness. The default stroke width is 2.'
      }
    }
  }
}`,...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var C,S,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const colorTokens = [{
      token: '--token-color-background-interactive-primary-default',
      label: 'Primary'
    }, {
      token: '--token-color-background-interactive-neutral-hover',
      label: 'Neutral Hover'
    }, {
      token: '--token-color-background-status-alert',
      label: 'Alert'
    }, {
      token: '--token-color-background-status-success',
      label: 'Success'
    }, {
      token: '--token-color-background-status-warning',
      label: 'Warning'
    }];
    return <div className="gap-6 flex flex-col">
        <div className="gap-4 flex items-center">
          {colorTokens.map(({
          token,
          label
        }) => <div key={token} className="gap-2 flex flex-col items-center">
              <IconAlertCircle size={48} style={{
            color: \`var(\${token})\`
          }} />
              <code className="text-xs text-body-secondary max-w-24 text-center">
                {label}
              </code>
            </div>)}
        </div>
        <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
          <code>{\`// Using design tokens
<IconAlertCircle
  size={48}
  style={{ color: 'var(--token-color-background-interactive-primary-default)' }}
/>

// Or use Tailwind classes with design tokens
<IconAlertCircle size={48} className="text-body-primary" />
<IconAlertCircle size={48} className="text-body-secondary" />
<IconAlertCircle size={48} className="text-body-alert" />\`}</code>
        </pre>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabler icons support color control using design tokens via the style prop, or you can use className with Tailwind text utilities that map to design tokens.'
      }
    }
  }
}`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,B,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="gap-6 flex flex-col">
      <div className="gap-4 flex flex-col">
        <h3 className="text-lg font-semibold">Common Use Cases</h3>

        {/* Navigation Buttons */}
        <div className="gap-2 flex flex-col">
          <h4 className="text-sm font-medium text-body-secondary">
            Icon-only Buttons
          </h4>
          <div className="gap-2 flex items-center">
            <Button intent="tertiary" size="sm" iconOnly icon={IconHome} />
            <Button intent="tertiary" size="sm" iconOnly icon={IconSettings} />
            <Button intent="tertiary" size="sm" iconOnly icon={IconUser} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="gap-2 flex flex-col">
          <h4 className="text-sm font-medium text-body-secondary">
            Buttons with Icons
          </h4>
          <div className="gap-2 flex items-center">
            <Button intent="secondary" size="sm" icon={IconPlus}>
              Add Item
            </Button>
            <Button intent="tertiary" size="sm" icon={IconEdit}>
              Edit
            </Button>
            <Button intent="tertiary" size="sm" icon={IconTrash} danger>
              Delete
            </Button>
          </div>
        </div>
      </div>

      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{\`// Icon-only Buttons
<Button intent="tertiary" size="sm" iconOnly icon={IconHome} />
<Button intent="tertiary" size="sm" iconOnly icon={IconSettings} />

// Buttons with Icons and Text
<Button intent="secondary" size="sm" icon={IconPlus}>
  Add Item
</Button>
<Button intent="tertiary" size="sm" icon={IconEdit}>
  Edit
</Button>
<Button intent="tertiary" size="sm" icon={IconTrash} danger>
  Delete
</Button>\`}</code>
      </pre>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how Tabler icons are commonly used in real-world UI patterns like search inputs, alerts, navigation, and action buttons.'
      }
    }
  }
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const Me=["CommonIcons","UsageExample","SizeVariants","StrokeWidth","ColorVariants","RealWorldExamples"];export{m as ColorVariants,c as CommonIcons,p as RealWorldExamples,l as SizeVariants,d as StrokeWidth,i as UsageExample,Me as __namedExportsOrder,_e as default};
