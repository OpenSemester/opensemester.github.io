// OpenSemester - App Global Controller

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DRONE_ROADMAP_DATA === 'undefined') return;

  const resourcesGrid = document.getElementById('resources-grid');
  const categoryTabs = document.getElementById('category-tabs');
  const searchInput = document.getElementById('search-input');

  let activeCategory = 'All';
  let searchQuery = '';

  function renderResources() {
    if (!resourcesGrid) return;

    const filtered = DRONE_ROADMAP_DATA.resourcesCatalog.filter(res => {
      const matchCategory = activeCategory === 'All' || res.category === activeCategory;
      const matchSearch = searchQuery === '' || 
        res.title.toLowerCase().includes(searchQuery) ||
        res.description.toLowerCase().includes(searchQuery) ||
        res.tags.some(t => t.toLowerCase().includes(searchQuery));
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      resourcesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary); font-size: 13px;">
          No resources found matching "${searchQuery}".
        </div>
      `;
      return;
    }

    resourcesGrid.innerHTML = filtered.map(res => `
      <div class="dev-resource-card">
        <div>
          <div class="dev-res-header">
            <span class="dev-res-title">
              <a href="${res.url}" target="_blank" rel="noopener">${res.title}</a>
            </span>
            <span class="dev-res-badge">${res.type}</span>
          </div>
          <p class="dev-res-desc">${res.description}</p>
          <div class="dev-res-topics">
            ${res.tags.map(t => `<span class="topic-chip">${t}</span>`).join('')}
          </div>
        </div>
        <div class="dev-res-footer">
          <span><span class="lang-dot" style="background-color: ${res.langColor || '#58a6ff'};"></span>${res.type}</span>
          <span>★ ${res.stars || '1.0k'}</span>
        </div>
      </div>
    `).join('');
  }

  if (categoryTabs) {
    categoryTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        activeCategory = e.target.dataset.category;
        renderResources();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderResources();
    });
  }

  renderResources();
});
