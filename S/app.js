const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const PORT = 5000;
//xi7e28l7YTvpMeSV
const { MONGOURI } = require("./keys");

// connection is being established
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connects to the database");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => {
  console.log("That server is running on", PORT);
});
