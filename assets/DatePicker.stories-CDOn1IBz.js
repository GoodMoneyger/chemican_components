import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as o}from"./iframe-CYUctRJw.js";import{R as ne,T as le,P as ie,C as oe}from"./index-C65We9st.js";import{c as P}from"./utils-ppK8Rcr3.js";import{C as de}from"./Calendar-43UTR4xL.js";import{T as ce}from"./TextField-D73dytD3.js";import{I as me}from"./IconCalendarEvent-CMPIi9ZV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bx5QoaqP.js";import"./index-BGIFmcug.js";import"./index-BE_Vh17c.js";import"./index-DIy-JBus.js";import"./index-Bz_ubFSp.js";import"./index-BuJ1xwOL.js";import"./index-CA4GFgU1.js";import"./index-Cs8jJEq2.js";import"./index-B7RRgcrP.js";import"./index-TxjIw_Lx.js";import"./index-Vsi4K2-t.js";import"./index-Dmp0EOOn.js";import"./index-BtKiy8oX.js";import"./createReactComponent-Dr0iM0gF.js";const pe="bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg",u=t=>{if(!t)return null;if(t instanceof Date)return isNaN(t.getTime())?null:t;const s=new Date(t);return isNaN(s.getTime())?null:s},he=t=>t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),a=o.forwardRef(({value:t,onChange:s,defaultValue:d,minDate:D,maxDate:j,disabled:N=!1,error:L=!1,icon:_,iconSize:K=14,placeholder:U,formatDate:A=he,className:B,contentClassName:G,defaultOpen:H=!1,open:p,onOpenChange:i,side:Q="bottom",locale:X="ja"},Z)=>{const[$,ee]=o.useState(()=>u(d||null)),[ae,w]=o.useState(H),k=t!==void 0,h=k?u(t):$,n=p!==void 0?p:ae,c=o.useMemo(()=>u(D||null),[D]),m=o.useMemo(()=>u(j||null),[j]),te=o.useMemo(()=>!c||!m?!0:c<=m,[c,m]),se=r=>{const g=r||null;k||ee(g),s==null||s(g),g&&(p===void 0&&w(!1),i==null||i(!1))},l=r=>{p===void 0&&w(r),i==null||i(r)},re=r=>{switch(r.key){case"ArrowDown":case"ArrowUp":case"Enter":case" ":r.preventDefault(),n||l(!0);break;case"Escape":n&&(r.preventDefault(),l(!1));break}};return e.jsxs(ne,{open:n,onOpenChange:l,children:[e.jsx(le,{asChild:!0,children:e.jsx(ce,{ref:Z,type:"text",readOnly:!0,placeholder:U,value:h?A(h):void 0,disabled:N,invalid:L,trailingIcon:_||me,trailingIconSize:K,onTrailingIconClick:()=>!N&&l(!n),className:P("pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",n&&"ring-interactive-focused ring-4",B),onKeyDown:re,onClick:()=>!N&&l(!n),"aria-expanded":n,"aria-haspopup":"dialog"})}),e.jsx(ie,{children:e.jsx(oe,{className:P(pe,G),sideOffset:4,align:"start",alignOffset:0,side:Q,avoidCollisions:!1,collisionPadding:16,sticky:"always",onEscapeKeyDown:()=>l(!1),onPointerDownOutside:()=>l(!1),role:"dialog","aria-label":"Date picker calendar",children:e.jsx(de,{value:h,onChange:se,...c&&{minDate:c},...m&&{maxDate:m},disabled:!te,showOutsideDays:!0,fixedWeeks:!0,defaultMonth:h||new Date,locale:X})})})]})});a.displayName="DatePicker";a.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"The selected date value. Can be a Date object, string, or null."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:"Callback function called when the date selection changes."},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"The default date value for uncontrolled usage."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum selectable date."},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum selectable date."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the date picker is disabled.",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the date picker input is in an error state.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:"Custom icon to display in the trigger button."},iconSize:{required:!1,tsType:{name:"number"},description:"Size of the trailing icon in pixels.",defaultValue:{value:"14",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text to display when no date is selected."},formatDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => string",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"string"}}},description:"Format function for displaying the selected date.",defaultValue:{value:`(date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the trigger element."},contentClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for the popover content."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the popover should be open by default.",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state of the popover."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback function called when the popover open state changes."},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Which side to display the calendar relative to the input.",defaultValue:{value:"'bottom'",computed:!1}},locale:{required:!1,tsType:{name:"union",raw:"'ja' | 'en'",elements:[{name:"literal",value:"'ja'"},{name:"literal",value:"'en'"}]},description:`The locale for date picker localization.
Defaults to 'ja' (Japanese).
Supported values: 'ja', 'en'`,defaultValue:{value:"'ja'",computed:!1}}},composes:["Omit"]};const Fe={title:"Components/DatePicker",component:a,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"Whether the date picker is disabled",defaultValue:!1},error:{control:"boolean",description:"Whether the date picker is in an error state",defaultValue:!1,if:{arg:"disabled",neq:!0}},placeholder:{control:"text",description:"Placeholder text when no date is selected",if:{arg:"disabled",neq:!0}},minDate:{control:"date",description:"The minimum selectable date"},maxDate:{control:"date",description:"The maximum selectable date"},formatDate:{control:!1,description:"Custom formatting function for the selected date"},defaultValue:{control:"date",description:"Default selected date for uncontrolled usage",if:{arg:"disabled",neq:!0}},defaultOpen:{control:"boolean",description:"Whether the popover should be open by default",defaultValue:!1},locale:{control:"select",options:["ja","en"],description:"The locale for date picker localization",defaultValue:"ja"}}},x={args:{placeholder:"選択してください",disabled:!1,error:!1}},f={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Default"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"デフォルト"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{placeholder:"選択してください"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Filled"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"入力済"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{defaultValue:new Date})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Error"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"エラー時"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{error:!0,placeholder:"誤った内容"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Disabled"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"利用不可時"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{disabled:!0,placeholder:"選択してください"})})]})]})},y={render:()=>{const t=d=>d.toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"}),s=d=>d.toISOString().split("T")[0];return e.jsxs("div",{className:"gap-md space-y-4 flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"Japanese format"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"日本語形式での表示"}),e.jsx(a,{formatDate:t,defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"ISO format"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"ISO 8601 format (YYYY-MM-DD)"}),e.jsx(a,{formatDate:s,defaultValue:new Date})]})]})}},b={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Japanese"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"日本語"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{locale:"ja",placeholder:"選択してください"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"English"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"英語"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{locale:"en",placeholder:"Select a date"})})]})]})},v={render:()=>e.jsxs("div",{className:"space-y-6 min-w-[300px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"1. English Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Direct string usage"}),e.jsx(a,{placeholder:"Select a date"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"2. Japanese Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Japanese localization example"}),e.jsx(a,{placeholder:"選択してください"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"3. Empty Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"No placeholder text"}),e.jsx(a,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"4. Custom Format with Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Shows format hint in placeholder"}),e.jsx(a,{placeholder:"YYYY-MM-DD",side:"top"})]})]}),parameters:{docs:{description:{story:`
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
        `}}}};var T,S,Y;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: '選択してください',
    disabled: false,
    error: false
  }
}`,...(Y=(S=x.parameters)==null?void 0:S.docs)==null?void 0:Y.source}}};var V,q,E;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(q=f.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var M,I,C;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(I=y.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var O,J,F;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(J=b.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var R,z,W;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(z=v.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const Re=["Default","States","CustomFormatting","Locales","StringPlaceholders"];export{y as CustomFormatting,x as Default,b as Locales,f as States,v as StringPlaceholders,Re as __namedExportsOrder,Fe as default};
