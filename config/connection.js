const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const url = process.env.DATABASE;

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
})
.then(() => {
  console.log("Database connected successfully");
})
.catch((err) => {
  console.error("Database connection failed", err);
});


mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});


mongoose.connection.once("open", () => {
  console.log("MongoDB connection is open");
});

module.exports = mongoose;
