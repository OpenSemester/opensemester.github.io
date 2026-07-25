// OpenSemester - Dynamic Data Loader Module

const OpenSemesterData = {
  roadmapsIndex: [],
  resourcesCatalog: [],
  activeRoadmap: null,

  async init() {
    try {
      const [indexRes, resourcesRes, droneRoadmapRes] = await Promise.allSettled([
        fetch('data/roadmaps/index.json').then(r => r.json()),
        fetch('data/resources.json').then(r => r.json()),
        fetch('data/roadmaps/drone-development-engineer.json').then(r => r.json())
      ]);

      if (indexRes.status === 'fulfilled') {
        this.roadmapsIndex = indexRes.value;
      }

      if (resourcesRes.status === 'fulfilled') {
        this.resourcesCatalog = resourcesRes.value;
      }

      if (droneRoadmapRes.status === 'fulfilled') {
        this.activeRoadmap = droneRoadmapRes.value;
        window.DRONE_ROADMAP_DATA = droneRoadmapRes.value;
        if (resourcesRes.status === 'fulfilled') {
          window.DRONE_ROADMAP_DATA.resourcesCatalog = resourcesRes.value;
        }
      }
    } catch (err) {
      console.warn('Data loader fallback active:', err);
    } finally {
      document.dispatchEvent(new CustomEvent('opensemester-data-ready', { detail: this }));
    }
  },

  async loadRoadmapById(id, retries = 2) {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const res = await fetch(`data/roadmaps/${id}.json`);
        if (!res.ok) throw new Error(`Failed to load roadmap: ${id}`);
        const data = await res.json();
        window.DRONE_ROADMAP_DATA = data;
        return data;
      } catch (err) {
        if (attempt < retries) {
          await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
          continue;
        }
        console.error('Could not load roadmap:', err);
        return null;
      }
    }
  }
};

OpenSemesterData.init();
