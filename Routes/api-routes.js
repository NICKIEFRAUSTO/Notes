// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
// const { v1: uuidv1 } = require("uuid");
const path = require("path");
const notesArray = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../db/db.json"))
  );

  app.post("/api/notes", (req, res) => {
    // uuidv4();
    const saveNote = req.body;
    let newNote = {
      title: saveNote.title,
      text: saveNote.text,
      id: "1",
    };
    console.log(saveNote);
    // res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.delete("/api/notes/:id", (req, res) => {
    // const deleteNoteId = req.params.id;
    // console.log(id);
    // filter((note) => note.id != deleteNoteId);
  });
};
