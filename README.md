# OpenSemester 🚀

> **Open-Source Engineering Roadmaps & Resource Hub for GitHub Pages**

Welcome to **OpenSemester**, a community-driven initiative providing structured, step-by-step master learning roadmaps and curated resource catalogs for high-grade engineering disciplines.

---

## 🌟 Featured Roadmap

### 🚁 [Drone Development Engineer Roadmap](drone-engineer.html)
A complete 6-phase master path covering:
1. **Fundamentals & Hardware Architecture** (Aerodynamics, VTOL mechanics, BLDC motors, LiPo power, IMU/GNSS sensors)
2. **Embedded Firmware & Flight Controllers** (STM32 C/C++, PX4 Autopilot, ArduPilot, MAVLink 2.0 protocol)
3. **Control Systems & Sensor Fusion Math** (Cascaded PID loops, Quaternions, 24-state EKF2 state estimation)
4. **Companion Computers & ROS 2 Autonomy** (NVIDIA Jetson, micro-ROS, XRCE-DDS Agent offboard control)
5. **Perception, Computer Vision & SLAM** (Visual-Inertial Odometry, ORB-SLAM3, OctoMap, EGO-Planner obstacle avoidance)
6. **Simulation, Flight Testing & Regulations** (PX4 SITL with Gazebo, ULog FFT spectral analysis, FAA Part 107 safety audit)

---

## 🛠 Features

- **Interactive Node Modal**: Click any roadmap node to reveal detailed learning units, curated code repositories, and milestone checklists.
- **Local Progress Persistence**: Check off completed learning milestones; your progress percentage automatically updates and saves to `localStorage`.
- **Searchable & Filterable Catalog**: Easily filter curated tools, documentation, whitepapers, and SDKs by domain (Software & Firmware, Autonomy & AI, Tools, Protocols, Theory).
- **GitHub Pages Ready**: Zero build steps required! Pure HTML5, CSS3 (vanilla dark glassmorphism design system), and ES6 Javascript.

---

## 📁 Repository Structure

```
OpenSemester/
├── index.html                 # Main OpenSemester Hub portal & roadmap directory
├── drone-engineer.html        # Dedicated Drone Development Engineer Roadmap & Resource Hub
├── css/
│   ├── main.css               # OpenSemester core design system (variables, cards, typography)
│   ├── roadmap.css            # Interactive roadmap node cards, modal drawer, progress bar
│   └── resources.css          # Resource catalog cards & filter tab styling
├── js/
│   ├── data.js                # Structured roadmap phases, topics, and curated resource links
│   ├── app.js                 # Global resource filter & search controller
│   └── roadmap.js             # Interactive roadmap rendering & localStorage progress engine
├── .github/
│   └── workflows/
│       └── pages-deploy.yml   # GitHub Actions workflow to publish site to GitHub Pages
└── README.md                  # Project overview & contribution guide
```

---

## 🚀 Local Development & Preview

To preview the website locally without any installation or build tools:

Using Python:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your web browser.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to your GitHub Organization (`OpenSemester`).
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Source**, select **GitHub Actions** (or `main` branch `/root`).
4. The included `.github/workflows/pages-deploy.yml` will automatically build and publish the site to `https://opensemester.github.io/`!

---

## 🤝 Contributing

We welcome community contributions for new roadmaps (e.g. *Robotics Systems Engineer*, *Autonomous Vehicle Engineer*, *Embedded Firmware Engineer*) and resource additions!

1. Fork the repository.
2. Add resources to `js/data.js` or submit a new roadmap proposal.
3. Open a Pull Request with a clear summary.

License: [MIT](LICENSE)
