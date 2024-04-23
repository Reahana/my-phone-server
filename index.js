const express = require('express')
const phones = require('./phones.json');
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/',(req,res)=>{
    res.send('My phone data')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    console.log(id);
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`my phone server is running on port ${port}`);
})