import{e as p,j as e}from"./iframe-BshPFaFL.js";import{T as i}from"./TextField-Cb3lvVJ2.js";import{I as M}from"./IconCalendar-CkYrVwT3.js";import{I as m}from"./IconChevronDown-DXQ__o6e.js";import{I as w,a as d}from"./IconEye-DItJvlBf.js";import{c as O}from"./createReactComponent-C3MjDBUf.js";import{I as N}from"./IconUser-Du3wNOw0.js";import{I as u}from"./IconMail-MsR5c1ce.js";import{I}from"./IconSearch-BwKok2_6.js";import"./preload-helper-Dp1pzeXC.js";import"./useCompositionGuard-wtZCJKuF.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]],F=O("outline","lock","Lock",_),y={"IconSearch (size 16)":I,"IconMail (size 16)":u,"IconUser (size 16)":N,"IconCalendar (size 16)":M,"IconLock (size 16)":F,"IconSearch (size 20)":e.jsx(I,{size:20}),"IconMail (size 20)":e.jsx(u,{size:20}),None:void 0},g={"IconEye (size 16)":d,"IconEyeOff (size 16)":w,"IconChevronDown (size 16)":m,"IconCalendar (size 16)":M,"IconEye (size 20)":e.jsx(d,{size:20}),"IconChevronDown (size 20)":e.jsx(m,{size:20}),None:void 0},B={title:"Components/TextField",component:i,argTypes:{disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},prefixIcon:{control:{type:"select"},options:Object.keys(y),mapping:y},trailingIcon:{control:{type:"select"},options:Object.keys(g),mapping:g},onTrailingIconClick:{action:"trailing icon clicked",table:{disable:!0}}}},T=a=>e.jsx(i,{...a}),n=T.bind({});n.args={placeholder:"Enter text...",ontrailingIconClick:()=>alert("Trailing icon clicked!"),disabled:!1,invalid:!1};const s=T.bind({});s.args={type:"number",placeholder:"最小値",defaultValue:"-0.5",step:"0.1"};const o=()=>{const[a,c]=p.useState(""),[l,D]=p.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{placeholder:"日本語で入力して Enter で確定 / type and press Enter",value:a,onChange:t=>c(t.target.value),onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),D(r=>[...r,a]),c(""))}}),e.jsxs("div",{style:{fontSize:14},children:["Submits (",l.length,"):",e.jsx("ul",{children:l.map((t,r)=>e.jsx("li",{children:t||e.jsx("em",{children:"(empty)"})},r))})]})]})};o.__docgenInfo={description:`IME composition guard demo.

Switch your OS input source to Japanese (or any IME-based language) and
type into the field. Press Enter to confirm an IME candidate — the submit
counter must NOT increase. Press Enter again with no active composition,
and the counter increments. With ASCII input, every Enter increments
normally.`,methods:[],displayName:"ImeCompositionGuard"};var h,f,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"args => <TextField {...args} />",...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,E,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <TextField {...args} />",...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var S,z,C,k,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const [submits, setSubmits] = React.useState<string[]>([]);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <TextField placeholder="日本語で入力して Enter で確定 / type and press Enter" value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setSubmits(prev => [...prev, value]);
        setValue('');
      }
    }} />
      <div style={{
      fontSize: 14
    }}>
        Submits ({submits.length}):
        <ul>
          {submits.map((s, i) => <li key={i}>{s || <em>(empty)</em>}</li>)}
        </ul>
      </div>
    </div>;
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source},description:{story:`IME composition guard demo.

Switch your OS input source to Japanese (or any IME-based language) and
type into the field. Press Enter to confirm an IME candidate — the submit
counter must NOT increase. Press Enter again with no active composition,
and the counter increments. With ASCII input, every Enter increments
normally.`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};const H=["Default","Numeric","ImeCompositionGuard"];export{n as Default,o as ImeCompositionGuard,s as Numeric,H as __namedExportsOrder,B as default};
