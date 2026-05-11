import{e as p,j as e}from"./iframe-BSOqAmZk.js";import{T as i}from"./TextField-DWf3muwV.js";import{c as j}from"./createReactComponent-70DMYjsS.js";import{I as d}from"./IconChevronDown-CtQZqA1q.js";import{I as N,a as m}from"./IconEye-NBAUaoOP.js";import{I as O}from"./IconUser-C5PtiDk7.js";import{I as u}from"./IconMail-CmnJcTxS.js";import{I as y}from"./IconSearch-B2rmvtdb.js";import"./preload-helper-Dp1pzeXC.js";import"./useCompositionGuard-ktkmzQ09.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]],T=j("outline","calendar","Calendar",_);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]],V=j("outline","lock","Lock",F),h={"IconSearch (size 16)":y,"IconMail (size 16)":u,"IconUser (size 16)":O,"IconCalendar (size 16)":T,"IconLock (size 16)":V,"IconSearch (size 20)":e.jsx(y,{size:20}),"IconMail (size 20)":e.jsx(u,{size:20}),None:void 0},v={"IconEye (size 16)":m,"IconEyeOff (size 16)":N,"IconChevronDown (size 16)":d,"IconCalendar (size 16)":T,"IconEye (size 20)":e.jsx(m,{size:20}),"IconChevronDown (size 20)":e.jsx(d,{size:20}),None:void 0},q={title:"Components/TextField",component:i,argTypes:{disabled:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},prefixIcon:{control:{type:"select"},options:Object.keys(h),mapping:h},trailingIcon:{control:{type:"select"},options:Object.keys(v),mapping:v},onTrailingIconClick:{action:"trailing icon clicked",table:{disable:!0}}}},D=a=>e.jsx(i,{...a}),o=D.bind({});o.args={placeholder:"Enter text...",ontrailingIconClick:()=>alert("Trailing icon clicked!"),disabled:!1,invalid:!1};const s=D.bind({});s.args={type:"number",placeholder:"最小値",defaultValue:"-0.5",step:"0.1"};const n=()=>{const[a,c]=p.useState(""),[l,w]=p.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{placeholder:"日本語で入力して Enter で確定 / type and press Enter",value:a,onChange:t=>c(t.target.value),onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),w(r=>[...r,a]),c(""))}}),e.jsxs("div",{style:{fontSize:14},children:["Submits (",l.length,"):",e.jsx("ul",{children:l.map((t,r)=>e.jsx("li",{children:t||e.jsx("em",{children:"(empty)"})},r))})]})]})};n.__docgenInfo={description:`IME composition guard demo.

Switch your OS input source to Japanese (or any IME-based language) and
type into the field. Press Enter to confirm an IME candidate — the submit
counter must NOT increase. Press Enter again with no active composition,
and the counter increments. With ASCII input, every Enter increments
normally.`,methods:[],displayName:"ImeCompositionGuard"};var I,g,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:"args => <TextField {...args} />",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,E,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <TextField {...args} />",...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var S,k,z,M,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(z=(k=n.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:`IME composition guard demo.

Switch your OS input source to Japanese (or any IME-based language) and
type into the field. Press Enter to confirm an IME candidate — the submit
counter must NOT increase. Press Enter again with no active composition,
and the counter increments. With ASCII input, every Enter increments
normally.`,...(C=(M=n.parameters)==null?void 0:M.docs)==null?void 0:C.description}}};const B=["Default","Numeric","ImeCompositionGuard"];export{o as Default,n as ImeCompositionGuard,s as Numeric,B as __namedExportsOrder,q as default};
