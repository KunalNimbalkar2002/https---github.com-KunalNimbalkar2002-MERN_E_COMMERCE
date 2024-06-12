const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());

//Route imports
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

//Middleware for erors
app.use(errorMiddleware);
app.use(cookieParser());
app.use(cors());

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoutes);

module.exports = app;