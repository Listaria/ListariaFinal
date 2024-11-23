import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import favicon from "serve-favicon";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// App Config
const app = express();
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*", // Replace with your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Include cookies in the requests if needed
  })
);
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Listaria backend working");
});

app.listen(port, () => {
  console.log("server is listening on port 4000...");
});
// Export app for serverless environments
export default app;
