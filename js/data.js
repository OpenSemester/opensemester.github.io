// OpenSemester - Drone Development Engineer Roadmap & Resource Catalog Data

const DRONE_ROADMAP_DATA = {
  title: "Drone Development Engineer",
  subtitle: "Comprehensive open-source master path from flight physics, hardware assembly & firmware to ROS 2 autonomy, AI vision & SLAM.",
  repoUrl: "https://github.com/OpenSemester/opensemester.github.io",
  lastUpdated: "2026-07-25",
  totalModules: 24,
  estimatedTime: "6 - 9 Months",
  
  phases: [
    {
      id: "phase-1",
      number: 1,
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
      number: 2,
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
      number: 3,
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
      number: 4,
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
      number: 5,
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
      number: 6,
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
