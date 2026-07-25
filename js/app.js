// OpenSemester - App Global Controller with Real Live GitHub Stars Fetcher

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DRONE_ROADMAP_DATA === 'undefined') return;

  const resourcesGrid = document.getElementById('resources-grid');
  const categoryTabs = document.getElementById('category-tabs');
  const searchInput = document.getElementById('search-input');
  const navStarBtn = document.getElementById('nav-github-star');

  let activeCategory = 'All';
  let searchQuery = '';

  // GitHub API Star Cache in SessionStorage
  const CACHE_KEY = 'opensemester_gh_stars_cache_v1';
  let starCache = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}');

  // Helper to extract repo path from GitHub URL
  function getRepoPathFromUrl(url) {
    if (!url || !url.includes('github.com/')) return null;
    try {
      const parsed = new URL(url);
      const parts = parsed.pathname.split('/').filter(Boolean);
      if (parts.length >= 2) {
        return `${parts[0]}/${parts[1]}`;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  // Format star counts nicely (e.g., 28542 -> 28.5k)
  function formatStars(count) {
    if (count === null || count === undefined || isNaN(count)) return null;
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
  }

  // Fetch real star count from GitHub API
  async function fetchRealStars(repoPath) {
    if (!repoPath) return null;
    if (starCache[repoPath] !== undefined) {
      return starCache[repoPath];
    }
    try {
      const response = await fetch(`https://api.github.com/repos/${repoPath}`);
      if (response.ok) {
        const data = await response.json();
        const stars = data.stargazers_count;
        starCache[repoPath] = stars;
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(starCache));
        return stars;
      }
    } catch (err) {
      console.warn(`Could not fetch GitHub stars for ${repoPath}:`, err);
    }
    return null;
  }

  // Fetch and update Navbar Organization star count live
  async function updateNavbarOrgStars() {
    const orgRepo = 'OpenSemester/opensemester.github.io';
    const stars = await fetchRealStars(orgRepo);
    const countEl = document.getElementById('github-star-count');
    if (countEl) {
      if (stars !== null) {
        countEl.innerText = `★ Star ${formatStars(stars)}`;
      } else {
        countEl.innerText = `★ Star`;
      }
    }
  }

  // Render Resources Grid
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

    resourcesGrid.innerHTML = filtered.map(res => {
      const repoPath = getRepoPathFromUrl(res.url) || res.repoPath;
      const cachedStars = repoPath ? starCache[repoPath] : null;
      const starDisplay = cachedStars !== null && cachedStars !== undefined ? `★ ${formatStars(cachedStars)}` : (repoPath ? '★ ...' : '');

      return `
        <div class="dev-resource-card" data-repo="${repoPath || ''}">
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
            <span class="star-badge-text">${starDisplay}</span>
          </div>
        </div>
      `;
    }).join('');

    // Asynchronously fetch real stars for displayed items
    filtered.forEach(async (res) => {
      const repoPath = getRepoPathFromUrl(res.url) || res.repoPath;
      if (repoPath && starCache[repoPath] === undefined) {
        const realStars = await fetchRealStars(repoPath);
        if (realStars !== null) {
          const card = document.querySelector(`.dev-resource-card[data-repo="${repoPath}"] .star-badge-text`);
          if (card) {
            card.innerText = `★ ${formatStars(realStars)}`;
          }
        }
      }
    });
  }

  // Setup Event Listeners
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

  // Initial Execution
  updateNavbarOrgStars();
  renderResources();
});
