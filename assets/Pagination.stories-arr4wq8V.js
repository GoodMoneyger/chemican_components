import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{e as le,r as y}from"./iframe-BuT7b9y4.js";import{c as Z}from"./index-CWZWjLbw.js";import{c as v}from"./utils-DDC_s_PE.js";import{S as N}from"./Select-BuZEXPmG.js";import{B as I}from"./Button-CVOl8usc.js";import{c as ue}from"./createReactComponent-BXCtvNcJ.js";import{I as pe}from"./IconChevronRight-C0sHgi8j.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-C7YM_65p.js";import"./index-C8INfd__.js";import"./index-4mf9-AF-.js";import"./index-DS3RKRlO.js";import"./index-Bn4__QM_.js";import"./index-5TeGP970.js";import"./index-BDEMLQKy.js";import"./index-fF82Iaia.js";import"./index-DX9dJ1tP.js";import"./index-DgMRG86d.js";import"./index-BpjEKhYe.js";import"./index-BochTf5O.js";import"./index-CqcMClLe.js";import"./index-CvjCTRbj.js";import"./index-BGI42IKe.js";import"./index-D9wAL6gI.js";import"./ProgressIndicator-82pD9-21.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]],we=ue("outline","chevron-left","ChevronLeft",me),de=Z("gap-md flex items-center justify-start",{variants:{size:{default:"gap-md"}},defaultVariants:{size:"default"}}),L=Z("text-md text-body-primary text-right leading-[14px] whitespace-nowrap"),d=le.forwardRef(({currentPage:e,totalPages:n,totalItems:o,onPageChange:r,rowsPerPage:R,rowsPerPageOptions:h=[10,25,50,100],onRowsPerPageChange:C,rowsPerPageLabel:ee="表示行数",pageSelectLabel:ae="ページ選択",formatPageOption:te=(b,f,S)=>`${b} / ${f}（全${S}件）`,showNavigation:re=!0,size:se,className:ne,...oe},ge)=>{const b=()=>{e>1&&r(e-1)},f=()=>{e<n&&r(e+1)},S=t=>{const g=parseInt(t,10);C(g),e>1&&r(1)},Pe=t=>{const g=parseInt(t,10);r(g)},ce=h.map(t=>({value:t.toString(),label:t.toString()})),x=Math.max(n,1),ie=Array.from({length:x},(t,g)=>g+1).map(t=>({value:t.toString(),label:te(t,x,o)}));return a.jsxs("div",{ref:ge,className:v(de({size:se}),ne),...oe,children:[a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:v(L()),children:ee}),a.jsx(N,{value:R.toString(),onValueChange:S,options:ce})]}),a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:v(L()),children:ae}),a.jsx(N,{value:e.toString(),onValueChange:Pe,options:ie,disabled:o===0})]}),re&&a.jsxs("div",{className:"gap-md flex items-center",children:[a.jsx(I,{intent:"text",size:"sm",icon:we,onClick:b,disabled:e<=1,"aria-label":"Previous page"}),a.jsx(I,{intent:"text",size:"sm",icon:pe,onClick:f,disabled:e>=n,"aria-label":"Next page"})]})]})});d.displayName="Pagination";d.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},rowsPerPage:{required:!0,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[10, 25, 50, 100]",computed:!1}},onRowsPerPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(rowsPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"rowsPerPage"}],return:{name:"void"}}},description:""},rowsPerPageLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'表示行数'",computed:!1}},pageSelectLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ページ選択'",computed:!1}},formatPageOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  page: number,
  totalPages: number,
  totalItems: number
) => React.ReactNode`,signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:"(page, totalPages, totalItems) =>\n`${page} / ${totalPages}（全${totalItems}件）`",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit","VariantProps"]};const We={title:"Components/Pagination",component:d,argTypes:{currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},totalItems:{control:{type:"number",min:0}},rowsPerPage:{control:{type:"select"},options:[10,25,50,100]},rowsPerPageOptions:{control:{type:"object"}},rowsPerPageLabel:{control:{type:"text"}},pageSelectLabel:{control:{type:"text"}},showNavigation:{control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-803&m=dev"}}},s=e=>{const[n,o]=y.useState(e.currentPage),[r,R]=y.useState(e.rowsPerPage),h=Math.ceil(e.totalItems/r);return a.jsx(d,{...e,currentPage:Math.min(n,h),totalPages:h,rowsPerPage:r,onPageChange:o,onRowsPerPageChange:C=>{R(C),o(1)}})},he=e=>a.jsx(d,{...e}),P=s.bind({});P.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const c=s.bind({});c.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const i=s.bind({});i.args={currentPage:5,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const l=s.bind({});l.args={currentPage:10,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const u=s.bind({});u.args={currentPage:1,totalItems:15,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const p=he.bind({});p.args={currentPage:1,totalPages:1,totalItems:5,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const m=s.bind({});m.args={currentPage:3,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!1,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const w=s.bind({});w.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"Rows per page",pageSelectLabel:"Page selection",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};var M,E,O;P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(O=(E=P.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var j,T,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,_,D;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var $,A,B;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var z,F,k;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(k=(F=u.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var W,G,J;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Pagination {...args} />",...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,H,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(Q=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ge=["Default","FirstPage","MiddlePage","LastPage","SmallDataset","SinglePage","WithoutNavigation","EnglishLabels"];export{P as Default,w as EnglishLabels,c as FirstPage,l as LastPage,i as MiddlePage,p as SinglePage,u as SmallDataset,m as WithoutNavigation,Ge as __namedExportsOrder,We as default};
