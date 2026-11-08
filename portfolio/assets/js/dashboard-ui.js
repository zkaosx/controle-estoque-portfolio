// Progressive enhancements. Does not change stock or authentication logic.
'use strict';
const mobilePages=[['dashboard','⌂','Início'],['products','▦','Produtos'],['import','⇧','Vendas'],['moves','⇄','Movimentos'],['reports','▤','Relatórios']];
function toggleMobileMenu(force){
 const side=document.getElementById('appSidebar'), backdrop=document.getElementById('sidebarBackdrop');
 const open=typeof force==='boolean'?force:!side.classList.contains('mobile-open');
 side.classList.toggle('mobile-open',open);backdrop.classList.toggle('hidden',!open);
 document.getElementById('menuTrigger')?.setAttribute('aria-expanded',String(open));
}
window.toggleMobileMenu=toggleMobileMenu;
function refreshDashboardUI(){
 const app=document.getElementById('app');if(app?.classList.contains('hidden'))return;
 const welcome=document.getElementById('dashboardWelcome');if(welcome)welcome.hidden=page!=='dashboard';
 const dock=document.getElementById('mobileDock');
 if(dock){dock.classList.remove('hidden');dock.innerHTML=mobilePages.map(([key,icon,label])=>`<button type="button" aria-label="${label}" aria-current="${page===key?'page':'false'}" class="${page===key?'selected':''}" onclick="go('${key}')"><span aria-hidden="true">${icon}</span><small>${label}</small></button>`).join('');}
 const main=document.getElementById('content');
 main?.classList.remove('content-enter');void main?.offsetWidth;main?.classList.add('content-enter');
 main?.querySelectorAll('.panel').forEach((el,i)=>el.style.setProperty('--panel-delay',`${Math.min(i,6)*55}ms`));
 const emptyTables=main?.querySelectorAll('tbody');
 emptyTables?.forEach(tb=>{if(tb.children.length===0){const table=tb.closest('table'),columns=table?.querySelectorAll('thead th').length||1;tb.innerHTML=`<tr><td colspan="${columns}" class="empty-table">Nenhum registro por aqui ainda. Comece cadastrando produtos ou importando suas vendas.</td></tr>`;}});
}
window.refreshDashboardUI=refreshDashboardUI;
const observer=new MutationObserver(()=>{const app=document.getElementById('app');if(app&&!app.classList.contains('hidden'))refreshDashboardUI();});
const app=document.getElementById('app');if(app)observer.observe(app,{attributes:true,attributeFilter:['class']});
document.addEventListener('keydown',e=>{if(e.key==='Escape')toggleMobileMenu(false)});
