import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe--ywS61NI.js";import{c as k}from"./index-VFRA1EAd.js";import{c as D}from"./utils-zRovIat4.js";import{c as I,u as fe}from"./index-CUR_LMDq.js";import{u as C}from"./index-C1YEi2Ea.js";import{c as Z,P as _}from"./index-DSXp6vF-.js";import{c as ee,I as me,R as ve}from"./index-C1_SI-Ti.js";import{u as be}from"./index-kKI2tLsl.js";import{u as Re}from"./index-CpstfNSz.js";import{u as he}from"./index-CFRQbpjt.js";import{P as xe}from"./index-Xq8yi465.js";import"./preload-helper-Dp1pzeXC.js";import"./index-cdUS8f4x.js";import"./index-DM-f7R8a.js";import"./index-1kTLt1_q.js";import"./index-fe4EGaDg.js";import"./index-CqVVGMNS.js";var P="Radio",[ge,ae]=Z(P),[ye,Be]=ge(P),oe=l.forwardRef((a,s)=>{const{__scopeRadio:t,name:d,checked:o=!1,required:r,disabled:i,value:c="on",onCheck:u,form:v,...b}=a,[m,R]=l.useState(null),n=C(s,g=>R(g)),p=l.useRef(!1),x=m?v||!!m.closest("form"):!0;return e.jsxs(ye,{scope:t,checked:o,disabled:i,children:[e.jsx(_.button,{type:"button",role:"radio","aria-checked":o,"data-state":ie(o),"data-disabled":i?"":void 0,disabled:i,value:c,...b,ref:n,onClick:I(a.onClick,g=>{o||u==null||u(),x&&(p.current=g.isPropagationStopped(),p.current||g.stopPropagation())})}),x&&e.jsx(se,{control:m,bubbles:!p.current,name:d,value:c,checked:o,required:r,disabled:i,form:v,style:{transform:"translateX(-100%)"}})]})});oe.displayName=P;var te="RadioIndicator",re=l.forwardRef((a,s)=>{const{__scopeRadio:t,forceMount:d,...o}=a,r=Be(te,t);return e.jsx(xe,{present:d||r.checked,children:e.jsx(_.span,{"data-state":ie(r.checked),"data-disabled":r.disabled?"":void 0,...o,ref:s})})});re.displayName=te;var je="RadioBubbleInput",se=l.forwardRef(({__scopeRadio:a,control:s,checked:t,bubbles:d=!0,...o},r)=>{const i=l.useRef(null),c=C(i,r),u=he(t),v=Re(s);return l.useEffect(()=>{const b=i.current;if(!b)return;const m=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(m,"checked").set;if(u!==t&&n){const p=new Event("click",{bubbles:d});n.call(b,t),b.dispatchEvent(p)}},[u,t,d]),e.jsx(_.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...o,tabIndex:-1,ref:c,style:{...o.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});se.displayName=je;function ie(a){return a?"checked":"unchecked"}var Ne=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],w="RadioGroup",[Ge]=Z(w,[ee,ae]),ne=ee(),de=ae(),[Se,Ee]=Ge(w),le=l.forwardRef((a,s)=>{const{__scopeRadioGroup:t,name:d,defaultValue:o,value:r,required:i=!1,disabled:c=!1,orientation:u,dir:v,loop:b=!0,onValueChange:m,...R}=a,n=ne(t),p=be(v),[x,g]=fe({prop:r,defaultProp:o??null,onChange:m,caller:w});return e.jsx(Se,{scope:t,name:d,required:i,disabled:c,value:x,onValueChange:g,children:e.jsx(ve,{asChild:!0,...n,orientation:u,dir:p,loop:b,children:e.jsx(_.div,{role:"radiogroup","aria-required":i,"aria-orientation":u,"data-disabled":c?"":void 0,dir:p,...R,ref:s})})})});le.displayName=w;var ce="RadioGroupItem",ue=l.forwardRef((a,s)=>{const{__scopeRadioGroup:t,disabled:d,...o}=a,r=Ee(ce,t),i=r.disabled||d,c=ne(t),u=de(t),v=l.useRef(null),b=C(s,v),m=r.value===o.value,R=l.useRef(!1);return l.useEffect(()=>{const n=x=>{Ne.includes(x.key)&&(R.current=!0)},p=()=>R.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",p)}},[]),e.jsx(me,{asChild:!0,...c,focusable:!i,active:m,children:e.jsx(oe,{disabled:i,required:r.required,checked:m,...u,...o,name:r.name,ref:b,onCheck:()=>r.onValueChange(o.value),onKeyDown:I(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:I(o.onFocus,()=>{var n;R.current&&((n=v.current)==null||n.click())})})})});ue.displayName=ce;var De="RadioGroupIndicator",pe=l.forwardRef((a,s)=>{const{__scopeRadioGroup:t,...d}=a,o=de(t);return e.jsx(re,{...o,...d,ref:s})});pe.displayName=De;var _e=le,we=ue,Ie=pe;const ke=k("gap-xs flex w-fit items-center",{variants:{disabled:{true:"text-body-disabled cursor-not-allowed",false:"text-body-primary cursor-pointer"}}}),Ce=k(`border-shape-interactive-neutral-default
  focus:border-shape-interactive-primary-hover text-body-primary
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused group size-[19px] cursor-[inherit]
  rounded-full border-[1.5px] outline-none focus-visible:ring-4`,{variants:{disabled:{true:`bg-interactive-disabled
        data-[state=checked]:bg-shape-interactive-inverse
        data-[state=checked]:disabled:border-shape-interactive-neutral-disabled
        text-body-disabled border-transparent`},invalid:{true:""}},compoundVariants:[{disabled:!1,invalid:!0,class:`border-shape-interactive-alert-default text-body-alert
        hover:border-shape-interactive-alert-hover
        data-[state=checked]:border-shape-interactive-alert-default
        data-[state=checked]:hover:border-shape-interactive-alert-hover
        focus-visible:ring-interactive-alert-focused`},{disabled:!1,invalid:!1,class:`data-[state=checked]:border-interactive-selected
        hover:border-shape-interactive-primary-hover
        data-[state=checked]:hover:border-interactive-hover`}],defaultVariants:{disabled:!1,invalid:!1}}),Pe=k(`group-disabled:after:bg-interactive-disabled relative flex size-full
  cursor-[inherit] items-center justify-center after:block after:size-[.5rem]
  after:rounded-full`,{variants:{invalid:{true:`after:bg-interactive-alert-default
        group-hover:after:bg-interactive-alert-hover`,false:`after:bg-shape-interactive-primary-selected
        group-hover:after:bg-interactive-primary-hover`}}}),f=({value:a,label:s,id:t,children:d,disabled:o=!1,invalid:r=!1,...i})=>{const c=t||`radio-${a}`;return e.jsxs("div",{className:D(ke({disabled:o})),children:[e.jsx(we,{id:c,value:a,disabled:o,"aria-invalid":r,className:D(Ce({disabled:o,invalid:r})),...i,children:e.jsx(Ie,{className:D(Pe({invalid:r}))})}),e.jsxs("label",{htmlFor:c,className:`gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,children:[s,d]})]})},h=({children:a,className:s})=>e.jsx(_e,{className:D("gap-xs flex flex-col",s),children:a});f.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ze={title:"Components/RadioButton",component:f,parameters:{radixDocs:{primitive:"Radio Group",url:"https://www.radix-ui.com/primitives/docs/components/radio-group"}}},E=a=>e.jsxs(h,{children:[e.jsx(f,{...a,label:"選択肢",value:"option1"}),e.jsx(f,{...a,label:"選択肢",value:"option2"}),e.jsx(f,{...a,label:"選択肢",value:"option3"})]}),j=E.bind({});j.args={invalid:!1,disabled:!1};const y=E.bind({});y.args={invalid:!1,disabled:!1};y.decorators=[a=>e.jsx(h,{defaultValue:"option2",children:e.jsx(a,{})})];const N=E.bind({});N.args={invalid:!0,disabled:!1};const G=E.bind({});G.args={invalid:!1,disabled:!0};const B=E.bind({});B.args={invalid:!1,disabled:!0};B.decorators=[a=>e.jsx(h,{defaultValue:"option2",children:e.jsx(a,{})})];const S=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Default States"}),e.jsxs(h,{className:"space-y-2",children:[e.jsx(f,{label:"選択肢 (Default Off)",value:"default-off"}),e.jsx(f,{label:"選択肢 (Default On)",value:"default-on"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Error States"}),e.jsxs(h,{className:"space-y-2",children:[e.jsx(f,{label:"選択肢 (Error Off)",value:"error-off",invalid:!0}),e.jsx(f,{label:"選択肢 (Error On)",value:"error-on",invalid:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Disabled States"}),e.jsxs(h,{className:"space-y-2",defaultValue:"disabled-on",children:[e.jsx(f,{label:"選択肢 (Disabled Off)",value:"disabled-off",disabled:!0}),e.jsx(f,{label:"選択肢 (Disabled On)",value:"disabled-on",disabled:!0})]})]})]});S.__docgenInfo={description:"",methods:[],displayName:"AllStates"};var O,A,V;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(V=(A=j.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,T,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(M=(T=y.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var F,L,z;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(z=(L=N.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var K,U,H;G.parameters={...G.parameters,docs:{...(K=G.parameters)==null?void 0:K.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(H=(U=G.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,J,Q;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className="space-y-4">
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
  </div>`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ea=["Default","Selected","Error","Disabled","DisabledSelected","AllStates"];export{S as AllStates,j as Default,G as Disabled,B as DisabledSelected,N as Error,y as Selected,ea as __namedExportsOrder,Ze as default};
