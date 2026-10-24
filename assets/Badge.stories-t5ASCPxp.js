import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,r as a}from"./DataDisplayAtoms-B6Eb2bd2.js";var o=t({AllVariants:()=>f,Explicit:()=>d,Plan:()=>u,Playground:()=>l,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),s=r(),c={title:`Data Display/Badge`,component:a,tags:[`!autodocs`,`tier-atom`],argTypes:{Type:{control:`inline-radio`,options:[`Plan`,`Explicit`],description:"Figma variant property `Type`",table:{category:`Figma variants`,defaultValue:{summary:`Plan`}}},Label:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`E`}}}},args:{Type:`Plan`,Label:`E`},parameters:{figma:{name:`Badge`,page:`➜ Banners & Badges`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3545`},docs:{description:{component:`**Figma:** \`Badge\` on page \`➜ Banners & Badges\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3545)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Small label on artwork or an avatar: Plan shows the subscription plan, Explicit marks explicit content.  
> Usage rules: Type Plan: plan label (plus) on the profile avatar. Type Explicit: the "E" marker on explicit songs and albums. Not for long text or actions.  
> Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark. Include the meaning in the parent accessible name (Explicit).  
> Keywords: badge, explicit, label  

**When to use:** Type Plan: plan label (plus) on the profile avatar; Type Explicit: the "E" marker on explicit songs and albums

**When not to use:** Long text or actions

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},l={},u={name:`Plan`,args:{Type:`Plan`}},d={name:`Explicit`,args:{Type:`Explicit`}},f={name:`All variants`,render:e=>(0,s.jsx)(`div`,{className:`sb-row`,children:[`Plan`,`Explicit`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Type=`,t]}),(0,s.jsx)(a,{...e,Type:t})]},t))})},p=[`Playground`,`Plan`,`Explicit`,`AllVariants`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Plan",
  args: {
    "Type": "Plan"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Explicit",
  args: {
    "Type": "Explicit"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Plan", "Explicit"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Type={x}</div>\r
          <Badge {...args} {...{
        "Type": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...f.parameters?.docs?.source}}}})))()}export{m as n,o as t};