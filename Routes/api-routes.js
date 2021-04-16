const path = require("path");
let notesArray = require("../db/db.json");
const fs = require("fs");

let uniqid = require("uniqid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../db/db.json"))
  );

  app.post("/api/notes", (req, res) => {
    // uuidv4();
    const saveNote = req.body;
    let newID = uniqid();
    let newNote = {
      title: saveNote.title,
      text: saveNote.text,
      id: newID,
    };

    console.log(saveNote);
    notesArray.push(newNote);

    writeToFile();
    res.json(notesArray);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let deleteNoteId = req.params.id;
    console.log(deleteNoteId);
    notesArray = notesArray.filter((note) => note.id != deleteNoteId);

    writeToFile();
    res.json(notesArray);
  });
};

function writeToFile() {
  const fileName = "./db/db.json";
  let fileString = JSON.stringify(notesArray);

  fs.writeFile(fileName, fileString, (err) =>
    err ? console.log(err) : console.log("Updating db.json...")
  );
}
