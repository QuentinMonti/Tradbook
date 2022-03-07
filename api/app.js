const express  = require("express");
const fs = require('fs');
const app = express();
const port = 8000;

const JSON_FILE = './data/translations.json'
const Word = require('./models/word')


var axios = require("axios").default;

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
  // let date = new Date()
  let word = {};

  switch (req.body.langue) {
    case "fr":
      word = { "date": 1599552000, "en": req.body.newWord, "fr": req.body.wordTranslate, "description": req.body.description };
      break;
    case "en":
      word = { "date": 1599552000, "en": req.body.wordTranslate, "fr": req.body.newWord, "description": req.body.description };
      break;
  }
 
  fs.readFile(JSON_FILE, function (err, data) {
    var json = JSON.parse(data)
    json.push(word)

    fs.writeFile(JSON_FILE, JSON.stringify(json, null, 2), function(err, result) {
      if(err) console.log('error', err);
    }); 
  })

  // res.send("Mot ajoutée");
});

// add new expressions to a json file
app.post("/addExpression", (req, res) => {
  let word = { "date": 1599552000, "en": "match", "fr": req.body.newExpression, "description": req.body.description };

  fs.readFile(JSON_FILE, function (err, data) {
    var json = JSON.parse(data)
    json.push(word)

    fs.writeFile(JSON_FILE, JSON.stringify(json, null, 2), function(err, result) {
      if(err) console.log('error', err);
    }); 
  })

  res.send("Expression ajoutée");
});

// define a word in english
app.get("/definition/fr", (req, res) => {
  let data = fs.readFileSync(JSON_FILE);
  let allWord = JSON.parse(data);
  
  allWord.forEach(currentWord => {
    if (req.query.word === currentWord.fr) {
      res.send(currentWord.en);
    }
  });
  res.send("le mot n'est pas dans notre liste")
});

// define a word in french
app.get("/definition/en", (req, res) => {
  let data = fs.readFileSync(JSON_FILE);
  let allWord = JSON.parse(data);
  
  allWord.forEach(currentWord => {
    if (req.query.word === currentWord.en) {
      res.send(currentWord.fr);
    }
  });
  res.send("the word is'nt in our list")

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
