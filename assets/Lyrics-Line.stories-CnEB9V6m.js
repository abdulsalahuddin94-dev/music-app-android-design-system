import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,f as a,w as o}from"./DataDisplay-BYME2dVL.js";var s=t({AllVariants:()=>h,Current:()=>f,InUse:()=>g,Past:()=>d,Playground:()=>u,States:()=>m,Upcoming:()=>p,__namedExportsOrder:()=>_,default:()=>l}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),c=r(),l={title:`Data Display/Lyrics Line`,component:a,tags:[`!autodocs`,`tier-atom`],argTypes:{State:{control:`inline-radio`,options:[`Past`,`Current`,`Upcoming`],description:"Figma variant property `State`",table:{category:`Figma variants`,defaultValue:{summary:`Past`}}},Align:{control:`inline-radio`,options:[`Start`,`End`],description:"Figma variant property `Align`",table:{category:`Figma variants`,defaultValue:{summary:`Start`}}},Line:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`كانت أكبر كذبه عشته`}}}},args:{State:`Past`,Align:`Start`,Line:`كانت أكبر كذبه عشته`},parameters:{figma:{name:`Lyrics Line`,page:`➜ Lyrics`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3651`},docs:{description:{component:`**Figma:** \`Lyrics Line\` on page \`➜ Lyrics\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3651)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: One line of synced lyrics; State shows where playback is.  
> Usage rules: Lyrics screen, one instance per line. Align End for right-to-left lines (Arabic), Start for left-to-right. Not for body text or descriptions (use the text styles).  
> Accessibility: Current line: 4.5:1 (WCAG 1.4.3) in Light, Dark. Past and Upcoming lines are dimmed on purpose; the screen reader reads every line. Respect the system font size; lines wrap.  
> Behavior: Current is on_surface; Past and Upcoming are outline (dimmed).  
> Keywords: lyrics, line, karaoke, synced  

**When to use:** Lyrics screen, one instance per line; Align End for right-to-left lines (Arabic), Start for left-to-right

**When not to use:** Body text or descriptions (use the text styles)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`Past`,args:{State:`Past`}},f={name:`Current`,args:{State:`Current`}},p={name:`Upcoming`,args:{State:`Upcoming`}},m={name:`States`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Past`,`Current`,`Upcoming`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`State=`,t]}),(0,c.jsx)(a,{...e,State:t})]},t))})},h={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-col`,children:[`Start`,`End`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Align=`,t]}),(0,c.jsx)(`div`,{className:`sb-row`,children:[`Past`,`Current`,`Upcoming`].map(n=>(0,c.jsx)(a,{...e,Align:t,State:n},n))})]},t))})},g={name:`In use (interactive)`,render:()=>(0,c.jsx)(i,{})},_=[`Playground`,`Past`,`Current`,`Upcoming`,`States`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Past",
  args: {
    "State": "Past"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Current",
  args: {
    "State": "Current"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Upcoming",
  args: {
    "State": "Upcoming"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: args => <div className="sb-row">\r
      {["Past", "Current", "Upcoming"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">State={x}</div>\r
          <LyricsLine {...args} {...{
        "State": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-col">\r
      {["Start", "End"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Align={x}</div>\r
          <div className="sb-row">{["Past", "Current", "Upcoming"].map(y => <LyricsLine key={y} {...args} {...{
          "Align": x,
          "State": y
        } as any} />)}</div>\r
        </div>)}\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <LyricsInUse />
}`,...g.parameters?.docs?.source}}}})))()}export{v as n,s as t};