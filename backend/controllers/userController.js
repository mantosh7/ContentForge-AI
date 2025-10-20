import sql from "../configs/db.js";

export const getUserCreations = async (req, res) => {
    try {
        const { userId } = req.body;
        const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;
        return res.ststus(201).json({ success: true, creations });

    } catch (error) {
        res.status(500).json({ success: false, message: error.response?.data || error.message });
    }
}