import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./Icon-Dzxc4OEO.js";import{r as o,v as s}from"./Navigation-BFoqULIl.js";var c=t({AllVariants:()=>T,Filled:()=>f,Icons:()=>w,Neutral:()=>g,Outlined:()=>m,OutlinedAccent:()=>_,Playground:()=>d,StateDisabled:()=>b,StateEnabled:()=>v,StateFocused:()=>S,StateHovered:()=>x,StatePressed:()=>y,States:()=>C,Text:()=>h,Tonal:()=>p,__namedExportsOrder:()=>E,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),s(),a(),l=r(),u={title:`Navigation/Button`,component:o,tags:[`!autodocs`,`tier-atom`],argTypes:{Style:{control:`select`,options:[`Filled`,`Tonal`,`Outlined`,`Text`,`Neutral`,`Outlined Accent`],description:"Figma variant property `Style`",table:{category:`Figma variants`,defaultValue:{summary:`Filled`}}},State:{control:`select`,options:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}},"Label text":{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Button`}}},"Show Leading Icon":{control:`boolean`,description:`Figma boolean property`,table:{category:`Figma properties`,defaultValue:{summary:`false`}}},"Leading Icon":{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/add`}}}},args:{Style:`Filled`,State:`Enabled`,"Label text":`Button`,"Show Leading Icon":!1,"Leading Icon":`Icon/add`},parameters:{figma:{name:`Button`,page:`➜ Buttons & links`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-202`},docs:{description:{component:`**Figma:** \`Button\` on page \`➜ Buttons & links\` (Navigation). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-202)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Starts an action; Style sets the emphasis.  
> Usage rules: Filled for the one main action of a screen. Tonal for secondary actions. Outlined for alternatives such as New playlist. Text for low-emphasis actions in dialogs. Neutral (gray pill) for More in section headers. Outlined Accent (tertiary purple) for a featured discovery action such as Radar songs around you. Not for icon-only actions (use Icon Button). Not for filtering content (use Filter Chip). Not for moving between top-level destinations (use Bottom Navigation).  
> Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark. Outlined border: 3:1 (WCAG 1.4.11) in Light, Dark. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Behavior: Show Leading Icon turns the icon on; pick it with the Leading Icon swap. Disabled uses on_surface at 38% for the label.  
> Keywords: button, action, cta  

**When to use:** Filled for the one main action of a screen; Tonal for secondary actions; Outlined for alternatives such as New playlist; Text for low-emphasis actions in dialogs; Neutral (gray pill) for More in section headers; Outlined Accent (tertiary purple) for a featured discovery action such as Radar songs around you

**When not to use:** Icon-only actions (use Icon Button); Filtering content (use Filter Chip); Moving between top-level destinations (use Bottom Navigation)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},d={},f={name:`Filled`,args:{Style:`Filled`}},p={name:`Tonal`,args:{Style:`Tonal`}},m={name:`Outlined`,args:{Style:`Outlined`}},h={name:`Text`,args:{Style:`Text`}},g={name:`Neutral`,args:{Style:`Neutral`}},_={name:`Outlined Accent`,args:{Style:`Outlined Accent`}},v={name:`State=Enabled`,args:{State:`Enabled`}},y={name:`State=Pressed`,args:{State:`Pressed`}},b={name:`State=Disabled`,args:{State:`Disabled`}},x={name:`State=Hovered`,args:{State:`Hovered`}},S={name:`State=Focused`,args:{State:`Focused`}},C={name:`States`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,l.jsx)(o,{...e,State:t})]},t))})},w={name:`Icons`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[[`Show Leading Icon`,{"Show Leading Icon":!0}]].map(([t,n])=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{className:`sb-cell-label ts-xs-medium`,children:t}),(0,l.jsx)(o,{...e,...n})]},t))})},T={name:`All variants`,render:e=>(0,l.jsx)(`div`,{className:`sb-col`,children:[`Filled`,`Tonal`,`Outlined`,`Text`,`Neutral`,`Outlined Accent`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Style=`,t]}),(0,l.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`].map(n=>(0,l.jsx)(o,{...e,Style:t,State:n},n))})]},t))})},E=[`Playground`,`Filled`,`Tonal`,`Outlined`,`Text`,`Neutral`,`OutlinedAccent`,`StateEnabled`,`StatePressed`,`StateDisabled`,`StateHovered`,`StateFocused`,`States`,`Icons`,`AllVariants`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Filled",
  args: {
    "Style": "Filled"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Tonal",
  args: {
    "Style": "Tonal"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Outlined",
  args: {
    "Style": "Outlined"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Text",
  args: {
    "Style": "Text"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Neutral",
  args: {
    "Style": "Neutral"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Outlined Accent",
  args: {
    "Style": "Outlined Accent"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "State=Enabled",
  args: {
    "State": "Enabled"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "State=Pressed",
  args: {
    "State": "Pressed"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "State=Disabled",
  args: {
    "State": "Disabled"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "State=Hovered",
  args: {
    "State": "Hovered"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "State=Focused",
  args: {
    "State": "Focused"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Pressed", "Disabled", "Hovered", "Focused"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <Button {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Icons',
  render: args => <div className="sb-row">\r
      {[["Show Leading Icon", {
      "Show Leading Icon": true
    }]].map(([label, extra]: any) => <div key={label}>\r
          <div className="sb-cell-label ts-xs-medium">{label}</div>\r
          <Button {...args} {...extra} />\r
        </div>)}\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["Filled", "Tonal", "Outlined", "Text", "Neutral", "Outlined Accent"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Style={x}</div>\r
          <div className="sb-row">{["Enabled", "Pressed", "Disabled", "Hovered", "Focused"].map(y => <Button key={y} {...args} {...{
          "Style": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...T.parameters?.docs?.source}}}})))()}export{D as n,u as r,c as t};