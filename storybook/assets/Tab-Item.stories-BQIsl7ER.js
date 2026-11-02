import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{g as i,v as a}from"./Navigation-DHof4Ggp.js";var o=t({AllVariants:()=>_,False:()=>u,Playground:()=>l,StateDisabled:()=>h,StateEnabled:()=>f,StateFocused:()=>p,StatePressed:()=>m,States:()=>g,True:()=>d,__namedExportsOrder:()=>v,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),a(),s=r(),c={title:`Navigation/Tab Item`,component:i,tags:[`!autodocs`,`tier-atom`],argTypes:{Selected:{control:`inline-radio`,options:[`False`,`True`],description:"Figma variant property `Selected`",table:{category:`Figma variants`,defaultValue:{summary:`False`}}},State:{control:`select`,options:[`Enabled`,`Focused`,`Pressed`,`Disabled`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}},Label:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`MUSIC`}}}},args:{Selected:`False`,State:`Enabled`,Label:`MUSIC`},parameters:{figma:{name:`Tab Item`,page:`➜ Pagination & Tabs`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-316`},docs:{description:{component:`**Figma:** \`Tab Item\` on page \`➜ Pagination & Tabs\` (Navigation). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-316)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: One tab label inside Primary Tabs.  
> Usage rules: Inside Primary Tabs only, for Music / Podcasts style switching. Not for on its own (use Primary Tabs). Not for filtering a list (use Filter Chip).  
> Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark. Selected tab is announced as selected. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: tab, segment  

**When to use:** Inside Primary Tabs only, for Music / Podcasts style switching

**When not to use:** On its own (use Primary Tabs); Filtering a list (use Filter Chip)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},l={},u={name:`False`,args:{Selected:`False`}},d={name:`True`,args:{Selected:`True`}},f={name:`State=Enabled`,args:{State:`Enabled`}},p={name:`State=Focused`,args:{State:`Focused`}},m={name:`State=Pressed`,args:{State:`Pressed`}},h={name:`State=Disabled`,args:{State:`Disabled`}},g={name:`States`,render:e=>(0,s.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Focused`,`Pressed`,`Disabled`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,s.jsx)(i,{...e,State:t})]},t))})},_={name:`All variants`,render:e=>(0,s.jsx)(`div`,{className:`sb-col`,children:[`False`,`True`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Selected=`,t]}),(0,s.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Focused`,`Pressed`,`Disabled`].map(n=>(0,s.jsx)(i,{...e,Selected:t,State:n},n))})]},t))})},v=[`Playground`,`False`,`True`,`StateEnabled`,`StateFocused`,`StatePressed`,`StateDisabled`,`States`,`AllVariants`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "False",
  args: {
    "Selected": "False"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "True",
  args: {
    "Selected": "True"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "State=Enabled",
  args: {
    "State": "Enabled"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "State=Focused",
  args: {
    "State": "Focused"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "State=Pressed",
  args: {
    "State": "Pressed"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "State=Disabled",
  args: {
    "State": "Disabled"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Focused", "Pressed", "Disabled"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <TabItem {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["False", "True"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Selected={x}</div>\r
          <div className="sb-row">{["Enabled", "Focused", "Pressed", "Disabled"].map(y => <TabItem key={y} {...args} {...{
          "Selected": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,..._.parameters?.docs?.source}}}})))()}export{y as n,o as t};