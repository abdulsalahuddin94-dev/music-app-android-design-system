import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./Icon-DVXcWlef.js";import{c as o,v as s}from"./Navigation-ZDRKmdD-.js";var c=t({AllVariants:()=>v,False:()=>f,Playground:()=>d,StateDisabled:()=>g,StateEnabled:()=>m,StatePressed:()=>h,States:()=>_,True:()=>p,__namedExportsOrder:()=>y,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),s(),a(),l=r(),u={title:`Navigation/Navigation Item`,component:o,tags:[`!autodocs`,`tier-atom`],argTypes:{Selected:{control:`inline-radio`,options:[`False`,`True`],description:"Figma variant property `Selected`",table:{category:`Figma variants`,defaultValue:{summary:`False`}}},State:{control:`inline-radio`,options:[`Enabled`,`Pressed`,`Disabled`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}},Label:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Explore`}}},Icon:{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/explore`}}}},args:{Selected:`False`,State:`Enabled`,Label:`Explore`,Icon:`Icon/explore`},parameters:{figma:{name:`Navigation Item`,page:`➜ Pagination & Tabs`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-325`},docs:{description:{component:`**Figma:** \`Navigation Item\` on page \`➜ Pagination & Tabs\` (Navigation). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-325)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: One destination inside Bottom Navigation: icon plus label.  
> Usage rules: Inside Bottom Navigation only. Not for actions on the current screen (use Icon Button).  
> Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark. Selected item is announced as selected. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: navigation, tab bar, destination  

**When to use:** Inside Bottom Navigation only

**When not to use:** Actions on the current screen (use Icon Button)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},d={},f={name:`False`,args:{Selected:`False`}},p={name:`True`,args:{Selected:`True`}},m={name:`State=Enabled`,args:{State:`Enabled`}},h={name:`State=Pressed`,args:{State:`Pressed`}},g={name:`State=Disabled`,args:{State:`Disabled`}},_={name:`States`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,l.jsx)(o,{...e,State:t})]},t))})},v={name:`All variants`,render:e=>(0,l.jsx)(`div`,{className:`sb-col`,children:[`False`,`True`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Selected=`,t]}),(0,l.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`].map(n=>(0,l.jsx)(o,{...e,Selected:t,State:n},n))})]},t))})},y=[`Playground`,`False`,`True`,`StateEnabled`,`StatePressed`,`StateDisabled`,`States`,`AllVariants`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "False",
  args: {
    "Selected": "False"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "True",
  args: {
    "Selected": "True"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "State=Enabled",
  args: {
    "State": "Enabled"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "State=Pressed",
  args: {
    "State": "Pressed"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "State=Disabled",
  args: {
    "State": "Disabled"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Pressed", "Disabled"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <NavigationItem {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["False", "True"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Selected={x}</div>\r
          <div className="sb-row">{["Enabled", "Pressed", "Disabled"].map(y => <NavigationItem key={y} {...args} {...{
          "Selected": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}}})))()}export{b as n,c as t};