
---

# 06-session-management/README.md
```id="06-session"
# Redis Queue System (Email Job Simulation)

This project simulates a simple email queue using Redis lists.

---

## What this project covers

- Redis list-based queue system
- Job enqueueing and dequeueing
- Basic worker simulation pattern
- Simple background task processing

---

## Features

- Add email job to queue
- Process one email job at a time
- FIFO queue behavior

---

## Routes

- POST `/email` → add job to queue
- GET `/emails/process-one` → process single job

---

## Key Learnings

- Redis lists can act as simple queues
- LPUSH + RPOP gives FIFO behavior
- Useful for background task simulation
- Real-world systems use workers instead of manual endpoints

---

## Tech Stack

- Node.js
- Express
- Redis

---

## Run Project

```bash
npm install
npm start