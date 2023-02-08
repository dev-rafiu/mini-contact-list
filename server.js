const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const notFound = require("./middleware/notFound");
const contactControllers = require("./routes/controllers");
const connectDB = require("./db/connect");

const app = express();

const cors = require("cors");
app.use(cors({ methods: ["GET", "POST", "PATCH", "DELETE"] }));

const PORT = process.env.PORT || 5001;
const URL = process.env.MONGO_URI;

app.use(express.json());
app.use("/api/contacts", contactControllers);

// 404 not found
app.use(notFound);

const start = async () => {
  try {
    await connectDB(URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
