import{I as t,J as a,_ as s,a as n,b as e,c as r,i as c,d as i,S as o,s as u,N as f,C as l,e as d,r as h,f as p,g as m,h as v,u as $,l as E,k as y,F as I,m as D,o as g,v as b,p as x,w as T,x as V,y as w,z as j,t as L,j as R,q as N}from"./client.52ba5409.js";function O(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r=n(t);if(a){var c=n(this).constructor;s=Reflect.construct(r,arguments,c)}else s=r.apply(this,arguments);return e(this,s)}}function q(t){var a,s,n,e,r,c,i,o,u,f,l,h,$,I,b,T,V=t[0].date+"",w=t[0].title+"",j=t[0].html+"";return{c:function(){a=d("div"),s=d("div"),n=d("div"),e=L(V),r=p(),c=d("div"),i=d("a"),o=L(w),u=p(),f=d("div"),l=p(),h=d("div"),$=p(),I=d("script"),b=L("(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://starpelly.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),T=p(),this.h()},l:function(t){a=m(t,"DIV",{class:!0});var d=v(a);s=m(d,"DIV",{class:!0});var p=v(s);n=m(p,"DIV",{class:!0});var D=v(n);e=R(D,V),D.forEach(y),p.forEach(y),r=E(d),c=m(d,"DIV",{class:!0});var g=v(c);i=m(g,"A",{href:!0});var x=v(i);o=R(x,w),x.forEach(y),g.forEach(y),u=E(d),f=m(d,"DIV",{class:!0}),v(f).forEach(y),l=E(d),h=m(d,"DIV",{id:!0}),v(h).forEach(y),$=E(d),I=m(d,"SCRIPT",{});var j=v(I);b=R(j,"(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://starpelly.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),j.forEach(y),T=E(d),d.forEach(y),this.h()},h:function(){D(n,"class","articleday"),D(s,"class","articledate"),D(i,"href"," "),D(c,"class","articletitle"),D(f,"class","articlebody"),D(h,"id","disqus_thread"),D(a,"class","article")},m:function(t,d){g(t,a,d),x(a,s),x(s,n),x(n,e),x(a,r),x(a,c),x(c,i),x(i,o),x(a,u),x(a,f),f.innerHTML=j,x(a,l),x(a,h),x(a,$),x(a,I),x(I,b),x(a,T)},p:function(t,a){1&a&&V!==(V=t[0].date+"")&&N(e,V),1&a&&w!==(w=t[0].title+"")&&N(o,w),1&a&&j!==(j=t[0].html+"")&&(f.innerHTML=j)},d:function(t){t&&y(a)}}}function B(t){var a,s,n,e,r,c,i,o;return s=new f({}),r=new l({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),document.title=i=t[0].title,{c:function(){a=d("div"),h(s.$$.fragment),n=p(),e=d("div"),h(r.$$.fragment),c=p(),this.h()},l:function(t){a=m(t,"DIV",{class:!0});var i=v(a);$(s.$$.fragment,i),n=E(i),e=m(i,"DIV",{class:!0});var o=v(e);$(r.$$.fragment,o),o.forEach(y),i.forEach(y),c=E(t),I('[data-svelte="svelte-1uty71u"]',document.head).forEach(y),this.h()},h:function(){D(e,"class","grid_3"),D(a,"class","container container_4")},m:function(t,i){g(t,a,i),b(s,a,null),x(a,n),x(a,e),b(r,e,null),g(t,c,i),o=!0},p:function(t,a){var s=T(a,1)[0],n={};3&s&&(n.$$scope={dirty:s,ctx:t}),r.$set(n),(!o||1&s)&&i!==(i=t[0].title)&&(document.title=i)},i:function(t){o||(V(s.$$.fragment,t),V(r.$$.fragment,t),o=!0)},o:function(t){w(s.$$.fragment,t),w(r.$$.fragment,t),o=!1},d:function(t){t&&y(a),j(s),j(r),t&&y(c)}}}function C(t){return H.apply(this,arguments)}function H(){return(H=t(a.mark((function t(s){var n,e,r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(r=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(e.status,r.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function S(t,a,s){var n=a.post;return t.$$set=function(t){"post"in t&&s(0,n=t.post)},[n]}var _=function(t){s(n,o);var a=O(n);function n(t){var s;return r(this,n),s=a.call(this),c(i(s),t,S,B,u,{post:0}),s}return n}();export{_ as default,C as preload};
