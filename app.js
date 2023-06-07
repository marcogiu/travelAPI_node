const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const app = express();

const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/orders");

// per avere risposte in json
app.use(express.json());

// helmet per la sicurezza dell'indirizzo http
app.use(helmet());

//routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// on http://localhost:3000/ ottengo questo messaggio iniziale
app.get("/", (req, res) => {
  res.json({ message: "Orizon" });
});

// errore
app.get("*", (req, res) => {
  res.json({ message: "not found" });
});

module.exports = app;
