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
    console.log("Data saved to data.json");
  });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
