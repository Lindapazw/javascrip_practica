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

console.log(resultado)
console.log(resultado2)
console.log(resultado3)