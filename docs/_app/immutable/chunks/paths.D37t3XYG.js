import{n as l,v,w as k,s as q,x}from"./scheduler.DalCDtsN.js";const c=[];function j(e,i){return{subscribe:z(e,i).subscribe}}function z(e,i=l){let r;const n=new Set;function a(t){if(q(e,t)&&(e=t,r)){const o=!c.length;for(const s of n)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,o=l){const s=[t,o];return n.add(s),n.size===1&&(r=i(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function B(e,i,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=i.length<2;return j(r,(f,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=i(n?s[0]:s,f,t);b?f(u):p=x(u)?u:l},y=a.map((u,_)=>v(u,m=>{s[_]=m,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){k(y),p(),o=!1}})}var h;const A=((h=globalThis.__sveltekit_1knv2wj)==null?void 0:h.base)??"/frenologia-memes";var w;const E=((w=globalThis.__sveltekit_1knv2wj)==null?void 0:w.assets)??A;export{E as a,A as b,B as d,j as r,z as w};