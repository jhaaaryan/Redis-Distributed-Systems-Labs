# Redis Caching Patterns (Labs)

This project demonstrates basic caching patterns using Redis with Node.js. The goal is to understand how Redis acts as a fast in-memory layer between API and database systems.

---

## What this project covers

- Basic Redis read/write operations
- JSON vs Hash storage patterns
- Understanding cache-aside style thinking (conceptually)
- Working with Redis as a fast data store

---

## Routes Implemented

### JSON Storage
- POST `/user/:id/json` → store JSON string in Redis
- GET `/user/:id/json` → retrieve and parse JSON

### Hash Storage
- POST `/user/:id/hash` → store structured fields in Redis hash
- GET `/user/:id/hash` → retrieve full hash object

---

## Key Learnings

- Redis can store both structured and unstructured data
- Hashes are more efficient for field-based updates
- JSON is simpler but less flexible for partial updates
- Redis reduces database load by serving frequent reads faster

---

## Tech Stack

- Node.js
- Express
- Redis (ioredis)

---

## Run Project

```bash
npm install
npm start