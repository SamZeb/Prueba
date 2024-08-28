let array = []


function calculadora(operacion, n2, n3) {
    
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
    }
}
calculadora('division', 90, 9)
calculadora('suma', 90, 9)
calculadora('resta', 90, 9)
calculadora('multiplicar', 90, 9)

console.log(array)
