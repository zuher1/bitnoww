"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/bitnoww/042c90e13c7f3d449dbcc23f7d25ebaf.woff","042c90e13c7f3d449dbcc23f7d25ebaf"],["/bitnoww/448c34a56d699c29117adc64c43affeb.woff2","448c34a56d699c29117adc64c43affeb"],["/bitnoww/575bf7f44a6fc665f63b255e72e7cb78.woff2","575bf7f44a6fc665f63b255e72e7cb78"],["/bitnoww/674f50d287a8c48dc19ba404d20fe713.eot","674f50d287a8c48dc19ba404d20fe713"],["/bitnoww/912ec66d7572ff821749319396470bde.svg","912ec66d7572ff821749319396470bde"],["/bitnoww/af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["/bitnoww/b06871f281fee6b241d60582ae9369b9.ttf","b06871f281fee6b241d60582ae9369b9"],["/bitnoww/e18bbf611f2a2e43afc071aa2f4e1512.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/bitnoww/e45d8975e01ac4fffb5dd6743073c324.ttf","e45d8975e01ac4fffb5dd6743073c324"],["/bitnoww/f44512c065920ca2df45b72ea2ca94d7.woff2","f44512c065920ca2df45b72ea2ca94d7"],["/bitnoww/f4769f9bdb7466be65088239c12046d1.eot","f4769f9bdb7466be65088239c12046d1"],["/bitnoww/f721466883998665b87923b92dea655b.svg","f721466883998665b87923b92dea655b"],["/bitnoww/fa2772327f55d8198301fdb8bcfc8158.woff","fa2772327f55d8198301fdb8bcfc8158"],["/bitnoww/fee66e712a8a08eef5805a46892932ad.woff","fee66e712a8a08eef5805a46892932ad"],["/bitnoww/index.html","bee642fc00393ac099e8a45d1b56daff"],["/bitnoww/static/css/main.be63e7e0.css","527248e42c0d2589c7e2ac117836cc67"],["/bitnoww/static/js/main.8a96a4c1.js","4730c3492ef66643d3046106354215d5"],["/bitnoww/static/media/landscape.27bd83ec.jpg","27bd83ec2b9ca52154c1ebf17364dd07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/bitnoww/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});