import{j as e,e as V}from"./iframe-DcSk_wzL.js";import{A as te}from"./AccountMenu-CXndvXj4.js";import{D as re}from"./DropdownMenu-DCS0zobB.js";import{M as x,a as o,b as n,I as oe,c as X,d as ie,L as me}from"./MobileNavigation-CwIgtWIE.js";import{c as Y}from"./createReactComponent-D8NpDzyf.js";import{I as M}from"./IconUser-CJVVtSZG.js";import{I as Z}from"./IconLogout-B-VCUG_A.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-uAPDsygC.js";import"./index-Be7pAWCB.js";import"./index-Bq6c60he.js";import"./index-DZ2qrVzW.js";import"./index-CgCCc2NK.js";import"./IconX-CrBt7ASo.js";import"./index-BkWpqkNC.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M9 6.371c0 4.418 -2.239 6.629 -5 6.629",key:"svg-0"}],["path",{d:"M4 6.371h7",key:"svg-1"}],["path",{d:"M5 9c0 2.144 2.252 3.908 6 4",key:"svg-2"}],["path",{d:"M12 20l4 -9l4 9",key:"svg-3"}],["path",{d:"M19.1 18h-6.2",key:"svg-4"}],["path",{d:"M6.694 3l.793 .582",key:"svg-5"}]],le=Y("outline","language","Language",ce);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M3.5 5.5l1.5 1.5l2.5 -2.5",key:"svg-0"}],["path",{d:"M3.5 11.5l1.5 1.5l2.5 -2.5",key:"svg-1"}],["path",{d:"M3.5 17.5l1.5 1.5l2.5 -2.5",key:"svg-2"}],["path",{d:"M11 6l9 0",key:"svg-3"}],["path",{d:"M11 12l9 0",key:"svg-4"}],["path",{d:"M11 18l9 0",key:"svg-5"}]],ge=Y("outline","list-check","ListCheck",de),Ae={title:"Components/MobileNavigation",component:x,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=11774-61127"}},globals:{viewport:{value:"mobile",isRotated:!1}},args:{header:e.jsx(me,{}),children:null}},ee=()=>{const[s,r]=V.useState("/sds"),i=(N,ae,se)=>e.jsx(n,{asChild:!0,variant:s===N?"selected":"default",children:e.jsxs("a",{href:N,className:"gap-xs flex items-center",onClick:ne=>{ne.preventDefault(),r(N)},children:[ae,se]})});return e.jsxs(o,{children:[i("/sds",e.jsx(X,{size:20,className:"shrink-0"}),"SDS一覧"),i("/settings/account",e.jsx(M,{size:20,className:"shrink-0"}),"マイページ"),e.jsxs(n,{className:"gap-xs",children:[e.jsx(Z,{size:20,className:"shrink-0"}),"ログアウト"]})]})},j=()=>e.jsx("main",{className:"p-md space-y-sm",children:Array.from({length:30},(s,r)=>e.jsxs("p",{className:"text-body-primary",children:["ページの内容 ",r+1]},r))}),a={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...s,children:e.jsx(ee,{})}),e.jsx(j,{})]})},t={args:{menuTop:"松本 一紀 ・ 管理者権限でログイン中",end:e.jsx(te,{userName:"松本 一紀",loggedAsRole:"管理者権限でログイン中",children:e.jsx(re,{children:"マイページ"})})},render:a.render},m={args:{...t.args,menuEnd:e.jsxs("span",{className:"text-body-primary gap-xxs text-sm flex items-center",children:[e.jsx(M,{size:16,className:"shrink-0"}),"松本 一紀"]})},render:a.render},c={args:{...t.args,animation:{in:"animate-in slide-in-from-left",out:"animate-out slide-out-to-left"}},render:a.render},l={args:{...t.args,animation:{in:"animate-in slide-in-from-right",out:"animate-out slide-out-to-right"}},render:a.render},d={args:{...t.args,animation:{in:"animate-in slide-in-from-bottom",out:"animate-out slide-out-to-bottom"}},render:a.render},pe=()=>{const[s,r]=V.useState("ja");return e.jsxs(n,{closeOnSelect:!1,className:"gap-xs",onClick:()=>r(i=>i==="ja"?"en":"ja"),children:[e.jsx(le,{size:20,className:"shrink-0"}),s==="ja"?"日本語":"English"]})},g={args:{menuTop:"松本 一紀 ・ 管理者権限でログイン中"},render:s=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{...s,children:[e.jsx(ee,{}),e.jsx(o,{title:"表示言語",children:e.jsx(pe,{})})]}),e.jsx(j,{})]})},p={args:{menuTop:"松本 一紀 ・ 管理者権限でログイン中",animation:{in:"animate-in fade-in zoom-in-95",out:"animate-out fade-out zoom-out-95",duration:200,easing:"ease-out"}},render:a.render},u={args:{menuTop:"松本 一紀 ・ 管理者権限でログイン中",animation:!1},render:a.render},h={args:{menuTop:"松本 一紀 ・ 管理者権限でログイン中"},render:s=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{...s,children:[e.jsxs(o,{title:"SDS管理",children:[e.jsxs(n,{className:"gap-xs",children:[e.jsx(oe,{size:20,className:"shrink-0"}),"SDS登録"]}),e.jsxs(n,{variant:"selected",className:"gap-xs",children:[e.jsx(X,{size:20,className:"shrink-0"}),"SDS一覧"]}),e.jsxs(n,{className:"gap-xs",children:[e.jsx(ie,{size:20,className:"shrink-0"}),"データ化不備一覧"]})]}),e.jsx(o,{title:"アプリケーション",children:e.jsxs(n,{className:"gap-xs",children:[e.jsx(ge,{size:20,className:"shrink-0"}),"法規制チェックリスト"]})}),e.jsxs(o,{title:"アカウント",children:[e.jsxs(n,{className:"gap-xs",children:[e.jsx(M,{size:20,className:"shrink-0"}),"マイページ"]}),e.jsxs(n,{className:"gap-xs",children:[e.jsx(Z,{size:20,className:"shrink-0"}),"ログアウト"]})]})]}),e.jsx(j,{})]})};var v,f,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <>
      <MobileNavigation {...args}>
        <Items />
      </MobileNavigation>
      <PageContent />
    </>
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var I,S,k;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
    end: <AccountMenu userName="松本 一紀" loggedAsRole="管理者権限でログイン中">
        <DropdownItem>マイページ</DropdownItem>
      </AccountMenu>
  },
  render: Default.render
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,y,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...WithEndAndMenuTop.args,
    menuEnd: <span className="text-body-primary gap-xxs text-sm flex items-center">
        <IconUser size={16} className="shrink-0" />
        松本 一紀
      </span>
  },
  render: Default.render
}`,...(z=(y=m.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var A,C,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...WithEndAndMenuTop.args,
    animation: {
      in: 'animate-in slide-in-from-left',
      out: 'animate-out slide-out-to-left'
    }
  },
  render: Default.render
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var T,L,F;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...WithEndAndMenuTop.args,
    animation: {
      in: 'animate-in slide-in-from-right',
      out: 'animate-out slide-out-to-right'
    }
  },
  render: Default.render
}`,...(F=(L=l.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,R,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...WithEndAndMenuTop.args,
    animation: {
      in: 'animate-in slide-in-from-bottom',
      out: 'animate-out slide-out-to-bottom'
    }
  },
  render: Default.render
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var w,O,P;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中'
  },
  render: args => <>
      <MobileNavigation {...args}>
        <Items />
        <MobileNavigationSection title="表示言語">
          <LanguageItem />
        </MobileNavigationSection>
      </MobileNavigation>
      <PageContent />
    </>
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var B,U,K;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
    animation: {
      in: 'animate-in fade-in zoom-in-95',
      out: 'animate-out fade-out zoom-out-95',
      duration: 200,
      easing: 'ease-out'
    }
  },
  render: Default.render
}`,...(K=(U=p.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var G,J,$;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
    animation: false
  },
  render: Default.render
}`,...($=(J=u.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var q,H,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中'
  },
  render: args => <>
      <MobileNavigation {...args}>
        <MobileNavigationSection title="SDS管理">
          <MobileNavigationItem className="gap-xs">
            <IconUpload size={20} className="shrink-0" />
            SDS登録
          </MobileNavigationItem>
          <MobileNavigationItem variant="selected" className="gap-xs">
            <IconTable size={20} className="shrink-0" />
            SDS一覧
          </MobileNavigationItem>
          <MobileNavigationItem className="gap-xs">
            <IconFileAlert size={20} className="shrink-0" />
            データ化不備一覧
          </MobileNavigationItem>
        </MobileNavigationSection>
        <MobileNavigationSection title="アプリケーション">
          <MobileNavigationItem className="gap-xs">
            <IconListCheck size={20} className="shrink-0" />
            法規制チェックリスト
          </MobileNavigationItem>
        </MobileNavigationSection>
        <MobileNavigationSection title="アカウント">
          <MobileNavigationItem className="gap-xs">
            <IconUser size={20} className="shrink-0" />
            マイページ
          </MobileNavigationItem>
          <MobileNavigationItem className="gap-xs">
            <IconLogout size={20} className="shrink-0" />
            ログアウト
          </MobileNavigationItem>
        </MobileNavigationSection>
      </MobileNavigation>
      <PageContent />
    </>
}`,...(Q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};const Ce=["Default","WithEndAndMenuTop","WithSimplerMenuEnd","FromLeft","FromRight","FromBottom","WithItemKeepingMenuOpen","CustomAnimation","NoAnimation","LongerMenu"];export{p as CustomAnimation,a as Default,d as FromBottom,c as FromLeft,l as FromRight,h as LongerMenu,u as NoAnimation,t as WithEndAndMenuTop,g as WithItemKeepingMenuOpen,m as WithSimplerMenuEnd,Ce as __namedExportsOrder,Ae as default};
