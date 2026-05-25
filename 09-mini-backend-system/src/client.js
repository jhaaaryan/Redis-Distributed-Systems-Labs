import { createClient } from "redis";

const Client = createClient({
    url: process.env.REDIS_URL
});

Client.on("error", (err) => {
    console.log("Redis Client Error", err);
});

await Client.connect();

console.log("Redis Connected");

export default Client;