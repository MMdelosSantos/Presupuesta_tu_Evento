// Importamos la función que valida si la fecha ingresada por un usuario es válida
import { esFecha } from "./verificarFecha.js"


function main() {
    // Declaro variables principales
    let nombreOrganizador
    let fechaEvento
    let nombreInvitado
    let esVegetariano
    let generoInvitado
    let mailContacto
    let fechaActual = new Date()

    //Sobre cantidad de invitados:
    let cantidadInvitadosTotal
    let cantidadInvitadosVeg = 0 // Para identificar la cantidad de vegetarianos que asistirán al evento, lo que determinará un costo mayor de su almuerzo o cena.
    let cantidadInvitadosNoVeg // Cantidad de invitados que NO son vegetarianos
    let cantidadGenMujer = 0// Para identificar cantidad de invitados de género Mujer.
    let cantidadGenHombre = 0  // Para identificar cantidad de invitados de género Hombre.
    let cantidadGenOtros = 0 // Para identificar cantidad de invitados de género Otros.
    // Sobre costos
    let souvenirMujer // Costo unitario de los souvenirs para mujer
    let souvenirHombre // Costo unitario de los souvenirs para hombre
    let souvenirOtros // Costo unitario de los souvenirs para invitados de genero otros. 
    let comidaVegetariana // Costo de almuerzo/cena para 1 persona vegetariana.
    let comida // Costo de almuerzo/cena para 1 persona que no es vegetariana.
    let costoComidaInvVeg // Según la cantidad de invitados vegetarianos, multiplica por el importe de su almuerzo/ cena (que es de  $ 520).
    let costoComidaInvNoVeg // Según la cantidad de invitados que no son vegetarianos, multiplica por el importe de su almuerzo/cena (que es de $ 470).
    let costoSouvenirGenMujer // Multiplica la cantidad de invitados que son mujer por el costo de su souvenirs.
    let costoSouvenirGenHombre // Multiplica la cantidad de invitados hombre por el costo de sus souvenirs.
    let costoSouvenirGenOtros // Multiplica la cantidad de invitados de genero Otros por el costo de sus souvenirs. 
    let totalCosto // Suma todos los costos del evento. 

    // Defino diccionario con los datos de los invitados
    let invitados = []

    let organizaEvento = confirm('¡Hola! ¿Deseas conocer el presupuesto aprox que necesitarás para tu evento?')
    // El usuario ingresa fecha del evento y su nombre.
    nombreOrganizador = prompt("Por favor escribe tu nombre") // Ver de que en el html quede escrito el nombre ingresado en la bienvenida.

    // Ingreso de fecha del evento, si la fecha no es valida avisa que existe un error y luego de aceptar vuelve a aparecer el prompt.
    do {
        fechaEvento = prompt('Escribe la fecha del evento en formato dd/mm/yyyy')
        // Informamos al usuario si ha ingresado una fecha invalida.
        if (!esFecha(fechaEvento))
            alert("La fecha ingresada no es correcta")

    } while (!esFecha(fechaEvento))

    // El usuario define si el evento será en un local o en su propia casa.
    let alquilaLocal = prompt('¿Deseas alquilar un local para tu evento? Responda SI o NO. El costo del alquiler será de $ 2.500')

    // El usuario comienza a ingresar los datos de sus invitados, lo que definirá parte del presupuesto.
    let ingresarOtroInvitado
    do {
        nombreInvitado = prompt('Ingresa el nombre de tu invitado')
        esVegetariano = prompt('¿El invitado es vegetariano? Responda SI o NO')
        generoInvitado = prompt('Ingresa el genero de tu invitado. Responda M para masculino, F para femenino y X para otros').toUpperCase()
        mailContacto = prompt('Ingresa el mail de contacto de tu invitado')
        invitados.push({ nombre: nombreInvitado, esvegetariano: esVegetariano, genero: generoInvitado, contacto: mailContacto })
        ingresarOtroInvitado = prompt('¿Desea ingresar a otro invitado? Responda SI o NO')
    } while (ingresarOtroInvitado == 'SI')

    // Cálculos de la cantidad de invitados
    cantidadInvitadosTotal = invitados.length // Total de invitados

    // Invitados que son vegetarianos:
    for (let i = 0; i < cantidadInvitadosTotal; i++) {
        if (invitados[i].esvegetariano == 'SI')
            cantidadInvitadosVeg++
    }

    cantidadInvitadosNoVeg = cantidadInvitadosTotal - cantidadInvitadosVeg // Cantidad de invitados que no son vegetarianos
    // Invitados de género mujer:
    for (let i = 0; i < cantidadInvitadosTotal; i++) {
        if (invitados[i].genero == 'F')
            cantidadGenMujer++
    }

    // Invitados de género hombre:
    for (let i = 0; i < cantidadInvitadosTotal; i++) {
        if (invitados[i].genero == 'M')
            cantidadGenHombre++
    }

    // Invitados de género Otros:
    for (let i = 0; i < cantidadInvitadosTotal; i++) {
        if (invitados[i].genero == 'X')
            cantidadGenOtros++
    }


    // Asigno valores a algunos costos que son fijos:
    const costoAlquiler = 2500 // Si se alquila un local para el evento, se incrementa el costo del evento en $2.500.
    souvenirHombre = 120
    souvenirMujer = 150
    souvenirOtros = 125
    comidaVegetariana = 520
    comida = 470
    // Calculamos costos totales con operaciones
    costoComidaInvVeg = cantidadInvitadosVeg * comidaVegetariana
    costoComidaInvNoVeg = cantidadInvitadosNoVeg * comida
    costoSouvenirGenMujer = cantidadGenMujer * souvenirMujer
    costoSouvenirGenHombre = cantidadGenHombre * souvenirHombre
    costoSouvenirGenOtros = cantidadGenOtros * souvenirOtros
    totalCosto = costoComidaInvNoVeg + costoComidaInvVeg + costoAlquiler + costoSouvenirGenHombre + costoSouvenirGenMujer + costoSouvenirGenOtros

    alert('Tienes un total de ' + cantidadInvitadosTotal + ' invitados, de los cuales ' + cantidadInvitadosVeg + ' es/son vegetariano/s')
    alert('Del total de invitados, hay ' + cantidadGenMujer + ' que es/son mujer/es, ' + cantidadGenHombre + ' que es/son hombre/s y ' + cantidadGenOtros + ' es/son de otro género')
    alert('El costo total de tu evento, considerando estos invitados y el alquiler del local de $' + costoAlquiler + ' es de: $' + totalCosto)

    // En la versión final de la aplicación quiero: 
    // contar la cantidad de invitados y que figure en algún lado. Separar cuantos son vegetarianos y cuantos hombres
    // Que me calcule los días que faltan para el evento
    // Tener conceptos como comida, salón, cotillon, bebidas, torta. Debe multiplicar por cantidad de invitados y considerar otro presupuesto segun si son vegetarianos.
    // Permitir guardar distintas versiones del presupuesto y luego revisarlas.
    //Mandar invitacion a los invitados ??
}

main()