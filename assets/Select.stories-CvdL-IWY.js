import{j as e,e as x}from"./iframe-DcSk_wzL.js";import{F as f}from"./FormField-BoqPBj19.js";import{S as a}from"./Select-C76X8-Zr.js";import{c as se}from"./createReactComponent-D8NpDzyf.js";import{I as ne}from"./IconUser-CJVVtSZG.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-uAPDsygC.js";import"./IconSearch-NpfYajbj.js";import"./index-Be7pAWCB.js";import"./index-Bq6c60he.js";import"./index-DZ2qrVzW.js";import"./index-JsbmbfVG.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],s=se("outline","building","Building",re);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],o=se("outline","rocket","Rocket",ce),je={title:"Components/Select",component:a,argTypes:{options:{control:{type:"object"}},placeholder:{control:{type:"text"}},variant:{control:{type:"select"},options:["default","compact"]},size:{control:{type:"select"},options:["default","sm"]},intent:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}}},parameters:{radixDocs:{primitive:"Select",url:"https://www.radix-ui.com/primitives/docs/components/select"}}},n=l=>e.jsx(a,{...l}),de=l=>e.jsx(f,{name:"select-field",label:"ラベル (任意)",description:"サポートテキストが入ります。",children:e.jsx(a,{...l})}),i=n.bind({});i.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:o},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const c=n.bind({});c.args={...i.args,size:"sm"};const d=de.bind({});d.args={variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4",icon:o},{type:"Separator"},{value:"option5",label:"Option 5"}],placeholder:"Select an option",disabled:!1,invalid:!1};const p=n.bind({});p.args={variant:"compact",value:"chemican",icon:s,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const m=n.bind({});m.args={variant:"compact",value:"long-company",icon:s,options:[{value:"long-company",label:"株式会社化学化学化学化学"},{value:"chemican",label:"Chemican inc."},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"};const u=n.bind({});u.args={variant:"compact",intent:"secondary",value:"matsumoto",icon:ne,options:[{value:"matsumoto",label:"松本 一紀"},{value:"tanaka",label:"田中 太郎"},{value:"yamada",label:"山田 花子"},{value:"sato",label:"佐藤 次郎"}],placeholder:"ユーザーを選択"};const b=n.bind({});b.args={variant:"default",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Disabled with Icon",icon:o,disabled:!0},{type:"Separator"},{value:"option5",label:"Final Available Option"},{value:"option6",label:"Final Disabled Option",disabled:!0}],placeholder:"Select an option (some disabled)",disabled:!1,invalid:!1};const v=()=>{const[l,r]=x.useState(2),[t,N]=x.useState(5);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Priority Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Priority: ",e.jsx("strong",{children:l})," (type:"," ",typeof l,")"]}),e.jsx(a,{variant:"default",value:l,onValueChange:r,options:[{value:1,label:"Low Priority",icon:o},{value:2,label:"Medium Priority",icon:o},{value:3,label:"High Priority",icon:o},{value:4,label:"Critical",icon:o}],placeholder:"Select priority level"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quantity Selector (Number Values)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected Quantity: ",e.jsx("strong",{children:t})," (type:"," ",typeof t,")"]}),e.jsx(a,{variant:"compact",value:t,onValueChange:N,options:[{value:1,label:"1 item"},{value:5,label:"5 items"},{value:10,label:"10 items"},{value:25,label:"25 items"},{value:50,label:"50 items"},{value:100,label:"100 items"}],placeholder:"Select quantity"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With FormField (Number Values)"}),e.jsx(f,{name:"age-range",label:"Age Range",description:"Select your age range for demographics",children:e.jsx(a,{variant:"default",options:[{value:1,label:"18-24 years"},{value:2,label:"25-34 years"},{value:3,label:"35-44 years"},{value:4,label:"45-54 years"},{value:5,label:"55+ years"}],placeholder:"Select age range"})})]})]})},h=()=>e.jsxs("div",{className:"max-w-80 space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Labels (Default Variant)"}),e.jsx(a,{variant:"default",options:[{value:"short",label:"Short"},{value:"long1",label:"This is a very long option label that should wrap to multiple lines in the dropdown"},{value:"long2",label:"株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学"},{value:"long3",label:"Another extremely long option that demonstrates how the dropdown handles text wrapping correctly",icon:o}],placeholder:"Select an option"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Labels (Compact Variant)"}),e.jsx(a,{variant:"compact",icon:s,options:[{value:"short",label:"Short"},{value:"long1",label:"This is a very long option label that should wrap to multiple lines"},{value:"long2",label:"株式会社化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学化学"}],placeholder:"Select company"})]})]}),g=()=>{const[l,r]=x.useState(),t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"dragonfruit",label:"Dragonfruit"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With Search (12 options, threshold is 7)"}),e.jsxs("p",{className:"text-sm mb-4",children:["Selected: ",e.jsx("strong",{children:l??"none"})]}),e.jsx(a,{variant:"default",options:t,value:l,onValueChange:r,placeholder:"Select a fruit"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Without Search (fewer than 10 options)"}),e.jsx(a,{variant:"default",options:t.slice(0,5),placeholder:"Select a fruit"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Compact Variant With Search"}),e.jsx(a,{variant:"compact",icon:s,options:t,placeholder:"Select a fruit"})]})]})},y=()=>{const[l,r]=x.useState("2"),t=Array.from({length:5},(N,j)=>({value:String(j+1),label:`${j+1} / 5`}));return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Custom Trigger Content (renderValue)"}),e.jsx("p",{className:"text-sm mb-4",children:"The trigger shows extra context that the option labels omit."}),e.jsx(a,{variant:"default",options:t,value:l,onValueChange:r,renderValue:`${l} / 5（全213件）`})]})},S=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Isolated Select"}),e.jsx("p",{className:"text-sm mb-4",children:"Just the select element without FormField wrapper"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option"}),e.jsx(a,{variant:"compact",value:"chemican",icon:s,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"Select company"}),e.jsx(a,{variant:"default",options:[{value:"available",label:"Available Option"},{value:"disabled1",label:"Disabled Option",disabled:!0},{value:"available2",label:"Another Available"}],placeholder:"Select with some disabled options"}),e.jsx(a,{variant:"default",disabled:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],placeholder:"Entire select disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Select with FormField"}),e.jsx("p",{className:"text-sm mb-4",children:"Complete form field with label, description, and error handling"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(f,{name:"category",label:"Category",description:"Choose a category for your item",children:e.jsx(a,{variant:"default",options:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"books",label:"Books"},{value:"home",label:"Home & Garden",icon:o}],placeholder:"Select a category"})}),e.jsx(f,{name:"company",label:"会社選択",description:"所属する会社を選択してください",children:e.jsx(a,{variant:"compact",value:"chemican",icon:s,options:[{value:"chemican",label:"Chemican inc."},{value:"long-company",label:"株式会社化学化学化学化学"},{value:"aaa-company",label:"AAA企業"}],placeholder:"会社を選択"})})]})]})]});v.__docgenInfo={description:"",methods:[],displayName:"WithNumericValues"};h.__docgenInfo={description:"",methods:[],displayName:"LongOptionLabels"};g.__docgenInfo={description:"",methods:[],displayName:"WithSearch"};y.__docgenInfo={description:"",methods:[],displayName:"WithRenderValue"};S.__docgenInfo={description:"",methods:[],displayName:"IsolatedVsFormField"};var F,w,C;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Select {...args} />",...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var V,A,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Select {...args} />",...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var k,I,W;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => <FormField name="select-field" label="ラベル (任意)" description="サポートテキストが入ります。">
    <Select {...args} />
  </FormField>`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var R,L,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"args => <Select {...args} />",...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,M,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Select {...args} />",...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var Q,T,B;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <Select {...args} />",...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,H,$;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Select {...args} />",...($=(H=b.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var G,U,q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,J,K;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div className="max-w-80 space-y-8">
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
  </div>`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,le;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,oe,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`() => <div className="space-y-8">
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
  </div>`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Fe=["Default","Small","WithFormField","Compact","CompactWithSelection","UserSelector","DisabledStates","WithNumericValues","LongOptionLabels","WithSearch","WithRenderValue","IsolatedVsFormField"];export{p as Compact,m as CompactWithSelection,i as Default,b as DisabledStates,S as IsolatedVsFormField,h as LongOptionLabels,c as Small,u as UserSelector,d as WithFormField,v as WithNumericValues,y as WithRenderValue,g as WithSearch,Fe as __namedExportsOrder,je as default};
