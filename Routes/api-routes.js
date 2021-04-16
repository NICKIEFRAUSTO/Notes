// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
// const { v1: uuidv1 } = require("uuid");
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
    // res.sendFile(path.join(__dirname, "../db/db.json"));
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
