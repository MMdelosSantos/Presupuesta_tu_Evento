import { esFecha } from "./verificarFecha.js"

function main() {
    // Comenzamos definiendo las variables básicas, las cuales el usuario irá ingresando mediante prompts

    let nombreOrganizador = prompt("¡Hola! por favor escribe tu nombre") // Ver de que en el html quede escrito el nombre ingresado en la bienvenida.
    let fechaEvento = prompt('Escribe la fecha del evento en formato dd/mm/yy') // Ver como poner formato fecha

    if (esFecha(fechaEvento))
        console.log("esFecha")
    else {
        alert("La fecha ingresada no es correcta")
        return
    }

    let nombreInvitado = prompt('Ingresa el nombre de tu invitado')
    let esVegetariano = prompt('¿El invitado es vegetariano? Responda SI o NO')
    let generoInvitado = prompt('Ingresa el genero de tu invitado. Responda M para masculino, F para femenino y X para otros').toUpperCase()
    let mailContacto = prompt('Ingresa el mail de contacto de tu invitado')
    let today = new Date()

    // Diccionario con los datos de los invitados
    let invitados = {
        nombre: nombreInvitado,
        esvegetariano: esVegetariano,
        genero: generoInvitado,
        contacto: mailContacto
    }



    // quiero contar la canntiad de invitados y que figure en algún lado. s eparar cuantos son vegetarianos y cuantos hombres
    // Quiero que me calcule los d{ias que faltan para el evento}
    // Tener conceptos como comida, salón, cotillon, bebidas, torta. Debe multip´licar por cantidad de invitados y considerar otro presupuesto segun si son vegetarianos.
    // Permitir guardar distintas versiones del presupuesto y luego revisarlas.
    //Mandar invitacion a los invitados ??
    
    //

}

main()