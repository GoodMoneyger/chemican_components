import{j as a}from"./iframe-CmhbSo3O.js";import{R as e,a as s}from"./RadioButton-B4Mtl55L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CmMTe7J9.js";import"./index-BqKYhYIx.js";import"./index-CIxq7X_O.js";import"./index-B-YipN-Q.js";const T={title:"Components/RadioButton",component:e,parameters:{radixDocs:{primitive:"Radio Group",url:"https://www.radix-ui.com/primitives/docs/components/radio-group"}}},u=o=>a.jsxs(s,{children:[a.jsx(e,{...o,label:"選択肢",value:"option1"}),a.jsx(e,{...o,label:"選択肢",value:"option2"}),a.jsx(e,{...o,label:"選択肢",value:"option3"})]}),r=u.bind({});r.args={invalid:!1,disabled:!1};const t=o=>a.jsxs(s,{defaultValue:"option2",children:[a.jsx(e,{...o,label:"選択肢",value:"option1"}),a.jsx(e,{...o,label:"選択肢",value:"option2"}),a.jsx(e,{...o,label:"選択肢",value:"option3"})]});t.args={invalid:!1,disabled:!1};const n=u.bind({});n.args={invalid:!0,disabled:!1};const i=u.bind({});i.args={invalid:!1,disabled:!0};const l=o=>a.jsxs(s,{defaultValue:"option2",children:[a.jsx(e,{...o,label:"選択肢",value:"option1"}),a.jsx(e,{...o,label:"選択肢",value:"option2"}),a.jsx(e,{...o,label:"選択肢",value:"option3"})]});l.args={invalid:!1,disabled:!0};const d=()=>a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Default States"}),a.jsxs(s,{className:"space-y-2",children:[a.jsx(e,{label:"選択肢 (Default Off)",value:"default-off"}),a.jsx(e,{label:"選択肢 (Default On)",value:"default-on"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Error States"}),a.jsxs(s,{className:"space-y-2",children:[a.jsx(e,{label:"選択肢 (Error Off)",value:"error-off",invalid:!0}),a.jsx(e,{label:"選択肢 (Error On)",value:"error-on",invalid:!0})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Disabled States"}),a.jsxs(s,{className:"space-y-2",defaultValue:"disabled-on",children:[a.jsx(e,{label:"選択肢 (Disabled Off)",value:"disabled-off",disabled:!0}),a.jsx(e,{label:"選択肢 (Disabled On)",value:"disabled-on",disabled:!0})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Selected"};l.__docgenInfo={description:"",methods:[],displayName:"DisabledSelected"};d.__docgenInfo={description:"",methods:[],displayName:"AllStates"};var p,c,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var m,f,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <RadioButtonGroup defaultValue="option2">
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var R,B,x;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(x=(B=n.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var g,j,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var S,D,G;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => <RadioButtonGroup defaultValue="option2">
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var N,O,y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className="space-y-4">
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
  </div>`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const k=["Default","Selected","Error","Disabled","DisabledSelected","AllStates"];export{d as AllStates,r as Default,i as Disabled,l as DisabledSelected,n as Error,t as Selected,k as __namedExportsOrder,T as default};
