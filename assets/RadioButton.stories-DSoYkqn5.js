import{r as c,f as I,j as e,g as w,u as fe,d as E,P as ve,h as Z,s as be,c as _,m as k}from"./iframe-Bzmdgro-.js";import{I as me,R as Re,c as ee}from"./index-DW5LVH36.js";import{u as he}from"./index-bIIk4E0Z.js";import{u as xe}from"./index-BTKor-c6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyHxDBaD.js";var C="Radio",[ge,ae]=Z(C),[ye,Be]=ge(C),oe=c.forwardRef((a,i)=>{const{__scopeRadio:t,name:l,checked:o=!1,required:r,disabled:n,value:u="on",onCheck:p,form:b,...m}=a,[v,R]=c.useState(null),d=I(i,g=>R(g)),f=c.useRef(!1),x=v?b||!!v.closest("form"):!0;return e.jsxs(ye,{scope:t,checked:o,disabled:n,children:[e.jsx(E.button,{type:"button",role:"radio","aria-checked":o,"data-state":ie(o),"data-disabled":n?"":void 0,disabled:n,value:u,...m,ref:d,onClick:w(a.onClick,g=>{o||p==null||p(),x&&(f.current=g.isPropagationStopped(),f.current||g.stopPropagation())})}),x&&e.jsx(se,{control:v,bubbles:!f.current,name:l,value:u,checked:o,required:r,disabled:n,form:b,style:{transform:"translateX(-100%)"}})]})});oe.displayName=C;var te="RadioIndicator",re=c.forwardRef((a,i)=>{const{__scopeRadio:t,forceMount:l,...o}=a,r=Be(te,t);return e.jsx(ve,{present:l||r.checked,children:e.jsx(E.span,{"data-state":ie(r.checked),"data-disabled":r.disabled?"":void 0,...o,ref:i})})});re.displayName=te;var je="RadioBubbleInput",se=c.forwardRef(({__scopeRadio:a,control:i,checked:t,bubbles:l=!0,...o},r)=>{const n=c.useRef(null),u=I(n,r),p=xe(t),b=be(i);return c.useEffect(()=>{const m=n.current;if(!m)return;const v=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(v,"checked").set;if(p!==t&&d){const f=new Event("click",{bubbles:l});d.call(m,t),m.dispatchEvent(f)}},[p,t,l]),e.jsx(E.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...o,tabIndex:-1,ref:u,style:{...o.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});se.displayName=je;function ie(a){return a?"checked":"unchecked"}var Ne=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],D="RadioGroup",[Se]=Z(D,[ee,ae]),ne=ee(),de=ae(),[Ge,_e]=Se(D),le=c.forwardRef((a,i)=>{const{__scopeRadioGroup:t,name:l,defaultValue:o,value:r,required:n=!1,disabled:u=!1,orientation:p,dir:b,loop:m=!0,onValueChange:v,...R}=a,d=ne(t),f=he(b),[x,g]=fe({prop:r,defaultProp:o??null,onChange:v,caller:D});return e.jsx(Ge,{scope:t,name:l,required:n,disabled:u,value:x,onValueChange:g,children:e.jsx(Re,{asChild:!0,...d,orientation:p,dir:f,loop:m,children:e.jsx(E.div,{role:"radiogroup","aria-required":n,"aria-orientation":p,"data-disabled":u?"":void 0,dir:f,...R,ref:i})})})});le.displayName=D;var ce="RadioGroupItem",ue=c.forwardRef((a,i)=>{const{__scopeRadioGroup:t,disabled:l,...o}=a,r=_e(ce,t),n=r.disabled||l,u=ne(t),p=de(t),b=c.useRef(null),m=I(i,b),v=r.value===o.value,R=c.useRef(!1);return c.useEffect(()=>{const d=x=>{Ne.includes(x.key)&&(R.current=!0)},f=()=>R.current=!1;return document.addEventListener("keydown",d),document.addEventListener("keyup",f),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",f)}},[]),e.jsx(me,{asChild:!0,...u,focusable:!n,active:v,children:e.jsx(oe,{disabled:n,required:r.required,checked:v,...p,...o,name:r.name,ref:m,onCheck:()=>r.onValueChange(o.value),onKeyDown:w(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:w(o.onFocus,()=>{var d;R.current&&((d=b.current)==null||d.click())})})})});ue.displayName=ce;var Ee="RadioGroupIndicator",pe=c.forwardRef((a,i)=>{const{__scopeRadioGroup:t,...l}=a,o=de(t);return e.jsx(re,{...o,...l,ref:i})});pe.displayName=Ee;var De=le,we=ue,Ie=pe;const ke=k("gap-xs flex w-fit items-center",{variants:{disabled:{true:"text-body-disabled cursor-not-allowed",false:"text-body-primary cursor-pointer"}}}),Ce=k(`border-shape-interactive-neutral-default
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
        data-[state=checked]:hover:border-interactive-hover`}],defaultVariants:{disabled:!1,invalid:!1}}),Oe=k(`group-disabled:after:bg-interactive-disabled relative flex size-full
  cursor-[inherit] items-center justify-center after:block after:size-[.5rem]
  after:rounded-full`,{variants:{invalid:{true:`after:bg-interactive-alert-default
        group-hover:after:bg-interactive-alert-hover`,false:`after:bg-shape-interactive-primary-selected
        group-hover:after:bg-interactive-primary-hover`}}}),s=({value:a,label:i,id:t,children:l,disabled:o=!1,invalid:r=!1,...n})=>{const u=t||`radio-${a}`;return e.jsxs("div",{className:_(ke({disabled:o})),children:[e.jsx(we,{id:u,value:a,disabled:o,"aria-invalid":r,className:_(Ce({disabled:o,invalid:r})),...n,children:e.jsx(Ie,{className:_(Oe({invalid:r}))})}),e.jsxs("label",{htmlFor:u,className:`gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,children:[i,l]})]})},h=({children:a,className:i,...t})=>e.jsx(De,{className:_("gap-xs flex flex-col",i),...t,children:a});s.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Fe={title:"Components/RadioButton",component:s,parameters:{radixDocs:{primitive:"Radio Group",url:"https://www.radix-ui.com/primitives/docs/components/radio-group"}}},O=a=>e.jsxs(h,{children:[e.jsx(s,{...a,label:"選択肢",value:"option1"}),e.jsx(s,{...a,label:"選択肢",value:"option2"}),e.jsx(s,{...a,label:"選択肢",value:"option3"})]}),j=O.bind({});j.args={invalid:!1,disabled:!1};const y=a=>e.jsxs(h,{defaultValue:"option2",children:[e.jsx(s,{...a,label:"選択肢",value:"option1"}),e.jsx(s,{...a,label:"選択肢",value:"option2"}),e.jsx(s,{...a,label:"選択肢",value:"option3"})]});y.args={invalid:!1,disabled:!1};const N=O.bind({});N.args={invalid:!0,disabled:!1};const S=O.bind({});S.args={invalid:!1,disabled:!0};const B=a=>e.jsxs(h,{defaultValue:"option2",children:[e.jsx(s,{...a,label:"選択肢",value:"option1"}),e.jsx(s,{...a,label:"選択肢",value:"option2"}),e.jsx(s,{...a,label:"選択肢",value:"option3"})]});B.args={invalid:!1,disabled:!0};const G=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Default States"}),e.jsxs(h,{className:"space-y-2",children:[e.jsx(s,{label:"選択肢 (Default Off)",value:"default-off"}),e.jsx(s,{label:"選択肢 (Default On)",value:"default-on"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Error States"}),e.jsxs(h,{className:"space-y-2",children:[e.jsx(s,{label:"選択肢 (Error Off)",value:"error-off",invalid:!0}),e.jsx(s,{label:"選択肢 (Error On)",value:"error-on",invalid:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Disabled States"}),e.jsxs(h,{className:"space-y-2",defaultValue:"disabled-on",children:[e.jsx(s,{label:"選択肢 (Disabled Off)",value:"disabled-off",disabled:!0}),e.jsx(s,{label:"選択肢 (Disabled On)",value:"disabled-on",disabled:!0})]})]})]});y.__docgenInfo={description:"",methods:[],displayName:"Selected"};B.__docgenInfo={description:"",methods:[],displayName:"DisabledSelected"};G.__docgenInfo={description:"",methods:[],displayName:"AllStates"};var P,A,V;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(V=(A=j.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,T,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`args => <RadioButtonGroup defaultValue="option2">
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(M=(T=y.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var F,L,z;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(z=(L=N.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var K,U,H;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`args => <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(H=(U=S.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`args => <RadioButtonGroup defaultValue="option2">
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,J,Q;G.parameters={...G.parameters,docs:{...($=G.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className="space-y-4">
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
  </div>`,...(Q=(J=G.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Le=["Default","Selected","Error","Disabled","DisabledSelected","AllStates"];export{G as AllStates,j as Default,S as Disabled,B as DisabledSelected,N as Error,y as Selected,Le as __namedExportsOrder,Fe as default};
