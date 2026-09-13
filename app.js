const grid = document.getElementById('tweet-grid');
const filters = document.getElementById('tweet-filters');
const projects = ['All', ...new Set(tweets.map(t => t.project))];

function renderFilters(active='All') {
  if (!filters) return;
  filters.innerHTML = projects.map(p => `<button class="tweet-filter ${p===active?'active':''}" data-project="${p}">${p}</button>`).join('');
  filters.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    renderFilters(btn.dataset.project);
    renderTweets(btn.dataset.project);
  }));
}

function renderTweets(active='All') {
  const list = active === 'All' ? tweets : tweets.filter(t => t.project === active);
  grid.innerHTML = list.map((t, i) => `
    <article class="tweet-card" data-project="${t.project}">
      <a class="tweet-open" href="${t.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${t.title} on X">
        <div class="tweet-preview">
          <div class="x-mark">𝕏</div>
          <div class="tweet-preview-label">OPEN ORIGINAL POST</div>
          <div class="tweet-project">${t.project}</div>
          <div class="tweet-id">${t.url.split('/').pop()}</div>
        </div>
      </a>
      <div class="tweet-body">
        <div class="tweet-kicker">${String(i+1).padStart(2,'0')} · ${t.project}</div>
        <h3>${t.title}</h3>
        <p>${t.summary}</p>
        <div class="analysis"><b>Analysis angle</b><span>${t.angle}</span></div>
        <div class="metrics">${t.metrics.map(m=>`<span>${m}</span>`).join('')}</div>
        <a class="tweet-link" href="${t.url}" target="_blank" rel="noopener noreferrer">View post on X ↗</a>
      </div>
    </article>`).join('');
}

renderFilters();
renderTweets();
