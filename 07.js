// unir 2 objetos o mas 

const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

const cliente = {
    make:"Linda",
    premiun: "True"
};

// const nuevoObjeto = Object.assign(myCar, cliente)
const nuevoObjeto2 =  {
    myCar: {...myCar},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(myCar)
console.log(cliente)
