const fs = require('fs').promises



class container{
    constructor(file){
        this.file = file
    }



async save(object){
    try {
        const read = await fs.readFile(this.file, 'utf-8');
        const data = JSON.parse(read);
        let id;
        data.length === 0
            ? (id = 1)
            : (id = data[data.length - 1].id + 1);
        //console.log(data);
        const newProduct = {...object, id};
        //console.log("typeof: " + (typeof data));
        data.push(newProduct);
        console.log('Gurdado ' + `${data.length}`);
        await fs.writeFile(this.file,JSON.stringify(data, null, 2), "utf-8");
        return newProduct.id;
    } catch (error) {
        console.log(error)
    }
}
async getAll(){
    try {
        const read = await fs.readFile(this.file, 'utf-8');
        console.log(read);
        return JSON.parse(read);
    } catch (error) {
        console.log(error);
    }
}

async getById(id){
    try {
        const read = await fs.readFile(this.file, 'utf-8');
        const data = JSON.parse(read);
        const findId = data.find((p) => p.id === id);
        //console.log(read)
        return (findId)
    } catch (error) {
        console.log(error)
    }
}


async deleteById(id){
    try {
        const read = await fs.readFile(this.file, 'utf-8');
        const data = JSON.parse(read);
        const deleteId = data.filter((p) => p.id !== id);
        await fs.writeFile(this.file, JSON.stringify(deleteId, null, 2));
        console.log('product deleted')
    } catch (error) {
        console.log(error)
    }
} 

async deleteAll(){
    try {
        await fs.writeFile(this.file, JSON.stringify([], null, 2), "utf-8");
        console.log('products deleted')
    } catch (error) {
        console.log(error)
    }
}

}

module.exports=container
