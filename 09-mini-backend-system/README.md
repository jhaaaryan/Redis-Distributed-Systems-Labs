
---

# 09-mini-distributed-backend/README.md
```id="09-mini"
# Mini Distributed Backend System (Redis Leaderboard)

This project combines multiple Redis concepts into a simple distributed backend system.

---

## What this project covers

- Redis sorted sets (leaderboard system)
- Atomic increments
- Ranking system design
- Real-time scoring system

---

## Features

- Increment post views
- Add user score
- Get top leaderboard
- Fetch user rank

---

## Routes

### Views
- POST `/post/:id/views`

### Leaderboard
- POST `/leaderboard/score`
- GET `/leaderboard`
- GET `/leaderboard/:userId/rank`

---

## Key Learnings

- Sorted sets are powerful for ranking systems
- ZINCRBY updates scores atomically
- ZREVRANGE gives top results
- ZREVRANK gives user position
- Redis handles concurrency safely for counters

---

## Tech Stack

- Node.js
- Express
- Redis

---

## Run Project

```bash
npm install
npm run dev