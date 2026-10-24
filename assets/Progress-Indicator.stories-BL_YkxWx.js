import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,o as a}from"./DataDisplayAtoms-B6Eb2bd2.js";var o=t({AllVariants:()=>_,Playground:()=>l,V10:()=>d,V100:()=>g,V2:()=>u,V25:()=>f,V40:()=>p,V50:()=>m,V75:()=>h,__namedExportsOrder:()=>v,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),a(),s=r(),c={title:`Data Display/Progress Indicator`,component:i,tags:[`!autodocs`,`tier-atom`],argTypes:{Value:{control:`select`,options:[`2`,`10`,`25`,`40`,`50`,`75`,`100`],description:"Figma variant property `Value`",table:{category:`Figma variants`,defaultValue:{summary:`2`}}}},args:{Value:`2`},parameters:{figma:{name:`Progress Indicator`,page:`➜ Progress & Loading`,tier:`Atom`,order:1},design:{type:`figma`,url:`https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-4380`},docs:{description:{component:`**Figma:** \`Progress Indicator\` on page \`➜ Progress & Loading\` (Data Display). [Open in Figma](https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS?node-id=62-4380)

**Tier:** Atom

**Use:** 

**Figma description:**

> Purpose: Linear bar showing determinate progress, such as the listened part of an episode.  
> Usage rules: Episode progress. Inside Playback Progress. Not for seeking on its own (use Playback Progress).  
> Accessibility: Active track: 3:1 (WCAG 1.4.11) in Light, Dark. Announce the value as a percentage or time.  
> Behavior: Value sets the active track as a percent; the active track scales with the instance width.  
> Keywords: progress, linear, loading  

**When to use:** Episode progress; Inside Playback Progress

**When not to use:** Seeking on its own (use Playback Progress)

Controls use the Figma variant and property names exactly. Switch the Figma modes from the toolbar.`}}}},l={},u={name:`2`,args:{Value:`2`}},d={name:`10`,args:{Value:`10`}},f={name:`25`,args:{Value:`25`}},p={name:`40`,args:{Value:`40`}},m={name:`50`,args:{Value:`50`}},h={name:`75`,args:{Value:`75`}},g={name:`100`,args:{Value:`100`}},_={name:`All variants`,render:e=>(0,s.jsx)(`div`,{className:`sb-row`,children:[`2`,`10`,`25`,`40`,`50`,`75`,`100`].map(t=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`sb-cell-label ts-xs-medium`,children:[`Value=`,t]}),(0,s.jsx)(i,{...e,Value:t})]},t))})},v=[`Playground`,`V2`,`V10`,`V25`,`V40`,`V50`,`V75`,`V100`,`AllVariants`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "2",
  args: {
    "Value": "2"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "10",
  args: {
    "Value": "10"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "25",
  args: {
    "Value": "25"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "40",
  args: {
    "Value": "40"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "50",
  args: {
    "Value": "50"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "75",
  args: {
    "Value": "75"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "100",
  args: {
    "Value": "100"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div className="sb-row">\r
      {["2", "10", "25", "40", "50", "75", "100"].map(x => <div key={x}>\r
          <div className="sb-cell-label ts-xs-medium">Value={x}</div>\r
          <ProgressIndicator {...args} {...{
        "Value": x
      } as any} />\r
        </div>)}\r
    </div>
}`,..._.parameters?.docs?.source}}}})))()}export{y as n,o as t};