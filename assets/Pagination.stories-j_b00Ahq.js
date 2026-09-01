import{e as ue,j as a,c as x,m as Z,r as v}from"./iframe-DROmsy4h.js";import{S as N}from"./Select-BrDFrZ8t.js";import{B as I}from"./Button-CFm2I9R_.js";import{I as pe}from"./IconChevronLeft-CKL7EYJc.js";import{I as me}from"./IconChevronRight-Tm87ResC.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-CAdC98bD.js";import"./createReactComponent-C72mMn1w.js";import"./IconSearch-CxfhBJcM.js";import"./index-DfFpayXv.js";import"./index-p7CqSu9k.js";import"./index-Bw5Tpr3h.js";import"./index-CTQCHBwZ.js";import"./ProgressIndicator-C1TcoUEt.js";const we=Z("gap-md flex items-center justify-start",{variants:{size:{default:"gap-md"}},defaultVariants:{size:"default"}}),L=Z("text-md text-body-primary text-right leading-[14px] whitespace-nowrap"),R=ue.forwardRef(({currentPage:e,totalPages:o,totalItems:n,onPageChange:r,rowsPerPage:C,rowsPerPageOptions:b=[50,100,200],onRowsPerPageChange:f,rowsPerPageLabel:ee="表示行数",pageSelectLabel:ae="ページ選択",formatPageOption:te=(g,P)=>`${g} / ${P}`,formatPageValue:re=(g,P,S)=>`${g} / ${P}（全${S}件）`,showNavigation:se=!0,size:ne,className:oe,...ge},Pe)=>{const g=()=>{e>1&&r(e-1)},P=()=>{e<o&&r(e+1)},S=t=>{const c=parseInt(t,10);f(c),e>1&&r(1)},ce=t=>{const c=parseInt(t,10);r(c)},ie=b.map(t=>({value:t.toString(),label:t.toString()})),y=Math.max(o,1),le=Array.from({length:y},(t,c)=>c+1).map(t=>({value:t.toString(),label:te(t,y,n)}));return a.jsxs("div",{ref:Pe,className:x(we({size:ne}),oe),...ge,children:[a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:x(L()),children:ee}),a.jsx(N,{value:C.toString(),onValueChange:S,options:ie})]}),a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:x(L()),children:ae}),a.jsx(N,{value:e.toString(),onValueChange:ce,options:le,disabled:n===0,renderValue:re(e,y,n),searchThreshold:1/0})]}),se&&a.jsxs("div",{className:"gap-md flex items-center",children:[a.jsx(I,{intent:"text",size:"sm",icon:pe,onClick:g,disabled:e<=1,"aria-label":"Previous page"}),a.jsx(I,{intent:"text",size:"sm",icon:me,onClick:P,disabled:e>=o,"aria-label":"Next page"})]})]})});R.displayName="Pagination";R.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},rowsPerPage:{required:!0,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[50, 100, 200]",computed:!1}},onRowsPerPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(rowsPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"rowsPerPage"}],return:{name:"void"}}},description:""},rowsPerPageLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'表示行数'",computed:!1}},pageSelectLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ページ選択'",computed:!1}},formatPageOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  page: number,
  totalPages: number,
  totalItems: number
) => React.ReactNode`,signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:"(page, totalPages) => `${page} / ${totalPages}`",computed:!1}},formatPageValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  page: number,
  totalPages: number,
  totalItems: number
) => React.ReactNode`,signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:"(page, totalPages, totalItems) =>\n`${page} / ${totalPages}（全${totalItems}件）`",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit","VariantProps"]};const Oe={title:"Components/Pagination",component:R,argTypes:{currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},totalItems:{control:{type:"number",min:0}},rowsPerPage:{control:{type:"select"},options:[10,25,50,100]},rowsPerPageOptions:{control:{type:"object"}},rowsPerPageLabel:{control:{type:"text"}},pageSelectLabel:{control:{type:"text"}},showNavigation:{control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-803&m=dev"}}},s=e=>{const[o,n]=v.useState(e.currentPage),[r,C]=v.useState(e.rowsPerPage),b=Math.ceil(e.totalItems/r);return a.jsx(R,{...e,currentPage:Math.min(o,b),totalPages:b,rowsPerPage:r,onPageChange:n,onRowsPerPageChange:f=>{C(f),n(1)}})},de=e=>a.jsx(R,{...e}),i=s.bind({});i.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const l=s.bind({});l.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const u=s.bind({});u.args={currentPage:5,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const p=s.bind({});p.args={currentPage:10,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const m=s.bind({});m.args={currentPage:1,totalItems:15,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const w=de.bind({});w.args={currentPage:1,totalPages:1,totalItems:5,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const d=s.bind({});d.args={currentPage:3,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!1,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const h=s.bind({});h.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"Rows per page",pageSelectLabel:"Page selection",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};var M,E,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var T,j,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,$,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(D=($=u.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var _,A,B;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var z,F,k;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(k=(F=m.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var W,G,J;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Pagination {...args} />",...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,H,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(Q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Te=["Default","FirstPage","MiddlePage","LastPage","SmallDataset","SinglePage","WithoutNavigation","EnglishLabels"];export{i as Default,h as EnglishLabels,l as FirstPage,p as LastPage,u as MiddlePage,w as SinglePage,m as SmallDataset,d as WithoutNavigation,Te as __namedExportsOrder,Oe as default};
