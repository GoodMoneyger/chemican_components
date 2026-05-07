import{e as m,j as e,c as T}from"./iframe-GJ4PKqrJ.js";import{S as g}from"./StatusIndicator-CSwRG0MA.js";import{a as h}from"./Checkbox-CE5_cmXf.js";import{T as x}from"./Tag-CB7LkzNv.js";import{B as C}from"./Button-OhJ7Um8j.js";import{P as $}from"./ProgressIndicator-ChyrvbyQ.js";import{I as O}from"./IconExternalLink-BgNSLNSn.js";import{I as W}from"./IconFileCheck-BoLYVrAT.js";import"./preload-helper-Dp1pzeXC.js";import"./IconMinus-2EaOo0-5.js";import"./createReactComponent-ChShNWeo.js";import"./IconCheck-BLzjLls3.js";import"./index-C8VlMKuj.js";import"./tokens-ClON5slf.js";const w={loading:!1,loadingText:"ローディング中…"},X=m.createContext(w),Y=()=>m.useContext(X),v=m.forwardRef(({className:r,children:i,loading:a=w.loading,loadingText:c=w.loadingText,...o},n)=>{const s={loading:a,loadingText:c};return e.jsx(X.Provider,{value:s,children:e.jsx("table",{ref:n,className:T(`border-surface-default bg-surface-primary relative caption-bottom
            border`,r),...o,children:i})})});v.displayName="Table";const D=m.forwardRef(({className:r,loading:i,children:a,...c},o)=>{const{loading:n}=Y(),s=i??n;return e.jsxs("thead",{ref:o,className:T("text-sm bg-surface-tertiary top-0 sticky",r),...c,children:[a,s&&e.jsx("tr",{children:e.jsx("td",{colSpan:100,className:"p-0 h-0",children:e.jsx($.Linear,{indeterminate:!0,className:`bg-surface-primary border-b-divider-default
                  box-content border-b`})})})]})});D.displayName="TableHeader";const R=m.forwardRef(({className:r,children:i,...a},c)=>e.jsx("tr",{ref:c,...a,children:e.jsx("td",{className:`py-sm min-h-12 sticky
        left-[calc((100%+var(--cc-side-navigation-width,0px))/2)] block w-fit
        text-center align-middle`,children:e.jsx("div",{className:T("flex w-max -translate-x-1/2 transform items-center",r),children:i})})}));R.displayName="TableCoverMessage";const j=m.forwardRef(({className:r,loading:i,loadingText:a,children:c,...o},n)=>{const{loading:s,loadingText:d}=Y(),u=i??s,p=a??d;return e.jsx("tbody",{ref:n,className:r,...o,children:u?e.jsx(R,{className:"text-body-secondary",children:p}):c})});j.displayName="TableBody";const K=m.forwardRef(({className:r,...i},a)=>e.jsx("tfoot",{ref:a,className:T("bg-surface-secondary font-medium border-t",r),...i}));K.displayName="TableFooter";const f=m.forwardRef(({className:r,...i},a)=>e.jsx("tr",{ref:a,className:T(`border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,r),...i}));f.displayName="TableRow";const t=m.forwardRef(({className:r,children:i,...a},c)=>e.jsx("th",{ref:c,className:T(`text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,r),...a,children:e.jsx("div",{className:"gap-xxs flex items-center",children:i})}));t.displayName="TableHead";const l=m.forwardRef(({className:r,...i},a)=>e.jsx("td",{ref:a,className:T(`py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,r),...i}));l.displayName="TableCell";const Z=m.forwardRef(({className:r,...i},a)=>e.jsx("caption",{ref:a,className:T("text-body-primary mt-md text-sm",r),...i}));Z.displayName="TableCaption";const b=m.forwardRef(({sortOrder:r,className:i,...a},c)=>e.jsxs("button",{ref:c,className:T(`text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,i),...a,children:[e.jsx("span",{className:"sr-only",children:"Sort"}),e.jsxs("svg",{className:"size-4",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_24993_1396)",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z",fill:r==="asc"?"var(--color-shape-interactive-primary-default)":r===void 0?"var(--color-shape-light)":"var(--color-shape-interactive-disabled)"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z",fill:r==="desc"?"var(--color-shape-interactive-primary-default)":r===void 0?"var(--color-shape-light)":"var(--color-shape-interactive-disabled)"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_24993_1396",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})]}));v.__docgenInfo={description:"",methods:[],displayName:"Table",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ローディング中…'",computed:!1}}}};D.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{loading:{required:!1,tsType:{name:"boolean"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};K.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};t.__docgenInfo={description:"",methods:[],displayName:"TableHead"};f.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};Z.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};b.__docgenInfo={description:"",methods:[],displayName:"TableHeadSortButton",props:{sortOrder:{required:!0,tsType:{name:"union",raw:"'asc' | 'desc' | undefined",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"TableCoverMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U=m.forwardRef(({forceVisible:r=!1,className:i,children:a},c)=>e.jsx("td",{ref:c,className:T("right-0 w-0 p-0 sticky border-none","bg-transparent"),children:e.jsx("div",{className:T("right-0 top-0 bottom-0 absolute flex items-center","pr-md pl-16 w-max","z-slight",r?"opacity-100":"opacity-0 transition-opacity group-hover:opacity-100",i),style:{background:"linear-gradient(to right, transparent 0rem, var(--token-color-background-interactive-neutral-hover) 3rem, var(--token-color-background-interactive-neutral-hover) 100%)"},children:e.jsx("div",{className:"gap-xs flex items-center",children:a})})}));U.displayName="TableRowOverlay";U.__docgenInfo={description:`A table row overlay that:
- Sticks to the right edge during horizontal scroll
- Appears on row hover or when forceVisible is true
- Spans over multiple columns (not constrained to cell width)

Must be used as the last child in a TableRow.
Requires TableRow to have \`position: relative\`.`,methods:[],displayName:"TableRowOverlay",props:{forceVisible:{required:!1,tsType:{name:"boolean"},description:"Keep overlay visible (e.g., when dropdown is open)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names for the overlay container"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const k=[{sdsName:"SDS-Uranium_Metal_2020.pdf",productName:"URANIUM METAL",manufacturer:"検見間株式会社",dataStatus:"データ化前",dataStatusLevel:"neutral",pdfUploadDate:"2024/04/16",assignedUser:"小田 史彦",sdsRevisionDate:"2024/04/16",supplierConfirmDate:"2024/04/16",revisionStatus:"旧版",revisionStatusLevel:"warning",departments:["開発チーム","研究開発部"],tags:[{label:"2024年追加分",colorCode:11},{label:"拠点：〇〇工場",colorCode:7},{label:"編集者追加分タグ",colorCode:3}],productCodes:["7732-18-5","64-17-5","12-34-56"],riskAssessmentDate:"2024/04/16",canExport:!0},{sdsName:"SDS-Plutonium_Oxide_2021.pdf",productName:"PLUTONIUM OXIDE",manufacturer:"福田商事株式会社",dataStatus:"分析中",dataStatusLevel:"inProgress",pdfUploadDate:"2023/03/21",assignedUser:"佐藤 花子",sdsRevisionDate:"2023/02/10",supplierConfirmDate:"2023/02/20",revisionStatus:"対応中",revisionStatusLevel:"inProgress",departments:["製造部"],tags:[{label:"放射性物質",colorCode:15},{label:"危険物",colorCode:1}],productCodes:["7440-07-5"],riskAssessmentDate:"2023/04/15",canExport:!0},{sdsName:"SDS-Thorium_2022.pdf",productName:"THORIUM",manufacturer:"中村化学工業株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2022/08/15",assignedUser:"鈴木 一郎",sdsRevisionDate:"2022/07/01",supplierConfirmDate:"2022/07/10",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部","環境安全部"],tags:[{label:"重金属",colorCode:0},{label:"管理物質",colorCode:13}],productCodes:["7440-29-1","1314-20-1"],riskAssessmentDate:"2022/09/01",canExport:!0},{sdsName:"SDS-Cobalt_Alloy_2019.pdf",productName:"COBALT ALLOY",manufacturer:"大和工業株式会社",dataStatus:"分析不可",dataStatusLevel:"alert",pdfUploadDate:"2021/11/05",assignedUser:"高橋 美咲",sdsRevisionDate:"2021/10/01",supplierConfirmDate:"2021/10/15",revisionStatus:"エラー",revisionStatusLevel:"alert",departments:["製造部"],tags:[{label:"合金",colorCode:5},{label:"拠点：東京工場",colorCode:7}],productCodes:["7440-48-4"],riskAssessmentDate:"2021/12/01",canExport:!1},{sdsName:"SDS-Lead_Metal_2023.pdf",productName:"LEAD METAL",manufacturer:"山田金属株式会社",dataStatus:"分析不可",dataStatusLevel:"warning",pdfUploadDate:"2023/07/29",assignedUser:"伊藤 健太",sdsRevisionDate:"2023/06/15",supplierConfirmDate:"2023/06/25",revisionStatus:"要確認",revisionStatusLevel:"warning",departments:["環境安全部"],tags:[{label:"重金属",colorCode:0},{label:"有害物質",colorCode:15},{label:"管理強化",colorCode:1}],productCodes:["7439-92-1","1309-60-0"],riskAssessmentDate:"2023/08/10",canExport:!1},{sdsName:"SDS-Cadmium_Compound_2020.pdf",productName:"CADMIUM COMPOUND",manufacturer:"川崎薬品株式会社",dataStatus:"再データ化中",dataStatusLevel:"queue",pdfUploadDate:"2020/05/12",assignedUser:"渡辺 優子",sdsRevisionDate:"2020/04/01",supplierConfirmDate:"2020/04/10",revisionStatus:"保留",revisionStatusLevel:"queue",departments:["研究開発部"],tags:[{label:"化合物",colorCode:9},{label:"管理物質",colorCode:13},{label:"2020年追加分",colorCode:11}],productCodes:["7440-43-9"],riskAssessmentDate:"2020/06/01",canExport:!1},{sdsName:"SDS-Mercury_Compound_2024.pdf",productName:"MERCURY COMPOUND",manufacturer:"横浜化成株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2024/01/20",assignedUser:"山本 和子",sdsRevisionDate:"2023/12/05",supplierConfirmDate:"2023/12/15",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部"],tags:[{label:"有害物質",colorCode:15},{label:"重金属",colorCode:0},{label:"拠点：横浜工場",colorCode:7}],productCodes:["7439-97-6","7487-94-7"],riskAssessmentDate:"2024/02/10",canExport:!0},{sdsName:"SDS-Chromium_Oxide_2023.pdf",productName:"CHROMIUM OXIDE",manufacturer:"神戸工業株式会社",dataStatus:"分析中",dataStatusLevel:"inProgress",pdfUploadDate:"2023/09/14",assignedUser:"小林 誠",sdsRevisionDate:"2023/08/01",supplierConfirmDate:"2023/08/10",revisionStatus:"対応中",revisionStatusLevel:"inProgress",departments:["製造部","開発チーム"],tags:[{label:"酸化物",colorCode:3},{label:"顔料",colorCode:2}],productCodes:["1308-38-9"],riskAssessmentDate:"2023/10/05",canExport:!1},{sdsName:"SDS-Nickel_Sulfate_2022.pdf",productName:"NICKEL SULFATE",manufacturer:"広島ケミカル株式会社",dataStatus:"分析不可",dataStatusLevel:"alert",pdfUploadDate:"2022/06/18",assignedUser:"加藤 真理子",sdsRevisionDate:"2022/05/10",supplierConfirmDate:"2022/05/20",revisionStatus:"エラー",revisionStatusLevel:"alert",departments:["環境安全部"],tags:[{label:"硫酸塩",colorCode:8},{label:"管理物質",colorCode:13}],productCodes:["7786-81-4"],riskAssessmentDate:"2022/07/15",canExport:!1},{sdsName:"SDS-Arsenic_Trioxide_2021.pdf",productName:"ARSENIC TRIOXIDE",manufacturer:"仙台製薬株式会社",dataStatus:"再データ化中",dataStatusLevel:"queue",pdfUploadDate:"2021/03/25",assignedUser:"佐々木 隆",sdsRevisionDate:"2021/02/10",supplierConfirmDate:"2021/02/20",revisionStatus:"保留",revisionStatusLevel:"queue",departments:["研究開発部"],tags:[{label:"毒物",colorCode:15},{label:"管理物質",colorCode:13},{label:"特別管理",colorCode:1}],productCodes:["1327-53-3"],riskAssessmentDate:"2021/04/20",canExport:!0},{sdsName:"SDS-Beryllium_Metal_2024.pdf",productName:"BERYLLIUM METAL",manufacturer:"名古屋金属工業株式会社",dataStatus:"データ化前",dataStatusLevel:"neutral",pdfUploadDate:"2024/03/12",assignedUser:"木村 直樹",sdsRevisionDate:"2024/02/05",supplierConfirmDate:"2024/02/15",revisionStatus:"未対応",revisionStatusLevel:"neutral",departments:["製造部"],tags:[{label:"重金属",colorCode:0},{label:"軽量金属",colorCode:5},{label:"2024年追加分",colorCode:11}],productCodes:["7440-41-7"],riskAssessmentDate:"2024/04/10",canExport:!1},{sdsName:"SDS-Silver_Nitrate_2023.pdf",productName:"SILVER NITRATE",manufacturer:"大阪化学工業株式会社",dataStatus:"登録済み",dataStatusLevel:"success",pdfUploadDate:"2023/11/08",assignedUser:"中島 美智子",sdsRevisionDate:"2023/10/01",supplierConfirmDate:"2023/10/10",revisionStatus:"完了",revisionStatusLevel:"success",departments:["品質管理部"],tags:[{label:"硝酸塩",colorCode:8},{label:"試薬",colorCode:9}],productCodes:["7761-88-8"],riskAssessmentDate:"2023/12/05",canExport:!0}],be={title:"Components/Table",component:v},G=()=>{const[r,i]=m.useState({pdfUploadDate:void 0,sdsRevisionDate:void 0,supplierConfirmDate:void 0,riskAssessmentDate:void 0}),a=o=>{i(n=>({...n,[o]:n[o]==="asc"?"desc":n[o]==="desc"?void 0:"asc"}))},c=m.useMemo(()=>{const o=[...k];return r.pdfUploadDate?o.sort((n,s)=>{const d=n.pdfUploadDate.localeCompare(s.pdfUploadDate);return r.pdfUploadDate==="asc"?d:-d}):r.sdsRevisionDate?o.sort((n,s)=>{const d=n.sdsRevisionDate.localeCompare(s.sdsRevisionDate);return r.sdsRevisionDate==="asc"?d:-d}):r.supplierConfirmDate?o.sort((n,s)=>{const d=n.supplierConfirmDate.localeCompare(s.supplierConfirmDate);return r.supplierConfirmDate==="asc"?d:-d}):r.riskAssessmentDate&&o.sort((n,s)=>{const d=n.riskAssessmentDate.localeCompare(s.riskAssessmentDate);return r.riskAssessmentDate==="asc"?d:-d}),o},[r]);return e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(v,{className:"w-max",children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(h,{label:""})}),e.jsx(t,{children:"SDSファイル名"}),e.jsx(t,{children:"製品名"}),e.jsx(t,{children:"製造者"}),e.jsx(t,{children:"データ化ステータス"}),e.jsxs(t,{children:["PDFアップロード日"," ",e.jsx(b,{sortOrder:r.pdfUploadDate,onClick:()=>a("pdfUploadDate")})]}),e.jsx(t,{children:"担当ユーザー"}),e.jsxs(t,{children:["SDS改訂日"," ",e.jsx(b,{sortOrder:r.sdsRevisionDate,onClick:()=>a("sdsRevisionDate")})]}),e.jsxs(t,{children:["サプライヤーへの確認日"," ",e.jsx(b,{sortOrder:r.supplierConfirmDate,onClick:()=>a("supplierConfirmDate")})]}),e.jsx(t,{children:"改訂ステータス"}),e.jsx(t,{children:"担当部署"}),e.jsx(t,{children:"タグ"}),e.jsx(t,{children:"製品コード"}),e.jsxs(t,{children:["リスクアセスメント実施日"," ",e.jsx(b,{sortOrder:r.riskAssessmentDate,onClick:()=>a("riskAssessmentDate")})]}),e.jsx(t,{children:"CREATE SIMPLEを出力"})]})}),e.jsx(j,{children:c.map((o,n)=>e.jsxs(f,{children:[e.jsx(l,{children:e.jsx(h,{label:""})}),e.jsx(l,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsx("div",{className:"gap-1 flex items-center",children:o.sdsName}),e.jsx("a",{href:"#",children:e.jsx(O,{size:20,className:"text-shape-primary"})})]})}),e.jsx(l,{children:e.jsx(x,{className:"uppercase",children:o.productName})}),e.jsx(l,{children:o.manufacturer}),e.jsx(l,{children:e.jsx(g,{level:o.dataStatusLevel,children:o.dataStatus})}),e.jsx(l,{children:o.pdfUploadDate}),e.jsx(l,{children:e.jsx(x,{children:o.assignedUser})}),e.jsx(l,{children:o.sdsRevisionDate}),e.jsx(l,{children:o.supplierConfirmDate}),e.jsx(l,{children:e.jsx(g,{level:o.revisionStatusLevel,children:o.revisionStatus})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:o.departments.map((s,d)=>e.jsx(x,{children:s},d))})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:o.tags.map((s,d)=>e.jsx(x,{colorCode:s.colorCode,children:s.label},d))})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:o.productCodes.map((s,d)=>e.jsx(x,{children:s},d))})}),e.jsx(l,{children:o.riskAssessmentDate}),e.jsx(l,{children:e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("button",{title:"Export v3.1.1",className:`text-body-primary flex cursor-pointer
                      items-center`,children:e.jsx(W,{size:16,className:"shrink-0"})}),e.jsx("span",{className:"text-md text-body-primary font-normal",children:"v3.1.1"})]})})]},n))})]})})},S=G.bind({});S.args={data:k};const J=()=>e.jsxs(v,{loading:!0,children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(h,{label:""})}),e.jsxs(t,{children:["SDS名 ",e.jsx(b,{sortOrder:"asc"})]}),e.jsxs(t,{children:["製品名",e.jsx(b,{sortOrder:"asc"})]}),e.jsxs(t,{children:["会社名",e.jsx(b,{sortOrder:"asc"})]}),e.jsx(t,{children:"作成日 / 改訂日"}),e.jsx(t,{children:"ステータス"})]})}),e.jsx(j,{colSpan:6})]}),H=J.bind({}),Q=()=>{const[r,i]=m.useState("data");return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{className:"gap-xs flex",children:[e.jsx(C,{size:"sm",intent:r==="data"?"primary":"secondary",onClick:()=>i("data"),children:"Show Data"}),e.jsx(C,{size:"sm",intent:r==="error"?"primary":"secondary",onClick:()=>i("error"),children:"Show Error"}),e.jsx(C,{size:"sm",intent:r==="empty"?"primary":"secondary",onClick:()=>i("empty"),children:"Show Empty"})]}),e.jsx("div",{className:"max-w-4xl overflow-x-auto",children:e.jsxs(v,{className:"w-max",children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(h,{label:""})}),e.jsx(t,{children:"SDSファイル名"}),e.jsx(t,{children:"製品名"}),e.jsx(t,{children:"製造者"}),e.jsx(t,{children:"データ化ステータス"}),e.jsxs(t,{children:["PDFアップロード日 ",e.jsx(b,{sortOrder:"asc"})]}),e.jsx(t,{children:"担当ユーザー"}),e.jsxs(t,{children:["SDS改訂日 ",e.jsx(b,{sortOrder:"asc"})]}),e.jsx(t,{children:"改訂ステータス"}),e.jsx(t,{children:"担当部署"}),e.jsx(t,{children:"タグ"})]})}),e.jsx(j,{children:r==="error"?e.jsx(R,{children:e.jsxs("div",{className:`gap-sm text-body-secondary flex flex-col
                    items-center`,children:[e.jsx("span",{children:"データの読み込み中にエラーが発生しました"}),e.jsx(C,{size:"sm",intent:"tertiary",onClick:()=>i("data"),children:"リロード"})]})}):r==="empty"?e.jsx(R,{className:"text-body-secondary",children:"データがありません"}):k.slice(0,3).map((a,c)=>e.jsxs(f,{children:[e.jsx(l,{children:e.jsx(h,{label:""})}),e.jsx(l,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsx("div",{className:"gap-1 flex items-center",children:a.sdsName}),e.jsx("a",{href:"#",children:e.jsx(O,{size:20,className:"text-shape-primary"})})]})}),e.jsx(l,{children:e.jsx(x,{className:"uppercase",children:a.productName})}),e.jsx(l,{children:a.manufacturer}),e.jsx(l,{children:e.jsx(g,{level:a.dataStatusLevel,children:a.dataStatus})}),e.jsx(l,{children:a.pdfUploadDate}),e.jsx(l,{children:e.jsx(x,{children:a.assignedUser})}),e.jsx(l,{children:a.sdsRevisionDate}),e.jsx(l,{children:e.jsx(g,{level:a.revisionStatusLevel,children:a.revisionStatus})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:a.departments.map((o,n)=>e.jsx(x,{children:o},n))})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:a.tags.map((o,n)=>e.jsx(x,{colorCode:o.colorCode,children:o.label},n))})})]},c))})]})})]})},N=Q.bind({});N.parameters={docs:{description:{story:"Demonstrates the TableCoverMessage component for displaying error messages, empty states, or any custom overlay message. Use conditional rendering to show the cover message instead of table rows."}}};const ee=()=>{const[r,i]=m.useState(null),[a,c]=m.useState({pdfUploadDate:void 0,sdsRevisionDate:void 0,supplierConfirmDate:void 0,riskAssessmentDate:void 0}),o=s=>{c(d=>({...d,[s]:d[s]==="asc"?"desc":d[s]==="desc"?void 0:"asc"}))},n=m.useMemo(()=>{const s=[...k];return a.pdfUploadDate?s.sort((d,u)=>{const p=d.pdfUploadDate.localeCompare(u.pdfUploadDate);return a.pdfUploadDate==="asc"?p:-p}):a.sdsRevisionDate?s.sort((d,u)=>{const p=d.sdsRevisionDate.localeCompare(u.sdsRevisionDate);return a.sdsRevisionDate==="asc"?p:-p}):a.supplierConfirmDate?s.sort((d,u)=>{const p=d.supplierConfirmDate.localeCompare(u.supplierConfirmDate);return a.supplierConfirmDate==="asc"?p:-p}):a.riskAssessmentDate&&s.sort((d,u)=>{const p=d.riskAssessmentDate.localeCompare(u.riskAssessmentDate);return a.riskAssessmentDate==="asc"?p:-p}),s},[a]);return e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(v,{className:"w-max",children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(h,{label:""})}),e.jsx(t,{children:"SDSファイル名"}),e.jsx(t,{children:"製品名"}),e.jsx(t,{children:"製造者"}),e.jsx(t,{children:"データ化ステータス"}),e.jsxs(t,{children:["PDFアップロード日"," ",e.jsx(b,{sortOrder:a.pdfUploadDate,onClick:()=>o("pdfUploadDate")})]}),e.jsx(t,{children:"担当ユーザー"}),e.jsxs(t,{children:["SDS改訂日"," ",e.jsx(b,{sortOrder:a.sdsRevisionDate,onClick:()=>o("sdsRevisionDate")})]}),e.jsxs(t,{children:["サプライヤーへの確認日"," ",e.jsx(b,{sortOrder:a.supplierConfirmDate,onClick:()=>o("supplierConfirmDate")})]}),e.jsx(t,{children:"改訂ステータス"}),e.jsx(t,{children:"担当部署"}),e.jsx(t,{children:"タグ"}),e.jsx(t,{children:"製品コード"}),e.jsxs(t,{children:["リスクアセスメント実施日"," ",e.jsx(b,{sortOrder:a.riskAssessmentDate,onClick:()=>o("riskAssessmentDate")})]}),e.jsx(t,{children:"CREATE SIMPLEを出力"}),e.jsx(t,{className:"w-0 p-0"})]})}),e.jsx(j,{children:n.map((s,d)=>e.jsxs(f,{children:[e.jsx(l,{children:e.jsx(h,{label:""})}),e.jsx(l,{children:e.jsxs("div",{className:"gap-2 inline-flex items-center",children:[e.jsx("div",{className:"gap-1 flex items-center",children:s.sdsName}),e.jsx("a",{href:"#",children:e.jsx(O,{size:20,className:"text-shape-primary"})})]})}),e.jsx(l,{children:e.jsx(x,{className:"uppercase",children:s.productName})}),e.jsx(l,{children:s.manufacturer}),e.jsx(l,{children:e.jsx(g,{level:s.dataStatusLevel,children:s.dataStatus})}),e.jsx(l,{children:s.pdfUploadDate}),e.jsx(l,{children:e.jsx(x,{children:s.assignedUser})}),e.jsx(l,{children:s.sdsRevisionDate}),e.jsx(l,{children:s.supplierConfirmDate}),e.jsx(l,{children:e.jsx(g,{level:s.revisionStatusLevel,children:s.revisionStatus})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.departments.map((u,p)=>e.jsx(x,{children:u},p))})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.tags.map((u,p)=>e.jsx(x,{colorCode:u.colorCode,children:u.label},p))})}),e.jsx(l,{children:e.jsx("div",{className:"gap-xs flex flex-wrap",children:s.productCodes.map((u,p)=>e.jsx(x,{children:u},p))})}),e.jsx(l,{children:s.riskAssessmentDate}),e.jsx(l,{children:e.jsxs("div",{className:"gap-1 flex items-center",children:[e.jsx("button",{title:"Export v3.1.1",className:`text-body-primary flex cursor-pointer
                      items-center`,children:e.jsx(W,{size:16,className:"shrink-0"})}),e.jsx("span",{className:"text-md text-body-primary font-normal",children:"v3.1.1"})]})}),e.jsxs(U,{forceVisible:r===s.sdsName,children:[e.jsx(C,{size:"sm",intent:"primary",onClick:()=>alert(`Edit ${s.productName}`),children:"Edit"}),e.jsx(C,{size:"sm",intent:"secondary",onClick:()=>i(r===s.sdsName?null:s.sdsName),children:r===s.sdsName?"Close":"More"})]})]},d))})]})})},y=ee.bind({});y.parameters={docs:{description:{story:"Demonstrates the TableRowOverlay component that appears on row hover. The overlay sticks to the right edge during horizontal scroll and can be forced visible (e.g., when a dropdown is open)."}}};var L,A,I;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(I=(A=S.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,_,B;H.parameters={...H.parameters,docs:{...(E=H.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Table loading>
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
  </Table>`,...(B=(_=H.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var M,z,P;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [state, setState] = React.useState<'data' | 'error' | 'empty'>('data');
  return <div className="gap-md flex flex-col">
      <div className="gap-xs flex">
        <Button size="sm" intent={state === 'data' ? 'primary' : 'secondary'} onClick={() => setState('data')}>
          Show Data
        </Button>
        <Button size="sm" intent={state === 'error' ? 'primary' : 'secondary'} onClick={() => setState('error')}>
          Show Error
        </Button>
        <Button size="sm" intent={state === 'empty' ? 'primary' : 'secondary'} onClick={() => setState('empty')}>
          Show Empty
        </Button>
      </div>

      <div className="max-w-4xl overflow-x-auto">
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
                PDFアップロード日 <TableHeadSortButton sortOrder="asc" />
              </TableHead>
              <TableHead>担当ユーザー</TableHead>
              <TableHead>
                SDS改訂日 <TableHeadSortButton sortOrder="asc" />
              </TableHead>
              <TableHead>改訂ステータス</TableHead>
              <TableHead>担当部署</TableHead>
              <TableHead>タグ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {state === 'error' ? <TableCoverMessage>
                <div className="gap-sm text-body-secondary flex flex-col
                    items-center">
                  <span>データの読み込み中にエラーが発生しました</span>
                  <Button size="sm" intent="tertiary" onClick={() => setState('data')}>
                    リロード
                  </Button>
                </div>
              </TableCoverMessage> : state === 'empty' ? <TableCoverMessage className="text-body-secondary">
                データがありません
              </TableCoverMessage> : data.slice(0, 3).map((row, index) => <TableRow key={index}>
                  <TableCell>
                    <Checkbox label="" />
                  </TableCell>
                  <TableCell>
                    <div className="gap-2 inline-flex items-center">
                      <div className="gap-1 flex items-center">
                        {row.sdsName}
                      </div>
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
                </TableRow>)}
          </TableBody>
        </Table>
      </div>
    </div>;
}`,...(P=(z=N.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var q,V,F;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [openRowId, setOpenRowId] = React.useState<string | null>(null);
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
            {/* Empty header for overlay column alignment */}
            <TableHead className="w-0 p-0" />
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
              <TableRowOverlay forceVisible={openRowId === row.sdsName}>
                <Button size="sm" intent="primary" onClick={() => alert(\`Edit \${row.productName}\`)}>
                  Edit
                </Button>
                <Button size="sm" intent="secondary" onClick={() => setOpenRowId(openRowId === row.sdsName ? null : row.sdsName)}>
                  {openRowId === row.sdsName ? 'Close' : 'More'}
                </Button>
              </TableRowOverlay>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>;
}`,...(F=(V=y.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Te=["Default","Loading","WithCoverMessage","WithRowOverlay"];export{S as Default,H as Loading,N as WithCoverMessage,y as WithRowOverlay,Te as __namedExportsOrder,be as default};
