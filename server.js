const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// Iniciando app
const app = express();

// Iniciando DB
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", require("./src/routes/router"));

app.listen(3001);
