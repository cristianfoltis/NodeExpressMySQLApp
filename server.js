const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:8081",
};

// routers

const router = require('./routes/productRouter');

app.use('/api/products', router);


// middlewares

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// testing api

app.get("/", (req, res) => {
  res.json({ message: "Hello from API!" });
});


// port

const port = 3000;


// server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
