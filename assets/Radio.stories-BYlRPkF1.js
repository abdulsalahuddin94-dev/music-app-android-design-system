import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,r as a,u as o}from"./FormElements-UO9TVSAH.js";var s=t({AllVariants:()=>b,False:()=>d,InUse:()=>x,Playground:()=>u,StateDisabled:()=>_,StateEnabled:()=>p,StateError:()=>v,StateFocused:()=>h,StateHovered:()=>m,StatePressed:()=>g,States:()=>y,True:()=>f,__namedExportsOrder:()=>S,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),o(),c=r(),l={title:`Form Elements/Radio`,component:a,tags:[`!autodocs`,`tier-atom`],argTypes:{Selected:{control:`inline-radio`,options:[`False`,`True`],description:"Figma variant property `Selected`",table:{category:`Figma variants`,defaultValue:{summary:`False`}}},State:{control:`select`,options:[`Enabled`,`Hovered`,`Focused`,`Pressed`,`Disabled`,`Error`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}}},args:{Selected:`False`,State:`Enabled`},parameters:{figma:{name:`Radio`,page:`➜ Radio Buttons`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-692`},docs:{description:{component:`**Figma:** \`Radio\` on page \`➜ Radio Buttons\` (Form Elements). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=10-692)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Single choice from 2 to 6 visible options.  
> Usage rules: 2 to 6 mutually exclusive options that should all stay visible. Not for 7 or more options (use Text Field with Type Dropdown). Not for several answers allowed (use Checkbox).  
> Accessibility: Ring and dot: 3:1 (WCAG 1.4.11) in Light, Dark. Group the options under one visible question. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: radio, single choice, option  

**When to use:** 2 to 6 mutually exclusive options that should all stay visible

**When not to use:** 7 or more options (use Text Field with Type Dropdown); Several answers allowed (use Checkbox)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`False`,args:{Selected:`False`}},f={name:`True`,args:{Selected:`True`}},p={name:`State=Enabled`,args:{State:`Enabled`}},m={name:`State=Hovered`,args:{State:`Hovered`}},h={name:`State=Focused`,args:{State:`Focused`}},g={name:`State=Pressed`,args:{State:`Pressed`}},_={name:`State=Disabled`,args:{State:`Disabled`}},v={name:`State=Error`,args:{State:`Error`}},y={name:`States`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Hovered`,`Focused`,`Pressed`,`Disabled`,`Error`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,c.jsx)(a,{...e,State:t})]},t))})},b={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-col`,children:[`False`,`True`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Selected=`,t]}),(0,c.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Hovered`,`Focused`,`Pressed`,`Disabled`,`Error`].map(n=>(0,c.jsx)(a,{...e,Selected:t,State:n},n))})]},t))})},x={name:`In use (interactive)`,render:()=>(0,c.jsx)(i,{})},S=[`Playground`,`False`,`True`,`StateEnabled`,`StateHovered`,`StateFocused`,`StatePressed`,`StateDisabled`,`StateError`,`States`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  name: "State=Pressed",
  args: {
    "State": "Pressed"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "State=Disabled",
  args: {
    "State": "Disabled"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "State=Error",
  args: {
    "State": "Error"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Hovered", "Focused", "Pressed", "Disabled", "Error"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <Radio {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["False", "True"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Selected={x}</div>\r
          <div className="sb-row">{["Enabled", "Hovered", "Focused", "Pressed", "Disabled", "Error"].map(y => <Radio key={y} {...args} {...{
          "Selected": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <RadioInUse />
}`,...x.parameters?.docs?.source}}}})))()}export{C as n,l as r,s as t};