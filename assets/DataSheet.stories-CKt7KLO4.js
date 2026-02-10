import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as U}from"./iframe-BS3dkECt.js";import{D as a,A as t}from"./Accordion-ayX01hRi.js";import{I as X}from"./IconPlus-CAIjIuqh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-w0ozU3u-.js";import"./utils-CJKYiIMO.js";import"./Button-xo5Hph5C.js";import"./ProgressIndicator-Cwq8lf9O.js";import"./index-_umt6yaQ.js";import"./index-ByYzvxXC.js";import"./index-DqoKkbWS.js";import"./index--NlgwGfF.js";import"./createReactComponent-D35mHvmE.js";import"./IconTrash-6QngIqqG.js";import"./IconChevronDown-rjPEYJLi.js";import"./index-DBkm8V10.js";import"./index-b54FJRB0.js";import"./index-BK0NX5T8.js";import"./index-JObRCqvH.js";import"./index-2FFO1BhC.js";const Ce={title:"Components/DataSheet",component:a,parameters:{layout:"centered"}},r=()=>e.jsx(a,{className:"w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.KeyValue,{label:"SDS作成日",children:"2025/01/08"}),e.jsx(a.KeyValue,{label:"SDS改訂日",children:"2025/01/08"})]})}),o=()=>e.jsx(a,{className:"w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.KeyValue,{orientation:"horizontal",label:"推奨用途",children:"-"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"使用上の制限",children:"-"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:e.jsxs("div",{children:[e.jsx("div",{children:"推奨用途及び"}),e.jsx("div",{children:"使用上の制限"})]}),children:"-"})]})}),s=()=>e.jsx(a,{className:"w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.KeyValue,{spacing:"compact",label:"SDSファイル名",children:"4-AMINO-2-CHLOROBENZOIC-5GR.pdf"}),e.jsx(a.KeyValue,{spacing:"compact",label:"SDS改訂日",children:"2025/01/08 22:38"})]})}),h=()=>e.jsx(a,{className:"w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.KeyValue,{spacing:"compact",orientation:"horizontal",label:"推奨用途",children:"-"}),e.jsx(a.KeyValue,{spacing:"compact",orientation:"horizontal",label:"使用上の制限",children:"-"})]})}),c=()=>e.jsx(a,{className:"w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.KeyValue,{label:"SDS作成日",children:"2025/01/08"}),e.jsx(a.KeyValue,{label:"SDS改訂日",children:"2025/01/08"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"推奨用途",children:"-"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"使用上の制限",children:"-"})]})}),d=()=>e.jsx(a,{className:"max-w-4xl w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"table",children:"製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric acid (HCl) solution [for dissolving (1)] 12 mL×3本"}),e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs(a.TableRow,{header:!0,children:[e.jsx(a.TableCell,{header:!0,parts:45,children:"項目"}),e.jsx(a.TableCell,{header:!0,parts:35,children:"区分"}),e.jsx(a.TableCell,{header:!0,parts:20,children:"毒性"})]})}),e.jsxs(a.TableBody,{children:[e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"火薬類・爆発物 / Explosives"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]}),e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"可燃性・引火性ガス / Flammable gases （including chemically unstable gases）"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]})]})]})]})}),S=()=>{const u=i=>{alert(`Edit item ${i}`)},T=i=>{confirm(`Remove item ${i}?`)&&alert("Item removed")};return e.jsx(a,{className:"max-w-4xl w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"table",children:"製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric acid (HCl) solution [for dissolving (1)] 12 mL×3本"}),e.jsxs(a.Table,{onEditRow:u,onRemoveRow:T,actionsColumnParts:10,children:[e.jsx(a.TableHeader,{children:e.jsxs(a.TableRow,{header:!0,children:[e.jsx(a.TableCell,{header:!0,parts:40,children:"項目"}),e.jsx(a.TableCell,{header:!0,parts:35,children:"区分"}),e.jsx(a.TableCell,{header:!0,parts:15,children:"毒性"}),e.jsx(a.TableActionsCell,{header:!0})]})}),e.jsxs(a.TableBody,{children:[e.jsxs(a.TableRow,{item:"explosive-001",children:[e.jsx(a.TableCell,{children:"火薬類・爆発物 / Explosives"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"}),e.jsx(a.TableActionsCell,{})]}),e.jsxs(a.TableRow,{item:"flammable-gas-001",children:[e.jsx(a.TableCell,{children:"可燃性・引火性ガス / Flammable gases （including chemically unstable gases）"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"}),e.jsx(a.TableActionsCell,{})]})]})]})]})})},b=()=>{const[u,T]=U.useState([{id:1,label:"Explosives",isDeleted:!1},{id:2,label:"Flammable gases",isDeleted:!1},{id:3,label:"Oxidizing gases",isDeleted:!0},{id:4,label:"-",isDeleted:!0}]),i=l=>{alert(`Edit item: ${l.label} (ID: ${l.id})`)},J=l=>{confirm(`Remove item: ${l.label}?`)&&T(x=>x.map(n=>n.id===l.id?{...n,isDeleted:!0}:n))},Q=l=>{confirm(`Restore item: ${l.label}?`)&&T(x=>x.map(n=>n.id===l.id?{...n,isDeleted:!1}:n))};return e.jsx(a,{className:"max-w-4xl w-140",children:e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"table",children:"Table with Record Type - TItem as Object"}),e.jsxs(a.Table,{onEditRow:i,onRemoveRow:J,onRestoreRow:Q,actionsColumnParts:10,children:[e.jsx(a.TableHeader,{children:e.jsxs(a.TableRow,{header:!0,children:[e.jsx(a.TableCell,{header:!0,parts:15,children:"ID"}),e.jsx(a.TableCell,{header:!0,parts:50,children:"Label"}),e.jsx(a.TableCell,{header:!0,parts:25,children:"Status"}),e.jsx(a.TableActionsCell,{header:!0})]})}),e.jsx(a.TableBody,{children:u.map(l=>e.jsxs(a.TableRow,{item:l,isDeleted:l.isDeleted,children:[e.jsx(a.TableCell,{children:l.id}),e.jsx(a.TableCell,{children:l.label}),e.jsx(a.TableCell,{children:l.isDeleted?"Deleted":"Active"}),e.jsx(a.TableActionsCell,{})]},l.id))})]})]})})},D=()=>e.jsxs(a,{className:"w-140",children:[e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"primary",onEdit:()=>alert("Edit Eastman Chemical Company"),onRemove:()=>alert("Remove Eastman Chemical Company"),children:"Eastman Chemical Company"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"住所",children:"200 South Wilcox Drive Kingsport TN 37660-5280"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"拠点・部門",children:"A部門"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"電話番号",children:"423-229-2000"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"メールアドレス",children:"-"})]}),e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"primary",onEdit:()=>alert("Edit 全国農業協同組合連合会"),onRemove:()=>alert("Remove 全国農業協同組合連合会"),children:"全国農業協同組合連合会"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"住所",children:"200 South Wilcox Drive Kingsport TN 37660-5280"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"拠点・部門",children:"A部門"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"電話番号",children:"423-229-2000"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"メールアドレス",children:"-"})]}),e.jsx(a.Action,{size:"xs",intent:"secondary",icon:X,children:"製造者情報を追加する"})]}),m=()=>e.jsx("div",{className:"bg-surface-secondary p-md",children:e.jsxs(t,{defaultValue:["section-1"],className:"w-140",children:[e.jsxs(t.Item,{value:"section-1",children:[e.jsx(t.Trigger,{children:"0. 基礎情報"}),e.jsx(t.Content,{children:e.jsx(a,{children:e.jsxs(a.Section,{children:[e.jsx(a.KeyValue,{label:"SDS作成日",children:"2025/01/08"}),e.jsx(a.KeyValue,{label:"SDS改訂日",children:"2025/01/08"})]})})})]}),e.jsxs(t.Item,{value:"section-2",children:[e.jsx(t.Trigger,{children:"1. 化学品及び会社情報（製品情報）"}),e.jsx(t.Content,{children:e.jsx(a,{children:e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"primary",children:"全国農業協同組合連合会"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"住所",children:"200 South Wilcox Drive Kingsport TN 37660-5280"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"拠点・部門",children:"A部門"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"電話番号",children:"423-229-2000"}),e.jsx(a.KeyValue,{orientation:"horizontal",label:"メールアドレス",children:"-"})]})})})]}),e.jsxs(t.Item,{value:"section-3",children:[e.jsx(t.Trigger,{children:"2. 危険有害性の要約"}),e.jsx(t.Content,{children:e.jsxs(a,{children:[e.jsx(a.Header,{variant:"primary",children:"分類体系｜GHS"}),e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"table",children:"製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric acid (HCl) solution [for dissolving (1)] 12 mL×3本"}),e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs(a.TableRow,{header:!0,children:[e.jsx(a.TableCell,{header:!0,parts:45,children:"項目"}),e.jsx(a.TableCell,{header:!0,parts:35,children:"区分"}),e.jsx(a.TableCell,{header:!0,parts:20,children:"毒性"})]})}),e.jsxs(a.TableBody,{children:[e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"火薬類・爆発物 / Explosives"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]}),e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"可燃性・引火性ガス / Flammable gases （including chemically unstable gases）"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]})]})]})]}),e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"table",children:"含有成分｜アセチレン"}),e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs(a.TableRow,{header:!0,children:[e.jsx(a.TableCell,{header:!0,parts:45,children:"項目"}),e.jsx(a.TableCell,{header:!0,parts:35,children:"区分"}),e.jsx(a.TableCell,{header:!0,parts:20,children:"毒性"})]})}),e.jsxs(a.TableBody,{children:[e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"火薬類・爆発物 / Explosives"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]}),e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"可燃性・引火性ガス / Flammable gases （including chemically unstable gases）"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]})]})]})]}),e.jsxs(a.Section,{children:[e.jsx(a.Header,{variant:"table",children:"含有成分｜アセトン"}),e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs(a.TableRow,{header:!0,children:[e.jsx(a.TableCell,{header:!0,parts:45,children:"項目"}),e.jsx(a.TableCell,{header:!0,parts:35,children:"区分"}),e.jsx(a.TableCell,{header:!0,parts:20,children:"毒性"})]})}),e.jsx(a.TableBody,{children:e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:"可燃性・引火性ガス / Flammable gases （including chemically unstable gases）"}),e.jsx(a.TableCell,{children:"区分外 ; Not classified"}),e.jsx(a.TableCell,{children:"-"})]})})]})]})]})})]})]})});r.__docgenInfo={description:"",methods:[],displayName:"BasicKeyValue"};o.__docgenInfo={description:"",methods:[],displayName:"HorizontalKeyValue"};s.__docgenInfo={description:"",methods:[],displayName:"CompactKeyValue"};h.__docgenInfo={description:"",methods:[],displayName:"CompactHorizontalKeyValue"};c.__docgenInfo={description:"",methods:[],displayName:"MixedLayout"};d.__docgenInfo={description:"",methods:[],displayName:"TableData"};S.__docgenInfo={description:"",methods:[],displayName:"TableWithActions"};b.__docgenInfo={description:"",methods:[],displayName:"TableWithRemoveRestoreAction"};D.__docgenInfo={description:"",methods:[],displayName:"MultipleSections"};m.__docgenInfo={description:"",methods:[],displayName:"SectionDataExampleWithinAccordion"};var p,C,j;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue label="SDS作成日">2025/01/08</DataSheet.KeyValue>
      <DataSheet.KeyValue label="SDS改訂日">2025/01/08</DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>`,...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,R,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="使用上の制限">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label={<div>
            <div>推奨用途及び</div>
            <div>使用上の制限</div>
          </div>}>
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>`,...(g=(R=o.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var V,K,v;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`() => <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue spacing="compact" label="SDSファイル名">
        4-AMINO-2-CHLOROBENZOIC-5GR.pdf
      </DataSheet.KeyValue>
      <DataSheet.KeyValue spacing="compact" label="SDS改訂日">
        2025/01/08 22:38
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>`,...(v=(K=s.parameters)==null?void 0:K.docs)==null?void 0:v.source}}};var w,H,f;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`() => <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue spacing="compact" orientation="horizontal" label="推奨用途">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue spacing="compact" orientation="horizontal" label="使用上の制限">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>`,...(f=(H=h.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var A,N,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue label="SDS作成日">2025/01/08</DataSheet.KeyValue>
      <DataSheet.KeyValue label="SDS改訂日">2025/01/08</DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="使用上の制限">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var z,E,B;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => <DataSheet className="max-w-4xl w-140">
    <DataSheet.Section>
      <DataSheet.Header variant="table">
        製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric
        acid (HCl) solution [for dissolving (1)] 12 mL×3本
      </DataSheet.Header>
      <DataSheet.Table>
        <DataSheet.TableHeader>
          <DataSheet.TableRow header>
            <DataSheet.TableCell header parts={45}>
              項目
            </DataSheet.TableCell>
            <DataSheet.TableCell header parts={35}>
              区分
            </DataSheet.TableCell>
            <DataSheet.TableCell header parts={20}>
              毒性
            </DataSheet.TableCell>
          </DataSheet.TableRow>
        </DataSheet.TableHeader>
        <DataSheet.TableBody>
          <DataSheet.TableRow>
            <DataSheet.TableCell>
              火薬類・爆発物 / Explosives
            </DataSheet.TableCell>
            <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
            <DataSheet.TableCell>-</DataSheet.TableCell>
          </DataSheet.TableRow>
          <DataSheet.TableRow>
            <DataSheet.TableCell>
              可燃性・引火性ガス / Flammable gases （including chemically
              unstable gases）
            </DataSheet.TableCell>
            <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
            <DataSheet.TableCell>-</DataSheet.TableCell>
          </DataSheet.TableRow>
        </DataSheet.TableBody>
      </DataSheet.Table>
    </DataSheet.Section>
  </DataSheet>`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var _,W,L;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const handleEdit = (item: string) => {
    alert(\`Edit item \${item}\`);
  };
  const handleRemove = (item: string) => {
    if (confirm(\`Remove item \${item}?\`)) {
      alert('Item removed');
    }
  };
  return <DataSheet className="max-w-4xl w-140">
      <DataSheet.Section>
        <DataSheet.Header variant="table">
          製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric
          acid (HCl) solution [for dissolving (1)] 12 mL×3本
        </DataSheet.Header>
        <DataSheet.Table onEditRow={handleEdit} onRemoveRow={handleRemove} actionsColumnParts={10}>
          <DataSheet.TableHeader>
            <DataSheet.TableRow header>
              <DataSheet.TableCell header parts={40}>
                項目
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={35}>
                区分
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={15}>
                毒性
              </DataSheet.TableCell>
              <DataSheet.TableActionsCell header />
            </DataSheet.TableRow>
          </DataSheet.TableHeader>
          <DataSheet.TableBody>
            <DataSheet.TableRow item="explosive-001">
              <DataSheet.TableCell>
                火薬類・爆発物 / Explosives
              </DataSheet.TableCell>
              <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
              <DataSheet.TableCell>-</DataSheet.TableCell>
              <DataSheet.TableActionsCell />
            </DataSheet.TableRow>
            <DataSheet.TableRow item="flammable-gas-001">
              <DataSheet.TableCell>
                可燃性・引火性ガス / Flammable gases （including chemically
                unstable gases）
              </DataSheet.TableCell>
              <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
              <DataSheet.TableCell>-</DataSheet.TableCell>
              <DataSheet.TableActionsCell />
            </DataSheet.TableRow>
          </DataSheet.TableBody>
        </DataSheet.Table>
      </DataSheet.Section>
    </DataSheet>;
}`,...(L=(W=S.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var O,F,$;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  interface ItemRecord {
    id: number;
    label: string;
    isDeleted: boolean;
  }
  const [items, setItems] = React.useState<ItemRecord[]>([{
    id: 1,
    label: 'Explosives',
    isDeleted: false
  }, {
    id: 2,
    label: 'Flammable gases',
    isDeleted: false
  }, {
    id: 3,
    label: 'Oxidizing gases',
    isDeleted: true
  }, {
    id: 4,
    label: '-',
    isDeleted: true
  }]);
  const handleEdit = (item: ItemRecord) => {
    alert(\`Edit item: \${item.label} (ID: \${item.id})\`);
  };
  const handleRemove = (item: ItemRecord) => {
    if (confirm(\`Remove item: \${item.label}?\`)) {
      setItems(prevItems => prevItems.map(i => i.id === item.id ? {
        ...i,
        isDeleted: true
      } : i));
    }
  };
  const handleRestore = (item: ItemRecord) => {
    if (confirm(\`Restore item: \${item.label}?\`)) {
      setItems(prevItems => prevItems.map(i => i.id === item.id ? {
        ...i,
        isDeleted: false
      } : i));
    }
  };
  return <DataSheet className="max-w-4xl w-140">
      <DataSheet.Section>
        <DataSheet.Header variant="table">
          Table with Record Type - TItem as Object
        </DataSheet.Header>
        <DataSheet.Table<ItemRecord> onEditRow={handleEdit} onRemoveRow={handleRemove} onRestoreRow={handleRestore} actionsColumnParts={10}>
          <DataSheet.TableHeader>
            <DataSheet.TableRow header>
              <DataSheet.TableCell header parts={15}>
                ID
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={50}>
                Label
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={25}>
                Status
              </DataSheet.TableCell>
              <DataSheet.TableActionsCell header />
            </DataSheet.TableRow>
          </DataSheet.TableHeader>
          <DataSheet.TableBody>
            {items.map(item => <DataSheet.TableRow key={item.id} item={item} isDeleted={item.isDeleted}>
                <DataSheet.TableCell>{item.id}</DataSheet.TableCell>
                <DataSheet.TableCell>{item.label}</DataSheet.TableCell>
                <DataSheet.TableCell>
                  {item.isDeleted ? 'Deleted' : 'Active'}
                </DataSheet.TableCell>
                <DataSheet.TableActionsCell />
              </DataSheet.TableRow>)}
          </DataSheet.TableBody>
        </DataSheet.Table>
      </DataSheet.Section>
    </DataSheet>;
}`,...($=(F=b.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var M,P,G;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`() => <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.Header variant="primary" onEdit={() => alert('Edit Eastman Chemical Company')} onRemove={() => alert('Remove Eastman Chemical Company')}>
        Eastman Chemical Company
      </DataSheet.Header>
      <DataSheet.KeyValue orientation="horizontal" label="住所">
        200 South Wilcox Drive Kingsport TN 37660-5280
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="拠点・部門">
        A部門
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="電話番号">
        423-229-2000
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="メールアドレス">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>

    <DataSheet.Section>
      <DataSheet.Header variant="primary" onEdit={() => alert('Edit 全国農業協同組合連合会')} onRemove={() => alert('Remove 全国農業協同組合連合会')}>
        全国農業協同組合連合会
      </DataSheet.Header>
      <DataSheet.KeyValue orientation="horizontal" label="住所">
        200 South Wilcox Drive Kingsport TN 37660-5280
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="拠点・部門">
        A部門
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="電話番号">
        423-229-2000
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="メールアドレス">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>

    <DataSheet.Action size="xs" intent="secondary" icon={IconPlus}>
      製造者情報を追加する
    </DataSheet.Action>
  </DataSheet>`,...(G=(P=D.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var Z,k,q;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <div className="bg-surface-secondary p-md">
    <Accordion defaultValue={['section-1']} className="w-140">
      <Accordion.Item value="section-1">
        <Accordion.Trigger>0. 基礎情報</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Section>
              <DataSheet.KeyValue label="SDS作成日">
                2025/01/08
              </DataSheet.KeyValue>
              <DataSheet.KeyValue label="SDS改訂日">
                2025/01/08
              </DataSheet.KeyValue>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="section-2">
        <Accordion.Trigger>1. 化学品及び会社情報（製品情報）</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Section>
              <DataSheet.Header variant="primary">
                全国農業協同組合連合会
              </DataSheet.Header>
              <DataSheet.KeyValue orientation="horizontal" label="住所">
                200 South Wilcox Drive Kingsport TN 37660-5280
              </DataSheet.KeyValue>
              <DataSheet.KeyValue orientation="horizontal" label="拠点・部門">
                A部門
              </DataSheet.KeyValue>
              <DataSheet.KeyValue orientation="horizontal" label="電話番号">
                423-229-2000
              </DataSheet.KeyValue>
              <DataSheet.KeyValue orientation="horizontal" label="メールアドレス">
                -
              </DataSheet.KeyValue>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="section-3">
        <Accordion.Trigger>2. 危険有害性の要約</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Header variant="primary">分類体系｜GHS</DataSheet.Header>
            <DataSheet.Section>
              <DataSheet.Header variant="table">
                製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液
                Hydrochloric acid (HCl) solution [for dissolving (1)] 12 mL×3本
              </DataSheet.Header>
              <DataSheet.Table>
                <DataSheet.TableHeader>
                  <DataSheet.TableRow header>
                    <DataSheet.TableCell header parts={45}>
                      項目
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={35}>
                      区分
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={20}>
                      毒性
                    </DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableHeader>
                <DataSheet.TableBody>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      火薬類・爆発物 / Explosives
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      可燃性・引火性ガス / Flammable gases （including
                      chemically unstable gases）
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableBody>
              </DataSheet.Table>
            </DataSheet.Section>

            <DataSheet.Section>
              <DataSheet.Header variant="table">
                含有成分｜アセチレン
              </DataSheet.Header>
              <DataSheet.Table>
                <DataSheet.TableHeader>
                  <DataSheet.TableRow header>
                    <DataSheet.TableCell header parts={45}>
                      項目
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={35}>
                      区分
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={20}>
                      毒性
                    </DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableHeader>
                <DataSheet.TableBody>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      火薬類・爆発物 / Explosives
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      可燃性・引火性ガス / Flammable gases （including
                      chemically unstable gases）
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableBody>
              </DataSheet.Table>
            </DataSheet.Section>

            <DataSheet.Section>
              <DataSheet.Header variant="table">
                含有成分｜アセトン
              </DataSheet.Header>
              <DataSheet.Table>
                <DataSheet.TableHeader>
                  <DataSheet.TableRow header>
                    <DataSheet.TableCell header parts={45}>
                      項目
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={35}>
                      区分
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={20}>
                      毒性
                    </DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableHeader>
                <DataSheet.TableBody>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      可燃性・引火性ガス / Flammable gases （including
                      chemically unstable gases）
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableBody>
              </DataSheet.Table>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </div>`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const je=["BasicKeyValue","HorizontalKeyValue","CompactKeyValue","CompactHorizontalKeyValue","MixedLayout","TableData","TableWithActions","TableWithRemoveRestoreAction","MultipleSections","SectionDataExampleWithinAccordion"];export{r as BasicKeyValue,h as CompactHorizontalKeyValue,s as CompactKeyValue,o as HorizontalKeyValue,c as MixedLayout,D as MultipleSections,m as SectionDataExampleWithinAccordion,d as TableData,S as TableWithActions,b as TableWithRemoveRestoreAction,je as __namedExportsOrder,Ce as default};
