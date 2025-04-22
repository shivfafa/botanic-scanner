const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

// Database connection
require("./db/conn");

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const userController = require("./controller/user");

app.post("/register", userController.register);
app.post("/login", userController.login);
app.post("/otp", userController.otp);
app.post("/submitotp", userController.submitotp);

// Server listening
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
