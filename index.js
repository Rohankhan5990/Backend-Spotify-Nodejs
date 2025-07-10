console.log("Starting the server...");
require("dotenv").config();
require("./config/connection");
const express = require("express");
const userRoutes = require("./routes/user_routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/users", userRoutes);
app.use("/api/spotify", userRoutes);

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});

module.exports = app;
