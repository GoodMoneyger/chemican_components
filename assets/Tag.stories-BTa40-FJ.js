import{j as e}from"./iframe-C-Ea3aRq.js";import{T as a,c as he}from"./Tag-CV99Xxxr.js";import{I as s}from"./IconTag-BRbI4rJC.js";import{I as T,a as S}from"./IconStar-DFMUMU6X.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";import"./createReactComponent-Pu_JStew.js";const Ie={title:"Components/Tag",component:a,argTypes:{colorCode:{control:"select",options:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36]},size:{control:"select",options:["sm","md"]},variant:{control:"select",options:["primary","secondary"]},selected:{control:"boolean"},disabled:{control:"boolean"},onRemove:{control:"boolean",defaultValue:!1,description:"Enable or disable the onRemove functionality",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}},mapping:{true:()=>alert("Tag removed"),false:void 0}}}},r=d=>e.jsx(a,{...d}),i=r.bind({});i.args={children:"タグ",onRemove:void 0,colorCode:1};const t=r.bind({});t.args={children:"メディアムサイズのタグ",size:"md",colorCode:8};const l=r.bind({});l.args={children:"削除可能なタグ",size:"sm",colorCode:2,onRemove:()=>alert("Tag removed!")};const m=r.bind({});m.args={children:"選択されたタグ",selected:!0,colorCode:1};const p=r.bind({});p.args={children:"カスタムカラー",className:"bg-surface-alert text-body-primary"};const g=r.bind({});g.args={children:"タグ",colorCode:8,icon:s};const u=r.bind({});u.args={children:"セカンダリ",colorCode:17,variant:"secondary"};const x=r.bind({});x.args={children:"アイコン付き",colorCode:8,variant:"secondary",icon:T};const y=r.bind({});y.args={children:"削除可能",colorCode:8,variant:"secondary",onRemove:()=>alert("Tag removed!")};const h=r.bind({});h.args={children:"無効",colorCode:8,variant:"primary",disabled:!0};const v=r.bind({});v.args={children:"無効",colorCode:8,variant:"secondary",disabled:!0};const C=r.bind({});C.args={children:"無効",colorCode:8,variant:"secondary",icon:T,disabled:!0};const c=({selected:d=!1,variant:o="primary"})=>{const xe=Array.from(new Set(he.map(n=>n.code))).sort((n,ye)=>n-ye);return e.jsx("div",{className:"gap-2 flex flex-wrap",children:xe.map(n=>e.jsxs(a,{colorCode:n,selected:d,variant:o,children:["カラー ",n]},n))})};c.args={selected:!1,variant:"primary"};c.argTypes={selected:{control:"boolean"},variant:{control:"select",options:["primary","secondary"]}};const f=()=>{const d=[1,8,17,25,33];return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Primary Variant (accent background)"}),e.jsx("div",{className:"gap-2 flex flex-wrap",children:d.map(o=>e.jsxs(a,{colorCode:o,variant:"primary",children:["カラー ",o]},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Secondary Variant (neutral background)"}),e.jsx("div",{className:"gap-2 flex flex-wrap",children:d.map(o=>e.jsxs(a,{colorCode:o,variant:"secondary",children:["カラー ",o]},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Disabled States"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,variant:"primary",disabled:!0,children:"Primary 無効"}),e.jsx(a,{colorCode:8,variant:"secondary",disabled:!0,children:"Secondary 無効"}),e.jsx(a,{colorCode:8,variant:"secondary",icon:s,disabled:!0,children:"Icon 無効"})]})]})]})},b=()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Primary with Icons (icon inherits text color)"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,icon:s,children:"タグ"}),e.jsx(a,{colorCode:19,icon:T,children:"お気に入り"}),e.jsx(a,{colorCode:2,icon:S,children:"いいね"}),e.jsx(a,{colorCode:25,icon:s,children:"Cyan"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Secondary with Icons (icon uses distinct accent color)"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,variant:"secondary",icon:s,children:"タグ"}),e.jsx(a,{colorCode:19,variant:"secondary",icon:T,children:"お気に入り"}),e.jsx(a,{colorCode:2,variant:"secondary",icon:S,children:"いいね"}),e.jsx(a,{colorCode:25,variant:"secondary",icon:s,children:"Cyan"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-body-primary mb-xs text-sm font-medium",children:"Disabled with Icons"}),e.jsxs("div",{className:"gap-2 flex flex-wrap",children:[e.jsx(a,{colorCode:8,variant:"primary",icon:s,disabled:!0,children:"Primary 無効"}),e.jsx(a,{colorCode:8,variant:"secondary",icon:s,disabled:!0,children:"Secondary 無効"})]})]})]});c.__docgenInfo={description:"",methods:[],displayName:"ColorCodeShowcase",props:{selected:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"VariantComparison"};b.__docgenInfo={description:"",methods:[],displayName:"WithIconShowcase"};var j,I,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Tag {...args} />",...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var w,W,V;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Tag {...args} />",...(V=(W=t.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var D,P,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:"args => <Tag {...args} />",...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var k,_,q;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Tag {...args} />",...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,B,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:"args => <Tag {...args} />",...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var E,H,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Tag {...args} />",...(A=(H=g.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var G,O,F;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:"args => <Tag {...args} />",...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,K,L;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:"args => <Tag {...args} />",...(L=(K=x.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <Tag {...args} />",...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:"args => <Tag {...args} />",...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <Tag {...args} />",...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,se,ne;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <Tag {...args} />",...(ne=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ce,de,ie;c.parameters={...c.parameters,docs:{...(ce=c.parameters)==null?void 0:ce.docs,source:{originalSource:`({
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
}`,...(ie=(de=c.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var te,le,me;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(me=(le=f.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ge,ue;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ue=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};const Ne=["DefaultTag","MediumSize","WithRemoveButton","SelectedTag","WithCustomColors","WithIcon","SecondaryVariant","SecondaryWithIcon","SecondaryWithRemoveButton","DisabledPrimary","DisabledSecondary","DisabledWithIcon","ColorCodeShowcase","VariantComparison","WithIconShowcase"];export{c as ColorCodeShowcase,i as DefaultTag,h as DisabledPrimary,v as DisabledSecondary,C as DisabledWithIcon,t as MediumSize,u as SecondaryVariant,x as SecondaryWithIcon,y as SecondaryWithRemoveButton,m as SelectedTag,f as VariantComparison,p as WithCustomColors,g as WithIcon,b as WithIconShowcase,l as WithRemoveButton,Ne as __namedExportsOrder,Ie as default};
