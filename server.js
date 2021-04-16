const express = require("express");

const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3000;
// const { v1: uuidv1 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
