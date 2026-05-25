import express from "express";

import {
    incrementViews,
    addScore,
    getLeaderboard,
    getUserRank,
} from "../controllers/leaderboard.controller.js";

const router = express.Router();

router.post("/posts/:id/view", incrementViews);

router.post("/leaderboard/score", addScore);

router.get("/leaderboard", getLeaderboard);

router.get("/leaderboard/:userId/rank", getUserRank);

export default router;