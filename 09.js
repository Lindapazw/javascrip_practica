// Operaciones en los arreglos 

const tecnologias = ["html", "css", "java"]

// añadir elementos al array

// tecnologias.push("node") // añade al final del array 
// tecnologias.unshift("node.js") // añade al inicio del array 

const nuevoArreglo = [...tecnologias, "GraphQL"] // no modifica el arreglo original

// eliminar elementos del array

// reemplazar elementos del array

console.table(tecnologias)
console.table(nuevoArreglo)