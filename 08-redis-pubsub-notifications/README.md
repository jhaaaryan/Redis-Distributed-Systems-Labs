
---

# 08-redis-streams/README.md
```id="08-streams"
# Redis Pub/Sub Notification System

This project demonstrates real-time messaging using Redis Pub/Sub.

---

## What this project covers

- Redis Pub/Sub system
- Publisher-subscriber architecture
- Real-time event broadcasting
- Multi-process communication

---

## Features

- Publish notifications
- Subscribe to notification channel
- Receive real-time messages
- Multi-client support

---

## Components

### API Server
- Publishes messages

### Subscriber
- Listens to channel
- Logs incoming messages

---

## Key Learnings

- Pub/Sub is used for real-time communication
- Subscribers only receive live messages
- Useful for notifications and live updates
- Lightweight alternative to message brokers

---

## Tech Stack

- Node.js
- Express
- Redis

---

## Run Project

API:
```bash
npm run api