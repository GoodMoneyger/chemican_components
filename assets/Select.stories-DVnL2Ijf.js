import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as h}from"./iframe-iCWLE-HY.js";import{F as u}from"./FormField-CUtIqcVS.js";import{S as a}from"./Select-w4x-4i2Q.js";import{c as H}from"./createReactComponent-CMdLUZPY.js";import{I as q}from"./IconUser-BKU2_nrA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BIYrq5Mo.js";import"./utils-ChJrdkvV.js";import"./IconChevronDown-DAaphrP4.js";import"./index-B-nGZTkM.js";import"./index-Bg_Sek3Q.js";import"./index-C5tMeMa9.js";import"./index-BrDqCJuP.js";import"./index-B9W2vWZ8.js";import"./index-ghbK3je5.js";import"./index-ilXfDgma.js";import"./index--K2c9udF.js";import"./index-D2W6Iczv.js";import"./index-DoyCrgAF.js";import"./index-C0t8puKt.js";import"./index-DwaOdcPw.js";import"./index-DmLpl9-3.js";import"./index-B9HGqs8j.js";import"./index-Ozn1_dsc.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],b=H("outline","building","Building",G);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],l=H("outline","rocket","Rocket",J),Se={title:"Components/Select",component:a,argTypes:{options:{control:{type:"object"}},placeholder:{control:{type:"text"}},variant:{control:{type:"select"},options:["default","compact"]},intent:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}}},parameters:{radixDocs:{primitive:"Select",url:"https://www.radix-ui.com/primitives/docs/components/select"}}},m=t=>e.jsx(a,{...t}),L=t=>e.jsx(u,{name:"select-field",label:"ラベル (任意)",description:"サポートテキストが入ります。",children:e.jsx(a,{...t})}),o=m.bind({});o.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:l},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const i=L.bind({});i.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:l},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const s=m.bind({});s.args={variant:"compact",value:"chemican",icon:b,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const r=m.bind({});r.args={variant:"compact",value:"long-company",icon:b,options:[{value:"long-company",label:"株式会社化学化学化学化学"},{value:"chemican",label:"Chemican inc."},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const c=m.bind({});c.args={variant:"compact",intent:"secondary",value:"matsumoto",icon:q,options:[{value:"matsumoto",label:"松本 一紀"},{value:"tanaka",label:"田中 太郎"},{value:"yamada",label:"山田 花子"},{value:"sato",label:"佐藤 次郎"}],placeholder:"ユーザーを選択"};const n=m.bind({});n.args={variant:"default",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Disabled with Icon",icon:l,disabled:!0},{type:"Separator"},{value:"option5",label:"Final Available Option"},{value:"option6",label:"Final Disabled Option",disabled:!0}],placeholder:"Select an option (some disabled)",disabled:!1,invalid:!1};const p=()=>{const[t,T]=h.useState(2),[v,U]=h.useState(5);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Priority Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Priority: ",e.jsx("strong",{children:t})," (type:"," ",typeof t,")"]}),e.jsx(a,{variant:"default",value:t,onValueChange:T,options:[{value:1,label:"Low Priority",icon:l},{value:2,label:"Medium Priority",icon:l},{value:3,label:"High Priority",icon:l},{value:4,label:"Critical",icon:l}],placeholder:"Select priority level"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quantity Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Quantity: ",e.jsx("strong",{children:v})," (type:"," ",typeof v,")"]}),e.jsx(a,{variant:"compact",value:v,onValueChange:U,options:[{value:1,label:"1 item"},{value:5,label:"5 items"},{value:10,label:"10 items"},{value:25,label:"25 items"},{value:50,label:"50 items"},{value:100,label:"100 items"}],placeholder:"Select quantity"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With FormField (Number Values)"}),e.jsx(u,{name:"age-range",label:"Age Range",description:"Select your age range for demographics",children:e.jsx(a,{variant:"default",options:[{value:1,label:"18-24 years"},{value:2,label:"25-34 years"},{value:3,label:"35-44 years"},{value:4,label:"45-54 years"},{value:5,label:"55+ years"}],placeholder:"Select age range"})})]})]})},d=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Isolated Select"}),e.jsx("p",{className:"text-sm mb-4",children:"Just the select element without FormField wrapper"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option"}),e.jsx(a,{variant:"compact",value:"chemican",icon:b,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"}),e.jsx(a,{variant:"default",options:[{value:"available",label:"Available Option"},{value:"disabled1",label:"Disabled Option",disabled:!0},{value:"available2",label:"Another Available"}],placeholder:"Select with some disabled options"}),e.jsx(a,{variant:"default",disabled:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],placeholder:"Entire select disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Select with FormField"}),e.jsx("p",{className:"text-sm mb-4",children:"Complete form field with label, description, and error handling"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{name:"category",label:"Category",description:"Choose a category for your item",children:e.jsx(a,{variant:"default",options:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"books",label:"Books"},{value:"home",label:"Home & Garden",icon:l}],placeholder:"Select a category"})}),e.jsx(u,{name:"company",label:"会社選択",description:"所属する会社を選択してください",children:e.jsx(a,{variant:"compact",value:"chemican",icon:b,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"会社を選択"})})]})]})]});p.__docgenInfo={description:"",methods:[],displayName:"WithNumericValues"};d.__docgenInfo={description:"",methods:[],displayName:"IsolatedVsFormField"};var y,g,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Select {...args} />",...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,f,F;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => <FormField name="select-field" label="ラベル (任意)" description="サポートテキストが入ります。">
    <Select {...args} />
  </FormField>`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var N,j,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:"args => <Select {...args} />",...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var O,C,k;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Select {...args} />",...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,P,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Select {...args} />",...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var V,M,R;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Select {...args} />",...(R=(M=n.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var Q,D,_;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [selectedPriority, setSelectedPriority] = React.useState<number>(2);
  const [selectedQuantity, setSelectedQuantity] = React.useState<number>(5);
  return <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Priority Selector (Number Values)
        </h3>
        <p className="text-sm mb-4">
          Selected Priority: <strong>{selectedPriority}</strong> (type:{' '}
          {typeof selectedPriority})
        </p>
        <Select<number> variant="default" value={selectedPriority} onValueChange={setSelectedPriority} options={[{
        value: 1,
        label: 'Low Priority',
        icon: IconRocket
      }, {
        value: 2,
        label: 'Medium Priority',
        icon: IconRocket
      }, {
        value: 3,
        label: 'High Priority',
        icon: IconRocket
      }, {
        value: 4,
        label: 'Critical',
        icon: IconRocket
      }]} placeholder="Select priority level" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Quantity Selector (Number Values)
        </h3>
        <p className="text-sm mb-4">
          Selected Quantity: <strong>{selectedQuantity}</strong> (type:{' '}
          {typeof selectedQuantity})
        </p>
        <Select<number> variant="compact" value={selectedQuantity} onValueChange={setSelectedQuantity} options={[{
        value: 1,
        label: '1 item'
      }, {
        value: 5,
        label: '5 items'
      }, {
        value: 10,
        label: '10 items'
      }, {
        value: 25,
        label: '25 items'
      }, {
        value: 50,
        label: '50 items'
      }, {
        value: 100,
        label: '100 items'
      }]} placeholder="Select quantity" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          With FormField (Number Values)
        </h3>
        <FormField name="age-range" label="Age Range" description="Select your age range for demographics">
          <Select<number> variant="default" options={[{
          value: 1,
          label: '18-24 years'
        }, {
          value: 2,
          label: '25-34 years'
        }, {
          value: 3,
          label: '35-44 years'
        }, {
          value: 4,
          label: '45-54 years'
        }, {
          value: 5,
          label: '55+ years'
        }]} placeholder="Select age range" />
        </FormField>
      </div>
    </div>;
}`,...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var W,B,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div className="space-y-8">
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
  </div>`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const xe=["Default","WithFormField","Compact","CompactWithSelection","UserSelector","DisabledStates","WithNumericValues","IsolatedVsFormField"];export{s as Compact,r as CompactWithSelection,o as Default,n as DisabledStates,d as IsolatedVsFormField,c as UserSelector,i as WithFormField,p as WithNumericValues,xe as __namedExportsOrder,Se as default};
