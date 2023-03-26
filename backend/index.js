const express = require("express");
const mongoose = require("mongoose");

const productRouter = require('./routes/product');

const app = express();

const mongoURL = "mongodb+srv://banerjee:MongoArijit1@cluster0.ii3fvro.mongodb.net/e_commerce?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Mondodb Connection Error"));

db.once('open', () => {
    console.log("Connected to database successfully")
});

app.use('express.json()');
app.use(productRouter);

app.listen(5000, '0.0.0.0', () => {
    console.log("Server started at port 5000");
});