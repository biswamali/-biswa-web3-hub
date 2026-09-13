(function(){
 const filters=document.getElementById('filters'), grid=document.getElementById('tweet-grid');
 const projects=['All',...new Set(BISWA_TWEETS.map(t=>t.project))];
 const logos={Base:'logo-base.png',Zama:'logo-zama.png',Gensyn:'logo-gensyn.png',Polymarket:'logo-polymarket.png',Walrus:'logo-walrus.png',Arc:'logo-arc.png'};
 let active='All';
 filters.innerHTML=projects.map(p=>`<button class="filter ${p==='All'?'active':''}" data-project="${p}">${p}</button>`).join('');
 function render(){
  const list=active==='All'?BISWA_TWEETS:BISWA_TWEETS.filter(t=>t.project===active);
  grid.innerHTML=list.map(t=>`<article class="tweet-card real-tweet-card">
    <div class="tweet-top"><span style="display:flex;align-items:center;gap:8px"><img src="${logos[t.project]||'logo-base.png'}" alt="${t.project} logo" style="width:22px;height:22px;border-radius:7px;object-fit:cover;background:#fff">${t.project}</span><a href="${t.url}" target="_blank" rel="noreferrer">OPEN ON X ↗</a></div>
    <div class="tweet-embed-wrap">
      <blockquote class="twitter-tweet" data-theme="dark" data-dnt="true"><a href="${t.url}"></a></blockquote>
    </div>
    <div class="tweet-bottom"><div><span>RESEARCH ANGLE</span><b>${t.note}</b></div><a class="open" href="${t.url}" target="_blank" rel="noreferrer">VIEW POST ↗</a></div>
  </article>`).join('');
  if(window.twttr && window.twttr.widgets) window.twttr.widgets.load(grid);
 }
 filters.addEventListener('click',e=>{const b=e.target.closest('.filter');if(!b)return;active=b.dataset.project;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();});
 render();
})();
