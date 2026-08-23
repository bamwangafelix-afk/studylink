const CACHE='studylink-shell-v11';
const SHELL=['./','./index.html','./css/styles.css?v=studylink-pwa-11','./js/app-v11.js?v=studylink-pwa-11','./manifest.webmanifest?v=studylink-pwa-11','./icons/studylink-192.png?v=studylink-pwa-11','./icons/studylink-512.png?v=studylink-pwa-11','./icons/studylink-login-pattern.png?v=studylink-pwa-11'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{
    if(!response||response.status!==200||response.type==='opaque')return response;
    const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));return response;
  }).catch(()=>request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
