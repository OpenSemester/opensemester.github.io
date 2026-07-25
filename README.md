# OpenSemester

> **Open-Source Community Engineering Roadmaps & Resource Hub**

Welcome to **OpenSemester** (`opensemester.github.io`), a community-driven initiative providing structured, step-by-step master learning paths and curated resource catalogs for high-grade engineering disciplines.

Website: [https://opensemester.github.io/](https://opensemester.github.io/)  
GitHub Organization: [https://github.com/OpenSemester](https://github.com/OpenSemester)

---

## Roadmap Directory

OpenSemester organizes learning paths into clean, modular sub-directories for easy maintenance and contribution:

| Roadmap | Status | Description | Directory Link |
| :--- | :--- | :--- | :--- |
| **Drone Development Engineer** | **Active (v1.0)** | Aerodynamics, STM32 C/C++, PX4/ArduPilot, EKF2, ROS 2, and 3D SLAM | [`roadmaps/drone-development-engineer/`](roadmaps/drone-development-engineer/README.md) |
| **Robotics Systems Engineer** | *In Development* | Kinematics, MoveIt 2 manipulation, URDF modeling, Gazebo physics | `roadmaps/robotics-systems-engineer/` |
| **Embedded Firmware Engineer** | *In Development* | Bare-metal C/C++, ARM Cortex-M, FreeRTOS, DMA drivers, logic analyzers | `roadmaps/embedded-firmware-engineer/` |
| **Autonomous Vehicle Engineer** | *In Development* | LiDAR sensor fusion, HD mapping, Apollo / Autoware, CAN bus protocols | `roadmaps/autonomous-vehicle-engineer/` |

---

## Repository Structure

```
OpenSemester/
├── index.html                 # Main OpenSemester Hub portal & roadmap directory
├── drone-engineer.html        # Interactive Drone Development Engineer Roadmap web app
├── css/
│   ├── main.css               # OpenSemester developer design system (GitHub Dark palette)
│   ├── roadmap.css            # Interactive roadmap flowchart & slide-over drawer panel
│   └── resources.css          # GitHub repository-style resource cards & search filter
├── js/
│   ├── data.js                # Structured roadmap phases, topics, and resource links
│   ├── app.js                 # Global resource search & category filter engine
│   └── roadmap.js             # Interactive roadmap drawer engine & localStorage progress
├── roadmaps/
│   └── drone-development-engineer/
│       └── README.md          # Comprehensive Drone Development Engineer Markdown Specification
├── .github/
│   └── workflows/
│       └── pages-deploy.yml   # GitHub Actions workflow auto-deploying to GitHub Pages
└── README.md                  # Main Organization & Platform Documentation
```

---

## Features

- **Developer-First Aesthetics**: Styled after GitHub Docs, `roadmap.sh`, and CNCF using clean dark palettes (`#0d1117`, `#161b22`, `#30363d`) and monospace typography.
- **Slide-over Drawer Panel**: Click any node on the web app to open a side drawer detailing core knowledge units, curated repos, and milestone checklists.
- **Personal Progress Persistence**: Milestones check off locally in `localStorage` without needing backend authentication.
- **GitHub Pages Ready**: Pure static web application (HTML5, CSS3, ES6 JS) deployed automatically via GitHub Actions.

---

## Local Preview & Development

To preview the OpenSemester platform locally:

```bash
# Clone the repository
gh repo clone OpenSemester/opensemester.github.io

# Move into directory
cd opensemester.github.io

# Start a local static HTTP server
python -m http.server 8080
```
Open `http://localhost:8080` in your web browser.

---

## Contributing & Submitting Roadmaps

We welcome open-source contributions! To propose a new resource, fix a topic link, or submit a new engineering roadmap:

1. **Fork** the repository.
2. Create a new branch: `git checkout -b feat/add-new-roadmap`.
3. Add your roadmap documentation inside a new sub-folder under `roadmaps/<roadmap-name>/README.md`.
4. Update `js/data.js` to expose your roadmap on the web application.
5. Open a **Pull Request** on GitHub!

---

## License

OpenSemester is released under the **MIT License**. See [LICENSE](LICENSE) for details.
