import{_ as t,a as n,b as r,c as e,i as o,d as s,S as a,s as c,e as f,t as u,f as l,H as i,g as h,h as v,j as p,l as g,E as m,k as d,m as R,o as y,p as E,q as b,F as j,w as B,G as w,B as x}from"./client.b5ad24a9.js";function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var a=n(this).constructor;o=Reflect.construct(s,arguments,a)}else o=s.apply(this,arguments);return r(this,o)}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function $(t){var n,r,e,o,s,a,c=t[1].title+"",j=t[1].html+"";return{c:function(){n=f("li"),r=f("a"),e=u(c),o=l(),s=new i,this.h()},l:function(t){n=h(t,"LI",{});var a=v(n);r=h(a,"A",{rel:!0,href:!0});var f=v(r);e=p(f,c),o=g(f),s=m(f),f.forEach(d),a.forEach(d),this.h()},h:function(){s.a=null,R(r,"rel","prefetch"),R(r,"href",a="blog/"+t[1].slug)},m:function(t,a){y(t,n,a),E(n,r),E(r,e),E(r,o),s.m(j,r)},p:function(t,n){1&n&&c!==(c=t[1].title+"")&&b(e,c),1&n&&j!==(j=t[1].html+"")&&s.p(j),1&n&&a!==(a="blog/"+t[1].slug)&&R(r,"href",a)},d:function(t){t&&d(n)}}}function k(t){for(var n,r,e,o,s,a=t[0],c=[],i=0;i<a.length;i+=1)c[i]=$(L(t,a,i));return{c:function(){n=l(),r=f("h1"),e=u("Recent posts"),o=l(),s=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){j('[data-svelte="svelte-hfp9t8"]',document.head).forEach(d),n=g(t),r=h(t,"H1",{});var a=v(r);e=p(a,"Recent posts"),a.forEach(d),o=g(t),s=h(t,"UL",{class:!0});for(var f=v(s),u=0;u<c.length;u+=1)c[u].l(f);f.forEach(d),this.h()},h:function(){document.title="Blog",R(s,"class","svelte-1frg2tf")},m:function(t,a){y(t,n,a),y(t,r,a),E(r,e),y(t,o,a),y(t,s,a);for(var f=0;f<c.length;f+=1)c[f].m(s,null)},p:function(t,n){var r=B(n,1)[0];if(1&r){var e;for(a=t[0],e=0;e<a.length;e+=1){var o=L(t,a,e);c[e]?c[e].p(o,r):(c[e]=$(o),c[e].c(),c[e].m(s,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=a.length}},i:w,o:w,d:function(t){t&&d(n),t&&d(r),t&&d(o),t&&d(s),x(c,t)}}}function q(){return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function A(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var F=function(n){t(f,a);var r=H(f);function f(t){var n;return e(this,f),n=r.call(this),o(s(n),t,A,k,c,{posts:0}),n}return f}();export{F as default,q as preload};
