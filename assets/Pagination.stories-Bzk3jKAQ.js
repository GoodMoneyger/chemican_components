import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{e as ie,r as x}from"./iframe-CIKh5Z7i.js";import{c as Y}from"./index-ceFAULq9.js";import{c as v}from"./utils-Dp7DHkto.js";import{S as y}from"./Select-1bYfMf7E.js";import{B as N}from"./Button-Cd4R8uNg.js";import{c as le}from"./createReactComponent-Dhxg9Dj9.js";import{I as ue}from"./IconChevronRight-CHmcnW7p.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDown-daQQknNC.js";import"./index-Bu3sWwHc.js";import"./index-hEQw2dXf.js";import"./index-BgvPXgFA.js";import"./index-BhQMsWzq.js";import"./index-B4onH5X0.js";import"./index-Buphg2eJ.js";import"./index-C-5WymgV.js";import"./index-ClsGcVQK.js";import"./index-FdGWHE2-.js";import"./index-B8HOlsNZ.js";import"./index-DburmG0I.js";import"./index-DYFHoB_Z.js";import"./index-4aX4wZLV.js";import"./index-C9yiG_gu.js";import"./index-CSCBvXR9.js";import"./Spinner-o7UCDVlM.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]],me=le("outline","chevron-left","ChevronLeft",pe),we=Y("gap-md flex items-center justify-start",{variants:{size:{default:"gap-md"}},defaultVariants:{size:"default"}}),I=Y("text-md text-body-primary text-right leading-[14px] whitespace-nowrap"),w=ie.forwardRef(({currentPage:e,totalPages:n,totalItems:d,onPageChange:r,rowsPerPage:R,rowsPerPageOptions:h=[10,25,50,100],onRowsPerPageChange:C,rowsPerPageLabel:Z="表示行数",pageSelectLabel:ee="ページ選択",formatPageOption:ae=(b,f,S)=>`${b} / ${f}（全${S}件）`,showNavigation:te=!0,size:re,className:se,...ne},oe)=>{const b=()=>{e>1&&r(e-1)},f=()=>{e<n&&r(e+1)},S=t=>{const o=parseInt(t,10);C(o),e>1&&r(1)},ge=t=>{const o=parseInt(t,10);r(o)},Pe=h.map(t=>({value:t.toString(),label:t.toString()})),ce=Array.from({length:n},(t,o)=>o+1).map(t=>({value:t.toString(),label:ae(t,n,d)}));return a.jsxs("div",{ref:oe,className:v(we({size:re}),se),...ne,children:[a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:v(I()),children:Z}),a.jsx(y,{value:R.toString(),onValueChange:S,options:Pe})]}),a.jsxs("div",{className:"gap-xs flex items-center",children:[a.jsx("span",{className:v(I()),children:ee}),a.jsx(y,{value:e.toString(),onValueChange:ge,options:ce})]}),te&&a.jsxs("div",{className:"gap-md flex items-center",children:[a.jsx(N,{intent:"text",size:"sm",icon:me,onClick:b,disabled:e<=1,"aria-label":"Previous page"}),a.jsx(N,{intent:"text",size:"sm",icon:ue,onClick:f,disabled:e>=n,"aria-label":"Next page"})]})]})});w.displayName="Pagination";w.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},rowsPerPage:{required:!0,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[10, 25, 50, 100]",computed:!1}},onRowsPerPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(rowsPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"rowsPerPage"}],return:{name:"void"}}},description:""},rowsPerPageLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'表示行数'",computed:!1}},pageSelectLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ページ選択'",computed:!1}},formatPageOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  page: number,
  totalPages: number,
  totalItems: number
) => React.ReactNode`,signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:"(page, totalPages, totalItems) =>\n`${page} / ${totalPages}（全${totalItems}件）`",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit","VariantProps"]};const ke={title:"Components/Pagination",component:w,argTypes:{currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},totalItems:{control:{type:"number",min:0}},rowsPerPage:{control:{type:"select"},options:[10,25,50,100]},rowsPerPageOptions:{control:{type:"object"}},rowsPerPageLabel:{control:{type:"text"}},pageSelectLabel:{control:{type:"text"}},showNavigation:{control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-803&m=dev"}}},s=e=>{const[n,d]=x.useState(e.currentPage),[r,R]=x.useState(e.rowsPerPage),h=Math.ceil(e.totalItems/r);return a.jsx(w,{...e,currentPage:Math.min(n,h),totalPages:h,rowsPerPage:r,onPageChange:d,onRowsPerPageChange:C=>{R(C),d(1)}})},de=e=>a.jsx(w,{...e}),g=s.bind({});g.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const P=s.bind({});P.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const c=s.bind({});c.args={currentPage:5,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const i=s.bind({});i.args={currentPage:10,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const l=s.bind({});l.args={currentPage:1,totalItems:15,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const u=de.bind({});u.args={currentPage:1,totalPages:1,totalItems:5,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const p=s.bind({});p.args={currentPage:3,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"表示行数",pageSelectLabel:"ページ選択",showNavigation:!1,onPageChange:()=>{},onRowsPerPageChange:()=>{}};const m=s.bind({});m.args={currentPage:1,totalItems:484,rowsPerPage:50,rowsPerPageOptions:[10,25,50,100],rowsPerPageLabel:"Rows per page",pageSelectLabel:"Page selection",showNavigation:!0,onPageChange:()=>{},onRowsPerPageChange:()=>{}};var L,M,E;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(E=(M=g.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var O,j,T;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(T=(j=P.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var V,q,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(_=(q=c.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var D,$,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var B,z,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(F=(z=l.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var k,W,G;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Pagination {...args} />",...(G=(W=u.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,H;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(H=(K=p.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);
  return <Pagination {...args} currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
  totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setCurrentPage} onRowsPerPageChange={newRowsPerPage => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  }} />;
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const We=["Default","FirstPage","MiddlePage","LastPage","SmallDataset","SinglePage","WithoutNavigation","EnglishLabels"];export{g as Default,m as EnglishLabels,P as FirstPage,i as LastPage,c as MiddlePage,u as SinglePage,l as SmallDataset,p as WithoutNavigation,We as __namedExportsOrder,ke as default};
