const express = require("express")

const app = express()

app.use('/',express.static('frontend')) 

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/frontend' + '/govData.html')
})


process.setMaxListeners(0);
app.use(express.json())
app.use(express.urlencoded())
app.listen(process.env.PORT||8080)
