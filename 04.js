// objeto 

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

console.log(myCar)

// mostrar como tabla

console.table(myCar)

// mostrar solo nombre

console.log(myCar.model)


// destructuring
const { model, make } = myCar
console.log(model) 
console.log(make) 

// object literal enhacement 
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)