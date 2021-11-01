require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

// this is my db connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,

}).then(() => {
    console.log("DB CONNECTED");
});

// this is my middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

// this is port
const port = process.env.PORT || 8000;


// starting a server
app.listen(port,() => {
    console.log(`app is running at ${port}`);
});