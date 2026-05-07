import{j as e}from"./iframe-C-Ea3aRq.js";import{A as i,D as n}from"./Accordion-MZDAq7bg.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-I9vZ779D.js";import"./ProgressIndicator-Dl1Q1l8N.js";import"./createReactComponent-Pu_JStew.js";import"./IconTrash-CFhwVrL4.js";import"./IconChevronDown--A4Nu66K.js";import"./index-GWshnEcP.js";import"./index-BeoBju5n.js";const K={title:"Components/Accordion",component:i,decorators:[o=>e.jsx("div",{className:"bg-surface-secondary p-md",children:e.jsx(o,{})})],parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=9118-18599"},radixDocs:{primitive:"Accordion",url:"https://www.radix-ui.com/primitives/docs/components/accordion"}},argTypes:{type:{control:{type:"select"},options:["single","multiple"],description:"Determines whether one or multiple items can be opened at the same time"},collapsible:{control:{type:"boolean"},description:'When type is "single", allows closing content by clicking on the open trigger'},disabled:{control:{type:"boolean"},description:"When true, prevents the user from interacting with the accordion"}}},r={render:()=>e.jsxs(i,{children:[e.jsxs(i.Item,{value:"item-1",children:[e.jsx(i.Trigger,{children:"0. 基礎情報"}),e.jsx(i.Content,{children:e.jsx(n,{children:e.jsxs(n.Section,{children:[e.jsx(n.KeyValue,{label:"SDS作成日",children:"2025/01/08"}),e.jsx(n.KeyValue,{label:"SDS改訂日",children:"2025/01/08"})]})})})]}),e.jsxs(i.Item,{value:"item-2",children:[e.jsx(i.Trigger,{children:"1. 化学品及び会社情報"}),e.jsx(i.Content,{children:"Chemical product and company identification information would be displayed here."})]}),e.jsxs(i.Item,{value:"item-3",children:[e.jsx(i.Trigger,{children:"2. 危険有害性の要約"}),e.jsx(i.Content,{children:"Hazards identification information would be displayed here."})]})]})},t={args:{type:"single",collapsible:!0,disabled:!0},render:o=>e.jsxs(i,{...o,children:[e.jsxs(i.Item,{value:"item-1",children:[e.jsx(i.Trigger,{children:"Disabled Accordion"}),e.jsx(i.Content,{children:"This content cannot be accessed because the entire accordion is disabled."})]}),e.jsxs(i.Item,{value:"item-2",children:[e.jsx(i.Trigger,{children:"Another Disabled Item"}),e.jsx(i.Content,{children:"All items are non-interactive when the accordion is disabled."})]})]})},c={args:{},render:o=>e.jsxs(i,{...o,children:[e.jsxs(i.Item,{value:"item-1",children:[e.jsx(i.Trigger,{children:"Active Item"}),e.jsx(i.Content,{children:"This item can be opened and closed normally."})]}),e.jsxs(i.Item,{value:"item-2",disabled:!0,children:[e.jsx(i.Trigger,{children:"Disabled Item"}),e.jsx(i.Content,{children:"This content cannot be accessed because this specific item is disabled."})]}),e.jsxs(i.Item,{value:"item-3",children:[e.jsx(i.Trigger,{children:"Another Active Item"}),e.jsx(i.Content,{children:"This item is interactive even though the middle item is disabled."})]})]})},s={args:{type:"single",collapsible:!0,defaultValue:"item-1"},render:o=>e.jsxs(i,{...o,children:[e.jsxs(i.Item,{value:"item-1",children:[e.jsx(i.Trigger,{children:"What is React?"}),e.jsx(i.Content,{children:"React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."})]}),e.jsxs(i.Item,{value:"item-2",children:[e.jsx(i.Trigger,{children:"What is Radix UI?"}),e.jsx(i.Content,{children:"Radix UI is an open-source UI component library for building high-quality, accessible design systems and web applications with React."})]}),e.jsxs(i.Item,{value:"item-3",children:[e.jsx(i.Trigger,{children:"What is TailwindCSS?"}),e.jsx(i.Content,{children:"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML."})]})]})},a={args:{type:"single",collapsible:!1,defaultValue:"item-1"},render:o=>e.jsxs(i,{...o,children:[e.jsxs(i.Item,{value:"item-1",children:[e.jsx(i.Trigger,{children:"What is React?"}),e.jsx(i.Content,{children:"React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."})]}),e.jsxs(i.Item,{value:"item-2",children:[e.jsx(i.Trigger,{children:"What is Radix UI?"}),e.jsx(i.Content,{children:"Radix UI is an open-source UI component library for building high-quality, accessible design systems and web applications with React."})]}),e.jsxs(i.Item,{value:"item-3",children:[e.jsx(i.Trigger,{children:"What is TailwindCSS?"}),e.jsx(i.Content,{children:"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML."})]})]})};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>0. 基礎情報</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Section>
              <DataSheet.KeyValue label="SDS作成日">
                2025/01/08
              </DataSheet.KeyValue>
              <DataSheet.KeyValue label="SDS改訂日">
                2025/01/08
              </DataSheet.KeyValue>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>1. 化学品及び会社情報</Accordion.Trigger>
        <Accordion.Content>
          Chemical product and company identification information would be
          displayed here.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>2. 危険有害性の要約</Accordion.Trigger>
        <Accordion.Content>
          Hazards identification information would be displayed here.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    disabled: true
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Disabled Accordion</Accordion.Trigger>
        <Accordion.Content>
          This content cannot be accessed because the entire accordion is
          disabled.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Another Disabled Item</Accordion.Trigger>
        <Accordion.Content>
          All items are non-interactive when the accordion is disabled.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,A,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Active Item</Accordion.Trigger>
        <Accordion.Content>
          This item can be opened and closed normally.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>Disabled Item</Accordion.Trigger>
        <Accordion.Content>
          This content cannot be accessed because this specific item is
          disabled.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>Another Active Item</Accordion.Trigger>
        <Accordion.Content>
          This item is interactive even though the middle item is disabled.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(b=(A=c.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var I,x,C;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1'
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Radix UI?</Accordion.Trigger>
        <Accordion.Content>
          Radix UI is an open-source UI component library for building
          high-quality, accessible design systems and web applications with
          React.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>What is TailwindCSS?</Accordion.Trigger>
        <Accordion.Content>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build custom designs without leaving your HTML.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,y,S;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1'
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Radix UI?</Accordion.Trigger>
        <Accordion.Content>
          Radix UI is an open-source UI component library for building
          high-quality, accessible design systems and web applications with
          React.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>What is TailwindCSS?</Accordion.Trigger>
        <Accordion.Content>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build custom designs without leaving your HTML.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const H=["Default","Disabled","DisabledItem","WithSingleAndCollapsible","WithSingleNotCollapsible"];export{r as Default,t as Disabled,c as DisabledItem,s as WithSingleAndCollapsible,a as WithSingleNotCollapsible,H as __namedExportsOrder,K as default};
