import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as l}from"./iframe-tvb3DnSj.js";import{S as I}from"./Status-U3Sc8sA8.js";import{C as i}from"./tokens-xLE4eyJu.js";import{a as N}from"./Checkbox-CZbCJIGP.js";import{c as d}from"./utils-w7_EVyZy.js";import{P as M}from"./Progress-D4DcyHtm.js";import{c as x}from"./createReactComponent-BO7-ZJx2.js";import{I as B}from"./IconExternalLink-Du9wHsLo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DV-4Lxu1.js";import"./IconCheck-Wzp-WL4v.js";import"./index-BXo9Dsmz.js";import"./index---ZXWUms.js";import"./index-B_Ym4Tvl.js";import"./index-BlS0AmTV.js";import"./index-D7UmXk8Z.js";import"./index-BmbvGYeD.js";import"./index-lyKC8i_Q.js";import"./index-CVNcQtDk.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M16 15l-4 4",key:"svg-1"}],["path",{d:"M8 15l4 4",key:"svg-2"}]],D=x("outline","arrow-narrow-down","ArrowNarrowDown",O);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M16 9l-4 -4",key:"svg-1"}],["path",{d:"M8 9l4 -4",key:"svg-2"}]],q=x("outline","arrow-narrow-up","ArrowNarrowUp",A);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M3 9l4 -4l4 4m-4 -4v14",key:"svg-0"}],["path",{d:"M21 15l-4 4l-4 -4m4 4v-14",key:"svg-1"}]],P=x("outline","arrows-sort","ArrowsSort",L);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z",key:"svg-0"}],["path",{d:"M3 12h2a2 2 0 1 0 0 -4h-2v8",key:"svg-1"}],["path",{d:"M17 12h3",key:"svg-2"}],["path",{d:"M21 8h-4v8",key:"svg-3"}]],E=x("outline","pdf","Pdf",z),u=l.forwardRef(({className:a,children:s,...r},t)=>e.jsx("div",{className:"border-surface-default bg-surface-primary relative border",children:e.jsx("table",{ref:t,className:d("w-full caption-bottom",a),...r,children:s})}));u.displayName="Table";const f=l.forwardRef(({className:a,loading:s=!1,children:r,...t},T)=>e.jsxs("thead",{ref:T,className:d("text-sm bg-surface-tertiary h-10 top-0 leading-tight sticky",a),...t,children:[r,s&&e.jsx("tr",{children:e.jsx("td",{colSpan:100,className:"p-0 h-0",children:e.jsx(M,{indeterminate:!0,className:`bg-surface-primary border-b-divider-default box-content
                border-b`})})})]}));f.displayName="TableHeader";const h=l.forwardRef(({className:a,loading:s=!1,loadingText:r="ローディング中…",colSpan:t=1,children:T,...R},k)=>e.jsx("tbody",{ref:k,className:a,...R,children:s?e.jsx("tr",{children:e.jsx("td",{colSpan:t,className:"py-sm min-h-12 px-[1.44rem] text-center align-middle",children:r})}):T}));h.displayName="TableBody";const C=l.forwardRef(({className:a,...s},r)=>e.jsx("tfoot",{ref:r,className:d("bg-surface-secondary font-medium border-t",a),...s}));C.displayName="TableFooter";const p=l.forwardRef(({className:a,...s},r)=>e.jsx("tr",{ref:r,className:d(`border-surface-default hover:bg-interactive-neutral-hover
      data-[state=selected]:bg-interactive-neutral-selected border-b
      transition-colors`,a),...s}));p.displayName="TableRow";const o=l.forwardRef(({className:a,children:s,...r},t)=>e.jsx("th",{ref:t,className:d(`text-body-secondary font-medium [&:has([role=checkbox])]:w-8
      [&:has([role=checkbox])]:pr-0 h-10 px-[1.44rem] text-left`,a),...r,children:e.jsx("div",{className:"gap-xxs flex items-center",children:s})}));o.displayName="TableHead";const n=l.forwardRef(({className:a,...s},r)=>e.jsx("td",{ref:r,className:d("py-sm [&:has([role=checkbox])]:pr-0 min-h-12 px-[1.44rem] align-middle",a),...s}));n.displayName="TableCell";const H=l.forwardRef(({className:a,...s},r)=>e.jsx("caption",{ref:r,className:d("text-body-primary mt-4 text-sm",a),...s}));H.displayName="TableCaption";const c=l.forwardRef(({sortOrder:a,className:s,...r},t)=>e.jsxs("button",{ref:t,className:d(`text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,s),...r,children:[e.jsx("span",{className:"sr-only",children:"Sort"}),a==="asc"?e.jsx(q,{className:"h-4 w-4"}):a==="desc"?e.jsx(D,{className:"h-4 w-4"}):e.jsx(P,{className:"h-4 w-4"})]}));u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ローディング中…'",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};o.__docgenInfo={description:"",methods:[],displayName:"TableHead"};p.__docgenInfo={description:"",methods:[],displayName:"TableRow"};n.__docgenInfo={description:"",methods:[],displayName:"TableCell"};H.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeadSortButton",props:{sortOrder:{required:!0,tsType:{name:"union",raw:"'asc' | 'desc' | undefined",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"Uranium Metal",companyName:"検見間株式会社",creation:"2024/04/16",status:"分析前",statusColor:i.StatusNeutral},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"Plutonium Oxide",companyName:"福田商事株式会社",creation:"2023/03/21",status:"分析中",statusColor:i.StatusInprogress},{sdsName:"SDS-Thorium_2022.pdf",productName:"Thorium",companyName:"中村化学工業株式会社",creation:"2022/08/15",status:"登録済み",statusColor:i.StatusSuccess},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"Cobalt Alloy",companyName:"大和工業株式会社",creation:"2021/11/05",status:"分析不可",statusColor:i.StatusAlert},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"Lead Metal",companyName:"山田金属株式会社",creation:"2023/07/29",status:"分析不可",statusColor:i.StatusWarning},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"Cadmium Compound",companyName:"川崎薬品株式会社",creation:"2020/05/12",status:"再データ化中",statusColor:i.StatusQueue}],ie={title:"Components/Table",component:u},U=()=>e.jsxs(u,{children:[e.jsx(f,{children:e.jsxs(p,{children:[e.jsx(o,{children:e.jsx(N,{label:""})}),e.jsxs(o,{children:["SDS名 ",e.jsx(c,{sortOrder:"asc"})]}),e.jsxs(o,{children:["製品名",e.jsx(c,{sortOrder:"asc"})]}),e.jsxs(o,{children:["会社名",e.jsx(c,{sortOrder:"asc"})]}),e.jsx(o,{children:"作成日 / 改訂日"}),e.jsx(o,{children:"ステータス"})]})}),e.jsx(h,{children:_.map((a,s)=>e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(N,{label:""})}),e.jsx(n,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("div",{className:`bg-shape-accent-gray-pale rounded p-0.5 inline-flex
                    aspect-auto`,children:e.jsx(E,{size:16,className:"text-shape-primary"})}),a.sdsName]}),e.jsx("a",{href:"#",children:e.jsx(B,{size:20,className:"text-shape-primary"})})]})}),e.jsx(n,{children:e.jsx("div",{className:`bg-surface-secondary px-xs py-xxs rounded inline-flex
                uppercase`,children:a.productName})}),e.jsx(n,{children:a.companyName}),e.jsx(n,{children:a.creation}),e.jsx(n,{children:e.jsx(I,{accentColor:a.statusColor,children:a.status})})]},s))})]}),m=U.bind({});m.args={data:_};const V=()=>e.jsxs(u,{loading:!0,children:[e.jsx(f,{loading:!0,children:e.jsxs(p,{children:[e.jsx(o,{children:e.jsx(N,{label:""})}),e.jsxs(o,{children:["SDS名 ",e.jsx(c,{sortOrder:"asc"})]}),e.jsxs(o,{children:["製品名",e.jsx(c,{sortOrder:"asc"})]}),e.jsxs(o,{children:["会社名",e.jsx(c,{sortOrder:"asc"})]}),e.jsx(o,{children:"作成日 / 改訂日"}),e.jsx(o,{children:"ステータス"})]})}),e.jsx(h,{loading:!0,colSpan:6})]}),b=V.bind({});var y,j,g;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Table>
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
  </Table>`,...(g=(j=m.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,v,w;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Table loading>
    <TableHeader loading>
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
    <TableBody loading colSpan={6} />
  </Table>`,...(w=(v=b.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const me=["Default","Loading"];export{m as Default,b as Loading,me as __namedExportsOrder,ie as default};
