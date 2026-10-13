// read-only
JSON.stringify(globalThis.__aud.map(r=>({n:r.name.replace('Listen / ',''),sz:r.size,inst:r.instCount,bars:r.bars,img:r.imgOn,rawIn:r.rawInInst,nv:Object.keys(r.varNames).length,notes:r.notes.slice(0,12)})))
