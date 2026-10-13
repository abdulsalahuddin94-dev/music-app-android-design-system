import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./Icon-DVXcWlef.js";import{f as o,v as s}from"./Navigation-ZDRKmdD-.js";var c=t({AllVariants:()=>g,Audio:()=>h,Lyrics:()=>p,None:()=>f,Playground:()=>d,Queue:()=>m,__namedExportsOrder:()=>_,default:()=>u}),l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),s(),a(),l=r(),u={title:`Navigation/Player Utility Bar`,component:o,tags:[`!autodocs`,`tier-molecule`],argTypes:{Active:{control:`inline-radio`,options:[`None`,`Lyrics`,`Queue`,`Audio`],description:"Figma variant property `Active`",table:{category:`Figma variants`,defaultValue:{summary:`None`}}},"Lyrics Label":{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`LYRICS`}}},"Queue Label":{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`QUEUE`}}},"Audio Label":{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`AUDIO`}}},"Icon lyrics":{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/lyrics`}}},"Icon queue music":{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/queue_music`}}},"Icon graphic eq":{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/graphic_eq`}}}},args:{Active:`None`,"Lyrics Label":`LYRICS`,"Queue Label":`QUEUE`,"Audio Label":`AUDIO`,"Icon lyrics":`Icon/lyrics`,"Icon queue music":`Icon/queue_music`,"Icon graphic eq":`Icon/graphic_eq`},parameters:{figma:{name:`Player Utility Bar`,page:`➜ Player Controls`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3617`},docs:{description:{component:`**Figma:** \`Player Utility Bar\` on page \`➜ Player Controls\` (Navigation). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3617)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: Bottom row of the full player opening Lyrics, Queue and Audio settings.  
> Usage rules: Bottom of the Now Playing and Lyrics screens. Not for primary playback actions (use Playback Controls).  
> Accessibility: Labels: 4.5:1 (WCAG 1.4.3) in Light, Dark. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Behavior: Active marks the open view with an inverse pill (Lyrics on the Lyrics screen); None on Now Playing.  
> Keywords: lyrics, queue, audio, player  

**When to use:** Bottom of the Now Playing and Lyrics screens

**When not to use:** Primary playback actions (use Playback Controls)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},d={},f={name:`None`,args:{Active:`None`}},p={name:`Lyrics`,args:{Active:`Lyrics`}},m={name:`Queue`,args:{Active:`Queue`}},h={name:`Audio`,args:{Active:`Audio`}},g={name:`All variants`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[`None`,`Lyrics`,`Queue`,`Audio`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Active=`,t]}),(0,l.jsx)(o,{...e,Active:t})]},t))})},_=[`Playground`,`None`,`Lyrics`,`Queue`,`Audio`,`AllVariants`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "None",
  args: {
    "Active": "None"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Lyrics",
  args: {
    "Active": "Lyrics"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Queue",
  args: {
    "Active": "Queue"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Audio",
  args: {
    "Active": "Audio"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["None", "Lyrics", "Queue", "Audio"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Active={x}</div>\r
          <PlayerUtilityBar {...args} {...{
        "Active": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...g.parameters?.docs?.source}}}})))()}export{v as n,c as t};