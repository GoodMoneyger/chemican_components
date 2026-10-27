import{e as Le,j as a,c as p,b as ue,r as M}from"./iframe-DcSk_wzL.js";import{S as L}from"./Select-C76X8-Zr.js";import{B as T}from"./Button-BjWHnloS.js";import{I as Te}from"./IconChevronLeft-CUc2VDun.js";import{I as Ee}from"./IconChevronRight-8iyGR99Q.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-uAPDsygC.js";import"./createReactComponent-D8NpDzyf.js";import"./IconSearch-NpfYajbj.js";import"./index-Be7pAWCB.js";import"./index-Bq6c60he.js";import"./index-DZ2qrVzW.js";import"./index-JsbmbfVG.js";import"./ProgressIndicator-Bqwu_cCE.js";const Oe=ue("gap-md flex items-center justify-start",{variants:{size:{default:"",sm:""}},defaultVariants:{size:"default"}}),E=ue("text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap"),y=Le.forwardRef(({currentPage:e,totalPages:c,totalItems:o,onPageChange:n,rowsPerPage:x,rowsPerPageOptions:v=[50,100,200],onRowsPerPageChange:N,rowsPerPageLabel:ie="表示行数",pageSelectLabel:pe="ページ選択",formatPageOption:me=(g,u)=>`${g} / ${u}`,formatPageValue:we=(g,u)=>`${g} / ${u}`,showNavigation:de=!0,showRowsPerPage:he=!0,hideRowsPerPageOnMobile:Re=!1,previousPageLabel:be="Previous page",nextPageLabel:fe="Next page",size:l,className:Ce,...Se},ye)=>{const g=l==="sm"?"xs":"sm",u=()=>{e>1&&n(e-1)},ve=()=>{e<c&&n(e+1)},xe=t=>{const i=parseInt(t,10);N(i),e>1&&n(1)},Ne=t=>{const i=parseInt(t,10);n(i)},Ie=v.map(t=>({value:t.toString(),label:t.toString()})),I=Math.max(c,1),Me=Array.from({length:I},(t,i)=>i+1).map(t=>({value:t.toString(),label:me(t,I,o)}));return a.jsxs("div",{ref:ye,className:p(Oe({size:l}),Ce),...Se,children:[he&&a.jsxs("div",{className:p("gap-xs flex items-center",{"max-md:hidden":Re}),children:[a.jsx("span",{className:p(E()),children:ie}),a.jsx(L,{size:l,value:x.toString(),onValueChange:xe,options:Ie})]}),a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:p(E()),children:pe}),a.jsx(L,{size:l,value:e.toString(),onValueChange:Ne,options:Me,disabled:o===0,renderValue:we(e,I,o),searchThreshold:1/0})]}),de&&a.jsxs("div",{className:p("gap-md flex items-center",{"gap-xs":l==="sm"}),children:[a.jsx(T,{intent:"text",size:g,icon:Te,onClick:u,disabled:e<=1,"aria-label":be}),a.jsx(T,{intent:"text",size:g,icon:Ee,onClick:ve,disabled:e>=c,"aria-label":fe})]})]})});y.displayName="Pagination";y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},rowsPerPage:{required:!0,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[50, 100, 200]",computed:!1}},onRowsPerPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(rowsPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"rowsPerPage"}],return:{name:"void"}}},description:""},rowsPerPageLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'表示行数'",computed:!1}},pageSelectLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ページ選択'",computed:!1}},formatPageOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  page: number,
  totalPages: number,
  totalItems: number
) => React.ReactNode`,signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:"(page, totalPages) => `${page} / ${totalPages}`",computed:!1}},formatPageValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  page: number,
  totalPages: number,
  totalItems: number
) => React.ReactNode`,signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:"(page, totalPages) => `${page} / ${totalPages}`",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showRowsPerPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hideRowsPerPageOnMobile:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},previousPageLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Previous page'",computed:!1}},nextPageLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next page'",computed:!1}}},composes:["Omit","VariantProps"]};const He={title:"Components/Pagination",component:y,argTypes:{currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},totalItems:{control:{type:"number",min:0}},rowsPerPage:{control:{type:"select"},options:[10,25,50,100]},rowsPerPageOptions:{control:{type:"object"}},rowsPerPageLabel:{control:{type:"text"}},pageSelectLabel:{control:{type:"text"}},showNavigation:{control:{type:"boolean"}},showRowsPerPage:{control:{type:"boolean"}},hideRowsPerPageOnMobile:{control:{type:"boolean"}},size:{control:{type:"radio"},options:["default","sm"]}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-803&m=dev"}}},r=e=>{const[c,o]=M.useState(e.currentPage),[n,x]=M.useState(e.rowsPerPage),v=Math.ceil(e.totalItems/n);return a.jsx(y,{...e,currentPage:Math.min(c,v),totalPages:v,rowsPerPage:n,onPageChange:o,onRowsPerPageChange:N=>{x(N),o(1)}})},Ve=e=>a.jsx(y,{...e}),s=r.bind({});s.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const m=r.bind({});m.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const w=r.bind({});w.args={currentPage:5,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const d=r.bind({});d.args={currentPage:10,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const h=r.bind({});h.args={currentPage:1,totalItems:15,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const R=Ve.bind({});R.args={currentPage:1,totalPages:1,totalItems:5,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const b=r.bind({});b.args={currentPage:3,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!1,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const f=r.bind({});f.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"Rows per page",pageSelectLabel:"Page selection",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const C=r.bind({});C.args={...s.args,size:"sm"};const P=r.bind({});P.args={...s.args,size:"sm",hideRowsPerPageOnMobile:!0};P.globals={viewport:{value:"mobile",isRotated:!1}};const S=r.bind({});S.args={...s.args,showRowsPerPage:!1};var O,V,j;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,$,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(D=($=m.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var _,A,B;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(B=(A=w.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var z,F,W;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var k,G,J;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,H,Q;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:"args => <Pagination {...args} />",...(Q=(H=R.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ge;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(ge=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ge.source}}};var Pe,ce,le;S.parameters={...S.parameters,docs:{...(Pe=S.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(le=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Qe=["Default","FirstPage","MiddlePage","LastPage","SmallDataset","SinglePage","WithoutNavigation","EnglishLabels","Small","Mobile","WithoutRowsPerPage"];export{s as Default,f as EnglishLabels,m as FirstPage,d as LastPage,w as MiddlePage,P as Mobile,R as SinglePage,C as Small,h as SmallDataset,b as WithoutNavigation,S as WithoutRowsPerPage,Qe as __namedExportsOrder,He as default};
