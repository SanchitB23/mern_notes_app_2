const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/NoteRoute");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(cors());
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern_notes_app_2_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("connection successfull with mern_notes_app_2_db");
});
mongoose.connection.on("error", () => {
  console.log("error connecting on database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
