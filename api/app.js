const { response } = require("express");
const express  = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const port = 8000;

const JSON_FILE = './data/translations.json'

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get all register words
app.get("/getWords", (req, res) => {
  let data = fs.readFileSync(JSON_FILE);
  let word = JSON.parse(data);
  // console.log(word);
  res.send(word);
});

// add new expressions to a json file
app.post("/addWord", (req, res) => {
  let date = new Date()
  let word = { "date": 1599552000, "en": "match", "fr": req.body.newWord };

  fs.readFile(JSON_FILE, function (err, data) {
    var json = JSON.parse(data)
    json.push(word)

    fs.writeFile(JSON_FILE, JSON.stringify(json, null, 2), function(err, result) {
      if(err) console.log('error', err);
    }); 
  })

  res.send("Mot ajoutée");
});

// add new expressions to a json file
app.post("/addExpression", (req, res) => {
  let word = { "date": 1599552000, "en": "match", "fr": req.body.newExpression };

  fs.readFile(JSON_FILE, function (err, data) {
    var json = JSON.parse(data)
    json.push(word)

    fs.writeFile(JSON_FILE, JSON.stringify(json, null, 2), function(err, result) {
      if(err) console.log('error', err);
    }); 
  })

  res.send("Expression ajoutée");
});

// define a word
app.get("/definition", (req, res) => {

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
