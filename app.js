const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const app = express();

const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/orders");

app.use(express.json());

app.use(helmet());

mongoose.set("sanitizeFilter", true);

//routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.json({ message: "Orizon" });
});

app.get("*", (req, res) => {
  res.json({ message: "not found" });
});

module.exports = app;
