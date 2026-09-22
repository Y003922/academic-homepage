const languageButton=document.getElementById('language');
languageButton.addEventListener('click',()=>{
 const english=document.documentElement.dataset.language!=='en';
 document.documentElement.dataset.language=english?'en':'zh';
 document.documentElement.lang=english?'en':'zh-CN';
 document.title=english?'Jingjing Yang | Literature & Digital Humanities':'杨晶晶 | 文学与数字人文研究';
 languageButton.innerHTML=english?'中文 <span aria-hidden="true">↗</span>':'EN <span aria-hidden="true">↗</span>';
 languageButton.setAttribute('aria-label',english?'切换为中文':'Switch to English');
});
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{document.getElementById(button.dataset.open).showModal();document.body.style.overflow='hidden';}));
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{document.body.style.overflow='';});
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});
