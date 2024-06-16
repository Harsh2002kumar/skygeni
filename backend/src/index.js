// backend/src/index.ts
import express from "express";
import dataRoutes from "./routes/dataRoutes.js";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from frontend server
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use("/api/data", dataRoutes);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
