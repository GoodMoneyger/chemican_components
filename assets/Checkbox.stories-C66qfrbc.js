import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./iframe-BuT7b9y4.js";import{C as m,a as t}from"./Checkbox-BGR-UTZh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWZWjLbw.js";import"./utils-DDC_s_PE.js";import"./createReactComponent-BXCtvNcJ.js";import"./IconCheck-CfZ4yBSB.js";import"./index-BDEMLQKy.js";import"./index-5TeGP970.js";import"./index-C8INfd__.js";import"./index-4mf9-AF-.js";import"./index-DS3RKRlO.js";import"./index-BGI42IKe.js";import"./index-CvjCTRbj.js";import"./index-C0-lsZc4.js";const te={title:"Components/Checkbox",component:m,parameters:{radixDocs:{primitive:"Checkbox",url:"https://www.radix-ui.com/primitives/docs/components/checkbox"}}},p=s=>e.jsxs(m,{children:[e.jsx(t,{...s,label:"Checkbox 1"}),e.jsx(t,{...s,label:"Checkbox 2"}),e.jsx(t,{...s,label:"Checkbox 3"})]}),O=()=>e.jsxs(m,{children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Indeterminate",indeterminate:!0}),e.jsx(t,{label:"Disabled Unchecked",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,checked:!0}),e.jsx(t,{label:"Disabled Indeterminate",disabled:!0,indeterminate:!0})]}),c=p.bind({});c.args={invalid:!1,disabled:!1};const d=O.bind({}),a=p.bind({});a.args={invalid:!0,disabled:!1};const r=p.bind({});r.args={invalid:!1,disabled:!0};const R=()=>{const[s,o]=_.useState([]),n=["Item 1","Item 2","Item 3","Item 4"],U=l=>{o(l===!0?n:[])},w=(l,b)=>{o(b===!0?h=>[...h,l]:h=>h.filter(z=>z!==l))},x=s.length===n.length,E=s.length===0,N=!x&&!E;return e.jsxs(m,{children:[e.jsx(t,{label:"Select All",checked:x,indeterminate:N,onCheckedChange:U}),e.jsx("div",{style:{marginLeft:"24px",borderLeft:"1px solid #e2e8f0",paddingLeft:"16px"},children:n.map(l=>e.jsx(t,{label:l,checked:s.includes(l),onCheckedChange:b=>w(l,b)},l))}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#6b7280"},children:["Selected: ",s.length," of ",n.length," items"]})]})},i=R.bind({});var k,C,u;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => <CheckboxGroup>
    <Checkbox {...args} label="Checkbox 1" />
    <Checkbox {...args} label="Checkbox 2" />
    <Checkbox {...args} label="Checkbox 3" />
  </CheckboxGroup>`,...(u=(C=c.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var g,I,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => <CheckboxGroup>
    <Checkbox label="Unchecked" />
    <Checkbox label="Checked" checked />
    <Checkbox label="Indeterminate" indeterminate />
    <Checkbox label="Disabled Unchecked" disabled />
    <Checkbox label="Disabled Checked" disabled checked />
    <Checkbox label="Disabled Indeterminate" disabled indeterminate />
  </CheckboxGroup>`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,j,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => <CheckboxGroup>
    <Checkbox {...args} label="Checkbox 1" />
    <Checkbox {...args} label="Checkbox 2" />
    <Checkbox {...args} label="Checkbox 3" />
  </CheckboxGroup>`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var A,D,G;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => <CheckboxGroup>
    <Checkbox {...args} label="Checkbox 1" />
    <Checkbox {...args} label="Checkbox 2" />
    <Checkbox {...args} label="Checkbox 3" />
  </CheckboxGroup>`,...(G=(D=r.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var L,y,T;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const allItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const handleSelectAll = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };
  const handleItemChange = (item: string, checked: boolean | 'indeterminate') => {
    if (checked === true) {
      setSelectedItems(prev => [...prev, item]);
    } else {
      setSelectedItems(prev => prev.filter(i => i !== item));
    }
  };
  const isAllSelected = selectedItems.length === allItems.length;
  const isNoneSelected = selectedItems.length === 0;
  const isIndeterminate = !isAllSelected && !isNoneSelected;
  return <CheckboxGroup>
      <Checkbox label="Select All" checked={isAllSelected} indeterminate={isIndeterminate} onCheckedChange={handleSelectAll} />
      <div style={{
      marginLeft: '24px',
      borderLeft: '1px solid #e2e8f0',
      paddingLeft: '16px'
    }}>
        {allItems.map(item => <Checkbox key={item} label={item} checked={selectedItems.includes(item)} onCheckedChange={checked => handleItemChange(item, checked)} />)}
      </div>
      <div style={{
      marginTop: '16px',
      fontSize: '14px',
      color: '#6b7280'
    }}>
        Selected: {selectedItems.length} of {allItems.length} items
      </div>
    </CheckboxGroup>;
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const le=["Default","States","Invalid","Disabled","SelectAll"];export{c as Default,r as Disabled,a as Invalid,i as SelectAll,d as States,le as __namedExportsOrder,te as default};
