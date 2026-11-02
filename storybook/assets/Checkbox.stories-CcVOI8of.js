import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a,u as o}from"./FormElements-UO9TVSAH.js";var s=t({AllVariants:()=>y,False:()=>d,InUse:()=>b,Playground:()=>u,StateDisabled:()=>g,StateEnabled:()=>p,StateError:()=>_,StateFocused:()=>m,StatePressed:()=>h,States:()=>v,True:()=>f,__namedExportsOrder:()=>x,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),o(),c=r(),l={title:`Form Elements/Checkbox`,component:a,tags:[`!autodocs`,`tier-atom`],argTypes:{Selected:{control:`inline-radio`,options:[`False`,`True`],description:"Figma variant property `Selected`",table:{category:`Figma variants`,defaultValue:{summary:`False`}}},State:{control:`select`,options:[`Enabled`,`Focused`,`Pressed`,`Disabled`,`Error`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}}},args:{Selected:`False`,State:`Enabled`},parameters:{figma:{name:`Checkbox`,page:`➜ Checkbox`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-665`},docs:{description:{component:`**Figma:** \`Checkbox\` on page \`➜ Checkbox\` (Form Elements). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-665)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Independent on/off choice in a list of options, or a single consent.  
> Usage rules: Selecting several items at once. One consent or opt-in line. Not for settings that apply immediately (use Switch). Not for exactly one choice from a list (use Radio).  
> Accessibility: Box border and check: 3:1 (WCAG 1.4.11) in Light, Dark. Label the whole row, not only the box. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Behavior: Error state marks a required choice that is missing.  
> Keywords: checkbox, multi-select, consent  

**When to use:** Selecting several items at once; One consent or opt-in line

**When not to use:** Settings that apply immediately (use Switch); Exactly one choice from a list (use Radio)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`False`,args:{Selected:`False`}},f={name:`True`,args:{Selected:`True`}},p={name:`State=Enabled`,args:{State:`Enabled`}},m={name:`State=Focused`,args:{State:`Focused`}},h={name:`State=Pressed`,args:{State:`Pressed`}},g={name:`State=Disabled`,args:{State:`Disabled`}},_={name:`State=Error`,args:{State:`Error`}},v={name:`States`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Focused`,`Pressed`,`Disabled`,`Error`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,c.jsx)(a,{...e,State:t})]},t))})},y={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-col`,children:[`False`,`True`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Selected=`,t]}),(0,c.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Focused`,`Pressed`,`Disabled`,`Error`].map(n=>(0,c.jsx)(a,{...e,Selected:t,State:n},n))})]},t))})},b={name:`In use (interactive)`,render:()=>(0,c.jsx)(i,{})},x=[`Playground`,`False`,`True`,`StateEnabled`,`StateFocused`,`StatePressed`,`StateDisabled`,`StateError`,`States`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "False",
  args: {
    "Selected": "False"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "True",
  args: {
    "Selected": "True"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "State=Enabled",
  args: {
    "State": "Enabled"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "State=Focused",
  args: {
    "State": "Focused"
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
  name: "State=Error",
  args: {
    "State": "Error"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Focused", "Pressed", "Disabled", "Error"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <Checkbox {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["False", "True"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Selected={x}</div>\r
          <div className="sb-row">{["Enabled", "Focused", "Pressed", "Disabled", "Error"].map(y => <Checkbox key={y} {...args} {...{
          "Selected": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <CheckboxInUse />
}`,...b.parameters?.docs?.source}}}})))()}export{S as n,l as r,s as t};