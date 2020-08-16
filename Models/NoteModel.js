const mongoose = require("mongoose");
const schema = mongoose.Schema;
let note = new schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Notes", note);
