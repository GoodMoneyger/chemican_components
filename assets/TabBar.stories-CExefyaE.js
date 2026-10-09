import{r as w,i as Ne,j as e,P as D,g as Ce,h as L,d as Re,l as Ve,e as i,c as j,b as O}from"./iframe-DKPY4m1L.js";import{D as ze,a as Ie,b as Ae,c as K}from"./DropdownMenu-CwrLtuYI.js";import{I as Be}from"./IconDotsVertical-W7b5NgPz.js";import{R as De,I as Ee,c as be}from"./index-jLiaAMd7.js";import{u as _e}from"./index-Bz3MN7-K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-VQvjrEmV.js";import"./index-DS4c5mdv.js";import"./createReactComponent-DGOfJ4T0.js";var E="Tabs",[Me]=Re(E,[be]),ve=be(),[We,F]=Me(E),me=w.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,onValueChange:l,defaultValue:h,orientation:o="horizontal",dir:v,activationMode:p="automatic",...x}=t,u=_e(v),[d,b]=Ne({prop:n,onChange:l,defaultProp:h??"",caller:E});return e.jsx(We,{scope:s,baseId:Ce(),value:d,onValueChange:b,orientation:o,dir:u,activationMode:p,children:e.jsx(D.div,{dir:u,"data-orientation":o,...x,ref:r})})});me.displayName=E;var he="TabsList",fe=w.forwardRef((t,r)=>{const{__scopeTabs:s,loop:n=!0,...l}=t,h=F(he,s),o=ve(s);return e.jsx(De,{asChild:!0,...o,orientation:h.orientation,dir:h.dir,loop:n,children:e.jsx(D.div,{role:"tablist","aria-orientation":h.orientation,...l,ref:r})})});fe.displayName=he;var pe="TabsTrigger",xe=w.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,disabled:l=!1,...h}=t,o=F(pe,s),v=ve(s),p=ge(o.baseId,n),x=je(o.baseId,n),u=n===o.value;return e.jsx(Ee,{asChild:!0,...v,focusable:!l,active:u,children:e.jsx(D.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":x,"data-state":u?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:p,...h,ref:r,onMouseDown:L(t.onMouseDown,d=>{!l&&d.button===0&&d.ctrlKey===!1?o.onValueChange(n):d.preventDefault()}),onKeyDown:L(t.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&o.onValueChange(n)}),onFocus:L(t.onFocus,()=>{const d=o.activationMode!=="manual";!u&&!l&&d&&o.onValueChange(n)})})})});xe.displayName=pe;var Te="TabsContent",Pe=w.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,forceMount:l,children:h,...o}=t,v=F(Te,s),p=ge(v.baseId,n),x=je(v.baseId,n),u=n===v.value,d=w.useRef(u);return w.useEffect(()=>{const b=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(b)},[]),e.jsx(Ve,{present:l||u,children:({present:b})=>e.jsx(D.div,{"data-state":u?"active":"inactive","data-orientation":v.orientation,role:"tabpanel","aria-labelledby":p,hidden:!b,id:x,tabIndex:0,...o,ref:r,style:{...t.style,animationDuration:d.current?"0s":void 0},children:b&&h})})});Pe.displayName=Te;function ge(t,r){return`${t}-trigger-${r}`}function je(t,r){return`${t}-content-${r}`}var Le=me,Oe=fe,Fe=xe;const ke=O("inline-flex",{variants:{size:{normal:"h-12",small:"h-10"}},defaultVariants:{size:"normal"}}),$e=O(`text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 hover:after:bg-shape-interactive-primary-default
  data-[state=active]:text-interactive-primary-default
  data-[state=active]:after:bg-shape-interactive-primary-selected relative
  inline-flex cursor-pointer items-center justify-center border-b leading-[100%]
  tracking-[0] whitespace-nowrap transition-colors after:absolute
  after:bottom-[-1px] after:w-full after:transition-all after:content-['']
  hover:after:h-[2px] disabled:cursor-not-allowed
  data-[state=active]:after:h-[2px]`,{variants:{size:{normal:"p-md h-12 text-lg",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}}),Ge=O(`text-body-primary border-divider-default hover:text-interactive-primary-hover
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] whitespace-nowrap transition-colors`,{variants:{size:{normal:"p-md h-12 text-lg",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}});function qe(){const[t,r]=i.useState(()=>typeof window<"u"&&window.matchMedia("(pointer: fine)").matches);return i.useEffect(()=>{const s=window.matchMedia("(pointer: fine)"),n=()=>r(s.matches);return s.addEventListener("change",n),()=>s.removeEventListener("change",n)},[]),t}function He(t){const r=[];return i.Children.forEach(t,s=>{i.isValidElement(s)&&s.type===a&&r.push(s)}),r}const f=i.forwardRef(({className:t,size:r,children:s,moreLabel:n,...l},h)=>{const o=r??"normal",v=qe(),p=i.useRef(null),x=i.useRef(null),u=i.useRef(new Map),d=i.useRef(new Map),b=i.useMemo(()=>He(s),[s]),[k,_]=i.useState(b.length),[$,M]=i.useState(!1),W=i.useCallback(()=>{if(!v){_(b.length),M(!0);return}const c=p.current;if(!c)return;u.current.forEach((S,C)=>{const H=S.offsetWidth;H>0&&d.current.set(C,H)});const m=c.clientWidth,T=x.current,P=T?T.offsetWidth+8:80;let g=0;for(const S of b)g+=d.current.get(S.props.value)??0;if(g<=m){_(b.length),M(!0);return}let y=0,q=0;for(const S of b){const C=d.current.get(S.props.value)??0;if(y+C+P<=m)y+=C,q++;else break}_(Math.max(q,1)),M(!0)},[b,v]);i.useEffect(()=>{const c=p.current;if(!c)return;const m=new ResizeObserver(()=>{W()});return m.observe(c),W(),()=>m.disconnect()},[W]);const N=b.slice(k),we=N.length>0,G=l.value??l.defaultValue,ye=N.some(c=>c.props.value===G),Se=n??(c=>`${c} more`);return e.jsx(Le,{ref:h,className:j("w-full",t),...l,children:e.jsxs(Oe,{ref:p,className:j(ke({size:o}),"w-full",!v&&"overflow-x-auto"),role:"tablist",children:[b.map((c,m)=>i.cloneElement(c,{key:c.props.value,size:o,ref:T=>{T?u.current.set(c.props.value,T):u.current.delete(c.props.value)},className:j(c.props.className,$&&m>=k&&"hidden")})),we&&$&&e.jsx("div",{ref:x,className:"inline-flex shrink-0",children:e.jsxs(ze,{children:[e.jsx(Ie,{asChild:!0,children:e.jsxs("button",{type:"button",className:j(Ge({size:o}),ye&&"font-bold text-interactive-primary-default"),children:[e.jsx(Be,{size:o==="small"?16:20,className:"mr-xxs"}),Se(N.length)]})}),e.jsx(Ae,{align:"end",size:"sm",children:N.map(c=>{const{value:m,disabled:T,asChild:P,children:g}=c.props,y=j(m===G&&"font-bold text-interactive-primary-default");return P&&i.isValidElement(g)?e.jsx(K,{disabled:T??!1,asChild:!0,className:y,children:g},m):e.jsx(K,{disabled:T??!1,onSelect:()=>{l.onValueChange&&l.onValueChange(m)},className:y,children:g},m)})})]})})]})})});f.displayName="TabBar";const a=i.forwardRef(({className:t,size:r,...s},n)=>{const l=r??"normal";return e.jsx(Fe,{ref:n,className:j($e({size:l}),t),...s})});a.displayName="Tab";f.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{moreLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:'Label for the overflow "more" button. Receives the count of hidden tabs. Defaults to `(count) => \\`${count} more\\``'}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"Tab",composes:["VariantProps"]};const ra={title:"Components/TabBar",component:f,parameters:{layout:"padded",radixDocs:{primitive:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs"}},argTypes:{size:{control:"radio",options:["normal","small"],description:"Size variant of the tab bar"},defaultValue:{control:"text",description:"The default active tab value"},value:{control:"text",description:"The controlled active tab value"},onValueChange:{action:"tab changed",description:"Callback when tab selection changes"}},args:{size:"normal",defaultValue:"tab1"}},R={render:t=>e.jsxs(f,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})},V={args:{size:"small"},render:t=>e.jsxs(f,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})},z={render:()=>e.jsxs("div",{className:"space-y-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Normal Size - All States"}),e.jsxs(f,{defaultValue:"tab3",children:[e.jsx(a,{value:"tab1",children:"デフォルト"}),e.jsx(a,{value:"tab2",children:"ホバー時"}),e.jsx(a,{value:"tab3",children:"選択中"}),e.jsx(a,{value:"tab4",disabled:!0,children:"利用不可時"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Small Size - All States"}),e.jsxs(f,{size:"small",defaultValue:"tab3",children:[e.jsx(a,{value:"tab1",children:"デフォルト"}),e.jsx(a,{value:"tab2",children:"ホバー時"}),e.jsx(a,{value:"tab3",children:"選択中"}),e.jsx(a,{value:"tab4",disabled:!0,children:"利用不可時"})]})]})]})},I={render:t=>e.jsx("div",{style:{maxWidth:400},children:e.jsxs(f,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},Ke=()=>{const[t,r]=i.useState("tab6");return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(f,{value:t,onValueChange:r,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},A={render:()=>e.jsx(Ke,{})},B={render:t=>e.jsx("div",{style:{maxWidth:400},children:e.jsxs(f,{...t,moreLabel:r=>`他${r}件`,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})};var J,Q,U;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <TabBar {...args}>
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
    </TabBar>
}`,...(U=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <TabBar {...args}>
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
    </TabBar>
}`,...(Z=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-lg">
      {/* Normal size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Normal Size - All States</h3>
        <TabBar defaultValue="tab3">
          <Tab value="tab1">デフォルト</Tab>
          <Tab value="tab2">ホバー時</Tab>
          <Tab value="tab3">選択中</Tab>
          <Tab value="tab4" disabled>
            利用不可時
          </Tab>
        </TabBar>
      </div>

      {/* Small size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Small Size - All States</h3>
        <TabBar size="small" defaultValue="tab3">
          <Tab value="tab1">デフォルト</Tab>
          <Tab value="tab2">ホバー時</Tab>
          <Tab value="tab3">選択中</Tab>
          <Tab value="tab4" disabled>
            利用不可時
          </Tab>
        </TabBar>
      </div>
    </div>
}`,...(te=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,ne;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 400
  }}>
      <TabBar {...args}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
}`,...(ne=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,oe,ie;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <OverflowWithActiveInDropdownRender />
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,ue;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 400
  }}>
      <TabBar {...args} moreLabel={count => \`他\${count}件\`}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
}`,...(ue=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const sa=["Default","Small","AllStates","Overflow","OverflowWithActiveInDropdown","OverflowCustomLabel"];export{z as AllStates,R as Default,I as Overflow,B as OverflowCustomLabel,A as OverflowWithActiveInDropdown,V as Small,sa as __namedExportsOrder,ra as default};
