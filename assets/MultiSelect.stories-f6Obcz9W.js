import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{e as O}from"./iframe-BVP3mzG-.js";import{M as Me}from"./MultiSelect-C7ZK067l.js";import{c as V}from"./createReactComponent-4O3kSUPU.js";import{I as je}from"./IconX-Q-5MBP9W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbtwBnD4.js";import"./utils-DsNtC-AU.js";import"./Button-udmtibE6.js";import"./Spinner-Dx2bMw8v.js";import"./index-CGnWUUPq.js";import"./Tag-_1xZRtbW.js";import"./tokens-CXYA5Prz.js";import"./index-Cv21fM8u.js";import"./index-CU8sRWq4.js";import"./index-C3QWgk1n.js";import"./index-DJsAUQf0.js";import"./index-BmxElqd1.js";import"./index-BVD9YFQG.js";import"./index-DcHn8QWR.js";import"./index-B1q5IEoB.js";import"./index-Ci86NCou.js";import"./index-D_cufc1L.js";import"./index-B3dEKPa6.js";import"./index-Bt_TKEjg.js";import"./index-BR216lmd.js";import"./IconSearch-DTVpY6cO.js";import"./Checkbox-_9RcYwzX.js";import"./IconCheck-Db-d3RZs.js";import"./index-KOmqA5RC.js";import"./IconChevronDown-BTpYeLbZ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]],Le=V("outline","heart","Heart",ze);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]],De=V("outline","star","Star",ke);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]],Ee=V("outline","users","Users",Be),ya={title:"Components/MultiSelect",component:Me,parameters:{docs:{description:{component:"A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","inverted"],description:"Visual style variant of the component"},maxCount:{control:"number",description:'Maximum number of selected items to display before showing "+X more"'},searchable:{control:"boolean",description:"Whether to show search functionality"},hideSelectAll:{control:"boolean",description:'Whether to hide the "Select All" option'},disabled:{control:"boolean",description:"Whether the component is disabled"},closeOnSelect:{control:"boolean",description:"Whether to close the popover after selecting an option"},singleLine:{control:"boolean",description:"Whether to display selected items in a single line with scroll"},autoSize:{control:"boolean",description:"Whether the component should auto-size to its content"},filterByValueAndLabel:{control:"boolean",description:"Whether to filter by both value and label when searching"}}},a=[{label:"Apple",value:"550e8400-e29b-41d4-a716-446655440001"},{label:"Banana",value:"550e8400-e29b-41d4-a716-446655440002"},{label:"Cherry",value:"cherry-fruit"},{label:"Date",value:"550e8400-e29b-41d4-a716-446655440003"},{label:"Elderberry",value:"elderberry-premium"},{label:"Fig",value:"550e8400-e29b-41d4-a716-446655440004"},{label:"Grape",value:"grape-variety"},{label:"Honeydew",value:"550e8400-e29b-41d4-a716-446655440005"}],Ie=[{label:"Users",value:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",icon:Ee},{label:"Favorites",value:"favorites-collection",icon:De},{label:"Liked",value:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",icon:Le},{label:"Apple",value:"apple-item"},{label:"Banana",value:"6ba7b812-9dad-11d1-80b4-00c04fd430c8"}],_e=[{heading:"Fruits",options:[{label:"Apple",value:"a1b2c3d4-e5f6-4789-a012-123456789abc"},{label:"Banana",value:"banana-tropical"},{label:"Cherry",value:"b2c3d4e5-f6a7-4890-b123-234567890bcd"}]},{heading:"Vegetables",options:[{label:"Carrot",value:"carrot-orange"},{label:"Broccoli",value:"c3d4e5f6-a7b8-4901-c234-345678901cde"},{label:"Spinach",value:"spinach-leafy"}]},{heading:"Grains",options:[{label:"Rice",value:"d4e5f6a7-b8c9-4012-d345-456789012def"},{label:"Wheat",value:"wheat-grain"},{label:"Oats",value:"e5f6a7b8-c9d0-4123-e456-567890123efa"}]}],Ue=[{label:"Available Option",value:"f6a7b8c9-d0e1-4234-f567-678901234fab"},{label:"Disabled Option",value:"disabled-item",disabled:!0},{label:"Another Available",value:"a7b8c9d0-e1f2-4345-a678-789012345abc"},{label:"Also Disabled",value:"also-disabled-slug",disabled:!0}],s={args:{options:a,placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},t={args:{options:a,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Select fruits...",onValueChange:e=>console.log("Selected values:",e)}},l={args:{options:Ie,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},n={args:{options:_e,placeholder:"Select food items...",onValueChange:e=>console.log("Selected values:",e)}},r={args:{options:Ue,placeholder:"Select options...",onValueChange:e=>console.log("Selected values:",e)}},c={args:{options:a,variant:"secondary",placeholder:"Secondary variant...",onValueChange:e=>console.log("Selected values:",e)}},i={args:{options:a,variant:"destructive",placeholder:"Destructive variant...",onValueChange:e=>console.log("Selected values:",e)}},d={args:{options:a,maxCount:2,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003"],placeholder:"Max 2 visible...",onValueChange:e=>console.log("Selected values:",e)}},u={args:{options:a,searchable:!1,placeholder:"No search functionality...",onValueChange:e=>console.log("Selected values:",e)}},p={args:{options:a,hideSelectAll:!0,placeholder:"No select all option...",onValueChange:e=>console.log("Selected values:",e)}},m={args:{options:a,closeOnSelect:!0,placeholder:"Closes after selection...",onValueChange:e=>console.log("Selected values:",e)}},h={args:{options:a,singleLine:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003","elderberry-premium"],placeholder:"Single line display...",onValueChange:e=>console.log("Selected values:",e)}},b={args:{options:a,autoSize:!0,placeholder:"Auto-sized...",onValueChange:e=>console.log("Selected values:",e)}},g={args:{options:a,disabled:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002"],placeholder:"Disabled state...",onValueChange:e=>console.log("Selected values:",e)}},v={args:{options:a,animation:.3,animationConfig:{badgeAnimation:"bounce",popoverAnimation:"scale",duration:.3},placeholder:"With animations...",onValueChange:e=>console.log("Selected values:",e)}},f={args:{options:a,responsive:!0,defaultValue:["550e8400-e29b-41d4-a716-446655440001","550e8400-e29b-41d4-a716-446655440002","cherry-fruit","550e8400-e29b-41d4-a716-446655440003","elderberry-premium","550e8400-e29b-41d4-a716-446655440004"],placeholder:"Responsive behavior...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story shows responsive behavior. Try resizing the viewport to see different maxCount values."}}}},y={args:{options:[],emptyIndicator:o.jsxs("div",{className:"py-6 flex flex-col items-center text-center",children:[o.jsx(De,{className:"h-12 w-12 text-body-secondary mb-2"}),o.jsx("p",{className:"text-body-secondary",children:"No options available"}),o.jsx("p",{className:"text-xs text-body-secondary mt-1",children:"Try a different search term"})]}),placeholder:"Custom empty state...",onValueChange:e=>console.log("Selected values:",e)}},S={args:{options:a,filterByValueAndLabel:!0,placeholder:"Search by label or value...",onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'}}}},C={args:{options:Ie,placeholder:"Custom render...",renderOption:({option:e,location:Re,isSelected:x,onRemove:N})=>Re==="badge"?o.jsxs("div",{className:`gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border`,children:[e.icon&&O.createElement(e.icon,{className:"h-3 w-3"}),o.jsx("span",{className:"text-sm font-medium",children:e.label}),N&&o.jsx("button",{onClick:Te=>{Te.stopPropagation(),N()},className:"ml-1 hover:bg-interactive-alert-hover rounded p-0.5",children:o.jsx(je,{className:"h-3 w-3 text-interactive-alert-default"})})]}):o.jsxs("div",{className:"gap-2 flex items-center",children:[e.icon&&O.createElement(e.icon,{className:`h-4 w-4 ${x?"text-interactive-primary-default":"text-body-secondary"}`}),o.jsx("span",{className:x?"font-bold text-interactive-primary-default":"",children:e.label}),x&&o.jsx("span",{className:"text-xs text-body-success ml-auto",children:"✓ Selected"})]}),onValueChange:e=>console.log("Selected values:",e)},parameters:{docs:{description:{story:"This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button."}}}};var A,w,W;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(W=(w=s.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var D,I,R;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Select fruits...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(R=(I=t.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,M,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(j=(M=l.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var z,L,k;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(k=(L=n.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var B,E,_;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(_=(E=r.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var U,F,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    variant: 'secondary',
    placeholder: 'Secondary variant...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var $,H,X;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    variant: 'destructive',
    placeholder: 'Destructive variant...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(X=(H=i.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var P,q,J;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003'],
    placeholder: 'Max 2 visible...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,se,te;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(te=(se=m.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ne,re;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    singleLine: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003', 'elderberry-premium'],
    placeholder: 'Single line display...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ce,ie,de;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    autoSize: true,
    placeholder: 'Auto-sized...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,me;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    placeholder: 'Disabled state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(me=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,be,ge;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    animation: 0.3,
    animationConfig: {
      badgeAnimation: 'bounce',
      popoverAnimation: 'scale',
      duration: 0.3
    },
    placeholder: 'With animations...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(ge=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,fe,ye;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    responsive: true,
    defaultValue: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'cherry-fruit', '550e8400-e29b-41d4-a716-446655440003', 'elderberry-premium', '550e8400-e29b-41d4-a716-446655440004'],
    placeholder: 'Responsive behavior...',
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story shows responsive behavior. Try resizing the viewport to see different maxCount values.'
      }
    }
  }
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Se,Ce,xe;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    options: [],
    emptyIndicator: <div className="py-6 flex flex-col items-center text-center">
        <IconStar className="h-12 w-12 text-body-secondary mb-2" />
        <p className="text-body-secondary">No options available</p>
        <p className="text-xs text-body-secondary mt-1">
          Try a different search term
        </p>
      </div>,
    placeholder: 'Custom empty state...',
    onValueChange: values => console.log('Selected values:', values)
  }
}`,...(xe=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Ve,Ne,Oe;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    filterByValueAndLabel: true,
    placeholder: 'Search by label or value...',
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.'
      }
    }
  }
}`,...(Oe=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Ae,we,We;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    placeholder: 'Custom render...',
    renderOption: ({
      option,
      location,
      isSelected,
      onRemove
    }: RenderOptionContext) => {
      if (location === 'badge') {
        return <div className="gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border">
            {option.icon && React.createElement(option.icon, {
            className: 'h-3 w-3'
          })}
            <span className="text-sm font-medium">{option.label}</span>
            {onRemove && <button onClick={e => {
            e.stopPropagation();
            onRemove();
          }} className="ml-1 hover:bg-interactive-alert-hover rounded p-0.5">
                <IconX className="h-3 w-3 text-interactive-alert-default" />
              </button>}
          </div>;
      }

      // Render in dropdown
      return <div className="gap-2 flex items-center">
          {option.icon && React.createElement(option.icon, {
          className: \`h-4 w-4 \${isSelected ? 'text-interactive-primary-default' : 'text-body-secondary'}\`
        })}
          <span className={isSelected ? 'font-bold text-interactive-primary-default' : ''}>
            {option.label}
          </span>
          {isSelected && <span className="text-xs text-body-success ml-auto">
              ✓ Selected
            </span>}
        </div>;
    },
    onValueChange: values => console.log('Selected values:', values)
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button.'
      }
    }
  }
}`,...(We=(we=C.parameters)==null?void 0:we.docs)==null?void 0:We.source}}};const Sa=["Default","WithDefaultValues","WithIcons","Grouped","WithDisabledOptions","Secondary","Destructive","MaxCountLimited","NoSearch","NoSelectAll","CloseOnSelect","SingleLine","AutoSize","Disabled","WithAnimation","Responsive","CustomEmptyState","FilterByValueAndLabel","CustomRenderOption"];export{b as AutoSize,m as CloseOnSelect,y as CustomEmptyState,C as CustomRenderOption,s as Default,i as Destructive,g as Disabled,S as FilterByValueAndLabel,n as Grouped,d as MaxCountLimited,u as NoSearch,p as NoSelectAll,f as Responsive,c as Secondary,h as SingleLine,v as WithAnimation,t as WithDefaultValues,r as WithDisabledOptions,l as WithIcons,Sa as __namedExportsOrder,ya as default};
