const CACHE='studylink-shell-v84-compat-2';
const SHELL=['./','./index.html','./css/styles.css?v=studylink-pwa-84','./js/app-v20.js?v=studylink-pwa-84','./manifest.webmanifest?v=studylink-pwa-84','./icons/studylink-192.png?v=studylink-pwa-84','./icons/studylink-512.png?v=studylink-pwa-84','./icons/studylink-login-full-logo.png?v=studylink-pwa-84','./icons/person-available.svg?v=studylink-pwa-84'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING') event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  const url=new URL(request.url);
  const isAppAsset=request.mode==='navigate'||/\.(?:html|css|js|webmanifest)$/.test(url.pathname);
  const networkFirst=fetch(request).then(response=>{
    if(!response||response.status!==200||response.type==='opaque')return response;
    const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));return response;
  });
  event.respondWith(isAppAsset?networkFirst.catch(()=>caches.match(request).then(cached=>cached||Response.error())):caches.match(request).then(cached=>cached||networkFirst.catch(()=>Response.error())));
});
