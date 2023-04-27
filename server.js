const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();

dotenv.config();
app.use(express.json());
app.use("*", cors());

app.get("/", (req, res) => {
	res.send("Backend Server is running.. ");
});

app.use("/user", proxy("http://localhost:5002"));
app.use("/product", proxy("http://localhost:5001"));
app.use('feedback', proxy('http://localhost:5003'));
app.use("/cart", proxy("http://localhost:5004"));
app.use("/order", proxy("http://localhost:5005"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
