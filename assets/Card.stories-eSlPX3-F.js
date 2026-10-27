import{e as i,j as e,c as we,S as Ue,l as Me,b as Ce}from"./iframe-DQRiHqgL.js";import{S as je}from"./StatusIndicator-D2iAxcPN.js";import{T as d}from"./Tag-eszmazEV.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens-ClON5slf.js";const Se=i.createContext(!1),Oe=Ce("grid grid-cols-1",{variants:{columns:{1:"",2:"md:grid-cols-2",3:"md:grid-cols-3",4:"md:grid-cols-4"},gap:{xxxs:"gap-xxxs",xxs:"gap-xxs",xs:"gap-xs",sm:"gap-sm",md:"gap-md",lg:"gap-lg",xl:"gap-xl",xxl:"gap-xxl",xxxl:"gap-xxxl"}}}),Ie=i.forwardRef(({columns:s=1,gap:t="xs",className:n,children:c,...m},L)=>e.jsx("ul",{ref:L,role:"list",className:we(Oe({columns:s,gap:t}),n),...m,children:e.jsx(Se.Provider,{value:!0,children:c})}));Ie.displayName="Card.List";const De=Ce(`bg-surface-primary border-surface-default text-body-primary px-md py-sm
  gap-xxs rounded-lg min-w-0 flex w-full flex-col border text-start`,{variants:{interactive:{true:`hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        focus-visible:ring-interactive-focused cursor-pointer transition-colors
        focus-visible:ring-4 focus-visible:outline-none`}}}),p=s=>s!=null&&s!==!1&&s!==!0&&s!=="",u=(s,...t)=>t.some(n=>(s==null?void 0:s[n])!==void 0),Ne=i.forwardRef(({asChild:s=!1,children:t,interactive:n=s,status:c,trailing:m,title:L,content:_,className:Te,...A},_e)=>{const ke=i.useContext(Se),T=i.useId(),k=`${T}-title`,R=`${T}-top`,E=`${T}-content`,Re=s?Ue:"div",U=t==null?void 0:t.props,M=p(c)||p(m),O=p(_),D=s&&!u(A,"aria-label","aria-labelledby")&&!u(U,"aria-label","aria-labelledby"),h=s&&!u(A,"aria-describedby")&&!u(U,"aria-describedby")&&[M&&R,O&&E].filter(Boolean).join(" ")||void 0,Ee={...D&&{"aria-labelledby":k},...h&&{"aria-describedby":h}},$=e.jsxs(Re,{ref:_e,className:we(De({interactive:s&&n}),Te),...A,children:[M&&e.jsxs("div",{id:h?R:void 0,"data-slot":"top",className:"gap-xs flex items-center",children:[p(c)&&e.jsx("div",{"data-slot":"status",className:"max-w-full shrink-0",children:c}),p(m)&&e.jsx("div",{"data-slot":"trailing",className:`text-body-secondary min-w-0 text-sm leading-normal
                  ms-auto text-end`,children:m})]}),e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("div",{id:D?k:void 0,"data-slot":"title",className:"text-md min-w-0 font-bold leading-[1.2] wrap-anywhere",children:L}),O&&e.jsx("div",{id:h?E:void 0,"data-slot":"content",className:"min-w-0",children:_})]}),s&&t&&e.jsx(Me,{children:i.cloneElement(t,Ee)})]});return ke?e.jsx("li",{className:"flex",children:$}):$});Ne.displayName="Card.Item";const a={Item:Ne,List:Ie},{fn:$e}=__STORYBOOK_MODULE_TEST__,Le=({products:s,manufacturer:t})=>e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsx("div",{className:"gap-xxs flex flex-wrap",children:s.map(n=>e.jsx(d,{children:n},n))}),e.jsx("p",{className:"text-body-secondary text-md leading-normal",children:t})]}),Pe={title:"Components/Card",component:a.Item,subcomponents:{"Card.List":a.List},parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=18788-15906"}},args:{status:e.jsx(je,{size:"sm",level:"success",children:"データ化前"}),trailing:e.jsxs(e.Fragment,{children:["SDS改訂日 ",e.jsx("span",{className:"text-body-primary",children:"2025/01/08"})]}),title:"SDS-Uranium_Metal_2020.pdf",content:e.jsx(Le,{products:["URANIUM METAL"],manufacturer:"検見間株式会社"})}},r=s=>e.jsx("div",{className:"max-w-96",children:e.jsx(s,{})}),o=[{id:"1",status:{level:"success",label:"データ化前"},revisedAt:"2025/01/08",fileName:"SDS-Uranium_Metal_2020.pdf",products:["URANIUM METAL"],manufacturer:"検見間株式会社"},{id:"2",status:{level:"inProgress",label:"データ化中"},revisedAt:"2025/01/08",fileName:"2f8ced71-d20f-424d-b0f4-3f72e29d6802.pdf",products:["URANIUM METAL"],manufacturer:"検見間株式会社"},{id:"3",status:{level:"alert",label:"データ化不可"},revisedAt:"2024/12/20",fileName:"SDS-Thorium_Nitrate.pdf",products:["THORIUM NITRATE","トリウム硝酸塩"],manufacturer:"株式会社ケミカン"},{id:"4",status:{level:"warning",label:"データ化保留中"},revisedAt:"2024/11/02",fileName:"SDS-Plutonium_Oxide.pdf",products:["PLUTONIUM OXIDE"],manufacturer:"株式会社ケミカン"}],l=s=>({status:e.jsx(je,{size:"sm",level:s.status.level,children:s.status.label}),trailing:e.jsxs(e.Fragment,{children:["SDS改訂日 ",e.jsx("span",{className:"text-body-primary",children:s.revisedAt})]}),title:s.fileName,content:e.jsx(Le,{products:s.products,manufacturer:s.manufacturer})}),Be=s=>({...l(s),status:e.jsx("span",{className:"text-body-secondary text-sm leading-normal",children:s.status.label}),content:e.jsxs("span",{className:"gap-xs flex flex-col",children:[e.jsx("span",{className:"gap-xxs flex flex-wrap",children:s.products.map(t=>e.jsx(d,{asChild:!0,children:e.jsx("span",{children:t})},t))}),e.jsx("span",{className:"text-body-secondary text-md leading-normal",children:s.manufacturer})]})}),x={decorators:[r]},g={decorators:[r],render:()=>e.jsx(a.List,{children:o.map(s=>e.jsx(a.Item,{...l(s)},s.id))}),parameters:{docs:{description:{story:"A list of cards, here the SDS list on a phone. The app maps each row to the slots: the digitization status, the revision date and the file name, and puts its own product tags and manufacturer line in `content`."}}}},f={decorators:[r],render:()=>e.jsx(a.List,{children:o.map(s=>e.jsx(a.Item,{asChild:!0,...l(s),children:e.jsx("a",{href:`#sds-${s.id}`})},s.id))}),parameters:{docs:{description:{story:"With `asChild` the whole card is the link passed as the child, so routing stays in the app. Hover a card, or tab through the list, for the hover and focus styles."}}}},y={decorators:[r],args:{onClick:$e()},render:({onClick:s})=>e.jsx(a.List,{children:o.map(t=>e.jsx(a.Item,{asChild:!0,onClick:s,...Be(t),children:e.jsx("button",{type:"button"})},t.id))}),parameters:{docs:{description:{story:"A card that opens something in place, such as a sheet or a dialog, takes a `button` as the child. It gets the same hover, active and focus styles as a link, and the pointer cursor. A button holds only phrasing content, so the slots here are text, `span`s and `Tag` with `asChild`, not the `StatusIndicator` and block elements of the link stories."}}}},v={decorators:[r],render:()=>e.jsx(a.List,{children:o.map(s=>e.jsx(a.Item,{asChild:!0,...l(s),title:e.jsx("h3",{children:s.fileName}),children:e.jsx("a",{href:`#sds-${s.id}`})},s.id))}),parameters:{docs:{description:{story:"A heading element in `title` inherits the title styles and lets screen reader users jump from card to card by heading. Pick the level that follows the page's outline."}}}},b={render:()=>e.jsx(a.List,{columns:3,gap:"md",children:[...o,...o.slice(0,2)].map((s,t)=>e.jsx(a.Item,{asChild:!0,...l(s),children:e.jsx("a",{href:`#sds-${s.id}`})},`${s.id}-${t}`))}),globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{docs:{description:{story:"`columns` applies from `md` up, and phones always get one column, so this story opens on the desktop viewport. `gap` takes a spacing token. The cards of a row share its height."}}}},Ae={trailing:e.jsxs(e.Fragment,{children:["SDS改訂日（最終更新を含む）"," ",e.jsx("span",{className:"text-body-primary",children:"2025/01/08"})]}),title:"test_test_foo_bar_safety_data_sheet_uranium_metal_revision_2020_final_v3.pdf",content:e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsxs("div",{className:"gap-xxs flex flex-wrap",children:[e.jsx(d,{children:"URANIUM METAL"}),e.jsx(d,{children:"ウラン金属（核燃料物質）"}),e.jsx(d,{children:"URANIUM_METAL_HIGH_PURITY_INGOT_FOR_RESEARCH_PURPOSES_ONLY_LOT_2020"}),e.jsx(d,{children:"U"})]}),e.jsx("p",{className:"text-body-secondary text-md leading-normal",children:"検見間株式会社 原子力材料事業部 研究開発センター 第二研究所"}),e.jsx("p",{className:"text-body-secondary text-md leading-normal",children:"最終確認: 2025/03/15"})]})},w={decorators:[r],args:Ae,parameters:{docs:{description:{story:"A file name without spaces wraps anywhere, and the trailing text wraps before the status shrinks. In `content`, a `Tag` longer than the card truncates and the others wrap onto the next line."}}}},C={decorators:[r],args:{status:void 0,trailing:void 0,content:void 0}},j={decorators:[r],args:{status:void 0}},S={decorators:[r],args:{trailing:void 0}},I={decorators:[r],args:{content:void 0}},N={decorators:[r],render:()=>e.jsxs(a.List,{children:[o.map(s=>e.jsx(a.Item,{asChild:!0,...l(s),children:e.jsx("a",{href:`#sds-${s.id}`})},s.id)),e.jsx(a.Item,{asChild:!0,...Pe.args,...Ae,children:e.jsx("a",{href:"#sds-long"})})]}),globals:{viewport:{value:"mobile",isRotated:!1}},parameters:{docs:{description:{story:"The list at 375px, with the 16px gutters of the padded layout. The last card holds the long content."}}}};var P,B,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [narrow]
}`,...(H=(B=x.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var W,F,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [narrow],
  render: () => <Card.List>
      {sdsRows.map(sds => <Card.Item key={sds.id} {...sdsSlots(sds)} />)}
    </Card.List>,
  parameters: {
    docs: {
      description: {
        story: 'A list of cards, here the SDS list on a phone. The app maps each row to the slots: the digitization status, the revision date and the file name, and puts its own product tags and manufacturer line in \`content\`.'
      }
    }
  }
}`,...(z=(F=g.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var G,Y,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [narrow],
  render: () => <Card.List>
      {sdsRows.map(sds => <Card.Item key={sds.id} asChild {...sdsSlots(sds)}>
          <a href={\`#sds-\${sds.id}\`} />
        </Card.Item>)}
    </Card.List>,
  parameters: {
    docs: {
      description: {
        story: 'With \`asChild\` the whole card is the link passed as the child, so routing stays in the app. Hover a card, or tab through the list, for the hover and focus styles.'
      }
    }
  }
}`,...(K=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var V,J,X;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [narrow],
  args: {
    onClick: fn()
  },
  render: ({
    onClick
  }) => <Card.List>
      {sdsRows.map(sds => <Card.Item key={sds.id} asChild onClick={onClick} {...phrasingSlots(sds)}>
          <button type="button" />
        </Card.Item>)}
    </Card.List>,
  parameters: {
    docs: {
      description: {
        story: 'A card that opens something in place, such as a sheet or a dialog, takes a \`button\` as the child. It gets the same hover, active and focus styles as a link, and the pointer cursor. A button holds only phrasing content, so the slots here are text, \`span\`s and \`Tag\` with \`asChild\`, not the \`StatusIndicator\` and block elements of the link stories.'
      }
    }
  }
}`,...(X=(J=y.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var q,Q,Z;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  decorators: [narrow],
  render: () => <Card.List>
      {sdsRows.map(sds => <Card.Item key={sds.id} asChild {...sdsSlots(sds)} title={<h3>{sds.fileName}</h3>}>
          <a href={\`#sds-\${sds.id}\`} />
        </Card.Item>)}
    </Card.List>,
  parameters: {
    docs: {
      description: {
        story: "A heading element in \`title\` inherits the title styles and lets screen reader users jump from card to card by heading. Pick the level that follows the page's outline."
      }
    }
  }
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,se,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Card.List columns={3} gap="md">
      {[...sdsRows, ...sdsRows.slice(0, 2)].map((sds, index) => <Card.Item key={\`\${sds.id}-\${index}\`} asChild {...sdsSlots(sds)}>
          <a href={\`#sds-\${sds.id}\`} />
        </Card.Item>)}
    </Card.List>,
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`columns\` applies from \`md\` up, and phones always get one column, so this story opens on the desktop viewport. \`gap\` takes a spacing token. The cards of a row share its height.'
      }
    }
  }
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ae,re,ne;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [narrow],
  args: longContentArgs,
  parameters: {
    docs: {
      description: {
        story: 'A file name without spaces wraps anywhere, and the trailing text wraps before the status shrinks. In \`content\`, a \`Tag\` longer than the card truncates and the others wrap onto the next line.'
      }
    }
  }
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,de;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [narrow],
  args: {
    status: undefined,
    trailing: undefined,
    content: undefined
  }
}`,...(de=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ce,me;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: [narrow],
  args: {
    status: undefined
  }
}`,...(me=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,he,ue;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  decorators: [narrow],
  args: {
    trailing: undefined
  }
}`,...(ue=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var xe,ge,fe;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  decorators: [narrow],
  args: {
    content: undefined
  }
}`,...(fe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,ve,be;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  decorators: [narrow],
  render: () => <Card.List>
      {sdsRows.map(sds => <Card.Item key={sds.id} asChild {...sdsSlots(sds)}>
          <a href={\`#sds-\${sds.id}\`} />
        </Card.Item>)}
      <Card.Item asChild {...meta.args} {...longContentArgs}>
        <a href="#sds-long" />
      </Card.Item>
    </Card.List>,
  globals: {
    viewport: {
      value: 'mobile',
      isRotated: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'The list at 375px, with the 16px gutters of the padded layout. The last card holds the long content.'
      }
    }
  }
}`,...(be=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Ye=["Default","List","AsLink","AsButton","HeadingTitle","Columns","LongContent","TitleOnly","WithoutStatus","WithoutTrailing","WithoutContent","Mobile"];export{y as AsButton,f as AsLink,b as Columns,x as Default,v as HeadingTitle,g as List,w as LongContent,N as Mobile,C as TitleOnly,I as WithoutContent,j as WithoutStatus,S as WithoutTrailing,Ye as __namedExportsOrder,Pe as default};
