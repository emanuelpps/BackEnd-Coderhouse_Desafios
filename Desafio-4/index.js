const express = require('express');
const Container = require('./Container/container.js');
//const btnScripts = require('../Desafio-4/scripts/btnScripts');
const { Router } = express;

const app = express();
const router = new Router();
const productsRouter = new Router();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const Port = 8080;




const data = new Container ("./Container/products.json");




router.get('/products', async (req,res) =>{
    const loadProducts = await data.getAll();
    //console.log(loadProducts)

    //res.send({Products: loadProducts});

    loadProducts
    ? res.status(200).json(loadProducts)
    : res.status(404).json({error: 'Productos no encontrados'});
});


router.get('/products/:id', async (req, res) =>{
    const id = req.params.id
    const loadProduct = await data.getById(parseInt(id));
    
    loadProduct
    ? res.status(200).json(loadProduct)
    : res.status(404).json({error: 'Producto no encontrados'});

});


router.post('/products', async (req, res) =>{
    const { body } = req;
    const saveProduct = await data.save(body);
    res.status(200).send(`Producto Guardado correctamente, ID: ${saveProduct}`);
});


router.put('/products/:id', async (req, res) =>{
    const { id } = req.params;
    const { body } = req;
    const updated = await data.updateById(id, body);
    updated
        ? res.status(200).send(`Producto Numero ${id} actualizado`)
        : res.status(404).send(`No se encontro ningun producto con Numero ${id}`)
});


router.delete('/products/:id', async(req, res) =>{
    const {id}  = req.params;
    const wasDeleted = await data.deleteById(id);
    

    wasDeleted
        ? res.status(200).send(`El producto Numero ${id} fue borrado`)
        : res.status(404).send(`El producto no fue borrado por que no fue encontrado`);


/*  const idNumber = req.body.id;

    const searchId = data.findIndex((a) => a.id === idNumber);
    if(searchId == idNumber){
    const deleteProduct = await data.deleteById(idNumber)}
    res.send('Producto borrado') */
});



app.use('/api', router);
//app.use('/api/products', productsRouter);

app.listen(8080, ()=>{
    console.log('Server Listen');
});

