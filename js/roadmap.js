// OpenSemester - Interactive Roadmap & Progress Engine

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DRONE_ROADMAP_DATA === 'undefined') return;

  const timelineContainer = document.getElementById('roadmap-timeline');
  const drawerBackdrop = document.getElementById('node-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressPercentText = document.getElementById('progress-percent');
  const completedCountText = document.getElementById('completed-count');
  const totalCountText = document.getElementById('total-count');

  const LOCAL_STORAGE_KEY = 'opensemester_drone_progress_v2';
  let progressState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  let totalChecklistItems = 0;
  DRONE_ROADMAP_DATA.phases.forEach(phase => {
    phase.nodes.forEach(node => {
      totalChecklistItems += node.checklist.length;
    });
  });

  if (totalCountText) totalCountText.innerText = totalChecklistItems;

  function renderRoadmap() {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = '';

    DRONE_ROADMAP_DATA.phases.forEach(phase => {
      const phaseEl = document.createElement('div');
      phaseEl.className = 'phase-block';

      let nodesHtml = '';
      phase.nodes.forEach(node => {
        const isNodeCompleted = isNodeFullyCompleted(node);
        nodesHtml += `
          <div class="roadmap-node ${isNodeCompleted ? 'completed' : ''}" data-node-id="${node.id}">
            <div class="node-header">
              <span class="node-title-text">${node.title}</span>
              <div class="node-status-icon">
                ${isNodeCompleted ? '✓' : ''}
              </div>
            </div>
            <p class="node-summary">${node.description}</p>
            <div class="node-meta-bar">
              <span class="tag-badge ${node.difficulty}">${node.difficulty}</span>
              <span style="color: var(--text-tertiary);">${node.time}</span>
            </div>
          </div>
        `;
      });

      phaseEl.innerHTML = `
        <div class="phase-label">
          <span class="phase-badge">PHASE ${phase.number}</span>
          <h3 class="phase-heading">${phase.title}</h3>
        </div>
        <div class="nodes-flex">
          ${nodesHtml}
        </div>
      `;

      timelineContainer.appendChild(phaseEl);
    });

    document.querySelectorAll('.roadmap-node').forEach(card => {
      card.addEventListener('click', () => {
        const nodeId = card.dataset.nodeId;
        openNodeDrawer(nodeId);
      });
    });

    updateProgressBar();
  }

  function isNodeFullyCompleted(node) {
    if (!node.checklist || node.checklist.length === 0) return false;
    return node.checklist.every((_, idx) => progressState[`${node.id}_check_${idx}`] === true);
  }

  function openNodeDrawer(nodeId) {
    let targetNode = null;
    let targetPhase = null;

    DRONE_ROADMAP_DATA.phases.forEach(phase => {
      const found = phase.nodes.find(n => n.id === nodeId);
      if (found) {
        targetNode = found;
        targetPhase = phase;
      }
    });

    if (!targetNode || !drawerBackdrop) return;

    const drawerBody = document.getElementById('drawer-body');
    
    let topicsHtml = targetNode.topics.map(t => `<li>${t}</li>`).join('');
    
    let resourcesHtml = targetNode.resources.map(r => `
      <div style="background: var(--bg-canvas); border: 1px solid var(--border-default); padding: 8px 12px; border-radius: 6px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
        <span style="color: var(--text-primary); font-weight: 500;">${r.title}</span>
        <a href="${r.url}" target="_blank" rel="noopener" style="color: var(--accent-blue); text-decoration: none; font-weight: 600; font-family: var(--font-mono); font-size: 12px;">Open ↗</a>
      </div>
    `).join('');

    let checklistHtml = targetNode.checklist.map((item, idx) => {
      const itemKey = `${targetNode.id}_check_${idx}`;
      const isChecked = progressState[itemKey] === true;
      return `
        <div class="checklist-item">
          <input type="checkbox" id="${itemKey}" ${isChecked ? 'checked' : ''} data-key="${itemKey}">
          <label for="${itemKey}">${item}</label>
        </div>
      `;
    }).join('');

    drawerBody.innerHTML = `
      <div class="drawer-header">
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-blue); text-transform: uppercase;">Phase ${targetPhase.number} • ${targetNode.difficulty}</span>
        <h2 class="drawer-title">${targetNode.title}</h2>
        <p style="color: var(--text-secondary); font-size: 13px;">${targetNode.description}</p>
      </div>

      <div class="drawer-section-title">Core Knowledge Units</div>
      <ul class="drawer-list">${topicsHtml}</ul>

      <div class="drawer-section-title">Curated Repos & Specs</div>
      <div>${resourcesHtml}</div>

      <div class="drawer-section-title">Milestone Checklist</div>
      <div class="checklist-group" id="drawer-checklist-box">${checklistHtml}</div>
    `;

    drawerBackdrop.classList.add('active');

    document.querySelectorAll('#drawer-checklist-box input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const key = e.target.dataset.key;
        progressState[key] = e.target.checked;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressState));
        updateProgressBar();
        renderRoadmap();
      });
    });
  }

  function updateProgressBar() {
    let completedCount = 0;
    Object.keys(progressState).forEach(k => {
      if (progressState[k] === true) completedCount++;
    });

    const percent = Math.round((completedCount / totalChecklistItems) * 100) || 0;
    
    if (progressBarFill) progressBarFill.style.width = `${percent}%`;
    if (progressPercentText) progressPercentText.innerText = `${percent}%`;
    if (completedCountText) completedCountText.innerText = completedCount;
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => {
      drawerBackdrop.classList.remove('active');
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        drawerBackdrop.classList.remove('active');
      }
    });
  }

  renderRoadmap();
});
