import express from "express";
import dotenv from "dotenv";
import leaderboardRoutes from "./routes/leaderboard.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", leaderboardRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});