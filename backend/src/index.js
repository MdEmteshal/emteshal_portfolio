import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import contactRouter from "./routes/contactrouter.js";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRouter);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
