import{s as G,p as w,i as g,n as O,d as m,f as d,a as C,h as v,c as M,q as R,r as n,t as N,j as k,k as P,l as h,m as j}from"./scheduler.DalCDtsN.js";import{S as T,i as D}from"./index.DZqEaL9U.js";import{b as E}from"./paths.CAql40de.js";import{m as z}from"./metadata.B1mpwR4y.js";import{c as B}from"./Footer.AwkFOp_R.js";function F(s){let e,f,a,i,l=s[2]&&S(s);return{c(){e=d("img"),a=C(),l&&l.c(),i=w(),this.h()},l(t){e=v(t,"IMG",{src:!0,title:!0,alt:!0,class:!0}),a=M(t),l&&l.l(t),i=w(),this.h()},h(){R(e.src,f=s[1])||n(e,"src",f),n(e,"title",s[2]),n(e,"alt",s[0]),n(e,"class","svelte-iswlra")},m(t,r){g(t,e,r),g(t,a,r),l&&l.m(t,r),g(t,i,r)},p(t,r){r&2&&!R(e.src,f=t[1])&&n(e,"src",f),r&4&&n(e,"title",t[2]),r&1&&n(e,"alt",t[0]),t[2]?l?l.p(t,r):(l=S(t),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(t){t&&(m(e),m(a),m(i)),l&&l.d(t)}}}function H(s){let e,f,a,i,l,t,r,p=s[5].label+"",b,_,I,u=s[2]&&V(s);return{c(){e=d("div"),f=d("a"),a=d("img"),t=C(),r=d("a"),b=N(p),I=C(),u&&u.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var o=k(e);f=v(o,"A",{href:!0});var q=k(f);a=v(q,"IMG",{src:!0,title:!0,alt:!0,class:!0}),q.forEach(m),t=M(o),r=v(o,"A",{class:!0,href:!0});var A=k(r);b=P(A,p),A.forEach(m),I=M(o),u&&u.l(o),o.forEach(m),this.h()},h(){R(a.src,i=E+"/iiif/"+s[3]+"/"+s[4]+"/full/512,/0/default.jpg")||n(a,"src",i),n(a,"title",s[2]),n(a,"alt",s[0]),n(a,"class","svelte-iswlra"),n(f,"href",l=E+"/pages/"+s[3]),n(r,"class","silent-link"),n(r,"href",_=E+"/pages/"+s[3]),n(e,"class","preview-item svelte-iswlra")},m(c,o){g(c,e,o),h(e,f),h(f,a),h(e,t),h(e,r),h(r,b),h(e,I),u&&u.m(e,null)},p(c,o){o&24&&!R(a.src,i=E+"/iiif/"+c[3]+"/"+c[4]+"/full/512,/0/default.jpg")&&n(a,"src",i),o&4&&n(a,"title",c[2]),o&1&&n(a,"alt",c[0]),o&8&&l!==(l=E+"/pages/"+c[3])&&n(f,"href",l),o&32&&p!==(p=c[5].label+"")&&j(b,p),o&8&&_!==(_=E+"/pages/"+c[3])&&n(r,"href",_),c[2]?u?u.p(c,o):(u=V(c),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(c){c&&m(e),u&&u.d()}}}function S(s){let e,f,a;return{c(){e=d("p"),f=d("em"),a=N(s[2])},l(i){e=v(i,"P",{});var l=k(e);f=v(l,"EM",{});var t=k(f);a=P(t,s[2]),t.forEach(m),l.forEach(m)},m(i,l){g(i,e,l),h(e,f),h(f,a)},p(i,l){l&4&&j(a,i[2])},d(i){i&&m(e)}}}function V(s){let e,f,a;return{c(){e=d("p"),f=d("em"),a=N(s[2])},l(i){e=v(i,"P",{});var l=k(e);f=v(l,"EM",{});var t=k(f);a=P(t,s[2]),t.forEach(m),l.forEach(m)},m(i,l){g(i,e,l),h(e,f),h(f,a)},p(i,l){l&4&&j(a,i[2])},d(i){i&&m(e)}}}function J(s){let e;function f(l,t){return l[6]?H:F}let a=f(s),i=a(s);return{c(){i.c(),e=w()},l(l){i.l(l),e=w()},m(l,t){i.m(l,t),g(l,e,t)},p(l,[t]){a===(a=f(l))&&i?i.p(l,t):(i.d(1),i=a(l),i&&(i.c(),i.m(e.parentNode,e)))},i:O,o:O,d(l){l&&m(e),i.d(l)}}}function K(s,e,f){let{href:a=""}=e,{title:i=""}=e,{text:l=""}=e,t=a,r=0,p,b=!1;if(/^\!/.test(a)&&B.pages.iiifViewer){t=t.replace(/^\!/,"");const _=/(?<page>\|[0-9]+)/.exec(t);_&&(r=+_.groups.page.replace("|","")-1,t=t.replace(_.groups.page,"")),p=z.find(I=>I.pid===t),p!==void 0?(p.label,r=r>p._images-1?0:r,b=!0):l="¡pid INCORRECTO, REVISAR! / INCORRECT pid!"}return s.$$set=_=>{"href"in _&&f(1,a=_.href),"title"in _&&f(2,i=_.title),"text"in _&&f(0,l=_.text)},[l,a,i,t,r,p,b]}class Y extends T{constructor(e){super(),D(this,e,K,J,G,{href:1,title:2,text:0})}}export{Y as I};