
---

# 05-rate-limiting/README.md
```id="05-rate"
# Redis Data Structures Practice (Not Rate Limiting)

Despite the folder name, this project focuses on understanding Redis data structures like JSON and Hash storage.

---

## What this project actually demonstrates

- Redis JSON-style storage
- Redis Hash storage
- Data retrieval patterns
- Structuring user data in Redis

---

## Features

- Store user data as JSON string
- Store user data as Redis hash
- Retrieve structured user data
- Compare JSON vs Hash approaches

---

## Routes

### JSON
- POST `/user/:id/json`
- GET `/user/:id/json`

### Hash
- POST `/user/:id/hash`
- GET `/user/:id/hash`

---

## Key Learnings

- Redis supports multiple modeling approaches
- Hashes are better for field-level updates
- JSON is simpler but less flexible
- Choosing structure depends on use case

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