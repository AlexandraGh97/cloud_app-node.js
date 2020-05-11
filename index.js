const express = require("express")

const app = express()
var path = require('path');
app.use('/',express.static('frontend')) 

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/frontend' + '/govData.html')
    
})

app.use(express.json())
app.use(express.urlencoded())
app.listen(process.env.PORT||8080)
