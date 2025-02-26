import{j as e}from"./jsx-runtime-BRtPMPcD.js";import{C as j}from"./Chip-B6Au2lm2.js";import{a as n}from"./tokens-CCpC0Q-i.js";import{a as u}from"./Checkbox-BM3Mqlth.js";import{R as r}from"./index-B6zSntGL.js";import{c as d}from"./index-GW4lMJ8d.js";import{c as N}from"./createReactComponent-C-U1lqbQ.js";import"./index-BVKZFYvx.js";import"./bundle-mjs-AdmevC4f.js";import"./index-CRGxjvZy.js";import"./index-CjjwPJL9.js";import"./index-DZybwm6Q.js";import"./index-CXPkhR-h.js";import"./index-_63jvynG.js";import"./index-CLQJBhTJ.js";import"./index-DgPlXk8g.js";import"./index-zxI3hicD.js";import"./IconCheck-C_JU1A8E.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var g=N("outline","external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v=N("outline","pdf","IconPdf",[["path",{d:"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z",key:"svg-0"}],["path",{d:"M3 12h2a2 2 0 1 0 0 -4h-2v8",key:"svg-1"}],["path",{d:"M17 12h3",key:"svg-2"}],["path",{d:"M21 8h-4v8",key:"svg-3"}]]);const m=r.forwardRef(({className:a,...s},l)=>e.jsx("div",{className:"relative w-full overflow-auto border border-surface-default",children:e.jsx("table",{ref:l,className:d("w-full caption-bottom text-sm",a),...s})}));m.displayName="Table";const p=r.forwardRef(({className:a,...s},l)=>e.jsx("thead",{ref:l,className:d("h-10 bg-surface-secondary [&_tr]:border-b",a),...s}));p.displayName="TableHeader";const b=r.forwardRef(({className:a,...s},l)=>e.jsx("tbody",{ref:l,className:d("[&_tr:last-child]:border-0",a),...s}));b.displayName="TableBody";const T=r.forwardRef(({className:a,...s},l)=>e.jsx("tfoot",{ref:l,className:d("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...s}));T.displayName="TableFooter";const c=r.forwardRef(({className:a,...s},l)=>e.jsx("tr",{ref:l,className:d("hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-surface-default transition-colors",a),...s}));c.displayName="TableRow";const o=r.forwardRef(({className:a,...s},l)=>e.jsx("th",{ref:l,className:d("text-muted-foreground px-4 text-left align-middle font-medium [&:has([role=checkbox])]:w-4 [&:has([role=checkbox])]:pr-0",a),...s}));o.displayName="TableHead";const t=r.forwardRef(({className:a,...s},l)=>e.jsx("td",{ref:l,className:d("h-12 w-fit px-4 py-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s}));t.displayName="TableCell";const y=r.forwardRef(({className:a,...s},l)=>e.jsx("caption",{ref:l,className:d("text-muted-foreground mt-4 text-sm",a),...s}));y.displayName="TableCaption";m.__docgenInfo={description:"",methods:[],displayName:"Table"};p.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};T.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};o.__docgenInfo={description:"",methods:[],displayName:"TableHead"};c.__docgenInfo={description:"",methods:[],displayName:"TableRow"};t.__docgenInfo={description:"",methods:[],displayName:"TableCell"};y.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const C=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"Uranium Metal",companyName:"検見間株式会社",creation:"2024/04/16",status:"分析前",statusColor:n.StatusNeutral},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"Plutonium Oxide",companyName:"福田商事株式会社",creation:"2023/03/21",status:"分析中",statusColor:n.StatusInProgress},{sdsName:"SDS-Thorium_2022.pdf",productName:"Thorium",companyName:"中村化学工業株式会社",creation:"2022/08/15",status:"登録済み",statusColor:n.StatusSuccess},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"Cobalt Alloy",companyName:"大和工業株式会社",creation:"2021/11/05",status:"分析不可",statusColor:n.StatusAlert},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"Lead Metal",companyName:"山田金属株式会社",creation:"2023/07/29",status:"分析不可",statusColor:n.StatusWarning},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"Cadmium Compound",companyName:"川崎薬品株式会社",creation:"2020/05/12",status:"再データ化中",statusColor:n.StatusQueue}],W={title:"Components/Table",component:m},_=()=>e.jsxs(m,{children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{label:""})}),e.jsx(o,{children:"SDS名"}),e.jsx(o,{children:"製品名"}),e.jsx(o,{children:"会社名"}),e.jsx(o,{children:"作成日 / 改訂日"}),e.jsx(o,{children:"ステータス"})]})}),e.jsx(b,{children:C.map((a,s)=>e.jsxs(c,{children:[e.jsx(t,{children:e.jsx(u,{label:""})}),e.jsx(t,{children:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"inline-flex aspect-auto rounded bg-shape-secondary p-0.5",children:e.jsx(v,{size:16,className:"text-shape-inverse"})}),a.sdsName]}),e.jsx("a",{href:"#",children:e.jsx(g,{size:20,className:"text-shape-primary"})})]})}),e.jsx(t,{children:e.jsx("div",{className:"inline-flex rounded bg-surface-secondary px-xs py-xxs uppercase",children:a.productName})}),e.jsx(t,{children:a.companyName}),e.jsx(t,{children:a.creation}),e.jsx(t,{children:e.jsx(j,{accentColor:a.statusColor,children:a.status})})]},s))})]}),i=_.bind({});i.args={data:C};var x,h,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Table>
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
            <Chip accentColor={row.statusColor}>{row.status}</Chip>
          </TableCell>
        </TableRow>)}
    </TableBody>
  </Table>`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const q=["Default"];export{i as Default,q as __namedExportsOrder,W as default};
