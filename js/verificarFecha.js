export function esFecha( cadena )
{
    if( (trim(cadena) == "") || (trim(cadena).length != 10) )
        return false;
    var dia  = parseInt(cadena.substr(0,2), 10);
    var mes  = parseInt(cadena.substr(3,2), 10);
    var anio = parseInt(cadena.substr(6,4), 10);
    // Año
    if( isNaN(anio) || (anio < 1900) )
        return false;
    // Mes
    if( isNaN(mes) || (mes < 1) || (mes > 12) )
        return false;
    // Día
    if( isNaN(dia) || (dia < 1) || (dia > 31) )
        return false;
    else
    {
        if( (dia == 31) && ((mes == 4 ) || (mes == 6) || (mes == 9) || (mes == 11)) )
            return false;
        var diaMax = 31;
        if( (anio % 4 == 0) && (anio % 100 != 0) || (anio % 400 == 0) )
            diaMax = 29;
        else
            diaMax = 28;
        if( dia > diaMax )
            return false;
    }
    return true;
}
// -----------------------
// Elimina espacios al principio y fin de la cadena
function trim( cadena )
{
    cadena += "";
    cadena = cadena.replace(/^\s+/, '');
    return cadena.replace(/\s+$/, '');
}