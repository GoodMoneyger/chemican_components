import{j as e,s as M,c as T}from"./iframe-Dty1CWy9.js";import{B as R}from"./Button-BRddOA2h.js";import{a as A,b as B,c as F,D as t,e as _}from"./DropdownMenu-Dzf19MtU.js";import{S as m,e as l,f as a,I as x,c as d,M as H,a as U,b as E,L as I,u as p,d as y}from"./MobileNavigation-BSFsGVWq.js";import{I as O}from"./IconTrashX-5AI_NwZc.js";import{c as g}from"./createReactComponent-BU3VSqll.js";import{I as P}from"./IconInfoCircle-VwPsGOag.js";import{I as W}from"./IconSettings-DkecYTFL.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-CLiFYASU.js";import"./index-DfKPvJjd.js";import"./index-ChU-TLl1.js";import"./index-BOAGiJSd.js";import"./index-itsTTKIH.js";import"./IconX-BeXOs1BX.js";import"./index-PT4f1lh0.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8",key:"svg-0"}],["path",{d:"M14 19l2 2l4 -4",key:"svg-1"}],["path",{d:"M9 8h4",key:"svg-2"}],["path",{d:"M9 12h2",key:"svg-3"}]],D=g("outline","checklist","Checklist",X);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 16v.01",key:"svg-1"}],["path",{d:"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",key:"svg-2"}]],q=g("outline","help-circle","HelpCircle",$);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]],J=g("outline","refresh","Refresh",G),me={title:"Components/SideNavigation",component:m,parameters:{layout:"fullscreen"},argTypes:{width:{control:"radio",options:["expanded","collapsed"],description:"Legacy width prop (overrides internal state)"},showCollapseButton:{control:"boolean"},defaultCollapsed:{control:"boolean",description:"Initial collapsed state"}},args:{},decorators:[s=>e.jsx(M,{children:e.jsx(s,{})})]},N=()=>e.jsx(I,{}),w=()=>{const{isCollapsed:s}=p();return e.jsxs("div",{className:"space-y-xxxs",children:[e.jsx(a,{asChild:!0,tooltipLabel:"ヘルプセンター",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(P,{size:16,className:"shrink-0"}),!s&&"ヘルプセンター"]})}),e.jsx(a,{asChild:!0,tooltipLabel:"お問い合わせ",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(q,{size:16,className:"shrink-0"}),!s&&"お問い合わせ"]})}),e.jsxs(A,{children:[e.jsx(B,{asChild:!0,children:e.jsx(a,{asChild:!0,tooltipLabel:"各種設定",children:e.jsxs("button",{className:"gap-xs flex items-center",children:[e.jsx(W,{size:16,className:"shrink-0"}),!s&&"各種設定"]})})}),e.jsxs(F,{side:"right",align:"end",children:[e.jsx(t,{children:"企業ページ"}),e.jsx(t,{children:"ホワイトリストIP一覧"}),e.jsx(t,{children:"部署一覧"}),e.jsx(t,{children:"ユーザー一覧"}),e.jsx(t,{children:"ユーザーページ"}),e.jsx(t,{children:"タグ一覧"}),e.jsx(_,{}),e.jsx(t,{children:"ログアウト"})]})]}),e.jsx(R,{size:"xs",className:T("mt-xs w-full",s?"h-8":""),intent:"tertiary",icon:J,iconOnly:s,children:!s&&"旧メニューに戻す"})]})},o={render:s=>{const n=()=>{const{isCollapsed:i}=p();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{title:"SDS管理",children:[e.jsx(a,{asChild:!0,variant:"selected",tooltipLabel:"SDS登録",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(x,{size:16,className:"shrink-0"}),!i&&"SDS登録"]})}),e.jsx(a,{asChild:!0,tooltipLabel:"全SDS一覧",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(d,{size:16,className:"shrink-0"}),!i&&"全SDS一覧"]})}),e.jsx(a,{asChild:!0,tooltipLabel:"要確認SDS",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(y,{size:16,className:"shrink-0"}),!i&&"要確認SDS"]})}),e.jsx(a,{asChild:!0,tooltipLabel:"削除済みSDS",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(O,{size:16,className:"shrink-0"}),!i&&"削除済みSDS"]})})]}),e.jsx(l,{title:"チェックリスト",isLast:!0,children:e.jsx(a,{asChild:!0,tooltipLabel:"法令チェックリスト",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(D,{size:16,className:"shrink-0"}),!i&&"法令チェックリスト"]})})})]})};return e.jsxs("div",{className:"h-screen",children:[e.jsx(m,{...s,header:e.jsx(N,{}),footer:e.jsx(w,{}),showCollapseButton:!0,collapseLabel:"メニューを閉じる",expandLabel:"メニューを開く",children:e.jsx(n,{})}),e.jsx("div",{className:"bg-surface-secondary p-lg h-full",style:{marginLeft:"var(--cc-side-navigation-width)"},children:e.jsxs("div",{className:"bg-surface-primary p-lg rounded-md",children:[e.jsx("h1",{className:"text-body-primary mb-md text-xl font-medium",children:"Content Area"}),e.jsx("p",{className:"text-body-secondary",children:"This is the main content area next to the side navigation."})]})})]})}},h=({to:s,children:n,className:i,...z})=>e.jsx("a",{href:s,className:i,...z,children:n}),r={render:s=>{const n=()=>{const{isCollapsed:i}=p();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{title:"Navigation with Custom Links",children:[e.jsx(a,{asChild:!0,variant:"selected",tooltipLabel:"SDS Registration",children:e.jsxs(h,{to:"/sds-upload",className:"gap-xs flex items-center",children:[e.jsx(x,{size:16,className:"shrink-0"}),!i&&"SDS Registration"]})}),e.jsx(a,{asChild:!0,tooltipLabel:"All SDS List",children:e.jsxs(h,{to:"/sds-list",className:"gap-xs flex items-center",children:[e.jsx(d,{size:16,className:"shrink-0"}),!i&&"All SDS List"]})}),e.jsx(a,{asChild:!0,tooltipLabel:"Alerts",children:e.jsxs(h,{to:"/sds-alerts",className:"gap-xs flex items-center",children:[e.jsx(y,{size:16,className:"shrink-0"}),!i&&e.jsx("span",{style:{color:"orange"},children:"Alerts (styled label)"})]})})]}),e.jsx(l,{title:"ReactNode Labels",isLast:!0,children:e.jsx(a,{asChild:!0,tooltipLabel:"Checklist",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(D,{size:16,className:"shrink-0"}),!i&&e.jsx("div",{className:"gap-xxs flex items-center",children:e.jsx("span",{children:"Checklist"})})]})})})]})};return e.jsxs("div",{className:"h-screen",children:[e.jsx(m,{...s,header:e.jsx(N,{}),footer:e.jsx(w,{}),showCollapseButton:!0,collapseLabel:"メニューを閉じる",expandLabel:"メニューを開く",children:e.jsx(n,{})}),e.jsx("div",{className:"bg-surface-secondary p-lg h-full",style:{marginLeft:"var(--cc-side-navigation-width)"},children:e.jsxs("div",{className:"bg-surface-primary p-lg rounded-md",children:[e.jsx("h1",{className:"text-body-primary mb-md text-xl font-medium",children:"Custom Links Demo"}),e.jsx("p",{className:"text-body-secondary",children:"This demonstrates using custom link components (like react-router's NavLink) and ReactNode labels for internationalization."})]})})]})}},c={args:{responsive:!0},render:s=>e.jsxs("div",{className:"flex min-h-screen",children:[e.jsx("div",{className:"w-(--cc-side-navigation-width) shrink-0"}),e.jsx(m,{...s,header:e.jsx(N,{}),children:e.jsxs(l,{title:"SDS管理",children:[e.jsx(a,{asChild:!0,tooltipLabel:"SDS登録",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(x,{size:16,className:"shrink-0"}),"SDS登録"]})}),e.jsx(a,{asChild:!0,variant:"selected",tooltipLabel:"SDS一覧",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(d,{size:16,className:"shrink-0"}),"SDS一覧"]})})]})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(H,{header:e.jsx(I,{}),children:e.jsx(U,{children:e.jsx(E,{asChild:!0,variant:"selected",children:e.jsxs("a",{href:"#",className:"gap-xs flex items-center",children:[e.jsx(d,{size:20,className:"shrink-0"}),"SDS一覧"]})})})}),e.jsxs("main",{className:"p-md text-body-primary",children:["The side navigation shows from md (768px) up. Below md it is hidden,",e.jsx("code",{children:"--cc-side-navigation-width"})," is 0 and MobileNavigation takes over. Switch the viewport to compare."]})]})]})};var v,S,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const DefaultContent = () => {
      const {
        isCollapsed
      } = useSideNavigation();
      return <>
          <SideNavigationSection title="SDS管理">
            <SideNavigationItem asChild variant="selected" tooltipLabel="SDS登録">
              <a href="#" className="gap-xs flex items-center">
                <IconUpload size={16} className="shrink-0" />
                {!isCollapsed && 'SDS登録'}
              </a>
            </SideNavigationItem>
            <SideNavigationItem asChild tooltipLabel="全SDS一覧">
              <a href="#" className="gap-xs flex items-center">
                <IconTable size={16} className="shrink-0" />
                {!isCollapsed && '全SDS一覧'}
              </a>
            </SideNavigationItem>
            <SideNavigationItem asChild tooltipLabel="要確認SDS">
              <a href="#" className="gap-xs flex items-center">
                <IconFileAlert size={16} className="shrink-0" />
                {!isCollapsed && '要確認SDS'}
              </a>
            </SideNavigationItem>
            <SideNavigationItem asChild tooltipLabel="削除済みSDS">
              <a href="#" className="gap-xs flex items-center">
                <IconTrashX size={16} className="shrink-0" />
                {!isCollapsed && '削除済みSDS'}
              </a>
            </SideNavigationItem>
          </SideNavigationSection>

          <SideNavigationSection title="チェックリスト" isLast>
            <SideNavigationItem asChild tooltipLabel="法令チェックリスト">
              <a href="#" className="gap-xs flex items-center">
                <IconChecklist size={16} className="shrink-0" />
                {!isCollapsed && '法令チェックリスト'}
              </a>
            </SideNavigationItem>
          </SideNavigationSection>
        </>;
    };
    return <div className="h-screen">
        <SideNavigation {...args} header={<Header />} footer={<Footer />} showCollapseButton collapseLabel="メニューを閉じる" expandLabel="メニューを開く">
          <DefaultContent />
        </SideNavigation>

        <div className="bg-surface-secondary p-lg h-full" style={{
        marginLeft: 'var(--cc-side-navigation-width)'
      }}>
          <div className="bg-surface-primary p-lg rounded-md">
            <h1 className="text-body-primary mb-md text-xl font-medium">
              Content Area
            </h1>
            <p className="text-body-secondary">
              This is the main content area next to the side navigation.
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var u,j,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const CustomLinksContent = () => {
      const {
        isCollapsed
      } = useSideNavigation();
      return <>
          <SideNavigationSection title="Navigation with Custom Links">
            <SideNavigationItem asChild variant="selected" tooltipLabel="SDS Registration">
              <MockNavigationLink to="/sds-upload" className="gap-xs flex items-center">
                <IconUpload size={16} className="shrink-0" />
                {!isCollapsed && 'SDS Registration'}
              </MockNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem asChild tooltipLabel="All SDS List">
              <MockNavigationLink to="/sds-list" className="gap-xs flex items-center">
                <IconTable size={16} className="shrink-0" />
                {!isCollapsed && 'All SDS List'}
              </MockNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem asChild tooltipLabel="Alerts">
              <MockNavigationLink to="/sds-alerts" className="gap-xs flex items-center">
                <IconFileAlert size={16} className="shrink-0" />
                {!isCollapsed && <span style={{
                color: 'orange'
              }}>Alerts (styled label)</span>}
              </MockNavigationLink>
            </SideNavigationItem>
          </SideNavigationSection>

          <SideNavigationSection title="ReactNode Labels" isLast>
            <SideNavigationItem asChild tooltipLabel="Checklist">
              <a href="#" className="gap-xs flex items-center">
                <IconChecklist size={16} className="shrink-0" />
                {!isCollapsed && <div className="gap-xxs flex items-center">
                    <span>Checklist</span>
                  </div>}
              </a>
            </SideNavigationItem>
          </SideNavigationSection>
        </>;
    };
    return <div className="h-screen">
        <SideNavigation {...args} header={<Header />} footer={<Footer />} showCollapseButton collapseLabel="メニューを閉じる" expandLabel="メニューを開く">
          <CustomLinksContent />
        </SideNavigation>

        <div className="bg-surface-secondary p-lg h-full" style={{
        marginLeft: 'var(--cc-side-navigation-width)'
      }}>
          <div className="bg-surface-primary p-lg rounded-md">
            <h1 className="text-body-primary mb-md text-xl font-medium">
              Custom Links Demo
            </h1>
            <p className="text-body-secondary">
              This demonstrates using custom link components (like
              react-router's NavLink) and ReactNode labels for
              internationalization.
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,k,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    responsive: true
  },
  render: args => <div className="flex min-h-screen">
      <div className="w-(--cc-side-navigation-width) shrink-0" />
      <SideNavigation {...args} header={<Header />}>
        <SideNavigationSection title="SDS管理">
          <SideNavigationItem asChild tooltipLabel="SDS登録">
            <a href="#" className="gap-xs flex items-center">
              <IconUpload size={16} className="shrink-0" />
              SDS登録
            </a>
          </SideNavigationItem>
          <SideNavigationItem asChild variant="selected" tooltipLabel="SDS一覧">
            <a href="#" className="gap-xs flex items-center">
              <IconTable size={16} className="shrink-0" />
              SDS一覧
            </a>
          </SideNavigationItem>
        </SideNavigationSection>
      </SideNavigation>
      <div className="min-w-0 flex-1">
        <MobileNavigation header={<Logo />}>
          <MobileNavigationSection>
            <MobileNavigationItem asChild variant="selected">
              <a href="#" className="gap-xs flex items-center">
                <IconTable size={20} className="shrink-0" />
                SDS一覧
              </a>
            </MobileNavigationItem>
          </MobileNavigationSection>
        </MobileNavigation>
        <main className="p-md text-body-primary">
          The side navigation shows from md (768px) up. Below md it is hidden,
          <code>--cc-side-navigation-width</code> is 0 and MobileNavigation
          takes over. Switch the viewport to compare.
        </main>
      </div>
    </div>
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const he=["Default","WithCustomLinks","Responsive"];export{o as Default,c as Responsive,r as WithCustomLinks,he as __namedExportsOrder,me as default};
