module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notes-data));

    app.post('/api/notes', (req, res) => {