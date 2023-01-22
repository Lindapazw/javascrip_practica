// funciones con parámetros y argumentos

function sumar(numero, numero2 = 0){
    console.log(numero + numero2)
}

sumar(10,20) // si ya tiene un numero se sobreescribe el 0 
sumar(100)