import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-rQOkucdy.js";import{F as v}from"./FormField-DEu4dQSp.js";import{S as a}from"./Select-CsFt_Bm_.js";import{c as E}from"./createReactComponent-D3J1wk32.js";import{I as R}from"./IconUser-C-d1xnhc.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CjB0_VjR.js";import"./index-CV1ttAla.js";import"./IconChevronDown-CfC8R3-e.js";import"./index-DtFCyLOj.js";import"./index-mkNjAvsk.js";import"./index-D96shWaG.js";import"./index-CnhLAh1N.js";import"./index-Cb8g0QzL.js";import"./index-D9WsQlvf.js";import"./index-DJ5r4tI3.js";import"./index-DKr2m9fc.js";import"./index-R8bAhLcD.js";import"./index-C0uNjdlN.js";import"./index-D38wwG3y.js";import"./index-2pVwkzNU.js";import"./index-DL1NJluf.js";import"./index-C1JSL6vr.js";import"./index-CSyrCTRS.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],p=E("outline","building","Building",W);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],d=E("outline","rocket","Rocket",T),de={title:"Components/Select",component:a,argTypes:{options:{control:{type:"object"}},placeholder:{control:{type:"text"}},variant:{control:{type:"select"},options:["default","compact"]},intent:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}}},parameters:{radixDocs:{primitive:"Select",url:"https://www.radix-ui.com/primitives/docs/components/select"}}},r=m=>e.jsx(a,{...m}),U=m=>e.jsx(v,{name:"select-field",label:"ラベル (任意)",description:"サポートテキストが入ります。",children:e.jsx(a,{...m})}),l=r.bind({});l.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:d},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const o=U.bind({});o.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:d},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const t=r.bind({});t.args={variant:"compact",value:"chemican",icon:p,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const i=r.bind({});i.args={variant:"compact",value:"long-company",icon:p,options:[{value:"long-company",label:"株式会社化学化学化学化学"},{value:"chemican",label:"Chemican inc."},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const n=r.bind({});n.args={variant:"compact",intent:"secondary",value:"matsumoto",icon:R,options:[{value:"matsumoto",label:"松本 一紀"},{value:"tanaka",label:"田中 太郎"},{value:"yamada",label:"山田 花子"},{value:"sato",label:"佐藤 次郎"}],placeholder:"ユーザーを選択"};const s=r.bind({});s.args={variant:"default",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Disabled with Icon",icon:d,disabled:!0},{type:"Separator"},{value:"option5",label:"Final Available Option"},{value:"option6",label:"Final Disabled Option",disabled:!0}],placeholder:"Select an option (some disabled)",disabled:!1,invalid:!1};const c=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Isolated Select"}),e.jsx("p",{className:"text-sm mb-4",children:"Just the select element without FormField wrapper"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option"}),e.jsx(a,{variant:"compact",value:"chemican",icon:p,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"}),e.jsx(a,{variant:"default",options:[{value:"available",label:"Available Option"},{value:"disabled1",label:"Disabled Option",disabled:!0},{value:"available2",label:"Another Available"}],placeholder:"Select with some disabled options"}),e.jsx(a,{variant:"default",disabled:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],placeholder:"Entire select disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Select with FormField"}),e.jsx("p",{className:"text-sm mb-4",children:"Complete form field with label, description, and error handling"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(v,{name:"category",label:"Category",description:"Choose a category for your item",children:e.jsx(a,{variant:"default",options:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"books",label:"Books"},{value:"home",label:"Home & Garden",icon:d}],placeholder:"Select a category"})}),e.jsx(v,{name:"company",label:"会社選択",description:"所属する会社を選択してください",children:e.jsx(a,{variant:"compact",value:"chemican",icon:p,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"会社を選択"})})]})]})]});c.__docgenInfo={description:"",methods:[],displayName:"IsolatedVsFormField"};var b,u,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Select {...args} />",...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => <FormField name="select-field" label="ラベル (任意)" description="サポートテキストが入ります。">
    <Select {...args} />
  </FormField>`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,F,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Select {...args} />",...(x=(F=t.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var O,A,j;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Select {...args} />",...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var k,C,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Select {...args} />",...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var w,I,M;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Select {...args} />",...(M=(I=s.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,_,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Isolated Select</h3>
      <p className="text-sm mb-4">
        Just the select element without FormField wrapper
      </p>
      <div className="space-y-3">
        <Select variant="default" options={[{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }, {
        value: 'option3',
        label: 'Option 3'
      }]} placeholder="Select an option" />
        <Select variant="compact" value="chemican" icon={IconBuilding} options={[{
        value: 'chemican',
        label: 'Chemican inc.'
      }, {
        value: 'long-company',
        label: '株式会社化学化学化学化学'
      }, {
        value: 'aaa-company',
        label: 'AAA企業'
      }]} placeholder="Select company" />
        <Select variant="default" options={[{
        value: 'available',
        label: 'Available Option'
      }, {
        value: 'disabled1',
        label: 'Disabled Option',
        disabled: true
      }, {
        value: 'available2',
        label: 'Another Available'
      }]} placeholder="Select with some disabled options" />
        <Select variant="default" disabled options={[{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }]} placeholder="Entire select disabled" />
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Select with FormField</h3>
      <p className="text-sm mb-4">
        Complete form field with label, description, and error handling
      </p>
      <div className="space-y-4">
        <FormField name="category" label="Category" description="Choose a category for your item">
          <Select variant="default" options={[{
          value: 'electronics',
          label: 'Electronics'
        }, {
          value: 'clothing',
          label: 'Clothing'
        }, {
          value: 'books',
          label: 'Books'
        }, {
          value: 'home',
          label: 'Home & Garden',
          icon: IconRocket
        }]} placeholder="Select a category" />
        </FormField>

        <FormField name="company" label="会社選択" description="所属する会社を選択してください">
          <Select variant="compact" value="chemican" icon={IconBuilding} options={[{
          value: 'chemican',
          label: 'Chemican inc.'
        }, {
          value: 'long-company',
          label: '株式会社化学化学化学化学'
        }, {
          value: 'aaa-company',
          label: 'AAA企業'
        }]} placeholder="会社を選択" />
        </FormField>
      </div>
    </div>
  </div>`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const me=["Default","WithFormField","Compact","CompactWithSelection","UserSelector","DisabledStates","IsolatedVsFormField"];export{t as Compact,i as CompactWithSelection,l as Default,s as DisabledStates,c as IsolatedVsFormField,n as UserSelector,o as WithFormField,me as __namedExportsOrder,de as default};
