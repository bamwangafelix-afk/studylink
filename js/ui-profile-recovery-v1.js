/* StudyLink profile recovery: restores the full Me panel when the compact shell leaves meContent empty. */
(function(){
  'use strict';
  function el(id){return document.getElementById(id)}
  function build(){
    const host=el('meContent');
    if(!host || el('pcardEl')) return;
    host.innerHTML=`
      <div id="pcardEl" style="display:none;" class="pcard">
        <div class="pcard-av"><div class="avatar" id="pcPic">👤</div><div class="odot" id="pcDot"></div></div>
        <div style="flex:1;overflow:hidden;"><b id="pcName" style="font-size:16px;display:block;"></b><p id="pcBio" style="font-size:11px;opacity:.8;font-style:italic;"></p><p id="pcInfo" style="font-size:12px;opacity:.85;"></p><div id="pcIntent"></div></div>
      </div>
      <div class="card">
        <p style="font-weight:bold;margin-bottom:8px;" data-i18n="me_account">Account</p>
        <button type="button" class="btn g" id="disconnectBtn" data-i18n="me_disconnect">Disconnect</button>
        <button class="btn" style="margin-top:6px;" onclick="showEF()" data-i18n="me_edit_profile">Edit Profile</button>
      </div>
      <div id="EF" class="card" style="display:none;text-align:center;">
        <p style="font-weight:bold;text-align:left;margin-bottom:10px;" data-i18n="me_edit_profile">Edit Profile</p>
        <div class="ppwrap"><div class="avatar" id="myPic">👤</div><div class="odot online" id="myDot"></div><button class="ephoto" onclick="document.getElementById('uPh').click()" title="Change photo">📷</button></div>
        <input type="file" id="uPh" style="display:none;" accept="image/*" onchange="loadPic(event)">
        <input id="uN" placeholder="Full Name" data-i18n-ph="me_full_name_ph">
        <textarea id="uBio" rows="2" placeholder="Bio / About you..." style="resize:none;" data-i18n-ph="me_bio_ph"></textarea>
        <select id="uC"><option value="" disabled selected data-i18n="me_select_country">Select Country</option></select>
        <input id="uU" placeholder="University / School" data-i18n-ph="me_university_ph">
        <input id="uCo" placeholder="Course / Major" data-i18n-ph="me_course_ph">
        <input id="uY" placeholder="Year of Study" data-i18n-ph="me_year_ph">
        <label style="font-size:12px;font-weight:bold;display:block;text-align:left;margin-top:5px;" data-i18n="me_languages_label">Languages</label>
        <input id="uL" placeholder="e.g. English, French..." data-i18n-ph="me_languages_ph">
        <label style="font-size:12px;font-weight:bold;display:block;text-align:left;margin-top:5px;" data-i18n="me_skills_label">Skills</label>
        <input id="uSk" placeholder="e.g. Python, Math..." data-i18n-ph="me_skills_ph">
        <label style="font-size:12px;font-weight:bold;display:block;text-align:left;margin-top:8px;" data-i18n="me_here_to_label">I am here to:</label>
        <div style="display:flex;gap:6px;margin:4px 0 8px;">
          <button type="button" id="eNeedBtn" onclick="setEIntent('need')" class="btn" style="flex:1;">🙋 <span data-i18n="me_get_help">Get Help</span></button>
          <button type="button" id="eHelpBtn" onclick="setEIntent('help')" class="btn" style="flex:1;">🧑‍🏫 <span data-i18n="me_give_help">Give Help</span></button>
          <button type="button" id="eBothBtn" onclick="setEIntent('both')" class="btn" style="flex:1;">🔄 <span data-i18n="me_both">Both</span></button>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;"><button class="btn" style="flex:1;" onclick="savePro()" data-i18n="me_save">Save</button><button class="btn" style="flex:1;background:var(--btnB);" onclick="hideEF()" data-i18n="me_cancel">Cancel</button></div>
        <button class="btn" style="margin-top:8px;background:var(--btnB);width:100%;" onclick="openPhoneSettings()" data-i18n="me_app_settings">App Settings</button>
      </div>`;
    try{if(typeof initI18n==='function')initI18n()}catch(_){ }
    try{if(typeof renderMe==='function')renderMe()}catch(_){ }
  }
  function start(){build();setTimeout(build,300);setTimeout(build,900)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();