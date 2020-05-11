const express = require("express")

const app = express()
app.use('/',express.static('frontend')) 

app.get('/',(req,res) => {
  res.sendFile('/home/ubuntu/environment/cloud_app-node.js/frontend/govData.html')
    
})

app.use(express.json())
app.use(express.urlencoded())
app.listen(process.env.PORT||8080)
