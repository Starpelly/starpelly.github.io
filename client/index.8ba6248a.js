import{S as t,i as s,s as e,e as l,t as n,a,H as o,c as h,b as r,d as c,g as f,y as i,f as u,h as g,k as p,l as m,m as d,z as v,A as E,w as b}from"./client.176786cd.js";function j(t,s,e){const l=t.slice();return l[1]=s[e],l}function w(t){let s,e,v,E,b,j,w=t[1].title+"",x=t[1].html+"";return{c(){s=l("li"),e=l("a"),v=n(w),E=a(),b=new o,this.h()},l(t){s=h(t,"LI",{});var l=r(s);e=h(l,"A",{rel:!0,href:!0});var n=r(e);v=c(n,w),E=f(n),b=i(n),n.forEach(u),l.forEach(u),this.h()},h(){b.a=null,g(e,"rel","prefetch"),g(e,"href",j="blog/"+t[1].slug)},m(t,l){p(t,s,l),m(s,e),m(e,v),m(e,E),b.m(x,e)},p(t,s){1&s&&w!==(w=t[1].title+"")&&d(v,w),1&s&&x!==(x=t[1].html+"")&&b.p(x),1&s&&j!==(j="blog/"+t[1].slug)&&g(e,"href",j)},d(t){t&&u(s)}}}function x(t){let s,e,o,i,d,x=t[0],A=[];for(let s=0;s<x.length;s+=1)A[s]=w(j(t,x,s));return{c(){s=a(),e=l("h1"),o=n("Recent posts"),i=a(),d=l("ul");for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){v('[data-svelte="svelte-hfp9t8"]',document.head).forEach(u),s=f(t),e=h(t,"H1",{});var l=r(e);o=c(l,"Recent posts"),l.forEach(u),i=f(t),d=h(t,"UL",{class:!0});var n=r(d);for(let t=0;t<A.length;t+=1)A[t].l(n);n.forEach(u),this.h()},h(){document.title="Blog",g(d,"class","svelte-1frg2tf")},m(t,l){p(t,s,l),p(t,e,l),m(e,o),p(t,i,l),p(t,d,l);for(let t=0;t<A.length;t+=1)A[t].m(d,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=j(t,x,e);A[e]?A[e].p(l,s):(A[e]=w(l),A[e].c(),A[e].m(d,null))}for(;e<A.length;e+=1)A[e].d(1);A.length=x.length}},i:E,o:E,d(t){t&&u(s),t&&u(e),t&&u(i),t&&u(d),b(A,t)}}}function A(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function H(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}class L extends t{constructor(t){super(),s(this,t,H,x,e,{posts:0})}}export{L as default,A as preload};
