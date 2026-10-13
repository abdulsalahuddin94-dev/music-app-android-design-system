// read-only
(async()=>{await figma.loadAllPagesAsync();const pg=figma.root.children.find(p=>p.name==='Listen');await pg.loadAsync();
const frames=pg.findAll(n=>n.type==='FRAME'&&/^Listen \/ .* \/ (Dark|Light)$/.test(n.name)&&n.parent.type==='SECTION'&&/Dark$/.test(n.name));
const out=[];
for(const f of frames){
 out.push('## '+f.name+' '+Math.round(f.width)+'x'+Math.round(f.height)+' layout='+f.layoutMode+' clips='+f.clipsContent);
 const kids=f.children;
 for(const c of kids){
   let s='  '+c.name+' ['+c.type+'] x'+Math.round(c.x)+' y'+Math.round(c.y)+' '+Math.round(c.width)+'x'+Math.round(c.height)+' bottom='+Math.round(c.y+c.height)+' pos='+c.layoutPositioning;
   if(c.type==='INSTANCE'){const m=await c.getMainComponentAsync();if(m){const mw=Math.round(m.width),mh=Math.round(m.height);if(mw!==Math.round(c.width)||mh!==Math.round(c.height))s+=' main='+mw+'x'+mh+' DIFF'}}
   out.push(s);
 }
}
return out.join('\n')})()
