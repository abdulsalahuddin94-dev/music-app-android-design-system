import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./Icon-DVXcWlef.js";import{o,v as s}from"./Navigation-ZDRKmdD-.js";var c=t({AllVariants:()=>S,Filled:()=>p,Inverse:()=>h,Playground:()=>d,Standard:()=>f,StateDisabled:()=>v,StateEnabled:()=>g,StateFocused:()=>b,StateHovered:()=>y,StatePressed:()=>_,States:()=>x,Tonal:()=>m,__namedExportsOrder:()=>C,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),s(),a(),l=r(),u={title:`Navigation/Icon Button`,component:o,tags:[`!autodocs`,`tier-atom`],argTypes:{Style:{control:`inline-radio`,options:[`Standard`,`Filled`,`Tonal`,`Inverse`],description:"Figma variant property `Style`",table:{category:`Figma variants`,defaultValue:{summary:`Standard`}}},State:{control:`select`,options:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Enabled`}}},Icon:{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/play_arrow`}}}},args:{Style:`Standard`,State:`Enabled`,Icon:`Icon/play_arrow`},parameters:{figma:{name:`Icon Button`,page:`➜ Buttons & links`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-297`},docs:{description:{component:`**Figma:** \`Icon Button\` on page \`➜ Buttons & links\` (Navigation). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=9-297)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Compact action shown as an icon only, such as Like, Share, More or Play.  
> Usage rules: Standard for toolbar and row actions (more_vert, favorite). Tonal for secondary actions such as Share on the player. Inverse for the main Play action. Filled for a strong single action on media. Not for actions that need a text label to be understood (use Button).  
> Accessibility: Icon on its container: 3:1 (WCAG 1.4.11) in Light, Dark. Give every instance an accessible name (Like, Share, Play). Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Behavior: Swap play_arrow to pause while playing. The icon fills the container minus its padding: resize the instance and set its padding to size the glyph (Play 64 dp with spacing/8 padding, Mini Player Play 40 dp with spacing/4).  
> Keywords: icon button, action, play, like, more  

**When to use:** Standard for toolbar and row actions (more_vert, favorite); Tonal for secondary actions such as Share on the player; Inverse for the main Play action; Filled for a strong single action on media

**When not to use:** Actions that need a text label to be understood (use Button)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},d={},f={name:`Standard`,args:{Style:`Standard`}},p={name:`Filled`,args:{Style:`Filled`}},m={name:`Tonal`,args:{Style:`Tonal`}},h={name:`Inverse`,args:{Style:`Inverse`}},g={name:`State=Enabled`,args:{State:`Enabled`}},_={name:`State=Pressed`,args:{State:`Pressed`}},v={name:`State=Disabled`,args:{State:`Disabled`}},y={name:`State=Hovered`,args:{State:`Hovered`}},b={name:`State=Focused`,args:{State:`Focused`}},x={name:`States`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,l.jsx)(o,{...e,State:t})]},t))})},S={name:`All variants`,render:e=>(0,l.jsx)(`div`,{className:`sb-col`,children:[`Standard`,`Filled`,`Tonal`,`Inverse`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Style=`,t]}),(0,l.jsx)(`div`,{className:`sb-row`,children:[`Enabled`,`Pressed`,`Disabled`,`Hovered`,`Focused`].map(n=>(0,l.jsx)(o,{...e,Style:t,State:n},n))})]},t))})},C=[`Playground`,`Standard`,`Filled`,`Tonal`,`Inverse`,`StateEnabled`,`StatePressed`,`StateDisabled`,`StateHovered`,`StateFocused`,`States`,`AllVariants`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Standard",
  args: {
    "Style": "Standard"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Filled",
  args: {
    "Style": "Filled"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Tonal",
  args: {
    "Style": "Tonal"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Inverse",
  args: {
    "Style": "Inverse"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "State=Enabled",
  args: {
    "State": "Enabled"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "State=Pressed",
  args: {
    "State": "Pressed"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "State=Disabled",
  args: {
    "State": "Disabled"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "State=Hovered",
  args: {
    "State": "Hovered"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "State=Focused",
  args: {
    "State": "Focused"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Enabled", "Pressed", "Disabled", "Hovered", "Focused"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <IconButton {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["Standard", "Filled", "Tonal", "Inverse"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Style={x}</div>\r
          <div className="sb-row">{["Enabled", "Pressed", "Disabled", "Hovered", "Focused"].map(y => <IconButton key={y} {...args} {...{
          "Style": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...S.parameters?.docs?.source}}}})))()}export{w as n,u as r,c as t};