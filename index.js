const express = require("express");
const connectDB = require("./database/db");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors({
    origin: "https://fullstack-frontend.vercel.app", 
    methods: ["GET","POST","PUT","DELETE"]
}));

const bookRoute = require("./routes/bookroutes");
app.use("/api/books", bookRoute);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
