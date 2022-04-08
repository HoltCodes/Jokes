const express = require("express");
const app = express();
const port = 8000;

require("./Server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true}));

const JokesRoutes = require("./Server/routes/jokes.routes");

app.listen(port, () => console.log(`Express running on port ${port}`));