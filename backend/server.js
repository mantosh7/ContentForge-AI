import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { createUsersTable } from "./models/userModel.js";

dotenv.config(); 

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is live...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)

  try {
    await createUsersTable(); 
    console.log("Users table checked/created successfully");
  } catch (err) {
    console.error("Error creating users table:", err);
  }
});
