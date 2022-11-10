const container = require('./container.js');

const products = new container ("./products.json");

async function productsExe(){
    const product1 = {
        name: "Pizza",
        price: 1200,
        thumbnail: "url",
        }
    const product2 = {
        name: "Empanadas",
        price: 1500,
        thumbnail: "url",
        }
    const product3 = {
        name: "hamburgesa",
        price: 990,
        thumbnail: "url",
        }

        //await products.deleteAll();
        //await products.save(product1);
        //await products.save(product2);
        //await products.save(product3);
        await products.deleteById(25).then(a =>console.log(a))
        
    }

    productsExe()

