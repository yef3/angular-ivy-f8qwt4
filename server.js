var express = require('express');
var app = express();
var http = require('http').Server(app);
const path = require('path');

app.use(express.static(path.join(__dirname, './lab4/dist/lab4')));

app.get('/api', (req, res) => {
  res.json({T: 'lll'})
})

http.listen(3000, () => {
  // console.trace()
  console.log("listen on port: 3000")
})