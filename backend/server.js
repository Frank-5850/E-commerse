const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

// imported routes
const authRoutes = require("./routes/authRoutes");

// express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose setup
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ecommerse",
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

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}`);
});
