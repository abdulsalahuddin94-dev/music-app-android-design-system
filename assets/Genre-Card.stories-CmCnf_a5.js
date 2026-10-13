import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,o as a,w as o}from"./DataDisplay-BYME2dVL.js";var s=t({AllVariants:()=>v,Blue:()=>f,Cyan:()=>p,Green:()=>m,InUse:()=>y,Magenta:()=>d,Playground:()=>u,Purple:()=>g,Red:()=>h,Yellow:()=>_,__namedExportsOrder:()=>b,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),o(),c=r(),l={title:`Data Display/Genre Card`,component:i,tags:[`!autodocs`,`tier-molecule`],argTypes:{Color:{control:`select`,options:[`Magenta`,`Blue`,`Cyan`,`Green`,`Red`,`Purple`,`Yellow`],description:"Figma variant property `Color`",table:{category:`Figma variants`,defaultValue:{summary:`Magenta`}}},Label:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`ALTERNATIVE`}}}},args:{Color:`Magenta`,Label:`ALTERNATIVE`},parameters:{figma:{name:`Genre Card`,page:`➜ Cards & Carousels`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3689`},docs:{description:{component:`**Figma:** \`Genre Card\` on page \`➜ Cards & Carousels\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-3689)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: Tile that opens a genre, mood or chart: artist photo on a category color with the genre name.  
> Usage rules: Search & Discover grids (Popular, Moods & Genres), two per row. Color picks the category accent; neighbours use different colors. Not for library shortcuts with an icon (use Library Shortcut Tile). Not for songs or albums (use Media Card).  
> Accessibility: Label on the category color: 4.5:1 (WCAG 1.4.3) in Light, Dark. The whole card is one target; the label is its accessible name. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: genre, mood, category, browse, search  

**When to use:** Search & Discover grids (Popular, Moods & Genres), two per row; Color picks the category accent; neighbours use different colors

**When not to use:** Library shortcuts with an icon (use Library Shortcut Tile); Songs or albums (use Media Card)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},u={},d={name:`Magenta`,args:{Color:`Magenta`}},f={name:`Blue`,args:{Color:`Blue`}},p={name:`Cyan`,args:{Color:`Cyan`}},m={name:`Green`,args:{Color:`Green`}},h={name:`Red`,args:{Color:`Red`}},g={name:`Purple`,args:{Color:`Purple`}},_={name:`Yellow`,args:{Color:`Yellow`}},v={name:`All variants`,render:e=>(0,c.jsx)(`div`,{className:`sb-row`,children:[`Magenta`,`Blue`,`Cyan`,`Green`,`Red`,`Purple`,`Yellow`].map(t=>(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Color=`,t]}),(0,c.jsx)(i,{...e,Color:t})]},t))})},y={name:`In use (interactive)`,render:()=>(0,c.jsx)(a,{})},b=[`Playground`,`Magenta`,`Blue`,`Cyan`,`Green`,`Red`,`Purple`,`Yellow`,`AllVariants`,`InUse`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Magenta",
  args: {
    "Color": "Magenta"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Blue",
  args: {
    "Color": "Blue"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Cyan",
  args: {
    "Color": "Cyan"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Green",
  args: {
    "Color": "Green"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Red",
  args: {
    "Color": "Red"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Purple",
  args: {
    "Color": "Purple"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Yellow",
  args: {
    "Color": "Yellow"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Magenta", "Blue", "Cyan", "Green", "Red", "Purple", "Yellow"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Color={x}</div>\r
          <GenreCard {...args} {...{
        "Color": x
      } as any} />\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <GenreGridInUse />
}`,...y.parameters?.docs?.source}}}})))()}export{x as n,s as t};