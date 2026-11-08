'use strict';
window.chartPeriod='30';
window.renderStockChart=function(){
 const el=document.getElementById('stockChart');if(!el||typeof db==='undefined')return;
 const n=Number(window.chartPeriod||30),location=document.getElementById('location')?.value;
 const days=Array.from({length:n},(_,i)=>{const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-(n-i-1));return d.toISOString().slice(0,10)});
 const rows=days.map(day=>{const list=db.moves.filter(m=>m.location===location&&m.date?.slice(0,10)===day);return {day,entries:list.filter(m=>['entry','transfer-in'].includes(m.type)).reduce((s,m)=>s+Math.max(0,m.delta),0),sales:list.filter(m=>m.type==='sale').reduce((s,m)=>s+Math.abs(m.delta),0)}});
 const max=Math.max(1,...rows.flatMap(r=>[r.entries,r.sales]));
 el.innerHTML=rows.map(r=>`<div class="chart-column" title="${r.day}: ${r.entries} entradas, ${r.sales} vendas"><div class="chart-bars"><i class="bar-in" style="height:${Math.max(r.entries?3:0,r.entries/max*100)}%"></i><i class="bar-out" style="height:${Math.max(r.sales?3:0,r.sales/max*100)}%"></i></div><small>${n===7?r.day.slice(8):r.day.slice(8)}</small></div>`).join('');
};
(function(){
 const status=document.createElement('div');status.id='syncState';status.className='sync-state';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.textContent='Conectando…';
 const actions=document.querySelector('.top-actions');if(actions)actions.prepend(status);
 const app=document.getElementById('app');if(app){
  const btn=document.createElement('button');btn.className='floating-add';btn.textContent='＋';btn.title='Cadastrar entrada';btn.setAttribute('aria-label','Cadastrar entrada de estoque');btn.onclick=()=>window.go('products');app.appendChild(btn);
 }
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)window.refreshFromCloud?.()});
})();
