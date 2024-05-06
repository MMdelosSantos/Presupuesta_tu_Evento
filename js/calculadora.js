
document.getElementById("btn-confirmar").addEventListener("click", calculo); // Botón Calcular los costos según los datos ingresados
document.getElementById("btn-mostrar").addEventListener("click", mostrarVersionesPresupuesto); // Mostrar las distintas versiones del presupuesto al clickear el botón correspondiente
document.getElementById("btn-guardar").addEventListener("click", guardarPresupuesto); // Guardar las distintas versiones del presupuesto al clickear el botón correspondiente

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

  let nuevaVersionPresupuesto = new Presupuestos();

  nuevaVersionPresupuesto.cantidadInvitadosTotal = `${cantidadInvitadosTotal}`;
  nuevaVersionPresupuesto.cantidadInvitadosVeg = `${cantidadInvitadosVeg}`;
  nuevaVersionPresupuesto.cantidadInvitadosNoVeg = `${cantidadInvitadosNoVeg}`;
  nuevaVersionPresupuesto.cantidadGenMujer = `${cantidadGenMujer}`;
  nuevaVersionPresupuesto.cantidadGenHombre = `${cantidadGenHombre}`;
  nuevaVersionPresupuesto.cantidadGenOtros = `${cantidadGenOtros}`;
  nuevaVersionPresupuesto.costoAlquiler = `${costoAlquiler}`;
  nuevaVersionPresupuesto.totalCosto = `${totalCosto}`;

  let JsonNuevaVersionPresupuesto = JSON.stringify(nuevaVersionPresupuesto)
  sessionStorage.setItem('VersionPresupuesto', JsonNuevaVersionPresupuesto)

}
// Versiones de presupuestos guardados:

class Presupuestos {
  static NumVersionPresupuesto = 1;
  constructor(numero, cantidadInvitadosTotal, cantidadInvitadosVeg, cantidadInvitadosNoVeg, cantidadGenMujer, cantidadGenHombre, cantidadGenOtros, costoAlquiler, totalCosto) {
    this.numero = Presupuestos.NumVersionPresupuesto++;
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

function guardarPresupuesto() {
  let VersionesPresupuesto = JSON.parse(sessionStorage.getItem('VersionesPresupuesto'));

  let nuevaVersionPresupuesto = sessionStorage.getItem('VersionPresupuesto');

  if (VersionesPresupuesto === null) {
    VersionesPresupuesto = [];
  }

  VersionesPresupuesto.push(nuevaVersionPresupuesto);
  console.log(VersionesPresupuesto)
  sessionStorage.setItem('VersionesPresupuesto', JSON.stringify(VersionesPresupuesto));
}

function mostrarVersionesPresupuesto() {
  let VersionesPresupuesto = JSON.parse(sessionStorage.getItem('VersionesPresupuesto'));

  if (VersionesPresupuesto === null || VersionesPresupuesto.length === 0) {
    // Manejar el caso en que no haya versiones disponibles
    return;
  }

  let contenedorVersiones = document.getElementById('div-versiones');

  contenedorVersiones.innerHTML = '';

  VersionesPresupuesto.forEach((versionString, index) => {
    let version = JSON.parse(versionString);

    // Crear un elemento div para guardar las versiones
    let versionElement = document.createElement('div');
    versionElement.classList.add('version');

    // Crear y agregar elementos HTML para mostrar los detalles de la versión
    versionElement.innerHTML = `
        <table class="table">
        <thead class="table-dark">
        <tr>
        <th colspan="2">
          Versión ${index + 1}
        </th>
        <tr>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cantidad total de invitados:</td>
            <td>${version['cantidadInvitadosTotal']}</td>
          </tr>
          <tr>
            <td>Cantidad de Invitados Veganos :</td>
            <td>${version['cantidadInvitadosVeg']}</td>
          </tr>
          <tr>
            <td>Cantidad de Invitados No Veganos :</td>
            <td>${version['cantidadInvitadosNoVeg']}</td>
          </tr>
          <tr>
            <td>Cantidad de invitados de Genero Femenino :</td>
            <td>${version['cantidadGenMujer']}</td>
          </tr>
          <tr>
            <td>Cantidad de Genero Masculino :</td>
            <td>${version['cantidadGenHombre']}</td>
          </tr>
          <tr>
            <td>Cantidad de otro Genero :</td>
            <td>${version['cantidadGenOtros']}</td>
          </tr>
          <tr>
            <td>Costo del Alquiler :</td>
            <td>${version['costoAlquiler']}</td>
          </tr>
          <tr>
            <td>Total de Costo :</td>
            <td>${version['totalCosto']}</td>
          </tr>
         </table>
            `;

    // Agregar la versión al contenedor
    contenedorVersiones.appendChild(versionElement);
  });
}


