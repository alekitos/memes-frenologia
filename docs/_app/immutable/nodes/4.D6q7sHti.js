import{s as ae,f as k,t as L,a as U,h as j,j as E,k as y,d as f,c as D,r as B,i as w,l as $,G as oe,m as Q,n as V,H as P,o as re}from"../chunks/scheduler.DalCDtsN.js";import{S as le,i as ne,c as I,a as q,m as A,t as F,b as G,d as N}from"../chunks/index.DZqEaL9U.js";import{P as se}from"../chunks/Page.B2tUR2Gx.js";import{e as S,t as ce}from"../chunks/Footer.C7ZVeKOR.js";import{m as ie}from"../chunks/metadata.BPwXISL6.js";import{S as fe,m as me}from"../chunks/md.Dgeqang5.js";function W(c,t,s){const a=c.slice();return a[4]=t[s],a}function X(c,t,s){const a=c.slice();return a[7]=t[s],a}function Y(c,t,s){const a=c.slice();return a[10]=t[s],a}function Z(c){let t,s=c[10]+"",a;return{c(){t=k("th"),a=L(s)},l(l){t=j(l,"TH",{});var e=E(t);a=y(e,s),e.forEach(f)},m(l,e){w(l,t,e),$(t,a)},p:V,d(l){l&&f(t)}}}function ee(c){let t,s=c[7]+"",a;return{c(){t=k("td"),a=L(s)},l(l){t=j(l,"TD",{});var e=E(t);a=y(e,s),e.forEach(f)},m(l,e){w(l,t,e),$(t,a)},p:V,d(l){l&&f(t)}}}function te(c){let t,s,a=S(Object.values(c[4])),l=[];for(let e=0;e<a.length;e+=1)l[e]=ee(X(c,a,e));return{c(){t=k("tr");for(let e=0;e<l.length;e+=1)l[e].c();s=U()},l(e){t=j(e,"TR",{});var i=E(t);for(let o=0;o<l.length;o+=1)l[o].l(i);s=D(i),i.forEach(f)},m(e,i){w(e,t,i);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(t,null);$(t,s)},p(e,i){if(i&2){a=S(Object.values(e[4]));let o;for(o=0;o<a.length;o+=1){const d=X(e,a,o);l[o]?l[o].p(d,i):(l[o]=ee(d),l[o].c(),l[o].m(t,s))}for(;o<l.length;o+=1)l[o].d(1);l.length=a.length}},d(e){e&&f(t),P(l,e)}}}function ue(c){let t,s=c[0].metadataTable+"",a,l,e,i,o,d,h,p,g,v=c[0].download+"",x,C,H,z,T=S(Object.keys(c[1][0])),m=[];for(let n=0;n<T.length;n+=1)m[n]=Z(Y(c,T,n));let R=S(c[1]),u=[];for(let n=0;n<R.length;n+=1)u[n]=te(W(c,R,n));return{c(){t=k("h2"),a=L(s),l=U(),e=k("div"),i=k("table"),o=k("tr");for(let n=0;n<m.length;n+=1)m[n].c();d=U();for(let n=0;n<u.length;n+=1)u[n].c();h=U(),p=k("div"),g=k("button"),x=L(v),C=L(" CSV"),this.h()},l(n){t=j(n,"H2",{});var _=E(t);a=y(_,s),_.forEach(f),l=D(n),e=j(n,"DIV",{class:!0});var r=E(e);i=j(r,"TABLE",{class:!0});var b=E(i);o=j(b,"TR",{});var J=E(o);for(let O=0;O<m.length;O+=1)m[O].l(J);J.forEach(f),d=D(b);for(let O=0;O<u.length;O+=1)u[O].l(b);b.forEach(f),r.forEach(f),h=D(n),p=j(n,"DIV",{class:!0});var K=E(p);g=j(K,"BUTTON",{class:!0});var M=E(g);x=y(M,v),C=y(M," CSV"),M.forEach(f),K.forEach(f),this.h()},h(){B(i,"class","metadata-table"),B(e,"class","metadata-table-container svelte-1akrh8d"),B(g,"class","default-button"),B(p,"class","button-container")},m(n,_){w(n,t,_),$(t,a),w(n,l,_),w(n,e,_),$(e,i),$(i,o);for(let r=0;r<m.length;r+=1)m[r]&&m[r].m(o,null);$(i,d);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(i,null);w(n,h,_),w(n,p,_),$(p,g),$(g,x),$(g,C),H||(z=oe(g,"click",c[2]),H=!0)},p(n,[_]){if(_&1&&s!==(s=n[0].metadataTable+"")&&Q(a,s),_&2){T=S(Object.keys(n[1][0]));let r;for(r=0;r<T.length;r+=1){const b=Y(n,T,r);m[r]?m[r].p(b,_):(m[r]=Z(b),m[r].c(),m[r].m(o,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=T.length}if(_&2){R=S(n[1]);let r;for(r=0;r<R.length;r+=1){const b=W(n,R,r);u[r]?u[r].p(b,_):(u[r]=te(b),u[r].c(),u[r].m(i,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=R.length}_&1&&v!==(v=n[0].download+"")&&Q(x,v)},i:V,o:V,d(n){n&&(f(t),f(l),f(e),f(h),f(p)),P(m,n),P(u,n),H=!1,z()}}}function _e(c,t,s){let a;re(c,ce,o=>s(0,a=o));let{metadata:l}=t;const e=l.map(o=>{const d={};for(let[h,p]of Object.entries(o))/^_/.test(h)||(d[h]=p);return d});function i(){const o=",";let d=[Object.keys(e[0]).join(o)];for(let g of e)d.push(Object.values(g).map(v=>new RegExp(`${o}`).test(v)?`"${v}"`:v).join(o));d=d.join(`
`);const h=document.createElement("a"),p=new Blob([d],{type:"text/plain"});h.href=URL.createObjectURL(p),h.download="metadata.csv",h.click(),URL.revokeObjectURL(h.href)}return c.$$set=o=>{"metadata"in o&&s(3,l=o.metadata)},[a,e,i,l]}class de extends le{constructor(t){super(),ne(this,t,_e,ue,ae,{metadata:3})}}function he(c){let t,s,a,l;return t=new fe({props:{source:c[0]}}),a=new de({props:{metadata:ie}}),{c(){I(t.$$.fragment),s=U(),I(a.$$.fragment)},l(e){q(t.$$.fragment,e),s=D(e),q(a.$$.fragment,e)},m(e,i){A(t,e,i),w(e,s,i),A(a,e,i),l=!0},p:V,i(e){l||(F(t.$$.fragment,e),F(a.$$.fragment,e),l=!0)},o(e){G(t.$$.fragment,e),G(a.$$.fragment,e),l=!1},d(e){e&&f(s),N(t,e),N(a,e)}}}function pe(c){let t,s;return t=new se({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),{c(){I(t.$$.fragment)},l(a){q(t.$$.fragment,a)},m(a,l){A(t,a,l),s=!0},p(a,[l]){const e={};l&2&&(e.$$scope={dirty:l,ctx:a}),t.$set(e)},i(a){s||(F(t.$$.fragment,a),s=!0)},o(a){G(t.$$.fragment,a),s=!1},d(a){N(t,a)}}}function ge(c){return[me.metadata.body]}class we extends le{constructor(t){super(),ne(this,t,ge,pe,ae,{})}}export{we as component};