import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a,w as o}from"./DataDisplay-BYME2dVL.js";var s=t({AllVariants:()=>p,Basic:()=>d,InUse:()=>m,List:()=>f,Playground:()=>u,__namedExportsOrder:()=>h,default:()=>l}),c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),o(),c=r(),l={title:`Data Display/Dialog`,component:a,tags:[`!autodocs`,`tier-organism`],argTypes:{Type:{control:`inline-radio`,options:[`Basic`,`List`],description:"Figma variant property `Type`",table:{category:`Figma variants`,defaultValue:{summary:`Basic`}}},Title:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Confirm action`}}}},args:{Type:`Basic`,Title:`Confirm action`},parameters:{figma:{name:`Dialog`,page:`➜ Dialogs & Sheets`,tier:`Organism`,order:3},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=11-737`},docs:{description:{component:`**Figma:** \`Dialog\` on page \`➜ Dialogs & Sheets\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=11-737)

**Tier:** Organism

**Use:** 

**Figma description:**

> Purpose: Modal window for a focused decision that blocks the screen until answered.  
> Usage rules: Basic for confirmations. List to pick from a short list. Not for non-blocking messages. Not for supplemental tasks (use Sheet).  
> Accessibility: Title and body: 4.5:1 (WCAG 1.4.3) in Light, Dark. Focus moves into the dialog and returns on close. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: dialog, modal, confirm  

**When to use:** Basic for confirmations; List to pick from a short list

**When not to use:** Non-blocking messages; Supplemental tasks (use Sheet)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`Basic`,args:{Type:`Basic`}},f={name:`List`,args:{Type:`List`}},p={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Basic`,`List`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Type=`,t]}),(0,c.jsx)(a,{...e,Type:t})]},t))})},m={name:`In use (interactive)`,render:()=>(0,c.jsx)(i,{})},h=[`Playground`,`Basic`,`List`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Basic",
  args: {
    "Type": "Basic"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "List",
  args: {
    "Type": "List"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Basic", "List"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Type={x}</div>\r
          <Dialog {...args} {...{
        "Type": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <DialogInUse />
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,s as t};