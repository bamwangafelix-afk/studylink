/* StudyLink UI recovery + group settings polish */
(function(){
  'use strict';

  function el(id){ return document.getElementById(id); }

  function injectCss(){
    if(el('gcFixStyle')) return;
    const s=document.createElement('style');
    s.id='gcFixStyle';
    s.textContent=`
      /* Group management header: readable in both themes */
      #groupManageView .chdr{
        background:var(--hdr,#021841)!important;
        color:#fff!important;
      }
      #groupManageView .chdr .profile-header-title,
      #groupManageView .chdr .profile-back-btn,
      #groupManageView .chdr #gmRole{
        color:#fff!important;
      }

      /* Group rules must remain readable in dark mode */
      .ruleBadge{
        background:#eef2f9!important;
        color:#24364d!important;
        border:1px solid rgba(10,60,109,.12);
      }
      body.dark .ruleBadge{
        background:#24364d!important;
        color:#fff!important;
        border-color:#3e5874!important;
      }
      .feed-group-rule{
        display:inline-flex;
        align-items:center;
        gap:4px;
        margin:0 0 8px;
        padding:4px 8px;
        border-radius:9px;
        font-size:10px;
        font-weight:700;
        background:#eef2f9;
        color:#24364d;
      }
      body.dark .feed-group-rule{
        background:#24364d;
        color:#fff;
        border:1px solid #3e5874;
      }

      /* Make Admin / Remove Admin follow the main blue action style */
      #gmMembers .gc-admin-action{
        background:var(--btnB,#0A3C6D)!important;
        color:#fff!important;
      }

      /* Settings panel labels/fields */
      #gcSettings{
        color:var(--txt)!important;
        background:var(--card)!important;
      }
      #gcSettings label{
        color:var(--txt)!important;
      }
      #gcSettings select{
        color:var(--txt)!important;
        background:var(--inp)!important;
        border-color:var(--brd)!important;
      }
    `;
    document.head.appendChild(s);
  }

  function removeCreationJoinOptions(){
    const join=el('gWhoCanJoin');
    const how=el('gHowCanJoin');
    if(join){
      const label=join.previousElementSibling;
      if(label && label.tagName==='LABEL') label.remove();
      join.remove();
    }
    if(how){
      const label=how.previousElementSibling;
      if(label && label.tagName==='LABEL') label.remove();
      how.remove();
    }
  }

  function fixGroupManageUi(){
    const del=el('gcDeleteBtn');
    if(del){
      del.textContent='Delete Group';
      del.classList.remove('o');
    }

    const settings=el('gcSettings');
    if(settings){
      const buttons=settings.querySelectorAll('button');
      buttons.forEach(btn=>{
        if((btn.textContent||'').trim().toLowerCase()==='cancel'){
          btn.onclick=function(){
            settings.style.display='none';
          };
        }
      });
    }

    const members=el('gmMembers');
    if(members){
      members.querySelectorAll('button').forEach(btn=>{
        const txt=(btn.textContent||'').trim().toLowerCase();
        if(txt==='make admin'||txt==='remove admin'){
          btn.classList.add('gc-admin-action');
          btn.classList.remove('o');
        }
      });
    }
  }

  function addFeedRules(){
    if(typeof cachedPosts==='undefined'||!Array.isArray(cachedPosts)||typeof db==='undefined') return;
    const groupPosts=cachedPosts.filter(p=>p&&p.type==='Group').slice(0,30);
    groupPosts.forEach(async p=>{
      const cards=[...document.querySelectorAll('.card.grp')];
      const target=cards.find(c=>
        c.querySelector('b')?.textContent?.includes(p.groupName||'__never__')
      );
      if(!target || target.querySelector('.feed-group-rule')) return;

      let rule={whoCanJoin:'anyone',howCanJoin:'direct'};
      try{
        const snap=await db.collection('groups').doc(p.id).get();
        if(snap.exists && typeof normalizeGroupRules==='function'){
          rule=normalizeGroupRules(snap.data()||{});
        }else if(p.whoCanJoin||p.accessRule){
          rule={
            whoCanJoin:p.whoCanJoin||p.accessRule||'anyone',
            howCanJoin:p.howCanJoin||'direct'
          };
        }
      }catch(_){
        rule={
          whoCanJoin:p.whoCanJoin||p.accessRule||'anyone',
          howCanJoin:p.howCanJoin||'direct'
        };
      }

      const labels={
        anyone:'Anyone',
        country:'My Country',
        university:'My University',
        major:'My Courses'
      };
      const icons={
        anyone:'🟢',
        country:'🌍',
        university:'🎓',
        major:'📚'
      };
      const wrap=document.createElement('div');
      wrap.className='feed-group-rule';
      wrap.textContent=`${icons[rule.whoCanJoin]||'🟢'} ${labels[rule.whoCanJoin]||'Anyone'}${rule.howCanJoin==='request'?'  🔒 Request to Join':''}`;
      const text=target.querySelector('p');
      if(text) target.insertBefore(wrap,text);
      else target.appendChild(wrap);
    });
  }

  function wrapHome(){
    if(typeof window.renderHome!=='function'||window.renderHome.__gcFixWrapped)return;
    const original=window.renderHome;
    const wrapped=function(){
      const result=original.apply(this,arguments);
      setTimeout(addFeedRules,0);
      setTimeout(addFeedRules,500);
      return result;
    };
    wrapped.__gcFixWrapped=true;
    window.renderHome=wrapped;
  }

  function start(){
    injectCss();
    removeCreationJoinOptions();
    fixGroupManageUi();
    wrapHome();

    const obs=new MutationObserver(()=>{
      removeCreationJoinOptions();
      fixGroupManageUi();
      wrapHome();
    });
    obs.observe(document.body,{childList:true,subtree:true});

    const pType=el('pType');
    if(pType){
      pType.addEventListener('change',removeCreationJoinOptions);
      removeCreationJoinOptions();
    }

    setTimeout(addFeedRules,800);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',start,{once:true});
  }else{
    start();
  }
})();