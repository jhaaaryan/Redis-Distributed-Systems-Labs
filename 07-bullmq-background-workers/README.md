
---

# 07-distributed-locks/README.md
```id="07-locks"
# Redis Distributed Job Queue (BullMQ Worker System)

This project demonstrates a real queue system using BullMQ over Redis.

---

## What this project covers

- Job queues using BullMQ
- Worker processing system
- Retry and backoff strategies
- Distributed task handling concept

---

## Features

- Add email job with retry logic
- Worker processes queued jobs
- Automatic retry on failure
- Backoff strategy for stability

---

## Components

### API
- Adds jobs to queue

### Worker
- Processes jobs asynchronously
- Logs job lifecycle events

---

## Key Learnings

- Real queues are built using libraries like BullMQ
- Redis acts as message broker
- Workers handle async processing
- Retry logic improves system reliability

---

## Tech Stack

- Node.js
- Express
- BullMQ
- Redis

---

## Run Project

```bash
npm install
npm run start