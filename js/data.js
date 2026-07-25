// OpenSemester - Drone Development Engineer Roadmap & Resource Catalog Data

const DRONE_ROADMAP_DATA = {
  title: "Drone Development Engineer",
  subtitle: "Step-by-step master learning path from flight physics to ROS 2 autonomous systems.",
  repoUrl: "https://github.com/OpenSemester/opensemester.github.io",
  lastUpdated: "2026-07-25",
  totalModules: 24,
  estimatedTime: "6 - 9 Months",
  
  phases: [
    {
      id: "phase-1",
      number: 1,
      title: "Fundamentals & Hardware Engineering",
      description: "Propulsion mechanics, aerodynamic stability, battery power systems, and sensor physics.",
      color: "#58a6ff",
      nodes: [
        {
          id: "p1-node-1",
          title: "Multirotor Aerodynamics & Kinematics",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Thrust-to-weight ratios, propeller pitch efficiency, BLDC motor KV ratings, and torque vectoring.",
          topics: [
            "Center of Gravity (CG) & Moment of Inertia tensors",
            "Propeller dynamics: Static vs dynamic thrust curves (g/W efficiency)",
            "BLDC Motors: Stator geometry (e.g. 2207, 2806), KV selection, phase currents",
            "Vibration resonance & carbon fiber frame modal analysis"
          ],
          resources: [
            { title: "PX4 Physics & Aerodynamics Specification", url: "https://docs.px4.io/main/en/concept/physics.html", type: "Docs" },
            { title: "eCalc Motor & Propeller Propulsion Calculator", url: "https://www.ecalc.ch/calcmenu.php", type: "Tool" }
          ],
          checklist: [
            "Calculate required motor thrust for 4:1 thrust-to-weight ratio payload.",
            "Determine propeller pitch impact on peak motor current draw.",
            "Select frame vibration dampeners based on motor RPM spectrum."
          ]
        },
        {
          id: "p1-node-2",
          title: "Power Distribution & High-Current Safety",
          difficulty: "Required",
          time: "2 Weeks",
          description: "LiPo/LiFePO4 battery chemistry, ESC protocols (BLHeli_32/AM32), and PDB current sensing.",
          topics: [
            "LiPo Cell Chemistry: Internal resistance, C-rate limits, thermal runaways",
            "32-Bit ESCs: MOSFET switching speeds, dead-time compensation, telemetry",
            "Current & Voltage Sensing: Hall-effect transducers vs precision shunts",
            "Power Regulation: Switching BECs (5V, 9V, 12V lines) and ESD protection"
          ],
          resources: [
            { title: "AM32 Open-Source 32-Bit ESC Firmware Repository", url: "https://github.com/AM32-Firmware/AM32", type: "GitHub" },
            { title: "Oscar Liang - Drone Power & Electrical Engineering Guide", url: "https://oscarliang.com/lipo-battery-guide/", type: "Guide" }
          ],
          checklist: [
            "Dimension power distribution wires (AWG) for 120A peak draw.",
            "Calibrate battery voltage and current sensor scaling factors.",
            "Configure hardware voltage cut-off failsafe limits."
          ]
        },
        {
          id: "p1-node-3",
          title: "Sensors & Signal Conditioning",
          difficulty: "Recommended",
          time: "3 Weeks",
          description: "MEMS IMUs, digital barometers, magnetometers, optical flow, and GNSS/RTK receivers.",
          topics: [
            "MEMS Accelerometers & Gyroscopes (ICM-42688-P / MPU-6050)",
            "Magnetometer 3D Hard/Soft iron calibration matrices",
            "GNSS Protocols: NMEA 0183, UBX (u-blox M9/F9P RTK sub-centimeter)",
            "Time-of-Flight (ToF) Rangefinders & Optical Flow sensors"
          ],
          resources: [
            { title: "u-blox F9P High-Precision RTK GNSS Documentation", url: "https://www.u-blox.com", type: "Docs" },
            { title: "InvenSense Motion Tracking Driver Repositories", url: "https://github.com/invensense", type: "GitHub" }
          ],
          checklist: [
            "Perform 6-orientation IMU calibration routine.",
            "Calibrate 3D magnetometer ellipsoid mapping to remove distortions.",
            "Filter raw IMU sensor noise using low-pass digital filters."
          ]
        }
      ]
    },

    {
      id: "phase-2",
      number: 2,
      title: "Embedded C/C++ & Autopilot Firmware",
      description: "STM32 microcontrollers, real-time operating systems (NuttX/ChibiOS), and open flight stacks.",
      color: "#58a6ff",
      nodes: [
        {
          id: "p2-node-1",
          title: "STM32 Microcontrollers & Peripheral Bus Drivers",
          difficulty: "Required",
          time: "3 Weeks",
          description: "ARM Cortex-M4/M7 peripherals, SPI, I2C, UART, CAN bus (DroneCAN), and DMA controller configuration.",
          topics: [
            "STM32H7 / F4 Hardware Register Maps & HAL Architecture",
            "High-Speed Communication: SPI DMA (IMUs), I2C (Sensors), UART (Telem)",
            "DroneCAN / UAVCAN Protocol Specification over CAN FD",
            "Timer PWM generation for ESC DShot 300/600 motor signals"
          ],
          resources: [
            { title: "ST Microelectronics STM32H7 Reference Manual", url: "https://www.st.com", type: "Docs" },
            { title: "DroneCAN Protocol Specification & Library", url: "https://dronecan.github.io/", type: "Docs" }
          ],
          checklist: [
            "Write a C driver to fetch IMU data over SPI using DMA buffers.",
            "Generate bit-bang DShot 600 pulses using timer channels.",
            "Transmit UAVCAN sensor packets across CAN bus interface."
          ]
        },
        {
          id: "p2-node-2",
          title: "PX4 Autopilot & ArduPilot Architecture",
          difficulty: "Required",
          time: "4 Weeks",
          description: "Publish-subscribe middleware (uORB), task scheduling, custom modules, and building firmware.",
          topics: [
            "NuttX RTOS multi-threading, work queues, and memory pools",
            "PX4 uORB Middleware: Topic publish-subscribe pattern",
            "ArduPilot AP_HAL hardware abstraction layer and main thread loops",
            "Compiling custom firmware targets using CMake, Ninja, and GNU ARM toolchains"
          ],
          resources: [
            { title: "PX4 Autopilot GitHub Repository", url: "https://github.com/PX4/PX4-Autopilot", type: "GitHub" },
            { title: "ArduPilot Autopilot Codebase", url: "https://github.com/ArduPilot/ardupilot", type: "GitHub" }
          ],
          checklist: [
            "Build PX4 firmware targets for `px4_fmu-v5_default` from source.",
            "Write a custom C++ uORB publisher/subscriber module in PX4.",
            "Flash compiled binary to physical Pixhawk flight controller."
          ]
        },
        {
          id: "p2-node-3",
          title: "MAVLink 2.0 Communication Protocol",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Binary telemetry streams, mission command protocols, and MAVSDK integrations.",
          topics: [
            "MAVLink 2.0 Frame Structure: CRC-256 validation & packet signing",
            "Telemetry Messages: `ATTITUDE`, `GLOBAL_POSITION_INT`, `HIGHRES_IMU`",
            "Microservices: Waypoint Mission Protocol & Parameter Protocol",
            "MAVSDK C++ / Python SDK bindings for autonomous commands"
          ],
          resources: [
            { title: "MAVLink Official Protocol Guide & Specifications", url: "https://mavlink.io/en/", type: "Docs" },
            { title: "MAVSDK C++ / Python Libraries Repository", url: "https://github.com/mavlink/MAVSDK", type: "GitHub" }
          ],
          checklist: [
            "Parse raw MAVLink telemetry packets in Python using `pymavlink`.",
            "Send offboard position targets using MAVSDK-Python script.",
            "Implement MAVLink parameter getter/setter service."
          ]
        }
      ]
    },

    {
      id: "phase-3",
      number: 3,
      title: "Control Systems & Sensor Fusion Math",
      description: "Rigid body kinematics, cascaded PID loops, EKF2 state estimation, and Quaternion math.",
      color: "#bc8cff",
      nodes: [
        {
          id: "p3-node-1",
          title: "Quadrotor Dynamics & Kinematic Frames",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Coordinate frames (Body FRD vs Inertial NED), Euler angles vs Quaternions, and dynamic equations of motion.",
          topics: [
            "Body Frame (FRD/FLU) to Inertial Frame (NED/ENU) conversions",
            "Quaternion Algebra: Multiplication, inverse, rotation matrices",
            "Eliminating Gimbal Lock in 3D Attitude Representations",
            "Newton-Euler 6-DOF non-linear equations of motion"
          ],
          resources: [
            { title: "Quadrotor Dynamics & Control (ETH Zurich Publications)", url: "https://ethz.ch", type: "Paper" },
            { title: "PythonRobotics Dynamic Quadrotor Simulator", url: "https://github.com/PythonRobotics/PythonRobotics", type: "GitHub" }
          ],
          checklist: [
            "Derive rotation transformation matrix from Body to Inertial frame.",
            "Write Quaternion-to-Euler conversion routines in C++.",
            "Simulate quadrotor 6-DOF rigid body physics in Python."
          ]
        },
        {
          id: "p3-node-2",
          title: "Cascaded PID Loop Tuning & Notch Filtering",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Designing rate loops, attitude loops, velocity loops, position loops, and frequency-domain filtering.",
          topics: [
            "Cascaded Loops: Attitude Rate Controller (Inner) -> Position Controller (Outer)",
            "Digital Low-Pass Filters & Dynamic Gyro Harmonic Notch Filters",
            "Integrator Anti-Windup mechanisms & actuator saturation limits",
            "Feedforward gains for high-speed aggressive trajectory tracking"
          ],
          resources: [
            { title: "PX4 Controller Architecture Diagrams & Spec", url: "https://docs.px4.io/main/en/flight_stack/controller_diagrams.html", type: "Docs" },
            { title: "Betaflight PID & Gyro Frequency Filtering Masterclass", url: "https://betaflight.com/", type: "Guide" }
          ],
          checklist: [
            "Tune rate loop P and D gains on a single-axis test jig.",
            "Implement discrete PID controller with derivative filtering in C++.",
            "Analyze flight log FFT spectrum to eliminate motor harmonic noise."
          ]
        },
        {
          id: "p3-node-3",
          title: "Extended Kalman Filter (EKF2) State Estimation",
          difficulty: "Advanced",
          time: "4 Weeks",
          description: "Fusing noisy IMU, GPS, barometer, and optical flow readings into a robust 24-state vector estimate.",
          topics: [
            "Sensor Error Models: Gaussian white noise, random walk, bias drift",
            "Complementary & Madgwick Filters vs Extended Kalman Filter",
            "PX4 ECL EKF2 Architecture: 24-state vector (Position, Velocity, Attitude, IMU Bias)",
            "Handling GNSS outages, magnetometer anomalies, and optical flow fallback"
          ],
          resources: [
            { title: "PX4 ECL EKF2 Estimator Deep Dive Guide", url: "https://docs.px4.io/main/en/advanced_config/tuning_the_ecl_ekf.html", type: "Docs" },
            { title: "Kalman & Bayesian Filters in Python Open Book", url: "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python", type: "Book" }
          ],
          checklist: [
            "Write a 1D Kalman filter estimating altitude from IMU + Baro.",
            "Inspect EKF innovation test ratios in PX4 FlightReview logs.",
            "Verify EKF fallback behavior during simulated GPS loss."
          ]
        }
      ]
    },

    {
      id: "phase-4",
      number: 4,
      title: "Companion Computers & ROS 2 Autonomy",
      description: "Linux single-board computers (NVIDIA Jetson / RPi 5), ROS 2 Humble, and XRCE-DDS offboard flight.",
      color: "#3fb950",
      nodes: [
        {
          id: "p4-node-1",
          title: "Linux Companion Computers & Real-Time Kernel",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Setting up NVIDIA Jetson / Raspberry Pi 5, PREEMPT_RT kernel tuning, and high-baud serial links.",
          topics: [
            "NVIDIA Jetson Orin Nano / RPi 5 companion board setup",
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
          title: "ROS 2 Architecture & Micro-ROS Middleware",
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
          title: "PX4 ROS 2 Interface (Micro XRCE-DDS)",
          difficulty: "Required",
          time: "3 Weeks",
          description: "Interfacing PX4 directly into ROS 2 network using Micro XRCE-DDS agent for real-time offboard control.",
          topics: [
            "Micro XRCE-DDS Client (PX4 side) & Agent (SBC side)",
            "Offboard mode entry: Publishing `OffboardControlMode` & `TrajectorySetpoint`",
            "Sending Vehicle Commands: Arm, Disarm, Takeoff, Land, RTL",
            "Trajectory smoothing & velocity-based offboard control loops"
          ],
          resources: [
            { title: "PX4 ROS 2 Communication Architecture", url: "https://docs.px4.io/main/en/ros/ros2_comm.html", type: "Docs" },
            { title: "px4_ros_com & px4_msgs Repositories", url: "https://github.com/PX4/px4_ros_com", type: "GitHub" }
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
      description: "Stereo depth cameras, LiDAR point clouds, Visual-Inertial Odometry (VIO), and 3D path planning.",
      color: "#d29922",
      nodes: [
        {
          id: "p5-node-1",
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
            { title: "OpenVINS Visual-Inertial Navigation System Repository", url: "https://github.com/udel-arsg/open_vins", type: "GitHub" },
            { title: "Intel RealSense ROS 2 Wrapper Node", url: "https://github.com/IntelRealSense/realsense-ros", type: "GitHub" }
          ],
          checklist: [
            "Calibrate camera intrinsic matrix & camera-to-IMU extrinsic transform.",
            "Run VINS-Fusion on companion computer in real-time.",
            "Achieve stable indoor position hold using vision odometry."
          ]
        },
        {
          id: "p5-node-2",
          title: "3D SLAM & Volumetric Occupancy Mapping",
          difficulty: "Advanced",
          time: "4 Weeks",
          description: "Building 3D volumetric maps of unknown environments using LiDAR point clouds and stereo vision.",
          topics: [
            "LiDAR point cloud processing using Point Cloud Library (PCL)",
            "3D SLAM Algorithms: ORB-SLAM3, Cartographer, Fast-LIO2",
            "Volumetric Occupancy Grid Mapping: OctoMap & Voxblox",
            "3D Costmaps for real-time obstacle avoidance"
          ],
          resources: [
            { title: "ORB-SLAM3 Feature-Based SLAM Codebase", url: "https://github.com/UZ-SLAMLab/ORB_SLAM3", type: "GitHub" },
            { title: "OctoMap 3D Occupancy Grid Mapping Documentation", url: "https://octomap.github.io/", type: "Docs" }
          ],
          checklist: [
            "Generate 3D OctoMap grid from depth camera topics.",
            "Run Fast-LIO2 on 3D LiDAR point cloud stream.",
            "Visualize live 3D map updates inside rviz2."
          ]
        },
        {
          id: "p5-node-3",
          title: "Trajectory Generation & Obstacle Avoidance",
          difficulty: "Advanced",
          time: "4 Weeks",
          description: "Computing smooth, collision-free flight paths in real time through dense obstacle environments.",
          topics: [
            "Path Search Algorithms: A*, Dijkstra, RRT* (Rapidly-exploring Random Trees)",
            "Minimum Snap Trajectory Optimization & B-spline representations",
            "Dynamic Obstacle Avoidance: EGO-Planner and PX4 Avoidance package",
            "Safety corridor constraints & velocity feasibility checks"
          ],
          resources: [
            { title: "EGO-Planner Quadrotor Local Planner Repository", url: "https://github.com/ZJU-FAST-Lab/ego-planner", type: "GitHub" },
            { title: "PX4 Avoidance ROS 2 Node Documentation", url: "https://docs.px4.io/main/en/computer_vision/obstacle_avoidance.html", type: "Docs" }
          ],
          checklist: [
            "Deploy EGO-Planner in simulation to avoid random obstacles.",
            "Enforce velocity and acceleration polynomial bounds.",
            "Test dynamic path rerouting when obstacle enters flight corridor."
          ]
        }
      ]
    },

    {
      id: "phase-6",
      number: 6,
      title: "Simulation, Flight Testing & Regulatory Standards",
      description: "Gazebo/AirSim SITL physics simulation, telemetry log spectral analysis, and FAA Part 107 safety audits.",
      color: "#58a6ff",
      nodes: [
        {
          id: "p6-node-1",
          title: "Gazebo Harmonic & AirSim SITL Simulation",
          difficulty: "Recommended",
          time: "3 Weeks",
          description: "Simulating physics, sensors, aerodynamics, and environments before flying physical quadrotor hardware.",
          topics: [
            "PX4 SITL (Software-In-The-Loop) with Gazebo Garden / Harmonic",
            "Creating custom SDF / URDF drone models with rotor plugins & sensors",
            "Simulating sensor noise, wind gusts, and motor failures",
            "HITL (Hardware-In-The-Loop) testing with physical flight controller"
          ],
          resources: [
            { title: "PX4 Gazebo Simulation Integration Manual", url: "https://docs.px4.io/main/en/simulation/gazebo.html", type: "Docs" },
            { title: "Microsoft AirSim Drone Simulator Documentation", url: "https://microsoft.github.io/AirSim/", type: "Docs" }
          ],
          checklist: [
            "Launch multi-drone SITL simulation in Gazebo.",
            "Build custom Gazebo SDF model matching your frame.",
            "Run automated flight mission test suite in SITL."
          ]
        },
        {
          id: "p6-node-2",
          title: "Flight Log Analysis & Diagnostic Tools",
          difficulty: "Recommended",
          time: "2 Weeks",
          description: "Analyzing ULog telemetry files, evaluating FFT vibration spectrums, and diagnosing root-cause crash failures.",
          topics: [
            "PX4 FlightReview & FlightPlot ULog diagnostic tools",
            "ArduPilot Mission Planner Dataflash log inspection",
            "FFT (Fast Fourier Transform) Spectral Analysis for motor noise",
            "Reconstructing crash sequences from high-frequency telemetry logs"
          ],
          resources: [
            { title: "PX4 FlightReview Online Log Analysis Web Tool", url: "https://review.px4.io/", type: "Tool" },
            { title: "PlotJuggler Time-Series & ROS Topic Visualizer", url: "https://github.com/facontidavide/PlotJuggler", type: "GitHub" }
          ],
          checklist: [
            "Upload flight ULog file to FlightReview and inspect vibration spectrum.",
            "Configure dynamic harmonic notch filter frequencies from motor RPM.",
            "Identify cause of thrust loss in simulated motor failure log."
          ]
        },
        {
          id: "p6-node-3",
          title: "Failsafes, Safety Audits & FAA Part 107 Regulations",
          difficulty: "Required",
          time: "2 Weeks",
          description: "Configuring failsafe triggers, hardware Geofencing, Remote ID, and standard operating safety procedures.",
          topics: [
            "Failsafe Triggers: Low battery, RC loss, DataLink loss, Geofence breach",
            "Return-To-Launch (RTL) safe altitude ascent & landing logic",
            "Aviation Regulations: FAA Part 107, EASA Open Category, Remote ID broadcast modules",
            "Pre-Flight Safety Checklist & Emergency Disarm Procedures"
          ],
          resources: [
            { title: "FAA Part 107 Small Unmanned Aircraft Regulations", url: "https://www.faa.gov/uas/commercial_operators", type: "Docs" },
            { title: "OpenSemester Pre-Flight Safety Audit Checklist Template", url: "https://github.com/OpenSemester", type: "Template" }
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
      id: "res-6",
      title: "udel-arsg/open_vins",
      category: "Autonomy & AI",
      difficulty: "Advanced",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/rpng/open_vins",
      description: "Filter-based visual-inertial state estimator for high-precision GPS-denied drone positioning.",
      tags: ["VIO", "Camera", "IMU", "EKF"]
    },
    {
      id: "res-7",
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
      id: "res-8",
      title: "facontidavide/PlotJuggler",
      category: "Tools & Software",
      difficulty: "Beginner",
      type: "C++",
      langColor: "#f34b7d",
      url: "https://github.com/facontidavide/PlotJuggler",
      description: "Essential desktop application for visualizing time-series telemetry logs, ROS topics, and ULog data.",
      tags: ["Analytics", "Logging", "Visualizer"]
    }
  ]
};
