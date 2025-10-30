import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as p}from"./iframe-DMYWUF7w.js";import{S}from"./StatusIndicator-2Kn0f3U2.js";import{a as D}from"./Checkbox-DDjJBfGN.js";import{T as b}from"./Tag-p7fT4fTM.js";import{c as u}from"./utils-B-kTA-Ij.js";import{P as _}from"./ProgressIndicator-BHEWvt9p.js";import{I as w}from"./IconExternalLink-DZTI_Vwf.js";import{c as O}from"./createReactComponent-CE1qD6Cm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP91VJlx.js";import"./IconCheck-iNVKsfll.js";import"./index-qp8IEN2i.js";import"./index-CYUDGLiF.js";import"./index-B0Lt564T.js";import"./index-C8Prwpr2.js";import"./index-i-2MpnuO.js";import"./index-Cdd1pdDc.js";import"./index-BHk0VCeC.js";import"./index-BkLOywlz.js";import"./tokens-CCKFbji5.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 15l2 2l4 -4",key:"svg-2"}]],E=O("outline","file-check","FileCheck",A),C=p.forwardRef(({className:a,children:l,...r},c)=>e.jsx("div",{className:`border-surface-default bg-surface-primary relative w-max
        border`,children:e.jsx("table",{ref:c,className:u("w-full caption-bottom",a),...r,children:l})}));C.displayName="Table";const T=p.forwardRef(({className:a,loading:l=!1,children:r,...c},s)=>e.jsxs("thead",{ref:s,className:u("text-sm bg-surface-tertiary top-0 sticky",a),...c,children:[r,l&&e.jsx("tr",{children:e.jsx("td",{colSpan:100,className:"p-0 h-0",children:e.jsx(_.Linear,{indeterminate:!0,className:`bg-surface-primary border-b-divider-default box-content
                border-b`})})})]}));T.displayName="TableHeader";const h=p.forwardRef(({className:a,loading:l=!1,loadingText:r="ローディング中…",colSpan:c=1,children:s,...n},i)=>e.jsx("tbody",{ref:i,className:a,...n,children:l?e.jsx("tr",{children:e.jsx("td",{colSpan:c,className:"py-sm min-h-12 px-[1.44rem] text-center align-middle",children:r})}):s}));h.displayName="TableBody";const H=p.forwardRef(({className:a,...l},r)=>e.jsx("tfoot",{ref:r,className:u("bg-surface-secondary font-medium border-t",a),...l}));H.displayName="TableFooter";const x=p.forwardRef(({className:a,...l},r)=>e.jsx("tr",{ref:r,className:u(`border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover transition-colors
      [:not(:last-child)]:border-b`,a),...l}));x.displayName="TableRow";const t=p.forwardRef(({className:a,children:l,...r},c)=>e.jsx("th",{ref:c,className:u(`text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      max-w-[400px] text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,a),...r,children:e.jsx("div",{className:"gap-xxs flex items-center",children:l})}));t.displayName="TableHead";const d=p.forwardRef(({className:a,...l},r)=>e.jsx("td",{ref:r,className:u(`py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,a),...l}));d.displayName="TableCell";const L=p.forwardRef(({className:a,...l},r)=>e.jsx("caption",{ref:r,className:u("text-body-primary mt-md text-sm",a),...l}));L.displayName="TableCaption";const m=p.forwardRef(({sortOrder:a,className:l,...r},c)=>e.jsxs("button",{ref:c,className:u(`text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,l),...r,children:[e.jsx("span",{className:"sr-only",children:"Sort"}),e.jsxs("svg",{className:"size-4",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{"clip-path":"url(#clip0_24993_1396)",children:[e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z",fill:a==="asc"?"var(--color-shape-interactive-primary-default)":a===void 0?"var(--color-shape-light)":"var(--color-shape-interactive-disabled)"}),e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z",fill:a==="desc"?"var(--color-shape-interactive-primary-default)":a===void 0?"var(--color-shape-light)":"var(--color-shape-interactive-disabled)"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_24993_1396",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})]}));C.__docgenInfo={description:"",methods:[],displayName:"Table",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ローディング中…'",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};H.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};t.__docgenInfo={description:"",methods:[],displayName:"TableHead"};x.__docgenInfo={description:"",methods:[],displayName:"TableRow"};d.__docgenInfo={description:"",methods:[],displayName:"TableCell"};L.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeadSortButton",props:{sortOrder:{required:!0,tsType:{name:"union",raw:"'asc' | 'desc' | undefined",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const U=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"URANIUM METAL",manufacturer:"検見間株式会社",dataStatus:"データ化前",dataStatusLevel:"neutral",pdfUploadDate:"2024/04/16",assignedUser:"小田 史彦",sdsRevisionDate:"2024/04/16",supplierConfirmDate:"2024/04/16",revisionStatus:"旧版",revisionStatusLevel:"warning",departments:["開発チーム","研究開発部"],tags:[{label:"2024年追加分",colorCode:11},{label:"拠点：〇〇工場",colorCode:7},{label:"編集者追加分タグ",colorCode:3}],productCodes:["7732-18-5","64-17-5","12-34-56"],riskAssessmentDate:"2024/04/16",canExport:!0},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"PLUTONIUM OXIDE",manufacturer:"福田商事株式会社",dataStatus:"分析中",dataStatusLevel:"inProgress",pdfUploadDate:"2023/03/21",assignedUser:"佐藤 花子",sdsRevisionDate:"2023/02/10",supplierConfirmDate:"2023/02/20",revisionStatus:"対応中",revisionStatusLevel:"inProgress",departments:["製造部"],tags:[{label:"放射性物質",colorCode:15},{label:"危険物",colorCode:1}],productCodes:["7440-07-5"],riskAssessmentDate:"2023/04/15",canExport:!0},{sdsName:"SDS-Thorium_2022.pdf",productName:"THORIUM",manufacturer:"中村化学工業株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2022/08/15",assignedUser:"鈴木 一郎",sdsRevisionDate:"2022/07/01",supplierConfirmDate:"2022/07/10",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部","環境安全部"],tags:[{label:"重金属",colorCode:0},{label:"管理物質",colorCode:13}],productCodes:["7440-29-1","1314-20-1"],riskAssessmentDate:"2022/09/01",canExport:!0},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"COBALT ALLOY",manufacturer:"大和工業株式会社",dataStatus:"分析不可",dataStatusLevel:"alert",pdfUploadDate:"2021/11/05",assignedUser:"高橋 美咲",sdsRevisionDate:"2021/10/01",supplierConfirmDate:"2021/10/15",revisionStatus:"エラー",revisionStatusLevel:"alert",departments:["製造部"],tags:[{label:"合金",colorCode:5},{label:"拠点：東京工場",colorCode:7}],productCodes:["7440-48-4"],riskAssessmentDate:"2021/12/01",canExport:!1},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"LEAD METAL",manufacturer:"山田金属株式会社",dataStatus:"分析不可",dataStatusLevel:"warning",pdfUploadDate:"2023/07/29",assignedUser:"伊藤 健太",sdsRevisionDate:"2023/06/15",supplierConfirmDate:"2023/06/25",revisionStatus:"要確認",revisionStatusLevel:"warning",departments:["環境安全部"],tags:[{label:"重金属",colorCode:0},{label:"有害物質",colorCode:15},{label:"管理強化",colorCode:1}],productCodes:["7439-92-1","1309-60-0"],riskAssessmentDate:"2023/08/10",canExport:!1},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"CADMIUM COMPOUND",manufacturer:"川崎薬品株式会社",dataStatus:"再データ化中",dataStatusLevel:"queue",pdfUploadDate:"2020/05/12",assignedUser:"渡辺 優子",sdsRevisionDate:"2020/04/01",supplierConfirmDate:"2020/04/10",revisionStatus:"保留",revisionStatusLevel:"queue",departments:["研究開発部"],tags:[{label:"化合物",colorCode:9},{label:"管理物質",colorCode:13},{label:"2020年追加分",colorCode:11}],productCodes:["7440-43-9"],riskAssessmentDate:"2020/06/01",canExport:!1},{sdsName:"SDS-Mercury_Compound_2024.pdf",productName:"MERCURY COMPOUND",manufacturer:"横浜化成株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2024/01/20",assignedUser:"山本 和子",sdsRevisionDate:"2023/12/05",supplierConfirmDate:"2023/12/15",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部"],tags:[{label:"有害物質",colorCode:15},{label:"重金属",colorCode:0},{label:"拠点：横浜工場",colorCode:7}],productCodes:["7439-97-6","7487-94-7"],riskAssessmentDate:"2024/02/10",canExport:!0},{sdsName:"SDS-Chromium_Oxide_2023.pdf",productName:"CHROMIUM OXIDE",manufacturer:"神戸工業株式会社",dataStatus:"分析中",dataStatusLevel:"inProgress",pdfUploadDate:"2023/09/14",assignedUser:"小林 誠",sdsRevisionDate:"2023/08/01",supplierConfirmDate:"2023/08/10",revisionStatus:"対応中",revisionStatusLevel:"inProgress",departments:["製造部","開発チーム"],tags:[{label:"酸化物",colorCode:3},{label:"顔料",colorCode:2}],productCodes:["1308-38-9"],riskAssessmentDate:"2023/10/05",canExport:!1},{sdsName:"SDS-Nickel_Sulfate_2022.pdf",productName:"NICKEL SULFATE",manufacturer:"広島ケミカル株式会社",dataStatus:"分析不可",dataStatusLevel:"alert",pdfUploadDate:"2022/06/18",assignedUser:"加藤 真理子",sdsRevisionDate:"2022/05/10",supplierConfirmDate:"2022/05/20",revisionStatus:"エラー",revisionStatusLevel:"alert",departments:["環境安全部"],tags:[{label:"硫酸塩",colorCode:8},{label:"管理物質",colorCode:13}],productCodes:["7786-81-4"],riskAssessmentDate:"2022/07/15",canExport:!1},{sdsName:"SDS-Arsenic_Trioxide_2021.pdf",productName:"ARSENIC TRIOXIDE",manufacturer:"仙台製薬株式会社",dataStatus:"再データ化中",dataStatusLevel:"queue",pdfUploadDate:"2021/03/25",assignedUser:"佐々木 隆",sdsRevisionDate:"2021/02/10",supplierConfirmDate:"2021/02/20",revisionStatus:"保留",revisionStatusLevel:"queue",departments:["研究開発部"],tags:[{label:"毒物",colorCode:15},{label:"管理物質",colorCode:13},{label:"特別管理",colorCode:1}],productCodes:["1327-53-3"],riskAssessmentDate:"2021/04/20",canExport:!0},{sdsName:"SDS-Beryllium_Metal_2024.pdf",productName:"BERYLLIUM METAL",manufacturer:"名古屋金属工業株式会社",dataStatus:"データ化前",dataStatusLevel:"neutral",pdfUploadDate:"2024/03/12",assignedUser:"木村 直樹",sdsRevisionDate:"2024/02/05",supplierConfirmDate:"2024/02/15",revisionStatus:"未対応",revisionStatusLevel:"neutral",departments:["製造部"],tags:[{label:"重金属",colorCode:0},{label:"軽量金属",colorCode:5},{label:"2024年追加分",colorCode:11}],productCodes:["7440-41-7"],riskAssessmentDate:"2024/04/10",canExport:!1},{sdsName:"SDS-Silver_Nitrate_2023.pdf",productName:"SILVER NITRATE",manufacturer:"大阪化学工業株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2023/11/08",assignedUser:"中島 美智子",sdsRevisionDate:"2023/10/01",supplierConfirmDate:"2023/10/10",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部"],tags:[{label:"硝酸塩",colorCode:8},{label:"試薬",colorCode:9}],productCodes:["7761-88-8"],riskAssessmentDate:"2023/12/05",canExport:!0}],oe={title:"Components/Table",component:C},I=()=>{const[a,l]=p.useState({pdfUploadDate:void 0,sdsRevisionDate:void 0,supplierConfirmDate:void 0,riskAssessmentDate:void 0}),r=s=>{l(n=>({...n,[s]:n[s]==="asc"?"desc":n[s]==="desc"?void 0:"asc"}))},c=p.useMemo(()=>{const s=[...U];return a.pdfUploadDate?s.sort((n,i)=>{const o=n.pdfUploadDate.localeCompare(i.pdfUploadDate);return a.pdfUploadDate==="asc"?o:-o}):a.sdsRevisionDate?s.sort((n,i)=>{const o=n.sdsRevisionDate.localeCompare(i.sdsRevisionDate);return a.sdsRevisionDate==="asc"?o:-o}):a.supplierConfirmDate?s.sort((n,i)=>{const o=n.supplierConfirmDate.localeCompare(i.supplierConfirmDate);return a.supplierConfirmDate==="asc"?o:-o}):a.riskAssessmentDate&&s.sort((n,i)=>{const o=n.riskAssessmentDate.localeCompare(i.riskAssessmentDate);return a.riskAssessmentDate==="asc"?o:-o}),s},[a]);return e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(C,{className:"w-max",children:[e.jsx(T,{children:e.jsxs(x,{children:[e.jsx(t,{children:e.jsx(D,{label:""})}),e.jsx(t,{children:"SDSファイル名"}),e.jsx(t,{children:"製品名"}),e.jsx(t,{children:"製造者"}),e.jsx(t,{children:"データ化ステータス"}),e.jsxs(t,{children:["PDFアップロード日"," ",e.jsx(m,{sortOrder:a.pdfUploadDate,onClick:()=>r("pdfUploadDate")})]}),e.jsx(t,{children:"担当ユーザー"}),e.jsxs(t,{children:["SDS改訂日"," ",e.jsx(m,{sortOrder:a.sdsRevisionDate,onClick:()=>r("sdsRevisionDate")})]}),e.jsxs(t,{children:["サプライヤーへの確認日"," ",e.jsx(m,{sortOrder:a.supplierConfirmDate,onClick:()=>r("supplierConfirmDate")})]}),e.jsx(t,{children:"改訂ステータス"}),e.jsx(t,{children:"担当部署"}),e.jsx(t,{children:"タグ"}),e.jsx(t,{children:"製品コード"}),e.jsxs(t,{children:["リスクアセスメント実施日"," ",e.jsx(m,{sortOrder:a.riskAssessmentDate,onClick:()=>r("riskAssessmentDate")})]}),e.jsx(t,{children:"CREATE SIMPLEを出力"})]})}),e.jsx(h,{children:c.map((s,n)=>e.jsxs(x,{children:[e.jsx(d,{children:e.jsx(D,{label:""})}),e.jsx(d,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsx("div",{className:"gap-1 flex items-center",children:s.sdsName}),e.jsx("a",{href:"#",children:e.jsx(w,{size:20,className:"text-shape-primary"})})]})}),e.jsx(d,{children:e.jsx(b,{className:"uppercase",children:s.productName})}),e.jsx(d,{children:s.manufacturer}),e.jsx(d,{children:e.jsx(S,{level:s.dataStatusLevel,children:s.dataStatus})}),e.jsx(d,{children:s.pdfUploadDate}),e.jsx(d,{children:e.jsx(b,{children:s.assignedUser})}),e.jsx(d,{children:s.sdsRevisionDate}),e.jsx(d,{children:s.supplierConfirmDate}),e.jsx(d,{children:e.jsx(S,{level:s.revisionStatusLevel,children:s.revisionStatus})}),e.jsx(d,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.departments.map((i,o)=>e.jsx(b,{children:i},o))})}),e.jsx(d,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.tags.map((i,o)=>e.jsx(b,{colorCode:i.colorCode,children:i.label},o))})}),e.jsx(d,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.productCodes.map((i,o)=>e.jsx(b,{children:i},o))})}),e.jsx(d,{children:s.riskAssessmentDate}),e.jsx(d,{children:e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("button",{title:"Export v3.1.1",className:`text-body-primary flex cursor-pointer
                      items-center`,children:e.jsx(E,{size:16,className:"shrink-0"})}),e.jsx("span",{className:"text-md text-body-primary font-normal",children:"v3.1.1"})]})})]},n))})]})})},f=I.bind({});f.args={data:U};const M=()=>e.jsxs(C,{loading:!0,children:[e.jsx(T,{loading:!0,children:e.jsxs(x,{children:[e.jsx(t,{children:e.jsx(D,{label:""})}),e.jsxs(t,{children:["SDS名 ",e.jsx(m,{sortOrder:"asc"})]}),e.jsxs(t,{children:["製品名",e.jsx(m,{sortOrder:"asc"})]}),e.jsxs(t,{children:["会社名",e.jsx(m,{sortOrder:"asc"})]}),e.jsx(t,{children:"作成日 / 改訂日"}),e.jsx(t,{children:"ステータス"})]})}),e.jsx(h,{loading:!0,colSpan:6})]}),v=M.bind({});var g,j,N;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [sortOrders, setSortOrders] = React.useState<{
    [key: string]: 'asc' | 'desc' | undefined;
  }>({
    pdfUploadDate: undefined,
    sdsRevisionDate: undefined,
    supplierConfirmDate: undefined,
    riskAssessmentDate: undefined
  });
  const toggleSort = (column: string) => {
    setSortOrders(prev => ({
      ...prev,
      [column]: prev[column] === 'asc' ? 'desc' : prev[column] === 'desc' ? undefined : 'asc'
    }));
  };
  const sortedData = React.useMemo(() => {
    const sorted = [...data];
    if (sortOrders.pdfUploadDate) {
      sorted.sort((a, b) => {
        const compare = a.pdfUploadDate.localeCompare(b.pdfUploadDate);
        return sortOrders.pdfUploadDate === 'asc' ? compare : -compare;
      });
    } else if (sortOrders.sdsRevisionDate) {
      sorted.sort((a, b) => {
        const compare = a.sdsRevisionDate.localeCompare(b.sdsRevisionDate);
        return sortOrders.sdsRevisionDate === 'asc' ? compare : -compare;
      });
    } else if (sortOrders.supplierConfirmDate) {
      sorted.sort((a, b) => {
        const compare = a.supplierConfirmDate.localeCompare(b.supplierConfirmDate);
        return sortOrders.supplierConfirmDate === 'asc' ? compare : -compare;
      });
    } else if (sortOrders.riskAssessmentDate) {
      sorted.sort((a, b) => {
        const compare = a.riskAssessmentDate.localeCompare(b.riskAssessmentDate);
        return sortOrders.riskAssessmentDate === 'asc' ? compare : -compare;
      });
    }
    return sorted;
  }, [sortOrders]);
  return <div className="overflow-x-auto">
      <Table className="w-max">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox label="" />
            </TableHead>
            <TableHead>SDSファイル名</TableHead>
            <TableHead>製品名</TableHead>
            <TableHead>製造者</TableHead>
            <TableHead>データ化ステータス</TableHead>
            <TableHead>
              PDFアップロード日{' '}
              <TableHeadSortButton sortOrder={sortOrders.pdfUploadDate} onClick={() => toggleSort('pdfUploadDate')} />
            </TableHead>
            <TableHead>担当ユーザー</TableHead>
            <TableHead>
              SDS改訂日{' '}
              <TableHeadSortButton sortOrder={sortOrders.sdsRevisionDate} onClick={() => toggleSort('sdsRevisionDate')} />
            </TableHead>
            <TableHead>
              サプライヤーへの確認日{' '}
              <TableHeadSortButton sortOrder={sortOrders.supplierConfirmDate} onClick={() => toggleSort('supplierConfirmDate')} />
            </TableHead>
            <TableHead>改訂ステータス</TableHead>
            <TableHead>担当部署</TableHead>
            <TableHead>タグ</TableHead>
            <TableHead>製品コード</TableHead>
            <TableHead>
              リスクアセスメント実施日{' '}
              <TableHeadSortButton sortOrder={sortOrders.riskAssessmentDate} onClick={() => toggleSort('riskAssessmentDate')} />
            </TableHead>
            <TableHead>CREATE SIMPLEを出力</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => <TableRow key={index}>
              <TableCell>
                <Checkbox label="" />
              </TableCell>
              <TableCell>
                <div className="gap-2 inline-flex items-center">
                  <div className="gap-1 flex items-center">{row.sdsName}</div>
                  <a href="#">
                    <IconExternalLink size={20} className="text-shape-primary" />
                  </a>
                </div>
              </TableCell>
              <TableCell>
                <Tag className="uppercase">{row.productName}</Tag>
              </TableCell>
              <TableCell>{row.manufacturer}</TableCell>
              <TableCell>
                <StatusIndicator level={row.dataStatusLevel}>
                  {row.dataStatus}
                </StatusIndicator>
              </TableCell>
              <TableCell>{row.pdfUploadDate}</TableCell>
              <TableCell>
                <Tag>{row.assignedUser}</Tag>
              </TableCell>
              <TableCell>{row.sdsRevisionDate}</TableCell>
              <TableCell>{row.supplierConfirmDate}</TableCell>
              <TableCell>
                <StatusIndicator level={row.revisionStatusLevel}>
                  {row.revisionStatus}
                </StatusIndicator>
              </TableCell>
              <TableCell>
                <div className="gap-xs flex flex-wrap">
                  {row.departments.map((dept, i) => <Tag key={i}>{dept}</Tag>)}
                </div>
              </TableCell>
              <TableCell>
                <div className="gap-xs flex flex-wrap">
                  {row.tags.map((tag, i) => <Tag key={i} colorCode={tag.colorCode}>
                      {tag.label}
                    </Tag>)}
                </div>
              </TableCell>
              <TableCell>
                <div className="gap-xs flex flex-wrap">
                  {row.productCodes.map((code, i) => <Tag key={i}>{code}</Tag>)}
                </div>
              </TableCell>
              <TableCell>{row.riskAssessmentDate}</TableCell>
              <TableCell>
                <div className="gap-1 flex items-center">
                  <button title="Export v3.1.1" className="text-body-primary flex cursor-pointer
                      items-center">
                    <IconFileCheck size={16} className="shrink-0" />
                  </button>
                  <span className="text-md text-body-primary font-normal">
                    v3.1.1
                  </span>
                </div>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>;
}`,...(N=(j=f.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,R,k;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Table loading>
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
  </Table>`,...(k=(R=v.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const de=["Default","Loading"];export{f as Default,v as Loading,de as __namedExportsOrder,oe as default};
