// Función que valida si la fecha ingresada por el usuario es una fecha válida.
// PENDIENTE VALIDAR QUE NO SEA FECHA DEL PASADO , EN PRÓXIMA VERSIÓN.
let fechaActual = new Date()
let diaActual = fechaActual.getDay()
let mesActual = fechaActual.getMonth()
let anioActual = fechaActual.getFullYear()

export function esFecha(fechaCadena) {
    if ((trim(fechaCadena) == "") || (trim(fechaCadena).length != 10))
        return false;
    let diaEvento = parseInt(fechaCadena.substr(0, 2), 10);
    let mesEvento = parseInt(fechaCadena.substr(3, 2), 10);
    let anioEvento = parseInt(fechaCadena.substr(6, 4), 10);
    // Validando Año  para asegurarnos de que no es un valor vacío ni pasado
    if (isNaN(anioEvento) || (anioEvento < anioActual))
        return false;
    // Validando Mes
    if (isNaN(mesEvento) || (mesEvento < 1) || (mesEvento > 12))
        return false;
    // Validando Día   para asegurarnos de que  es una fecha correcta.
    if (isNaN(diaEvento) || (diaEvento < 1) || (diaEvento > 31))
        return false;
    if ((diaEvento == 31) && ((mesEvento == 4) || (mesEvento == 6) || (mesEvento == 9) || (mesEvento == 11)))
        return false;
    let diaMax = 31;
    if ((anioEvento % 4 == 0) && (anioEvento % 100 != 0) || (anioEvento % 400 == 0))
        diaMax = 29;
    else
        diaMax = 28;
    if (diaEvento > diaMax)
        return false;
    else {
        return true;
    }
}
;

// -----------------------
// Elimina espacios al principio y fin de la cadena
function trim(fechaCadena) {
    fechaCadena += "";
    fechaCadena = fechaCadena.replace(/^\s+/, '');
    return fechaCadena.replace(/\s+$/, '');
}