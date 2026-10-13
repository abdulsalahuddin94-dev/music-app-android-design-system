import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./Icon-DVXcWlef.js";import{c as o,s,w as c}from"./DataDisplay-BYME2dVL.js";var l=t({AllVariants:()=>_,Cyan:()=>m,InUse:()=>v,Magenta:()=>h,Playground:()=>f,Purple:()=>p,Yellow:()=>g,__namedExportsOrder:()=>y,default:()=>d}),u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),c(),a(),u=r(),d={title:`Data Display/Library Shortcut Tile`,component:o,tags:[`!autodocs`,`tier-molecule`],argTypes:{Color:{control:`inline-radio`,options:[`Purple`,`Cyan`,`Magenta`,`Yellow`],description:"Figma variant property `Color`",table:{category:`Figma variants`,defaultValue:{summary:`Purple`}}},Label:{control:`text`,description:`Figma text property`,table:{category:`Figma properties`,defaultValue:{summary:`Likes`}}},Icon:{control:`select`,options:i,description:`Figma instance swap (Icon component)`,table:{category:`Figma properties`,defaultValue:{summary:`Icon/favorite`}}}},args:{Color:`Purple`,Label:`Likes`,Icon:`Icon/favorite`},parameters:{figma:{name:`Library Shortcut Tile`,page:`➜ Cards & Carousels`,tier:`Molecule`,order:2},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=17-826`},docs:{description:{component:`**Figma:** \`Library Shortcut Tile\` on page \`➜ Cards & Carousels\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=17-826)

**Tier:** Molecule

**Use:** 

**Figma description:**

> Purpose: Category tile with a colored icon and label, such as Likes, Downloads or Saved.  
> Usage rules: 3 or 4 equal-width tiles in a row at the top of the Library. Not for media with artwork (use Shortcut Card).  
> Accessibility: Label: 4.5:1 (WCAG 1.4.3) in Light, Dark. Icon: 3:1 (WCAG 1.4.11) in Light, Dark. Whole tile is the target, at least 80 x 80 dp. Touch target: 48 x 48 dp (WCAG 2.5.8). Visual size may be smaller; the hit area stays 48 dp.  
> Keywords: library, shortcut, category, tile  

**When to use:** 3 or 4 equal-width tiles in a row at the top of the Library

**When not to use:** Media with artwork (use Shortcut Card)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},f={},p={name:`Purple`,args:{Color:`Purple`}},m={name:`Cyan`,args:{Color:`Cyan`}},h={name:`Magenta`,args:{Color:`Magenta`}},g={name:`Yellow`,args:{Color:`Yellow`}},_={name:`All variants`,render:e=>(0,u.jsx)(`div`,{className:`sb-row`,children:[`Purple`,`Cyan`,`Magenta`,`Yellow`].map(t=>(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Color=`,t]}),(0,u.jsx)(o,{...e,Color:t})]},t))})},v={name:`In use (interactive)`,render:()=>(0,u.jsx)(s,{})},y=[`Playground`,`Purple`,`Cyan`,`Magenta`,`Yellow`,`AllVariants`,`InUse`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Purple",
  args: {
    "Color": "Purple"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Cyan",
  args: {
    "Color": "Cyan"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Magenta",
  args: {
    "Color": "Magenta"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Yellow",
  args: {
    "Color": "Yellow"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["Purple", "Cyan", "Magenta", "Yellow"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Color={x}</div>\r
          <LibraryShortcutTile {...args} {...{
        "Color": x
      } as any} />\r
        </div>)}\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'In use (interactive)',
  render: () => <LibraryInUse />
}`,...v.parameters?.docs?.source}}}})))()}export{b as n,l as t};