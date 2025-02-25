import{j as e}from"./jsx-runtime-BRtPMPcD.js";import{C as g}from"./Chip-CXn1mMzH.js";import{R as d}from"./index-B6zSntGL.js";import{c as r}from"./index-GW4lMJ8d.js";import{a as b}from"./Checkbox-BM3Mqlth.js";import{c as f}from"./createReactComponent-C-U1lqbQ.js";import"./index-BVKZFYvx.js";import"./bundle-mjs-AdmevC4f.js";import"./index-CRGxjvZy.js";import"./index-CjjwPJL9.js";import"./index-DZybwm6Q.js";import"./index-CXPkhR-h.js";import"./index-_63jvynG.js";import"./index-CLQJBhTJ.js";import"./index-DgPlXk8g.js";import"./index-zxI3hicD.js";import"./IconCheck-C_JU1A8E.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=f("outline","external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j=f("outline","pdf","IconPdf",[["path",{d:"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z",key:"svg-0"}],["path",{d:"M3 12h2a2 2 0 1 0 0 -4h-2v8",key:"svg-1"}],["path",{d:"M17 12h3",key:"svg-2"}],["path",{d:"M21 8h-4v8",key:"svg-3"}]]);const c=d.forwardRef(({className:a,...s},l)=>e.jsx("div",{className:"relative w-full overflow-auto border border-surface-default",children:e.jsx("table",{ref:l,className:r("text-sm w-full caption-bottom",a),...s})}));c.displayName="Table";const m=d.forwardRef(({className:a,...s},l)=>e.jsx("thead",{ref:l,className:r("h-10 bg-surface-secondary [&_tr]:border-b",a),...s}));m.displayName="TableHeader";const p=d.forwardRef(({className:a,...s},l)=>e.jsx("tbody",{ref:l,className:r("[&_tr:last-child]:border-0",a),...s}));p.displayName="TableBody";const N=d.forwardRef(({className:a,...s},l)=>e.jsx("tfoot",{ref:l,className:r("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...s}));N.displayName="TableFooter";const i=d.forwardRef(({className:a,...s},l)=>e.jsx("tr",{ref:l,className:r("hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-surface-default transition-colors",a),...s}));i.displayName="TableRow";const t=d.forwardRef(({className:a,...s},l)=>e.jsx("th",{ref:l,className:r("text-muted-foreground px-4 text-left align-middle font-medium [&:has([role=checkbox])]:w-4 [&:has([role=checkbox])]:pr-0",a),...s}));t.displayName="TableHead";const o=d.forwardRef(({className:a,...s},l)=>e.jsx("td",{ref:l,className:r("h-12 w-fit px-4 py-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s}));o.displayName="TableCell";const T=d.forwardRef(({className:a,...s},l)=>e.jsx("caption",{ref:l,className:r("text-sm text-muted-foreground mt-4",a),...s}));T.displayName="TableCaption";c.__docgenInfo={description:"",methods:[],displayName:"Table"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};p.__docgenInfo={description:"",methods:[],displayName:"TableBody"};N.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};t.__docgenInfo={description:"",methods:[],displayName:"TableHead"};i.__docgenInfo={description:"",methods:[],displayName:"TableRow"};o.__docgenInfo={description:"",methods:[],displayName:"TableCell"};T.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const y=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"Uranium Metal",companyName:"検見間株式会社",creation:"2024/04/16",status:"分析前",statusColor:"bg-status-neutral"},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"Plutonium Oxide",companyName:"福田商事株式会社",creation:"2023/03/21",status:"分析中",statusColor:"bg-status-inProgress"},{sdsName:"SDS-Thorium_2022.pdf",productName:"Thorium",companyName:"中村化学工業株式会社",creation:"2022/08/15",status:"登録済み",statusColor:"bg-status-success"},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"Cobalt Alloy",companyName:"大和工業株式会社",creation:"2021/11/05",status:"分析不可",statusColor:"bg-status-alert"},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"Lead Metal",companyName:"山田金属株式会社",creation:"2023/07/29",status:"分析不可",statusColor:"bg-status-warning"},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"Cadmium Compound",companyName:"川崎薬品株式会社",creation:"2020/05/12",status:"再データ化中",statusColor:"bg-status-queue"}],U={title:"Components/Table",component:c},v=()=>e.jsxs(c,{children:[e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(b,{label:""})}),e.jsx(t,{children:"SDS名"}),e.jsx(t,{children:"製品名"}),e.jsx(t,{children:"会社名"}),e.jsx(t,{children:"作成日 / 改訂日"}),e.jsx(t,{children:"ステータス"})]})}),e.jsx(p,{children:y.map((a,s)=>e.jsxs(i,{children:[e.jsx(o,{children:e.jsx(b,{label:""})}),e.jsx(o,{children:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"inline-flex aspect-auto rounded bg-shape-secondary p-0.5",children:e.jsx(j,{size:16,className:"text-shape-inverse"})}),a.sdsName]}),e.jsx("a",{href:"#",children:e.jsx(C,{size:20,className:"text-shape-primary"})})]})}),e.jsx(o,{children:e.jsx("div",{className:"inline-flex rounded bg-surface-secondary px-xs py-xxs uppercase",children:a.productName})}),e.jsx(o,{children:a.companyName}),e.jsx(o,{children:a.creation}),e.jsx(o,{children:e.jsx(g,{className:a.statusColor,children:a.status})})]},s))})]}),n=v.bind({});n.args={data:y};var u,x,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox label="" />
        </TableHead>
        <TableHead>SDS名</TableHead>
        <TableHead>製品名</TableHead>
        <TableHead>会社名</TableHead>
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
            <div className="inline-flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="inline-flex aspect-auto rounded bg-shape-secondary p-0.5">
                  <IconPdf size={16} className="text-shape-inverse" />
                </div>
                {row.sdsName}
              </div>
              <a href="#">
                <IconExternalLink size={20} className="text-shape-primary" />
              </a>
            </div>
          </TableCell>
          <TableCell>
            <div className="inline-flex rounded bg-surface-secondary px-xs py-xxs uppercase">
              {row.productName}
            </div>
          </TableCell>
          <TableCell>{row.companyName}</TableCell>
          <TableCell>{row.creation}</TableCell>
          <TableCell>
            <Chip className={row.statusColor}>{row.status}</Chip>
          </TableCell>
        </TableRow>)}
    </TableBody>
  </Table>`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,U as default};
