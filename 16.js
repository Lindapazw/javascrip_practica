const tecnologias = ["html","css","java","react","node"]
const numero = [10,20,30]

let nuevoArray 

// filter 
nuevoArray = tecnologias.filter( tech => tech !== "react")

// consultamos si un elemento existe en el array 
const resultado = tecnologias.includes("react")

console.log(resultado)