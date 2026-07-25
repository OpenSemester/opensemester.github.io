// OpenSemester - Drone Development Engineer Roadmap & Resource Catalog Data

const DRONE_ROADMAP_DATA = {
  title: "Drone Development Engineer",
  subtitle: "Comprehensive open-source master path from flight physics, hardware assembly & firmware to ROS 2 autonomy, AI vision & SLAM.",
  repoUrl: "https://github.com/OpenSemester/opensemester.github.io",
  lastUpdated: "2026-07-25",
  estimatedTime: "6 - 9 Months",
  
  phases: [

    // ── PREREQUISITE PHASES (Learning Path) ──────────────────────────────────

    {
      id: "phase-pre-1",
      number: 1,
      title: "Python Programming",
      description: "Core Python 3 foundation — syntax, OOP, file I/O, decorators, async programming, and FastAPI REST APIs. Required entry point for all modules.",
      color: "#3fb950",
      nodes: [
        {
          id: "pre1-node-1",
          title: "Python 3 Core & OOP",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Variables, control flow, functions, list comprehensions, decorators, classes, inheritance, and dunder methods.",
          topics: [
            "Python 3 syntax: Variables, operators, string formatting (f-strings), type hints",
            "Control flow: if/elif/else, for/while loops, break/continue/pass",
            "Functions: *args/**kwargs, closures, decorators, lambda expressions",
            "OOP: Classes, inheritance, polymorphism, dunder (__init__, __repr__, __str__)",
            "Error handling: try/except/finally, custom exceptions"
          ],
          resources: [
            { title: "Python Official Documentation", url: "https://docs.python.org/3/", type: "Docs" },
            { title: "Real Python — OOP in Python", url: "https://realpython.com/python3-object-oriented-programming/", type: "Blog" }
          ],
          checklist: [
            "Build a command-line task manager using classes and file I/O.",
            "Implement a decorator that logs function execution time.",
            "Write unit tests with pytest covering edge cases."
          ]
        },
        {
          id: "pre1-node-2",
          title: "Async Python, File I/O & APIs",
          difficulty: "Required",
          time: "2 Weeks",
          description: "asyncio coroutines, context managers, reading/writing files, CSV/JSON parsing, and building FastAPI REST endpoints.",
          topics: [
            "asyncio: async/await, event loops, Tasks, gather(), run()",
            "Context managers: with statement, __enter__/__exit__, contextlib",
            "File I/O: open(), pathlib, reading CSV/JSON with built-in and pandas",
            "FastAPI: Routing, Pydantic models, request validation, Swagger UI",
            "HTTP requests with httpx/aiohttp"
          ],
          resources: [
            { title: "FastAPI Official Documentation", url: "https://fastapi.tiangolo.com/", type: "Docs" },
            { title: "asyncio — Python Official Guide", url: "https://docs.python.org/3/library/asyncio.html", type: "Docs" }
          ],
          checklist: [
            "Build a FastAPI REST API with at least 3 endpoints and Pydantic validation.",
            "Write an async script that fetches data from 5 URLs concurrently.",
            "Parse a CSV telemetry file and output statistics using only stdlib."
          ]
        },
        {
          id: "pre1-node-3",
          title: "Python Tooling, Testing & Packaging",
          difficulty: "Recommended",
          time: "1 Week",
          description: "Virtual environments, pip, pytest, black/ruff formatting, and packaging Python projects.",
          topics: [
            "Virtual environments: venv, pip install -r requirements.txt",
            "Testing: pytest fixtures, parametrize, mocking with unittest.mock",
            "Code quality: black, ruff, mypy type checking",
            "Packaging: pyproject.toml, setuptools, building distributable wheels"
          ],
          resources: [
            { title: "pytest Official Docs", url: "https://docs.pytest.org/", type: "Docs" },
            { title: "Ruff — An Extremely Fast Python Linter", url: "https://github.com/astral-sh/ruff", type: "GitHub" }
          ],
          checklist: [
            "Set up a Python project with venv, ruff, and pytest.",
            "Achieve 90%+ test coverage on a data processing module.",
            "Package and install your project locally with pip install -e ."
          ]
        }
      ]
    },

    {
      id: "phase-pre-2",
      number: 2,
      title: "Data Analysis Using Python",
      description: "NumPy, Pandas, Matplotlib, Seaborn — data wrangling, EDA, hypothesis testing, and linear regression on real-world datasets.",
      color: "#3fb950",
      nodes: [
        {
          id: "pre2-node-1",
          title: "NumPy & Pandas for Data Wrangling",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Array operations, broadcasting, DataFrame manipulation, merging, groupby, and handling missing data.",
          topics: [
            "NumPy: ndarray, broadcasting, vectorized math, linear algebra (np.linalg)",
            "Pandas: Series, DataFrame, read_csv/read_json, indexing (loc/iloc)",
            "Data cleaning: fillna, dropna, duplicates, dtype casting",
            "GroupBy aggregations, pivot tables, merge/join operations",
            "Time-series indexing with DatetimeIndex and resampling"
          ],
          resources: [
            { title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/", type: "Docs" },
            { title: "NumPy User Guide", url: "https://numpy.org/doc/stable/user/", type: "Docs" }
          ],
          checklist: [
            "Clean a real-world dataset: handle missing values and cast dtypes.",
            "Compute grouped statistics on a flight telemetry log.",
            "Vectorize a loop-based calculation using NumPy broadcasting."
          ]
        },
        {
          id: "pre2-node-2",
          title: "EDA, Statistics & Visualization",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Exploratory data analysis, hypothesis testing, correlation, and publication-quality plots with Matplotlib and Seaborn.",
          topics: [
            "Descriptive statistics: mean, std, quartiles, skewness, kurtosis",
            "Matplotlib: Line, scatter, bar, histogram, subplots, figure styling",
            "Seaborn: heatmap, pairplot, violinplot, lmplot, FacetGrid",
            "Hypothesis testing: t-test, chi-squared, Mann-Whitney U (scipy.stats)",
            "Correlation matrices and feature relationship analysis"
          ],
          resources: [
            { title: "Matplotlib Documentation", url: "https://matplotlib.org/stable/", type: "Docs" },
            { title: "Seaborn Tutorial Gallery", url: "https://seaborn.pydata.org/tutorial.html", type: "Docs" }
          ],
          checklist: [
            "Generate a full EDA report on a public dataset (Kaggle).",
            "Produce a correlation heatmap and identify the top 3 correlated features.",
            "Run a t-test comparing two experimental groups and report p-value."
          ]
        },
        {
          id: "pre2-node-3",
          title: "Regression & Predictive Modeling",
          difficulty: "Recommended",
          time: "1 Week",
          description: "Linear and polynomial regression, train/test splits, cross-validation, and Scikit-Learn pipelines.",
          topics: [
            "Linear regression: OLS, gradient descent, R², MSE, MAE",
            "Polynomial features and regularization (Ridge, Lasso)",
            "Scikit-Learn Pipeline: Imputer → Scaler → Estimator",
            "Train/validation/test splits and k-fold cross-validation",
            "Bias-variance tradeoff and model selection"
          ],
          resources: [
            { title: "Scikit-Learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html", type: "Docs" }
          ],
          checklist: [
            "Build a linear regression model predicting battery discharge rate.",
            "Use 5-fold cross-validation and report mean/std of R² score.",
            "Compare Ridge vs Lasso on a multicollinear dataset."
          ]
        }
      ]
    },

    {
      id: "phase-pre-3",
      number: 3,
      title: "Machine Learning & Deep Learning",
      description: "Supervised ML, XGBoost, CNNs, RNNs, Transformers, and production MLOps — from gradient descent to cloud model deployment.",
      color: "#bc8cff",
      nodes: [
        {
          id: "pre3-node-1",
          title: "Classical ML — Supervised & Ensemble Methods",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Decision trees, random forests, gradient boosting, SVM, and feature engineering for tabular data.",
          topics: [
            "Decision Trees: Gini impurity, information gain, pruning",
            "Ensemble methods: Bagging (RandomForest), Boosting (XGBoost, LightGBM)",
            "Support Vector Machines: kernel trick, C/gamma hyperparameters",
            "Feature engineering: One-hot encoding, target encoding, feature selection",
            "Hyperparameter tuning: Grid search, Bayesian optimization (Optuna)"
          ],
          resources: [
            { title: "XGBoost Documentation", url: "https://xgboost.readthedocs.io/", type: "Docs" },
            { title: "Hands-On ML with Scikit-Learn & TensorFlow", url: "https://github.com/ageron/handson-ml3", type: "GitHub" }
          ],
          checklist: [
            "Train an XGBoost classifier on a drone fault detection dataset.",
            "Tune hyperparameters with Optuna and plot importance features.",
            "Implement a complete MLflow experiment tracking pipeline."
          ]
        },
        {
          id: "pre3-node-2",
          title: "Deep Learning — CNNs, RNNs & Transformers",
          difficulty: "Required",
          time: "4 Weeks",
          description: "Building and training neural networks with PyTorch: convolutional, recurrent, and attention-based architectures.",
          topics: [
            "PyTorch tensors, autograd, nn.Module, DataLoader, training loops",
            "CNNs: Conv2d, BatchNorm, MaxPool, ResNet skip connections",
            "RNNs/LSTMs for time-series and sequential sensor data",
            "Transformer architecture: Self-attention, positional encoding, ViT",
            "Transfer learning: Fine-tuning ResNet, MobileNet, EfficientNet"
          ],
          resources: [
            { title: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "Docs" },
            { title: "Andrej Karpathy — Neural Networks: Zero to Hero", url: "https://github.com/karpathy/nn-zero-to-hero", type: "GitHub" }
          ],
          checklist: [
            "Train a CNN for aerial image classification in PyTorch from scratch.",
            "Fine-tune a pre-trained ResNet model on a custom drone dataset.",
            "Build an LSTM for predicting battery state-of-charge from telemetry."
          ]
        },
        {
          id: "pre3-node-3",
          title: "MLOps — Production ML Deployment",
          difficulty: "Recommended",
          time: "3 Weeks",
          description: "Model versioning with MLflow, export to ONNX/TensorRT, FastAPI inference endpoints, and CI/CD model pipelines.",
          topics: [
            "MLflow: Experiment tracking, model registry, artifact logging",
            "Model export: PyTorch → ONNX → TensorRT for edge inference",
            "FastAPI + Uvicorn inference server with async batch processing",
            "Docker containerization of ML inference services",
            "CI/CD pipelines for automated model retraining"
          ],
          resources: [
            { title: "MLflow Documentation", url: "https://mlflow.org/docs/latest/", type: "Docs" },
            { title: "ONNX Runtime Documentation", url: "https://onnxruntime.ai/docs/", type: "Docs" }
          ],
          checklist: [
            "Export a PyTorch model to ONNX and verify output parity.",
            "Deploy a real-time inference endpoint with FastAPI and Docker.",
            "Set up MLflow tracking server with model registry and stage promotion."
          ]
        }
      ]
    },

    {
      id: "phase-pre-4",
      number: 4,
      title: "Autonomous Drone Programming",
      description: "PX4 SITL, MAVLink scripting, Gazebo simulation, ROS 2 offboard control, YOLO vision integration, and Pixhawk hardware deployment.",
      color: "#ff7b72",
      nodes: [
        {
          id: "pre4-node-1",
          title: "MAVLink Protocol & Python Mission Scripting",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Understanding MAVLink 2.0 message framing and writing autonomous mission scripts with pymavlink and MAVSDK.",
          topics: [
            "MAVLink 2.0 message structure, CRC-256, system/component IDs",
            "Parsing HEARTBEAT, ATTITUDE, GLOBAL_POSITION_INT messages",
            "pymavlink: Serial connection, parameter read/write, waypoint upload",
            "MAVSDK-Python: Async takeoff, goto, land, mission scripting",
            "Testing scripts against PX4 SITL before hardware deployment"
          ],
          resources: [
            { title: "MAVLink Official Protocol Guide", url: "https://mavlink.io/en/", type: "Docs" },
            { title: "MAVSDK-Python Examples", url: "https://github.com/mavlink/MAVSDK-Python", type: "GitHub" }
          ],
          checklist: [
            "Parse live MAVLink telemetry and log GPS coordinates to CSV.",
            "Upload and execute a 5-waypoint mission with pymavlink.",
            "Implement a safety heartbeat monitor that triggers RTL on disconnect."
          ]
        },
        {
          id: "pre4-node-2",
          title: "PX4 SITL & Gazebo Simulation",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Running PX4 SITL with Gazebo Harmonic, creating custom drone models, and testing flight scripts safely before field deployment.",
          topics: [
            "PX4 SITL setup on Ubuntu 22.04 with Gazebo Garden/Harmonic",
            "URDF/SDF model creation: rotor dynamics, camera/LiDAR sensors",
            "Simulating wind gusts, GPS spoofing, motor failures",
            "Hardware-In-The-Loop (HITL) with real Pixhawk in simulation loop",
            "Running automated test suites against SITL missions"
          ],
          resources: [
            { title: "PX4 Gazebo Simulation Docs", url: "https://docs.px4.io/main/en/sim_gazebo_gz/", type: "Docs" },
            { title: "gz-sim — Gazebo Physics Simulator", url: "https://github.com/gazebosim/gz-sim", type: "GitHub" }
          ],
          checklist: [
            "Launch PX4 SITL + Gazebo and fly a takeoff/hover/land script.",
            "Build a custom SDF drone model with a downward-facing camera.",
            "Simulate GPS loss and verify HOLD mode failsafe activates."
          ]
        },
        {
          id: "pre4-node-3",
          title: "ROS 2 Offboard Control & YOLO Vision",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Publishing position setpoints via ROS 2 + Micro XRCE-DDS, and integrating YOLO object detection for vision-guided flight.",
          topics: [
            "ROS 2 Humble: Nodes, topics, services, QoS, colcon build",
            "PX4 ↔ ROS 2 bridge via Micro XRCE-DDS agent",
            "Publishing OffboardControlMode & TrajectorySetpoint messages",
            "YOLOv8 integration on companion SBC for real-time detection",
            "Vision-based target tracking with proportional control"
          ],
          resources: [
            { title: "ARK Electronics ROS 2 PX4 Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=k44O-1_oM7Q", type: "YouTube" },
            { title: "ARK-Electronics ROS2 PX4 Offboard Example", url: "https://github.com/ARK-Electronics/ROS2_PX4_Offboard_Example", type: "GitHub" }
          ],
          checklist: [
            "Run Micro XRCE-DDS agent and verify PX4 topic bridge.",
            "Write a ROS 2 C++ node executing a square flight path in offboard mode.",
            "Integrate YOLO detection and send centering velocity commands to PX4."
          ]
        }
      ]
    },

    // ── CAPSTONE PHASES (Drone Engineering) ───────────────────────────────────

    {
      id: "phase-1",
      number: 5,
      title: "Drone Fundamentals, Aerodynamics & Power Systems",
      description: "Multirotor & VTOL physics, structural frame design, BLDC motors, ESC protocols, and high-current electrical safety.",
      color: "#58a6ff",
      nodes: [
        {
          id: "p1-node-1",
          title: "Multirotor Aerodynamics & Flight Physics",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Lift, drag, thrust vectoring, center of gravity (CoG), and moment of inertia calculations for quadrotors, hexacopters, and VTOLs.",
          topics: [
            "Center of Gravity (CoG) & Moment of Inertia tensor calculations",
            "Propeller dynamics: Diameter, pitch, static vs dynamic thrust curves (g/W efficiency)",
            "BLDC Motors: Stator geometry (e.g. 2207, 2806), KV rating selection, phase currents",
            "Frame materials: Carbon fiber layup, modal analysis & resonance dampening"
          ],
          resources: [
            { title: "PX4 Aerodynamics & Mechanical Physics Spec", url: "https://docs.px4.io/main/en/concept/physics.html", type: "Docs" },
            { title: "eCalc Propulsion & Motor Performance Calculator", url: "https://www.ecalc.ch/calcmenu.php", type: "Tool" }
          ],
          checklist: [
            "Calculate required motor thrust for 4:1 thrust-to-weight ratio payload.",
            "Determine propeller pitch impact on peak motor current draw.",
            "Select frame vibration dampeners based on motor RPM spectrum."
          ]
        },
        {
          id: "p1-node-2",
          title: "Propulsion, ESCs & Battery Management (BMS)",
          difficulty: "Required",
          time: "2 Weeks",
          description: "LiPo/LiFePO4 cell chemistry, 32-bit ESC protocols (PWM, OneShot, DShot 300/600), and PDB wiring harness safety.",
          topics: [
            "LiPo Cell Chemistry: Internal resistance, C-rating discharge limits, thermal runaway",
            "32-Bit ESCs: MOSFET switching speeds, dead-time compensation, telemetry feedback",
            "Current & Voltage Sensing: Hall-effect transducers vs precision shunt resistors",
            "BEC Voltage Regulators (5V, 9V, 12V lines) and ESD surge protection"
          ],
          resources: [
            { title: "AM32 Open-Source 32-Bit ESC Firmware Repository", url: "https://github.com/AM32-Firmware/AM32", type: "GitHub" },
            { title: "Oscar Liang - Drone Power & Electrical Engineering Guide", url: "https://oscarliang.com/lipo-battery-guide/", type: "Blog" }
          ],
          checklist: [
            "Dimension power distribution wires (AWG) for 120A peak current draw.",
            "Calibrate current sensor scaling factors on flight controller.",
            "Configure hardware voltage cut-off failsafe limits."
          ]
        },
        {
          id: "p1-node-3",
          title: "Drone Frame Assembly, Soldering & Wiring Safety",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Step-by-step physical quadcopter assembly, high-current soldering, sensor orientation, and continuity safety checks.",
          topics: [
            "Quadcopter & Hexacopter frame assembly & arm stiffness testing",
            "High-current soldering techniques for PDB, ESCs, and motor leads",
            "Flight controller mounting, vibration isolation standoffs, arrow orientation",
            "Pre-power continuity checks & smoke stopper testing"
          ],
          resources: [
            { title: "Drone Dojo Raspberry Pi Quadcopter Build Series (YouTube)", url: "https://www.youtube.com/@thedronedojo", type: "YouTube" },
            { title: "Oscar Liang How to Build FPV Drone Step-by-Step", url: "https://oscarliang.com/", type: "Blog" }
          ],
          checklist: [
            "Perform multimeter continuity check on power leads before plugging battery.",
            "Verify flight controller arrow orientation matches forward flight axis.",
            "Test motor spinning direction and swap motor phases if needed."
          ]
        }
      ]
    },

    {
      id: "phase-2",
      number: 6,
      title: "Flight Controllers, Sensors & Firmware Setup",
      description: "STM32 microcontrollers, IMU/GNSS sensor physics, ArduPilot & PX4 firmware flashing, and Mission Planner configuration.",
      color: "#58a6ff",
      nodes: [
        {
          id: "p2-node-1",
          title: "Sensors, Signal Conditioning & RTK Positioning",
          difficulty: "Recommended",
          time: "3 Weeks",
          description: "MEMS IMUs (ICM-42688-P), digital barometers, magnetometers, optical flow, and u-blox F9P RTK GNSS sub-centimeter accuracy.",
          topics: [
            "MEMS Accelerometers & Gyroscopes: Noise profiles, sampling rates, DMA transfers",
            "Magnetometer 3D Hard/Soft iron ellipsoid compensation matrices",
            "GNSS Protocols: NMEA 0183, UBX (u-blox F9P sub-centimeter RTK)",
            "Time-of-Flight (ToF) Rangefinders & Optical Flow positioning"
          ],
          resources: [
            { title: "u-blox F9P High-Precision RTK GNSS Documentation", url: "https://www.u-blox.com", type: "Docs" },
            { title: "InvenSense Motion Tracking Driver Repositories", url: "https://github.com/invensense", type: "GitHub" }
          ],
          checklist: [
            "Perform 6-orientation IMU accelerometer calibration.",
            "Calibrate 3D compass sphere mapping to eliminate motor magnetic distortion.",
            "Verify RTK Fixed GNSS status in open sky."
          ]
        },
        {
          id: "p2-node-2",
          title: "PX4 & ArduPilot Firmware Setup & Flight Modes",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Flashing flight stack binaries via QGroundControl / Mission Planner, sensor calibration, flight modes, and failsafes.",
          topics: [
            "Flight Controller Architecture: STM32H7 FMUv6X / Pixhawk specs",
            "Flashing PX4 & ArduPilot firmware to flight controllers",
            "Flight Modes: Stabilize, AltHold, Loiter, Return-To-Launch (RTL), Offboard",
            "Failsafe Triggers: Low battery, RC signal loss, DataLink loss, Geofence breach"
          ],
          resources: [
            { title: "PX4 Autopilot Open Source Repository", url: "https://github.com/PX4/PX4-Autopilot", type: "GitHub" },
            { title: "ArduPilot Official Codebase & Developer Docs", url: "https://github.com/ArduPilot/ardupilot", type: "GitHub" }
          ],
          checklist: [
            "Flash latest stable PX4 firmware via QGroundControl.",
            "Calibrate RC transmitter channels and flight mode toggle switches.",
            "Test low-voltage RTL battery failsafe in SITL simulation."
          ]
        },
        {
          id: "p2-node-3",
          title: "PID Control Tuning & Vibration Log Analysis",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Tuning Roll, Pitch, and Yaw PID stabilization loops, analyzing ULog telemetry FFT spectrums, and setting notch filters.",
          topics: [
            "Cascaded Loops: Attitude Rate Controller (Inner) -> Position Controller (Outer)",
            "Tuning P, I, D gains to prevent high-frequency oscillations & mid-flight wobbles",
            "FFT Spectral Analysis: Identifying motor RPM noise frequencies",
            "Configuring dynamic gyro harmonic notch filters"
          ],
          resources: [
            { title: "PX4 FlightReview Telemetry Web Diagnostic Tool", url: "https://review.px4.io/", type: "Tool" },
            { title: "PlotJuggler Time-Series & Log Visualizer", url: "https://github.com/facontidavide/PlotJuggler", type: "GitHub" }
          ],
          checklist: [
            "Tune rate loop P and D gains on a test bench.",
            "Upload flight ULog file to FlightReview and analyze vibration spectrum.",
            "Configure dynamic harmonic notch filter frequencies based on motor RPM."
          ]
        }
      ]
    },

    {
      id: "phase-3",
      number: 7,
      title: "Autonomous Drone Programming & MAVLink",
      description: "MAVLink 2.0 serial protocol, Python scripting with pymavlink & MAVSDK, Offboard mode, and Gazebo SITL simulation.",
      color: "#bc8cff",
      nodes: [
        {
          id: "p3-node-1",
          title: "MAVLink 2.0 Protocol & Python Scripting",
          difficulty: "Required",
          time: "2 Weeks",
          description: "MAVLink message framing, CRC-256 validation, writing Python telemetry scripts with pymavlink & MAVSDK.",
          topics: [
            "MAVLink 2.0 Frame Structure & message signing",
            "Parsing telemetry: `ATTITUDE`, `GLOBAL_POSITION_INT`, `HEARTBEAT`",
            "MAVSDK Python & pymavlink async serial communication",
            "Sending parameter getters and setters over telemetry link"
          ],
          resources: [
            { title: "MAVLink Official Protocol Guide & Specifications", url: "https://mavlink.io/en/", type: "Docs" },
            { title: "MAVSDK C++ / Python Libraries Repository", url: "https://github.com/mavlink/MAVSDK", type: "GitHub" }
          ],
          checklist: [
            "Parse MAVLink telemetry packets in Python using `pymavlink`.",
            "Send offboard waypoint commands using MAVSDK-Python.",
            "Implement MAVLink parameter getter/setter service."
          ]
        },
        {
          id: "p3-node-2",
          title: "Offboard Mode & Autonomous Mission Planning",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Programming autonomous takeoff, hover, position setpoints, landing, and automated grid survey missions.",
          topics: [
            "Offboard mode entry: Publishing position and velocity setpoint vectors",
            "Designing autonomous survey grids & waypoint search missions",
            "Handling Offboard mode heartbeat loss & safety fallbacks",
            "Coordinate frame conversions: Body (FRD) vs Inertial (NED/ENU)"
          ],
          resources: [
            { title: "Jaeyoung Lim PX4-Offboard Reference Repo", url: "https://github.com/Jaeyoung-Lim/px4-offboard", type: "GitHub" },
            { title: "PX4 Offboard Mode Programming User Guide", url: "https://docs.px4.io/main/en/ros/ros2_offboard_control.html", type: "Docs" }
          ],
          checklist: [
            "Write a Python script executing autonomous takeoff, 5m hover, and landing.",
            "Design a 10-point autonomous grid survey mission in QGroundControl.",
            "Test failsafe RTL trigger during loss of Offboard signal stream."
          ]
        },
        {
          id: "p3-node-3",
          title: "Gazebo Harmonic & PX4 SITL Simulation",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Simulating multirotors, VTOLs, sensors, wind gusts, and failure scenarios in Gazebo physics engine.",
          topics: [
            "PX4 SITL (Software-In-The-Loop) with Gazebo Garden / Harmonic",
            "URDF & SDF robot model creation with rotor dynamics & sensor plugins",
            "Simulating wind gusts, GPS loss, motor failures, and battery depletion",
            "Hardware-In-The-Loop (HITL) testing with physical Pixhawk"
          ],
          resources: [
            { title: "PX4 Gazebo Simulation User Manual", url: "https://docs.px4.io/main/en/simulation/gazebo.html", type: "Docs" },
            { title: "gazebosim/gz-sim High-Fidelity Physics Simulator", url: "https://github.com/gazebosim/gz-sim", type: "GitHub" }
          ],
          checklist: [
            "Launch multi-drone PX4 SITL simulation in Gazebo.",
            "Build custom Gazebo SDF model matching your frame geometry.",
            "Run automated flight mission test suite in SITL."
          ]
        }
      ]
    },

    {
      id: "phase-4",
      number: 8,
      title: "ROS 2 & Microcontroller Integration",
      description: "Linux companion computers (NVIDIA Jetson / RPi 5), ROS 2 Humble/Jazzy, micro-ROS, and XRCE-DDS bridge.",
      color: "#3fb950",
      nodes: [
        {
          id: "p4-node-1",
          title: "Linux Companion Computers & Real-Time Setup",
          difficulty: "Required",
          time: "2 Weeks",
          description: "NVIDIA Jetson Orin Nano / RPi 5 companion board setup, PREEMPT_RT real-time kernel, and UART serial links.",
          topics: [
            "NVIDIA Jetson Orin Nano / Raspberry Pi 5 companion board setup",
            "Ubuntu Server 22.04 LTS PREEMPT_RT real-time kernel compilation",
            "High-speed UART / Ethernet connections to Flight Controller (921600+ baud)",
            "DC-DC step-down power distribution for onboard companion computers"
          ],
          resources: [
            { title: "NVIDIA JetPack Embedded Developer SDK Guide", url: "https://developer.nvidia.com/embedded/jetpack", type: "Docs" },
            { title: "PX4 Companion Computer Integration Guide", url: "https://docs.px4.io/main/en/companion_computer/", type: "Docs" }
          ],
          checklist: [
            "Install Ubuntu 22.04 LTS on Raspberry Pi 5 or Jetson Orin.",
            "Set up systemd service auto-launching autonomy nodes on boot.",
            "Verify 921600 baud rate UART communication link."
          ]
        },
        {
          id: "p4-node-2",
          title: "ROS 2 Humble & Micro-ROS Architecture",
          difficulty: "Required",
          time: "4 Weeks",
          description: "ROS 2 nodes, topics, service calls, action servers, QoS parameters, and micro-ROS microcontroller integration.",
          topics: [
            "ROS 2 Humble / Jazzy Node architecture & Colcon build tool",
            "DDS Quality of Service (QoS) tuning for lossy telemetry links",
            "micro-ROS: Executing ROS 2 nodes directly on Cortex-M microcontrollers",
            "Coordinate transforms (tf2) & visualization in rviz2"
          ],
          resources: [
            { title: "ROS 2 Official Developer Documentation", url: "https://docs.ros.org/en/humble/", type: "Docs" },
            { title: "micro-ROS Project Documentation & Source Code", url: "https://micro.ros.org/", type: "Docs" }
          ],
          checklist: [
            "Write a C++ ROS 2 node subscribing to `/fmu/out/vehicle_odometry`.",
            "Configure custom QoS settings for low-latency video streams.",
            "Visualize drone frame transformations in rviz2."
          ]
        },
        {
          id: "p4-node-3",
          title: "PX4 ROS 2 Interface (Micro XRCE-DDS) & Video Walkthrough",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Interfacing PX4 directly into ROS 2 network using Micro XRCE-DDS agent for real-time offboard control.",
          topics: [
            "Micro XRCE-DDS Client (PX4 side) & Agent (SBC side)",
            "Offboard mode entry: Publishing `OffboardControlMode` & `TrajectorySetpoint`",
            "Sending Vehicle Commands: Arm, Disarm, Takeoff, Land, RTL",
            "ARK Electronics ROS 2 PX4 Video Walkthrough & Codebase"
          ],
          resources: [
            { title: "ARK Electronics ROS 2 PX4 Offboard Video (YouTube)", url: "https://www.youtube.com/watch?v=k44O-1_oM7Q", type: "YouTube" },
            { title: "ARK-Electronics/ROS2_PX4_Offboard_Example Repo", url: "https://github.com/ARK-Electronics/ROS2_PX4_Offboard_Example", type: "GitHub" }
          ],
          checklist: [
            "Execute Micro XRCE-DDS Agent on companion computer.",
            "Write ROS 2 C++ Offboard Control node executing automated flight path.",
            "Handle emergency heartbeat loss fallback routines."
          ]
        }
      ]
    },

    {
      id: "phase-5",
      number: 9,
      title: "Perception, Computer Vision & SLAM",
      description: "Stereo depth cameras, OpenCV target tracking, YOLO object detection, Visual-Inertial Odometry (VIO), and 3D SLAM.",
      color: "#d29922",
      nodes: [
        {
          id: "p5-node-1",
          title: "OpenCV & YOLO Real-Time Object Detection / Follow-Me",
          difficulty: "Recommended",
          time: "3 Weeks",
          description: "Streaming live drone camera feeds, processing frames with OpenCV & YOLO for target tracking and Follow-Me flight.",
          topics: [
            "Streaming CSI/USB camera feeds to companion computer",
            "OpenCV image processing: Color thresholding, contour tracking, optical flow",
            "YOLOv8 / YOLOv11 real-time object detection model deployment",
            "Building vision-based Follow-Me autonomous control loops"
          ],
          resources: [
            { title: "OpenCV Official Computer Vision Library", url: "https://opencv.org/", type: "Docs" },
            { title: "Ultralytics YOLO Real-Time Object Detection Repo", url: "https://github.com/ultralytics/ultralytics", type: "GitHub" }
          ],
          checklist: [
            "Capture live 30fps camera feed on companion computer.",
            "Run YOLO object detection on video stream with ONNX/TensorRT.",
            "Send target tracking offset commands to flight controller."
          ]
        },
        {
          id: "p5-node-2",
          title: "Visual-Inertial Odometry (VIO) in GPS-Denied Environments",
          difficulty: "Advanced",
          time: "4 Weeks",
          description: "Estimating drone position and velocity using camera + IMU sensor fusion without GPS signals.",
          topics: [
            "Stereo Depth Cameras (Intel RealSense D435i, OAK-D, ZED 2i)",
            "VIO Estimator Frameworks: OpenVINS, ROVIO, VINS-Fusion",
            "Feature extraction & optical flow tracking (FAST corners, KLT tracker)",
            "Fusing VIO estimates back into PX4 EKF2 as vision position targets"
          ],
          resources: [
            { title: "rpng/open_vins Visual-Inertial System Repo", url: "https://github.com/rpng/open_vins", type: "GitHub" },
            { title: "Intel RealSense ROS 2 Wrapper Node", url: "https://github.com/IntelRealSense/realsense-ros", type: "GitHub" }
          ],
          checklist: [
            "Calibrate camera intrinsic matrix & camera-to-IMU extrinsic transform.",
            "Run VINS-Fusion on companion computer in real-time.",
            "Achieve stable indoor position hold using vision odometry."
          ]
        },
        {
          id: "p5-node-3",
          title: "3D SLAM, OctoMap & EGO-Planner Trajectory Generation",
          difficulty: "Advanced",
          time: "4 Weeks",
          description: "Building 3D volumetric maps with LiDAR/depth vision and generating collision-free trajectories.",
          topics: [
            "LiDAR point cloud processing using Point Cloud Library (PCL)",
            "3D SLAM Algorithms: ORB-SLAM3, Cartographer, Fast-LIO2",
            "Volumetric Occupancy Grid Mapping: OctoMap & Voxblox",
            "Minimum Snap Trajectory Optimization: EGO-Planner and PX4 Avoidance"
          ],
          resources: [
            { title: "ZJU-FAST-Lab/ego-planner Quadrotor Planner", url: "https://github.com/ZJU-FAST-Lab/ego-planner", type: "GitHub" },
            { title: "ORB-SLAM3 Feature-Based SLAM Codebase", url: "https://github.com/UZ-SLAMLab/ORB_SLAM3", type: "GitHub" }
          ],
          checklist: [
            "Generate 3D OctoMap grid from depth camera topics.",
            "Deploy EGO-Planner in simulation to avoid dynamic obstacles.",
            "Visualize live 3D map and path vectors inside rviz2."
          ]
        }
      ]
    },

    {
      id: "phase-6",
      number: 10,
      title: "Python Data Analysis, ML & Production MLOps",
      description: "Python telemetry wrangling (NumPy/Pandas), log visualization, ML/DL vision models, and FAA Part 107 safety audits.",
      color: "#58a6ff",
      nodes: [
        {
          id: "p6-node-1",
          title: "Python Data Wrangling & Telemetry Analytics",
          difficulty: "Recommended",
          time: "2 Weeks",
          description: "Cleaning flight telemetry logs using NumPy & Pandas, generating Matplotlib/Seaborn visualization graphs.",
          topics: [
            "Python 3 & PEP 8 code formatting best practices",
            "Parsing flight CSV/JSON telemetry with NumPy & Pandas",
            "Data cleaning: Handling missing sensor values, outliers & interpolation",
            "Visualizing vibration spectrums and battery discharge curves with Matplotlib & Seaborn"
          ],
          resources: [
            { title: "Pandas Data Analysis Documentation", url: "https://pandas.pydata.org/", type: "Docs" },
            { title: "Matplotlib Visualization Library Documentation", url: "https://matplotlib.org/", type: "Docs" }
          ],
          checklist: [
            "Parse flight log CSV and extract vibration peak statistics.",
            "Generate battery voltage vs time discharge line plot.",
            "Perform outlier removal on GPS position telemetry data."
          ]
        },
        {
          id: "p6-node-2",
          title: "Machine Learning & Deep Learning Edge Deployment",
          difficulty: "Recommended",
          time: "3 Weeks",
          description: "Building PyTorch/TensorFlow vision models, fine-tuning ResNet classifiers, and deploying to Jetson using FastAPI / TensorRT.",
          topics: [
            "Scikit-Learn ML pipeline: Regression, classification, cross-validation",
            "Convolutional Neural Networks (CNNs) for aerial image classification",
            "Transfer learning with pre-trained ResNet & MobileNet models",
            "Deploying lightweight inference APIs with FastAPI, ONNX & TensorRT on Jetson"
          ],
          resources: [
            { title: "PyTorch Deep Learning Framework", url: "https://pytorch.org/", type: "Docs" },
            { title: "FastAPI Web Framework Documentation", url: "https://fastapi.tiangolo.com/", type: "Docs" }
          ],
          checklist: [
            "Train a ResNet aerial imagery classification model in PyTorch.",
            "Export PyTorch model to ONNX / TensorRT format.",
            "Deploy a FastAPI endpoint serving real-time predictions on companion SBC."
          ]
        },
        {
          id: "p6-node-3",
          title: "Failsafes, Pre-Flight Safety Audits & FAA Regulations",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Configuring failsafe triggers, hardware Geofencing, Remote ID, and standard pre-flight operating procedures.",
          topics: [
            "Failsafe Triggers: Low battery, RC loss, DataLink loss, Geofence breach",
            "Return-To-Launch (RTL) safe altitude ascent & landing logic",
            "Aviation Regulations: FAA Part 107, EASA Open Category, Remote ID broadcast modules",
            "Pre-Flight 20-Point Safety Audit & Emergency Disarm Procedures"
          ],
          resources: [
            { title: "FAA Part 107 Small Unmanned Aircraft Regulations", url: "https://www.faa.gov/uas/commercial_operators", type: "Docs" },
            { title: "UPenn Aerial Robotics Course (Coursera)", url: "https://www.coursera.org/learn/robotics-flight", type: "Course" }
          ],
          checklist: [
            "Configure hardware Geofence radius and altitude ceiling.",
            "Verify Remote ID module broadcast packet transmission.",
            "Perform a 20-point pre-flight safety audit before initial flight."
          ]
        }
      ]
    }
  ],

  resourcesCatalog: [
    {
      id: "res-1",
      title: "PX4/PX4-Autopilot",
      category: "Software & Firmware",
      difficulty: "Advanced",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/PX4/PX4-Autopilot",
      description: "Industry-standard open-source flight control software stack for drones and autonomous aircraft.",
      tags: ["C++", "NuttX", "Autopilot", "Flight-Stack"]
    },
    {
      id: "res-2",
      title: "ArduPilot/ardupilot",
      category: "Software & Firmware",
      difficulty: "Advanced",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/ArduPilot/ardupilot",
      description: "Versatile open-source autopilot software supporting multirotors, fixed-wings, VTOLs, and ground rovers.",
      tags: ["C++", "AP_HAL", "Autopilot", "Firmware"]
    },
    {
      id: "res-3",
      title: "mavlink/mavlink",
      category: "Protocols & Hardware",
      difficulty: "Intermediate",
      type: "C / C++",
      langColor: "#f34b7d",
      url: "https://github.com/mavlink/mavlink",
      description: "Lightweight header-only message marshaling protocol for micro air vehicles and ground control stations.",
      tags: ["MAVLink", "Telemetry", "Protocol", "Serial"]
    },
    {
      id: "res-4",
      title: "ros2/ros2",
      category: "Autonomy & AI",
      difficulty: "Intermediate",
      type: "C++ / Python",
      langColor: "#22314E",
      url: "https://github.com/ros2/ros2",
      description: "Robot Operating System for building modular, multi-threaded autonomous robotics applications.",
      tags: ["ROS 2", "Robotics", "DDS", "Micro-ROS"]
    },
    {
      id: "res-5",
      title: "Jaeyoung-Lim/px4-offboard",
      category: "Autonomy & AI",
      difficulty: "Intermediate",
      type: "Python / C++",
      langColor: "#3572A5",
      url: "https://github.com/Jaeyoung-Lim/px4-offboard",
      description: "Community-standard Python reference implementation for PX4 ROS 2 offboard position control and RViz visualization.",
      tags: ["Python", "ROS 2", "Offboard", "PX4"]
    },
    {
      id: "res-6",
      title: "ARK-Electronics/ROS2_PX4_Offboard_Example",
      category: "Autonomy & AI",
      difficulty: "Intermediate",
      type: "Python",
      langColor: "#3572A5",
      url: "https://github.com/ARK-Electronics/ROS2_PX4_Offboard_Example",
      description: "Beginner-friendly ROS 2 and PX4 offboard control tutorial repository with YouTube walkthrough.",
      tags: ["ROS 2", "PX4", "Offboard", "Tutorial"]
    },
    {
      id: "res-7",
      title: "ARK Electronics ROS 2 PX4 Tutorial (YouTube)",
      category: "Tools & Software",
      difficulty: "Beginner",
      type: "YouTube Video",
      langColor: "#ff0000",
      url: "https://www.youtube.com/watch?v=k44O-1_oM7Q",
      description: "Complete step-by-step video guide covering simulated offboard mode with PX4, Micro XRCE-DDS, and ROS 2.",
      tags: ["YouTube", "Video", "PX4", "ROS 2"]
    },
    {
      id: "res-8",
      title: "UPenn Aerial Robotics Course (Coursera)",
      category: "Theory & Papers",
      difficulty: "Intermediate",
      type: "Coursera Course",
      langColor: "#0056D2",
      url: "https://www.coursera.org/learn/robotics-flight",
      description: "UPenn robotics course by Prof. Vijay Kumar covering quadrotor dynamic modeling, 3D path synthesis, and PD control.",
      tags: ["Coursera", "Course", "Math", "Quadrotor"]
    },
    {
      id: "res-9",
      title: "Drone Dojo Raspberry Pi Drone Tutorials (YouTube)",
      category: "Tools & Software",
      difficulty: "Beginner",
      type: "YouTube Series",
      langColor: "#ff0000",
      url: "https://www.youtube.com/@thedronedojo",
      description: "Practical YouTube video playlist on building and programming Raspberry Pi quadcopters with Python and ArduPilot.",
      tags: ["YouTube", "Raspberry-Pi", "Python", "Drone-Build"]
    },
    {
      id: "res-10",
      title: "gazebosim/gz-sim",
      category: "Tools & Software",
      difficulty: "Intermediate",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/gazebosim/gz-sim",
      description: "High-fidelity 3D physics simulator for autonomous vehicles, drones, and sensor emulation.",
      tags: ["Gazebo", "Physics", "SITL", "URDF"]
    },
    {
      id: "res-11",
      title: "rpng/open_vins",
      category: "Autonomy & AI",
      difficulty: "Advanced",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/rpng/open_vins",
      description: "Filter-based visual-inertial state estimator for high-precision GPS-denied drone positioning.",
      tags: ["VIO", "Camera", "IMU", "EKF"]
    },
    {
      id: "res-12",
      title: "ZJU-FAST-Lab/ego-planner",
      category: "Autonomy & AI",
      difficulty: "Advanced",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/ZJU-FAST-Lab/ego-planner",
      description: "Lightweight gradient-based local trajectory planner for quadrotors in dense unknown environments.",
      tags: ["Path-Planning", "Avoidance", "B-spline"]
    },
    {
      id: "res-13",
      title: "facontidavide/PlotJuggler",
      category: "Tools & Software",
      difficulty: "Beginner",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/facontidavide/PlotJuggler",
      description: "Essential desktop application for visualizing time-series telemetry logs, ROS topics, and ULog data.",
      tags: ["Analytics", "Logging", "Visualizer"]
    },
    {
      id: "res-14",
      title: "Oscar Liang Drone Power & Battery Guide",
      category: "Protocols & Hardware",
      difficulty: "Beginner",
      type: "Blog Guide",
      langColor: "#d29922",
      url: "https://oscarliang.com/lipo-battery-guide/",
      description: "Comprehensive reference blog covering LiPo battery chemistry, C-ratings, BMS, wiring gauges, and safety.",
      tags: ["Blog", "Power", "LiPo", "Hardware"]
    }
  ]
};
