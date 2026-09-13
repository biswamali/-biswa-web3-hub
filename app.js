(function(){
 const filters=document.getElementById('filters'), grid=document.getElementById('tweet-grid');
 const projects=['All',...new Set(BISWA_TWEETS.map(t=>t.project))];
 let active='All';
 filters.innerHTML=projects.map(p=>`<button class="filter ${p==='All'?'active':''}" data-project="${p}">${p}</button>`).join('');
 function render(){
  const list=active==='All'?BISWA_TWEETS:BISWA_TWEETS.filter(t=>t.project===active);
  grid.innerHTML=list.map((t,i)=>`<a class="tweet-card" href="${t.url}" target="_blank" rel="noreferrer">
    <div class="tweet-top"><span>${t.project}</span><b>↗</b></div>
    <div class="tweet-art"><div class="tweet-x">𝕏</div><small>${t.label}</small><strong>${t.angle}</strong><em>Open original post on X</em></div>
    <div class="tweet-bottom"><div><span>RESEARCH ANGLE</span><b>${t.note}</b></div><span class="open">VIEW POST ↗</span></div>
  </a>`).join('');
 }
 filters.addEventListener('click',e=>{const b=e.target.closest('.filter');if(!b)return;active=b.dataset.project;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();});
 render();
})();
