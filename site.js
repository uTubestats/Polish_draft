(function(){
window.addEventListener('error',function(e){var m=document.getElementById('main');if(m)m.insertAdjacentHTML('afterbegin','<p class="notice">Something went wrong loading this page: '+String(e.message).replace(/</g,'')+'</p>')});
const $=id=>document.getElementById(id);
try{const t=localStorage.getItem('pd-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}
$('bg').onclick=()=>{const o=$('nv').classList.toggle('open');$('bg').setAttribute('aria-expanded',o)};
$('th').onclick=()=>{const d=document.documentElement;const dark=d.dataset.theme?d.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;const n=dark?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('pd-theme',n)}catch(e){}};
})();
