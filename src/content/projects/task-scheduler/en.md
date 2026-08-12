---
title: "Distributed Task Scheduler"
description: "A lightweight scheduler for coordinating background jobs across edge nodes with fault tolerance and observability."
technologies: ["Go", "Redis", "PostgreSQL", "Docker", "Prometheus"]
status: "completed"
date: 2024-11-15
role: "Lead Developer"
problem: "Edge computing deployments needed a reliable way to distribute and monitor background tasks without relying on a centralized cloud orchestrator."
solution: "Built a distributed scheduler using leader election, persistent job queues, and health-check endpoints that allow nodes to recover gracefully from failures."
context: "Developed as the capstone project for my computer engineering degree, later refined for use in a research lab environment with 8 edge nodes."
challenges:
  - "Handling split-brain scenarios during network partitions"
  - "Designing idempotent job handlers for safe retries"
  - "Balancing scheduling fairness with priority queues"
learnings:
  - "Operational simplicity often outweighs theoretical optimality in distributed systems"
  - "Clear observability from day one saves weeks of debugging later"
  - "Documenting failure modes is as important as documenting APIs"
results:
  - "Successfully processed 50,000+ jobs across test deployments"
  - "Mean recovery time after node failure reduced to under 30 seconds"
  - "Adopted as reference implementation in lab documentation"
technicalDecisions:
  - "Chose Redis for coordination due to mature pub/sub and atomic operations"
  - "Used PostgreSQL for durable job state and audit logging"
  - "Implemented heartbeat-based leader election rather than external consensus library to reduce dependencies"
github: "https://github.com/alexmorgan/task-scheduler"
featured: true
draft: false
---

## Technical Implementation

The scheduler consists of three core components: a **coordinator** responsible for leader election and job assignment, **worker nodes** that execute jobs and report status, and a **monitoring layer** exposing metrics via Prometheus.

Job submission follows a simple REST API. Each job includes a payload, priority level, and maximum retry count. Workers poll for assigned jobs, execute handlers registered at startup, and acknowledge completion or failure.

The leader election mechanism uses Redis SET NX with TTL. When the current leader's heartbeat expires, eligible nodes compete for leadership. This approach trades perfect consistency for operational simplicity suitable for the project's scale.

## Architecture Notes

Handlers are registered as Go interfaces, making the system extensible without modifying core scheduling logic. Failed jobs enter a dead-letter queue after exhausting retries, with manual replay supported through a CLI tool.
