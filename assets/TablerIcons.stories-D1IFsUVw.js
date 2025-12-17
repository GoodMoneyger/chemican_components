import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./iframe-DnsYEARH.js";import{B as t}from"./Button-D3pefv7T.js";import{I as A}from"./IconExternalLink-CJX57k3n.js";import{I as E}from"./IconAlertCircle-5PcqfKkm.js";import{I as V}from"./IconAlertTriangle-DfE8t-W-.js";import{I as W}from"./IconCalendarEvent-BNMb-9h5.js";import{I as L}from"./IconCheck-BeFhDjlT.js";import{I as $}from"./IconChevronDown-1dP8RYFn.js";import{I as F}from"./IconChevronLeft-B-2k1kLg.js";import{I as X}from"./IconChevronRight-D6NY_kUN.js";import{c as U}from"./createReactComponent-D8VcnoCv.js";import{I as O}from"./IconEdit-DSQyPmqN.js";import{a as q,I as G}from"./IconEye-CBNR8e0S.js";import{I as J}from"./IconFileCheck-Dgl8h21U.js";import{I as K}from"./IconInfoCircle-BeMXTm5W.js";import{I as Q}from"./IconMinus-W5AO7Yys.js";import{I as _}from"./IconPlus-sZPHpbtZ.js";import{I as r}from"./IconSearch-NV1HA0SA.js";import{I as o}from"./IconSettings-CTE81cAM.js";import{I as D}from"./IconTrash-CCtgsg5r.js";import{I as H}from"./IconUser-CZeue0bt.js";import{I as Y}from"./IconX-Ck-OFiot.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C7Ap_Z9B.js";import"./utils-DrMMG0no.js";import"./ProgressIndicator-BQA7qO-y.js";import"./index-eaPdzvcy.js";import"./index-DGTxuF2J.js";import"./index-CEx99DWU.js";import"./index-Cndvtiv0.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]],ee=U("outline","chevron-up","ChevronUp",Z);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]],R=U("outline","home","Home",se),_e={title:"Components/Tabler Icons",parameters:{docs:{description:{component:"Tabler Icons are a set of over 4,000 MIT-licensed icons for web projects. This library re-exports all Tabler icons for convenient use."}}}},oe=[{name:"IconAlertCircle",Component:E},{name:"IconAlertTriangle",Component:V},{name:"IconCalendarEvent",Component:W},{name:"IconCheck",Component:L},{name:"IconChevronDown",Component:$},{name:"IconChevronLeft",Component:F},{name:"IconChevronRight",Component:X},{name:"IconChevronUp",Component:ee},{name:"IconEdit",Component:O},{name:"IconExternalLink",Component:A},{name:"IconEye",Component:q},{name:"IconEyeOff",Component:G},{name:"IconFileCheck",Component:J},{name:"IconHome",Component:R},{name:"IconInfoCircle",Component:K},{name:"IconMinus",Component:Q},{name:"IconPlus",Component:_},{name:"IconSearch",Component:r},{name:"IconSettings",Component:o},{name:"IconTrash",Component:D},{name:"IconUser",Component:H},{name:"IconX",Component:Y}],ne=({name:s})=>{const[n,a]=P.useState(!1),M=async()=>{await navigator.clipboard.writeText(s),a(!0),setTimeout(()=>a(!1),2e3)};return e.jsx("code",{className:`text-xs text-body-secondary hover:text-body-primary
        cursor-pointer transition-colors`,onClick:M,title:"Click to copy",children:n?"Copied!":s})},c={render:()=>e.jsxs("div",{className:"gap-4 flex flex-col",children:[e.jsx("div",{className:"gap-2 rounded-lg bg-surface-secondary p-4 flex flex-col",children:e.jsxs("p",{className:"text-sm",children:["This is a small selection of commonly used icons. Browse all 4,000+ icons in the"," ",e.jsxs("a",{href:"https://tabler.io/icons",target:"_blank",rel:"noopener noreferrer",className:`gap-1 text-body-primary inline-flex items-center
              underline`,children:["Tabler Icons catalog",e.jsx(A,{size:14})]})]})}),e.jsx("div",{className:"gap-4 md:grid-cols-4 lg:grid-cols-6 grid grid-cols-3",children:oe.map(({name:s,Component:n})=>e.jsxs("div",{className:"gap-2 rounded-lg p-4 flex flex-col items-center border",children:[e.jsx(n,{size:48}),e.jsx(ne,{name:s})]},s))})]}),parameters:{docs:{description:{story:"A selection of commonly used Tabler icons in the library. Click on icon names to copy them."}}}},i={render:()=>e.jsxs("div",{className:"gap-4 rounded-md bg-surface-secondary p-4 flex flex-col",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Import and Usage"}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`import {
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
<IconSettings size={48} stroke={3} />`})}),e.jsx("p",{className:"text-sm text-body-secondary",children:"Default stroke width is 2. Adjust the stroke prop to control the thickness of icon lines."})]}),parameters:{docs:{description:{story:"Tabler icons support the stroke prop to control the line thickness. The default stroke width is 2."}}}},m={render:()=>{const s=[{token:"--token-color-background-interactive-primary-default",label:"Primary"},{token:"--token-color-background-interactive-neutral-hover",label:"Neutral Hover"},{token:"--token-color-background-status-alert",label:"Alert"},{token:"--token-color-background-status-success",label:"Success"},{token:"--token-color-background-status-warning",label:"Warning"}];return e.jsxs("div",{className:"gap-6 flex flex-col",children:[e.jsx("div",{className:"gap-4 flex items-center",children:s.map(({token:n,label:a})=>e.jsxs("div",{className:"gap-2 flex flex-col items-center",children:[e.jsx(E,{size:48,style:{color:`var(${n})`}}),e.jsx("code",{className:"text-xs text-body-secondary max-w-24 text-center",children:a})]},n))}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`// Using design tokens
<IconAlertCircle
  size={48}
  style={{ color: 'var(--token-color-background-interactive-primary-default)' }}
/>

// Or use Tailwind classes with design tokens
<IconAlertCircle size={48} className="text-body-primary" />
<IconAlertCircle size={48} className="text-body-secondary" />
<IconAlertCircle size={48} className="text-body-alert" />`})})]})},parameters:{docs:{description:{story:"Tabler icons support color control using design tokens via the style prop, or you can use className with Tailwind text utilities that map to design tokens."}}}},p={render:()=>e.jsxs("div",{className:"gap-6 flex flex-col",children:[e.jsxs("div",{className:"gap-4 flex flex-col",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Common Use Cases"}),e.jsxs("div",{className:"gap-2 flex flex-col",children:[e.jsx("h4",{className:"text-sm font-medium text-body-secondary",children:"Icon-only Buttons"}),e.jsxs("div",{className:"gap-2 flex items-center",children:[e.jsx(t,{intent:"tertiary",size:"sm",iconOnly:!0,icon:R}),e.jsx(t,{intent:"tertiary",size:"sm",iconOnly:!0,icon:o}),e.jsx(t,{intent:"tertiary",size:"sm",iconOnly:!0,icon:H})]})]}),e.jsxs("div",{className:"gap-2 flex flex-col",children:[e.jsx("h4",{className:"text-sm font-medium text-body-secondary",children:"Buttons with Icons"}),e.jsxs("div",{className:"gap-2 flex items-center",children:[e.jsx(t,{intent:"secondary",size:"sm",icon:_,children:"Add Item"}),e.jsx(t,{intent:"tertiary",size:"sm",icon:O,children:"Edit"}),e.jsx(t,{intent:"tertiary",size:"sm",icon:D,danger:!0,children:"Delete"})]})]})]}),e.jsx("pre",{className:"rounded bg-surface-primary p-4 overflow-x-auto",children:e.jsx("code",{children:`// Icon-only Buttons
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
</Button>`})})]}),parameters:{docs:{description:{story:"Examples of how Tabler icons are commonly used in real-world UI patterns like search inputs, alerts, navigation, and action buttons."}}}};var x,h,u;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(u=(h=c.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,y,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var I,v,b;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var N,k,z;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var j,C,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,T,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const De=["CommonIcons","UsageExample","SizeVariants","StrokeWidth","ColorVariants","RealWorldExamples"];export{m as ColorVariants,c as CommonIcons,p as RealWorldExamples,l as SizeVariants,d as StrokeWidth,i as UsageExample,De as __namedExportsOrder,_e as default};
