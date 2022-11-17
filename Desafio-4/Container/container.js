const fs = require('fs').promises



class container{
    constructor(file){
        this.file = file
    }


/* async updatedById(id, newInfo){
    try {
        const read = await fs.readFile(this.file, 'utf-8');
        const data = JSON.parse(read);
    } catch (error) {
        
    }
} */

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

async updateById(id, newData) {
    try {
        id = Number(id);
        const read = await fs.readFile(this.file, 'utf-8');
        const parsedData = JSON.parse(read);
        const objectIdToBeUpdated = parsedData.find(
        (producto) => producto.id === id
        );
        if (objectIdToBeUpdated) {
        const index = parsedData.indexOf(objectIdToBeUpdated);
        const {name, price, thumbnail} = newData;

        parsedData[index]['name'] = name;
        parsedData[index]['price'] = price;
        parsedData[index]['thumbnail'] = thumbnail;
        await fs.writeFile(this.file,JSON.stringify(parsedData, null, 2), "utf-8");
        return true;
        } else {
        console.log(`ID ${id} does not exist`);
        return null;
        }

    } catch (error) {
        `Error Code: ${error.code} | error when trying to update the product (${id})`
    }
}

async deleteById(id){
    try {
        id = Number(id);
        const read = await fs.readFile(this.file, 'utf-8');
        const data = JSON.parse(read);
        const dataIdToRemove = data.find((p) => p.id === id);
        
        if(dataIdToRemove){
            const index = data.indexOf(dataIdToRemove);
                data.splice(index, 1);
                await fs.writeFile(this.file,JSON.stringify(data, null, 2), "utf-8");
                return true;
        } else{
            return null
        }
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
