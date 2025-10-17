import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BVP3mzG-.js";import{R as e,a as l}from"./RadioButton-DhGVJUv5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbtwBnD4.js";import"./utils-DsNtC-AU.js";import"./index-CU8sRWq4.js";import"./index-CGnWUUPq.js";import"./index-C3QWgk1n.js";import"./index-DJsAUQf0.js";import"./index-BmxElqd1.js";import"./index-B1sSN7Lx.js";import"./index-DtOJXJ5Q.js";import"./index-Ci86NCou.js";import"./index-DcHn8QWR.js";import"./index-CsvjoiCv.js";import"./index-B3dEKPa6.js";import"./index-KOmqA5RC.js";import"./index-Bt_TKEjg.js";const U={title:"Components/RadioButton",component:e,parameters:{radixDocs:{primitive:"Radio Group",url:"https://www.radix-ui.com/primitives/docs/components/radio-group"}}},u=o=>a.jsxs(l,{children:[a.jsx(e,{...o,label:"選択肢",value:"option1"}),a.jsx(e,{...o,label:"選択肢",value:"option2"}),a.jsx(e,{...o,label:"選択肢",value:"option3"})]}),r=u.bind({});r.args={invalid:!1,disabled:!1};const t=u.bind({});t.args={invalid:!1,disabled:!1};t.decorators=[o=>a.jsx(l,{defaultValue:"option2",children:a.jsx(o,{})})];const i=u.bind({});i.args={invalid:!0,disabled:!1};const n=u.bind({});n.args={invalid:!1,disabled:!0};const s=u.bind({});s.args={invalid:!1,disabled:!0};s.decorators=[o=>a.jsx(l,{defaultValue:"option2",children:a.jsx(o,{})})];const d=()=>a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Default States"}),a.jsxs(l,{className:"space-y-2",children:[a.jsx(e,{label:"選択肢 (Default Off)",value:"default-off"}),a.jsx(e,{label:"選択肢 (Default On)",value:"default-on"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Error States"}),a.jsxs(l,{className:"space-y-2",children:[a.jsx(e,{label:"選択肢 (Error Off)",value:"error-off",invalid:!0}),a.jsx(e,{label:"選択肢 (Error On)",value:"error-on",invalid:!0})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Disabled States"}),a.jsxs(l,{className:"space-y-2",defaultValue:"disabled-on",children:[a.jsx(e,{label:"選択肢 (Disabled Off)",value:"disabled-off",disabled:!0}),a.jsx(e,{label:"選択肢 (Disabled On)",value:"disabled-on",disabled:!0})]})]})]});d.__docgenInfo={description:"",methods:[],displayName:"AllStates"};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,f,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var R,B,g;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(g=(B=i.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var x,j,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(h=(j=n.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var D,S,G;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(G=(S=s.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var N,O,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className="space-y-4">
    <div>
      <h3 className="mb-2 text-lg font-semibold">Default States</h3>
      <RadioButtonGroup className="space-y-2">
        <RadioButton label="選択肢 (Default Off)" value="default-off" />
        <RadioButton label="選択肢 (Default On)" value="default-on" />
      </RadioButtonGroup>
    </div>

    <div>
      <h3 className="mb-2 text-lg font-semibold">Error States</h3>
      <RadioButtonGroup className="space-y-2">
        <RadioButton label="選択肢 (Error Off)" value="error-off" invalid />
        <RadioButton label="選択肢 (Error On)" value="error-on" invalid />
      </RadioButtonGroup>
    </div>

    <div>
      <h3 className="mb-2 text-lg font-semibold">Disabled States</h3>
      <RadioButtonGroup className="space-y-2" defaultValue="disabled-on">
        <RadioButton label="選択肢 (Disabled Off)" value="disabled-off" disabled />
        <RadioButton label="選択肢 (Disabled On)" value="disabled-on" disabled />
      </RadioButtonGroup>
    </div>
  </div>`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const W=["Default","Selected","Error","Disabled","DisabledSelected","AllStates"];export{d as AllStates,r as Default,n as Disabled,s as DisabledSelected,i as Error,t as Selected,W as __namedExportsOrder,U as default};
