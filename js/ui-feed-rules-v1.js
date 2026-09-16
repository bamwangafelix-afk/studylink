/* StudyLink feed group-rule visibility */
(function(){
  'use strict';
  function addFeedRules(){
    if(typeof cachedPosts==='undefined'||!Array.isArray(cachedPosts)||typeof db==='undefined')return;
    const posts=cachedPosts.filter(p=>p&&p.type==='Group').slice(0,30);
    posts.forEach(async p=>{
      const cards=[...document.querySelectorAll('.card.grp')];
      const target=cards.find(c=>c.querySelector('b')?.textContent?.includes(p.groupName||'__never__'));
      if(!target||target.querySelector('.ui-feed-rule'))return;
      let rule={whoCanJoin:p.whoCanJoin||p.accessRule||'anyone',howCanJoin:p.howCanJoin||'direct'};
      try{
        const snap=await db.collection('groups').doc(p.id).get();
        if(snap.exists&&typeof normalizeGroupRules==='function')rule=normalizeGroupRules(snap.data()||{});
      }catch(_){}
      const labels={anyone:'Anyone',country:'My Country',university:'My University',major:'My Courses'};
      const icons={anyone:'🟢',country:'🌍',university:'🎓',major:'📚'};
      const b=document.createElement('div');
      b.className='ui-feed-rule';
      b.textContent=`${icons[rule.whoCanJoin]||'🟢'} ${labels[rule.whoCanJoin]||'Anyone'}${rule.howCanJoin==='request'?'  🔒 Request to Join':''}`;
      const ptext=target.querySelector('p');
      if(ptext)target.insertBefore(b,ptext);else target.appendChild(b);
    });
  }
  function start(){
    const s=document.createElement('style');
    s.textContent='.ui-feed-rule{display:inline-flex;padding:4px 8px;border-radius:9px;font-size:10px;font-weight:700;background:#eef2f9;color:#24364d;margin-bottom:8px}body.dark .ui-feed-rule{background:#24364d;color:#fff;border:1px solid #3e5874}';
    document.head.appendChild(s);
    if(typeof renderHome==='function'&&!renderHome.__feedRuleWrapped){
      const original=renderHome;
      const wrapped=function(){const r=original.apply(this,arguments);setTimeout(addFeedRules,0);setTimeout(addFeedRules,500);return r;};
      wrapped.__feedRuleWrapped=true;
      window.renderHome=wrapped;
    }
    setTimeout(addFeedRules,900);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();