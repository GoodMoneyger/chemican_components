import{e as Ke,r as a,j as e,c as Ve,n as Ee}from"./iframe-BiTGkfip.js";import{P as Oe}from"./ProgressIndicator-DbkU6sI1.js";import{B as q}from"./Button-1gz90F7m.js";import{I as $e}from"./IconTrashX-N3c1R1Fn.js";import{c as D}from"./createReactComponent-DsTilhpp.js";import{I as Xe}from"./IconAlertCircle-CkCuB-jh.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]],He=D("outline","circle-check","CircleCheck",Ge);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986",key:"svg-0"}],["path",{d:"M19 22v-6",key:"svg-1"}],["path",{d:"M22 19l-3 -3l-3 3",key:"svg-2"}]],Qe=D("outline","cloud-up","CloudUp",Je);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z",key:"svg-0"}]],w=D("filled","folder-filled","FolderFilled",We),Ye=Ee(`focus-visible:ring-interactive-focused relative cursor-pointer border-1
  border-dashed transition-colors focus-visible:ring-4
  focus-visible:outline-none`,{variants:{size:{small:"pt-md pb-lg min-h-20 rounded-sm",large:"pt-6.5 pb-9.75 px-xl rounded-lg"},state:{default:`border-interactive-default bg-surface-primary
        hover:bg-surface-secondary`,dragging:"bg-surface-success border-interactive-focused border-solid",success:"border-shape-status-success bg-surface-success",error:"border-shape-status-alert bg-surface-alert",inProgress:"border-interactive-default bg-surface-primary"},disabled:{true:`border-interactive-disabled bg-surface-disabled
        cursor-not-allowed opacity-50`,false:""}},compoundVariants:[],defaultVariants:{size:"small",state:"default"}}),z=Ke.forwardRef(({className:j,size:r,state:b,onFileSelect:n,accept:L,multiple:o=!1,disabled:i=!1,progress:N,fileName:T,fileSize:ye,errorMessage:Se,successMessage:Re,onFileRemove:k,dragDropText:be="ここにドラッグ&ドロップ",orText:_="または",selectFileText:P="ファイルを選択",dropFilesText:Ne="ここにファイルをドロップ",uploadingText:ze="アップロード中…",uploadCompletedText:je="アップロードが完了しました",uploadFailedText:Le="アップロードに失敗しました",...Te},ke)=>{const[d,M]=a.useState(!1),U=a.useRef(null),Me=a.useCallback(l=>{l.preventDefault(),l.stopPropagation(),d||M(!0)},[d]),Ce=a.useCallback(l=>{l.preventDefault(),l.stopPropagation(),M(!1)},[]),De=a.useCallback(l=>{l.preventDefault(),l.stopPropagation()},[]),_e=a.useCallback(l=>{if(l.preventDefault(),l.stopPropagation(),M(!1),i)return;const t=l.dataTransfer.files;t&&t.length>0&&(n==null||n(t))},[i,n]),C=a.useCallback(()=>{var l;i||(l=U.current)==null||l.click()},[i]),Pe=a.useCallback(l=>{const t=l.target.files;t&&t.length>0&&(n==null||n(t))},[n]),c=d?"dragging":b,Ue=()=>e.jsx(Qe,{className:`text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,size:r==="large"?74:32}),qe=()=>e.jsxs("div",{className:"gap-xxs leading-6 flex flex-col items-center",children:[e.jsxs("div",{className:"mb-xxs text-center",children:[e.jsx("p",{className:"text-body-secondary",children:be}),e.jsx("p",{className:"text-body-secondary text-sm",children:_})]}),e.jsx(q,{size:"xs",intent:"tertiary",className:d?"":"z-10",icon:w,onClick:l=>{l.stopPropagation(),C()},children:P})]}),we=()=>e.jsxs("div",{className:"flex flex-col items-center text-center",children:[Ue(),e.jsxs("p",{className:"text-body-secondary font-normal mb-2",children:[Ne," ",e.jsx("span",{className:"text-sm",children:_})]}),e.jsx(q,{size:"xs",intent:"tertiary",className:d?"":"z-10",icon:w,onClick:l=>{l.stopPropagation(),C()},children:P})]}),Ie=()=>{const l=r==="small"?"document_file_name.csv":"document_file_name.pdf";return c==="inProgress"&&N!==void 0?e.jsxs("div",{className:"mt-xxs gap-xs flex flex-col",children:[e.jsxs("div",{className:"gap-xxs flex flex-col",children:[e.jsx("p",{className:"text-body-primary",children:T||l}),e.jsxs("div",{className:"text-body-secondary flex",children:[e.jsxs("span",{children:["（",ye||"12kb","）"]}),e.jsx("span",{children:ze})]})]}),e.jsx("div",{className:"w-full",children:e.jsx(Oe.Linear,{indeterminate:!N,value:N,className:"h-1"})})]}):c==="success"?e.jsxs("div",{className:"mt-xxs flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-body-primary",children:T||l}),e.jsx("button",{className:"hover:bg-surface-secondary rounded p-xxs",onClick:t=>{t.stopPropagation(),k==null||k()},children:e.jsx($e,{size:24,className:"text-shape-primary"})})]}),e.jsxs("div",{className:"gap-xxs flex items-center",children:[e.jsx(He,{size:24,className:"text-shape-status-success"}),e.jsx("p",{className:"text-interactive-primary-default",children:Re||je})]})]}):c==="error"?e.jsxs("div",{className:"mt-xxs gap-xxs flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("p",{className:"text-body-alert",children:T||l})}),e.jsxs("div",{className:"gap-xxs flex items-center",children:[e.jsx(Xe,{size:24,className:"text-shape-status-alert"}),e.jsx("p",{className:"text-body-alert",children:Se||Le})]})]}):null},Be=()=>r==="small"?qe():we(),Ae=()=>e.jsx("div",{className:"top-0 left-0 absolute h-full w-full",onDragEnter:Me,onDragLeave:Ce,onDragOver:De,onDrop:_e});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:ke,className:Ve("relative",Ye({size:r,state:c,disabled:i}),j),onClick:C,role:"button",tabIndex:i?-1:0,"aria-disabled":i,...Te,children:[e.jsx("input",{ref:U,type:"file",className:"sr-only",accept:L,multiple:o,onChange:Pe,disabled:i}),Ae(),Be()]}),(c==="inProgress"&&N!==void 0||c==="success"||c==="error")&&Ie()]})});z.displayName="FileUploader";z.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{onFileSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:""},fileName:{required:!1,tsType:{name:"string"},description:""},fileSize:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},successMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxFileSize:{required:!1,tsType:{name:"number"},description:""},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dragDropText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ここにドラッグ&ドロップ'",computed:!1}},orText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'または'",computed:!1}},selectFileText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ファイルを選択'",computed:!1}},dropFilesText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'ここにファイルをドロップ'",computed:!1}},uploadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'アップロード中…'",computed:!1}},uploadCompletedText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'アップロードが完了しました'",computed:!1}},uploadFailedText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'アップロードに失敗しました'",computed:!1}}},composes:["Omit","VariantProps"]};const al={title:"Components/FileUploader",component:z,argTypes:{size:{control:{type:"select"},options:["small","large"]},state:{control:{type:"select"},options:["default","dragging","success","error","inProgress"]},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},progress:{control:{type:"range",min:0,max:100,step:1}},accept:{control:{type:"text"}},fileName:{control:{type:"text"}},fileSize:{control:{type:"text"}},errorMessage:{control:{type:"text"}},successMessage:{control:{type:"text"}},maxFileSize:{control:{type:"number"}},maxFiles:{control:{type:"number"}}},parameters:{docs:{description:{component:"Upload component with drag & drop functionality and multiple states."}}}},s=j=>{const[r,b]=a.useState(null),n=o=>{b(o),console.log("Selected files:",o)},L=()=>{b(null),console.log("File removed")};return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(z,{...j,onFileSelect:n,onFileRemove:L}),r&&e.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:[e.jsx("p",{children:"Selected files:"}),e.jsx("ul",{children:Array.from(r).map((o,i)=>e.jsxs("li",{children:[o.name," (",Math.round(o.size/1024),"KB)"]},i))})]})]})},m=s.bind({});m.args={size:"small",state:"default",accept:".jpg,.png,.pdf"};const u=s.bind({});u.args={size:"small",state:"default",multiple:!1,accept:".jpg,.png,.pdf,.docx"};const p=s.bind({});p.args={size:"small",state:"dragging"};const f=s.bind({});f.args={size:"small",state:"inProgress",progress:47,fileName:"document_file_name.csv",fileSize:"12kb"};const g=s.bind({});g.args={size:"small",state:"success",fileName:"document_file_name.csv",successMessage:"アップロードが完了しました"};const F=s.bind({});F.args={size:"small",state:"error",fileName:"document_file_name.csv",errorMessage:"アップロードに失敗しました"};const v=s.bind({});v.args={size:"large",state:"default",multiple:!0,accept:".jpg,.png,.pdf,.docx",maxFileSize:10*1024*1024};const x=s.bind({});x.args={size:"large",state:"dragging",multiple:!0};const h=s.bind({});h.args={size:"large",state:"inProgress",progress:42,fileName:"document_file_name.pdf",fileSize:"12kb"};const y=s.bind({});y.args={size:"large",state:"success",fileName:"document_file_name.pdf",successMessage:"アップロードが完了しました"};const S=s.bind({});S.args={size:"large",state:"error",fileName:"document_file_name.pdf",errorMessage:"アップロードに失敗しました"};const R=s.bind({});R.args={size:"small",state:"default",disabled:!0};var I,B,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var K,V,E;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var O,$,X;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
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
}`,...(X=($=p.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var G,H,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
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
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,W,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(Y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,le;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(le=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var se,ne,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
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
}`,...(ie=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var te,ae,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
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
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ce,de;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
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
}`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
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
}`,...(pe=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,ge,Fe;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
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
}`,...(Fe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Fe.source}}};var ve,xe,he;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
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
}`,...(he=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const rl=["SmallDefault","SmallSingle","SmallDragging","SmallInProgress","SmallSuccess","SmallError","LargeDefault","LargeDragging","LargeInProgress","LargeSuccess","LargeError","Disabled"];export{R as Disabled,v as LargeDefault,x as LargeDragging,S as LargeError,h as LargeInProgress,y as LargeSuccess,m as SmallDefault,p as SmallDragging,F as SmallError,f as SmallInProgress,u as SmallSingle,g as SmallSuccess,rl as __namedExportsOrder,al as default};
