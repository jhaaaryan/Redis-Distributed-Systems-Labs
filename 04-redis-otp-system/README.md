
---

# 04-job-queues-workers/README.md
```id="04-queue"
# Redis Queue System (OTP Processing Simulation)

This project demonstrates a basic queue system using Redis lists for background-like processing workflows.

---

## What this project covers

- Redis list operations (LPUSH / RPOP)
- Simple job queue simulation
- OTP generation and verification flow
- TTL-based temporary data handling

---

## Features

- Generate OTP for phone number
- Store OTP in Redis with expiration
- Verify OTP
- Automatically delete OTP after verification
- Check remaining TTL

---

## Routes

### OTP Flow
- POST `/otp` → generate and store OTP (30 sec expiry)
- POST `/otp/verify` → validate OTP
- GET `/otp/:phone/ttl` → check remaining TTL

---

## Key Learnings

- Redis is commonly used for temporary sensitive data
- TTL ensures automatic cleanup of expired data
- Redis can act as a lightweight queue system
- Atomic operations help avoid inconsistent state

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