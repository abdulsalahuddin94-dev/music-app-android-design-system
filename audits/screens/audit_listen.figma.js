// read-only
(async()=>{
await figma.loadAllPagesAsync();
const pg=figma.root.children.find(p=>p.name==='Listen');await pg.loadAsync();
const frames=pg.findAll(n=>n.type==='FRAME'&&/^Listen \/ .* \/ (Dark|Light)$/.test(n.name)&&n.parent.type==='SECTION');
const varCache={},styleCache={};
async function V(id){if(!(id in varCache)){let v=null;try{v=await figma.variables.getVariableByIdAsync(id)}catch(e){}varCache[id]=v}return varCache[id]}
async function S(id){if(!(id in styleCache)){let v=null;try{v=await figma.getStyleByIdAsync(id)}catch(e){}styleCache[id]=v}return styleCache[id]}
const PH=['label','title','track title','button','filter','value','line','subtitle','text','placeholder','headline','body','supporting text','item','tab','chip','name'];
const DEF=/^(Frame|Rectangle|Group|Ellipse|Vector|Line|Text|Polygon|Star|Section) \d+$/;
function inside(n,f){for(let q=n.parent;q&&q!==f;q=q.parent)if(q.type==='INSTANCE')return true;return false}
const out=[];const allNames={};
for(const f of frames){
 const r={name:f.name,id:f.id,size:Math.round(f.width)+'x'+Math.round(f.height),
  rawFill:0,rawStroke:0,rawPad:0,rawRadius:0,textNoStyle:0,effNoStyle:0,imgFills:0,imgOn:{},
  rawInInst:0,localInst:0,instCount:{},remoteInst:0,
  deletedVar:0,localVar:0,localTextStyle:0,misused:[],varNames:{},noAL:[],defName:[],
  modes:null,placeholders:[],texts:[],notes:[],bars:[]};
 const mm=f.explicitVariableModes||{};
 const ml=[];for(const cid of Object.keys(mm)){let c=null;try{c=await figma.variables.getVariableCollectionByIdAsync(cid)}catch(e){}ml.push((c?c.name:cid)+'='+(c?(c.modes.find(m=>m.modeId===mm[cid])||{}).name:mm[cid]))}
 r.modes=ml;
 async function chkVar(id,node,field){
   const v=await V(id);
   if(!v){r.deletedVar++;r.notes.push('deleted var on '+node.name+'.'+field);return null}
   if(!v.remote){r.localVar++;r.notes.push('local var '+v.name+' on '+node.name)}
   r.varNames[v.name]=(r.varNames[v.name]||0)+1;
   return v;
 }
 async function walk(n,inInst,isRoot){
  const isInst=n.type==='INSTANCE';
  if(!inInst&&!isRoot){ if(DEF.test(n.name)) r.defName.push(n.name+' ['+n.type+']'); }
  const fills=('fills' in n&&Array.isArray(n.fills))?n.fills:[];
  for(let i=0;i<fills.length;i++){const p=fills[i];if(p.visible===false)continue;
   if(p.type==='IMAGE'){r.imgFills++;let own=null;for(let q=n;q&&q!==f;q=q.parent)if(q.type==='INSTANCE'){own=q.name;} const k=own||n.name;r.imgOn[k]=(r.imgOn[k]||0)+1;continue}
   if(p.type==='SOLID'||p.type.startsWith('GRADIENT')){
    const b=p.boundVariables&&p.boundVariables.color;
    if(!b){ if(inInst)r.rawInInst++; else {r.rawFill++;r.notes.push('raw fill '+n.name)} }
    else {const v=await chkVar(b.id,n,'fill');
      if(v&&!inInst){
        const nm=v.name;
        if(n.type==='TEXT'&&/color\/(surface|background|scrim)/.test(nm)) r.misused.push('text fill '+nm+' on '+n.name);
        if(n.type!=='TEXT'&&n.type!=='VECTOR'&&n.type!=='BOOLEAN_OPERATION'&&/color\/on_(surface|background)/.test(nm)&&!/variant/.test(nm)) r.misused.push('shape fill '+nm+' on '+n.name+' ['+n.type+']');
      }}
   }
  }
  const strokes=('strokes' in n&&Array.isArray(n.strokes))?n.strokes:[];
  for(const p of strokes){if(p.visible===false)continue;
   const b=p.boundVariables&&p.boundVariables.color;
   if(!b){ if(inInst)r.rawInInst++; else {r.rawStroke++;r.notes.push('raw stroke '+n.name)} }
   else {const v=await chkVar(b.id,n,'stroke'); if(v&&!inInst&&/color\/(surface|background)/.test(v.name)) r.misused.push('stroke '+v.name+' on '+n.name)}
  }
  const bv=n.boundVariables||{};
  for(const k of Object.keys(bv)){ if(k==='fills'||k==='strokes'||k==='effects')continue; const a=Array.isArray(bv[k])?bv[k]:[bv[k]]; for(const x of a){ if(x&&x.id) await chkVar(x.id,n,k)} }
  for(const e of (n.effects||[])){const b=e.boundVariables;if(b)for(const k of Object.keys(b)){const x=b[k];if(x&&x.id)await chkVar(x.id,n,'effect')}}
  if(!inInst){
   if(n.layoutMode&&n.layoutMode!=='NONE'){
    for(const k of ['paddingLeft','paddingRight','paddingTop','paddingBottom','itemSpacing']){
      if(n[k]>0&&!bv[k]){r.rawPad++;r.notes.push('raw '+k+'='+n[k]+' '+n.name)}}
    if(n.layoutWrap==='WRAP'&&n.counterAxisSpacing>0&&!bv.counterAxisSpacing){r.rawPad++;r.notes.push('raw counterAxisSpacing '+n.name)}
   }
   if('cornerRadius' in n){
    const cr=n.cornerRadius;
    const vals=cr===figma.mixed?[n.topLeftRadius,n.topRightRadius,n.bottomLeftRadius,n.bottomRightRadius]:[cr];
    if(vals.some(x=>x>0)){
      const ok=bv.cornerRadius||(bv.topLeftRadius&&bv.topRightRadius&&bv.bottomLeftRadius&&bv.bottomRightRadius)||(cr!==figma.mixed&&bv.topLeftRadius);
      if(!ok){r.rawRadius++;r.notes.push('raw radius '+vals+' '+n.name+' ['+n.type+']')}
    }
   }
   if((n.effects||[]).length&&!(typeof n.effectStyleId==='string'&&n.effectStyleId)){r.effNoStyle++;r.notes.push('effect w/o style '+n.name)}
   if(n.type==='TEXT'){
    const sid=n.textStyleId;
    if(typeof sid!=='string'||!sid){r.textNoStyle++;r.notes.push('text w/o style '+n.name)}
    else{const s=await S(sid);if(s&&!s.remote){r.localTextStyle++;r.notes.push('local text style '+s.name)}}
   }
   if(n.type==='FRAME'&&n.children&&n.children.length>=2&&(!n.layoutMode||n.layoutMode==='NONE')) r.noAL.push(n.name+' ('+n.children.length+')');
   if(n.type==='FRAME'&&!isRoot) allNames[n.name]=(allNames[n.name]||0)+1;
  }
  if(n.type==='TEXT'){let vis=true;for(let q=n;q&&q!==f;q=q.parent)if(q.visible===false){vis=false;break}
    if(vis){const t=n.characters.trim();r.texts.push(t);if(PH.includes(t.toLowerCase()))r.placeholders.push(t+' @'+n.name)}}
  if(isInst){
    const main=await n.getMainComponentAsync();
    if(!main){r.localInst++;r.notes.push('instance without main '+n.name)}
    else if(!inInst){
      const comp=main.parent&&main.parent.type==='COMPONENT_SET'?main.parent.name:main.name;
      if(main.remote)r.remoteInst++;else{r.localInst++;r.notes.push('local component '+comp)}
      r.instCount[comp]=(r.instCount[comp]||0)+1;
    }
  }
  if(n.children){ for(const c of n.children) await walk(c,inInst||isInst,false) }
 }
 await walk(f,false,true);
 const tops=f.findAll(n=>n.type==='INSTANCE'&&!inside(n,f));
 for(const t of tops){const m=await t.getMainComponentAsync();const c=m?(m.parent&&m.parent.type==='COMPONENT_SET'?m.parent.name:m.name):t.name;
  if(/status bar|bottom navigation|app bar|mini player|utility/i.test(c)){const rel=t.absoluteBoundingBox.y-f.absoluteBoundingBox.y;r.bars.push(c+' w'+Math.round(t.width)+' x'+Math.round(t.x)+' y'+Math.round(rel)+' h'+Math.round(t.height))}
  if(/lyrics line|player utility|top app bar|genre card|^button$|lyrics header/i.test(c)){const cp=t.componentProperties;const s=Object.entries(cp).filter(([k,v])=>v.type==='VARIANT').map(([k,v])=>k+'='+v.value).join(',');r.notes.push('PROP '+c+': '+s)}
 }
 out.push(r);
}
globalThis.__aud=out;globalThis.__names=allNames;
return out.map(r=>r.name+' remote'+r.remoteInst+' local'+r.localInst+' rawF'+r.rawFill+' rawS'+r.rawStroke+' pad'+r.rawPad+' rad'+r.rawRadius+' txt'+r.textNoStyle+' eff'+r.effNoStyle+' del'+r.deletedVar+' lvar'+r.localVar+' mis'+r.misused.length+' noAL'+r.noAL.length+' def'+r.defName.length+' ph'+r.placeholders.length+' modes'+JSON.stringify(r.modes)).join('\n');
})()
