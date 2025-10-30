import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as ee}from"./iframe-BebYr42l.js";import{S as ne}from"./index-BxSfOoDK.js";import{c as ie}from"./index-CJFt-ViZ.js";import{r as u,c as ae}from"./utils-C6IAnJJu.js";import{I as i}from"./IconMail-DnzWt4WV.js";import{I as x}from"./IconExternalLink-B_M1HiX0.js";import{I as a}from"./IconArrowRight-BZ1MH2-T.js";import{c as B}from"./createReactComponent-htZFrG5i.js";import{I as se}from"./IconEdit-p_HSxAwX.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]],O=B("outline","download","Download",re);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",key:"svg-0"}]],s=B("outline","phone","Phone",te),ce=ie(`font-normal inline-flex items-center justify-center border border-transparent
  decoration-solid decoration-from-font underline-offset-[3px] transition-colors
  [:not(:hover):not(:active)]:underline`,{variants:{intent:{primary:`text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active`,secondary:`text-body-primary hover:text-interactive-primary-hover
        active:text-interactive-primary-active`},size:{lg:"gap-xxs text-lg",md:"gap-xxxs text-md",sm:"gap-xxxs text-sm",xs:"gap-xxxs text-xs"}},defaultVariants:{intent:"primary",size:"md"}}),oe={lg:16,md:14,sm:12,xs:10},n=ee.forwardRef(({className:U,intent:$="primary",size:p="md",asChild:G=!1,leadingIcon:f,trailingIcon:y,children:H,onClick:J,...K},Q)=>{const Y=G?ne:"a",g=oe[p],Z=e.jsxs(e.Fragment,{children:[f&&e.jsx("span",{className:"flex-shrink-0",children:u(f,{size:g})}),e.jsx("span",{className:"flex-1",children:H}),y&&e.jsx("span",{className:"flex-shrink-0",children:u(y,{size:g})})]});return e.jsx(Y,{ref:Q,className:ae(ce({intent:$,size:p}),U),onClick:J,...K,children:Z})});n.displayName="TextLink";n.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The link content"},asChild:{required:!1,tsType:{name:"boolean"},description:"Whether to render as a child element (useful for Next.js Link)",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:"Icon to display before the text"},trailingIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:"Icon to display after the text"},intent:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"Link intent",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Link size",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit","VariantProps"]};const Ie={title:"Components/TextLink",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{intent:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["lg","md","sm","xs"]},leadingIcon:{control:!1},trailingIcon:{control:!1},asChild:{control:"boolean"}}},r={args:{children:"お問い合わせ",href:"#"}},t={args:{children:"詳細はこちら",href:"#",leadingIcon:i}},c={args:{children:"ドキュメントを見る",href:"#",trailingIcon:x}},o={args:{children:"Download File",href:"#",leadingIcon:O,trailingIcon:a}},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Primary Intent"}),e.jsx(n,{href:"#",intent:"primary",children:"Primary Link"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Secondary Intent"}),e.jsx(n,{href:"#",intent:"secondary",children:"Secondary Link"})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large (16px icons)"}),e.jsx(n,{href:"#",size:"lg",leadingIcon:i,children:"Large Text Link"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium (14px icons)"}),e.jsx(n,{href:"#",size:"md",leadingIcon:i,children:"Medium Text Link"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small (12px icons)"}),e.jsx(n,{href:"#",size:"sm",leadingIcon:i,children:"Small Text Link"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"XSmall (10px icons)"}),e.jsx(n,{href:"#",size:"xs",leadingIcon:i,children:"XSmall Text Link"})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Primary Intent - All Sizes"}),e.jsxs("div",{className:"gap-4 grid grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Default"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{href:"#",intent:"primary",size:"lg",children:"Large Primary"}),e.jsx(n,{href:"#",intent:"primary",size:"md",children:"Medium Primary"}),e.jsx(n,{href:"#",intent:"primary",size:"sm",children:"Small Primary"}),e.jsx(n,{href:"#",intent:"primary",size:"xs",children:"XSmall Primary"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"With Icons"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{href:"#",intent:"primary",size:"lg",trailingIcon:a,children:"Large Primary"}),e.jsx(n,{href:"#",intent:"primary",size:"md",trailingIcon:a,children:"Medium Primary"}),e.jsx(n,{href:"#",intent:"primary",size:"sm",trailingIcon:a,children:"Small Primary"}),e.jsx(n,{href:"#",intent:"primary",size:"xs",trailingIcon:a,children:"XSmall Primary"})]})]})]}),e.jsx("h2",{className:"text-lg font-bold",children:"Secondary Intent - All Sizes"}),e.jsxs("div",{className:"gap-4 grid grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Default"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{href:"#",intent:"secondary",size:"lg",children:"Large Secondary"}),e.jsx(n,{href:"#",intent:"secondary",size:"md",children:"Medium Secondary"}),e.jsx(n,{href:"#",intent:"secondary",size:"sm",children:"Small Secondary"}),e.jsx(n,{href:"#",intent:"secondary",size:"xs",children:"XSmall Secondary"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"With Icons"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{href:"#",intent:"secondary",size:"lg",leadingIcon:s,children:"Large Secondary"}),e.jsx(n,{href:"#",intent:"secondary",size:"md",leadingIcon:s,children:"Medium Secondary"}),e.jsx(n,{href:"#",intent:"secondary",size:"sm",leadingIcon:s,children:"Small Secondary"}),e.jsx(n,{href:"#",intent:"secondary",size:"xs",leadingIcon:s,children:"XSmall Secondary"})]})]})]})]})},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Navigation Links"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{href:"/contact",leadingIcon:i,children:"お問い合わせ"}),e.jsx(n,{href:"/docs",trailingIcon:x,children:"ドキュメントを見る"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Action Links"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{href:"#",onClick:()=>alert("Edit clicked"),leadingIcon:se,children:"Edit Profile"}),e.jsx(n,{href:"#",onClick:()=>alert("Download started"),leadingIcon:O,children:"Download Report"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Inline Links in Text"}),e.jsxs("p",{className:"text-body-primary",children:["For more information, please"," ",e.jsx(n,{href:"/contact",size:"sm",children:"contact us"})," ","or"," ",e.jsx(n,{href:"/docs",size:"sm",trailingIcon:x,children:"read the documentation"}),"."]})]})]})};var v,I,L;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'お問い合わせ',
    href: '#'
  }
}`,...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,T,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: '詳細はこちら',
    href: '#',
    leadingIcon: IconMail
  }
}`,...(N=(T=t.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var j,S,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'ドキュメントを見る',
    href: '#',
    trailingIcon: IconExternalLink
  }
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var b,P,R;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Download File',
    href: '#',
    leadingIcon: IconDownload,
    trailingIcon: IconArrowRight
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var w,M,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Primary Intent</h3>
        <TextLink href="#" intent="primary">
          Primary Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Secondary Intent</h3>
        <TextLink href="#" intent="secondary">
          Secondary Link
        </TextLink>
      </div>
    </div>
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,C,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Large (16px icons)</h3>
        <TextLink href="#" size="lg" leadingIcon={IconMail}>
          Large Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium (14px icons)</h3>
        <TextLink href="#" size="md" leadingIcon={IconMail}>
          Medium Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small (12px icons)</h3>
        <TextLink href="#" size="sm" leadingIcon={IconMail}>
          Small Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">XSmall (10px icons)</h3>
        <TextLink href="#" size="xs" leadingIcon={IconMail}>
          XSmall Text Link
        </TextLink>
      </div>
    </div>
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var X,W,_;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <h2 className="text-lg font-bold">Primary Intent - All Sizes</h2>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <div className="space-y-2">
            <TextLink href="#" intent="primary" size="lg">
              Large Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="md">
              Medium Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="sm">
              Small Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="xs">
              XSmall Primary
            </TextLink>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">With Icons</h3>
          <div className="space-y-2">
            <TextLink href="#" intent="primary" size="lg" trailingIcon={IconArrowRight}>
              Large Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="md" trailingIcon={IconArrowRight}>
              Medium Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="sm" trailingIcon={IconArrowRight}>
              Small Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="xs" trailingIcon={IconArrowRight}>
              XSmall Primary
            </TextLink>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold">Secondary Intent - All Sizes</h2>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <div className="space-y-2">
            <TextLink href="#" intent="secondary" size="lg">
              Large Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="md">
              Medium Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="sm">
              Small Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="xs">
              XSmall Secondary
            </TextLink>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">With Icons</h3>
          <div className="space-y-2">
            <TextLink href="#" intent="secondary" size="lg" leadingIcon={IconPhone}>
              Large Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="md" leadingIcon={IconPhone}>
              Medium Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="sm" leadingIcon={IconPhone}>
              Small Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="xs" leadingIcon={IconPhone}>
              XSmall Secondary
            </TextLink>
          </div>
        </div>
      </div>
    </div>
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,V,F;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Navigation Links</h3>
        <div className="space-y-2">
          <TextLink href="/contact" leadingIcon={IconMail}>
            お問い合わせ
          </TextLink>
          <TextLink href="/docs" trailingIcon={IconExternalLink}>
            ドキュメントを見る
          </TextLink>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Action Links</h3>
        <div className="space-y-2">
          <TextLink href="#" onClick={() => alert('Edit clicked')} leadingIcon={IconEdit}>
            Edit Profile
          </TextLink>
          <TextLink href="#" onClick={() => alert('Download started')} leadingIcon={IconDownload}>
            Download Report
          </TextLink>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Inline Links in Text</h3>
        <p className="text-body-primary">
          For more information, please{' '}
          <TextLink href="/contact" size="sm">
            contact us
          </TextLink>{' '}
          or{' '}
          <TextLink href="/docs" size="sm" trailingIcon={IconExternalLink}>
            read the documentation
          </TextLink>
          .
        </p>
      </div>
    </div>
}`,...(F=(V=h.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Le=["Default","WithLeadingIcon","WithTrailingIcon","WithBothIcons","Intents","Sizes","AllCombinations","UseCases"];export{m as AllCombinations,r as Default,l as Intents,d as Sizes,h as UseCases,o as WithBothIcons,t as WithLeadingIcon,c as WithTrailingIcon,Le as __namedExportsOrder,Ie as default};
