let puntuacion = 8;

/* if (puntuacion > 7) {
    console.log('Excelente')
} else if (puntuacion >= 5 && puntuacion <= 7) {
    console.log('Media')
} else if (puntuacion >= 3 && puntuacion <= 4) {
    console.log('Mal')
} else {
    console.log('Pesima')
} */

switch (puntuacion) {
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('Es Martes')
        break;
    case 3:
        console.log('Es Miercoles')
        break;
    case 4:
        console.log('Es Jueves')
        break;
    case 5:
        console.log('Es Viernes')
        break;
    case 6:
        console.log('Es Sabado')
        break;
    case 7:
        console.log('Es Domingo')
    default:
        console.log('No es un dia de la semana')
        break;
}

let edad = 21
let puedePasar

edad > 18 ? puedePasar = true : puedePasar = false
console.log(puedePasar);