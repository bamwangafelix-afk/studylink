/* Ensure the compact index exposes the hook expected by group-controls v3 */
(function(){
  function fix(){
    const v=document.getElementById('groupManageView');
    if(!v)return;
    const btn=v.querySelector('button[onclick*="openInviteMembers"]');
    if(btn&&!btn.id)btn.id='gmInviteBtn';
    const title=document.getElementById('gmTitle');
    if(title)title.classList.add('gc-manage-title');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix,{once:true});else fix();
})();