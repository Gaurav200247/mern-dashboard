require("express-async-errors");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}

const express = require("express");
const router = require("./Routers/router");
const connectDB = require("./DB/connectDB");
const app = express();

const cors = require("cors");

app.use(cors());

app.use("/api/data", router);

app.get("/", (req, res) => {
  res.send("Welcome To My App");
});

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}... at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

// app start
start();
