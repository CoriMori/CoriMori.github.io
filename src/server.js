console.log("server starting...");

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(`${__dirname} /..`)));
app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname} /../client/index.html`));
});
app.listen(3000);