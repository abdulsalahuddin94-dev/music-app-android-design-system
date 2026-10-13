// read-only
(async()=>{const o=[];const pg=figma.root.children.find(p=>p.name==='Listen');
for(const id of ['56:5926','56:6107','56:5501','56:5281']){const f=await figma.getNodeByIdAsync(id);o.push(f.name+' clips='+f.clipsContent+' layout='+f.layoutMode+' children='+f.children.map(c=>c.name+'@'+Math.round(c.y)+'/'+Math.round(c.height)).join('; '));
const t=f.findOne(n=>n.type==='INSTANCE'&&/Top App Bar|Lyrics Header/.test(n.name));if(t)o.push('  '+t.name+' props='+JSON.stringify(Object.fromEntries(Object.entries(t.componentProperties).map(([k,v])=>[k,v.value]))));}
return o.join('\n')})()
