// read-only
(async()=>{await figma.loadAllPagesAsync();const pg=figma.root.children.find(p=>p.name==='Listen');await pg.loadAsync();
const frames=pg.findAll(n=>n.type==='FRAME'&&/^Listen \/ .* \/ (Dark|Light)$/.test(n.name)&&n.parent.type==='SECTION');
const dark={},res={},lt=[];
for(const f of frames){
 const key=f.name.replace(/ \/ (Dark|Light)$/,'');const mode=/Dark$/.test(f.name)?'D':'L';
 const sig=f.findAll(n=>n.parent&&n.parent.type!=='INSTANCE'||true).filter(n=>{for(let q=n.parent;q&&q!==f;q=q.parent)if(q.type==='INSTANCE')return false;return true}).map(n=>n.name+'@'+Math.round(n.x)+','+Math.round(n.y)+','+Math.round(n.width)+','+Math.round(n.height)).join('|');
 (dark[key]=dark[key]||{})[mode]=sig;
 const insts=f.findAll(n=>n.type==='INSTANCE'&&!(()=>{for(let q=n.parent;q&&q!==f;q=q.parent)if(q.type==='INSTANCE')return true;return false})());
 for(const i of insts){const m=await i.getMainComponentAsync();if(!m)continue;const dw=Math.round(i.width-m.width),dh=Math.round(i.height-m.height);if(mode==='D'&&(Math.abs(dw)>2||Math.abs(dh)>2))lt.push(key+' | '+i.name+' '+Math.round(i.width)+'x'+Math.round(i.height)+' main '+Math.round(m.width)+'x'+Math.round(m.height)+' ('+(m.parent&&m.parent.name)+')')}
}
const same=Object.keys(dark).map(k=>k+': '+(dark[k].D===dark[k].L?'D=L':'DIFF'));
return same.join('\n')+'\n--size diffs (Dark, top-level-in-screen instances incl. nested in screen frames)\n'+lt.join('\n')})()
