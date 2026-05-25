# Redis Backend Systems Playground

This repository contains my hands-on implementations of Redis-based backend systems while learning distributed system concepts through practical coding.

The focus of this project is not just Redis commands, but understanding how Redis is used inside real backend architectures.

---

## What This Repository Covers

- Caching patterns and in-memory optimization
- Pub/Sub based messaging systems
- Queue-based background processing
- Basic rate limiting concepts
- Session and temporary data handling
- Distributed system primitives (locks, streams concepts)
- A mini backend system combining multiple Redis features

---

## Tech Stack

- Node.js
- Express.js
- Redis
- MongoDB (basic integration in some modules)
- Docker & Docker Compose

---

## What I Learned

Through these labs, I explored:

- How Redis improves backend performance by reducing database load
- Why queues are essential for background processing
- How rate limiting protects APIs in real systems
- How distributed systems handle concurrency and shared state
- Difference between Pub/Sub and more advanced streaming models
- How multiple Redis patterns combine in real-world architectures

---

## Project Structure

This repo is organized into independent learning modules:

- 01 — Redis fundamentals notes
- 02 — Caching patterns
- 03 — Pub/Sub messaging
- 04 — Queue-based systems
- 05 — Data modeling experiments
- 06 — Session handling patterns
- 07 — Distributed locks (BullMQ-based queue system)
- 08 — Redis Pub/Sub real-time messaging
- 09 — Mini distributed backend (leaderboard system)

---

## Important Note

These projects are focused on backend engineering experiments built to understand Redis-driven distributed system patterns such as caching, queues, rate limiting, Pub/Sub messaging, and concurrency control.

They are not production-ready systems, but they are designed to build strong intuition around distributed backend design.

---

## How to Run

```bash
docker-compose up -d
npm install
npm start
