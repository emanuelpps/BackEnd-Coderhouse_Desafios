class Usuario{
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros ={};
        this.mascotas = [];

    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    };
    
    addMascota (mascota){
        return this.mascotas.push(mascota);
    };
    
    countMascota (){
        return this.mascotas.length;
    };
    
    addBook(libro, autor){
            this.libros.libro = libro,
            this.libros.autor = autor
            return this.libros;
    };
    
    getBookNames(){
        for(let libro in this.libros){
            if(this.libros.hasOwnProperty(libro)){
                return this.libros[libro]
            }
        }
}
}

const usuario1 = new Usuario(
    'Emanuel',
    'pages',
    'historia de roma',
    'perro'
)


console.log(usuario1.getFullName())
console.log(usuario1.addMascota('gato'))
console.log(usuario1.addMascota('perro'))
console.log(usuario1.addMascota('elefante'))
console.log(usuario1.countMascota())
console.log(usuario1.addBook('historia de roma','Jose'))
console.log(usuario1.getBookNames())
