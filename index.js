const express = require("express");
const connectDB = require("./database/db");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(express.json());
<<<<<<< HEAD
=======
app.use(cors({
   origin: "https://fullstack-frontent.vercel.app", 
    methods: ["GET","POST","PUT","DELETE"]
}));
>>>>>>> origin/main

// ✅ CORS setup (correct your domain spelling)
app.use(
  cors({
    origin: "https://fullstack-frontent.vercel.app", // ✅ your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // only if you use cookies or auth
  })
);

// ✅ Serve images from the "uploads" folder
// This line allows frontend to access images at: http://localhost:5004/uploads/filename.jpg
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
const bookRoute = require("./routes/bookroutes");
app.use("/api/books", bookRoute);

// ✅ Default route (optional)
app.get("/", (req, res) => {
  res.send("📚 Bookstore API is running...");
});

// ✅ Start the server
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
