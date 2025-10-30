import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as l}from"./Calendar-DwvJGX4o.js";import"./iframe-DMYWUF7w.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B-kTA-Ij.js";const F={title:"Components/Calendar",component:l,parameters:{layout:"centered",docs:{description:{component:"A standalone calendar component built with react-day-picker featuring Japanese month/year formatting with English weekdays."}}},argTypes:{value:{control:"date",description:"The selected date value"},onChange:{action:"onChange",description:"Callback function called when the date selection changes"},defaultValue:{control:"date",description:"The default date value for uncontrolled usage"},minDate:{control:"date",description:"The minimum selectable date"},maxDate:{control:"date",description:"The maximum selectable date"},disabled:{control:"boolean",description:"Whether the calendar is disabled"},showOutsideDays:{control:"boolean",description:"Whether to show days outside the current month"},fixedWeeks:{control:"boolean",description:"Whether to use fixed weeks (always show 6 weeks)"},animate:{control:"boolean",description:"Whether to enable animations"},defaultMonth:{control:"date",description:"The month to display by default"},inline:{control:"boolean",description:"Whether the calendar is rendered inline (true) or as an overlay (false). Controls shadow application."},className:{control:"text",description:"Custom class name for the calendar container"}}},a={args:{showOutsideDays:!0,fixedWeeks:!0,animate:!0}},s={args:{...a.args,minDate:new Date("2025-01-01"),maxDate:new Date("2025-12-31")}},r={args:{...a.args,showOutsideDays:!1}},t={args:{...a.args,fixedWeeks:!1}},n={args:{...a.args,inline:!0},parameters:{docs:{description:{story:"Calendar with inline=true - no shadow applied, suitable for inline usage within forms or pages."}}}},o={args:{...a.args,inline:!1},parameters:{docs:{description:{story:"Calendar with inline=false (default) - shadow applied, suitable for overlay usage in popovers or modals."}}}},i={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Inline Calendar (inline=true)"}),e.jsx("p",{className:"text-sm text-body-secondary mb-4",children:"No shadow - suitable for inline usage"}),e.jsx(l,{inline:!0,showOutsideDays:!0,fixedWeeks:!0,animate:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Overlay Calendar (inline=false)"}),e.jsx("p",{className:"text-sm text-body-secondary mb-4",children:"With shadow - suitable for popover/modal usage"}),e.jsx(l,{inline:!1,showOutsideDays:!0,fixedWeeks:!0,animate:!0})]})]}),parameters:{docs:{description:{story:"Side-by-side comparison showing the visual difference between inline and overlay calendar displays."}}}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showOutsideDays: true,
    fixedWeeks: true,
    animate: true
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    minDate: new Date('2025-01-01'),
    maxDate: new Date('2025-12-31')
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showOutsideDays: false
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,b,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fixedWeeks: false
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var D,v,W;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    inline: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with inline=true - no shadow applied, suitable for inline usage within forms or pages.'
      }
    }
  }
}`,...(W=(v=n.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var C,O,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    inline: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with inline=false (default) - shadow applied, suitable for overlay usage in popovers or modals.'
      }
    }
  }
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var N,j,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Inline Calendar (inline=true)
        </h3>
        <p className="text-sm text-body-secondary mb-4">
          No shadow - suitable for inline usage
        </p>
        <Calendar inline={true} showOutsideDays={true} fixedWeeks={true} animate={true} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Overlay Calendar (inline=false)
        </h3>
        <p className="text-sm text-body-secondary mb-4">
          With shadow - suitable for popover/modal usage
        </p>
        <Calendar inline={false} showOutsideDays={true} fixedWeeks={true} animate={true} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison showing the visual difference between inline and overlay calendar displays.'
      }
    }
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const _=["Default","WithDateRange","WithoutOutsideDays","WithoutFixedWeeks","InlineDisplay","OverlayDisplay","InlineVsOverlayComparison"];export{a as Default,n as InlineDisplay,i as InlineVsOverlayComparison,o as OverlayDisplay,s as WithDateRange,t as WithoutFixedWeeks,r as WithoutOutsideDays,_ as __namedExportsOrder,F as default};
