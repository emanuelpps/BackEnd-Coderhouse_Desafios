const express = require('express');
const Container = require('./Container/container.js');

const app = express();
const Port = 8080;
const data = new Container ("./Container/products.json")

app.get('/products', async (req,res) =>{
    const loadProducts = await data.getAll();
    //console.log(loadProducts)

    res.send({Products: loadProducts})
})

app.get('/random', async (req, res) =>{
    const loadProducts = await data.getAll();
    const randomProduct = parseInt(Math.random() * loadProducts.length)
    res.send(loadProducts[randomProduct])
})

const server = app.listen(Port, () =>{
    console.log(`escuchando en puerto ${Port}`)
})