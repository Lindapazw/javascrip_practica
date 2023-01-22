// funciones que retornan valores

function sumar(numero = 0, numero2 = 0){
    return [numero + numero2, "hola mundo"]
}

const [resultado, holaMundo] = sumar(10,20) 

console.log(resultado)
console.log(holaMundo)
