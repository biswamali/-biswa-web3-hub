(function(){
 const filters=document.getElementById('filters'), grid=document.getElementById('tweet-grid');
 const categories=['All','Airdrops','Education','Trading'];
 const logos={Base:'logo-base.png',Zama:'logo-zama.png',Gensyn:'logo-gensyn.png',Polymarket:'logo-polymarket.png',Walrus:'logo-walrus.png',Arc:'logo-arc.png'};
 let active='All';
 filters.innerHTML=categories.map(c=>`<button class="filter ${c==='All'?'active':''}" data-category="${c}">${c}</button>`).join('');
 function render(){
  if(active==='Trading'){
    grid.innerHTML=`<div class="content-empty"><div class="empty-icon">↗</div><span>TRADING LOG · COMING SOON</span><h3>Market observations, setups & lessons.</h3><p>This section is intentionally empty for now. Trading posts will appear here as you publish them.</p></div>`;
    return;
  }
  const list=active==='All'?BISWA_TWEETS:BISWA_TWEETS.filter(t=>t.category===active);
  grid.innerHTML=list.map(t=>`<article class="tweet-card real-tweet-card">
    <div class="tweet-top"><span style="display:flex;align-items:center;gap:8px"><img src="${logos[t.project]||''}" alt="${t.project} logo" style="width:22px;height:22px;border-radius:7px;object-fit:cover;background:#fff;${logos[t.project]?'':'display:none'}">${t.project}</span><a href="${t.url}" target="_blank" rel="noreferrer">OPEN ON X ↗</a></div>
    <div class="tweet-embed-wrap">
      <blockquote class="twitter-tweet" data-theme="dark" data-dnt="true"><a href="${t.url}"></a></blockquote>
    </div>
    <div class="tweet-bottom"><div><span>${t.category.toUpperCase()} · RESEARCH ANGLE</span><b>${t.note}</b></div><a class="open" href="${t.url}" target="_blank" rel="noreferrer">VIEW POST ↗</a></div>
  </article>`).join('');
  if(window.twttr && window.twttr.widgets) window.twttr.widgets.load(grid);
 }
 filters.addEventListener('click',e=>{const b=e.target.closest('.filter');if(!b)return;active=b.dataset.category;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();});
 render();
})();

// V6 global navigation menu — works on desktop and mobile
(function(){
  const toggle=document.getElementById('menu-toggle');
  const close=document.getElementById('menu-close');
  const panel=document.getElementById('menu-panel');
  const overlay=document.getElementById('menu-overlay');
  if(!toggle || !close || !panel || !overlay) return;
  const links=panel.querySelectorAll('a[href^="#"]');
  function setOpen(open){
    document.body.classList.toggle('menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    panel.setAttribute('aria-hidden',String(!open));
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  }
  toggle.addEventListener('click',()=>setOpen(!document.body.classList.contains('menu-open')));
  close.addEventListener('click',()=>setOpen(false));
  overlay.addEventListener('click',()=>setOpen(false));
  links.forEach(link=>link.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') setOpen(false);});
})();
