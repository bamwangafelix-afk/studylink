const SUBJECTS=["Math","Algebra","Calculus","Statistics","Physics","Chemistry","Biology","CS","Python","JavaScript","TypeScript","Java","C++","C#","C","Rust","Go","Ruby","PHP","Swift","Kotlin","React","Vue","Angular","Node.js","HTML/CSS","SQL","MySQL","PostgreSQL","MongoDB","Firebase","Docker","Linux","Git","AWS","Cloud","AI/ML","Deep Learning","Data Science","Cybersecurity","Networks","English","French","Spanish","Arabic","Chinese","Portuguese","History","Economics","Law","Medicine","Engineering","Business","Psychology","Art","Music","Geography","Philosophy","Accounting","Marketing"];
const COUNTRIES=["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Belarus","Belgium","Belize","Benin","Bolivia","Bosnia","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Chad","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominican Republic","DR Congo","Ecuador","Egypt","El Salvador","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
const STICKERS=["😀","😁","😂","🤣","😃","😄","😅","😆","😍","🥰","😎","🤩","🥳","😭","😤","😡","🤬","😱","😰","🤔","🙄","😏","🥺","🥹","🫡","🤗","😇","🤓","😴","🤤","🙈","🙉","🙊","🐶","🐱","🐼","🦊","🦁","🐯","🐸","🐧","🐦","🦄","🐉","🦋","🌟","⭐","🔥","💯","🎉","🎊","🏆","💪","👏","🙌","🤜","🤛","✌️","🤞","💡","📚","✏️","🖊️","🎓","🏫","💻","📱","🤖","🚀","🛸","🌈","☀️","🌙","⚡","❄️","🌊","🍕","🍔","🍟","🍣","🍜","🧁","🍰","☕","🧋","🎮","🎵","🎸","🎤","🏀","⚽","🏆","🥇","❤️","🧡","💛","💚","💙","💜","🖤","🤍","💔","💝","💖","💫","✨","🌸","🌺","🌻","🌹"];
const FLAGS=["🇦🇫","🇦🇱","🇩🇿","🇦🇩","🇦🇴","🇦🇷","🇦🇲","🇦🇺","🇦🇹","🇦🇿","🇧🇭","🇧🇩","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇨🇻","🇹🇩","🇨🇱","🇨🇳","🇨🇴","🇨🇬","🇨🇷","🇭🇷","🇨🇺","🇨🇾","🇨🇿","🇩🇰","🇩🇯","🇩🇴","🇨🇩","🇪🇨","🇪🇬","🇸🇻","🇪🇷","🇪🇪","🇪🇹","🇫🇯","🇫🇮","🇫🇷","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇷","🇬🇹","🇬🇳","🇭🇹","🇭🇳","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇱","🇮🇹","🇨🇮","🇯🇲","🇯🇵","🇯🇴","🇰🇿","🇰🇪","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇹","🇱🇺","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇷","🇲🇺","🇲🇽","🇲🇩","🇲🇳","🇲🇪","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇵","🇳🇱","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇰🇵","🇲🇰","🇳🇴","🇴🇲","🇵🇰","🇵🇸","🇵🇦","🇵🇾","🇵🇪","🇵🇭","🇵🇱","🇵🇹","🇶🇦","🇷🇴","🇷🇺","🇷🇼","🇸🇦","🇸🇳","🇷🇸","🇸🇱","🇸🇬","🇸🇰","🇸🇮","🇸🇴","🇿🇦","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇸🇩","🇸🇪","🇨🇭","🇸🇾","🇹🇼","🇹🇿","🇹🇭","🇹🇬","🇹🇳","🇹🇷","🇹🇲","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🇺🇸","🇺🇾","🇺🇿","🇻🇪","🇻🇳","🇾🇪","🇿🇲","🇿🇼"];
const CLOUD='dmhbui3wf',PRESET='Studylink';

firebase.initializeApp({apiKey:"AIzaSyBQXvheNG_6r5NYjwru_0l_EUsKYrT4w1g",authDomain:"studylink-e1803.firebaseapp.com",projectId:"studylink-e1803",storageBucket:"studylink-e1803.firebasestorage.app",messagingSenderId:"51988890739",appId:"1:51988890739:web:fa5b3486e7a32c3fe95606"});
const db=firebase.firestore(),auth=firebase.auth(),GP=new firebase.auth.GoogleAuthProvider();

let CU=null,MP=null,myPho='';
let selTags=[],ftab='all',dark=false,favs=new Set();
let curChat=null,chatUnsub=null,curGrp=null,grpUnsub=null,allUsers=[];
let fType=null,fDest='p';
let mr=null,isRec=false,vCh=[],vSec=0,vInt=null;
let gmr=null,gIsRec=false,gvCh=[],gvSec=0,gvInt=null;
let vPlayers={},notifUnsub=null,msgBUnsub=null;
let replyMsg=null,curEId=null,curED=null,typDebounce=null;

async function loadFavs(){
  if(!CU)return;
  try{
    const sn=await db.collection('users').doc(CU.uid).get();
    const data=sn.exists?sn.data():null;
    favs=new Set(data?.favs||[]);
  }catch(e){favs=new Set();}
}
async function saveFavs(){
  if(!CU)return;
  try{await db.collection('users').doc(CU.uid).update({favs:[...favs]});}catch(e){}
}

// ── AUTO PRESENCE ──
async function setPresence(status){
  if(!CU)return;
  try{
    const upd={status};
    if(status==='Offline')upd.lastSeen=firebase.firestore.FieldValue.serverTimestamp();
    await db.collection('users').doc(CU.uid).update(upd);
  }catch(e){}
}
function setupPresence(){
  setPresence('Online');
  // Heartbeat every 15 seconds for faster online detection
  setInterval(()=>{if(CU&&document.visibilityState!=='hidden')setPresence('Online');},15000);
  document.addEventListener('visibilitychange',()=>{
    setPresence(document.visibilityState==='hidden'?'Offline':'Online');
  });
  window.addEventListener('beforeunload',()=>setPresence('Offline'));
  window.addEventListener('focus',()=>setPresence('Online'));
  window.addEventListener('blur',()=>setTimeout(()=>{if(document.visibilityState==='hidden')setPresence('Offline');},3000));
}

// ── CLOUDINARY ──
async function uploadCloud(file,type){
  // Upload running in background
  if(type==='image'){
    try{file=await compressImg(file);}catch(e){}
  }
  const fd=new FormData();fd.append('file',file);fd.append('upload_preset',PRESET);
  // Cloudinary resource types: image→image, audio/voice→video, doc→raw
  const rtype=(type==='audio'||type==='voice')?'video':type==='doc'?'raw':'image';
  try{
    const r=await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/${rtype}/upload`,{method:'POST',body:fd});
    const d=await r.json();
    if(d.secure_url)return d.secure_url;
    throw new Error(d.error?.message||'Upload failed');
  }catch(e){showToast('❌ '+e.message);return null;}
}
function compressImg(file){
  return new Promise(res=>{
    const img=new Image(),url=URL.createObjectURL(file);
    img.onload=()=>{
      // Max 1000px, quality 0.7 — keeps files well under 2MB
      const c=document.createElement('canvas');let w=img.width,h=img.height,mx=1000;
      if(w>mx||h>mx){if(w>h){h=Math.round(h*mx/w);w=mx;}else{w=Math.round(w*mx/h);h=mx;}}
      c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);
      c.toBlob(b=>res(new File([b],file.name,{type:'image/jpeg'})),'image/jpeg',0.7);URL.revokeObjectURL(url);
    };
    img.onerror=()=>{URL.revokeObjectURL(url);res(file);};
    img.src=url;
  });
}

// ── AUTH ──
// Show spinner while waiting for auth state - prevents flash of login screen
el('ov').style.display='flex';
auth.onAuthStateChanged(async u=>{
  if(u){
    CU=u;
    const sn=await db.collection('users').doc(u.uid).get().catch(()=>null);
    const data=sn?.exists?sn.data():null;
    if(data&&!data.country&&el('step2F').style.display!=='flex'){
      el('ov').style.display='none';
      el('auth').style.display='flex';
      showStep2();
      return;
    }
    try{await loadPro();}catch(e){console.log('loadPro error:',e);}
    try{await loadFavs();}catch(e){}
    // Migrate existing chats to chatIds array — only runs once ever (when migrated flag not set)
    try{
      const userSnap=await db.collection('users').doc(u.uid).get();
      const ud=userSnap.data()||{};
      if(!ud.chatIdsMigrated&&!ud.chatIds?.length){
        const allChats=await db.collection('chats').where('participants','array-contains',u.uid).get();
        const myChatIds=allChats.docs.map(d=>d.id);
        await db.collection('users').doc(u.uid).update({chatIds:myChatIds,chatIdsMigrated:true});
      }else if(!ud.chatIdsMigrated){
        db.collection('users').doc(u.uid).update({chatIdsMigrated:true}).catch(()=>{});
      }
    }catch(e){console.log('migrate chatIds:',e);}
    try{setupPresence();}catch(e){}
    try{listenPosts();}catch(e){}
    try{listenUsers();}catch(e){}
    try{setupNotifL();}catch(e){}
    try{setupInbox();}catch(e){showToast('❌ setupInbox failed: '+e.message);}
    el('auth').style.display='none';
    el('ov').style.display='none';
    tab('home');
  }else{
    if(notifUnsub)try{notifUnsub();}catch(e){}
    if(msgBUnsub)try{msgBUnsub();}catch(e){}
    if(chatUnsub)try{chatUnsub();}catch(e){}
    if(grpUnsub)try{grpUnsub();}catch(e){}
    if(typeof inboxUnsub==='function')try{inboxUnsub();}catch(e){}
    if(typeof inboxChatsUnsub==='function')try{inboxChatsUnsub();}catch(e){}
    _cachedInboxDocs=null;
    CU=null;MP=null;
    el('auth').style.display='flex';
    el('ov').style.display='none';
    showLogin();
  }
});

function showLogin(){['loginF','regF','resetF','step2F'].forEach(id=>el(id).style.display='none');el('loginF').style.display='flex';el('asub').textContent='Connect • Learn • Grow'; el('asub').style.fontStyle='italic';el('lErr').textContent='';}
function showReg(){['loginF','regF','resetF','step2F'].forEach(id=>el(id).style.display='none');el('regF').style.display='flex';el('asub').textContent='Connect • Learn • Grow'; el('asub').style.fontStyle='italic';el('rErr').textContent='';}
function showReset(){['loginF','regF','resetF','step2F'].forEach(id=>el(id).style.display='none');el('resetF').style.display='flex';el('asub').textContent='Connect • Learn • Grow'; el('asub').style.fontStyle='italic';}

let s2Intent='both',s2SelTags=[];
function showStep2(){
  ['loginF','regF','resetF'].forEach(id=>el(id).style.display='none');
  el('step2F').style.display='flex';
  el('asub').textContent='Step 2 of 2 — Your Profile';
  // Populate countries
  const sc=el('s2C');
  if(sc.options.length<=1){COUNTRIES.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;sc.appendChild(o);});}
  // Populate subject tags
  const st=el('s2Tags');
  if(!st.children.length){
    SUBJECTS.forEach(s=>{
      const b=document.createElement('button');
      b.type='button';
      b.textContent=s;
      b.style.cssText='padding:4px 10px;border-radius:20px;font-size:11px;font-weight:bold;border:2px solid rgba(255,255,255,.5);color:rgba(255,255,255,.8);cursor:pointer;background:transparent;margin:2px;';
      b.onclick=()=>{
        if(s2SelTags.includes(s)){s2SelTags=s2SelTags.filter(t=>t!==s);b.style.background='transparent';b.style.color='rgba(255,255,255,.8)';}
        else{s2SelTags.push(s);b.style.background='rgba(255,255,255,.25)';b.style.color='#fff';}
      };
      st.appendChild(b);
    });
  }
  setIntent('both');
}
function setIntent(v){
  s2Intent=v;
  ['need','help','both'].forEach(t=>{
    const b=el('s2'+t.charAt(0).toUpperCase()+t.slice(1)+'Btn');
    if(b){b.style.background=v===t?'rgba(243,156,18,.8)':'transparent';b.style.color=v===t?'#fff':'rgba(255,255,255,.7)';b.style.borderColor=v===t?'#F39C12':'rgba(255,255,255,.4)';}
  });
}
async function completeProfile(){
  if(!CU)return;
  const uni=el('s2U').value.trim(),course=el('s2Co').value.trim(),year=el('s2Y').value.trim(),country=el('s2C').value;
  if(!country){el('s2Err').textContent='Please select your country';return;}
  if(!uni){el('s2Err').textContent='Please enter your university or school';return;}
  if(!course){el('s2Err').textContent='Please enter your course or major';return;}
  el('s2Err').textContent='';
  showOv(true);
  try{
    await db.collection('users').doc(CU.uid).set({country,uni,course,year,tags:s2SelTags,intent:s2Intent},{merge:true});
    await loadPro();
    el('auth').style.display='none';
    showOv(false);
    tab('home');
  }catch(e){el('s2Err').textContent='❌ '+e.message;showOv(false);}
}
async function doLogin(){
  const e=v('lE'),p=v('lP');
  if(!e||!p){el('lErr').textContent='Fill all fields';return;}
  el('lErr').textContent='';
  const btn=document.querySelector('#loginF .abtn');
  if(btn){btn.disabled=true;btn.textContent='Logging in...';}
  try{
    await auth.signInWithEmailAndPassword(e,p);
    // onAuthStateChanged will handle the rest
  }catch(err){
    el('lErr').textContent=fErr(err.code);
    if(btn){btn.disabled=false;btn.textContent='🔐 Login';}
  }
}
async function doGoogle(){
  const btn=document.querySelector('#loginF .abtn.g')||document.querySelector('#regF .abtn.g');
  try{
    const r=await auth.signInWithPopup(GP);const u=r.user;
    const sn=await db.collection('users').doc(u.uid).get();
    if(!sn.exists){
      await db.collection('users').doc(u.uid).set({name:u.displayName||'User',email:u.email||'',country:'',uni:'',course:'',year:'',langs:[],bio:'',skills:[],status:'Online',photo:u.photoURL||'',uid:u.uid,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
      notifyAllExcept(u.uid,'🎓','New Member!',`${u.displayName||'Someone'} just joined StudyLink!`);
    }
  }catch(err){showToast('❌ '+err.message);}
}
async function doReg(){
  const name=v('rN'),email=v('rE'),pass=v('rP');
  if(!name||!email||!pass){el('rErr').textContent='Fill all fields';return;}
  if(pass.length<6){el('rErr').textContent='Min 6 chars';return;}
  el('rErr').textContent='';
  const btn=document.querySelector('#regF .abtn');
  if(btn){btn.disabled=true;btn.textContent='Creating...';}
  try{
    const c=await auth.createUserWithEmailAndPassword(email,pass);
    CU=c.user;
    await db.collection('users').doc(c.user.uid).set({name,email,country:'',uni:'',course:'',year:'',langs:[],bio:'',skills:[],tags:[],intent:'both',status:'Online',photo:'',uid:c.user.uid,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    notifyAllExcept(c.user.uid,'🎓','New Member!',`${name} just joined StudyLink!`);
    if(btn){btn.disabled=false;btn.textContent='✅ Create Account';}
    showStep2();
  }catch(err){
    el('rErr').textContent=fErr(err.code);
    if(btn){btn.disabled=false;btn.textContent='✅ Create Account';}
  }
}
async function doReset(){
  const e=v('resetE');if(!e){el('resetErr').textContent='Enter email';return;}
  showOv(true);
  try{await auth.sendPasswordResetEmail(e);showToast('📧 Reset email sent!');showLogin();}
  catch(err){el('resetErr').textContent=fErr(err.code);}
  showOv(false);
}
async function notifyAllExcept(senderUid,icon,title,body){
  try{
    const sn=await db.collection('users').get();
    const b=db.batch();
    sn.docs.forEach(d=>{
      if(d.id!==senderUid){
        b.set(db.collection('notifications').doc(),{toUid:d.id,icon,title,body,read:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
      }
    });
    await b.commit();
  }catch(e){console.log(e);}
}
function fErr(c){const m={'auth/user-not-found':'No account found','auth/wrong-password':'Wrong password','auth/invalid-credential':'Wrong email or password','auth/email-already-in-use':'Email already registered','auth/weak-password':'Min 6 chars','auth/invalid-email':'Invalid email','auth/popup-closed-by-user':'Popup closed'};return m[c]||'Error: '+c;}
async function doOut(){if(!confirm('Disconnect?'))return;await setPresence('Offline');if(inboxChatUnsub)inboxChatUnsub();await auth.signOut();}
async function delAccount(){
  if(!confirm('Delete account permanently?'))return;
  showOv(true);
  try{
    await setPresence('Offline');
    const b=db.batch();
    const ps=await db.collection('posts').where('uid','==',CU.uid).get();
    ps.docs.forEach(d=>b.delete(d.ref));
    b.delete(db.collection('users').doc(CU.uid));
    await b.commit();await CU.delete();
  }catch(e){showToast('❌ Sign out and back in first');showOv(false);}
}

// ── PROFILE ──
async function loadPro(){
  try{
    const sn=await db.collection('users').doc(CU.uid).get();
    if(sn.exists){
      MP=sn.data();myPho=MP.photo||'';
      el('topN').textContent=MP.name||'';
      el('uN').value=MP.name||'';el('uBio').value=MP.bio||'';
      el('uU').value=MP.uni||'';el('uCo').value=MP.course||'';
      el('uY').value=MP.year||'';
      el('uL').value=(MP.langs||[]).join(', ');
      el('uSk').value=(MP.skills||[]).join(', ');
      if(MP.country)el('uC').value=MP.country;
      if(MP.intent)setEIntent(MP.intent);else setEIntent('both');
      if(MP.photo){el('myPic').innerHTML=`<img src="${MP.photo}">`;el('pcPic').innerHTML=`<img src="${MP.photo}">`;}
      el('myDot').className='odot online';
      el('pcDot').className='odot online';
      if(MP.name){updatePC();el('pcardEl').style.display='flex';el('EF').style.display='none';}
      else el('EF').style.display='block';
    }else el('EF').style.display='block';
  }catch(e){console.log(e);}
}
function showEF(){el('EF').style.display='block';el('EF').scrollIntoView({behavior:'smooth'});}
function hideEF(){el('EF').style.display='none';}
function getFlag(country){
  const idx=COUNTRIES.indexOf(country);
  return idx>=0&&FLAGS[idx]?FLAGS[idx]:'🌍';
}
function getIntentBadge(intent){
  if(intent==='need')return'<span style="display:inline-block;padding:2px 9px;border-radius:10px;font-size:11px;font-weight:bold;background:#e8f4fd;color:#1565c0;margin-top:3px;">🙋 Needs Help</span>';
  if(intent==='help')return'<span style="display:inline-block;padding:2px 9px;border-radius:10px;font-size:11px;font-weight:bold;background:#e8f8ef;color:#1a7a3c;margin-top:3px;">🧑‍🏫 Can Help</span>';
  return'';
}
function updatePC(){
  if(!MP)return;
  el('pcPic').innerHTML=MP.photo?`<img src="${MP.photo}">`:'👤';
  el('pcDot').className='odot online';
  el('pcName').textContent=MP.name||'';
  el('pcBio').textContent=MP.bio||'';
  el('pcInfo').textContent=getFlag(MP.country||'')+' '+(MP.country||'—')+' | 🏛️ '+(MP.uni||'—')+' | 📖 '+(MP.course||'—');
  // Intent badge — add after pcInfo
  let ib=el('pcIntent');
  if(!ib){ib=document.createElement('div');ib.id='pcIntent';el('pcardEl').querySelector('div:last-child').appendChild(ib);}
  ib.innerHTML=getIntentBadge(MP.intent||'both');
}
function loadPic(e){
  if(!e.target.files[0])return;
  const r=new FileReader();
  r.onload=()=>{myPho=r.result;el('myPic').innerHTML=`<img src="${r.result}">`;showToast('📷 Photo ready');};
  r.readAsDataURL(e.target.files[0]);
}
let eIntent='both';
function setEIntent(v){
  eIntent=v;
  ['need','help','both'].forEach(t=>{
    const b=el('e'+t.charAt(0).toUpperCase()+t.slice(1)+'Btn');
    if(b){b.style.background=v===t?'var(--btnB)':'transparent';b.style.color=v===t?'#fff':'var(--txt)';b.style.borderColor=v===t?'var(--btnB)':'var(--brd)';}
  });
}
async function savePro(){
  if(!CU)return;
  const name=v('uN');if(!name){showToast('❌ Name required');return;}
  const langs=v('uL').split(',').map(l=>l.trim()).filter(Boolean);
  const skills=v('uSk').split(',').map(s=>s.trim()).filter(Boolean);
  const data={name,bio:v('uBio'),country:el('uC').value||'',uni:v('uU'),course:v('uCo'),year:v('uY'),langs,skills,intent:eIntent,status:'Online',photo:myPho};
  showOv(true);
  try{
    await db.collection('users').doc(CU.uid).set(data,{merge:true});
    MP={...MP,...data};el('topN').textContent=name;updatePC();
    el('pcardEl').style.display='flex';el('EF').style.display='none';
    showToast('✅ Saved!');
  }catch(e){showToast('❌ '+e.message);}
  showOv(false);
}

// ── USERS ──
function listenUsers(){
  db.collection('users').onSnapshot(sn=>{
    allUsers=sn.docs.map(d=>d.data());
    // Only re-render Find if it's currently visible
    if(el('Pfind')&&el('Pfind').style.display!=='none'){
      renderFind(el('findQ')?.value||'');
    }
    // Update online dots on feed without full re-render
    sn.docChanges().forEach(change=>{
      if(change.type==='modified'){
        const u=change.doc.data();
        // Update status dot in inbox if visible
        const st=getStatusInfo(u.status,u.lastSeen);
        document.querySelectorAll(`[data-uid="${u.uid}"] .status-dot`).forEach(dot=>{
          dot.style.background=st.cls==='online'?'#2ECC71':st.cls==='busy'?'#e74c3c':'#95a5a6';
        });
      }
    });
  },e=>console.log('users:',e));
}

// ── POSTS ──
let cachedPosts=[],lastPostCount=0;
function listenPosts(){
  db.collection('posts').orderBy('createdAt','desc').limit(30).onSnapshot(sn=>{
    const newPosts=sn.docs.map(d=>({id:d.id,...d.data()}));
    const isHomeVisible=el('Phome')&&el('Phome').style.display!=='none';
    if(isHomeVisible){
      cachedPosts=newPosts;lastPostCount=cachedPosts.length;
      renderHome(cachedPosts);
    }else{
      // Not on home tab — just update badge count, don't re-render
      if(lastPostCount>0&&newPosts.length>lastPostCount){
        const newCount=newPosts.length-lastPostCount;
        const b=el('feedB');if(b){b.textContent=newCount;b.style.display='inline-block';}
      }
      cachedPosts=newPosts;lastPostCount=cachedPosts.length;
    }
  },e=>console.log(e));
}
function toggleGN(val){el('gnW').style.display=val==='Group'?'block':'none';}
async function addPost(){
  if(!MP?.name)return alert('Complete your profile first');
  const text=v('pText');if(!text)return alert('Write something');
  const type=el('pType').value;
  const gname=type==='Group'?v('gName'):'';
  if(type==='Group'&&!gname)return alert('Enter group name');
  showOv(true);
  try{
    const ref=await db.collection('posts').add({type,text,tags:[...selTags],groupName:gname,user:{name:MP.name,country:MP.country||'',uni:MP.uni||'',course:MP.course||'',year:MP.year||'',status:'Online',photo:myPho,intent:MP.intent||'both'},uid:CU.uid,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    if(type==='Group')await db.collection('groups').doc(ref.id).set({name:gname,postId:ref.id,creatorUid:CU.uid,members:[CU.uid],createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    // only send to ALERTS (not messages)
    notifyAllExcept(CU.uid,'📢','📢 New Post by '+MP.name,text.substring(0,60));
    selTags=[];document.querySelectorAll('#tagSel .tag').forEach(b=>b.classList.remove('sel'));
    el('pText').value='';el('pType').value='Individual';el('gName').value='';el('gnW').style.display='none';
    showToast('📢 Posted!');tab('home');
  }catch(e){showToast('❌ '+e.message);}
  showOv(false);
}
async function delPost(id){if(!confirm('Delete?'))return;await db.collection('posts').doc(id).delete();}
function fmtLastSeen(lastSeen){
  if(!lastSeen)return'Active a while ago';
  const sec=Math.floor((Date.now()-(lastSeen.toDate?lastSeen.toDate().getTime():lastSeen*1000))/1000);
  if(sec<10)return'Active just now';
  if(sec<60)return'Active '+sec+'s ago';
  const min=Math.floor(sec/60);
  if(min<60)return'Active '+min+'m ago';
  const hr=Math.floor(min/60);
  if(hr<24)return'Active '+hr+'h ago';
  const dy=Math.floor(hr/24);
  if(dy===1)return'Active yesterday';
  if(dy<7)return'Active '+dy+'d ago';
  return'Active over a week ago';
}
function getStatusInfo(status,lastSeen){
  if(status==='Online')return{cls:'online',label:'🟢 Online'};
  if(status==='Busy')return{cls:'busy',label:'🔴 Busy'};
  return{cls:'offline',label:'⚫ '+fmtLastSeen(lastSeen)};
}
function renderHome(posts){
  const f=el('feed');
  if(!posts?.length){f.innerHTML="<p style='text-align:center;color:#888;'>No posts yet.</p>";return;}
  f.innerHTML='';
  posts.forEach(p=>{
    const isG=p.type==='Group',isOwn=p.uid===CU?.uid;
    const st=getStatusInfo(p.user?.status,p.user?.lastSeen);
    const tags=(p.tags||[]).map(t=>`<span class="tbadge">${t}</span>`).join('');
    const av=p.user?.photo?`<img src="${p.user.photo}">`:'👤';
    // Pull live intent from allUsers if post was saved before intent field existed
    const liveUser=allUsers.find(u=>u.uid===p.uid);
    const intent=p.user?.intent||liveUser?.intent||'';
    f.innerHTML+=`<div class="card ${isG?'grp':''}">
      <div style="display:flex;gap:10px;margin-bottom:8px;">
        <div class="av-wrap" style="width:54px;height:54px;"><div class="avatar" style="width:54px;height:54px;">${av}</div><div class="odot ${st.cls}"></div></div>
        <div style="flex:1;overflow:hidden;">
          <b style="color:var(--btnB);font-size:14px;">${esc(p.user?.name||'?')}${isG?` <span style="color:#F39C12;font-size:12px;">🏫 ${esc(p.groupName||'')}</span>`:''}</b>
          <p style="font-size:11px;color:var(--sub);margin:2px 0;">${getFlag(p.user?.country||'')} ${p.user?.country||'—'} | 🏛️ ${p.user?.uni||'—'}</p>
          <p style="font-size:11px;color:var(--sub);margin:2px 0;">📖 ${p.user?.course||'—'} ${p.user?.year?'('+p.user.year+')':''}</p>
          ${getIntentBadge(intent)}
        </div>
      </div>
      ${tags?`<div style="margin-bottom:6px;">${tags}</div>`:''}
      <p style="font-size:13px;margin-bottom:8px;">${esc(p.text)}</p>
      <div style="display:flex;gap:6px;">
        ${isG?`<button class="btn o" style="flex:1;" onclick="openGroup('${p.id}','${e2(p.groupName||'Group')}')">🤝 Join Group</button>`:
              `<button class="btn" style="flex:1;" onclick="openChat('${e2(p.user?.name||'')}','${p.uid||''}')">💬 Message</button>`}
        ${isOwn?`<button class="btn r" style="width:46px;flex-shrink:0;" onclick="delPost('${p.id}')">🗑️</button>`:''}
      </div>
    </div>`;
  });
}

// ── FIND ──
function switchFT(t,el2){ftab=t;document.querySelectorAll('.stab').forEach(b=>b.classList.remove('on'));el2.classList.add('on');renderFind();}
function toggleFav(uid){
  const wasFav=favs.has(uid);
  if(wasFav){favs.delete(uid);}else{favs.add(uid);}
  saveFavs();
  if(!wasFav){
    const u=allUsers.find(x=>x.uid===uid);
    if(u){
      db.collection('notifications').add({toUid:uid,icon:'⭐',title:'New Favourite!',body:(MP?.name||'Someone')+' added you to favourites!',read:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    }
    showToast('⭐ Favourited!');
  }else showToast('💔 Removed');
  renderFind(el('findQ')?.value||'');
}
function mscore(u){if(!MP)return 0;let s=0;if(u.country&&u.country===MP.country)s+=35;if(u.uni&&u.uni===MP.uni)s+=35;if(u.course&&u.course===MP.course)s+=30;return s;}
function renderFind(q=""){
  const f=el('findL');
  if(!allUsers.length){
    f.innerHTML="<p style='text-align:center;color:#888;'>Loading students...</p>";
    db.collection('users').get().then(sn=>{allUsers=sn.docs.map(d=>d.data());renderFind(q);});
    return;
  }
  let list=ftab==='fav'?allUsers.filter(u=>favs.has(u.uid)):[...allUsers];
  if(q)list=list.filter(u=>{
    const s=q.toLowerCase();
    return(u.name||'').toLowerCase().includes(s)||(u.country||'').toLowerCase().includes(s)||(u.uni||'').toLowerCase().includes(s)||(u.course||'').toLowerCase().includes(s);
  });
  if(ftab==='match')list=list.filter(u=>u.uid!==CU?.uid).sort((a,b)=>mscore(b)-mscore(a));
  if(!list.length){f.innerHTML="<p style='text-align:center;color:#888;'>No students found.</p>";return;}
  f.innerHTML='';
  list.forEach(u=>{
    const isSelf=u.uid===CU?.uid,isFav=favs.has(u.uid),sc=mscore(u);
    const st=getStatusInfo(u.status,u.lastSeen);
    const langs=(u.langs||[]).map(l=>`<span class="lang-chip">${l}</span>`).join('');
    const skills=(u.skills||[]).map(s=>`<span class="tbadge" style="background:#fff3e0;color:#e65100;">${s}</span>`).join('');
    const av=u.photo?`<img src="${u.photo}">`:'👤';
    f.innerHTML+=`<div class="card">
      ${!isSelf?`<button class="fav-btn" onclick="toggleFav('${u.uid}')">${isFav?'⭐':'☆'}</button>`:''}
      <div style="display:flex;gap:10px;margin-bottom:6px;">
        <div class="av-wrap" style="width:54px;height:54px;"><div class="avatar" style="width:54px;height:54px;">${av}</div><div class="odot ${st.cls}"></div></div>
        <div style="flex:1;overflow:hidden;">
          <b style="color:var(--btnB);font-size:14px;">${esc(u.name||'?')}${isSelf?' <span style="font-size:10px;background:#27ae60;color:#fff;padding:1px 5px;border-radius:6px;">You</span>':''}</b>
          ${u.bio?`<p style="font-size:11px;font-style:italic;color:var(--sub);margin:1px 0;">${esc(u.bio)}</p>`:''}
          <p style="font-size:11px;color:var(--sub);margin:1px 0;">${getFlag(u.country||'')} ${u.country||'—'} | 🏛️ ${u.uni||'—'}</p>
          <p style="font-size:11px;color:var(--sub);margin:1px 0;">📖 ${u.course||'—'} ${u.year?'('+u.year+')':''}</p>
          ${getIntentBadge(u.intent||'')}
        </div>
      </div>
      ${langs?`<div style="margin:3px 0;">${langs}</div>`:''}
      ${skills?`<div style="margin:3px 0;">${skills}</div>`:''}
      ${ftab==='match'&&!isSelf?`<div style="background:linear-gradient(135deg,var(--btnB),#1565c0);color:#fff;border-radius:10px;padding:9px;margin:6px 0;"><b style="font-size:24px;">${sc}%</b> Match<div style="height:5px;background:rgba(255,255,255,.3);border-radius:3px;margin:4px 0;"><div style="height:100%;width:${sc}%;background:#fff;border-radius:3px;"></div></div></div>`:''}
      ${!isSelf?`<button class="btn" onclick="openChat('${e2(u.name||'')}','${u.uid||''}')">💬 Message</button>`:'<p style="font-size:11px;color:var(--sub);text-align:center;margin-top:6px;">This is your profile</p>'}
    </div>`;
  });
}

// ── CHAT ──
function getCID(a,b){return [a,b].sort().join('_');}
function setupMsgBL(){
  // Replaced by setupInbox() which handles both badge and real-time inbox updates
  setupInbox();
}
function openChat(name,uid){
  if(!uid||uid==='undefined'||uid==='null'||uid===''){
    const found=allUsers.find(u=>u.name===name||u.name?.toLowerCase()===name?.toLowerCase());
    if(found)uid=found.uid;else return showToast('❌ User not found. Try from Find tab.');
  }
  if(uid===CU?.uid)return showToast('❌ Cannot message yourself');
  // Unsubscribe all old listeners
  if(chatUnsub){chatUnsub();chatUnsub=null;}
  if(window._typingUnsub){window._typingUnsub();window._typingUnsub=null;}
  if(window._statusUnsub){window._statusUnsub();window._statusUnsub=null;}
  curChat=null;replyMsg=null;
  const mb=el('msgB');if(mb)mb.innerHTML='';
  curChat={name,uid};
  el('chatT').textContent=name;
  const other=allUsers.find(u=>u.uid===uid);
  const st=getStatusInfo(other?.status,other?.lastSeen);
  el('chatSt').textContent=st.label;
  el('chatW').style.display='flex';
  el('rplybar').style.display='none';
  el('csBar').style.display='none';
  closeMediaPanel();closeStickers();

  const cid=getCID(CU.uid,uid);

  // Zero unread immediately in ALL in-memory sources so badge vanishes instantly
  if(window._inboxUnreadMap)window._inboxUnreadMap[cid]=0;
  // Override map hard-forces 0 even if Firestore snapshot still has old value
  if(!window._unreadOverride)window._unreadOverride={};
  window._unreadOverride[cid]=0;
  // Re-render inbox immediately — badge gone before any Firestore round-trip
  if(_cachedInboxDocs)renderInbox(el('inboxQ')?.value||'',{docs:_cachedInboxDocs});

  // Live status listener
  window._statusUnsub=db.collection('users').doc(uid).onSnapshot(snap=>{
    if(!snap.exists)return;
    const s=getStatusInfo(snap.data()?.status,snap.data()?.lastSeen);
    if(el('chatSt'))el('chatSt').textContent=s.label;
  });

  // Init chat doc + clear unread in Firestore
  const initData={participants:[CU.uid,uid]};
  db.collection('chats').doc(cid).set(initData,{merge:true}).then(()=>{
    db.collection('users').doc(CU.uid).update({chatIds:firebase.firestore.FieldValue.arrayUnion(cid)}).catch(()=>{});
    db.collection('users').doc(uid).update({chatIds:firebase.firestore.FieldValue.arrayUnion(cid)}).catch(()=>{});
    const resetUnread={};resetUnread['unread.'+CU.uid]=0;
    db.collection('chats').doc(cid).update(resetUnread).then(()=>{
      // Firestore confirmed reset — remove override so future messages can show badge again
      if(window._unreadOverride)delete window._unreadOverride[cid];
    }).catch(()=>{});
    const userReset={};userReset['unread.'+cid]=0;
    db.collection('users').doc(CU.uid).update(userReset).catch(()=>{});
  }).catch(e=>console.log('chatInit:',e));

  // Messages listener — uses docChanges so only new/changed messages are processed
  chatUnsub=db.collection('chats').doc(cid).collection('messages').orderBy('createdAt').limitToLast(50).onSnapshot(sn=>{
    const mb=el('msgB');
    sn.docChanges().forEach(change=>{
      if(change.type==='removed'){
        const ex=mb.querySelector(`.bw[data-id="${change.doc.id}"]`);
        if(ex)ex.remove();return;
      }
      const m={id:change.doc.id,...change.doc.data()};
      const bbl=buildBbl(m,false);if(!bbl)return;
      const tmp=document.createElement('div');tmp.innerHTML=bbl;
      const node=tmp.firstElementChild;if(!node)return;
      if(change.type==='added'){
        const ex=mb.querySelector(`.bw[data-id="${m.id}"]`);
        if(!ex)mb.appendChild(node);
      }else if(change.type==='modified'){
        const ex=mb.querySelector(`.bw[data-id="${m.id}"]`);
        if(ex)ex.replaceWith(node);else mb.appendChild(node);
      }
      if(m.senderUid!==CU.uid&&!m.seen)change.doc.ref.update({seen:true}).catch(()=>{});
    });
    mb.scrollTop=mb.scrollHeight;
  },e=>console.log(e));

  // Typing indicator listener (stored separately so it can be cleaned up)
  window._typingUnsub=db.collection('chats').doc(cid).onSnapshot(sn=>{
    const ty=(sn.data()?.typing||{})[uid];
    el('typebar').style.display=ty?'block':'none';
    if(ty)el('typebar').textContent='● '+name+' is typing...';
  });
}
function closeChat(){
  el('chatW').style.display='none';
  if(chatUnsub){chatUnsub();chatUnsub=null;}
  if(window._typingUnsub){window._typingUnsub();window._typingUnsub=null;}
  if(window._statusUnsub){window._statusUnsub();window._statusUnsub=null;}
  if(isRec)cancelVoice();
  curChat=null;replyMsg=null;
  el('rplybar').style.display='none';
  closeMediaPanel();closeStickers();clearSelection();
}
function onMsgInput(){
  if(!curChat)return;
  const hasText=el('mIn').value.trim().length>0;
  // Update send button icon: send arrow when typing, mic when idle
  const icon=el('sendIcon');
  if(hasText){
    icon.innerHTML='<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>';
    el('sendB').style.background='var(--btnB)';
  }else if(isRec){
    // keep rec state
  }else{
    icon.innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  }
  // typing indicator
  const cid=getCID(CU.uid,curChat.uid);
  db.collection('chats').doc(cid).set({[`typing.${CU.uid}`]:true},{merge:true});
  clearTimeout(typDebounce);
  typDebounce=setTimeout(()=>db.collection('chats').doc(cid).set({[`typing.${CU.uid}`]:false},{merge:true}),2000);
}
function onGMsgInput(){
  const hasText=el('gIn').value.trim().length>0;
  const icon=el('gSendIcon');
  if(hasText){
    icon.innerHTML='<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>';
  }else{
    icon.innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  }
}
function smartSend(){
  if(isRec){stopAndSendVoice();return;}
  const hasText=el('mIn').value.trim().length>0;
  if(hasText){sendMsg();return;}
  startVoice();
}
function smartGSend(){
  if(gIsRec){stopAndSendGVoice();return;}
  const hasText=el('gIn').value.trim().length>0;
  if(hasText){sendGMsg();return;}
  startGVoice();
}
// Camera: open real device camera
function openCamera(dest){
  fType='image';
  const fi=el(dest==='g'?'fGCam':'fCam');
  fi.value='';fi.click();
}
function toggleCS(){const b=el('csBar');b.style.display=b.style.display==='none'?'block':'none';if(b.style.display==='block')el('csQ').focus();}
function searchMsgs(q){el('msgB').querySelectorAll('.bw').forEach(b=>{b.style.display=!q||b.textContent.toLowerCase().includes(q.toLowerCase())?'':'none';});}
function startReply(id){
  const bw=document.querySelector(`.bw[data-id="${id}"]`);if(!bw)return;
  replyMsg={id,text:bw.querySelector('.bbl')?.textContent?.slice(0,60)||'',sender:bw.dataset.sender||''};
  el('rplyT').textContent='↩ '+replyMsg.sender+': '+replyMsg.text;
  el('rplybar').style.display='block';el('mIn').focus();
}
function cancelRply(){replyMsg=null;el('rplybar').style.display='none';}

// MEDIA & STICKER PANELS
function toggleMediaPanel(){const p=el('mediaPanel');p.style.display=p.style.display==='block'?'none':'block';closeStickers();}
function closeMediaPanel(){el('mediaPanel').style.display='none';}
function toggleGMediaPanel(){const p=el('gMediaPanel');p.style.display=p.style.display==='block'?'none':'block';}
function closeGMediaPanel(){el('gMediaPanel').style.display='none';}
let stickerOpen=false;
function toggleKbSticker(){
  const p=el('stickerPanel');
  stickerOpen=!stickerOpen;
  p.style.display=stickerOpen?'block':'none';
  // Swap icon: keyboard when panel open (tap to close), face when closed (tap to open)
  const icon=el('kbIcon');
  if(icon){
    if(stickerOpen){
      icon.innerHTML='<path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 5H5v-2h2v2zm10 0H9v-2h8v2zm0-3h-2v-2h2v2zm0-3h-2V8h2v2zm-4 0h-2V8h2v2zm0 3h-2v-2h2v2z"/>';
    }else{
      icon.innerHTML='<path d="M34 4H14C8.477 4 4 8.477 4 14v20c0 5.523 4.477 10 10 10h20c5.523 0 10-4.477 10-10V14C44 8.477 39.523 4 34 4zm0 4c3.309 0 6 2.691 6 6v20c0 3.309-2.691 6-6 6H14c-3.309 0-6-2.691-6-6V14c0-3.309 2.691-6 6-6h20zM17 19a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-7 8c-3.5 0-6.5 2-8 5h16c-1.5-3-4.5-5-8-5z"/>';
    }
  }
  closeMediaPanel();
  if(stickerOpen)switchStickerTab('emoji');
}
function toggleStickers(){toggleKbSticker();}
function closeStickers(){stickerOpen=false;el('stickerPanel').style.display='none';}
let _stickerTab='emoji';
function switchStickerTab(tab){
  _stickerTab=tab;
  ['emoji','stickers','flags','gif'].forEach(t=>{
    const btn=el('stab_'+t);
    if(btn){
      btn.style.background=t===tab?'var(--btnB)':'var(--card)';
      btn.style.color=t===tab?'#fff':'var(--sub)';
    }
  });
  const grid=el('stickerGrid');grid.innerHTML='';
  if(tab==='stickers'){
    grid.innerHTML=`<div style="text-align:center;padding:20px 12px;color:var(--sub);font-size:13px;">
      <svg viewBox="0 0 24 24" style="width:40px;height:40px;fill:var(--sub);margin-bottom:8px;"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zm2.5-.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-15zM9 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-7.5 5h9a4.5 4.5 0 0 1-9 0z"/></svg>
      <b style="display:block;margin-bottom:4px;">Stickers</b>
      <p style="font-size:11px;opacity:.8;">Stickers sent to you will be saved here automatically.</p>
    </div>`;
    return;
  }
  if(tab==='gif'){
    grid.innerHTML='<div style="padding:12px;text-align:center;color:var(--sub);font-size:13px;">GIF search coming soon!</div>';
    return;
  }
  const items=tab==='flags'?FLAGS:STICKERS;
  items.forEach(s=>{
    const b=document.createElement('button');b.className='sticker-btn';b.textContent=s;
    b.onclick=()=>insertEmoji(s);grid.appendChild(b);
  });
}
function insertEmoji(emoji){
  const inp=curGrp?el("gIn"):el("mIn");
  if(!inp)return;
  const pos=inp.selectionStart||inp.value.length;
  inp.value=inp.value.slice(0,pos)+emoji+inp.value.slice(pos);
  inp.setSelectionRange(pos+emoji.length,pos+emoji.length);
  inp.focus();
  curGrp?onGMsgInput():onMsgInput();
}
function sendSticker(sticker){
  if(!curChat&&!curGrp)return;
  const cid=curChat?getCID(CU.uid,curChat.uid):null;
  const msg={type:'text',text:sticker,senderUid:CU.uid,senderName:MP?.name||'',time:now(),seen:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()};
  if(cid){
    db.collection('chats').doc(cid).collection('messages').add(msg);
    const _sd1={participants:[CU.uid,curChat.uid],lastMsg:sticker,lastTime:now(),lastTs:firebase.firestore.FieldValue.serverTimestamp()};_sd1['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);db.collection('chats').doc(cid).set(_sd1,{merge:true});
  }else if(curGrp){
    db.collection('groups').doc(curGrp.id).collection('messages').add({...msg,senderPhoto:myPho||''});
  }
  closeStickers();
}

function sendSpecial(type){
  if(!curChat)return;
  let text='';
  if(type==='poll')text=prompt('Poll question:');
  else if(type==='event')text=prompt('Event details:');
  else if(type==='location')text=prompt('Location:');
  else if(type==='link')text=prompt('Enter URL:');
  if(!text)return;
  const icons={poll:'📊',event:'📅',location:'📍',link:'🔗'};
  const cid=getCID(CU.uid,curChat.uid);
  db.collection('chats').doc(cid).collection('messages').add({
    type:'text',text:`${icons[type]} ${text}`,senderUid:CU.uid,senderName:MP?.name||'',
    time:now(),seen:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()
  });
  const _sd2={participants:[CU.uid,curChat.uid],lastMsg:icons[type]+' '+text,lastTime:now(),lastTs:firebase.firestore.FieldValue.serverTimestamp()};_sd2['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);db.collection('chats').doc(cid).set(_sd2,{merge:true});
}

async function sendMsg(){
  const inp=el('mIn');if(!inp.value.trim()||!curChat)return;
  const text=inp.value.trim();inp.value='';
  // Reset send button icon to mic
  const icon=el('sendIcon');
  icon.innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  const cid=getCID(CU.uid,curChat.uid);const t=now();
  clearTimeout(typDebounce);
  db.collection('chats').doc(cid).set({[`typing.${CU.uid}`]:false},{merge:true});
  const md={type:'text',text,senderUid:CU.uid,senderName:MP?.name||'',time:t,seen:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()};
  if(replyMsg)md.replyTo={text:replyMsg.text,senderName:replyMsg.sender};
  replyMsg=null;el('rplybar').style.display='none';
  try{
    await db.collection('chats').doc(cid).collection('messages').add(md);
    const upd={participants:[CU.uid,curChat.uid],lastMsg:text,lastTime:t,lastTs:firebase.firestore.FieldValue.serverTimestamp()};
    upd['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);
    await db.collection('chats').doc(cid).set(upd,{merge:true});
    // Register chatId and signal unread on receiver's user document so their inbox listener fires
    const receiverUpd={chatIds:firebase.firestore.FieldValue.arrayUnion(cid)};
    receiverUpd['unread.'+cid]=firebase.firestore.FieldValue.increment(1);
    db.collection('users').doc(curChat.uid).update(receiverUpd).catch(()=>{
      db.collection('users').doc(curChat.uid).set(receiverUpd,{merge:true}).catch(()=>{});
    });
    db.collection('users').doc(CU.uid).update({chatIds:firebase.firestore.FieldValue.arrayUnion(cid)}).catch(()=>{});
    // Message notification goes to Msgs tab only — NOT to alerts
    // unread count handled by setupMsgBL
  }catch(e){showToast('❌ '+e.message);}
}

// ── GROUP ──
async function openGroup(postId,name){
  if(!postId||postId==='undefined'){showToast('❌ Group not found');return;}
  showOv(true);
  try{
    const gref=db.collection('groups').doc(postId);
    const gs=await gref.get();
    if(!gs.exists){showToast('❌ Group not found');showOv(false);return;}
    if(!(gs.data().members||[]).includes(CU.uid))await gref.update({members:firebase.firestore.FieldValue.arrayUnion(CU.uid)});
    curGrp={id:postId,name};
    el('grpT').textContent='🏫 '+name;el('groupW').style.display='flex';
    if(grpUnsub){grpUnsub();grpUnsub=null;}
    gref.onSnapshot(gs2=>{const c=(gs2.data()?.members||[]).length;el('grpM').textContent=c+' member'+(c!==1?'s':'');});
    grpUnsub=db.collection('groups').doc(postId).collection('messages').orderBy('createdAt').onSnapshot(sn=>{
      const mb=el('grpB');mb.innerHTML='';
      sn.docs.forEach(d=>mb.innerHTML+=buildBbl({id:d.id,...d.data()},true));
      mb.scrollTop=mb.scrollHeight;
    },e=>console.log(e));
  }catch(e){showToast('❌ '+e.message);}
  showOv(false);
}
function closeGroup(){el('groupW').style.display='none';if(grpUnsub){grpUnsub();grpUnsub=null;}curGrp=null;closeGStickers();clearSelection();}
async function sendGMsg(){
  const inp=el('gIn');if(!inp.value.trim()||!curGrp)return;
  const text=inp.value.trim();inp.value='';
  const gi=el('gSendIcon');if(gi)gi.innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  try{await db.collection('groups').doc(curGrp.id).collection('messages').add({type:'text',text,senderUid:CU.uid,senderName:MP?.name||'Me',senderPhoto:myPho||'',time:now(),createdAt:firebase.firestore.FieldValue.serverTimestamp()});}
  catch(e){showToast('❌ '+e.message);}
}

// ── BUILD BUBBLE ──
let selectedMsgs=new Set(),selMode=false;
function toggleSelectMsg(id,isGrp){
  selMode=true;
  const bw=document.querySelector(`.bw[data-id="${id}"]`);if(!bw)return;
  const isSelf=bw.classList.contains('s');
  const bbl=bw.querySelector('.bbl');
  const btn=bw.querySelector('.selbtn');
  if(selectedMsgs.has(id)){
    selectedMsgs.delete(id);
    bbl.style.outline='none';
    bw.querySelector('.sel-chk')?.remove();
    if(btn){btn.textContent='☐';btn.classList.remove('checked');}
  }else{
    selectedMsgs.add(id);
    bbl.style.outline=`2px solid ${isSelf?'rgba(255,255,255,.6)':'#1565c0'}`;
    if(btn){btn.textContent='☑';btn.classList.add('checked');}
    if(!bw.querySelector('.sel-chk')){
      const chk=document.createElement('div');
      chk.className='sel-chk';
      chk.textContent='✔';
      chk.style.cssText=`position:absolute;top:-8px;${isSelf?'left:-8px':'right:-8px'};width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;z-index:10;background:${isSelf?'#fff':'#1565c0'};color:${isSelf?'#1565c0':'#fff'};`;
      bbl.style.position='relative';
      bbl.appendChild(chk);
    }
  }
  if(selectedMsgs.size>0){
    let bar=document.getElementById('selBar');
    if(!bar){bar=document.createElement('div');bar.id='selBar';bar.style.cssText='position:fixed;bottom:72px;left:0;right:0;background:#1a1a2e;color:#fff;padding:12px 16px;display:flex;gap:8px;align-items:center;z-index:5000;box-shadow:0 -2px 12px rgba(0,0,0,.4);';document.body.appendChild(bar);}
    bar.innerHTML=`<span style="flex:1;font-size:13px;font-weight:bold;">${selectedMsgs.size} selected</span><button onclick="deleteSelectedMsgs(${isGrp},'me')" style="background:#e67e22;color:#fff;border:none;padding:9px 14px;border-radius:20px;font-size:13px;font-weight:bold;cursor:pointer;">🙈 For Me</button><button onclick="deleteSelectedMsgs(${isGrp},'everyone')" style="background:#e74c3c;color:#fff;border:none;padding:9px 14px;border-radius:20px;font-size:13px;font-weight:bold;cursor:pointer;">🗑️ Everyone</button><button onclick="clearSelection()" style="background:rgba(255,255,255,.15);color:#fff;border:none;padding:9px 12px;border-radius:20px;font-size:13px;cursor:pointer;">✕</button>`;
  }else{clearSelection();}
}
function clearSelection(){
  selectedMsgs.clear();selMode=false;
  document.querySelectorAll('.bbl').forEach(b=>{b.style.outline='none';});
  document.querySelectorAll('.sel-chk').forEach(c=>c.remove());
  document.querySelectorAll('.selbtn').forEach(b=>{b.textContent='☐';b.classList.remove('checked');});
  document.getElementById('selBar')?.remove();
}
async function deleteSelectedMsgs(isGrp,scope){
  if(!scope){
    // Fallback: show sheet
    const count=selectedMsgs.size;
    const sheet=document.createElement('div');sheet.id='delSheet';
    sheet.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:flex-end;justify-content:center;';
    sheet.innerHTML=`<div style="background:var(--card);width:100%;max-width:500px;border-radius:18px 18px 0 0;padding:18px;">
      <p style="font-weight:bold;font-size:15px;text-align:center;margin-bottom:14px;">Delete ${count} message${count>1?'s':''}?</p>
      <button onclick="execDelMsgs('everyone',${isGrp})" style="width:100%;padding:13px;margin-bottom:8px;border:none;background:#e74c3c;color:#fff;border-radius:12px;font-size:14px;font-weight:bold;cursor:pointer;">🗑️ Delete for Everyone</button>
      <button onclick="execDelMsgs('me',${isGrp})" style="width:100%;padding:13px;margin-bottom:8px;border:none;background:var(--btnB);color:#fff;border-radius:12px;font-size:14px;font-weight:bold;cursor:pointer;">🙈 Delete for Me Only</button>
      <button onclick="el('delSheet').remove()" style="width:100%;padding:13px;border:none;background:var(--bg);color:var(--txt);border-radius:12px;font-size:14px;cursor:pointer;">Cancel</button>
    </div>`;
    sheet.addEventListener('click',e=>{if(e.target===sheet)sheet.remove();});
    document.body.appendChild(sheet);
    return;
  }
  await execDelMsgs(scope,isGrp);
}
async function execDelMsgs(scope,isGrp){
  el('delSheet')?.remove();
  for(const id of selectedMsgs){
    try{
      let ref;
      if(!isGrp&&curChat)ref=db.collection('chats').doc(getCID(CU.uid,curChat.uid)).collection('messages').doc(id);
      else if(isGrp&&curGrp)ref=db.collection('groups').doc(curGrp.id).collection('messages').doc(id);
      if(ref){
        if(scope==='everyone')await ref.delete();
        else await ref.update({['deletedFor.'+CU.uid]:true});
      }
    }catch(e){console.log(e);}
  }
  clearSelection();
  showToast(scope==='everyone'?'🗑️ Deleted for everyone':'🙈 Deleted for you');
}
function buildBbl(m,isGrp){
  if(m.deletedFor&&m.deletedFor[CU?.uid])return '';
  const self=m.senderUid===CU?.uid,side=self?'s':'o';
  const type=m.type||'text';
  const nameTag=isGrp&&!self?`<div class="bname">${esc(m.senderName||'')}</div>`:'';
  const repBtn=!isGrp?`<button class="mabtn ${self?'op':''}" ${!self?'style="background:rgba(0,0,0,.08);color:var(--txt);"':''} onclick="startReply('${m.id}')">↩</button>`:'';
  const rq=m.replyTo?`<div class="rq">↩ <b>${esc(m.replyTo.senderName)}</b>: ${esc(m.replyTo.text)}</div>`:'';
  const receipt=self&&type==='text'?`<div class="receipt">${m.seen?'✓✓ Seen':'✓ Sent'}</div>`:'';
  const rc=m.reactions||{},ec={};
  Object.values(rc).flat().forEach(e=>{ec[e]=(ec[e]||0)+1;});
  const rcHtml=Object.keys(ec).length?`<div style="display:flex;flex-wrap:wrap;gap:2px;margin-top:3px;">${Object.entries(ec).map(([e,c])=>`<button onclick="toggleReact('${m.id}','${e}','${isGrp?'g':'p'}')" style="background:rgba(255,255,255,.2);border:none;border-radius:10px;padding:1px 6px;font-size:12px;cursor:pointer;">${e} ${c}</button>`).join('')}</div>`:'';
  let inner='';
  if(type==='text'){
    const urlReg=/(https?:\/\/[^\s]+)/g;
    const rawText=m.text||'';
    const urls=rawText.match(urlReg)||[];
    let textHtml=esc(rawText).replace(/(https?:\/\/[^\s]+)/g,'');
    textHtml=textHtml.trim();
    let linkCards='';
    urls.forEach(url=>{
      let icon='🔗',label='Open Link';
      if(url.includes('drive.google.com')){icon='📁';label='Google Drive';}
      else if(url.includes('docs.google.com')){icon='📄';label='Google Docs';}
      else if(url.includes('youtube.com')||url.includes('youtu.be')){icon='▶️';label='YouTube Video';}
      else if(url.includes('dropbox.com')){icon='📦';label='Dropbox File';}
      else if(url.includes('onedrive')||url.includes('1drv.ms')){icon='☁️';label='OneDrive File';}
      else if(url.endsWith('.pdf')){icon='📕';label='PDF Document';}
      else if(url.includes('github.com')){icon='💻';label='GitHub';}
      linkCards+=`<a href="${url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.15);border-radius:10px;padding:8px 10px;margin-top:5px;text-decoration:none;color:inherit;"><span style="font-size:20px;">${icon}</span><div style="flex:1;overflow:hidden;"><div style="font-size:12px;font-weight:bold;">${label}</div><div style="font-size:10px;opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(url)}</div></div><span style="font-size:14px;">↗</span></a>`;
    });
    const textPart=textHtml?'<div>'+textHtml+'</div>':'';
    inner=`${nameTag}${rq}${textPart}${linkCards}${!isGrp?`<div class="mar">${repBtn}</div>`:''} ${rcHtml}${receipt}`;
  }
  else if(type==='image'){
    if(!m.data){inner=`${nameTag}${rq}<div style="padding:12px;border-radius:8px;background:rgba(0,0,0,0.1);text-align:center;min-width:150px;"><div style="font-size:20px;">🖼️</div><div style="font-size:12px;opacity:0.7;margin-top:4px;">⏳ Uploading photo...</div></div>${rcHtml}`;}
    else{inner=`${nameTag}${rq}<img src="${m.data}" onclick="openM('${m.data}','image')" style="max-width:100%;max-height:320px;width:auto;height:auto;object-fit:contain;border-radius:8px;display:block;background:#000;"><div class="mar"><button class="mabtn op" onclick="openM('${m.data}','image')">👁</button><button class="mabtn dl" onclick="dlM('${m.data}','img.jpg')">⬇</button></div>${rcHtml}`;}
  }
  else if(type==='video'){
    if(!m.data){inner=`${nameTag}${rq}<div style="padding:12px;border-radius:8px;background:rgba(0,0,0,0.1);text-align:center;min-width:150px;"><div style="font-size:20px;">🎥</div><div style="font-size:12px;opacity:0.7;margin-top:4px;">⏳ Uploading video...</div></div>${rcHtml}`;}
    else{inner=`${nameTag}${rq}<video src="${m.data}" controls preload="none" style="max-width:200px;border-radius:8px;display:block;margin-top:3px;"></video><div class="mar"><button class="mabtn dl" onclick="dlM('${m.data}','video.mp4')">⬇</button></div>${rcHtml}`;}
  }
  else if(type==='audio'){
    if(!m.data){inner=`${nameTag}${rq}<div style="padding:12px;border-radius:8px;background:rgba(0,0,0,0.1);text-align:center;min-width:150px;"><div style="font-size:20px;">🎵</div><div style="font-size:12px;opacity:0.7;margin-top:4px;">⏳ Uploading audio...</div></div>${rcHtml}`;}
    else{inner=`${nameTag}${rq}<audio src="${m.data}" controls preload="none" style="width:200px;display:block;margin-top:3px;border-radius:6px;"></audio><div class="mar"><button class="mabtn dl" onclick="dlM('${m.data}','audio.mp3')">⬇</button></div>${rcHtml}`;}
  }
  else if(type==='voice'){
    const playedBadge=m.voicePlayed&&self?'<span style="font-size:10px;opacity:.7;margin-left:4px;">🎧 Heard</span>':'';
    inner=`${nameTag}<div class="vbub" id="vp_${m.id}"><button class="vpbtn" onclick="toggleVP('${m.id}','${m.data}')">▶</button><div style="flex:1;"><div class="vprog" id="vbar_${m.id}" onclick="seekVP(event,'${m.id}')"><div class="vfill" id="vfill_${m.id}"></div></div></div><span class="vdur" id="vdur_${m.id}">${m.dur||'0:00'}</span>${playedBadge}</div><div class="mar"><button class="mabtn dl" onclick="dlM('${m.data}','voice.webm')">⬇</button></div>${rcHtml}`;
  }
  else if(type==='doc'){const ic={'pdf':'📕','zip':'🗜️','ppt':'📊','pptx':'📊','xls':'📗','xlsx':'📗','doc':'📘','docx':'📘'}[m.ext||'']||'📄';inner=`${nameTag}<div class="dbub"><span style="font-size:22px;">${ic}</span><div style="font-size:11px;word-break:break-all;flex:1;">${esc(m.name||'File')}</div></div><div class="mar"><button class="mabtn op" onclick="openM('${m.data}','doc')">👁</button><button class="mabtn dl" onclick="dlM('${m.data}','${e2(m.name||'file')}')">⬇</button></div>${rcHtml}`;}
  return `<div class="bw ${side}" data-id="${m.id}" data-sender="${esc(m.senderName||'')}" data-isgrp="${isGrp}" onclick="if(selMode){var bw=this;toggleSelectMsg(bw.dataset.id,bw.dataset.isgrp==='true')}"><div class="bbl ${side}">${inner}<div class="btime">${m.time||''}</div></div><button class="selbtn" data-id="${m.id}" data-isgrp="${isGrp}" onclick="event.stopPropagation();toggleSelectMsg(this.dataset.id,this.dataset.isgrp==='true')" title="Select">☐</button></div>`;
}
// Long press (600ms) to enter selection mode
let _lpTimer=null,_lpFired=false;
function startLongPress(id,isGrp){
  _lpFired=false;
  _lpTimer=setTimeout(()=>{
    _lpFired=true;
    navigator.vibrate&&navigator.vibrate(50);
    toggleSelectMsg(id,isGrp);
  },600);
}
function moveLongPress(){clearTimeout(_lpTimer);_lpTimer=null;}
function endLongPress(id,isGrp,e){
  clearTimeout(_lpTimer);
  if(_lpFired){e?.preventDefault();e?.stopPropagation();_lpFired=false;}
}
async function toggleReact(id,emoji,dest){
  let ref;
  if(dest==='p'&&curChat)ref=db.collection('chats').doc(getCID(CU.uid,curChat.uid)).collection('messages').doc(id);
  else if(dest==='g'&&curGrp)ref=db.collection('groups').doc(curGrp.id).collection('messages').doc(id);
  if(!ref)return;
  const sn=await ref.get();const rc=sn.data()?.reactions||{};const ur=rc[CU.uid]||[];
  rc[CU.uid]=ur.includes(emoji)?ur.filter(e=>e!==emoji):[...ur,emoji];
  await ref.update({reactions:rc});
}
function openM(src,type){const w=window.open('','_blank');if(!w){showToast('⚠️ Allow popups');return;}w.document.write(`<!DOCTYPE html><html><body style="margin:0;background:#111;display:flex;align-items:center;justify-content:center;min-height:100vh;">${type==='image'?`<img src="${src}" style="max-width:100%;max-height:100vh;">`:type==='video'?`<video src="${src}" controls autoplay style="max-width:100%;max-height:90vh;"></video>`:type==='audio'?`<div style="color:#fff;text-align:center;padding:40px;"><h2>🎵</h2><audio src="${src}" controls autoplay style="width:300px;"></audio></div>`:`<iframe src="${src}" style="width:100vw;height:100vh;border:none;"></iframe>`}</body></html>`);w.document.close();}
function dlM(src,fname){const a=document.createElement('a');a.href=src;a.download=fname||'file';document.body.appendChild(a);a.click();setTimeout(()=>document.body.removeChild(a),200);}

