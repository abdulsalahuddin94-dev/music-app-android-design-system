import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{v as i,w as a,y as o}from"./DataDisplay-zzZKXRyA.js";var s=t({AllVariants:()=>p,Bottom:()=>d,InUse:()=>m,Playground:()=>u,Side:()=>f,__namedExportsOrder:()=>h,default:()=>l}),c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),c=r(),l={title:`Data Display/Sheet`,component:i,tags:[`!autodocs`,`tier-organism`],argTypes:{Position:{control:`inline-radio`,options:[`Bottom`,`Side`],description:"Figma variant property `Position`",table:{category:`Figma variants`,defaultValue:{summary:`Bottom`}}},Title:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Sheet title`}}}},args:{Position:`Bottom`,Title:`Sheet title`},parameters:{figma:{name:`Sheet`,page:`➜ Dialogs & Sheets`,tier:`Organism`,order:3},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=11-744`},docs:{description:{component:`**Figma:** \`Sheet\` on page \`➜ Dialogs & Sheets\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=11-744)

**Tier:** Organism

**Use:** 

**Figma description:**

> Purpose: Bottom or side surface for supplemental tasks such as the queue or a track menu.  
> Usage rules: Bottom on phones for menus and details. Side on large screens. Not for blocking confirmations (use Dialog).  
> Accessibility: Title: 4.5:1 (WCAG 1.4.3) in Light, Dark. Has a visible close or drag handle and closes with Back.  
> Keywords: sheet, bottom sheet, menu  

**When to use:** Bottom on phones for menus and details; Side on large screens

**When not to use:** Blocking confirmations (use Dialog)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`Bottom`,args:{Position:`Bottom`}},f={name:`Side`,args:{Position:`Side`}},p={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Bottom`,`Side`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Position=`,t]}),(0,c.jsx)(i,{...e,Position:t})]},t))})},m={name:`In use (interactive)`,render:()=>(0,c.jsx)(o,{})},h=[`Playground`,`Bottom`,`Side`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Bottom",
  args: {
    "Position": "Bottom"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Side",
  args: {
    "Position": "Side"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Bottom", "Side"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Position={x}</div>\r
          <Sheet {...args} {...{
        "Position": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <SheetInUse />
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,s as t};