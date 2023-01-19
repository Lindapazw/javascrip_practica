// Operaciones en los arreglos 

const tecnologias = ["html", "css", "java"]

// añadir elementos al array

// tecnologias.push("node") // añade al final del array 
// tecnologias.unshift("node.js") // añade al inicio del array 

// const nuevoArreglo = [...tecnologias, "GraphQL"] // no modifica el arreglo original

// eliminar elementos del array

tecnologias.pop() // eliminar del final 
tecnologias.shift() // eliminar del inicio
tecnologias.splice(2) // elimina todo a partir del 2
tecnologias.splice(2,1) // elimina 1 a partir del lugar 2 



// reemplazar elementos del array

console.table(tecnologias)
