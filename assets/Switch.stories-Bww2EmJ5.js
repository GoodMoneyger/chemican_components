import{r as l,f as Z,u as ie,j as e,d as ee,g as re,t as oe,h as he,c as R}from"./iframe-DbvviiR-.js";import{u as ue}from"./index-C1i8JWZ_.js";import"./preload-helper-Dp1pzeXC.js";var N="Switch",[pe]=he(N),[me,be]=pe(N),te=l.forwardRef((t,c)=>{const{__scopeSwitch:s,name:n,checked:a,defaultChecked:i,required:r,disabled:o,value:b="on",onCheckedChange:y,form:h,...E}=t,[w,v]=l.useState(null),M=Z(c,j=>v(j)),_=l.useRef(!1),D=w?h||!!w.closest("form"):!0,[S,ne]=ie({prop:a,defaultProp:i??!1,onChange:y,caller:N});return e.jsxs(me,{scope:s,checked:S,disabled:o,children:[e.jsx(ee.button,{type:"button",role:"switch","aria-checked":S,"aria-required":r,"data-state":de(S),"data-disabled":o?"":void 0,disabled:o,value:b,...E,ref:M,onClick:re(t.onClick,j=>{ne(le=>!le),D&&(_.current=j.isPropagationStopped(),_.current||j.stopPropagation())})}),D&&e.jsx(ce,{control:w,bubbles:!_.current,name:n,value:b,checked:S,required:r,disabled:o,form:h,style:{transform:"translateX(-100%)"}})]})});te.displayName=N;var se="SwitchThumb",ae=l.forwardRef((t,c)=>{const{__scopeSwitch:s,...n}=t,a=be(se,s);return e.jsx(ee.span,{"data-state":de(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:c})});ae.displayName=se;var fe="SwitchBubbleInput",ce=l.forwardRef(({__scopeSwitch:t,control:c,checked:s,bubbles:n=!0,...a},i)=>{const r=l.useRef(null),o=Z(r,i),b=ue(s),y=oe(c);return l.useEffect(()=>{const h=r.current;if(!h)return;const E=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(E,"checked").set;if(b!==s&&v){const M=new Event("click",{bubbles:n});v.call(h,s),h.dispatchEvent(M)}},[b,s,n]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...a,tabIndex:-1,ref:o,style:{...a.style,...y,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ce.displayName=fe;function de(t){return t?"checked":"unchecked"}var ke=te,Ce=ae;const d=l.forwardRef(({className:t,label:c,id:s,...n},a)=>{const i=s||(c?`switch-${c}`:void 0),r=e.jsx(ke,{ref:a,id:i,"data-slot":"switch",className:R(`peer data-[state=checked]:enabled:bg-status-success
        data-[state=unchecked]:enabled:bg-shape-accent-gray-soft
        data-[state=checked]:disabled:bg-interactive-neutral-selected
        data-[state=unchecked]:disabled:bg-interactive-disabled h-6 w-10
        data-[state=checked]:enabled:hover:bg-shape-interactive-primary-hover
        data-[state=unchecked]:enabled:hover:bg-shape-accent-gray-strong
        focus-visible:ring-interactive-focused inline-flex shrink-0
        cursor-pointer items-center rounded-full transition-all outline-none
        focus-visible:ring-[3px] disabled:cursor-not-allowed`,t),...n,children:e.jsx(Ce,{"data-slot":"switch-thumb",className:R(`data-[state=checked]:bg-shape-interactive-inverse size-4
          data-[state=unchecked]:not-data-disabled:bg-shape-accent-gray-pale
          data-[state=unchecked]:data-disabled:bg-shape-interactive-inverse
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-1 pointer-events-none block
          rounded-full ring-0 transition-transform`)})});return c?e.jsxs("div",{className:"gap-3 flex items-center",children:[r,e.jsx("label",{htmlFor:i,className:"text-body-primary font-semibold cursor-pointer select-none",children:c})]}):r});d.displayName="Switch";d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const ve={title:"Components/Switch",component:d,argTypes:{label:{control:{type:"text"}},disabled:{control:{type:"boolean"}},defaultChecked:{control:{type:"boolean"}},onCheckedChange:{action:"changed",table:{disable:!0}}},parameters:{design:{type:"figma"},radixDocs:{primitive:"Switch",url:"https://www.radix-ui.com/primitives/docs/components/switch"}}},x=t=>{const[c,s]=l.useState(t.defaultChecked||!1);return e.jsx(d,{...t,checked:c,onCheckedChange:n=>{var a;s(n),(a=t.onCheckedChange)==null||a.call(t,n)}})},f=x.bind({});f.args={disabled:!1,defaultChecked:!1};const u=x.bind({});u.args={label:"Enable notifications",disabled:!1,defaultChecked:!1};u.parameters={docs:{description:{story:"Switch with a label. The label is properly linked to the switch control using htmlFor for better accessibility. Clicking the label will toggle the switch."}}};const k=x.bind({});k.args={label:"Enable notifications",disabled:!1,defaultChecked:!0};const C=x.bind({});C.args={label:"Enable notifications",disabled:!0,defaultChecked:!1};const g=x.bind({});g.args={label:"Enable notifications",disabled:!0,defaultChecked:!0};const p=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-lg font-semibold",children:"Default States"}),e.jsxs("div",{className:"gap-3 flex flex-col",children:[e.jsx(d,{label:"Unchecked"}),e.jsx(d,{label:"Checked",defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-lg font-semibold",children:"Disabled States"}),e.jsxs("div",{className:"gap-3 flex flex-col",children:[e.jsx(d,{label:"Disabled Unchecked",disabled:!0}),e.jsx(d,{label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-lg font-semibold",children:"Without Label"}),e.jsxs("div",{className:"gap-3 flex flex-col",children:[e.jsx(d,{}),e.jsx(d,{defaultChecked:!0}),e.jsx(d,{disabled:!0})]})]})]});p.parameters={docs:{description:{story:"Comprehensive view of all switch states including enabled, checked, and disabled variations, both with and without labels."}}};const m=()=>{const[t,c]=l.useState(!1),[s,n]=l.useState(!0),[a,i]=l.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-md p-4 border",children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Settings"}),e.jsxs("div",{className:"gap-4 flex flex-col",children:[e.jsx(d,{label:"Airplane Mode",checked:t,onCheckedChange:c}),e.jsx(d,{label:"Wi-Fi",checked:s,onCheckedChange:n,disabled:t}),e.jsx(d,{label:"Bluetooth",checked:a,onCheckedChange:i,disabled:t})]})]}),e.jsxs("div",{className:"text-sm text-body-secondary",children:[e.jsx("p",{children:"Current state:"}),e.jsxs("ul",{className:"ml-4 mt-2 list-disc",children:[e.jsxs("li",{children:["Airplane Mode: ",t?"On":"Off"]}),e.jsxs("li",{children:["Wi-Fi: ",s?"On":"Off"]}),e.jsxs("li",{children:["Bluetooth: ",a?"On":"Off"]})]})]})]})};m.parameters={docs:{description:{story:"Example of controlled switches with interdependent states. When Airplane Mode is enabled, Wi-Fi and Bluetooth switches become disabled."}}};p.__docgenInfo={description:"",methods:[],displayName:"AllStates"};m.__docgenInfo={description:"",methods:[],displayName:"ControlledExample"};var B,O,A;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.defaultChecked || false);
  return <Switch {...args} checked={checked} onCheckedChange={newChecked => {
    setChecked(newChecked);
    args.onCheckedChange?.(newChecked);
  }} />;
}`,...(A=(O=f.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var W,P,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.defaultChecked || false);
  return <Switch {...args} checked={checked} onCheckedChange={newChecked => {
    setChecked(newChecked);
    args.onCheckedChange?.(newChecked);
  }} />;
}`,...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var I,F,U;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.defaultChecked || false);
  return <Switch {...args} checked={checked} onCheckedChange={newChecked => {
    setChecked(newChecked);
    args.onCheckedChange?.(newChecked);
  }} />;
}`,...(U=(F=k.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var L,q,H;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.defaultChecked || false);
  return <Switch {...args} checked={checked} onCheckedChange={newChecked => {
    setChecked(newChecked);
    args.onCheckedChange?.(newChecked);
  }} />;
}`,...(H=(q=C.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var z,$,X;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.defaultChecked || false);
  return <Switch {...args} checked={checked} onCheckedChange={newChecked => {
    setChecked(newChecked);
    args.onCheckedChange?.(newChecked);
  }} />;
}`,...(X=($=g.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-semibold">Default States</h3>
        <div className="gap-3 flex flex-col">
          <Switch label="Unchecked" />
          <Switch label="Checked" defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Disabled States</h3>
        <div className="gap-3 flex flex-col">
          <Switch label="Disabled Unchecked" disabled />
          <Switch label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Without Label</h3>
        <div className="gap-3 flex flex-col">
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
        </div>
      </div>
    </div>;
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  return <div className="space-y-4">
      <div className="rounded-md p-4 border">
        <h3 className="mb-4 text-lg font-semibold">Settings</h3>
        <div className="gap-4 flex flex-col">
          <Switch label="Airplane Mode" checked={airplaneMode} onCheckedChange={setAirplaneMode} />
          <Switch label="Wi-Fi" checked={wifi} onCheckedChange={setWifi} disabled={airplaneMode} />
          <Switch label="Bluetooth" checked={bluetooth} onCheckedChange={setBluetooth} disabled={airplaneMode} />
        </div>
      </div>
      <div className="text-sm text-body-secondary">
        <p>Current state:</p>
        <ul className="ml-4 mt-2 list-disc">
          <li>Airplane Mode: {airplaneMode ? 'On' : 'Off'}</li>
          <li>Wi-Fi: {wifi ? 'On' : 'Off'}</li>
          <li>Bluetooth: {bluetooth ? 'On' : 'Off'}</li>
        </ul>
      </div>
    </div>;
}`,...(Y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const Se=["Default","WithLabel","Checked","Disabled","DisabledChecked","AllStates","ControlledExample"];export{p as AllStates,k as Checked,m as ControlledExample,f as Default,C as Disabled,g as DisabledChecked,u as WithLabel,Se as __namedExportsOrder,ve as default};
