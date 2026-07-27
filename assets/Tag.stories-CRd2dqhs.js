import{j as e}from"./iframe-BshPFaFL.js";import{T as a,c as Te}from"./Tag-mQPw-WNb.js";import{I as S,a as j}from"./IconStar-C_8kwfc7.js";import{I as s}from"./IconTag-Da_cJxNJ.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./createReactComponent-C3MjDBUf.js";const We={title:"Components/Tag",component:a,argTypes:{colorCode:{control:"select",options:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36]},size:{control:"select",options:["sm","md"]},variant:{control:"select",options:["primary","secondary"]},selected:{control:"boolean"},disabled:{control:"boolean"},onRemove:{control:"boolean",defaultValue:!1,description:"Enable or disable the onRemove functionality",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}},mapping:{true:()=>alert("Tag removed"),false:void 0}}}},r=d=>e.jsx(a,{...d}),i=r.bind({});i.args={children:"タグ",onRemove:void 0,colorCode:1};const t=r.bind({});t.args={children:"メディアムサイズのタグ",size:"md",colorCode:8};const l=r.bind({});l.args={children:"削除可能なタグ",size:"sm",colorCode:2,onRemove:()=>alert("Tag removed!")};const m=r.bind({});m.args={children:"選択されたタグ",selected:!0,colorCode:1};const p=r.bind({});p.args={children:"カスタムカラー",className:"bg-surface-alert text-body-primary"};const g=r.bind({});g.args={children:"タグ",colorCode:8,icon:s};const x=r.bind({});x.args={children:"セカンダリ",colorCode:17,variant:"secondary"};const u=r.bind({});u.args={children:"アイコン付き",colorCode:8,variant:"secondary",icon:S};const h=r.bind({});h.args={children:"削除可能",colorCode:8,variant:"secondary",onRemove:()=>alert("Tag removed!")};const y=r.bind({});y.args={children:"無効",colorCode:8,variant:"primary",disabled:!0};const v=r.bind({});v.args={children:"無効",colorCode:8,variant:"secondary",disabled:!0};const C=r.bind({});C.args={children:"無効",colorCode:8,variant:"secondary",icon:S,disabled:!0};const f=()=>e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,asChild:!0,children:e.jsx("a",{href:"#link",children:"リンクタグ"})}),e.jsx(a,{colorCode:2,variant:"secondary",asChild:!0,children:e.jsx("a",{href:"#link",children:"セカンダリリンク"})}),e.jsx(a,{colorCode:19,icon:S,asChild:!0,children:e.jsx("a",{href:"#link",children:"アイコン付きリンク"})})]}),c=({selected:d=!1,variant:o="primary"})=>{const Ce=Array.from(new Set(Te.map(n=>n.code))).sort((n,fe)=>n-fe);return e.jsx("div",{className:"gap-2 flex flex-wrap",children:Ce.map(n=>e.jsxs(a,{colorCode:n,selected:d,variant:o,children:["カラー ",n]},n))})};c.args={selected:!1,variant:"primary"};c.argTypes={selected:{control:"boolean"},variant:{control:"select",options:["primary","secondary"]}};const T=()=>{const d=[1,8,17,25,33];return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Primary Variant (accent background)"}),e.jsx("div",{className:"gap-2 flex flex-wrap",children:d.map(o=>e.jsxs(a,{colorCode:o,variant:"primary",children:["カラー ",o]},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Secondary Variant (neutral background)"}),e.jsx("div",{className:"gap-2 flex flex-wrap",children:d.map(o=>e.jsxs(a,{colorCode:o,variant:"secondary",children:["カラー ",o]},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Disabled States"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,variant:"primary",disabled:!0,children:"Primary 無効"}),e.jsx(a,{colorCode:8,variant:"secondary",disabled:!0,children:"Secondary 無効"}),e.jsx(a,{colorCode:8,variant:"secondary",icon:s,disabled:!0,children:"Icon 無効"})]})]})]})},b=()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Primary with Icons (icon inherits text color)"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,icon:s,children:"タグ"}),e.jsx(a,{colorCode:19,icon:S,children:"お気に入り"}),e.jsx(a,{colorCode:2,icon:j,children:"いいね"}),e.jsx(a,{colorCode:25,icon:s,children:"Cyan"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Secondary with Icons (icon uses distinct accent color)"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,variant:"secondary",icon:s,children:"タグ"}),e.jsx(a,{colorCode:19,variant:"secondary",icon:S,children:"お気に入り"}),e.jsx(a,{colorCode:2,variant:"secondary",icon:j,children:"いいね"}),e.jsx(a,{colorCode:25,variant:"secondary",icon:s,children:"Cyan"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Disabled with Icons"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,variant:"primary",icon:s,disabled:!0,children:"Primary 無効"}),e.jsx(a,{colorCode:8,variant:"secondary",icon:s,disabled:!0,children:"Secondary 無効"})]})]})]});f.__docgenInfo={description:"",methods:[],displayName:"AsChild"};c.__docgenInfo={description:"",methods:[],displayName:"ColorCodeShowcase",props:{selected:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"VariantComparison"};b.__docgenInfo={description:"",methods:[],displayName:"WithIconShowcase"};var I,N,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Tag {...args} />",...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var k,W,V;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Tag {...args} />",...(V=(W=t.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var D,P,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:"args => <Tag {...args} />",...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var _,q,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Tag {...args} />",...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,B,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Tag {...args} />",...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var E,H,G;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Tag {...args} />",...(G=(H=g.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var O,F,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Tag {...args} />",...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,L,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:"args => <Tag {...args} />",...(Q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:"args => <Tag {...args} />",...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <Tag {...args} />",...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:"args => <Tag {...args} />",...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ne,ce;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:"args => <Tag {...args} />",...(ce=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,ie,te;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`() => <div className="gap-2 flex flex-wrap">
    <Tag colorCode={8} asChild>
      <a href="#link">リンクタグ</a>
    </Tag>
    <Tag colorCode={2} variant="secondary" asChild>
      <a href="#link">セカンダリリンク</a>
    </Tag>
    <Tag colorCode={19} icon={IconStar} asChild>
      <a href="#link">アイコン付きリンク</a>
    </Tag>
  </div>`,...(te=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var le,me,pe;c.parameters={...c.parameters,docs:{...(le=c.parameters)==null?void 0:le.docs,source:{originalSource:`({
  selected = false,
  variant = 'primary'
}) => {
  // Get unique color codes and sort them
  const uniqueColorCodes = Array.from(new Set(colorCodeToTokenMap.map(c => c.code))).sort((a, b) => a - b);
  return <div className="gap-2 flex flex-wrap">
      {uniqueColorCodes.map(colorCode => <Tag key={colorCode} colorCode={colorCode} selected={selected} variant={variant}>
          カラー {colorCode}
        </Tag>)}
    </div>;
}`,...(pe=(me=c.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,xe,ue;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const sampleColorCodes = [1, 8, 17, 25, 33];
  return <div className="gap-md flex flex-col">
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Primary Variant (accent background)
        </h3>
        <div className="gap-2 flex flex-wrap">
          {sampleColorCodes.map(colorCode => <Tag key={colorCode} colorCode={colorCode} variant="primary">
              カラー {colorCode}
            </Tag>)}
        </div>
      </div>
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Secondary Variant (neutral background)
        </h3>
        <div className="gap-2 flex flex-wrap">
          {sampleColorCodes.map(colorCode => <Tag key={colorCode} colorCode={colorCode} variant="secondary">
              カラー {colorCode}
            </Tag>)}
        </div>
      </div>
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Disabled States
        </h3>
        <div className="gap-2 flex flex-wrap">
          <Tag colorCode={8} variant="primary" disabled>
            Primary 無効
          </Tag>
          <Tag colorCode={8} variant="secondary" disabled>
            Secondary 無効
          </Tag>
          <Tag colorCode={8} variant="secondary" icon={IconTag} disabled>
            Icon 無効
          </Tag>
        </div>
      </div>
    </div>;
}`,...(ue=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var he,ye,ve;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <div className="gap-md flex flex-col">
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Primary with Icons (icon inherits text color)
        </h3>
        <div className="gap-2 flex flex-wrap">
          <Tag colorCode={8} icon={IconTag}>
            タグ
          </Tag>
          <Tag colorCode={19} icon={IconStar}>
            お気に入り
          </Tag>
          <Tag colorCode={2} icon={IconHeart}>
            いいね
          </Tag>
          <Tag colorCode={25} icon={IconTag}>
            Cyan
          </Tag>
        </div>
      </div>
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Secondary with Icons (icon uses distinct accent color)
        </h3>
        <div className="gap-2 flex flex-wrap">
          <Tag colorCode={8} variant="secondary" icon={IconTag}>
            タグ
          </Tag>
          <Tag colorCode={19} variant="secondary" icon={IconStar}>
            お気に入り
          </Tag>
          <Tag colorCode={2} variant="secondary" icon={IconHeart}>
            いいね
          </Tag>
          <Tag colorCode={25} variant="secondary" icon={IconTag}>
            Cyan
          </Tag>
        </div>
      </div>
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Disabled with Icons
        </h3>
        <div className="gap-2 flex flex-wrap">
          <Tag colorCode={8} variant="primary" icon={IconTag} disabled>
            Primary 無効
          </Tag>
          <Tag colorCode={8} variant="secondary" icon={IconTag} disabled>
            Secondary 無効
          </Tag>
        </div>
      </div>
    </div>;
}`,...(ve=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const Ve=["DefaultTag","MediumSize","WithRemoveButton","SelectedTag","WithCustomColors","WithIcon","SecondaryVariant","SecondaryWithIcon","SecondaryWithRemoveButton","DisabledPrimary","DisabledSecondary","DisabledWithIcon","AsChild","ColorCodeShowcase","VariantComparison","WithIconShowcase"];export{f as AsChild,c as ColorCodeShowcase,i as DefaultTag,y as DisabledPrimary,v as DisabledSecondary,C as DisabledWithIcon,t as MediumSize,x as SecondaryVariant,u as SecondaryWithIcon,h as SecondaryWithRemoveButton,m as SelectedTag,T as VariantComparison,p as WithCustomColors,g as WithIcon,b as WithIconShowcase,l as WithRemoveButton,Ve as __namedExportsOrder,We as default};
