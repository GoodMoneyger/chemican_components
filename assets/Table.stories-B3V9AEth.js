import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as j}from"./Chip-ykHEQlYH.js";import{a as d}from"./tokens-D9FuHI_y.js";import{a as x}from"./Checkbox-sN7tU9io.js";import{e as r}from"./iframe-BDM2Oq3z.js";import{c as n}from"./index-p8XZ92QJ.js";import{c as N}from"./createReactComponent-ChwOZMJh.js";import"./bundle-mjs-DAWI7bSt.js";import"./index-CRGxjvZy.js";import"./index-gsAJC5pp.js";import"./index-D4oWi2Dw.js";import"./index-CwGBzq5b.js";import"./index-KeC0AL7D.js";import"./index-HwKa3vsb.js";import"./index-DRjUJoaR.js";import"./index-Exvkijpz.js";import"./IconCheck-CsV5YgT7.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]],_=N("outline","external-link","ExternalLink",g);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z",key:"svg-0"}],["path",{d:"M3 12h2a2 2 0 1 0 0 -4h-2v8",key:"svg-1"}],["path",{d:"M17 12h3",key:"svg-2"}],["path",{d:"M21 8h-4v8",key:"svg-3"}]],S=N("outline","pdf","Pdf",v),m=r.forwardRef(({className:a,...s},l)=>e.jsx("div",{className:"border-surface-default relative w-full overflow-auto border",children:e.jsx("table",{ref:l,className:n("w-full caption-bottom text-sm",a),...s})}));m.displayName="Table";const p=r.forwardRef(({className:a,...s},l)=>e.jsx("thead",{ref:l,className:n("bg-surface-secondary h-10 [&_tr]:border-b",a),...s}));p.displayName="TableHeader";const b=r.forwardRef(({className:a,...s},l)=>e.jsx("tbody",{ref:l,className:n("[&_tr:last-child]:border-0",a),...s}));b.displayName="TableBody";const T=r.forwardRef(({className:a,...s},l)=>e.jsx("tfoot",{ref:l,className:n("bg-surface-secondary border-t font-medium [&>tr]:last:border-b-0",a),...s}));T.displayName="TableFooter";const c=r.forwardRef(({className:a,...s},l)=>e.jsx("tr",{ref:l,className:n(`border-surface-default hover:bg-interactive-neutral-hover
      data-[state=selected]:bg-interactive-neutral-selected border-b
      transition-colors`,a),...s}));c.displayName="TableRow";const o=r.forwardRef(({className:a,...s},l)=>e.jsx("th",{ref:l,className:n(`text-body-primary px-4 text-left align-middle font-medium
      [&:has([role=checkbox])]:w-4 [&:has([role=checkbox])]:pr-0`,a),...s}));o.displayName="TableHead";const t=r.forwardRef(({className:a,...s},l)=>e.jsx("td",{ref:l,className:n("h-12 w-fit px-4 py-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s}));t.displayName="TableCell";const y=r.forwardRef(({className:a,...s},l)=>e.jsx("caption",{ref:l,className:n("text-body-primary mt-4 text-sm",a),...s}));y.displayName="TableCaption";m.__docgenInfo={description:"",methods:[],displayName:"Table"};p.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};T.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};o.__docgenInfo={description:"",methods:[],displayName:"TableHead"};c.__docgenInfo={description:"",methods:[],displayName:"TableRow"};t.__docgenInfo={description:"",methods:[],displayName:"TableCell"};y.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const C=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"Uranium Metal",companyName:"検見間株式会社",creation:"2024/04/16",status:"分析前",statusColor:d.StatusNeutral},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"Plutonium Oxide",companyName:"福田商事株式会社",creation:"2023/03/21",status:"分析中",statusColor:d.StatusInprogress},{sdsName:"SDS-Thorium_2022.pdf",productName:"Thorium",companyName:"中村化学工業株式会社",creation:"2022/08/15",status:"登録済み",statusColor:d.StatusSuccess},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"Cobalt Alloy",companyName:"大和工業株式会社",creation:"2021/11/05",status:"分析不可",statusColor:d.StatusAlert},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"Lead Metal",companyName:"山田金属株式会社",creation:"2023/07/29",status:"分析不可",statusColor:d.StatusWarning},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"Cadmium Compound",companyName:"川崎薬品株式会社",creation:"2020/05/12",status:"再データ化中",statusColor:d.StatusQueue}],$={title:"Components/Table",component:m},w=()=>e.jsxs(m,{children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(x,{label:""})}),e.jsx(o,{children:"SDS名"}),e.jsx(o,{children:"製品名"}),e.jsx(o,{children:"会社名"}),e.jsx(o,{children:"作成日 / 改訂日"}),e.jsx(o,{children:"ステータス"})]})}),e.jsx(b,{children:C.map((a,s)=>e.jsxs(c,{children:[e.jsx(t,{children:e.jsx(x,{label:""})}),e.jsx(t,{children:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:`bg-shape-accent-gray-pale inline-flex aspect-auto
                    rounded p-0.5`,children:e.jsx(S,{size:16,className:"text-shape-primary"})}),a.sdsName]}),e.jsx("a",{href:"#",children:e.jsx(_,{size:20,className:"text-shape-primary"})})]})}),e.jsx(t,{children:e.jsx("div",{className:`bg-surface-secondary px-xs py-xxs inline-flex rounded
                uppercase`,children:a.productName})}),e.jsx(t,{children:a.companyName}),e.jsx(t,{children:a.creation}),e.jsx(t,{children:e.jsx(j,{accentColor:a.statusColor,children:a.status})})]},s))})]}),i=w.bind({});i.args={data:C};var u,h,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Table>
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
                <div className="bg-shape-accent-gray-pale inline-flex aspect-auto
                    rounded p-0.5">
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
            <div className="bg-surface-secondary px-xs py-xxs inline-flex rounded
                uppercase">
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
  </Table>`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const q=["Default"];export{i as Default,q as __namedExportsOrder,$ as default};