async function markVoicePlayed(msgId,senderUid){
  if(!curChat||!CU)return;
  try{
    const cid=getCID(CU.uid,curChat.uid);
    const msgRef=db.collection('chats').doc(cid).collection('messages').doc(msgId);
    const snap=await msgRef.get();
    if(!snap.exists)return;
    const data=snap.data();
    if(data.voicePlayed)return; // already marked
    const realSenderUid=senderUid||data.senderUid;
    if(!realSenderUid||realSenderUid===CU.uid)return; // don't notify self
    await msgRef.update({voicePlayed:true});
    // Show 🎧 Heard badge on the message
    const dur=document.getElementById('vdur_'+msgId);
    if(dur)dur.insertAdjacentHTML('afterend','<span style="font-size:10px;opacity:.7;margin-left:4px;">🎧 Heard</span>');
    // Notify sender via alerts
    db.collection('notifications').add({toUid:realSenderUid,icon:'🎧',title:'Voice note heard',body:(MP?.name||'Someone')+' played your voice note',read:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()}).catch(()=>{});
  }catch(e){console.log('markVoicePlayed:',e);}
}

// ── GOOGLE DRIVE PICKER ──
function openGDrivePicker(dest){
  const sheet=document.createElement('div');
  sheet.id='driveSheet';
  sheet.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:flex-end;justify-content:center;';
  sheet.innerHTML=`
    <div style="background:var(--card);width:100%;max-width:500px;border-radius:18px 18px 0 0;padding:20px;">
      <p style="font-weight:bold;font-size:15px;text-align:center;margin-bottom:6px;">📁 Share from Google Drive</p>
      <p style="font-size:12px;color:var(--sub);text-align:center;margin-bottom:14px;">Open Google Drive → tap the 3 dots on your file → tap <b>Share</b> → copy the link → paste below.</p>
      <textarea id="driveInp" placeholder="Paste Google Drive link here..." style="width:100%;height:80px;padding:10px;border:1px solid var(--brd);border-radius:10px;font-size:13px;background:var(--inp);color:var(--txt);resize:none;"></textarea>
      <div style="display:flex;gap:8px;margin-top:10px;">
        <button onclick="el('driveSheet').remove()" style="flex:1;padding:12px;border:none;background:var(--bg);color:var(--txt);border-radius:10px;font-size:14px;cursor:pointer;">Cancel</button>
        <button onclick="sendDriveLink('${dest}')" style="flex:1;padding:12px;border:none;background:#1a73e8;color:#fff;border-radius:10px;font-size:14px;font-weight:bold;cursor:pointer;">📤 Send</button>
      </div>
      <button onclick="window.open('https://drive.google.com','_blank')" style="width:100%;padding:11px;margin-top:8px;border:none;background:#e8f0fe;color:#1a73e8;border-radius:10px;font-size:13px;font-weight:bold;cursor:pointer;">🔗 Open Google Drive</button>
    </div>`;
  sheet.addEventListener('click',e=>{if(e.target===sheet)sheet.remove();});
  document.body.appendChild(sheet);
  setTimeout(()=>el('driveInp')?.focus(),300);
}
async function sendDriveLink(dest){
  const link=(el('driveInp')?.value||'').trim();
  if(!link){showToast('❌ Please paste a link first');return;}
  if(!link.startsWith('http')){showToast('❌ Please paste a valid link');return;}
  el('driveSheet')?.remove();
  const t=now();
  try{
    if(dest==='p'&&curChat){
      const cid=getCID(CU.uid,curChat.uid);
      await db.collection('chats').doc(cid).collection('messages').add({type:'text',text:link,senderUid:CU.uid,senderName:MP?.name||'',time:t,seen:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
      const upd={participants:[CU.uid,curChat.uid],lastMsg:'__gdrive__',lastTime:t,lastTs:firebase.firestore.FieldValue.serverTimestamp()};
      upd['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);
      await db.collection('chats').doc(cid).set(upd,{merge:true});
    }else if(dest==='g'&&curGrp){
      await db.collection('groups').doc(curGrp.id).collection('messages').add({type:'text',text:link,senderUid:CU.uid,senderName:MP?.name||'Me',senderPhoto:myPho||'',time:t,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    }
    showToast('📁 File shared!');
  }catch(e){showToast('❌ '+e.message);}
}

// ── EMOJI REACTIONS (via long-press → react button in reaction bar) ──
function showEP(id,dest,event){curEId=id;curED=dest;const ep=el('emojiP');ep.style.display='block';ep.style.left=Math.min(event.clientX,window.innerWidth-210)+'px';ep.style.top=Math.max(event.clientY-130,10)+'px';}
async function pickEmoji(emoji){
  el('emojiP').style.display='none';
  // If used from keyboard panel: insert into input
  const activeInput=document.activeElement;
  if(activeInput&&(activeInput.id==='mIn'||activeInput.id==='gIn')){
    const pos=activeInput.selectionStart||activeInput.value.length;
    activeInput.value=activeInput.value.slice(0,pos)+emoji+activeInput.value.slice(pos);
    activeInput.setSelectionRange(pos+emoji.length,pos+emoji.length);
    activeInput===el('mIn')?onMsgInput():onGMsgInput();
    return;
  }
  if(!curEId)return;
  await toggleReact(curEId,emoji,curED);
}

// ── CAMERA ──
let gStickerOpen=false;
function toggleGKbSticker(){
  const p=el('gStickerPanel');
  gStickerOpen=!gStickerOpen;
  p.style.display=gStickerOpen?'block':'none';
  closeGMediaPanel();
  if(gStickerOpen)switchGStickerTab('emoji');
}
function closeGStickers(){gStickerOpen=false;el('gStickerPanel').style.display='none';}
function switchGStickerTab(tab){
  ['emoji','stickers','flags','gif'].forEach(t=>{
    const btn=el('gstab_'+t);
    if(btn){btn.style.background=t===tab?'#e67e22':'var(--card)';btn.style.color=t===tab?'#fff':'var(--sub)';}
  });
  const grid=el('gStickerGrid');grid.innerHTML='';
  if(tab==='stickers'){grid.innerHTML=`<div style="text-align:center;padding:20px 12px;color:var(--sub);font-size:13px;"><svg viewBox="0 0 24 24" style="width:40px;height:40px;fill:var(--sub);margin-bottom:8px;"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zm2.5-.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-15zM9 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-7.5 5h9a4.5 4.5 0 0 1-9 0z"/></svg><b>Stickers</b><p style="font-size:11px;opacity:.8;">Stickers sent to you appear here.</p></div>`;return;}
  if(tab==='gif'){grid.innerHTML='<div style="padding:12px;text-align:center;color:var(--sub);font-size:13px;">GIF search coming soon!</div>';return;}
  const items=tab==='flags'?FLAGS:STICKERS;
  items.forEach(s=>{
    const b=document.createElement('button');b.className='sticker-btn';b.textContent=s;
    b.onclick=()=>sendSticker(s);grid.appendChild(b);
  });
}

// ── FILES ──
function pickF(accept,type,dest){fType=type;fDest=dest;const fi=el(dest==='g'?'fGrp':'fPrv');fi.accept=accept;fi.value='';fi.click();}
async function handleF(e,dest){
  const file=e.target.files[0];if(!file)return;
  if(fType==='image'){showImgPreview(file,dest);return;}
  // Size limits
  if(fType==='video'&&file.size>200*1024*1024){showToast('⚠️ Video too large. Max 200MB.');return;}
  if(fType==='audio'&&file.size>50*1024*1024){showToast('⚠️ Audio too large. Max 50MB.');return;}
  if(fType==='doc'&&file.size>50*1024*1024){showToast('⚠️ Document too large. Max 50MB.');return;}
  const t=now();
  const ext=file.name.split('.').pop().toLowerCase();
  const localType=fType==='video'?'video':fType==='audio'?'audio':'doc';
  const rtype=fType==='video'?'video':fType==='audio'?'video':fType==='doc'?'raw':'auto';
  const _typeLabel=fType==='video'?'__video__':fType==='audio'?'__audio__':'__doc__:'+file.name;
  // ✅ INSTANT: Build message with sending status immediately
  let m={senderUid:CU.uid,senderName:MP?.name||'',time:t,seen:false,status:'sending',createdAt:firebase.firestore.FieldValue.serverTimestamp()};
  if(fType==='video')m={...m,type:'video',data:''};
  else if(fType==='audio')m={...m,type:'audio',data:''};
  else m={...m,type:'doc',data:'',name:file.name,ext};
  try{
    let msgRef;
    if(dest==='g'&&curGrp){
      msgRef=await db.collection('groups').doc(curGrp.id).collection('messages').add({...m,senderPhoto:myPho||''});
    }else if(dest==='p'&&curChat){
      const cid=getCID(CU.uid,curChat.uid);
      msgRef=await db.collection('chats').doc(cid).collection('messages').add(m);
      const _upd={participants:[CU.uid,curChat.uid],lastMsg:_typeLabel,lastTime:t,lastTs:firebase.firestore.FieldValue.serverTimestamp()};
      _upd['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);
      await db.collection('chats').doc(cid).set(_upd,{merge:true});
      const _fRecvUpd={chatIds:firebase.firestore.FieldValue.arrayUnion(cid)};
      _fRecvUpd['unread.'+cid]=firebase.firestore.FieldValue.increment(1);
      db.collection('users').doc(curChat.uid).update(_fRecvUpd).catch(()=>{db.collection('users').doc(curChat.uid).set(_fRecvUpd,{merge:true}).catch(()=>{});});
    }
    // ✅ BACKGROUND: Upload file without blocking UI
    if(msgRef){
      showToast('📤 Uploading in background...');
      const fd=new FormData();fd.append('file',file);fd.append('upload_preset',PRESET);
      fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/${rtype}/upload`,{method:'POST',body:fd})
        .then(r=>r.json())
        .then(d=>{
          if(d.secure_url){
            msgRef.update({data:d.secure_url,status:'sent'});
            showToast('✅ Sent!');
          }else{
            msgRef.update({status:'failed'});
            showToast('❌ Upload failed');
          }
        })
        .catch(ex=>{msgRef.update({status:'failed'});showToast('❌ '+ex.message);});
    }
  }catch(ex){showToast('❌ '+ex.message);}
}
let _previewFile=null,_previewDest=null;
// Compress image client-side to avoid 10MB limit — max 1000px, quality 0.7
function compressImage(file,maxW=1200,quality=0.75){
  return new Promise(resolve=>{
    const img=new Image(),blobUrl=URL.createObjectURL(file);
    img.onload=()=>{
      URL.revokeObjectURL(blobUrl);
      let w=img.width,h=img.height;
      if(w>maxW){h=Math.round(h*maxW/w);w=maxW;}
      const cv=document.createElement('canvas');cv.width=w;cv.height=h;
      cv.getContext('2d').drawImage(img,0,0,w,h);
      cv.toBlob(blob=>resolve(new File([blob],'photo.jpg',{type:'image/jpeg'})),'image/jpeg',quality);
    };
    img.onerror=()=>{URL.revokeObjectURL(blobUrl);resolve(file);};
    img.src=blobUrl;
  });
}
function showImgPreview(file,dest){
  _previewFile=file;_previewDest=dest;
  const url=URL.createObjectURL(file);
  const modal=document.createElement('div');
  modal.id='imgPreviewModal';
  modal.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9990;display:flex;flex-direction:column;';
  modal.innerHTML=`
    <div style="flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;">
      <img src="${url}" style="width:100%;height:100%;object-fit:contain;">
    </div>
    <div style="background:rgba(0,0,0,.85);padding:16px 20px;display:flex;gap:14px;justify-content:center;align-items:center;flex-shrink:0;">
      <button onclick="cancelPreview()" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);padding:12px 28px;border-radius:24px;font-size:16px;cursor:pointer;font-weight:bold;">✕</button>
      <button onclick="sendPreviewImg()" style="background:#27ae60;color:#fff;border:none;padding:12px 36px;border-radius:24px;font-size:16px;font-weight:bold;cursor:pointer;box-shadow:0 4px 16px rgba(39,174,96,.5);">✅ Send</button>
    </div>`;
  document.body.appendChild(modal);
}
async function sendPreviewImg(){
  const modal=el('imgPreviewModal');if(modal)modal.remove();
  if(!_previewFile)return;
  // ✅ INSTANT: Show image message immediately with sending status
  let fileToSend=_previewFile;
  try{fileToSend=await compressImage(_previewFile);}catch(e){}
  const t=now();
  const m={type:'image',data:'',senderUid:CU.uid,senderName:MP?.name||'',time:t,seen:false,status:'sending',createdAt:firebase.firestore.FieldValue.serverTimestamp()};
  try{
    if(_previewDest==='g'&&curGrp){
      const ref=await db.collection('groups').doc(curGrp.id).collection('messages').add({...m,senderPhoto:myPho||''});
      // ✅ BACKGROUND UPLOAD
      uploadCloud(fileToSend,'image').then(url=>{if(url)ref.update({data:url,status:'sent'});});
    }else if(_previewDest==='p'&&curChat){
      const cid=getCID(CU.uid,curChat.uid);
      const ref=await db.collection('chats').doc(cid).collection('messages').add(m);
      // ✅ BACKGROUND UPLOAD
      uploadCloud(fileToSend,'image').then(url=>{if(url)ref.update({data:url,status:'sent'});});
      const _upd={participants:[CU.uid,curChat.uid],lastMsg:'__photo__',lastTime:t,lastTs:firebase.firestore.FieldValue.serverTimestamp()};
      _upd['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);
      await db.collection('chats').doc(cid).set(_upd,{merge:true});
      const _pRecvUpd={chatIds:firebase.firestore.FieldValue.arrayUnion(cid)};_pRecvUpd['unread.'+cid]=firebase.firestore.FieldValue.increment(1);
      db.collection('users').doc(curChat.uid).update(_pRecvUpd).catch(()=>{db.collection('users').doc(curChat.uid).set(_pRecvUpd,{merge:true}).catch(()=>{});});
    }
    showToast('✅ Photo sent!');
  }catch(ex){showToast('❌ '+ex.message);}
  _previewFile=null;_previewDest=null;
}
function cancelPreview(){const m=el('imgPreviewModal');if(m)m.remove();_previewFile=null;_previewDest=null;}

// ── VOICE (Private) ──
// Flow: tap mic → start recording (button → red send arrow)
//       tap send → stop recording → auto upload & send immediately (no waiting bar)
function toggleVoice(){isRec?stopAndSendVoice():startVoice();}
async function startVoice(){
  if(!navigator.mediaDevices||!window.MediaRecorder){showToast('🎙️ Microphone not supported. Use Chrome.');return;}
  try{
    const s=await navigator.mediaDevices.getUserMedia({audio:true});
    const opts=MediaRecorder.isTypeSupported('audio/webm;codecs=opus')?{mimeType:'audio/webm;codecs=opus'}:{};
    mr=new MediaRecorder(s,opts);vCh=[];
    mr.ondataavailable=e=>{if(e.data?.size>0)vCh.push(e.data);};
    mr.start(200);isRec=true;vSec=0;
    // Button → red send arrow
    el('sendB').classList.add('rec');el('sendB').style.background='#e74c3c';
    el('sendIcon').innerHTML='<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>';
    el('vbar').style.display='flex';
    drawWave('vWave',()=>isRec);
    vInt=setInterval(()=>{vSec++;const mm=Math.floor(vSec/60),ss=vSec%60;el('vTimer').textContent=mm+':'+(ss<10?'0':'')+ss;},1000);
  }catch(err){showToast(err.name==='NotAllowedError'?'🎙️ Tap 🔒 → Allow Mic → Reload':'🎙️ '+err.message);}
}
async function stopAndSendVoice(){
  if(!mr||!isRec)return;
  // Stop mic
  clearInterval(vInt);
  mr.ondataavailable=null;
  const chunks=vCh.slice();
  const dur=vSec;
  try{mr.stop();}catch(e){}
  try{mr.stream.getTracks().forEach(t=>t.stop());}catch(e){}
  isRec=false;vCh=[];vSec=0;
  el('sendB').classList.remove('rec');el('sendB').style.background='var(--btnB)';
  el('sendIcon').innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  el('vbar').style.display='none';el('vTimer').textContent='0:00';
  if(!chunks.length||!curChat){showToast('⚠️ Nothing recorded');return;}
  await new Promise(r=>setTimeout(r,300));
  const blob=new Blob(chunks,{type:chunks[0]?.type||'audio/webm'});
  const file=new File([blob],'voice.webm',{type:'audio/webm'});
  const mm=Math.floor(dur/60),ss=dur%60;
  const cid=getCID(CU.uid,curChat.uid);
  const t=now();
  // ✅ INSTANT: Show message immediately with sending status
  const msgRef=await db.collection('chats').doc(cid).collection('messages').add({
    type:'voice',data:'',dur:mm+':'+(ss<10?'0':'')+ss,
    senderUid:CU.uid,senderName:MP?.name||'',time:t,seen:false,
    status:'sending',createdAt:firebase.firestore.FieldValue.serverTimestamp()
  });
  // ✅ BACKGROUND: Upload without blocking UI
  uploadCloud(file,'audio').then(url=>{
    if(url) msgRef.update({data:url,status:'sent'});
  });
  const _vUpd={participants:[CU.uid,curChat.uid],lastMsg:'__voice__',lastTime:now(),lastTs:firebase.firestore.FieldValue.serverTimestamp()};
  _vUpd['unread.'+curChat.uid]=firebase.firestore.FieldValue.increment(1);
  await db.collection('chats').doc(cid).set(_vUpd,{merge:true});
  // Signal receiver's inbox listener + increment nav badge unread
  const _vRecvUpd={chatIds:firebase.firestore.FieldValue.arrayUnion(cid)};
  _vRecvUpd['unread.'+cid]=firebase.firestore.FieldValue.increment(1);
  db.collection('users').doc(curChat.uid).update(_vRecvUpd).catch(()=>{
    db.collection('users').doc(curChat.uid).set(_vRecvUpd,{merge:true}).catch(()=>{});
  });
  showToast('🎙️ Voice sent!');
}
function cancelVoice(){
  if(mr&&isRec){try{mr.ondataavailable=null;mr.onstop=null;mr.stop();}catch(e){}try{mr.stream.getTracks().forEach(t=>t.stop());}catch(e){}}
  isRec=false;vCh=[];vSec=0;clearInterval(vInt);
  el('sendB').classList.remove('rec');el('sendB').style.background='var(--btnB)';
  el('sendIcon').innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  el('vbar').style.display='none';el('vTimer').textContent='0:00';
}
// Keep old processVoice/stopVoice/showVoiceReady stubs so smartSend still compiles
function stopVoice(){stopAndSendVoice();}
function processVoice(){}
function showVoiceReady(){}
function cancelVoiceReady(){}
// ── VOICE (Group) ──
function toggleGVoice(){gIsRec?stopAndSendGVoice():startGVoice();}
async function startGVoice(){
  if(!navigator.mediaDevices||!window.MediaRecorder){showToast('🎙️ Microphone not supported. Use Chrome.');return;}
  try{
    const s=await navigator.mediaDevices.getUserMedia({audio:true});
    const opts=MediaRecorder.isTypeSupported('audio/webm;codecs=opus')?{mimeType:'audio/webm;codecs=opus'}:{};
    gmr=new MediaRecorder(s,opts);gvCh=[];
    gmr.ondataavailable=e=>{if(e.data?.size>0)gvCh.push(e.data);};
    gmr.start(200);gIsRec=true;gvSec=0;
    el('gSendB').classList.add('rec');el('gSendB').style.background='#e74c3c';
    el('gSendIcon').innerHTML='<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>';
    el('gvbar').style.display='flex';
    drawWave('gvWave',()=>gIsRec);
    gvInt=setInterval(()=>{gvSec++;const mm=Math.floor(gvSec/60),ss=gvSec%60;el('gvTimer').textContent=mm+':'+(ss<10?'0':'')+ss;},1000);
  }catch(err){showToast(err.name==='NotAllowedError'?'🎙️ Allow Mic':'🎙️ '+err.message);}
}
async function stopAndSendGVoice(){
  if(!gmr||!gIsRec)return;
  clearInterval(gvInt);
  gmr.ondataavailable=null;
  const chunks=gvCh.slice();
  const dur=gvSec;
  try{gmr.stop();}catch(e){}
  try{gmr.stream.getTracks().forEach(t=>t.stop());}catch(e){}
  gIsRec=false;gvCh=[];gvSec=0;
  el('gSendB').classList.remove('rec');el('gSendB').style.background='#e67e22';
  el('gSendIcon').innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  el('gvbar').style.display='none';el('gvTimer').textContent='0:00';
  if(!chunks.length||!curGrp){showToast('⚠️ Nothing recorded');return;}
  await new Promise(r=>setTimeout(r,300));
  const blob=new Blob(chunks,{type:chunks[0]?.type||'audio/webm'});
  const file=new File([blob],'voice.webm',{type:'audio/webm'});
  const mm=Math.floor(dur/60),ss=dur%60;
  const t=now();
  // ✅ INSTANT: Show voice message immediately
  const gvRef=await db.collection('groups').doc(curGrp.id).collection('messages').add({
    type:'voice',data:'',dur:mm+':'+(ss<10?'0':'')+ss,
    senderUid:CU.uid,senderName:MP?.name||'Me',senderPhoto:myPho||'',
    time:t,status:'sending',createdAt:firebase.firestore.FieldValue.serverTimestamp()
  });
  // ✅ BACKGROUND: Upload without blocking UI
  uploadCloud(file,'audio').then(url=>{
    if(url) gvRef.update({data:url,status:'sent'});
  });
  showToast('🎙️ Voice sending...');
}
function cancelGVoice(){
  if(gmr&&gIsRec){try{gmr.ondataavailable=null;gmr.onstop=null;gmr.stop();}catch(e){}try{gmr.stream.getTracks().forEach(t=>t.stop());}catch(e){}}
  gIsRec=false;gvCh=[];gvSec=0;clearInterval(gvInt);
  el('gSendB').classList.remove('rec');el('gSendB').style.background='#e67e22';
  el('gSendIcon').innerHTML='<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/>';
  el('gvbar').style.display='none';el('gvTimer').textContent='0:00';
}
// Stubs for smartGSend compatibility
function stopGVoice(){stopAndSendGVoice();}
function processGVoice(){}
function showGVoiceReady(){}
function cancelGVoiceReady(){}
function toggleVP(id,src){
  const btn=document.querySelector(`#vp_${id} .vpbtn`);
  if(vPlayers[id]&&!vPlayers[id].paused){vPlayers[id].pause();if(btn)btn.textContent='▶';return;}
  if(!vPlayers[id]){
    const a=new Audio(src);vPlayers[id]=a;
    a.ontimeupdate=()=>{const f=el('vfill_'+id);if(f&&a.duration)f.style.width=(a.currentTime/a.duration*100)+'%';const d=el('vdur_'+id);if(d&&a.duration){const r=a.duration-a.currentTime;d.textContent=Math.floor(r/60)+':'+(('0'+Math.floor(r%60)).slice(-2));}};
    a.onended=()=>{if(btn)btn.textContent='▶';};
    a.onerror=()=>{showToast('⚠️ Cannot play');if(btn)btn.textContent='▶';};
    // Mark as played for sender notification - only if receiver is playing
    a.onplay=()=>{
      if(!curChat)return;
      const bw=document.querySelector(`.bw[data-id="${id}"]`);
      if(bw&&!bw.classList.contains('s')){
        // This is receiver playing sender's voice note
        markVoicePlayed(id,null);
      }
    };
  }
  vPlayers[id].play().catch(e=>showToast('⚠️ '+e.message));if(btn)btn.textContent='⏸';
}
function seekVP(e,id){const bar=el('vbar_'+id);if(!bar||!vPlayers[id]?.duration)return;vPlayers[id].currentTime=((e.clientX-bar.getBoundingClientRect().left)/bar.offsetWidth)*vPlayers[id].duration;}
function drawWave(canvasId,isRecFn){
  const cv=el(canvasId);if(!cv)return;const ctx=cv.getContext('2d');
  (function draw(){if(!isRecFn())return;ctx.clearRect(0,0,cv.width,cv.height);ctx.strokeStyle='#e74c3c';ctx.lineWidth=2;ctx.beginPath();for(let x=0;x<cv.width;x+=4){const y=cv.height/2+Math.sin(x*.3+Date.now()*.008)*(2+Math.random()*5);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.stroke();requestAnimationFrame(draw);})();
}

// ── INBOX ──
let inboxUnsub=null;
let inboxChatsUnsub=null;
let _cachedInboxDocs=null; // last fetched chat docs

function setupInbox(){
  if(inboxUnsub)inboxUnsub();
  if(inboxChatsUnsub){inboxChatsUnsub();inboxChatsUnsub=null;}
  _cachedInboxDocs=null;
  let _watchingIds=[];
  // Cache user-doc unread map in memory — updated by the user-doc listener in real time
  window._inboxUnreadMap={};

  const startChatListener=(chatIds)=>{
    const sorted=[...chatIds].sort().join(',');
    const prev=[..._watchingIds].sort().join(',');
    if(sorted===prev&&inboxChatsUnsub)return;
    _watchingIds=chatIds.slice();
    if(inboxChatsUnsub){inboxChatsUnsub();inboxChatsUnsub=null;}
    if(!chatIds.length)return;
    const watchIds=chatIds.slice(0,30);
    inboxChatsUnsub=db.collection('chats').where(firebase.firestore.FieldPath.documentId(),'in',watchIds).onSnapshot(sn=>{
      if(!_cachedInboxDocs){
        _cachedInboxDocs=sn.docs.slice();
      }else{
        sn.docChanges().forEach(change=>{
          const idx=_cachedInboxDocs.findIndex(d=>d.id===change.doc.id);
          if(change.type==='removed'){if(idx>=0)_cachedInboxDocs.splice(idx,1);}
          else if(idx>=0){_cachedInboxDocs[idx]=change.doc;}
          else{_cachedInboxDocs.push(change.doc);}
        });
      }
      renderInbox(el('inboxQ')?.value||'',{docs:_cachedInboxDocs});
    },e=>console.log('inboxChats:',e));
  };

  inboxUnsub=db.collection('users').doc(CU.uid).onSnapshot(snap=>{
    const data=snap.data()||{};
    const chatIds=data.chatIds||[];
    // Keep unread map in memory so renderInbox never needs to fetch it
    window._inboxUnreadMap=data.unread||{};
    // Nav badge
    let t=Object.values(window._inboxUnreadMap).reduce((a,b)=>a+(b||0),0);
    const nb=el('msgB2');
    if(nb){nb.textContent=t>9?'9+':t;nb.style.display=t>0?'inline-flex':'none';}
    if(t>0&&!curChat)showToast('💬 '+t+' unread message'+(t>1?'s':''));
    if(!chatIds.length){
      const f=el('inboxL');
      if(f)f.innerHTML="<p style='text-align:center;color:#888;padding:20px;'>No conversations yet.</p>";
      _cachedInboxDocs=null;_watchingIds=[];
      if(inboxChatsUnsub){inboxChatsUnsub();inboxChatsUnsub=null;}
      return;
    }
    // Re-render inbox immediately with updated unread map when user doc changes
    if(_cachedInboxDocs)renderInbox(el('inboxQ')?.value||'',{docs:_cachedInboxDocs});
    startChatListener(chatIds);
  },e=>{showToast('❌ Inbox error: '+e.message);});
}

function renderInbox(q="",sn=null){
  const _execRender=async(snapshot)=>{
    const f=el('inboxL');
    const seenUid={};
    const docList=Array.isArray(snapshot)?snapshot:(snapshot.docs||[]);
    docList.forEach(d=>{
      const ouid=(d.data().participants||[]).find(id=>id!==CU.uid);
      if(!ouid)return;
      const canonical=getCID(CU.uid,ouid);
      // Always prefer the canonical chat doc; among non-canonical, keep the one with most recent activity
      const existing=seenUid[ouid];
      if(!existing){seenUid[ouid]=d;}
      else if(d.id===canonical){seenUid[ouid]=d;}  // canonical always wins
      else if(existing.id!==canonical){
        // neither is canonical — keep the one with more recent lastTs
        const ta=d.data().lastTs?.seconds||0;
        const tb=existing.data().lastTs?.seconds||0;
        if(ta>tb)seenUid[ouid]=d;
      }
    });
    let entries=Object.values(seenUid);
    entries.sort((a,b)=>{
      const ta=a.data().lastTs?.seconds||0;
      const tb=b.data().lastTs?.seconds||0;
      return tb-ta;
    });
    if(q)entries=entries.filter(d=>{
      const ouid=(d.data().participants||[]).find(id=>id!==CU.uid);
      const o=allUsers.find(u=>u.uid===ouid);
      return(o?.name||'').toLowerCase().includes(q.toLowerCase());
    });
    if(!entries.length){f.innerHTML="<p style='text-align:center;color:#888;padding:20px;'>No conversations yet.</p>";return;}
    // Fetch only users genuinely missing from cache
    const missingUids=entries.map(d=>(d.data().participants||[]).find(id=>id!==CU.uid)).filter(uid=>uid&&!allUsers.find(u=>u.uid===uid));
    if(missingUids.length){
      const fetched=await Promise.all(missingUids.map(uid=>db.collection('users').doc(uid).get().catch(()=>null)));
      fetched.forEach(snap=>{if(snap&&snap.exists){const d=snap.data();if(d&&!allUsers.find(u=>u.uid===d.uid))allUsers.push(d);}});
    }
    f.innerHTML='';
    // Use in-memory unread map — NO extra Firestore fetch needed
    const _userUnreadMap=window._inboxUnreadMap||{};
    const _overrides=window._unreadOverride||{};
    entries.forEach(d=>{
      const data=d.data(),ouid=(data.participants||[]).find(id=>id!==CU.uid);
      const o=allUsers.find(u=>u.uid===ouid)||{name:'User',status:'Offline',photo:'',country:'',uni:''};
      const cid=d.id;
      const st=getStatusInfo(o.status,o.lastSeen);
      // Override wins — set to 0 the moment chat is opened, cleared once Firestore confirms
      const unread=(_overrides[cid]===0)?0:Math.max((data.unread||{})[CU.uid]||0,_userUnreadMap[cid]||0);
      // Render lastMsg with SVG icon for media types
      const _rawMsg=data.lastMsg||'';
      let _msgHtml;
      if(_rawMsg==='__photo__')_msgHtml=`<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:middle;margin-right:3px;flex-shrink:0;"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>Photo`;
      else if(_rawMsg==='__video__')_msgHtml=`<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:middle;margin-right:3px;flex-shrink:0;"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>Video`;
      else if(_rawMsg==='__audio__')_msgHtml=`<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:middle;margin-right:3px;flex-shrink:0;"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>Audio`;
      else if(_rawMsg==='__voice__')_msgHtml=`<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:middle;margin-right:3px;flex-shrink:0;"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H2c0 4.97 3.52 9.1 8 9.8V22h4v-4.27c4.48-.7 8-4.83 8-9.8h-2c0 4.08-3.06 7.44-7 7.93V15h-2v.93z"/></svg>Voice`;
      else if(_rawMsg==='__gdrive__')_msgHtml=`<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:middle;margin-right:3px;flex-shrink:0;"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>File`;
      else if(_rawMsg.startsWith('__doc__:'))_msgHtml=`<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:middle;margin-right:3px;flex-shrink:0;"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>${esc(_rawMsg.slice(8))||'Document'}`;
      else _msgHtml=esc(_rawMsg||'Tap to chat');
      const av=o.photo?`<img src="${o.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`:'👤';
      f.innerHTML+=`<div style="display:flex;align-items:center;gap:10px;padding:12px;border-bottom:1px solid var(--brd);cursor:pointer;${unread>0?'background:rgba(10,60,109,.04);':''}" onclick="openChat('${e2(o.name||'User')}','${ouid||''}')">
        <div style="position:relative;flex-shrink:0;width:50px;height:50px;">
          <div style="width:50px;height:50px;border-radius:50%;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:20px;border:2px solid var(--btnB);">${av}</div>
          <div style="position:absolute;bottom:1px;right:1px;width:13px;height:13px;border-radius:50%;border:2px solid var(--card);background:${st.cls==='online'?'#2ECC71':st.cls==='busy'?'#e74c3c':'#95a5a6'};z-index:2;"></div>
        </div>
        <div style="flex:1;min-width:0;">
          <b style="font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${unread>0?'color:var(--btnB);':''}">${esc(o.name||'User')}</b>
          ${o.uni?`<p style="font-size:10px;color:var(--sub);margin:1px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">🏛️ ${esc(o.uni)}</p>`:''}
          <p style="font-size:11px;color:${unread>0?'var(--txt)':'var(--sub)'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${unread>0?'font-weight:bold;':''};display:flex;align-items:center;">${_msgHtml}</p>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
          ${unread>0
            ?`<div style="background:#e74c3c;color:#fff;border-radius:10px;min-width:20px;height:20px;font-size:11px;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;padding:0 5px;">${unread>9?'9+':unread}</div>`
            :`<span style="font-size:10px;color:var(--sub);">${data.lastTime||''}</span>`}
        </div>
      </div>`;
    });
  };
  if(sn){_execRender(sn);return;}
  db.collection('chats').where('participants','array-contains',CU.uid).get().then(_execRender).catch(e=>console.log(e));
}
function reportUser(uid,name){
  if(!uid)return;
  const reason=prompt(`Report ${name}?\nPlease briefly describe the reason:`);
  if(!reason)return;
  db.collection('reports').add({reportedUid:uid,reportedName:name,reporterUid:CU.uid,reporterName:MP?.name||'',reason,createdAt:firebase.firestore.FieldValue.serverTimestamp()})
    .then(()=>showToast('🚩 Report submitted. Thank you.'))
    .catch(()=>showToast('❌ Could not submit report'));
}

// ── NOTIFICATIONS (alerts only - no messages) ──
function setupNotifL(){
  if(notifUnsub)notifUnsub();
  notifUnsub=db.collection('notifications').where('toUid','==',CU.uid).onSnapshot(sn=>{
    const notifs=sn.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0));
    const unread=notifs.filter(n=>!n.read).length;
    const nb=el('notifB');nb.textContent=unread>9?'9+':unread;nb.style.display=unread>0?'inline-flex':'none';
    const f=el('notifL');
    if(!notifs.length){f.innerHTML="<p style='text-align:center;color:#888;'>No notifications</p>";return;}
    f.innerHTML='';
    notifs.forEach(n=>{
      f.innerHTML+=`<div class="notif ${n.read?'':'unread'}" onclick="markN('${n.id}')" style="display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-bottom:1px solid var(--brd);">
        <span style="font-size:20px;flex-shrink:0;">${n.icon||'🔔'}</span>
        <div style="flex:1;overflow:hidden;">
          <b style="font-size:13px;display:block;">${esc(n.title||'')}</b>
          <p style="font-size:11px;color:var(--sub);margin:2px 0;">${esc(n.body||'')}</p>
        </div>
        ${!n.read?`<div style="width:8px;height:8px;border-radius:50%;background:#e74c3c;flex-shrink:0;margin-top:4px;"></div>`:''}
      </div>`;
    });
  },e=>console.log('notif:',e));
}
function markN(id){db.collection('notifications').doc(id).update({read:true}).catch(()=>{});}
function clearNotifs(){db.collection('notifications').where('toUid','==',CU.uid).get().then(sn=>{const b=db.batch();sn.docs.forEach(d=>b.delete(d.ref));return b.commit();});}

// ── HELPERS ──
function el(id){return document.getElementById(id);}
function v(id){return(el(id)?.value||'').trim();}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function e2(s){return String(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");}
function openPhoneSettings(){
  // Try app-level settings URI schemes for mobile
  const ua=navigator.userAgent;
  if(/iPhone|iPad|iPod/.test(ua)){window.location.href='App-Prefs:root';}
  else if(/Android/.test(ua)){window.location.href='intent:#Intent;action=android.settings.SETTINGS;end';}
  else{showToast('⚙️ Open your device Settings app to change language, time, and other preferences.');}
}
function toggleDark(){dark=!dark;document.body.classList.toggle('dark',dark);}
function showToast(msg){const t=el('toast');t.textContent=msg;t.style.display='block';clearTimeout(t._t);t._t=setTimeout(()=>t.style.display='none',4000);}
function now(){const d=new Date();return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0');}
function showOv(v){el('ov').style.display=v?'flex':'none';}
function tab(id){
  document.querySelectorAll('.page').forEach(p=>p.style.display='none');
  el('P'+id).style.display='block';
  document.querySelectorAll('.ni').forEach(n=>n.classList.remove('on'));
  el('n'+id).classList.add('on');
  if(id==='home'&&cachedPosts.length>0){
    renderHome(cachedPosts);
    const b=el('feedB');if(b){b.style.display='none';b.textContent='';}
  }
  // If already on home and tapped again - refresh feed from Firestore
  if(id==='home'&&el('Phome').style.display!=='none'&&arguments[1]==='refresh'){
    db.collection('posts').orderBy('createdAt','desc').limit(30).get().then(sn=>{
      cachedPosts=sn.docs.map(d=>({id:d.id,...d.data()}));
      renderHome(cachedPosts);
      showToast('✅ Feed refreshed');
    }).catch(()=>{});
  }
  if(id==='find'){
    if(allUsers.length>0)renderFind(el('findQ')?.value||'');
    else db.collection('users').get().then(sn=>{allUsers=sn.docs.map(d=>d.data());renderFind('');});
  }
  if(id==='msgs'){/* setupInbox handles real-time inbox updates */}
  if(id==='alerts'){
    db.collection('notifications').where('toUid','==',CU.uid).where('read','==',false).get()
      .then(sn=>{const b=db.batch();sn.docs.forEach(d=>b.update(d.ref,{read:true}));return b.commit();}).catch(()=>{});
  }
}
document.addEventListener('click',e=>{if(!e.target.closest('#emojiP')&&!e.target.closest('.mabtn'))el('emojiP').style.display='none';});

window.onload=()=>{
  // Countries
  const uc=el('uC');COUNTRIES.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;uc.appendChild(o);});
  // Tags
  const ts=el('tagSel');
  SUBJECTS.forEach(s=>{
    const b=document.createElement('button');b.className='tag';b.textContent=s;b.type='button';
    b.onclick=()=>{selTags.includes(s)?selTags=selTags.filter(t=>t!==s):selTags.push(s);b.classList.toggle('sel');};
    ts.appendChild(b);
  });
  el('mIn').addEventListener('keydown',e=>{if(e.key==='Enter')smartSend();});
  el('gIn').addEventListener('keydown',e=>{if(e.key==='Enter')smartGSend();});
};