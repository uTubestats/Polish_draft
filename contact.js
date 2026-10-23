(function(){
const $=id=>document.getElementById(id);
const CONTACT_EMAIL="lemonguyexe55@gmail.com"; // owner: put a real address here
const FORM_ENDPOINT=""; // optional: HTTPS form-service URL (only works if you host outside claude.ai)
if(CONTACT_EMAIL)$('cev').innerHTML='<a href="mailto:'+CONTACT_EMAIL+'">'+CONTACT_EMAIL+'</a>';else $('ce').hidden=true;
const canSend=!!(CONTACT_EMAIL||FORM_ENDPOINT);$('cn').hidden=canSend;if(!canSend)$('fgo').disabled=true;
const fe=(i,t)=>{$(i+'e').textContent=t;$(i).setAttribute('aria-invalid',t?'true':'false')};let lastSend=0;
$('cf').onsubmit=async e=>{e.preventDefault();if($('hp').value)return;const st=$('fst');st.className='';st.textContent='';
const n=$('fn').value.trim(),m=$('fm').value.trim(),s=$('fs').value,b=$('fb').value.trim();let bad=null;
const chk=(id,t)=>{fe(id,t);if(t&&!bad)bad=id};
chk('fn',n?'':'Please enter your name.');chk('fm',!m?'Please enter your email address.':/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)?'':'Please enter a valid email address, like name@example.com.');chk('fs',s?'':'Please choose a subject.');chk('fb',!b?'Please write a message.':b.length<10?'Your message is too short (at least 10 characters).':'');
if(bad){$(bad).focus();st.className='er';st.textContent='Please fix the highlighted fields.';return}
if(!canSend){st.className='er';st.textContent='The contact form is not configured yet.';return}
if(Date.now()-lastSend<30000){st.className='er';st.textContent='Please wait a few seconds before sending another message.';return}
const mailto=()=>'mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent('[PolishDraft] '+s)+'&body='+encodeURIComponent(b+'\n\n— '+n+' ('+m+')');
$('fgo').disabled=true;$('fgo').textContent='Sending…';
try{if(FORM_ENDPOINT){const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:n,email:m,subject:s,message:b})});if(!r.ok)throw 0;lastSend=Date.now();$('cf').reset();st.className='ok';st.textContent='Thank you. Your message was sent.'}
else{lastSend=Date.now();location.href=mailto();st.className='';st.textContent='Your email app should now be open with the message ready. It has not been sent until you press send there.'}}
catch(x){st.className='er';st.innerHTML='Your message could not be sent. Please check your connection and try again.'+(CONTACT_EMAIL?' Or email us directly at <a href="'+mailto()+'">'+CONTACT_EMAIL+'</a>.':'')}
finally{$('fgo').textContent='Send message';$('fgo').disabled=!canSend}};


})();
