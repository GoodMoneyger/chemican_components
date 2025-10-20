import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as t}from"./iframe-CIKh5Z7i.js";import{S as I}from"./Status-DkXYYM3N.js";import{C as p}from"./tokens-xLE4eyJu.js";import{a as y}from"./Checkbox-CNHNSsoM.js";import{c}from"./utils-Dp7DHkto.js";import{P as z}from"./Progress-Db0XUdqQ.js";import{c as x}from"./createReactComponent-Dhxg9Dj9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ceFAULq9.js";import"./IconCheck-Bh36CSYb.js";import"./index-Buphg2eJ.js";import"./index-B4onH5X0.js";import"./index-Bu3sWwHc.js";import"./index-hEQw2dXf.js";import"./index-BgvPXgFA.js";import"./index-C9yiG_gu.js";import"./index-4aX4wZLV.js";import"./index-C7FY34d3.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M16 15l-4 4",key:"svg-1"}],["path",{d:"M8 15l4 4",key:"svg-2"}]],E=x("outline","arrow-narrow-down","ArrowNarrowDown",A);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M16 9l-4 -4",key:"svg-1"}],["path",{d:"M8 9l4 -4",key:"svg-2"}]],q=x("outline","arrow-narrow-up","ArrowNarrowUp",L);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M3 9l4 -4l4 4m-4 -4v14",key:"svg-0"}],["path",{d:"M21 15l-4 4l-4 -4m4 4v-14",key:"svg-1"}]],V=x("outline","arrows-sort","ArrowsSort",P);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]],M=x("outline","external-link","ExternalLink",U);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z",key:"svg-0"}],["path",{d:"M3 12h2a2 2 0 1 0 0 -4h-2v8",key:"svg-1"}],["path",{d:"M17 12h3",key:"svg-2"}],["path",{d:"M21 8h-4v8",key:"svg-3"}]],B=x("outline","pdf","Pdf",$),h=t.forwardRef(({className:a,loading:s=!1,loadingText:l="ローディング中…",children:o,...m},j)=>{const g=d=>d.type===f?t.cloneElement(d,{loading:s}):d.type===T?t.cloneElement(d,{loading:s,loadingText:l,colSpan:100}):d,v=t.Children.map(o,d=>t.isValidElement(d)?g(d):d);return e.jsx("div",{className:`border-surface-default bg-surface-primary relative w-fit
          border`,children:e.jsx("table",{ref:j,className:c("table-fixed caption-bottom border-collapse",a),...m,children:v})})});h.displayName="Table";const f=t.forwardRef(({className:a,loading:s=!1,children:l,...o},m)=>e.jsxs("thead",{ref:m,className:c("text-sm bg-surface-tertiary h-10 top-0 leading-tight sticky",a),...o,children:[l,s&&e.jsx("tr",{className:"inset-x-0 top-10 absolute",children:e.jsx("td",{colSpan:100,className:"left-0 right-0 absolute",children:e.jsx(z,{indeterminate:!0,className:`bg-surface-primary border-b-divider-default box-content
                border-b`})})})]}));f.displayName="TableHeader";const T=t.forwardRef(({className:a,loading:s=!1,loadingText:l="ローディング中…",colSpan:o=1,children:m,...j},g)=>{const v=t.Children.count(m)>1;return e.jsx("tbody",{ref:g,className:a,...j,children:s&&!v?e.jsx("tr",{children:e.jsx("td",{colSpan:o,className:"py-sm min-h-12 px-[1.44rem] text-center align-middle",children:l})}):m})});T.displayName="TableBody";const O=t.forwardRef(({className:a,...s},l)=>e.jsx("tfoot",{ref:l,className:c("bg-surface-secondary font-medium border-t",a),...s}));O.displayName="TableFooter";const u=t.forwardRef(({className:a,...s},l)=>e.jsx("tr",{ref:l,className:c(`border-surface-default hover:bg-interactive-neutral-hover border-b
      transition-colors`,a),...s}));u.displayName="TableRow";const n=t.forwardRef(({className:a,children:s,...l},o)=>e.jsx("th",{ref:o,className:c(`text-body-secondary font-medium [&:has([role=checkbox])]:w-8
      [&:has([role=checkbox])]:pr-0 h-10 px-[1.44rem] text-left`,a),...l,children:e.jsx("div",{className:"gap-xxs flex items-center",children:s})}));n.displayName="TableHead";const r=t.forwardRef(({className:a,...s},l)=>e.jsx("td",{ref:l,className:c("py-sm [&:has([role=checkbox])]:pr-0 min-h-12 px-[1.44rem] align-middle",a),...s}));r.displayName="TableCell";const D=t.forwardRef(({className:a,...s},l)=>e.jsx("caption",{ref:l,className:c("text-body-primary mt-4 text-sm",a),...s}));D.displayName="TableCaption";const i=t.forwardRef(({sortOrder:a,className:s,...l},o)=>e.jsxs("button",{ref:o,className:c(`text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,s),...l,children:[e.jsx("span",{className:"sr-only",children:"Sort"}),a==="asc"?e.jsx(q,{className:"h-4 w-4"}):a==="desc"?e.jsx(E,{className:"h-4 w-4"}):e.jsx(V,{className:"h-4 w-4"})]}));h.__docgenInfo={description:"",methods:[],displayName:"Table",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ローディング中…'",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ローディング中…'",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};O.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};n.__docgenInfo={description:"",methods:[],displayName:"TableHead"};u.__docgenInfo={description:"",methods:[],displayName:"TableRow"};r.__docgenInfo={description:"",methods:[],displayName:"TableCell"};D.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};i.__docgenInfo={description:"",methods:[],displayName:"TableHeadSortButton",props:{sortOrder:{required:!0,tsType:{name:"union",raw:"'asc' | 'desc' | undefined",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"Uranium Metal",companyName:"検見間株式会社",creation:"2024/04/16",status:"分析前",statusColor:p.StatusNeutral},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"Plutonium Oxide",companyName:"福田商事株式会社",creation:"2023/03/21",status:"分析中",statusColor:p.StatusInprogress},{sdsName:"SDS-Thorium_2022.pdf",productName:"Thorium",companyName:"中村化学工業株式会社",creation:"2022/08/15",status:"登録済み",statusColor:p.StatusSuccess},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"Cobalt Alloy",companyName:"大和工業株式会社",creation:"2021/11/05",status:"分析不可",statusColor:p.StatusAlert},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"Lead Metal",companyName:"山田金属株式会社",creation:"2023/07/29",status:"分析不可",statusColor:p.StatusWarning},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"Cadmium Compound",companyName:"川崎薬品株式会社",creation:"2020/05/12",status:"再データ化中",statusColor:p.StatusQueue}],pe={title:"Components/Table",component:h},F=()=>e.jsxs(h,{children:[e.jsx(f,{children:e.jsxs(u,{children:[e.jsx(n,{children:e.jsx(y,{label:""})}),e.jsxs(n,{children:["SDS名 ",e.jsx(i,{sortOrder:"asc"})]}),e.jsxs(n,{children:["製品名",e.jsx(i,{sortOrder:"asc"})]}),e.jsxs(n,{children:["会社名",e.jsx(i,{sortOrder:"asc"})]}),e.jsx(n,{children:"作成日 / 改訂日"}),e.jsx(n,{children:"ステータス"})]})}),e.jsx(T,{children:C.map((a,s)=>e.jsxs(u,{children:[e.jsx(r,{children:e.jsx(y,{label:""})}),e.jsx(r,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("div",{className:`bg-shape-accent-gray-pale rounded p-0.5 inline-flex
                    aspect-auto`,children:e.jsx(B,{size:16,className:"text-shape-primary"})}),a.sdsName]}),e.jsx("a",{href:"#",children:e.jsx(M,{size:20,className:"text-shape-primary"})})]})}),e.jsx(r,{children:e.jsx("div",{className:`bg-surface-secondary px-xs py-xxs rounded inline-flex
                uppercase`,children:a.productName})}),e.jsx(r,{children:a.companyName}),e.jsx(r,{children:a.creation}),e.jsx(r,{children:e.jsx(I,{accentColor:a.statusColor,children:a.status})})]},s))})]}),b=F.bind({});b.args={data:C};const Q=()=>e.jsxs(h,{loading:!0,children:[e.jsx(f,{children:e.jsxs(u,{children:[e.jsx(n,{children:e.jsx(y,{label:""})}),e.jsxs(n,{children:["SDS名 ",e.jsx(i,{sortOrder:"asc"})]}),e.jsxs(n,{children:["製品名",e.jsx(i,{sortOrder:"asc"})]}),e.jsxs(n,{children:["会社名",e.jsx(i,{sortOrder:"asc"})]}),e.jsx(n,{children:"作成日 / 改訂日"}),e.jsx(n,{children:"ステータス"})]})}),e.jsx(T,{children:C.map((a,s)=>e.jsxs(u,{children:[e.jsx(r,{children:e.jsx(y,{label:""})}),e.jsx(r,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("div",{className:`bg-shape-accent-gray-pale rounded p-0.5 inline-flex
                    aspect-auto`,children:e.jsx(B,{size:16,className:"text-shape-primary"})}),a.sdsName]}),e.jsx("a",{href:"#",children:e.jsx(M,{size:20,className:"text-shape-primary"})})]})}),e.jsx(r,{children:e.jsx("div",{className:`bg-surface-secondary px-xs py-xxs rounded inline-flex
                uppercase`,children:a.productName})}),e.jsx(r,{children:a.companyName}),e.jsx(r,{children:a.creation}),e.jsx(r,{children:e.jsx(I,{accentColor:a.statusColor,children:a.status})})]},s))})]}),N=Q.bind({});var w,S,H;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox label="" />
        </TableHead>
        <TableHead>
          SDS名 <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>
          製品名
          <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>
          会社名
          <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>作成日 / 改訂日</TableHead>
        <TableHead>ステータス</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row, index) => <TableRow key={index}>
          <TableCell>
            <Checkbox label="" />
          </TableCell>
          <TableCell>
            <div className="gap-2 inline-flex items-center">
              <div className="gap-1 flex items-center">
                <div className="bg-shape-accent-gray-pale rounded p-0.5 inline-flex
                    aspect-auto">
                  <IconPdf size={16} className="text-shape-primary" />
                </div>
                {row.sdsName}
              </div>
              <a href="#">
                <IconExternalLink size={20} className="text-shape-primary" />
              </a>
            </div>
          </TableCell>
          <TableCell>
            <div className="bg-surface-secondary px-xs py-xxs rounded inline-flex
                uppercase">
              {row.productName}
            </div>
          </TableCell>
          <TableCell>{row.companyName}</TableCell>
          <TableCell>{row.creation}</TableCell>
          <TableCell>
            <Status accentColor={row.statusColor}>{row.status}</Status>
          </TableCell>
        </TableRow>)}
    </TableBody>
  </Table>`,...(H=(S=b.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var _,k,R;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Table loading>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox label="" />
        </TableHead>
        <TableHead>
          SDS名 <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>
          製品名
          <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>
          会社名
          <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>作成日 / 改訂日</TableHead>
        <TableHead>ステータス</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row, index) => <TableRow key={index}>
          <TableCell>
            <Checkbox label="" />
          </TableCell>
          <TableCell>
            <div className="gap-2 inline-flex items-center">
              <div className="gap-1 flex items-center">
                <div className="bg-shape-accent-gray-pale rounded p-0.5 inline-flex
                    aspect-auto">
                  <IconPdf size={16} className="text-shape-primary" />
                </div>
                {row.sdsName}
              </div>
              <a href="#">
                <IconExternalLink size={20} className="text-shape-primary" />
              </a>
            </div>
          </TableCell>
          <TableCell>
            <div className="bg-surface-secondary px-xs py-xxs rounded inline-flex
                uppercase">
              {row.productName}
            </div>
          </TableCell>
          <TableCell>{row.companyName}</TableCell>
          <TableCell>{row.creation}</TableCell>
          <TableCell>
            <Status accentColor={row.statusColor}>{row.status}</Status>
          </TableCell>
        </TableRow>)}
    </TableBody>
  </Table>`,...(R=(k=N.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const ue=["Default","Loading"];export{b as Default,N as Loading,ue as __namedExportsOrder,pe as default};
