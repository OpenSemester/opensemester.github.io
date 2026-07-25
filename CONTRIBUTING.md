# Contributing to OpenSemester 🚀

Thank you for your interest in contributing to **OpenSemester**! We welcome contributions from undergraduate students, educators, and software engineers worldwide.

---

## Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
   - [Submitting a New Resource](#submitting-a-new-resource)
   - [Proposing or Creating a New Roadmap](#proposing-or-creating-a-new-roadmap)
   - [Improving Website UI / Accessibility](#improving-website-ui--accessibility)
3. [Repository Data Architecture](#repository-data-architecture)
4. [Local Development Setup](#local-development-setup)
5. [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project and everyone participating in it is governed by the [OpenSemester Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## How Can I Contribute?

### Submitting a New Resource
Have a great open-source repository, textbook, documentation, or tool to share?

1. Open `data/resources.json` (or `js/data.js`).
2. Add your resource entry matching the schema:
```json
{
  "id": "res-unique-id",
  "title": "owner/repo-name",
  "category": "Software & Firmware",
  "difficulty": "Intermediate",
  "type": "C++",
  "langColor": "#f34b7d",
  "url": "https://github.com/owner/repo-name",
  "description": "Brief 1-2 sentence description of the resource.",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```
*Note: GitHub star counts are automatically fetched dynamically from the GitHub REST API via `url`! Do not hardcode star counts.*

### Proposing or Creating a New Roadmap
We are building roadmaps for all undergraduate engineering fields! To add a new roadmap (e.g. *Robotics Systems Engineer*, *Embedded Systems*, *AI & Autonomous Systems*):

1. Create a new folder under `data/roadmaps/<roadmap-id>.json`.
2. Follow the JSON schema format:
```json
{
  "id": "robotics-engineer",
  "title": "Robotics Systems Engineer Roadmap",
  "subtitle": "Kinematics, MoveIt 2 manipulation, URDF modeling, and ROS 2.",
  "phases": [
    {
      "id": "phase-1",
      "number": 1,
      "title": "Phase Title",
      "nodes": [
        {
          "id": "p1-node-1",
          "title": "Module Title",
          "difficulty": "Required",
          "time": "2 Weeks",
          "description": "Module summary...",
          "topics": ["Topic 1", "Topic 2"],
          "resources": [
            { "title": "Doc Name", "url": "https://...", "type": "Docs" }
          ],
          "checklist": [
            "Milestone 1 to check off"
          ]
        }
      ]
    }
  ]
}
```
3. Create a matching Markdown specification in `roadmaps/<roadmap-id>/README.md`.

---

## Repository Data Architecture

To keep PRs clean and prevent merge conflicts, data is structured into modular JSON datasets:

```
OpenSemester/
├── data/
│   ├── resources.json                         # Global resource catalog dataset
│   └── roadmaps/
│       ├── drone-development-engineer.json   # Modular roadmap datasets
│       └── index.json                         # List of all available roadmaps
├── roadmaps/
│   └── drone-development-engineer/
│       └── README.md                          # Dedicated markdown specification
├── js/
│   ├── data-loader.js                         # Dynamic async data fetching engine
│   ├── roadmap.js                             # Interactive drawer & progress tracking engine
│   └── app.js                                 # Global search & filter engine
```

---

## Local Development Setup

1. **Fork and Clone the Repository**:
```bash
gh repo clone <your-username>/opensemester.github.io
cd opensemester.github.io
```

2. **Run Local Server**:
No build tools or node dependencies required! Simply launch a static server:
```bash
# Using Python
python -m http.server 8080

# Or using Node http-server
npx http-server -p 8080
```
3. Open `http://localhost:8080` in your browser.

---

## Pull Request Process

1. Create a descriptive topic branch: `git checkout -b feat/add-robotics-roadmap`.
2. Ensure your JSON files are valid (`npx jsonlint data/resources.json` or `python -m json.tool data/resources.json`).
3. Push to your fork and submit a PR against `OpenSemester:main`.
4. Fill out the PR template with screenshots and testing notes.

Thank you for helping empower undergraduate students worldwide!
