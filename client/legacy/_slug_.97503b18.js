import{S as t,i as s,s as a,N as e,C as r,e as c,c as n,a as i,b as l,d,f as o,g as h,h as f,z as m,k as u,m as p,n as $,o as v,p as E,q as I,r as D,t as g,j as b,w as y}from"./client.b75038b4.js";function T(t){let s,a,e,r,n,o,m,$,E,I,D,T,V,w,j,L,N=t[0].date+"",q=t[0].title+"",x=t[0].html+"";return{c(){s=c("div"),a=c("div"),e=c("div"),r=g(N),n=i(),o=c("div"),m=c("a"),$=g(q),E=i(),I=c("div"),D=i(),T=c("div"),V=i(),w=c("script"),j=g("(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://starpelly.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),L=i(),this.h()},l(t){s=l(t,"DIV",{class:!0});var c=d(s);a=l(c,"DIV",{class:!0});var i=d(a);e=l(i,"DIV",{class:!0});var u=d(e);r=b(u,N),u.forEach(f),i.forEach(f),n=h(c),o=l(c,"DIV",{class:!0});var p=d(o);m=l(p,"A",{href:!0});var v=d(m);$=b(v,q),v.forEach(f),p.forEach(f),E=h(c),I=l(c,"DIV",{class:!0}),d(I).forEach(f),D=h(c),T=l(c,"DIV",{id:!0}),d(T).forEach(f),V=h(c),w=l(c,"SCRIPT",{});var g=d(w);j=b(g,"(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://starpelly.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),g.forEach(f),L=h(c),c.forEach(f),this.h()},h(){u(e,"class","articleday"),u(a,"class","articledate"),u(m,"href"," "),u(o,"class","articletitle"),u(I,"class","articlebody"),u(T,"id","disqus_thread"),u(s,"class","article")},m(t,c){p(t,s,c),v(s,a),v(a,e),v(e,r),v(s,n),v(s,o),v(o,m),v(m,$),v(s,E),v(s,I),I.innerHTML=x,v(s,D),v(s,T),v(s,V),v(s,w),v(w,j),v(s,L)},p(t,s){1&s&&N!==(N=t[0].date+"")&&y(r,N),1&s&&q!==(q=t[0].title+"")&&y($,q),1&s&&x!==(x=t[0].html+"")&&(I.innerHTML=x)},d(t){t&&f(s)}}}function V(t){let s,a,g,b,y,V,w,j;return a=new e({}),y=new r({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),document.title=w=t[0].title,{c(){s=c("div"),n(a.$$.fragment),g=i(),b=c("div"),n(y.$$.fragment),V=i(),this.h()},l(t){s=l(t,"DIV",{class:!0});var e=d(s);o(a.$$.fragment,e),g=h(e),b=l(e,"DIV",{class:!0});var r=d(b);o(y.$$.fragment,r),r.forEach(f),e.forEach(f),V=h(t);m("svelte-1uty71u",document.head).forEach(f),this.h()},h(){u(b,"class","grid_3"),u(s,"class","container container_4")},m(t,e){p(t,s,e),$(a,s,null),v(s,g),v(s,b),$(y,b,null),p(t,V,e),j=!0},p(t,s){let[a]=s;const e={};3&a&&(e.$$scope={dirty:a,ctx:t}),y.$set(e),(!j||1&a)&&w!==(w=t[0].title)&&(document.title=w)},i(t){j||(E(a.$$.fragment,t),E(y.$$.fragment,t),j=!0)},o(t){I(a.$$.fragment,t),I(y.$$.fragment,t),j=!1},d(t){t&&f(s),D(a),D(y),t&&f(V)}}}async function w(t){let{params:s}=t;const a=await this.fetch("blog/".concat(s.slug,".json")),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}class L extends t{constructor(t){super(),s(this,t,j,V,a,{post:0})}}export{L as default,w as preload};
