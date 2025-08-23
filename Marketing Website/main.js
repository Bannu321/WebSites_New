const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const process = require("./routes/Process/process");
const home = require("./routes/Home/Home");

// ...

const publicPath = path.join(__dirname, "public");
app.use("/process", process);
app.use("/Home", home);



app.use('/script.js', (req, res, next) => {
    const referer = req.get('Referer');
    if (referer && referer.includes('http://localhost:3000')) {
        next();
    } else {
        res.status(404).send('File not Found');
    }
});

app.use('/style.css', (req, res, next) => {
    const referer = req.get('Referer');
    if (referer && referer.includes('http://localhost:3000')) {
        next();
    } else {
        res.status(404).send('File not Found');
    }
});



app.use(express.static("public"));
// app.use(express.static("templates/Assets"));

app.get("/", (req, res) => {
  // res.sendFile("/templates/index.html", { root: __dirname });
  res.redirect(home)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
