import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./Icon-DVXcWlef.js";import{p as o,w as s}from"./DataDisplay-CKSMx7Nt.js";var c=t({AllVariants:()=>h,Default:()=>f,Large:()=>p,Playground:()=>d,Sizes:()=>m,__namedExportsOrder:()=>g,default:()=>u}),l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),s(),a(),l=r(),u={title:`Data Display/Media Card`,component:o,tags:[`!autodocs`,`tier-molecule`],argTypes:{Size:{control:`inline-radio`,options:[`Default`,`Large`],description:"Figma variant property `Size`",table:{category:`Figma variants`,defaultValue:{summary:`Default`}}},Artwork:{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Artwork`}}},"Show Badge":{control:`boolean`,description:`Figma boolean property`,table:{category:`Figma properties`,defaultValue:{summary:`false`}}},Description:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Your next favorite songs are in here`}}}},args:{Size:`Default`,Artwork:`Artwork`,"Show Badge":!1,Description:`Your next favorite songs are in here`},parameters:{figma:{name:`Media Card`,page:`➜ Cards & Carousels`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=17-996`},docs:{description:{component:`**Figma:** \`Media Card\` on page \`➜ Cards & Carousels\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=17-996)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: One item in a media rail: artwork with title and subtitle, or a mix with a description.  
> Usage rules: Size Default for songs, albums and artists. Size Large for mixes such as Your Weekly Mixtape. Not for vertical lists (use Playlist List Item).  
> Accessibility: Title and subtitle: 4.5:1 (WCAG 1.4.3) in Light, Dark. The card is one target; title is its accessible name. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: media card, song, album, mix  

**When to use:** Size Default for songs, albums and artists; Size Large for mixes such as Your Weekly Mixtape

**When not to use:** Vertical lists (use Playlist List Item)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},d={},f={name:`Default`,args:{Size:`Default`}},p={name:`Large`,args:{Size:`Large`}},m={name:`Sizes`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[`Default`,`Large`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Size=`,t]}),(0,l.jsx)(o,{...e,Size:t})]},t))})},h={name:`All variants`,render:e=>(0,l.jsx)(`div`,{className:`sb-row`,children:[`Default`,`Large`].map(t=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Size=`,t]}),(0,l.jsx)(o,{...e,Size:t})]},t))})},g=[`Playground`,`Default`,`Large`,`Sizes`,`AllVariants`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    "Size": "Default"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Large",
  args: {
    "Size": "Large"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Sizes",
  render: args => <div className="sb-row">\r
      {["Default", "Large"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Size={x}</div>\r
          <MediaCard {...args} {...{
        "Size": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Default", "Large"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Size={x}</div>\r
          <MediaCard {...args} {...{
        "Size": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,c as t};