---
title: "Sensor Data Pipeline"
description: "Real-time ingestion and aggregation pipeline for IoT sensor readings in a university research environment."
technologies: ["Python", "MQTT", "InfluxDB", "Grafana", "Docker"]
status: "completed"
date: 2022-08-10
role: "Developer"
problem: "Research lab sensors produced high-frequency readings stored in flat files, making analysis slow and error-prone."
solution: "Implemented an MQTT-based ingestion pipeline with time-series storage and Grafana dashboards for real-time visualization."
context: "Internship project supporting environmental monitoring research with 24 sensor nodes."
challenges:
  - "Handling burst traffic during calibration events"
  - "Ensuring data integrity during network interruptions"
learnings:
  - "Time-series databases dramatically simplify sensor data workflows"
  - "Buffering at the edge prevents data loss during connectivity gaps"
results:
  - "Enabled researchers to query 30 days of data in under 2 seconds"
  - "Pipeline ran continuously for 14 months without manual intervention"
technicalDecisions:
  - "Selected InfluxDB for native time-series optimization"
  - "Used MQTT QoS 1 for balance between reliability and performance"
github: "https://github.com/alexmorgan/sensor-pipeline"
featured: false
draft: false
---

## Technical Implementation

Sensor nodes publish readings to an MQTT broker every 10 seconds. A Python consumer validates payloads, applies unit conversions, and writes to InfluxDB. Grafana dashboards provide live views and historical analysis.

Offline buffering on each node stores up to 24 hours of readings locally, replaying on reconnection to prevent gaps.
