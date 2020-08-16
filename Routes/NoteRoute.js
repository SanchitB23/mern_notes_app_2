const express = require("express");
const router = express.Router();
const note = require("../Models/NoteModel");

router.get("/", (req, res) => {
  note.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/add", (req, res) => {
  let notestemp = new note(req.body);
  notestemp
    .save()
    .then((result) => {
      res.status(200).json({ msg: "saved successffully" });
    })
    .catch((err) => {
      res.status(404).json({ msg: "not saved succeffully" });
    });
});

router.delete("/delete/:id", (req, res) => {
  note
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ msg: "delete succeffully" });
    })
    .catch((err) => {
      res.status(400).json({ msg: "error while deleting" });
    });
});

module.exports = router;
