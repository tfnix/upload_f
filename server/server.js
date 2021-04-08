const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/upload', (req, res) => {
  res.send('Got a GET request')
})

app.post('/upload', function (req, res) {
    res.send('Got a POST upload request')
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/*
CORS related. Check it more  
https://stackoverflow.com/questions/49132636/post-request-axios-network-error/49133708

*/