require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(express.json());

// Use routes
app.use("/api", eventRoutes);

// Sync models
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing models:", error);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
