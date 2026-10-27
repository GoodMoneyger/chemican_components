import{j as e}from"./iframe-DcSk_wzL.js";import{D as a}from"./DatePicker-CsxWDUOy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-489LH2KD.js";import"./index-DZ2qrVzW.js";import"./Calendar-BZ4mGLv2.js";import"./TextField-DCWCVhYm.js";import"./useCompositionGuard-DS87adQx.js";import"./IconCalendarEvent-Anfkm1CS.js";import"./createReactComponent-D8NpDzyf.js";const W={title:"Components/DatePicker",component:a,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"Whether the date picker is disabled",defaultValue:!1},error:{control:"boolean",description:"Whether the date picker is in an error state",defaultValue:!1,if:{arg:"disabled",neq:!0}},placeholder:{control:"text",description:"Placeholder text when no date is selected",if:{arg:"disabled",neq:!0}},minDate:{control:"date",description:"The minimum selectable date"},maxDate:{control:"date",description:"The maximum selectable date"},formatDate:{control:!1,description:"Custom formatting function for the selected date"},defaultValue:{control:"date",description:"Default selected date for uncontrolled usage",if:{arg:"disabled",neq:!0}},defaultOpen:{control:"boolean",description:"Whether the popover should be open by default",defaultValue:!1},locale:{control:"select",options:["ja","en"],description:"The locale for date picker localization",defaultValue:"ja"}}},s={args:{placeholder:"選択してください",disabled:!1,error:!1}},t={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Default"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"デフォルト"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{placeholder:"選択してください"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Filled"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"入力済"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{defaultValue:new Date})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Error"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"エラー時"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{error:!0,placeholder:"誤った内容"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Disabled"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"利用不可時"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{disabled:!0,placeholder:"選択してください"})})]})]})},r={render:()=>{const S=d=>d.toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"}),Y=d=>d.toISOString().split("T")[0];return e.jsxs("div",{className:"gap-md space-y-4 flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"Japanese format"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"日本語形式での表示"}),e.jsx(a,{formatDate:S,defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"ISO format"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"ISO 8601 format (YYYY-MM-DD)"}),e.jsx(a,{formatDate:Y,defaultValue:new Date})]})]})}},n={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Japanese"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"日本語"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{locale:"ja",placeholder:"選択してください"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"English"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"英語"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{locale:"en",placeholder:"Select a date"})})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-6 min-w-[300px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"1. English Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Direct string usage"}),e.jsx(a,{placeholder:"Select a date"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"2. Japanese Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Japanese localization example"}),e.jsx(a,{placeholder:"選択してください"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"3. Empty Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"No placeholder text"}),e.jsx(a,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"4. Custom Format with Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Shows format hint in placeholder"}),e.jsx(a,{placeholder:"YYYY-MM-DD",side:"top"})]})]}),parameters:{docs:{description:{story:`
This story demonstrates different placeholder string examples for the DatePicker component.

The placeholder prop now accepts a simple string, making it easier for consuming projects to handle internationalization:
- **English**: "Select a date"
- **Japanese**: "選択してください" 
- **Format hints**: "YYYY-MM-DD"
- **Empty**: No placeholder

For i18n, consuming projects can use their preferred translation library:
\`\`\`tsx
<DatePicker placeholder={t('datePicker.placeholder')} />
// or
<DatePicker placeholder={formatMessage({id: 'datePicker.placeholder'})} />
\`\`\`
        `}}}},l={parameters:{layout:"fullscreen",docs:{description:{story:`
The calendar always renders six week rows, so it needs roughly 320px of room.
When the input sits too low for that, Radix flips the popover above the input;
on a viewport too short for either side, the popover caps its height and scrolls.
Either way every week of the month stays reachable.
        `}}},render:()=>e.jsx("div",{className:"p-md flex h-screen flex-col justify-end",children:e.jsxs("div",{className:"w-64",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"Input near the bottom of the viewport"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"画面下部に配置された入力欄"}),e.jsx(a,{placeholder:"選択してください"})]})})};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: '選択してください',
    disabled: false,
    error: false
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,x,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Default</h3>
          <h4 className="text-sm text-body-secondary">デフォルト</h4>
        </div>
        <div className="flex-1">
          <DatePicker placeholder="選択してください" />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Filled</h3>
          <h4 className="text-sm text-body-secondary">入力済</h4>
        </div>
        <div className="flex-1">
          <DatePicker defaultValue={new Date()} />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Error</h3>
          <h4 className="text-sm text-body-secondary">エラー時</h4>
        </div>
        <div className="flex-1">
          <DatePicker error placeholder="誤った内容" />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Disabled</h3>
          <h4 className="text-sm text-body-secondary">利用不可時</h4>
        </div>
        <div className="flex-1">
          <DatePicker disabled placeholder="選択してください" />
        </div>
      </div>
    </div>
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var f,y,u;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const formatJapanese = (date: Date) => {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
      });
    };
    const formatISO = (date: Date) => {
      return date.toISOString().split('T')[0];
    };
    return <div className="gap-md space-y-4 flex flex-col">
        <div>
          <h3 className="text-sm font-medium text-body-primary mb-2">
            Japanese format
          </h3>
          <p className="text-xs text-body-secondary mb-2">日本語形式での表示</p>
          <DatePicker formatDate={formatJapanese} defaultValue={new Date()} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-body-primary mb-2">
            ISO format
          </h3>
          <p className="text-xs text-body-secondary mb-2">
            ISO 8601 format (YYYY-MM-DD)
          </p>
          <DatePicker formatDate={formatISO} defaultValue={new Date()} />
        </div>
      </div>;
  }
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var b,N,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Japanese</h3>
          <h4 className="text-sm text-body-secondary">日本語</h4>
        </div>
        <div className="flex-1">
          <DatePicker locale="ja" placeholder="選択してください" />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">English</h3>
          <h4 className="text-sm text-body-secondary">英語</h4>
        </div>
        <div className="flex-1">
          <DatePicker locale="en" placeholder="Select a date" />
        </div>
      </div>
    </div>
}`,...(v=(N=n.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var j,g,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 min-w-[300px]">
      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          1. English Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">Direct string usage</p>
        <DatePicker placeholder="Select a date" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          2. Japanese Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Japanese localization example
        </p>
        <DatePicker placeholder="選択してください" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          3. Empty Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">No placeholder text</p>
        <DatePicker />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          4. Custom Format with Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Shows format hint in placeholder
        </p>
        <DatePicker placeholder="YYYY-MM-DD" side="top" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
This story demonstrates different placeholder string examples for the DatePicker component.

The placeholder prop now accepts a simple string, making it easier for consuming projects to handle internationalization:
- **English**: "Select a date"
- **Japanese**: "選択してください" 
- **Format hints**: "YYYY-MM-DD"
- **Empty**: No placeholder

For i18n, consuming projects can use their preferred translation library:
\\\`\\\`\\\`tsx
<DatePicker placeholder={t('datePicker.placeholder')} />
// or
<DatePicker placeholder={formatMessage({id: 'datePicker.placeholder'})} />
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(D=(g=o.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var w,k,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
The calendar always renders six week rows, so it needs roughly 320px of room.
When the input sits too low for that, Radix flips the popover above the input;
on a viewport too short for either side, the popover caps its height and scrolls.
Either way every week of the month stays reachable.
        \`
      }
    }
  },
  render: () => <div className="p-md flex h-screen flex-col justify-end">
      <div className="w-64">
        <h3 className="text-sm font-medium text-body-primary mb-2">
          Input near the bottom of the viewport
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          画面下部に配置された入力欄
        </p>
        <DatePicker placeholder="選択してください" />
      </div>
    </div>
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const L=["Default","States","CustomFormatting","Locales","StringPlaceholders","NearViewportBottom"];export{r as CustomFormatting,s as Default,n as Locales,l as NearViewportBottom,t as States,o as StringPlaceholders,L as __namedExportsOrder,W as default};
