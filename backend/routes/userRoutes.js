import express from "express" ;
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { getUserCreations } from "../controllers/userController.js";

const router = express.Router() ;

router.post("/get-user-creations", authenticateToken, getUserCreations) ;

export default router ;