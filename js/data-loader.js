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
        // Keep global window.DRONE_ROADMAP_DATA populated for backward compatibility
        window.DRONE_ROADMAP_DATA = droneRoadmapRes.value;
        if (resourcesRes.status === 'fulfilled') {
          window.DRONE_ROADMAP_DATA.resourcesCatalog = resourcesRes.value;
        }
      }
    } catch (err) {
      console.warn('Data loader fallback active:', err);
    }
  }
};

// Initialize immediately
OpenSemesterData.init();
