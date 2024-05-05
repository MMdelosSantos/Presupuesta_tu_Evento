
function calculo() {   // Declaro variables principales
    let nombreOrganizador = (document.getElementById('nombreOrganizador').value);
    let mailOrganizador = (document.getElementById('mailOrganizador').value);
    let fechaEvento = (document.getElementById('fechaEvento').value);
    // Sobre invitados
    let cantidadInvitadosVeg = parseInt(document.getElementById('cantidadInvitadosVeg').value);
    let cantidadInvitadosNoVeg = parseInt(document.getElementById('cantidadInvitadosNoVeg').value);
    let cantidadGenMujer = parseInt(document.getElementById('cantidadGenMujer').value);
    let cantidadGenHombre = parseInt(document.getElementById('cantidadGenHombre').value);
    let cantidadGenOtros = parseInt(document.getElementById('cantidadGenOtros').value);
    let fechaActual = new Date()
    let alquilaLocal = document.getElementById('alquilalocal').checked
    let cantidadInvitadosTotal
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

    // Cálculos de la cantidad de invitados
    cantidadInvitadosTotal = cantidadInvitadosNoVeg + cantidadInvitadosVeg

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
    totalCosto = costoComidaInvNoVeg + costoComidaInvVeg + costoSouvenirGenHombre + costoSouvenirGenMujer + costoSouvenirGenOtros

    if (alquilaLocal) {
        totalCosto += costoAlquiler
    }

    // Mostrar los resultados obtenidos
    document.getElementById('resultados').innerHTML = "Tienes una cantidad total de : " + cantidadInvitadosTotal + ' invitado/s, de los cuales ' +
        cantidadInvitadosVeg + ' es/son vegetariano/s <br> Del total de invitados, hay ' + cantidadGenMujer + ' que es/son mujer/es, ' + cantidadGenHombre +
        ' que es/son hombre/s y ' + cantidadGenOtros + ' es/son de otro género.<br> El costo total de tu evento, considerando estos invitados y el alquiler del local de $' +
        costoAlquiler + ' es de: $' + totalCosto

    let nuevaVersionPpto = new Presupuestos();

    nuevaVersionPpto.cantidadInvitadosTotal = `${cantidadInvitadosTotal}`;
    nuevaVersionPpto.cantidadInvitadosVeg = `${cantidadInvitadosVeg}`;
    nuevaVersionPpto.cantidadInvitadosNoVeg = `${cantidadInvitadosNoVeg}`;
    nuevaVersionPpto.cantidadGenMujer = `${cantidadGenMujer}`;
    nuevaVersionPpto.cantidadGenHombre = `${cantidadGenHombre}`;
    nuevaVersionPpto.cantidadGenOtros = `${cantidadGenOtros}`;
    nuevaVersionPpto.costoAlquiler = `${costoAlquiler}`;
    nuevaVersionPpto.totalCosto = `${totalCosto}`;

    let JsonNuevaVersion = JSON.stringify(nuevaVersionPpto)
    sessionStorage.setItem('VersionPresupuesto', JsonNuevaVersion)

}

// Versiones de presupuestos guardados:

class Presupuestos {
    static VersionPpto = 1;
    constructor(numero, cantidadInvitadosTotal, cantidadInvitadosVeg, cantidadInvitadosNoVeg, cantidadGenMujer, cantidadGenHombre, cantidadGenOtros, costoAlquiler, totalCosto) {
        this.numero = Presupuestos.VersionPpto++;
        this.cantidadInvitadosTotal;
        this.cantidadInvitadosVeg;
        this.cantidadInvitadosNoVeg;
        this.cantidadGenMujer;
        this.cantidadGenHombre;
        this.cantidadGenOtros;
        this.costoAlquiler;
        this.totalCosto;
    }
}

function guardarPpto() {
    let VersionesPpto = JSON.parse(sessionStorage.getItem('VersionesPpto'));

    let nuevaVersionPpto = sessionStorage.getItem('VersionPresupuesto');

    if (VersionesPpto === null) {
        VersionesPpto = [];
    }

    VersionesPpto.push(nuevaVersionPpto);
    console.log(VersionesPpto)
    sessionStorage.setItem('VersionesPpto', JSON.stringify(VersionesPpto));
}


// function recuperarSessionStorage() {
//  let VersionesSessionStorage = JSON.parse(sessionStorage.getItem('VersionesPpto'))
//console.log(VersionesSessionStorage)
//VersionesSessionStorage.forEach(versionString  => {
//  let version = JSON.parse(versionString);
//console.log(`Cantidad total de invitados: ${version['cantidadInvitadosTotal']}`);
//console.log(`Cantidad de Invitados Veganos: ${version['cantidadInvitadosVeg']}`);
//console.log(`Cantidad de Invitados No Veganos: ${version['cantidadInvitadosNoVeg']}`);
//console.log(`Cantidad de invitados de Genero Femenino: ${version['cantidadGenMujer']}`);
//console.log(`cantidad de Genero Masculino: ${version['cantidadGenHombre']}`);
//console.log(`cantidad de otro Genero: ${version['cantidadGenOtros']}`);
//console.log(`costo del Alquiler: ${version['costoAlquiler']}`);
//console.log(`Total de Costo: ${version['totalCosto']}`);
//}); 

function mostrarVersionesPpto() {
    let VersionesPpto = JSON.parse(sessionStorage.getItem('VersionesPpto'));

    if (VersionesPpto === null || VersionesPpto.length === 0) {
        // Manejar el caso en que no haya versiones disponibles
        return;
    }

    let contenedorVersiones = document.getElementById('div-versiones');

    contenedorVersiones.innerHTML = '';

    VersionesPpto.forEach((versionString, index) => {
        let version = JSON.parse(versionString);

        // Crear un elemento div para esta versión
        let versionElement = document.createElement('div');
        versionElement.classList.add('version');

        // Crear y agregar elementos HTML para mostrar los detalles de la versión
        versionElement.innerHTML = `
            <h3>Versión ${index + 1}</h3>
            <p>Cantidad total de invitados: ${version['cantidadInvitadosTotal']}</p>
            <p>Cantidad de Invitados Veganos: ${version['cantidadInvitadosVeg']}</p>
            <p>Cantidad de Invitados No Veganos: ${version['cantidadInvitadosNoVeg']}</p>
            <p>Cantidad de invitados de Genero Femenino: ${version['cantidadGenMujer']}</p>
            <p>Cantidad de Genero Masculino: ${version['cantidadGenHombre']}</p>
            <p>Cantidad de otro Genero: ${version['cantidadGenOtros']}</p>
            <p>Costo del Alquiler: ${version['costoAlquiler']}</p>
            <p>Total de Costo: ${version['totalCosto']}</p>
        `;

        // Agregar la versión al contenedor
        contenedorVersiones.appendChild(versionElement);
    });
}



