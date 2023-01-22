const tecnologias = ["html","css","java","react","node"]


const nuevoArray1 = tecnologias.map( function(tech) { // sin Arrow function
    if(tech === "html") {
        return "GraphQL"
    } else {
        return tech
    }
})

const nuevoArray = tecnologias.map( tech => { // con Arrow function
    if(tech === "html") {
        return "GraphQL"
    } else {
        return tech
    }
})

const nuevoArray2 = tecnologias.filter(tech => { // map con arrow function
    return tech !== "react"
})

console.log(nuevoArray)