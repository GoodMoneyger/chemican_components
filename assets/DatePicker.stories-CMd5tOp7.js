import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as o}from"./iframe-DMYWUF7w.js";import{R as ee,T as ae,P as te,C as se}from"./index-Bu2W5H_G.js";import{c as w}from"./utils-B-kTA-Ij.js";import{C as re}from"./Calendar-DwvJGX4o.js";import{T as ne}from"./TextField-BnBK0BnQ.js";import{c as le}from"./createReactComponent-CE1qD6Cm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-i-2MpnuO.js";import"./index-qp8IEN2i.js";import"./index-CYUDGLiF.js";import"./index-B0Lt564T.js";import"./index-C8Prwpr2.js";import"./index-P6ONON5-.js";import"./index-BXv90GvR.js";import"./index-qNd00ph6.js";import"./index-pbx_sVzG.js";import"./index-CIJ8VyJ7.js";import"./index-BHk0VCeC.js";import"./index-BkLOywlz.js";import"./index-BP91VJlx.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 3l0 4",key:"svg-1"}],["path",{d:"M8 3l0 4",key:"svg-2"}],["path",{d:"M4 11l16 0",key:"svg-3"}],["path",{d:"M8 15h2v2h-2z",key:"svg-4"}]],oe=le("outline","calendar-event","CalendarEvent",ie),de="bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg",h=t=>{if(!t)return null;if(t instanceof Date)return isNaN(t.getTime())?null:t;const s=new Date(t);return isNaN(s.getTime())?null:s},ce=t=>t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),a=o.forwardRef(({value:t,onChange:s,defaultValue:d,minDate:D,maxDate:N,disabled:g=!1,error:F=!1,icon:R,iconSize:z=14,placeholder:W,formatDate:_=ce,className:L,contentClassName:K,defaultOpen:U=!1,open:p,onOpenChange:i,side:A="bottom"},B)=>{const[G,H]=o.useState(()=>h(d||null)),[Q,j]=o.useState(U),k=t!==void 0,u=k?h(t):G,n=p!==void 0?p:Q,c=o.useMemo(()=>h(D||null),[D]),m=o.useMemo(()=>h(N||null),[N]),X=o.useMemo(()=>!c||!m?!0:c<=m,[c,m]),Z=r=>{const v=r||null;k||H(v),s==null||s(v),v&&(p===void 0&&j(!1),i==null||i(!1))},l=r=>{p===void 0&&j(r),i==null||i(r)},$=r=>{switch(r.key){case"ArrowDown":case"ArrowUp":case"Enter":case" ":r.preventDefault(),n||l(!0);break;case"Escape":n&&(r.preventDefault(),l(!1));break}};return e.jsxs(ee,{open:n,onOpenChange:l,children:[e.jsx(ae,{asChild:!0,children:e.jsx(ne,{ref:B,type:"text",readOnly:!0,placeholder:W,value:u?_(u):void 0,disabled:g,invalid:F,trailingIcon:R||oe,trailingIconSize:z,onTrailingIconClick:()=>!g&&l(!n),className:w("pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",n&&"ring-interactive-focused ring-4",L),onKeyDown:$,onClick:()=>!g&&l(!n),"aria-expanded":n,"aria-haspopup":"dialog"})}),e.jsx(te,{children:e.jsx(se,{className:w(de,K),sideOffset:4,align:"start",alignOffset:0,side:A,avoidCollisions:!1,collisionPadding:16,sticky:"always",onEscapeKeyDown:()=>l(!1),onPointerDownOutside:()=>l(!1),role:"dialog","aria-label":"Date picker calendar",children:e.jsx(re,{value:u,onChange:Z,...c&&{minDate:c},...m&&{maxDate:m},disabled:!X,showOutsideDays:!0,fixedWeeks:!0,animate:!0,defaultMonth:u||new Date})})})]})});a.displayName="DatePicker";a.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"The selected date value. Can be a Date object, string, or null."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:"Callback function called when the date selection changes."},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | string | null",elements:[{name:"Date"},{name:"string"},{name:"null"}]},description:"The default date value for uncontrolled usage."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum selectable date."},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum selectable date."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the date picker is disabled.",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the date picker input is in an error state.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:"Custom icon to display in the trigger button."},iconSize:{required:!1,tsType:{name:"number"},description:"Size of the trailing icon in pixels.",defaultValue:{value:"14",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text to display when no date is selected."},formatDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => string",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"string"}}},description:"Format function for displaying the selected date.",defaultValue:{value:`(date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the trigger element."},contentClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for the popover content."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the popover should be open by default.",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state of the popover."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback function called when the popover open state changes."},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Which side to display the calendar relative to the input.",defaultValue:{value:"'bottom'",computed:!1}}},composes:["Omit"]};const Ee={title:"Components/DatePicker",component:a,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"Whether the date picker is disabled",defaultValue:!1},error:{control:"boolean",description:"Whether the date picker is in an error state",defaultValue:!1,if:{arg:"disabled",neq:!0}},placeholder:{control:"text",description:"Placeholder text when no date is selected",if:{arg:"disabled",neq:!0}},minDate:{control:"date",description:"The minimum selectable date"},maxDate:{control:"date",description:"The maximum selectable date"},formatDate:{control:!1,description:"Custom formatting function for the selected date"},defaultValue:{control:"date",description:"Default selected date for uncontrolled usage",if:{arg:"disabled",neq:!0}},defaultOpen:{control:"boolean",description:"Whether the popover should be open by default",defaultValue:!1}},tags:[]},x={args:{placeholder:"選択してください",disabled:!1,error:!1}},f={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Default"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"デフォルト"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{placeholder:"選択してください"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Filled"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"入力済"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{defaultValue:new Date})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Error"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"エラー時"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{error:!0,placeholder:"誤った内容"})})]}),e.jsxs("div",{className:"gap-6 flex items-start",children:[e.jsxs("div",{className:"w-24 flex-shrink-0",children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary",children:"Disabled"}),e.jsx("h4",{className:"text-sm text-body-secondary",children:"利用不可時"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(a,{disabled:!0,placeholder:"選択してください"})})]})]})},y={render:()=>{const t=d=>d.toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"}),s=d=>d.toISOString().split("T")[0];return e.jsxs("div",{className:"gap-md space-y-4 flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"Japanese format"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"日本語形式での表示"}),e.jsx(a,{formatDate:t,defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"ISO format"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"ISO 8601 format (YYYY-MM-DD)"}),e.jsx(a,{formatDate:s,defaultValue:new Date})]})]})}},b={render:()=>e.jsxs("div",{className:"space-y-6 min-w-[300px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"1. English Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Direct string usage"}),e.jsx(a,{placeholder:"Select a date"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"2. Japanese Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Japanese localization example"}),e.jsx(a,{placeholder:"選択してください"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"3. Empty Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"No placeholder text"}),e.jsx(a,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-body-primary mb-2",children:"4. Custom Format with Placeholder"}),e.jsx("p",{className:"text-xs text-body-secondary mb-2",children:"Shows format hint in placeholder"}),e.jsx(a,{placeholder:"YYYY-MM-DD",side:"top"})]})]}),parameters:{docs:{description:{story:`
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
        `}}}};var P,T,S;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: '選択してください',
    disabled: false,
    error: false
  }
}`,...(S=(T=x.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var M,Y,q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var C,V,E;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(V=y.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var I,O,J;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(J=(O=b.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const Ie=["Default","States","CustomFormatting","StringPlaceholders"];export{y as CustomFormatting,x as Default,f as States,b as StringPlaceholders,Ie as __namedExportsOrder,Ee as default};
