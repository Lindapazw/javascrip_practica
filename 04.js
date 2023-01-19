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
const { imagen } = myCar
console.log(imagen) 