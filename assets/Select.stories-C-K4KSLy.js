import{j as e,e as S}from"./iframe-sL5ep0tq.js";import{F as x}from"./FormField-ClFdlpE2.js";import{S as a}from"./Select-8-8TIeWe.js";import{c as le}from"./createReactComponent-BK5acoKq.js";import{I as te}from"./IconUser-Cdx7Mbn0.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-DWwd9qw8.js";import"./IconSearch-DApcJo2R.js";import"./index-By4MZsl5.js";import"./index-BgNcV4GB.js";import"./index-sk4yiOv5.js";import"./index-CGBkiBva.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],i=le("outline","building","Building",oe);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],o=le("outline","rocket","Rocket",ie),Se={title:"Components/Select",component:a,argTypes:{options:{control:{type:"object"}},placeholder:{control:{type:"text"}},variant:{control:{type:"select"},options:["default","compact"]},intent:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}}},parameters:{radixDocs:{primitive:"Select",url:"https://www.radix-ui.com/primitives/docs/components/select"}}},y=l=>e.jsx(a,{...l}),se=l=>e.jsx(x,{name:"select-field",label:"ラベル (任意)",description:"サポートテキストが入ります。",children:e.jsx(a,{...l})}),n=y.bind({});n.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:o},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const r=se.bind({});r.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:o},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const c=y.bind({});c.args={variant:"compact",value:"chemican",icon:i,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const d=y.bind({});d.args={variant:"compact",value:"long-company",icon:i,options:[{value:"long-company",label:"株式会社化学化学化学化学"},{value:"chemican",label:"Chemican inc."},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const p=y.bind({});p.args={variant:"compact",intent:"secondary",value:"matsumoto",icon:te,options:[{value:"matsumoto",label:"松本 一紀"},{value:"tanaka",label:"田中 太郎"},{value:"yamada",label:"山田 花子"},{value:"sato",label:"佐藤 次郎"}],placeholder:"ユーザーを選択"};const m=y.bind({});m.args={variant:"default",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Disabled with Icon",icon:o,disabled:!0},{type:"Separator"},{value:"option5",label:"Final Available Option"},{value:"option6",label:"Final Disabled Option",disabled:!0}],placeholder:"Select an option (some disabled)",disabled:!1,invalid:!1};const u=()=>{const[l,s]=S.useState(2),[t,f]=S.useState(5);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Priority Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Priority: ",e.jsx("strong",{children:l})," (type:"," ",typeof l,")"]}),e.jsx(a,{variant:"default",value:l,onValueChange:s,options:[{value:1,label:"Low Priority",icon:o},{value:2,label:"Medium Priority",icon:o},{value:3,label:"High Priority",icon:o},{value:4,label:"Critical",icon:o}],placeholder:"Select priority level"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quantity Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Quantity: ",e.jsx("strong",{children:t})," (type:"," ",typeof t,")"]}),e.jsx(a,{variant:"compact",value:t,onValueChange:f,options:[{value:1,label:"1 item"},{value:5,label:"5 items"},{value:10,label:"10 items"},{value:25,label:"25 items"},{value:50,label:"50 items"},{value:100,label:"100 items"}],placeholder:"Select quantity"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With FormField (Number Values)"}),e.jsx(x,{name:"age-range",label:"Age Range",description:"Select your age range for demographics",children:e.jsx(a,{variant:"default",options:[{value:1,label:"18-24 years"},{value:2,label:"25-34 years"},{value:3,label:"35-44 years"},{value:4,label:"45-54 years"},{value:5,label:"55+ years"}],placeholder:"Select age range"})})]})]})},v=()=>e.jsxs("div",{className:"max-w-80 space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Labels (Default Variant)"}),e.jsx(a,{variant:"default",options:[{value:"short",label:"Short"},{value:"long1",label:"This is a very long option label that should wrap to multiple lines in the dropdown"},{value:"long2",label:"株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学"},{value:"long3",label:"Another extremely long option that demonstrates how the dropdown handles text wrapping correctly",icon:o}],placeholder:"Select an option"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Labels (Compact Variant)"}),e.jsx(a,{variant:"compact",icon:i,options:[{value:"short",label:"Short"},{value:"long1",label:"This is a very long option label that should wrap to multiple lines"},{value:"long2",label:"株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学"}],placeholder:"Select company"})]})]}),b=()=>{const[l,s]=S.useState(),t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"dragonfruit",label:"Dragonfruit"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With Search (12 options, threshold is 7)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected: ",e.jsx("strong",{children:l??"none"})]}),e.jsx(a,{variant:"default",options:t,value:l,onValueChange:s,placeholder:"Select a fruit"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Without Search (fewer than 10 options)"}),e.jsx(a,{variant:"default",options:t.slice(0,5),placeholder:"Select a fruit"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Compact Variant With Search"}),e.jsx(a,{variant:"compact",icon:i,options:t,placeholder:"Select a fruit"})]})]})},h=()=>{const[l,s]=S.useState("2"),t=Array.from({length:5},(f,N)=>({value:String(N+1),label:`${N+1} / 5`}));return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Custom Trigger Content (renderValue)"}),e.jsx("p",{className:"text-sm mb-4",children:"The trigger shows extra context that the option labels omit."}),e.jsx(a,{variant:"default",options:t,value:l,onValueChange:s,renderValue:`${l} / 5（全213件）`})]})},g=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Isolated Select"}),e.jsx("p",{className:"text-sm mb-4",children:"Just the select element without FormField wrapper"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option"}),e.jsx(a,{variant:"compact",value:"chemican",icon:i,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"}),e.jsx(a,{variant:"default",options:[{value:"available",label:"Available Option"},{value:"disabled1",label:"Disabled Option",disabled:!0},{value:"available2",label:"Another Available"}],placeholder:"Select with some disabled options"}),e.jsx(a,{variant:"default",disabled:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],placeholder:"Entire select disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Select with FormField"}),e.jsx("p",{className:"text-sm mb-4",children:"Complete form field with label, description, and error handling"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(x,{name:"category",label:"Category",description:"Choose a category for your item",children:e.jsx(a,{variant:"default",options:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"books",label:"Books"},{value:"home",label:"Home & Garden",icon:o}],placeholder:"Select a category"})}),e.jsx(x,{name:"company",label:"会社選択",description:"所属する会社を選択してください",children:e.jsx(a,{variant:"compact",value:"chemican",icon:i,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"会社を選択"})})]})]})]});u.__docgenInfo={description:"",methods:[],displayName:"WithNumericValues"};v.__docgenInfo={description:"",methods:[],displayName:"LongOptionLabels"};b.__docgenInfo={description:"",methods:[],displayName:"WithSearch"};h.__docgenInfo={description:"",methods:[],displayName:"WithRenderValue"};g.__docgenInfo={description:"",methods:[],displayName:"IsolatedVsFormField"};var j,F,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Select {...args} />",...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var C,V,A;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => <FormField name="select-field" label="ラベル (任意)" description="サポートテキストが入ります。">
    <Select {...args} />
  </FormField>`,...(A=(V=r.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var O,k,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Select {...args} />",...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var W,R,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Select {...args} />",...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var P,_,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Select {...args} />",...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var D,Q,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:"args => <Select {...args} />",...(T=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var B,E,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var $,G,U;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className="max-w-80 space-y-8">
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
  </div>`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string>();
  const options = [{
    value: 'apple',
    label: 'Apple'
  }, {
    value: 'banana',
    label: 'Banana'
  }, {
    value: 'cherry',
    label: 'Cherry'
  }, {
    value: 'dragonfruit',
    label: 'Dragonfruit'
  }, {
    value: 'elderberry',
    label: 'Elderberry'
  }, {
    value: 'fig',
    label: 'Fig'
  }, {
    value: 'grape',
    label: 'Grape'
  }, {
    value: 'honeydew',
    label: 'Honeydew'
  }, {
    value: 'kiwi',
    label: 'Kiwi'
  }, {
    value: 'lemon',
    label: 'Lemon'
  }, {
    value: 'mango',
    label: 'Mango'
  }, {
    value: 'nectarine',
    label: 'Nectarine'
  }];
  return <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          With Search (12 options, threshold is 7)
        </h3>
        <p className="text-sm mb-4">
          Selected: <strong>{value ?? 'none'}</strong>
        </p>
        <Select variant="default" options={options} value={value} onValueChange={setValue} placeholder="Select a fruit" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Without Search (fewer than 10 options)
        </h3>
        <Select variant="default" options={options.slice(0, 5)} placeholder="Select a fruit" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Compact Variant With Search
        </h3>
        <Select variant="compact" icon={IconBuilding} options={options} placeholder="Select a fruit" />
      </div>
    </div>;
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var z,X,Y;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string>('2');
  const options = Array.from({
    length: 5
  }, (_, i) => ({
    value: String(i + 1),
    label: \`\${i + 1} / 5\`
  }));
  return <div>
      <h3 className="text-lg font-semibold mb-4">
        Custom Trigger Content (renderValue)
      </h3>
      <p className="text-sm mb-4">
        The trigger shows extra context that the option labels omit.
      </p>
      <Select variant="default" options={options} value={value} onValueChange={setValue} renderValue={\`\${value} / 5（全213件）\`} />
    </div>;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <div className="space-y-8">
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
  </div>`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const xe=["Default","WithFormField","Compact","CompactWithSelection","UserSelector","DisabledStates","WithNumericValues","LongOptionLabels","WithSearch","WithRenderValue","IsolatedVsFormField"];export{c as Compact,d as CompactWithSelection,n as Default,m as DisabledStates,g as IsolatedVsFormField,v as LongOptionLabels,p as UserSelector,r as WithFormField,u as WithNumericValues,h as WithRenderValue,b as WithSearch,xe as __namedExportsOrder,Se as default};
