/* StudyLink UI recovery for the compact index shell */
(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const q=s=>document.querySelector(s);

  function addStyle(){
    if($('uiRecoveryStyle')) return;
    const s=document.createElement('style');
    s.id='uiRecoveryStyle';
    s.textContent=`
      #groupManageView .chdr{background:var(--hdr,#021841)!important;color:#fff!important}
      #groupManageView .chdr .profile-header-title,
      #groupManageView .chdr .profile-back-btn,
      #groupManageView .chdr #gmRole{color:#fff!important}
      body.dark .ruleBadge{background:#24364d!important;color:#fff!important;border:1px solid #3e5874!important}
      .ruleBadge{background:#eef2f9!important;color:#24364d!important}
      #gmMembers .gc-admin-action{background:var(--btnB,#0A3C6D)!important;color:#fff!important}
      #gcSettings{background:var(--card)!important;color:var(--txt)!important}
      #gcSettings label{color:var(--txt)!important}
      #gcSettings select{background:var(--inp)!important;color:var(--txt)!important;border-color:var(--brd)!important}
      .ui-feed-rule{display:inline-flex;padding:4px 8px;border-radius:9px;font-size:10px;font-weight:700;background:#eef2f9;color:#24364d;margin-bottom:8px}
      body.dark .ui-feed-rule{background:#24364d;color:#fff;border:1px solid #3e5874}
    `;
    document.head.appendChild(s);
  }

  function ensureStatusCreate(){
    const v=$('statusCreate');
    if(!v) return;
    if($('stCatGrid')&&$('stMsg')&&$('stVisibility')) return;
    v.className='stCreate';
    v.innerHTML=`
      <div class="stCHdr">
        <button onclick="closeStatusCreate()" style="color:#fff;background:none;border:none;font-size:22px;cursor:pointer;">✕</button>
        <div style="font-size:16px;font-weight:800;color:#fff;">Nouveau statut</div>
        <button class="stPubBtn" onclick="publishStatus()">Publier</button>
      </div>
      <div class="stCBody">
        <p class="stSection">Photo (optionnel)</p>
        <div id="stPhotoZone" class="stPhotoZone" onclick="document.getElementById('fStatus').click()">
          <div id="stPhotoPreviewWrap" style="display:none;position:relative;"><img id="stPhotoPreview" style="width:100%;border-radius:12px;display:block;max-height:160px;object-fit:cover;"><button type="button" onclick="event.stopPropagation();removeStatusPhoto()" style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,.6);color:#fff;border:none;border-radius:50%;width:26px;height:26px;">✕</button></div>
          <div id="stPhotoEmpty"><div class="stPhotoVector st-photo-icon"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l1.5-3h5L16 6"/><circle cx="12" cy="13" r="3.5"/></svg></div><div class="st-photo-add-label">Ajouter une photo</div><div style="font-size:12px;color:var(--sub);">Notes, bureau de révision, selfie...</div></div>
        </div>
        <input type="file" id="fStatus" accept="image/*" style="display:none;" onchange="handleStatusPhoto(event)">
        <p class="stSection">Catégorie</p><div class="stCatGrid" id="stCatGrid"></div>
        <p class="stSection">Who can see your post?</p>
        <select id="stVisibility" class="stVisibilitySelect" onchange="rememberStatusVisibility(this.value)"><option value="anyone">Anyone</option><option value="country">Only my country</option><option value="university">Only my university</option><option value="major">Only my major/Course</option></select>
        <p class="stSection">Matière (optionnel)</p>
        <div class="subjectPicker statusSubjectPicker" id="statusSubjectPicker"><input id="statusSubjectSearch" class="subjectSearch" type="search" placeholder="Search subjects..." autocomplete="off"><div class="subjectCategoryTabs" id="statusSubjectCats" role="tablist"></div><div class="subjectSelected" id="statusSubjectSelected"></div><div id="stSubjSel" class="subjectOptions" aria-live="polite"></div></div>
        <p class="stSection">Lier un groupe (optionnel)</p><div id="stGroupSel" style="display:flex;flex-wrap:wrap;gap:6px;"></div>
        <p class="stSection">Message</p><textarea id="stMsg" rows="3" maxlength="100" placeholder="Dispo pour étudier maintenant, qui veut rejoindre ?" oninput="if(document.getElementById('stCharCount'))document.getElementById('stCharCount').textContent=this.value.length+' / 100';if(typeof updateStatusCreateTheme==='function')updateStatusCreateTheme()"></textarea><div id="stCharCount" style="text-align:right;font-size:11px;color:var(--sub);">0 / 100</div>
        <div class="status-color-companion" id="stColorCompanion"><span class="sccIdentity"><span class="sccDot" id="stCompanionDot"></span><span id="stCompanionLabel">Mode texte</span></span><div class="sccActions"><button type="button" class="sccButton" onclick="insertStatusCompanionEmoji('✨')">✨</button><button type="button" class="sccPublish" onclick="publishStatus()">Publier</button></div></div>
        <p class="stSection">Aperçu</p><div id="stPreview" class="stPreviewWrap"></div><p style="text-align:center;font-size:12px;color:var(--sub);margin-top:14px;">⏱ Ton statut disparaît automatiquement après 24h</p>
      </div>`;
  }

  function ensureStatusView(){
    const v=$('statusView');
    if(!v) return;
    if($('stVName')&&$('stVReplyInput')) return;
    v.className='stView';
    v.innerHTML=`<div class="stVProgress" id="stVProgress"><div class="stVProgFill"></div></div><div class="stVTop"><div class="stVAvatar" id="stVAvatar"></div><div style="flex:1;"><div style="color:#fff;font-weight:800;font-size:15px;" id="stVName"></div><div style="color:rgba(255,255,255,.75);font-size:12px;" id="stVTime"></div></div><button onclick="toggleStatusMenu()" style="color:#fff;background:none;border:none;font-size:20px;">⋮</button><button onclick="closeStatusView()" style="color:#fff;background:none;border:none;font-size:22px;">✕</button></div><div class="stVMenu" id="stVMenu"></div><div class="stVSeenList" id="stVSeenList"></div><div class="stVMain" id="stVMain"><div class="stVMsg" id="stVMsg"></div><div class="stVBadge" id="stVBadge"></div><div class="stVSubject" id="stVSubject" style="display:none;"></div><button id="stVJoinGroupBtn" onclick="joinStatusGroup()" style="display:none;margin-top:18px;background:#fff;color:#16357a;border:none;padding:11px 22px;border-radius:22px;font-weight:800;"><span id="stVJoinGroupLabel"></span></button></div><div class="stVBottom" id="stVBottom"><div id="stVReplyBar" style="display:none;"></div><div class="stVReplyRow"><input class="stVReplyInput" id="stVReplyInput" placeholder="Répondre..." oninput="onStatusReplyInput()" onkeydown="if(event.key==='Enter'){event.preventDefault();smartStatusReply()}"><button type="button" class="cin-action stVReplyBtn" id="stVReplyBtn" onclick="smartStatusReply()"><svg id="stVReplyIcon" viewBox="0 0 48 48" width="26" height="26" fill="currentColor"><rect x="16" y="2" width="16" height="26" rx="8"/><path d="M8 24c0 8.837 7.163 16 16 16s16-7.163 16-16" stroke="currentColor" stroke-width="3.5" fill="none"/></svg></button></div></div>`;
  }

  function ensureChat(){
    const v=$('chatW');
    if(!v) return;
    const row=v.querySelector('.cin-wrap');
    if(!row) return;
    if(!$('sendB')) row.insertAdjacentHTML('beforeend',`<button type="button" class="cin-action cin-send-action" id="sendB" onclick="smartSend()" style="display:flex;"><svg id="sendIcon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15-2-15 2z"/></svg></button>`);
    if(!$('fCam')) v.insertAdjacentHTML('beforeend',`<input type="file" id="fCam" style="display:none;" accept="image/*" capture="environment" onchange="handleF(event,'p')">`);
    if(!row.querySelector('.cin-camera')) $('sendB')?.insertAdjacentHTML('beforebegin',`<button class="cin-camera" onclick="openCamera('p')" title="Take Photo" style="background:none;border:none;color:var(--sub);padding:4px;cursor:pointer;"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 15.2A3.2 3.2 0 0 1 8.8 12 3.2 3.2 0 0 1 12 8.8 3.2 3.2 0 0 1 15.2 12 3.2 3.2 0 0 1 12 15.2M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg></button>`);
  }

  function ensureGroupChat(){
    const v=$('groupW');
    if(!v) return;
    const row=v.querySelector('.cin-wrap');
    if(!row) return;
    if(!$('gSendB')) row.insertAdjacentHTML('beforeend',`<button type="button" class="cin-action cin-send-action" id="gSendB" onclick="smartGSend()" style="display:flex;background:#e67e22;"><svg id="gSendIcon" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>`);
    if(!$('fGCam')) v.insertAdjacentHTML('beforeend',`<input type="file" id="fGCam" style="display:none;" accept="image/*" capture="environment" onchange="handleF(event,'g')">`);
    if(!row.querySelector('.cin-camera')) $('gSendB')?.insertAdjacentHTML('beforebegin',`<button class="cin-camera" onclick="openCamera('g')" title="Take Photo" style="background:none;border:none;color:#e67e22;padding:4px;cursor:pointer;"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 15.2A3.2 3.2 0 0 1 8.8 12 3.2 3.2 0 0 1 12 8.8 3.2 3.2 0 0 1 15.2 12 3.2 3.2 0 0 1 12 15.2M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg></button>`);
  }

  function cleanGroupCreate(){
    [$('gWhoCanJoin'),$('gHowCanJoin')].forEach(x=>{if(x){const l=x.previousElementSibling;if(l?.tagName==='LABEL')l.remove();x.remove();}});
  }

  function polishManage(){
    const del=$('gcDeleteBtn'); if(del)del.textContent='Delete Group';
    const set=$('gcSettings'); if(set)set.querySelectorAll('button').forEach(b=>{if((b.textContent||'').trim().toLowerCase()==='cancel')b.onclick=()=>set.style.display='none';});
    $('gmMembers')?.querySelectorAll('button').forEach(b=>{const t=(b.textContent||'').trim().toLowerCase();if(t==='make admin'||t==='remove admin'){b.classList.add('gc-admin-action');b.classList.remove('o');}});
  }

  function refresh(){addStyle();ensureStatusCreate();ensureStatusView();ensureChat();ensureGroupChat();cleanGroupCreate();polishManage();}
  function restartViews(){try{if(typeof renderMe==='function')renderMe();}catch(_){} try{if(typeof renderStatusBar==='function')renderStatusBar();}catch(_){} try{if(typeof renderHome==='function'&&typeof cachedPosts!=='undefined')renderHome(cachedPosts,window._feedShown||10);}catch(_){}}

  function start(){refresh();setTimeout(refresh,300);setTimeout(restartViews,700);setTimeout(refresh,1000);new MutationObserver(refresh).observe(document.body,{childList:true,subtree:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();