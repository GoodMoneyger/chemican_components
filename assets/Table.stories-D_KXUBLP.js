import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as c}from"./iframe-cVOC_dpu.js";import{S}from"./StatusIndicator-o49kNypk.js";import{a as D}from"./Checkbox-ClsLXras.js";import{T as b}from"./Tag-n_vSNgYN.js";import{c as u}from"./utils-DnMSjN3t.js";import{P as I}from"./ProgressIndicator-DnQ_gtvq.js";import{I as M}from"./IconExternalLink-CxBc4f3B.js";import{I as B}from"./IconFileCheck-BQOk0KBN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPWfN8i-.js";import"./IconMinus-Bgbvit5e.js";import"./createReactComponent-BEPd1dXw.js";import"./IconCheck-iVuoek-U.js";import"./index-B6t1nmnG.js";import"./index-Ven5X8Z4.js";import"./index-BmZf3W6X.js";import"./index-C3rzM5dU.js";import"./index-B8rBrn3p.js";import"./index-Ckzs0j3I.js";import"./index-aE-WsPi_.js";import"./index-9BcR9DVw.js";import"./tokens-ClON5slf.js";const g={loading:!1,loadingText:"ローディング中…"},L=c.createContext(g),U=()=>c.useContext(L),C=c.forwardRef(({className:a,children:o,loading:r=g.loading,loadingText:p=g.loadingText,...s},d)=>{const l={loading:r,loadingText:p};return e.jsx(L.Provider,{value:l,children:e.jsx("div",{className:"border-surface-default bg-surface-primary relative border",children:e.jsx("table",{ref:d,className:u("w-full caption-bottom",a),...s,children:o})})})});C.displayName="Table";const v=c.forwardRef(({className:a,loading:o,children:r,...p},s)=>{const{loading:d}=U(),l=o??d;return e.jsxs("thead",{ref:s,className:u("text-sm bg-surface-tertiary top-0 sticky",a),...p,children:[r,l&&e.jsx("tr",{children:e.jsx("td",{colSpan:100,className:"p-0 h-0",children:e.jsx(I.Linear,{indeterminate:!0,className:`bg-surface-primary border-b-divider-default
                  box-content border-b`})})})]})});v.displayName="TableHeader";const h=c.forwardRef(({className:a,loading:o,loadingText:r,children:p,...s},d)=>{const{loading:l,loadingText:i}=U(),A=o??l,E=r??i;return e.jsx("tbody",{ref:d,className:a,...s,children:A?e.jsx("tr",{children:e.jsx("td",{className:`py-sm h-12 sticky
                left-[calc((100vw+var(--cc-side-navigation-width,0px))/2)]
                min-w-fit px-[1.44rem] text-center align-middle`,children:e.jsx("div",{className:`top-0 absolute flex h-full w-max -translate-x-1/2
                  transform items-center`,children:E})})}):p})});h.displayName="TableBody";const w=c.forwardRef(({className:a,...o},r)=>e.jsx("tfoot",{ref:r,className:u("bg-surface-secondary font-medium border-t",a),...o}));w.displayName="TableFooter";const f=c.forwardRef(({className:a,...o},r)=>e.jsx("tr",{ref:r,className:u(`border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover transition-colors
      [:not(:last-child)]:border-b`,a),...o}));f.displayName="TableRow";const t=c.forwardRef(({className:a,children:o,...r},p)=>e.jsx("th",{ref:p,className:u(`text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      max-w-[400px] text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,a),...r,children:e.jsx("div",{className:"gap-xxs flex items-center",children:o})}));t.displayName="TableHead";const n=c.forwardRef(({className:a,...o},r)=>e.jsx("td",{ref:r,className:u(`py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,a),...o}));n.displayName="TableCell";const _=c.forwardRef(({className:a,...o},r)=>e.jsx("caption",{ref:r,className:u("text-body-primary mt-md text-sm",a),...o}));_.displayName="TableCaption";const m=c.forwardRef(({sortOrder:a,className:o,...r},p)=>e.jsxs("button",{ref:p,className:u(`text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,o),...r,children:[e.jsx("span",{className:"sr-only",children:"Sort"}),e.jsxs("svg",{className:"size-4",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_24993_1396)",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z",fill:a==="asc"?"var(--color-shape-interactive-primary-default)":a===void 0?"var(--color-shape-light)":"var(--color-shape-interactive-disabled)"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z",fill:a==="desc"?"var(--color-shape-interactive-primary-default)":a===void 0?"var(--color-shape-light)":"var(--color-shape-interactive-disabled)"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_24993_1396",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})]}));C.__docgenInfo={description:"",methods:[],displayName:"Table",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ローディング中…'",computed:!1}}}};v.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{loading:{required:!1,tsType:{name:"boolean"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};t.__docgenInfo={description:"",methods:[],displayName:"TableHead"};f.__docgenInfo={description:"",methods:[],displayName:"TableRow"};n.__docgenInfo={description:"",methods:[],displayName:"TableCell"};_.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeadSortButton",props:{sortOrder:{required:!0,tsType:{name:"union",raw:"'asc' | 'desc' | undefined",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const O=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"URANIUM METAL",manufacturer:"検見間株式会社",dataStatus:"データ化前",dataStatusLevel:"neutral",pdfUploadDate:"2024/04/16",assignedUser:"小田 史彦",sdsRevisionDate:"2024/04/16",supplierConfirmDate:"2024/04/16",revisionStatus:"旧版",revisionStatusLevel:"warning",departments:["開発チーム","研究開発部"],tags:[{label:"2024年追加分",colorCode:11},{label:"拠点：〇〇工場",colorCode:7},{label:"編集者追加分タグ",colorCode:3}],productCodes:["7732-18-5","64-17-5","12-34-56"],riskAssessmentDate:"2024/04/16",canExport:!0},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"PLUTONIUM OXIDE",manufacturer:"福田商事株式会社",dataStatus:"分析中",dataStatusLevel:"inProgress",pdfUploadDate:"2023/03/21",assignedUser:"佐藤 花子",sdsRevisionDate:"2023/02/10",supplierConfirmDate:"2023/02/20",revisionStatus:"対応中",revisionStatusLevel:"inProgress",departments:["製造部"],tags:[{label:"放射性物質",colorCode:15},{label:"危険物",colorCode:1}],productCodes:["7440-07-5"],riskAssessmentDate:"2023/04/15",canExport:!0},{sdsName:"SDS-Thorium_2022.pdf",productName:"THORIUM",manufacturer:"中村化学工業株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2022/08/15",assignedUser:"鈴木 一郎",sdsRevisionDate:"2022/07/01",supplierConfirmDate:"2022/07/10",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部","環境安全部"],tags:[{label:"重金属",colorCode:0},{label:"管理物質",colorCode:13}],productCodes:["7440-29-1","1314-20-1"],riskAssessmentDate:"2022/09/01",canExport:!0},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"COBALT ALLOY",manufacturer:"大和工業株式会社",dataStatus:"分析不可",dataStatusLevel:"alert",pdfUploadDate:"2021/11/05",assignedUser:"高橋 美咲",sdsRevisionDate:"2021/10/01",supplierConfirmDate:"2021/10/15",revisionStatus:"エラー",revisionStatusLevel:"alert",departments:["製造部"],tags:[{label:"合金",colorCode:5},{label:"拠点：東京工場",colorCode:7}],productCodes:["7440-48-4"],riskAssessmentDate:"2021/12/01",canExport:!1},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"LEAD METAL",manufacturer:"山田金属株式会社",dataStatus:"分析不可",dataStatusLevel:"warning",pdfUploadDate:"2023/07/29",assignedUser:"伊藤 健太",sdsRevisionDate:"2023/06/15",supplierConfirmDate:"2023/06/25",revisionStatus:"要確認",revisionStatusLevel:"warning",departments:["環境安全部"],tags:[{label:"重金属",colorCode:0},{label:"有害物質",colorCode:15},{label:"管理強化",colorCode:1}],productCodes:["7439-92-1","1309-60-0"],riskAssessmentDate:"2023/08/10",canExport:!1},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"CADMIUM COMPOUND",manufacturer:"川崎薬品株式会社",dataStatus:"再データ化中",dataStatusLevel:"queue",pdfUploadDate:"2020/05/12",assignedUser:"渡辺 優子",sdsRevisionDate:"2020/04/01",supplierConfirmDate:"2020/04/10",revisionStatus:"保留",revisionStatusLevel:"queue",departments:["研究開発部"],tags:[{label:"化合物",colorCode:9},{label:"管理物質",colorCode:13},{label:"2020年追加分",colorCode:11}],productCodes:["7440-43-9"],riskAssessmentDate:"2020/06/01",canExport:!1},{sdsName:"SDS-Mercury_Compound_2024.pdf",productName:"MERCURY COMPOUND",manufacturer:"横浜化成株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2024/01/20",assignedUser:"山本 和子",sdsRevisionDate:"2023/12/05",supplierConfirmDate:"2023/12/15",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部"],tags:[{label:"有害物質",colorCode:15},{label:"重金属",colorCode:0},{label:"拠点：横浜工場",colorCode:7}],productCodes:["7439-97-6","7487-94-7"],riskAssessmentDate:"2024/02/10",canExport:!0},{sdsName:"SDS-Chromium_Oxide_2023.pdf",productName:"CHROMIUM OXIDE",manufacturer:"神戸工業株式会社",dataStatus:"分析中",dataStatusLevel:"inProgress",pdfUploadDate:"2023/09/14",assignedUser:"小林 誠",sdsRevisionDate:"2023/08/01",supplierConfirmDate:"2023/08/10",revisionStatus:"対応中",revisionStatusLevel:"inProgress",departments:["製造部","開発チーム"],tags:[{label:"酸化物",colorCode:3},{label:"顔料",colorCode:2}],productCodes:["1308-38-9"],riskAssessmentDate:"2023/10/05",canExport:!1},{sdsName:"SDS-Nickel_Sulfate_2022.pdf",productName:"NICKEL SULFATE",manufacturer:"広島ケミカル株式会社",dataStatus:"分析不可",dataStatusLevel:"alert",pdfUploadDate:"2022/06/18",assignedUser:"加藤 真理子",sdsRevisionDate:"2022/05/10",supplierConfirmDate:"2022/05/20",revisionStatus:"エラー",revisionStatusLevel:"alert",departments:["環境安全部"],tags:[{label:"硫酸塩",colorCode:8},{label:"管理物質",colorCode:13}],productCodes:["7786-81-4"],riskAssessmentDate:"2022/07/15",canExport:!1},{sdsName:"SDS-Arsenic_Trioxide_2021.pdf",productName:"ARSENIC TRIOXIDE",manufacturer:"仙台製薬株式会社",dataStatus:"再データ化中",dataStatusLevel:"queue",pdfUploadDate:"2021/03/25",assignedUser:"佐々木 隆",sdsRevisionDate:"2021/02/10",supplierConfirmDate:"2021/02/20",revisionStatus:"保留",revisionStatusLevel:"queue",departments:["研究開発部"],tags:[{label:"毒物",colorCode:15},{label:"管理物質",colorCode:13},{label:"特別管理",colorCode:1}],productCodes:["1327-53-3"],riskAssessmentDate:"2021/04/20",canExport:!0},{sdsName:"SDS-Beryllium_Metal_2024.pdf",productName:"BERYLLIUM METAL",manufacturer:"名古屋金属工業株式会社",dataStatus:"データ化前",dataStatusLevel:"neutral",pdfUploadDate:"2024/03/12",assignedUser:"木村 直樹",sdsRevisionDate:"2024/02/05",supplierConfirmDate:"2024/02/15",revisionStatus:"未対応",revisionStatusLevel:"neutral",departments:["製造部"],tags:[{label:"重金属",colorCode:0},{label:"軽量金属",colorCode:5},{label:"2024年追加分",colorCode:11}],productCodes:["7440-41-7"],riskAssessmentDate:"2024/04/10",canExport:!1},{sdsName:"SDS-Silver_Nitrate_2023.pdf",productName:"SILVER NITRATE",manufacturer:"大阪化学工業株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2023/11/08",assignedUser:"中島 美智子",sdsRevisionDate:"2023/10/01",supplierConfirmDate:"2023/10/10",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部"],tags:[{label:"硝酸塩",colorCode:8},{label:"試薬",colorCode:9}],productCodes:["7761-88-8"],riskAssessmentDate:"2023/12/05",canExport:!0}],pe={title:"Components/Table",component:C},P=()=>{const[a,o]=c.useState({pdfUploadDate:void 0,sdsRevisionDate:void 0,supplierConfirmDate:void 0,riskAssessmentDate:void 0}),r=s=>{o(d=>({...d,[s]:d[s]==="asc"?"desc":d[s]==="desc"?void 0:"asc"}))},p=c.useMemo(()=>{const s=[...O];return a.pdfUploadDate?s.sort((d,l)=>{const i=d.pdfUploadDate.localeCompare(l.pdfUploadDate);return a.pdfUploadDate==="asc"?i:-i}):a.sdsRevisionDate?s.sort((d,l)=>{const i=d.sdsRevisionDate.localeCompare(l.sdsRevisionDate);return a.sdsRevisionDate==="asc"?i:-i}):a.supplierConfirmDate?s.sort((d,l)=>{const i=d.supplierConfirmDate.localeCompare(l.supplierConfirmDate);return a.supplierConfirmDate==="asc"?i:-i}):a.riskAssessmentDate&&s.sort((d,l)=>{const i=d.riskAssessmentDate.localeCompare(l.riskAssessmentDate);return a.riskAssessmentDate==="asc"?i:-i}),s},[a]);return e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(C,{className:"w-max",children:[e.jsx(v,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(D,{label:""})}),e.jsx(t,{children:"SDSファイル名"}),e.jsx(t,{children:"製品名"}),e.jsx(t,{children:"製造者"}),e.jsx(t,{children:"データ化ステータス"}),e.jsxs(t,{children:["PDFアップロード日"," ",e.jsx(m,{sortOrder:a.pdfUploadDate,onClick:()=>r("pdfUploadDate")})]}),e.jsx(t,{children:"担当ユーザー"}),e.jsxs(t,{children:["SDS改訂日"," ",e.jsx(m,{sortOrder:a.sdsRevisionDate,onClick:()=>r("sdsRevisionDate")})]}),e.jsxs(t,{children:["サプライヤーへの確認日"," ",e.jsx(m,{sortOrder:a.supplierConfirmDate,onClick:()=>r("supplierConfirmDate")})]}),e.jsx(t,{children:"改訂ステータス"}),e.jsx(t,{children:"担当部署"}),e.jsx(t,{children:"タグ"}),e.jsx(t,{children:"製品コード"}),e.jsxs(t,{children:["リスクアセスメント実施日"," ",e.jsx(m,{sortOrder:a.riskAssessmentDate,onClick:()=>r("riskAssessmentDate")})]}),e.jsx(t,{children:"CREATE SIMPLEを出力"})]})}),e.jsx(h,{children:p.map((s,d)=>e.jsxs(f,{children:[e.jsx(n,{children:e.jsx(D,{label:""})}),e.jsx(n,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsx("div",{className:"gap-1 flex items-center",children:s.sdsName}),e.jsx("a",{href:"#",children:e.jsx(M,{size:20,className:"text-shape-primary"})})]})}),e.jsx(n,{children:e.jsx(b,{className:"uppercase",children:s.productName})}),e.jsx(n,{children:s.manufacturer}),e.jsx(n,{children:e.jsx(S,{level:s.dataStatusLevel,children:s.dataStatus})}),e.jsx(n,{children:s.pdfUploadDate}),e.jsx(n,{children:e.jsx(b,{children:s.assignedUser})}),e.jsx(n,{children:s.sdsRevisionDate}),e.jsx(n,{children:s.supplierConfirmDate}),e.jsx(n,{children:e.jsx(S,{level:s.revisionStatusLevel,children:s.revisionStatus})}),e.jsx(n,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.departments.map((l,i)=>e.jsx(b,{children:l},i))})}),e.jsx(n,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.tags.map((l,i)=>e.jsx(b,{colorCode:l.colorCode,children:l.label},i))})}),e.jsx(n,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.productCodes.map((l,i)=>e.jsx(b,{children:l},i))})}),e.jsx(n,{children:s.riskAssessmentDate}),e.jsx(n,{children:e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("button",{title:"Export v3.1.1",className:`text-body-primary flex cursor-pointer
                      items-center`,children:e.jsx(B,{size:16,className:"shrink-0"})}),e.jsx("span",{className:"text-md text-body-primary font-normal",children:"v3.1.1"})]})})]},d))})]})})},x=P.bind({});x.args={data:O};const q=()=>e.jsxs(C,{loading:!0,children:[e.jsx(v,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(D,{label:""})}),e.jsxs(t,{children:["SDS名 ",e.jsx(m,{sortOrder:"asc"})]}),e.jsxs(t,{children:["製品名",e.jsx(m,{sortOrder:"asc"})]}),e.jsxs(t,{children:["会社名",e.jsx(m,{sortOrder:"asc"})]}),e.jsx(t,{children:"作成日 / 改訂日"}),e.jsx(t,{children:"ステータス"})]})}),e.jsx(h,{colSpan:6})]}),T=q.bind({});var j,N,R;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(R=(N=x.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var y,H,k;T.parameters={...T.parameters,docs:{...(y=T.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Table loading>
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
    <TableBody colSpan={6} />
  </Table>`,...(k=(H=T.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const me=["Default","Loading"];export{x as Default,T as Loading,me as __namedExportsOrder,pe as default};
