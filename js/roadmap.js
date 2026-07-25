// OpenSemester - Generic Roadmap Renderer Engine
// Handles static data.js pages and dynamic JSON fetch pages (roadmap.html?id=...)

class RoadmapRenderer {
  constructor({ data, containerId, drawerId, drawerCloseId, drawerBodyId, progressBarFillId, progressPercentId, completedCountId, totalCountId, storageKey }) {
    this.data = data;
    this.container = document.getElementById(containerId);
    this.drawerBackdrop = document.getElementById(drawerId);
    this.drawerCloseBtn = document.getElementById(drawerCloseId);
    this.drawerBody = document.getElementById(drawerBodyId);
    this.progressBarFill = document.getElementById(progressBarFillId);
    this.progressPercentText = document.getElementById(progressPercentId);
    this.completedCountText = document.getElementById(completedCountId);
    this.totalCountText = document.getElementById(totalCountId);
    const keyId = data.id || data.title || 'roadmap';
    this.storageKey = storageKey || ('opensemester_progress_' + keyId.replace(/[^a-zA-Z0-9_-]/g, '_') + '_v1');
    this.progressState = JSON.parse(localStorage.getItem(this.storageKey)) || {};
    this.totalChecklistItems = 0;
  }

  init() {
    this._countChecklist();
    this.renderRoadmap();
    this._bindDrawerClose();
  }

  _countChecklist() {
    this.totalChecklistItems = 0;
    this.data.phases.forEach(phase => {
      phase.nodes.forEach(node => {
        this.totalChecklistItems += (node.checklist || []).length;
      });
    });
    if (this.totalCountText) this.totalCountText.innerText = this.totalChecklistItems;
  }

  _isNodeFullyCompleted(node) {
    if (!node.checklist || node.checklist.length === 0) return false;
    return node.checklist.every((_, idx) => this.progressState[`${node.id}_check_${idx}`] === true);
  }

  renderRoadmap() {
    if (!this.container) return;
    this.container.innerHTML = '';

    this.data.phases.forEach(phase => {
      const phaseEl = document.createElement('div');
      phaseEl.className = 'phase-block';

      let nodesHtml = '';
      phase.nodes.forEach(node => {
        const isCompleted = this._isNodeFullyCompleted(node);
        nodesHtml += `
          <div class="roadmap-node ${isCompleted ? 'completed' : ''}" data-node-id="${node.id}">
            <div class="node-header">
              <span class="node-title-text">${node.title}</span>
              <div class="node-status-icon">${isCompleted ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : ''}</div>
            </div>
            <p class="node-summary">${node.description}</p>
            <div class="node-meta-bar">
              <span class="tag-badge ${(node.difficulty || '').toLowerCase().replace(/\s+/g, '-')}">${node.difficulty || ''}</span>
              <span style="color: var(--text-tertiary); font-family: var(--font-mono); font-size: 11px;">${node.time || ''}</span>
            </div>
          </div>
        `;
      });

      const phaseColor = phase.color || 'var(--accent-blue)';
      phaseEl.innerHTML = `
        <div class="phase-label">
          <span class="phase-badge" style="border-color: ${phaseColor}; color: ${phaseColor};">PHASE ${phase.number}</span>
          <h3 class="phase-heading">${phase.title}</h3>
          <p class="phase-desc">${phase.description || ''}</p>
        </div>
        <div class="nodes-flex">
          ${nodesHtml}
        </div>
      `;
      this.container.appendChild(phaseEl);
    });

    this.container.querySelectorAll('.roadmap-node').forEach(card => {
      card.addEventListener('click', () => this._openDrawer(card.dataset.nodeId));
    });

    this._updateProgressBar();
  }

