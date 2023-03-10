const tecnologias = ["html","css","java","react","node"]
const numero = [10,20,30]

let nuevoArray 

// filter 
nuevoArray = tecnologias.filter( tech => tech !== "react")

// consultamos si un elemento existe en el array 
const resultado = tecnologias.includes("react")

// si un elemento del array es mayor a 15
const resultado2 = numero.some(numero => numero > 15 )

// find - devuelve el primer elemento que cumple la condicion
const resultado3 = numero.find(numero => numero > 15)

// every retorna true o false si todos cumplen la condicion 
const resultado4 = numero.every(numero => numero > 15)

// reduce 
const resultado5 = numero.reduce((total, numero) => numero + total, 0)

// filter - crear un nuevo array en base a una condicion 
const resultado6 = tecnologias.filter(tech => tech === 'java')

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)