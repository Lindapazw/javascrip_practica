// Operaciones en los arreglos 

const tecnologias = ["html", "css", "java"]

// reemplazar elementos del array
const nuevoArreglo = tecnologias.map(function(tech){
    if(tech == "html") {
        return "nueva tecnologia"
    } else {
        return tech
    }
})

console.log(tecnologias)
console.table(nuevoArreglo)
