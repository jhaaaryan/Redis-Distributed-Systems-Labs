# Redis Fundamentals

These notes are based on my understanding of how Redis is used in backend systems.

The focus is on system behavior rather than just commands.

---

# Why Redis exists

In backend systems, databases can become slow when the same data is requested repeatedly.

Instead of hitting the database every time, Redis is used to store frequently accessed data in memory.

Since memory is much faster than disk, response time improves significantly.

---

# Where Redis fits

Typical flow:

```txt
Client → Backend → Redis → Database
```

In most systems:

- Redis is checked first
- if data is present, it is returned immediately
- if not, database is queried
- result is stored back in Redis

This pattern is usually used to reduce repeated database reads.

---

# Cache hit vs cache miss

## Cache hit
Data exists in Redis → fast response

## Cache miss
Data not in Redis → fetch from database → store in Redis → return response

---

# Why caching is needed

Caching is usually introduced when:

- database load increases
- same queries are executed repeatedly
- API response time starts degrading
- traffic spikes create uneven load

Instead of scaling database immediately, caching is often used as the first optimization step.

---

# Common use cases I noticed

- API response caching
- session storage for authentication
- OTP storage with TTL
- simple rate limiting
- background job queues

These are mostly cases where data is either temporary or frequently accessed.

---

# TTL (important concept)

Redis allows keys to expire automatically after a fixed time.

This is useful for:

- OTPs
- sessions
- temporary cache data

It avoids manual cleanup and ensures data does not stay longer than needed.

---

# Basic data modeling idea

Redis keys are usually structured in a way that makes them easy to understand:

```txt
user:1001
session:user_1001
otp:+919999999999
product:all
```

This helps avoid collisions and makes debugging easier.

---

# Important tradeoffs

While Redis improves performance, it also introduces complexity:

- data can become stale if not invalidated properly
- memory usage can grow quickly
- cache consistency becomes a problem
- debugging issues becomes harder in distributed systems

So it is not something to use blindly everywhere.

---

# What I learned overall

Redis is less about being a tool and more about a design decision.

It is used to improve performance in read-heavy systems, but it needs careful handling around consistency and memory.
