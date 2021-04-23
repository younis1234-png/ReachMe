const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = 1111;
const { MONGOURL } = require("./keys");
const cors = require("cors");
app.use(cors());

require("./models/post");
require("./models/user");

//CONNECT TO MONGODB
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (error) => {
  console.log("error connecting", error);
});

// OUR ROUTES
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

app.get("/", (req, res) => {
  console.log("home");
  res.send("hello user");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
