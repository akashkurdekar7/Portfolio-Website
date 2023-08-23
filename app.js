// this start the website in a port

// const express =require('express');

// const app = express();

// app.use(express.static('public'));
// app.listen(3000,()=>{
//     console.log("website listening on port 3000 ");
// })

// if we change the directory it wont start so make it available 

const express = require('express')
const path = require('path')
const app = express();

// app.get('/root', (req,res)=>{
//     res.json('hiiiii')
// })

app.use('/portfolio', express.static(path.join(__dirname, '/public')));

app.use((req, res)=>{
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>');
})

app.listen(3000,()=>{
    console.log("website listening on port 3000 ")
})

