import Client from "../client.js";


// 1. Increment Views
export const incrementViews = async (req, res) => {

    try {

        const { id } = req.params;

        const views = await Client.incr(`post:${id}:views`);

        res.json({
            success: true,
            views
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};


// 2. Add Score
export const addScore = async (req, res) => {

    try {

        const { userId, score } = req.body;

        const updatedScore = await Client.zIncrBy(
            "leaderboard",
            score,
            userId
        );

        res.json({
            success: true,
            updatedScore
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};


// 3. Get Leaderboard
export const getLeaderboard = async (req, res) => {

    try {

        const leaderboard = await Client.zRange(
            "leaderboard",
            0,
            9,
            {
                REV: true,
                WITHSCORES: true
            }
        );

        res.json({
            success: true,
            leaderboard
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};


// 4. Get User Rank
export const getUserRank = async (req, res) => {

    try {

        const { userId } = req.params;

        const rank = await Client.zRevRank(
            "leaderboard",
            userId
        );

        res.json({
            success: true,
            rank: rank !== null ? rank + 1 : "User not found"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};