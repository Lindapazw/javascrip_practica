// Destructuring con 2 o más objetos

const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

const cliente = {
    make:"Linda",
    premiun: "True"
};

const { make, model, year } = myCar
const { make: nombre , premiun} = cliente

console.log(make,model,year)
console.log( nombre, premiun)