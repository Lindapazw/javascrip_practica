// objetos - manipulacion 

const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

// sobreescribe un valor
myCar.make = " Audi "

// si no existe lo va a añadir 
myCar.imagen = "imagen.jpg"

// eliminar 
delete myCar.model

console.log(myCar)


// object freeze y seal 

Object.freeze(myCar) // no te deja modificar 
Object.seal(myCar) // te deja modificar las existentes, sin añadir o eliminar 