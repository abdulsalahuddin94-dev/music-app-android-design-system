import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{l as i,u as a}from"./FormElements-Cx9ooVcI.js";var o=t({AllVariants:()=>y,Dropdown:()=>f,Filled:()=>u,Outlined:()=>d,Playground:()=>l,StateDisabled:()=>_,StateEnabled:()=>p,StateError:()=>g,StateFocused:()=>h,StateHovered:()=>m,States:()=>v,__namedExportsOrder:()=>b,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),s=r(),c={title:`Form Elements/Text Field`,component:i,tags:[`!autodocs`,`tier-molecule`],argTypes:{Type:{control:`inline-radio`,options:[`Filled`,`Outlined`,`Dropdown`],description:"Figma variant property `Type`",table:{category:`Figma variants`,defaultValue:{summary:`Filled`}}},State:{control:`select`,options:[`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}},Label:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Label`}}},Value:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Value`}}}},args:{Type:`Filled`,State:`Enabled`,Label:`Label`,Value:`Value`},parameters:{figma:{name:`Text Field`,page:`➜ Input Fields and Dropdown`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-628`},docs:{description:{component:`**Figma:** \`Text Field\` on page \`➜ Input Fields and Dropdown\` (Form Elements). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-628)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: Single-line input for short values; Type Dropdown picks one value from 7 or more options.  
> Usage rules: Filled for text entry in forms. Outlined where a form sits on a busy surface. Dropdown to pick one value from 7 or more options. Not for long, multi-line text (use Text Area). Not for searching the library or catalog (use Search Bar). Not for 2 to 6 visible choices (use Radio).  
> Accessibility: Label and value: 4.5:1 (WCAG 1.4.3) in Light, Dark. Container border / indicator: 3:1 (WCAG 1.4.11) in Light, Dark. Keep a persistent label; never use the placeholder as the only label. Error state shows a text message, not only the red color. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Behavior: Focused shows the 2 dp active indicator in primary. Error replaces the supporting text with the error message.  
> Keywords: input, text field, form, dropdown, select  

**When to use:** Filled for text entry in forms; Outlined where a form sits on a busy surface; Dropdown to pick one value from 7 or more options

**When not to use:** Long, multi-line text (use Text Area); Searching the library or catalog (use Search Bar); 2 to 6 visible choices (use Radio)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},l={},u={name:`Filled`,args:{Type:`Filled`}},d={name:`Outlined`,args:{Type:`Outlined`}},f={name:`Dropdown`,args:{Type:`Dropdown`}},p={name:`State=Enabled`,args:{State:`Enabled`}},m={name:`State=Hovered`,args:{State:`Hovered`}},h={name:`State=Focused`,args:{State:`Focused`}},g={name:`State=Error`,args:{State:`Error`}},_={name:`State=Disabled`,args:{State:`Disabled`}},v={name:`States`,render:e=>(0,s.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,s.jsx)(i,{...e,State:t})]},t))})},y={name:`All variants`,render:e=>(0,s.jsx)(`div`,{className:`sb-col`,children:[`Filled`,`Outlined`,`Dropdown`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Type=`,t]}),(0,s.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`].map(n=>(0,s.jsx)(i,{...e,Type:t,State:n},n))})]},t))})},b=[`Playground`,`Filled`,`Outlined`,`Dropdown`,`StateEnabled`,`StateHovered`,`StateFocused`,`StateError`,`StateDisabled`,`States`,`AllVariants`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Filled",
  args: {
    "Type": "Filled"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Outlined",
  args: {
    "Type": "Outlined"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Dropdown",
  args: {
    "Type": "Dropdown"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "State=Enabled",
  args: {
    "State": "Enabled"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "State=Hovered",
  args: {
    "State": "Hovered"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "State=Focused",
  args: {
    "State": "Focused"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "State=Error",
  args: {
    "State": "Error"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "State=Disabled",
  args: {
    "State": "Disabled"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Hovered", "Focused", "Error", "Disabled"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <TextField {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["Filled", "Outlined", "Dropdown"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Type={x}</div>\r
          <div className="sb-row">{["Enabled", "Hovered", "Focused", "Error", "Disabled"].map(y => <TextField key={y} {...args} {...{
          "Type": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...y.parameters?.docs?.source}}}})))()}export{x as n,o as t};