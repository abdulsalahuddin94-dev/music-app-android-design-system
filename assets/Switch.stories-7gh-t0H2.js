import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a,u as o}from"./FormElements-UO9TVSAH.js";var s=t({AllVariants:()=>y,False:()=>d,InUse:()=>b,Playground:()=>u,StateDisabled:()=>h,StateEnabled:()=>p,StateFocused:()=>_,StateHovered:()=>g,StatePressed:()=>m,States:()=>v,True:()=>f,__namedExportsOrder:()=>x,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),o(),c=r(),l={title:`Form Elements/Switch`,component:i,tags:[`!autodocs`,`tier-atom`],argTypes:{Selected:{control:`inline-radio`,options:[`False`,`True`],description:"Figma variant property `Selected`",table:{category:`Figma variants`,defaultValue:{summary:`False`}}},State:{control:`select`,options:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}}},args:{Selected:`False`,State:`Enabled`},parameters:{figma:{name:`Switch`,page:`➜ Toggles`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-338`},docs:{description:{component:`**Figma:** \`Switch\` on page \`➜ Toggles\` (Form Elements). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-338)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Turns one setting on or off immediately, such as AI Mix in the player.  
> Usage rules: A binary setting that applies at once, without a Save button. Not for choices that need a confirm step (use Checkbox). Not for picking one of several options (use Radio or Filter Chip).  
> Accessibility: Track and handle: 3:1 (WCAG 1.4.11) in Light, Dark. Announce the setting name and its on/off state. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: switch, toggle, on off, setting  

**When to use:** A binary setting that applies at once, without a Save button

**When not to use:** Choices that need a confirm step (use Checkbox); Picking one of several options (use Radio or Filter Chip)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`False`,args:{Selected:`False`}},f={name:`True`,args:{Selected:`True`}},p={name:`State=Enabled`,args:{State:`Enabled`}},m={name:`State=Pressed`,args:{State:`Pressed`}},h={name:`State=Disabled`,args:{State:`Disabled`}},g={name:`State=Hovered`,args:{State:`Hovered`}},_={name:`State=Focused`,args:{State:`Focused`}},v={name:`States`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,c.jsx)(i,{...e,State:t})]},t))})},y={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-col`,children:[`False`,`True`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Selected=`,t]}),(0,c.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`].map(n=>(0,c.jsx)(i,{...e,Selected:t,State:n},n))})]},t))})},b={name:`In use (interactive)`,render:()=>(0,c.jsx)(a,{})},x=[`Playground`,`False`,`True`,`StateEnabled`,`StatePressed`,`StateDisabled`,`StateHovered`,`StateFocused`,`States`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  name: "State=Hovered",
  args: {
    "State": "Hovered"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "State=Focused",
  args: {
    "State": "Focused"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Pressed", "Disabled", "Hovered", "Focused"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <Switch {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["False", "True"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Selected={x}</div>\r
          <div className="sb-row">{["Enabled", "Pressed", "Disabled", "Hovered", "Focused"].map(y => <Switch key={y} {...args} {...{
          "Selected": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <SwitchInUse />
}`,...b.parameters?.docs?.source}}}})))()}export{S as n,l as r,s as t};