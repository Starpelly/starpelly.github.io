!function(){"use strict";const s=1713222914061,a=`cache${s}`,e=["/client/client.5b399f82.js","/client/inject_styles.5607aec6.js","/client/index.98a07ded.js","/client/about-after-effects.df659f36.js","/client/projects.47009d94.js","/client/videos.932291c1.js","/client/about.18a61caa.js","/client/index.d2d09753.js","/client/[slug].966a91fa.js","/client/[id].1750ab1c.js"].concat(["/service-worker-index.html","/assets/Images/bloggeneral/Screenshot 2023-07-21 020812.png","/assets/Images/bloggeneral/newvideomanfla.PNG","/assets/Images/bloggeneral/raylib-with-beef/addexisting.png","/assets/Images/bloggeneral/raylib-with-beef/cftweet.png","/assets/Images/bloggeneral/raylib-with-beef/createdproject.png","/assets/Images/bloggeneral/raylib-with-beef/dependency.png","/assets/Images/bloggeneral/raylib-with-beef/done.png","/assets/Images/bloggeneral/raylib-with-beef/firsttimestartup.png","/assets/Images/bloggeneral/raylib-with-beef/importproject.png","/assets/Images/bloggeneral/raylib-with-beef/properties.png","/assets/Images/bloggeneral/raylib-with-beef/startupcodegen.png","/assets/Images/bloggeneral/rhcanvasscreenshot0.png","/assets/Images/bloggeneral/rhcanvasscreenshot1.png","/assets/Images/dam/1.png","/assets/Images/social/explorer.gif","/assets/Images/social/github.png","/assets/Images/social/github32.png","/assets/Images/social/instagram.png","/assets/Images/social/instagram32.png","/assets/Images/social/twitter.png","/assets/Images/social/twitter32.png","/assets/Images/social/watermark.png","/assets/Images/social/youtube.svg","/assets/Images/social/youtube32.png","/assets/Images/tabs/ae/gd/gd.aep","/assets/Images/tabs/ae/gd/geometry dash.png","/assets/Images/tabs/ae/ng/ng.aep","/assets/Images/tabs/ae/ng/ng_beams.png","/assets/Images/tabs/ae/ng/ng_logo.png","/assets/Images/tabs/ae/ng/ng_tank.png","/assets/Images/tabs/ae/nn/niconico.aep","/assets/Images/tabs/ae/nn/niconico.png","/assets/Images/tabs/ae/nn/tv.jpg","/assets/Images/tabs/ae/om/NicePng_rays-png_635099.png","/assets/Images/tabs/ae/om/otomad.aep","/assets/Images/tabs/ae/smw/110271.png","/assets/Images/tabs/ae/smw/bg.png","/assets/Images/tabs/ae/smw/mariowalk.psd","/assets/Images/tabs/ae/smw/smw.aep","/assets/Images/tabs/beeflang.png","/assets/Images/tabs/buttontemplate.png","/assets/Images/tabs/buttontemplate_alt.png","/assets/Images/tabs/firefox.png","/assets/Images/tabs/gd.gif","/assets/Images/tabs/hackadoll.png","/assets/Images/tabs/heavenstudio.png","/assets/Images/tabs/homepage.png","/assets/Images/tabs/josef.png","/assets/Images/tabs/killmebaby.png","/assets/Images/tabs/kym.png","/assets/Images/tabs/motionmelody.png","/assets/Images/tabs/newgrounds.gif","/assets/Images/tabs/niconico.gif","/assets/Images/tabs/octagon.gif","/assets/Images/tabs/octagon.png","/assets/Images/tabs/octagon2.gif","/assets/Images/tabs/original/gd.gif","/assets/Images/tabs/original/newgrounds.gif","/assets/Images/tabs/original/niconico.gif","/assets/Images/tabs/otomad.gif","/assets/Images/tabs/oversimplified.png","/assets/Images/tabs/pepsiman.png","/assets/Images/tabs/projectfiles.png","/assets/Images/tabs/rhf.gif","/assets/Images/tabs/saraistupid.gif","/assets/Images/tabs/screenrecorder.png","/assets/Images/tabs/shapesnbeats.gif","/assets/Images/tabs/smw.gif","/assets/Images/tabs/smw.png","/assets/Images/tabs/smw_1.gif","/assets/Images/tabs/spice.png","/assets/Images/tabs/steam.png","/assets/Images/tabs/terry.gif","/assets/Images/tabs/test.png","/assets/Images/tabs/typescript.png","/assets/Images/tabs/unixporn.png","/assets/Images/tabs/walfas.org.png","/assets/Images/tabs/whatisaftereffects.png","/assets/Images/tabs/windows9.png","/assets/Images/tabs_classic/adobe.gif","/assets/Images/tabs_classic/alulabutton.gif","/assets/Images/tabs_classic/citationneededstamp.png","/assets/Images/tabs_classic/coco_cade.gif","/assets/Images/tabs_classic/discord-no-way.gif","/assets/Images/tabs_classic/dopi.gif","/assets/Images/tabs_classic/gaywomen.gif","/assets/Images/tabs_classic/godblessbutton1.gif","/assets/Images/tabs_classic/lol.gif","/assets/Images/tabs_classic/mmaker.gif","/assets/Images/tabs_classic/octagon.gif","/assets/Images/tabs_classic/piss.gif","/assets/Images/tabs_classic/smbx.gif","/assets/Images/tabs_classic/ss.png","/assets/Images/tabs_classic/stys.png","/assets/Images/tabs_classic/talkhaus.gif","/assets/Images/tabs_classic/terry.gif","/assets/Images/tabs_classic/theworldmachine.gif","/assets/Images/tabs_classic/vscbutton.gif","/assets/Images/tabs_classic/wii.gif","/assets/Images/tutorials/consoleDebugEnableColor.png","/assets/Images/tutorials/custom stroke/1.png","/assets/Images/tutorials/custom stroke/2.png","/assets/Images/tutorials/custom stroke/3.png","/assets/Images/tutorials/custom stroke/4.png","/assets/Images/tutorials/dropdownConsoleDebugDatabase.PNG","/assets/Images/tutorials/preferenceappearencecolor.png","/assets/Overla.png","/assets/Overlay2.png","/assets/Pause.png","/assets/Play.png","/assets/articlebg.png","/assets/bannerHome.png","/assets/block.png","/assets/circle.png","/assets/cssource.png","/assets/floor.png","/assets/fonts/HelveticaNeue-Regular.otf","/assets/fonts/popjoy.otf","/assets/gaysecks.png","/assets/mayo.ase","/assets/mayo.gif","/assets/mushrooms.png","/assets/notacircle.png","/assets/omocat.png","/assets/otherpelly.jpg","/assets/pelly.png","/assets/pfpcrop.png","/assets/raichulooong.gif","/assets/randomimages/0.jpg","/assets/sanick.gif","/assets/skins/bruh","/assets/skins/gdskin.png","/assets/skins/gdskinslim.png","/assets/skins/oldskin.png","/assets/skins/skin.png","/assets/skins/skinslim.png","/assets/static.wav","/assets/stupidprogrammingshit.jpg","/assets/tapefeed.mp3","/assets/text-bg.png","/assets/tiled static.gif","/bigotedbot.html","/cointoss/Build/cointoss.data","/cointoss/Build/cointoss.framework.js","/cointoss/Build/cointoss.loader.js","/cointoss/Build/cointoss.wasm","/cointoss/TemplateData/favicon.ico","/cointoss/TemplateData/fullscreen-button.png","/cointoss/TemplateData/style.css","/cointoss/index.html","/cointoss/logo.png","/css/gOoDStyLe.css","/css/layout.css","/css/otomad.css","/css/pelly.css","/files/about.txt","/files/greenscreens.html","/files/videos.html","/files.html","/global.css","/icon.png","/isicdxaninsanedemon.html","/js/otomad.js","/js/randomimage.js","/libleftbad.html","/manifest.json","/otomad.html","/polcomp/polcomp.js","/polcomp/pooliticalcumpiss.png","/redditvalid.html","/rule34.html","/walroose/Nanami-Rounded-Book.ttf","/walroose/walroose.css","/walroose/walroose.js","/walroose/walroose.png","/walroose/walroosegone.png","/walroose.html"]),t=new Set(e);self.addEventListener("install",(s=>{s.waitUntil(caches.open(a).then((s=>s.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const e of s)e!==a&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const e=new URL(a.request.url),g=e.protocol.startsWith("http"),n=e.hostname===self.location.hostname&&e.port!==self.location.port,o=e.host===self.location.host&&t.has(e.pathname),i="only-if-cached"===a.request.cache&&!o;!g||n||i||a.respondWith((async()=>o&&await caches.match(a.request)||async function(a){const e=await caches.open(`offline${s}`);try{const s=await fetch(a);return e.put(a,s.clone()),s}catch(s){const t=await e.match(a);if(t)return t;throw s}}(a.request))())}))}();
