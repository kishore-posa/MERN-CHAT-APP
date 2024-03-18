const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();
connectDB();
app.use(bodyParser.json());

app.use("/api/user", userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server started successfully on PORT ${port}`));
