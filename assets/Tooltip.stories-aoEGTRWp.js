import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{C as i,S as a,w as o}from"./DataDisplay-CKSMx7Nt.js";var s=t({AllVariants:()=>p,InUse:()=>m,Plain:()=>d,Playground:()=>u,Rich:()=>f,__namedExportsOrder:()=>h,default:()=>l}),c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),o(),c=r(),l={title:`Data Display/Tooltip`,component:a,tags:[`!autodocs`,`tier-molecule`],argTypes:{Type:{control:`inline-radio`,options:[`Plain`,`Rich`],description:"Figma variant property `Type`",table:{category:`Figma variants`,defaultValue:{summary:`Plain`}}},Text:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Tooltip label`}}}},args:{Type:`Plain`,Text:`Tooltip label`},parameters:{figma:{name:`Tooltip`,page:`➜ Tooltips`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-719`},docs:{description:{component:`**Figma:** \`Tooltip\` on page \`➜ Tooltips\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-719)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: Short help text on long press or focus; Rich adds a title and longer text.  
> Usage rules: Explaining an icon-only control. Not for essential instructions or errors (show them on screen).  
> Accessibility: Text: 4.5:1 (WCAG 1.4.3) in Light, Dark. Also reachable by keyboard focus.  
> Keywords: tooltip, help, hint  

**When to use:** Explaining an icon-only control

**When not to use:** Essential instructions or errors (show them on screen)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`Plain`,args:{Type:`Plain`}},f={name:`Rich`,args:{Type:`Rich`}},p={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Plain`,`Rich`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Type=`,t]}),(0,c.jsx)(a,{...e,Type:t})]},t))})},m={name:`In use (interactive)`,render:()=>(0,c.jsx)(i,{})},h=[`Playground`,`Plain`,`Rich`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Plain",
  args: {
    "Type": "Plain"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Rich",
  args: {
    "Type": "Rich"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Plain", "Rich"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Type={x}</div>\r
          <Tooltip {...args} {...{
        "Type": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <TooltipInUse />
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,s as t};