  _openDrawer(nodeId) {
    let targetNode = null;
    let targetPhase = null;

    this.data.phases.forEach(phase => {
      const found = phase.nodes.find(n => n.id === nodeId);
      if (found) { targetNode = found; targetPhase = phase; }
    });

    if (!targetNode || !this.drawerBackdrop) return;

    const topicsHtml = (targetNode.topics || []).map(t => `<li>${t}</li>`).join('');

    const typeBadgeColor = (type) => {
      const map = { 'Docs': '#58a6ff', 'GitHub': '#8b949e', 'YouTube': '#ff7b72', 'Course': '#3fb950', 'Blog': '#bc8cff', 'Tool': '#d29922', 'Paper': '#ffa657' };
      return map[type] || '#58a6ff';
    };

    const resourcesHtml = (targetNode.resources || []).map(r => `
      <div style="background: var(--bg-canvas); border: 1px solid var(--border-default); padding: 10px 14px; border-radius: 6px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0;">
          <span style="background: ${typeBadgeColor(r.type)}22; color: ${typeBadgeColor(r.type)}; border: 1px solid ${typeBadgeColor(r.type)}44; border-radius: 4px; padding: 1px 7px; font-size: 10px; font-family: var(--font-mono); font-weight: 600; white-space: nowrap;">${r.type || ''}</span>
          <span style="color: var(--text-primary); font-size: 13px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${r.title}</span>
        </div>
        <a href="${r.url}" target="_blank" rel="noopener" style="color: var(--accent-blue); text-decoration: none; font-weight: 600; font-family: var(--font-mono); font-size: 12px; flex-shrink: 0;">Open ↗</a>
      </div>
    `).join('');

    const checklistHtml = (targetNode.checklist || []).map((item, idx) => {
      const itemKey = `${targetNode.id}_check_${idx}`;
      const isChecked = this.progressState[itemKey] === true;
      return `
        <div class="checklist-item">
          <input type="checkbox" id="${itemKey}" ${isChecked ? 'checked' : ''} data-key="${itemKey}">
          <label for="${itemKey}">${item}</label>
        </div>
      `;
    }).join('');

    this.drawerBody.innerHTML = `
      <div class="drawer-header">
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.05em;">Phase ${targetPhase.number} • ${targetNode.difficulty || 'Module'}</span>
        <h2 class="drawer-title">${targetNode.title}</h2>
        <p style="color: var(--text-secondary); font-size: 13px; line-height: 1.55; margin-top: 6px;">${targetNode.description}</p>
      </div>

      <div class="drawer-section-title">Core Knowledge Units</div>
      <ul class="drawer-list">${topicsHtml}</ul>

      <div class="drawer-section-title">Curated Resources</div>
      <div>${resourcesHtml}</div>

      ${checklistHtml ? `
        <div class="drawer-section-title">Milestone Checklist</div>
        <div class="checklist-group" id="drawer-checklist-box">${checklistHtml}</div>
      ` : ''}
    `;

    this.drawerBackdrop.classList.add('active');

    this.drawerBody.querySelectorAll('#drawer-checklist-box input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const key = e.target.dataset.key;
        const nodeId = key.substring(0, key.lastIndexOf('_check_'));
        this.progressState[key] = e.target.checked;
        localStorage.setItem(this.storageKey, JSON.stringify(this.progressState));
        this._updateProgressBar();
        this._updateNodeCompletionState(nodeId);
      });
    });
  }

  _updateNodeCompletionState(nodeId) {
    let targetNode = null;
    for (const phase of this.data.phases) {
      const found = phase.nodes.find(n => n.id === nodeId);
      if (found) { targetNode = found; break; }
    }
    if (!targetNode) return;

    const isCompleted = this._isNodeFullyCompleted(targetNode);
    const card = this.container?.querySelector(`.roadmap-node[data-node-id="${nodeId}"]`);
    if (!card) return;

    card.classList.toggle('completed', isCompleted);
    const icon = card.querySelector('.node-status-icon');
    if (icon) {
      icon.innerHTML = isCompleted
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'
        : '';
    }
  }

  _updateProgressBar() {
    let completedCount = Object.values(this.progressState).filter(v => v === true).length;
    const percent = this.totalChecklistItems > 0 ? Math.round((completedCount / this.totalChecklistItems) * 100) : 0;
    if (this.progressBarFill) this.progressBarFill.style.width = `${percent}%`;
    if (this.progressPercentText) this.progressPercentText.innerText = `${percent}%`;
    if (this.completedCountText) this.completedCountText.innerText = completedCount;
  }

  _bindDrawerClose() {
    if (this.drawerCloseBtn) {
      this.drawerCloseBtn.addEventListener('click', () => this.drawerBackdrop.classList.remove('active'));
    }
    if (this.drawerBackdrop) {
      this.drawerBackdrop.addEventListener('click', (e) => {
        if (e.target === this.drawerBackdrop) this.drawerBackdrop.classList.remove('active');
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawerBackdrop) this.drawerBackdrop.classList.remove('active');
    });
  }
}

// ── Drone Development Engineer page (static data.js) ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof DRONE_ROADMAP_DATA === 'undefined') return;
  if (!document.getElementById('roadmap-timeline')) return;
  // Runs on roadmaps/drone-development-engineer/index.html (has static DRONE_ROADMAP_DATA)
  const renderer = new RoadmapRenderer({
    data: DRONE_ROADMAP_DATA,
    containerId: 'roadmap-timeline',
    drawerId: 'node-drawer',
    drawerCloseId: 'drawer-close',
    drawerBodyId: 'drawer-body',
    progressBarFillId: 'progress-bar-fill',
    progressPercentId: 'progress-percent',
    completedCountId: 'completed-count',
    totalCountId: 'total-count',
    storageKey: 'opensemester_drone_progress_v2'
  });
  renderer.init();
});
