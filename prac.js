'use strict'
const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());

app.get('/',(req,res) => {
    console.log(req.query);
    res.json({name:'nisha'});
});
app.get('/quotes',(req,res) => {
res.end('Hello Nisha');
});
app.post('/quotes',(req,res) => {
    console.log(req.body); 
    const {name,value}=req.body;
    console.log(name,value);    
    res.end('This is post req');
});
app.put('/quotes/:id',(req,res) => {
    console.log(req.params);
    const {id} = req.params;
    console.log(id);
    res.end('hello');
});
// app.delete('/quotes',(req,res) => {
//     console.log(req.body);
//      const {value}=req.body;
//      console.log(value);
//      res.end('delete query parameter');
// });
app.listen(4000,() => {
    console.log('listening on 4000')
});