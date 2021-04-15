// * `GET /notes` should return the `notes.html` file.
// * `GET *` should return the `index.html` file.
module.exports = (app) => {
  app.get("/", (req, res) => res.json(`index.html`));
  app.get("/api/notes", (req, res) => res.json(`notes.html`));
};
