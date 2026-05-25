
---

# 03-pubsub-messaging/README.md
```id="03-pubsub"
# Redis Pub/Sub Messaging

This project demonstrates a simple real-time messaging system using Redis Pub/Sub patterns.

---

## What this project covers

- Redis key-value operations
- Basic Pub/Sub concept (lightweight real-time updates simulation)
- Shared state handling using Redis
- Basic notification system design

---

## Features

- Store banner message
- Retrieve banner message
- Delete banner message
- Check banner existence

---

## Routes

- POST `/banner` → set banner message
- GET `/banner` → get banner message
- DELETE `/banner` → remove banner
- GET `/banner/exists` → check if banner exists

---

## Key Learnings

- Redis is useful for shared application state
- Simple Pub/Sub-style systems can be built easily
- Redis is often used for real-time UI updates and notifications
- Key existence checks are important for state validation

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