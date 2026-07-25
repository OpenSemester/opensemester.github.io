# Drone Development Engineer Roadmap

> **An open-source, step-by-step master learning path from flight physics to ROS 2 autonomous systems.**

Maintainer: [OpenSemester](https://github.com/OpenSemester)  
Interactive Version: [https://opensemester.github.io/drone-engineer.html](https://opensemester.github.io/drone-engineer.html)  
License: MIT

---

## Roadmap Overview

Drone Development Engineering combines **multirotor aerodynamics**, **high-current electrical systems**, **bare-metal / RTOS embedded firmware (C/C++)**, **control loop mathematics**, **sensor fusion (EKF2)**, **onboard Linux companion computers**, **ROS 2 autonomy**, and **3D SLAM perception**.

This roadmap provides a structured 6-phase master curriculum designed for students, robotics software engineers, and hardware builders.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        DRONE DEVELOPMENT ENGINEER                       │
└─────────────────────────────────────────────────────────────────────────┘
                                     │
     ┌───────────────────────────────┴───────────────────────────────┐
     ▼                                                               ▼
┌────────────────────────────────────────┐       ┌────────────────────────────────────────┐
│ Phase 1: Fundamentals & Hardware       │       │ Phase 2: Embedded C/C++ & Firmware     │
│ • Aerodynamics & Multirotor Mechanics  │──────►│ • STM32 Peripherals & DMA Drivers      │
│ • Power Distribution & LiPo Safety     │       │ • PX4 / ArduPilot Flight Stacks        │
│ • Sensors (IMU/Mag/GNSS/Baro)          │       │ • MAVLink 2.0 Serial Protocols         │
└────────────────────────────────────────┘       └────────────────────────────────────────┘
                                     │                               │
     ┌───────────────────────────────┘                               └───────────────────────────────┐
     ▼                                                                                               ▼
┌────────────────────────────────────────┐       ┌────────────────────────────────────────┐       ┌────────────────────────────────────────┐
│ Phase 3: Control Systems & EKF Math    │       │ Phase 4: Companion Computers & ROS 2   │       │ Phase 5: Perception, CV & SLAM         │
│ • Quadrotor Equations of Motion        │──────►│ • Linux SBCs & PREEMPT_RT Kernels      │──────►│ • Visual-Inertial Odometry (VIO)     │
│ • Cascaded PID Loops & Notch Filtering │       │ • ROS 2 Humble & micro-ROS             │       │ • 3D OctoMap Volumetric SLAM           │
│ • 24-State EKF2 Sensor Fusion          │       │ • XRCE-DDS Offboard Flight Controls    │       │ • EGO-Planner Trajectory Optimization  │
└────────────────────────────────────────┘       └────────────────────────────────────────┘       └────────────────────────────────────────┘
                                                                     │
                                                                     ▼
                                                 ┌────────────────────────────────────────┐
                                                 │ Phase 6: Simulation & Flight Testing   │
                                                 │ • Gazebo SITL / AirSim Environments    │
                                                 │ • ULog Telemetry FFT Spectral Analysis │
                                                 │ • FAA Part 107 & Safety Audits         │
                                                 └────────────────────────────────────────┘
```

---

## Prerequisites

Before starting this roadmap, you should have foundational knowledge of:
- **Programming**: Basic C/C++ (pointers, memory management, data structures) and Python 3.
- **Mathematics**: Linear algebra (matrices, vector rotations), basic calculus, and differential equations.
- **Electronics**: Basic circuit analysis (Ohm's Law, PWM signals, digital communication buses).

---

## Curriculum Breakdown

### Phase 1: Fundamentals & Hardware Engineering
- **1.1 Multirotor Aerodynamics & Kinematics**
  - Center of Gravity (CG) and moment of inertia tensor calculations.
  - Propeller aerodynamics: Pitch, diameter, thrust curves, static vs dynamic efficiency ($g/W$).
  - BLDC motor mechanics: Stator sizing (e.g. 2207, 2806), KV selection, phase currents.
  - Carbon fiber frame resonance frequencies and vibration damping.
- **1.2 Power Distribution & High-Current Safety**
  - LiPo / LiFePO4 battery chemistry, discharge C-ratings, voltage drop curves, cell balancing.
  - 32-bit Electronic Speed Controllers (ESCs): MOSFET switching speeds, dead-time compensation, BLHeli_32 / AM32.
  - Power Distribution Boards (PDB) & Current Sensing: Hall-effect vs shunt resistors.
- **1.3 Sensors & Signal Acquisition**
  - MEMS 6-DOF & 9-DOF IMUs (Accelerometers, Gyroscopes - ICM-42688-P, MPU-6050).
  - Magnetometers: Hard-iron and soft-iron 3D ellipsoid compensation.
  - GNSS Receivers: NMEA 0183, UBX protocol, u-blox F9P sub-centimeter RTK positioning.
  - Optical flow sensors and Time-of-Flight (ToF) rangefinders.

### Phase 2: Embedded C/C++ & Flight Controller Firmware
- **2.1 STM32 Microcontrollers & Peripheral Bus Drivers**
  - ARM Cortex-M4 / Cortex-M7 architectures and register-level programming.
  - Peripheral communication buses: SPI DMA for IMUs, I2C for barometers, UART for telemetry, CAN FD for DroneCAN.
  - Timer interrupts and high-frequency DShot 300/600 motor signal generation.
- **2.2 PX4 Autopilot & ArduPilot Architecture**
  - Real-Time Operating Systems (NuttX / ChibiOS): Multi-threading, priority queues, work queues.
  - PX4 uORB middleware: Publish-subscribe topic pattern.
  - ArduPilot AP_HAL hardware abstraction layer and main thread execution loop.
  - Compiling custom firmware targets using CMake, Ninja, and GNU ARM toolchains.
- **2.3 MAVLink 2.0 Communication Protocol**
  - MAVLink packet framing, CRC-256 validation, payload signing.
  - Core telemetry messages: `ATTITUDE`, `GLOBAL_POSITION_INT`, `HIGHRES_IMU`.
  - Microservices: Waypoint Mission Protocol & Parameter Protocol.
  - Software SDKs: `pymavlink`, MAVSDK (C++ / Python).

### Phase 3: Control Systems & Sensor Fusion Math
- **3.1 Quadrotor Dynamics & Kinematic Frames**
  - Coordinate transformations: Body Frame (FRD/FLU) $\leftrightarrow$ Inertial Frame (NED/ENU).
  - Quaternion algebra: Multiplication, conjugation, Euler angle conversions (Roll, Pitch, Yaw).
  - Eliminating Gimbal Lock with Quaternions.
  - Newton-Euler 6-DOF non-linear equations of motion.
- **3.2 Cascaded PID Loops & Notch Filtering**
  - Cascaded loop hierarchy: Inner rate controller $\rightarrow$ Outer attitude/position controller.
  - Digital low-pass filters and RPM-guided dynamic harmonic notch filters.
  - Integrator anti-windup strategies and saturation limits.
- **3.3 Extended Kalman Filter (EKF2) State Estimation**
  - Sensor error modeling: Gaussian white noise, random walk, bias drift.
  - PX4 ECL EKF2 architecture: 24-state vector (Position, Velocity, Attitude, IMU Bias).
  - Robust handling of GNSS dropouts, compass anomalies, and optical flow fallbacks.

### Phase 4: Companion Computers & ROS 2 Autonomy
- **4.1 Linux Single Board Computers (SBCs)**
  - NVIDIA Jetson Orin Nano / Xavier & Raspberry Pi 5 setup.
  - Ubuntu Server PREEMPT_RT real-time kernel compilation.
  - High-baud serial UART links (921600+ baud) & Ethernet interfaces.
- **4.2 ROS 2 Architecture & Micro-ROS**
  - ROS 2 Humble / Jazzy nodes, publishers, subscribers, action servers, and Colcon build tool.
  - Data Distribution Service (DDS) Quality of Service (QoS) tuning for lossy links.
  - Running micro-ROS directly on Cortex-M microcontrollers.
- **4.3 PX4 ROS 2 Interface (Micro XRCE-DDS)**
  - Micro XRCE-DDS Client (PX4 side) and Micro XRCE-DDS Agent (SBC side).
  - Offboard control mode entry: `OffboardControlMode` & `TrajectorySetpoint`.
  - Vehicle commands: Arm, Disarm, Takeoff, Land, Return-to-Launch (RTL).

### Phase 5: Perception, Computer Vision & SLAM
- **5.1 Visual-Inertial Odometry (VIO)**
  - Stereo depth cameras (Intel RealSense D435i, OAK-D, ZED 2i).
  - VIO algorithms: OpenVINS, ROVIO, VINS-Fusion.
  - Feature extraction and optical flow tracking (FAST corners, KLT tracker).
- **5.2 3D SLAM & Volumetric Occupancy Mapping**
  - 3D LiDAR point cloud processing using Point Cloud Library (PCL).
  - SLAM frameworks: ORB-SLAM3, Cartographer, Fast-LIO2.
  - 3D Volumetric Mapping: OctoMap & Voxblox for 3D costmaps.
- **5.3 Trajectory Generation & Obstacle Avoidance**
  - Path search algorithms: $A^*$, Dijkstra, $RRT^*$ (Rapidly-exploring Random Trees).
  - Minimum Snap Trajectory Generation with polynomial B-spline optimizations.
  - Real-time obstacle avoidance: EGO-Planner and PX4 Avoidance package.

### Phase 6: Simulation, Flight Testing & Standards
- **6.1 Gazebo Harmonic & AirSim SITL Simulation**
  - Software-In-The-Loop (SITL) testing with Gazebo Garden / Harmonic.
  - Custom SDF / URDF robot models with rotor dynamics plugins.
  - Simulating sensor noise, wind gusts, and motor failure conditions.
- **6.2 Flight Log Analysis & Diagnostics**
  - Inspecting ULog telemetry with PX4 FlightReview and FlightPlot.
  - FFT spectral analysis for vibration troubleshooting.
- **6.3 Failsafes, Safety Audits & FAA Part 107 Regulations**
  - Hardware Geofences, Return-To-Launch logic, Remote ID modules.
  - Pre-flight 20-point safety checklist.

---

## Recommended Stack Matrix

| Category | Recommended Technologies / Libraries |
| :--- | :--- |
| **Language** | C++17 / C++20, C11, Python 3.10+ |
| **Flight Stacks** | [PX4 Autopilot](https://github.com/PX4/PX4-Autopilot), [ArduPilot](https://github.com/ArduPilot/ardupilot) |
| **GCS Software** | [QGroundControl](https://qgroundcontrol.com/) |
| **Autonomy Framework** | [ROS 2 Humble / Jazzy](https://docs.ros.org/en/humble/), [micro-ROS](https://micro.ros.org/) |
| **Middleware** | MAVLink 2.0, Micro XRCE-DDS, DroneCAN |
| **Simulation** | Gazebo Harmonic, PX4 SITL, AirSim |
| **Perception & SLAM** | OpenVINS, ORB-SLAM3, Fast-LIO2, OctoMap, EGO-Planner |
| **Companion Hardware** | NVIDIA Jetson Orin Nano, Raspberry Pi 5, Intel RealSense D435i |
| **Flight Controllers** | Pixhawk 6X / 6C, Holybro FMUv6X, STM32H7-based boards |

---

## Key Open Source Repositories

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** — Industry-standard flight stack.
- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** — Flexible open-source autopilot stack.
- **[mavlink/mavlink](https://github.com/mavlink/mavlink)** — Micro air vehicle serial communication protocol.
- **[PX4/px4_ros_com](https://github.com/PX4/px4_ros_com)** — ROS 2 offboard communication package.
- **[rpng/open_vins](https://github.com/rpng/open_vins)** — Visual-inertial navigation system.
- **[ZJU-FAST-Lab/ego-planner](https://github.com/ZJU-FAST-Lab/ego-planner)** — Gradient-based quadrotor trajectory planner.

---

## How to Track Progress

Use the interactive web application at **[https://opensemester.github.io/drone-engineer.html](https://opensemester.github.io/drone-engineer.html)** to click through roadmap nodes, view curated code repos, and mark off items on your personal milestone checklist.

---

## License

This roadmap is open-source and released under the **MIT License**. Contributions are welcome!
