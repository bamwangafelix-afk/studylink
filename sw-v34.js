const CACHE='studylink-shell-v34';
const SHELL=['./','./index.html','./css/styles.css?v=studylink-pwa-34','./js/app-v20.js?v=studylink-pwa-34','./manifest.webmanifest?v=studylink-pwa-34','./icons/studylink-192.png?v=studylink-pwa-34','./icons/studylink-512.png?v=studylink-pwa-34','./icons/studylink-login-full-logo.png?v=studylink-pwa-34'];
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
  const isAppShell=request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/js/app-v20.js')||url.pathname.endsWith('/css/styles.css')||url.pathname.endsWith('/manifest.webmanifest');
  event.respondWith((isAppShell?fetch(request,{cache:'no-store'}):caches.match(request).then(cached=>cached||fetch(request))).then(response=>{
    if(!response||response.status!==200||response.type==='opaque')return response;
    const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));return response;
  }).catch(()=>caches.match(request).then(cached=>cached||(request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
