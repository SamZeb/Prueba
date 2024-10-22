let array = []


function calculadora(operacion, n2, n3) {
    n2 = parseInt(n2)
    n3 = parseInt(n3)
    if (operacion == 'suma') {
        array.push(n2 + n3)
        return n2 + n3
    } else if (operacion == 'resta') {
        array.push(n2 - n3)
        return n2 - n3
    } else if (operacion == 'multiplicar') {
        array.push(n2 * n3)
        return n2 * n3
    } else if (operacion == 'division') {
        array.push(n2 / n3)
        return n2 / n3
    } else {
        return 'Esto no es un operador'
    }
}

console.log(calculadora(process.argv[2], process.argv[3], process.argv[4]))