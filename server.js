const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// imported routes
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

// express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
app.use(cors());

// mongoose setup
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ecommerse",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}`);
});
