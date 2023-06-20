const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/ui.html');
  });
  


app.post("/submit-data", (req, res) => {
  const data = req.body;
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    const { PythonShell } = require('python-shell');
    console.log("shell")
    PythonShell.run('client.py', null, function (err) {
    if (err){throw err}else{console.log('Python script executed successfully.');}
});

  });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
