const t=[];for(let n=0;n<256;++n)t.push((n+256).toString(16).slice(1));function g(n,e=0){return(t[n[e+0]]+t[n[e+1]]+t[n[e+2]]+t[n[e+3]]+"-"+t[n[e+4]]+t[n[e+5]]+"-"+t[n[e+6]]+t[n[e+7]]+"-"+t[n[e+8]]+t[n[e+9]]+"-"+t[n[e+10]]+t[n[e+11]]+t[n[e+12]]+t[n[e+13]]+t[n[e+14]]+t[n[e+15]]).toLowerCase()}let c;const o=new Uint8Array(16);function m(){if(!c){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");c=crypto.getRandomValues.bind(crypto)}return c(o)}const U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:U};function l(n,e,d){var i;if(y.randomUUID&&!e&&!n)return y.randomUUID();n=n||{};const r=n.random??((i=n.rng)==null?void 0:i.call(n))??m();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(d=d||0,d<0||d+16>e.length)throw new RangeError(`UUID byte range ${d}:${d+15} is out of buffer bounds`);for(let u=0;u<16;++u)e[d+u]=r[u];return e}return g(r)}export{l as v};