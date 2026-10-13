// read-only
(async()=>{const A=globalThis.__aud;const o=[];
for(const r of A.filter(r=>/Lyrics|Now Playing/.test(r.name)&&/Dark/.test(r.name)||/Search.*(Viewport|Full) \/ Dark/.test(r.name))){o.push(r.name+' inst='+JSON.stringify(r.instCount)+' bars='+JSON.stringify(r.bars)+' notes='+JSON.stringify(r.notes.slice(0,40))+' texts='+JSON.stringify(r.texts))}
const f=figma.root.findOne?null:null;
return o.join('\n')})()
