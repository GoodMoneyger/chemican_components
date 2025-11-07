import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as Ee,r}from"./iframe-DljFH8vZ.js";import{c as Oe}from"./index-hFT6j6w1.js";import{c as P}from"./utils-DcTxD_-R.js";import{P as $e}from"./ProgressIndicator-BvFz9Ltq.js";import{B as X}from"./Button-B6J8M9Jn.js";import{I as Xe}from"./IconTrashX-xtYDFHRi.js";import{c as L}from"./createReactComponent-COoqjQOx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DncXEivM.js";import"./index-UXvlc3Ma.js";import"./index-C27SPI2W.js";import"./index-Cu8XJnCO.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]],He=L("outline","alert-circle","AlertCircle",Ge);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]],Qe=L("outline","circle-check","CircleCheck",Je);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986",key:"svg-0"}],["path",{d:"M19 22v-6",key:"svg-1"}],["path",{d:"M22 19l-3 -3l-3 3",key:"svg-2"}]],Ye=L("outline","cloud-up","CloudUp",We);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z",key:"svg-0"}]],G=L("filled","folder-filled","FolderFilled",Ze),H=Oe(`focus-visible:ring-interactive-focused relative cursor-pointer border-1
  border-dashed transition-colors focus-visible:ring-4
  focus-visible:outline-none`,{variants:{size:{small:"pt-md pb-lg min-h-20 rounded-sm",large:"pt-xxl pb-xxxl px-xl rounded-lg"},state:{default:`border-interactive-default bg-surface-primary
        hover:bg-surface-secondary`,dragging:"bg-surface-success border-interactive-focused border-solid",success:"border-shape-status-success bg-surface-success",error:"border-shape-status-alert bg-surface-alert",inProgress:"border-interactive-default bg-surface-primary"},disabled:{true:`border-interactive-disabled bg-surface-disabled
        cursor-not-allowed opacity-50`,false:""}},compoundVariants:[],defaultVariants:{size:"small",state:"default"}}),k=Ee.forwardRef(({className:R,size:t,state:b,onFileSelect:i,accept:N,multiple:o=!1,disabled:s=!1,progress:j,fileName:T,fileSize:Ce,errorMessage:De,successMessage:_e,onFileRemove:M,dragDropText:Pe="ここにドラッグ&ドロップ",orText:U="または",selectFileText:q="ファイルを選択",dropFilesText:Ue="ここにファイルをドロップ",uploadingText:qe="アップロード中…",uploadCompletedText:Ie="アップロードが完了しました",uploadFailedText:we="アップロードに失敗しました",...I},w)=>{const[C,D]=r.useState(!1),_=r.useRef(null),B=r.useCallback(l=>{l.preventDefault(),l.stopPropagation(),C||D(!0)},[C]),A=r.useCallback(l=>{l.preventDefault(),l.stopPropagation(),D(!1)},[]),K=r.useCallback(l=>{l.preventDefault(),l.stopPropagation()},[]),V=r.useCallback(l=>{if(l.preventDefault(),l.stopPropagation(),D(!1),s)return;const a=l.dataTransfer.files;a&&a.length>0&&(i==null||i(a))},[s,i]),z=r.useCallback(()=>{var l;s||(l=_.current)==null||l.click()},[s]),E=r.useCallback(l=>{const a=l.target.files;a&&a.length>0&&(i==null||i(a))},[i]),c=C?"dragging":b,Be=()=>e.jsx(Ye,{className:"text-shape-interactive-primary-default",size:t==="large"?60:32}),O=()=>e.jsxs("div",{className:"gap-xxs leading-6 flex flex-col items-center",children:[e.jsxs("div",{className:"mb-xxs text-center",children:[e.jsx("p",{className:"text-body-secondary",children:Pe}),e.jsx("p",{className:"text-body-secondary text-sm",children:U})]}),e.jsx(X,{size:"xs",intent:"tertiary",icon:G,onClick:l=>{l.stopPropagation(),z()},children:q})]}),$=()=>e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[Be(),e.jsxs("div",{className:"gap-xs flex flex-col text-center",children:[e.jsxs("p",{className:"text-body-secondary font-medium",children:[Ue,e.jsx("span",{className:"text-sm",children:U})]}),e.jsx(X,{size:"xs",intent:"tertiary",className:"self-center",icon:G,onClick:l=>{l.stopPropagation(),z()},children:q})]})]}),Ae=()=>e.jsxs("div",{className:P(H({size:t,state:"default",disabled:s})),onDragEnter:B,onDragLeave:A,onDragOver:K,onDrop:V,onClick:z,role:"button",tabIndex:s?-1:0,"aria-disabled":s,children:[e.jsx("input",{ref:_,type:"file",className:"sr-only",accept:N,multiple:o,onChange:E,disabled:s}),t==="small"?O():$()]}),Ke=()=>{const l=t==="small"?"document_file_name.csv":"document_file_name.pdf";return c==="inProgress"&&j!==void 0?e.jsxs("div",{className:"mt-xxs gap-xs flex flex-col",children:[e.jsxs("div",{className:"gap-xxs flex flex-col",children:[e.jsx("p",{className:"text-body-primary",children:T||l}),e.jsxs("div",{className:"text-body-secondary flex",children:[e.jsxs("span",{children:["（",Ce||"12kb","）"]}),e.jsx("span",{children:qe})]})]}),e.jsx("div",{className:"w-full",children:e.jsx($e.Linear,{indeterminate:!j,value:j,className:"h-1"})})]}):c==="success"?e.jsxs("div",{className:"mt-xxs flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-body-primary",children:T||l}),e.jsx("button",{className:"hover:bg-surface-secondary rounded p-xxs",onClick:a=>{a.stopPropagation(),M==null||M()},children:e.jsx(Xe,{size:24,className:"text-shape-primary"})})]}),e.jsxs("div",{className:"gap-xxs flex items-center",children:[e.jsx(Qe,{size:24,className:"text-shape-status-success"}),e.jsx("p",{className:"text-interactive-primary-default",children:_e||Ie})]})]}):c==="error"?e.jsxs("div",{className:"mt-xxs gap-xxs flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("p",{className:"text-body-alert",children:T||l})}),e.jsxs("div",{className:"gap-xxs flex items-center",children:[e.jsx(He,{size:24,className:"text-shape-status-alert"}),e.jsx("p",{className:"text-body-alert",children:De||we})]})]}):null},Ve=()=>t==="small"?O():$();return c==="inProgress"&&j!==void 0||c==="success"||c==="error"?e.jsxs("div",{ref:w,className:P(R),...I,children:[Ae(),Ke()]}):e.jsxs("div",{ref:w,className:P(H({size:t,state:c,disabled:s}),R),onDragEnter:B,onDragLeave:A,onDragOver:K,onDrop:V,onClick:z,role:"button",tabIndex:s?-1:0,"aria-disabled":s,...I,children:[e.jsx("input",{ref:_,type:"file",className:"sr-only",accept:N,multiple:o,onChange:E,disabled:s}),Ve()]})});k.displayName="FileUploader";k.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{onFileSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:""},fileName:{required:!1,tsType:{name:"string"},description:""},fileSize:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},successMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxFileSize:{required:!1,tsType:{name:"number"},description:""},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dragDropText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ここにドラッグ&ドロップ'",computed:!1}},orText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'または'",computed:!1}},selectFileText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ファイルを選択'",computed:!1}},dropFilesText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ここにファイルをドロップ'",computed:!1}},uploadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'アップロード中…'",computed:!1}},uploadCompletedText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'アップロードが完了しました'",computed:!1}},uploadFailedText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'アップロードに失敗しました'",computed:!1}}},composes:["Omit","VariantProps"]};const pl={title:"Components/FileUploader",component:k,argTypes:{size:{control:{type:"select"},options:["small","large"]},state:{control:{type:"select"},options:["default","dragging","success","error","inProgress"]},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},progress:{control:{type:"range",min:0,max:100,step:1}},accept:{control:{type:"text"}},fileName:{control:{type:"text"}},fileSize:{control:{type:"text"}},errorMessage:{control:{type:"text"}},successMessage:{control:{type:"text"}},maxFileSize:{control:{type:"number"}},maxFiles:{control:{type:"number"}}},parameters:{docs:{description:{component:"Upload component with drag & drop functionality and multiple states."}}}},n=R=>{const[t,b]=r.useState(null),i=o=>{b(o),console.log("Selected files:",o)},N=()=>{b(null),console.log("File removed")};return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(k,{...R,onFileSelect:i,onFileRemove:N}),t&&e.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:[e.jsx("p",{children:"Selected files:"}),e.jsx("ul",{children:Array.from(t).map((o,s)=>e.jsxs("li",{children:[o.name," (",Math.round(o.size/1024),"KB)"]},s))})]})]})},d=n.bind({});d.args={size:"small",state:"default",accept:".jpg,.png,.pdf"};const m=n.bind({});m.args={size:"small",state:"default",multiple:!1,accept:".jpg,.png,.pdf,.docx"};const u=n.bind({});u.args={size:"small",state:"dragging"};const p=n.bind({});p.args={size:"small",state:"inProgress",progress:47,fileName:"document_file_name.csv",fileSize:"12kb"};const f=n.bind({});f.args={size:"small",state:"success",fileName:"document_file_name.csv",successMessage:"アップロードが完了しました"};const g=n.bind({});g.args={size:"small",state:"error",fileName:"document_file_name.csv",errorMessage:"アップロードに失敗しました"};const F=n.bind({});F.args={size:"large",state:"default",multiple:!0,accept:".jpg,.png,.pdf,.docx",maxFileSize:10*1024*1024};const v=n.bind({});v.args={size:"large",state:"dragging",multiple:!0};const x=n.bind({});x.args={size:"large",state:"inProgress",progress:42,fileName:"document_file_name.pdf",fileSize:"12kb"};const h=n.bind({});h.args={size:"large",state:"success",fileName:"document_file_name.pdf",successMessage:"アップロードが完了しました"};const y=n.bind({});y.args={size:"large",state:"error",fileName:"document_file_name.pdf",errorMessage:"アップロードに失敗しました"};const S=n.bind({});S.args={size:"small",state:"default",disabled:!0};var J,Q,W;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(W=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,se,ne;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(ne=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,te,ae;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,ce;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(ce=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,me,ue;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(ue=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,fe,ge;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(ge=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Fe,ve,xe;v.parameters={...v.parameters,docs:{...(Fe=v.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(xe=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var he,ye,Se;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(Se=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Re,be,Ne;h.parameters={...h.parameters,docs:{...(Re=h.parameters)==null?void 0:Re.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(Ne=(be=h.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var je,ze,Le;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(Le=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var ke,Te,Me;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };
  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };
  return <div style={{
    padding: '2rem'
  }}>
      <FileUploader {...args} onFileSelect={handleFileSelect} onFileRemove={handleFileRemove} />
      {files && <div style={{
      marginTop: '1rem',
      fontSize: '0.875rem'
    }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>)}
          </ul>
        </div>}
    </div>;
}`,...(Me=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};const fl=["SmallDefault","SmallSingle","SmallDragging","SmallInProgress","SmallSuccess","SmallError","LargeDefault","LargeDragging","LargeInProgress","LargeSuccess","LargeError","Disabled"];export{S as Disabled,F as LargeDefault,v as LargeDragging,y as LargeError,x as LargeInProgress,h as LargeSuccess,d as SmallDefault,u as SmallDragging,g as SmallError,p as SmallInProgress,m as SmallSingle,f as SmallSuccess,fl as __namedExportsOrder,pl as default};
