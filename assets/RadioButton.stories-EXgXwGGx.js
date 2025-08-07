import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as I}from"./index-CRGxjvZy.js";import{r as l}from"./iframe-Bn-bUIPO.js";import{c as w,u as me}from"./index-qoxOkdfh.js";import{u as k}from"./index-DgDDwYtN.js";import{c as Z,P as D}from"./index-bYW-dLQW.js";import{c as ee,I as ve,R as be}from"./index-CZJP2-U1.js";import{u as Re}from"./index-1uFb-3NZ.js";import{u as he}from"./index-CMsyV5NS.js";import{u as ge}from"./index-DCxeKRmf.js";import{P as xe}from"./index-DSGx3Quq.js";import{t as P}from"./bundle-mjs-DAWI7bSt.js";import{c as ae}from"./utils-BCsZDoRo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsCJ4FxG.js";import"./index-BAg2UnU2.js";import"./index-CmnV8HPl.js";import"./index-BcYDBaBf.js";import"./index-20yEGz5W.js";var C="Radio",[ye,oe]=Z(C),[Be,je]=ye(C),re=l.forwardRef((a,s)=>{const{__scopeRadio:r,name:d,checked:o=!1,required:t,disabled:i,value:c="on",onCheck:u,form:v,...b}=a,[m,R]=l.useState(null),n=k(s,x=>R(x)),p=l.useRef(!1),g=m?v||!!m.closest("form"):!0;return e.jsxs(Be,{scope:r,checked:o,disabled:i,children:[e.jsx(D.button,{type:"button",role:"radio","aria-checked":o,"data-state":ne(o),"data-disabled":i?"":void 0,disabled:i,value:c,...b,ref:n,onClick:w(a.onClick,x=>{o||u==null||u(),g&&(p.current=x.isPropagationStopped(),p.current||x.stopPropagation())})}),g&&e.jsx(ie,{control:m,bubbles:!p.current,name:d,value:c,checked:o,required:t,disabled:i,form:v,style:{transform:"translateX(-100%)"}})]})});re.displayName=C;var te="RadioIndicator",se=l.forwardRef((a,s)=>{const{__scopeRadio:r,forceMount:d,...o}=a,t=je(te,r);return e.jsx(xe,{present:d||t.checked,children:e.jsx(D.span,{"data-state":ne(t.checked),"data-disabled":t.disabled?"":void 0,...o,ref:s})})});se.displayName=te;var Ne="RadioBubbleInput",ie=l.forwardRef(({__scopeRadio:a,control:s,checked:r,bubbles:d=!0,...o},t)=>{const i=l.useRef(null),c=k(i,t),u=ge(r),v=he(s);return l.useEffect(()=>{const b=i.current;if(!b)return;const m=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(m,"checked").set;if(u!==r&&n){const p=new Event("click",{bubbles:d});n.call(b,r),b.dispatchEvent(p)}},[u,r,d]),e.jsx(D.input,{type:"radio","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:c,style:{...o.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ie.displayName=Ne;function ne(a){return a?"checked":"unchecked"}var Ge=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],_="RadioGroup",[Se,aa]=Z(_,[ee,oe]),de=ee(),le=oe(),[Ee,De]=Se(_),ce=l.forwardRef((a,s)=>{const{__scopeRadioGroup:r,name:d,defaultValue:o,value:t,required:i=!1,disabled:c=!1,orientation:u,dir:v,loop:b=!0,onValueChange:m,...R}=a,n=de(r),p=Re(v),[g,x]=me({prop:t,defaultProp:o??null,onChange:m,caller:_});return e.jsx(Ee,{scope:r,name:d,required:i,disabled:c,value:g,onValueChange:x,children:e.jsx(be,{asChild:!0,...n,orientation:u,dir:p,loop:b,children:e.jsx(D.div,{role:"radiogroup","aria-required":i,"aria-orientation":u,"data-disabled":c?"":void 0,dir:p,...R,ref:s})})})});ce.displayName=_;var ue="RadioGroupItem",pe=l.forwardRef((a,s)=>{const{__scopeRadioGroup:r,disabled:d,...o}=a,t=De(ue,r),i=t.disabled||d,c=de(r),u=le(r),v=l.useRef(null),b=k(s,v),m=t.value===o.value,R=l.useRef(!1);return l.useEffect(()=>{const n=g=>{Ge.includes(g.key)&&(R.current=!0)},p=()=>R.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",p)}},[]),e.jsx(ve,{asChild:!0,...c,focusable:!i,active:m,children:e.jsx(re,{disabled:i,required:t.required,checked:m,...u,...o,name:t.name,ref:b,onCheck:()=>t.onValueChange(o.value),onKeyDown:w(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:w(o.onFocus,()=>{var n;R.current&&((n=v.current)==null||n.click())})})})});pe.displayName=ue;var _e="RadioGroupIndicator",fe=l.forwardRef((a,s)=>{const{__scopeRadioGroup:r,...d}=a,o=le(r);return e.jsx(se,{...o,...d,ref:s})});fe.displayName=_e;var we=ce,Ie=pe,ke=fe;const Ce=I("gap-sm flex w-fit items-center",{variants:{disabled:{true:"text-body-disabled cursor-not-allowed",false:"text-body-primary cursor-pointer"}}}),Pe=I(`border-shape-interactive-neutral-default
  focus:border-shape-interactive-primary-hover text-body-primary
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused group size-[19px] cursor-[inherit]
  rounded-full border-[1.5px] outline-none focus-visible:ring-4`,{variants:{disabled:{true:`bg-input-disabled
        data-[state=checked]:bg-shape-interactive-inverse
        data-[state=checked]:disabled:border-interactive-disabled
        text-body-disabled border-transparent`},invalid:{true:""}},compoundVariants:[{disabled:!1,invalid:!0,class:`border-shape-interactive-danger-default text-body-alert
        hover:border-shape-interactive-danger-hover
        data-[state=checked]:border-shape-interactive-danger-default
        data-[state=checked]:hover:border-shape-interactive-danger-hover
        focus-visible:ring-interactive-alert-focused`},{disabled:!1,invalid:!1,class:`data-[state=checked]:border-interactive-selected
        hover:border-shape-interactive-primary-hover
        data-[state=checked]:hover:border-[#115A53]`}],defaultVariants:{disabled:!1,invalid:!1}}),Oe=I(`group-disabled:after:bg-interactive-disabled relative flex size-full
  cursor-[inherit] items-center justify-center after:block after:size-[.5rem]
  after:rounded-full`,{variants:{invalid:{true:`after:bg-interactive-danger-default
        group-hover:after:bg-interactive-danger-hover`,false:`after:bg-shape-interactive-primary-selected
        group-hover:after:bg-interactive-primary-hover`}}}),f=({value:a,label:s,id:r,children:d,disabled:o=!1,invalid:t=!1,...i})=>{const c=r||`radio-${a}`;return e.jsxs("div",{className:ae(Ce({disabled:o})),children:[e.jsx(Ie,{id:c,value:a,disabled:o,"aria-invalid":t,className:P(Pe({disabled:o,invalid:t})),...i,children:e.jsx(ke,{className:P(Oe({invalid:t}))})}),e.jsxs("label",{htmlFor:c,className:`gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,children:[s,d]})]})},h=({children:a,className:s})=>e.jsx(we,{className:ae("gap-xs flex flex-col",s),children:a});f.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const oa={title:"Components/RadioButton",component:f,parameters:{radixDocs:{primitive:"Radio Group",url:"https://www.radix-ui.com/primitives/docs/components/radio-group"}}},E=a=>e.jsxs(h,{children:[e.jsx(f,{...a,label:"選択肢",value:"option1"}),e.jsx(f,{...a,label:"選択肢",value:"option2"}),e.jsx(f,{...a,label:"選択肢",value:"option3"})]}),j=E.bind({});j.args={invalid:!1,disabled:!1};const y=E.bind({});y.args={invalid:!1,disabled:!1};y.decorators=[a=>e.jsx(h,{defaultValue:"option2",children:e.jsx(a,{})})];const N=E.bind({});N.args={invalid:!0,disabled:!1};const G=E.bind({});G.args={invalid:!1,disabled:!0};const B=E.bind({});B.args={invalid:!1,disabled:!0};B.decorators=[a=>e.jsx(h,{defaultValue:"option2",children:e.jsx(a,{})})];const S=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Default States"}),e.jsxs(h,{className:"space-y-2",children:[e.jsx(f,{label:"選択肢 (Default Off)",value:"default-off"}),e.jsx(f,{label:"選択肢 (Default On)",value:"default-on"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Error States"}),e.jsxs(h,{className:"space-y-2",children:[e.jsx(f,{label:"選択肢 (Error Off)",value:"error-off",invalid:!0}),e.jsx(f,{label:"選択肢 (Error On)",value:"error-on",invalid:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"Disabled States"}),e.jsxs(h,{className:"space-y-2",defaultValue:"disabled-on",children:[e.jsx(f,{label:"選択肢 (Disabled Off)",value:"disabled-off",disabled:!0}),e.jsx(f,{label:"選択肢 (Disabled On)",value:"disabled-on",disabled:!0})]})]})]});S.__docgenInfo={description:"",methods:[],displayName:"AllStates"};var O,A,V;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`args => <RadioButtonGroup>
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
  </div>`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ra=["Default","Selected","Error","Disabled","DisabledSelected","AllStates"];export{S as AllStates,j as Default,G as Disabled,B as DisabledSelected,N as Error,y as Selected,ra as __namedExportsOrder,oa as default};
