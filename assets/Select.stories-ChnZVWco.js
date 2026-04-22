import{j as e,e as g}from"./iframe-BAwDJuLJ.js";import{F as v}from"./FormField-yAxtic03.js";import{S as a}from"./Select-VNqnbnKf.js";import{c as q}from"./createReactComponent-OmAIA7bo.js";import{I as $}from"./IconUser-BX0KEOhX.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-B9gkGK2b.js";import"./index-DC0v3VNi.js";import"./index-B0VATQDm.js";import"./index-CAjpj3cn.js";import"./index-DL4a7R2y.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],u=q("outline","building","Building",z);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],l=q("outline","rocket","Rocket",K),ce={title:"Components/Select",component:a,argTypes:{options:{control:{type:"object"}},placeholder:{control:{type:"text"}},variant:{control:{type:"select"},options:["default","compact"]},intent:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}}},parameters:{radixDocs:{primitive:"Select",url:"https://www.radix-ui.com/primitives/docs/components/select"}}},b=t=>e.jsx(a,{...t}),X=t=>e.jsx(v,{name:"select-field",label:"ラベル (任意)",description:"サポートテキストが入ります。",children:e.jsx(a,{...t})}),o=b.bind({});o.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:l},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const i=X.bind({});i.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:l},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const s=b.bind({});s.args={variant:"compact",value:"chemican",icon:u,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const n=b.bind({});n.args={variant:"compact",value:"long-company",icon:u,options:[{value:"long-company",label:"株式会社化学化学化学化学"},{value:"chemican",label:"Chemican inc."},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const r=b.bind({});r.args={variant:"compact",intent:"secondary",value:"matsumoto",icon:$,options:[{value:"matsumoto",label:"松本 一紀"},{value:"tanaka",label:"田中 太郎"},{value:"yamada",label:"山田 花子"},{value:"sato",label:"佐藤 次郎"}],placeholder:"ユーザーを選択"};const c=b.bind({});c.args={variant:"default",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Disabled with Icon",icon:l,disabled:!0},{type:"Separator"},{value:"option5",label:"Final Available Option"},{value:"option6",label:"Final Disabled Option",disabled:!0}],placeholder:"Select an option (some disabled)",disabled:!1,invalid:!1};const d=()=>{const[t,G]=g.useState(2),[h,J]=g.useState(5);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Priority Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Priority: ",e.jsx("strong",{children:t})," (type:"," ",typeof t,")"]}),e.jsx(a,{variant:"default",value:t,onValueChange:G,options:[{value:1,label:"Low Priority",icon:l},{value:2,label:"Medium Priority",icon:l},{value:3,label:"High Priority",icon:l},{value:4,label:"Critical",icon:l}],placeholder:"Select priority level"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quantity Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Quantity: ",e.jsx("strong",{children:h})," (type:"," ",typeof h,")"]}),e.jsx(a,{variant:"compact",value:h,onValueChange:J,options:[{value:1,label:"1 item"},{value:5,label:"5 items"},{value:10,label:"10 items"},{value:25,label:"25 items"},{value:50,label:"50 items"},{value:100,label:"100 items"}],placeholder:"Select quantity"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With FormField (Number Values)"}),e.jsx(v,{name:"age-range",label:"Age Range",description:"Select your age range for demographics",children:e.jsx(a,{variant:"default",options:[{value:1,label:"18-24 years"},{value:2,label:"25-34 years"},{value:3,label:"35-44 years"},{value:4,label:"45-54 years"},{value:5,label:"55+ years"}],placeholder:"Select age range"})})]})]})},p=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Labels (Default Variant)"}),e.jsx(a,{variant:"default",options:[{value:"short",label:"Short"},{value:"long1",label:"This is a very long option label that should wrap to multiple lines in the dropdown"},{value:"long2",label:"株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学"},{value:"long3",label:"Another extremely long option that demonstrates how the dropdown handles text wrapping correctly",icon:l}],placeholder:"Select an option"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Labels (Compact Variant)"}),e.jsx(a,{variant:"compact",icon:u,options:[{value:"short",label:"Short"},{value:"long1",label:"This is a very long option label that should wrap to multiple lines"},{value:"long2",label:"株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学"}],placeholder:"Select company"})]})]}),m=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Isolated Select"}),e.jsx("p",{className:"text-sm mb-4",children:"Just the select element without FormField wrapper"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option"}),e.jsx(a,{variant:"compact",value:"chemican",icon:u,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"}),e.jsx(a,{variant:"default",options:[{value:"available",label:"Available Option"},{value:"disabled1",label:"Disabled Option",disabled:!0},{value:"available2",label:"Another Available"}],placeholder:"Select with some disabled options"}),e.jsx(a,{variant:"default",disabled:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],placeholder:"Entire select disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Select with FormField"}),e.jsx("p",{className:"text-sm mb-4",children:"Complete form field with label, description, and error handling"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(v,{name:"category",label:"Category",description:"Choose a category for your item",children:e.jsx(a,{variant:"default",options:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"books",label:"Books"},{value:"home",label:"Home & Garden",icon:l}],placeholder:"Select a category"})}),e.jsx(v,{name:"company",label:"会社選択",description:"所属する会社を選択してください",children:e.jsx(a,{variant:"compact",value:"chemican",icon:u,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"会社を選択"})})]})]})]});d.__docgenInfo={description:"",methods:[],displayName:"WithNumericValues"};p.__docgenInfo={description:"",methods:[],displayName:"LongOptionLabels"};m.__docgenInfo={description:"",methods:[],displayName:"IsolatedVsFormField"};var y,S,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Select {...args} />",...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,N,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <FormField name="select-field" label="ラベル (任意)" description="サポートテキストが入ります。">
    <Select {...args} />
  </FormField>`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var F,O,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Select {...args} />",...(A=(O=s.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var w,C,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Select {...args} />",...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,V,P;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Select {...args} />",...(P=(V=r.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var L,R,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Select {...args} />",...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var D,Q,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(_=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var W,B,T;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Long Labels (Default Variant)
      </h3>
      <Select variant="default" options={[{
      value: 'short',
      label: 'Short'
    }, {
      value: 'long1',
      label: 'This is a very long option label that should wrap to multiple lines in the dropdown'
    }, {
      value: 'long2',
      label: '株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学'
    }, {
      value: 'long3',
      label: 'Another extremely long option that demonstrates how the dropdown handles text wrapping correctly',
      icon: IconRocket
    }]} placeholder="Select an option" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Long Labels (Compact Variant)
      </h3>
      <Select variant="compact" icon={IconBuilding} options={[{
      value: 'short',
      label: 'Short'
    }, {
      value: 'long1',
      label: 'This is a very long option label that should wrap to multiple lines'
    }, {
      value: 'long2',
      label: '株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学'
    }]} placeholder="Select company" />
    </div>
  </div>`,...(T=(B=p.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,H,U;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div className="space-y-8">
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
  </div>`,...(U=(H=m.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const de=["Default","WithFormField","Compact","CompactWithSelection","UserSelector","DisabledStates","WithNumericValues","LongOptionLabels","IsolatedVsFormField"];export{s as Compact,n as CompactWithSelection,o as Default,c as DisabledStates,m as IsolatedVsFormField,p as LongOptionLabels,r as UserSelector,i as WithFormField,d as WithNumericValues,de as __namedExportsOrder,ce as default};
