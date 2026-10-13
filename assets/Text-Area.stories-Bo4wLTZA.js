import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,u as a}from"./FormElements-Cx9ooVcI.js";var o=t({AllVariants:()=>g,Disabled:()=>m,Enabled:()=>u,Error:()=>p,Focused:()=>f,Hovered:()=>d,Playground:()=>l,States:()=>h,__namedExportsOrder:()=>_,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),s=r(),c={title:`Form Elements/Text Area`,component:i,tags:[`!autodocs`,`tier-molecule`],argTypes:{State:{control:`select`,options:[`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}},Placeholder:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Write a message`}}}},args:{State:`Enabled`,Placeholder:`Write a message`},parameters:{figma:{name:`Text Area`,page:`➜ Text Area`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-638`},docs:{description:{component:`**Figma:** \`Text Area\` on page \`➜ Text Area\` (Form Elements). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-638)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: Multi-line text input for comments, descriptions and notes.  
> Usage rules: Free text longer than one line, such as a playlist description or feedback. Not for short single values like a name or email (use Text Field).  
> Accessibility: Text: 4.5:1 (WCAG 1.4.3) in Light, Dark. Container border: 3:1 (WCAG 1.4.11) in Light, Dark. Pair it with a visible label above it. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: textarea, multi-line, comment, description  

**When to use:** Free text longer than one line, such as a playlist description or feedback

**When not to use:** Short single values like a name or email (use Text Field)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},l={},u={name:`Enabled`,args:{State:`Enabled`}},d={name:`Hovered`,args:{State:`Hovered`}},f={name:`Focused`,args:{State:`Focused`}},p={name:`Error`,args:{State:`Error`}},m={name:`Disabled`,args:{State:`Disabled`}},h={name:`States`,render:e=>(0,s.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,s.jsx)(i,{...e,State:t})]},t))})},g={name:`All variants`,render:e=>(0,s.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,s.jsx)(i,{...e,State:t})]},t))})},_=[`Playground`,`Enabled`,`Hovered`,`Focused`,`Error`,`Disabled`,`States`,`AllVariants`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Enabled",
  args: {
    "State": "Enabled"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Hovered",
  args: {
    "State": "Hovered"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Focused",
  args: {
    "State": "Focused"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    "State": "Error"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    "State": "Disabled"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Hovered", "Focused", "Error", "Disabled"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <TextArea {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Enabled", "Hovered", "Focused", "Error", "Disabled"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <TextArea {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...g.parameters?.docs?.source}}}})))()}export{v as n,o as t};