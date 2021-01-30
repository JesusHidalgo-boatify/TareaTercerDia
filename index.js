/**
 * CALCULO DE LA LETRA DEL DNI
 */




// ------------------ HOSTING --------------------

var $letraDNI = "";

var numeroDNI = "12345678";

var $$formatoCorrecto = false;

const _letrasDni = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
];





//-----------------    FUNCIONES    ----------------

/*  Comprueba que 'num' sólo contenga cifras, que sea un número de ocho dígitos, 
    entero, y positivo, en cuyo caso, devuelve 'true'.
    En caso contrario muestra una alerta y devuelve 'false'.    */
function chequearNumeroIntroducido(num) {
    if (
        isNaN(Number(num)) || // comprueba que únicamente contenga números
        num.length != 8 || // comprueba que sean ocho cifras
        num < 0 || // comprueba que no sea negativo
        !Number.isInteger(Number(num)) // comprueba que no tenga decimales
    ) {
        alert(
            "El DNI debe tener ocho cifras y contener tan sólo caracteres numéricos."
        );
        return false; // esto hará que '$$formatoCorrecto' sea 'false'
    }
    return true;
}



// Algoritmo para calcular la letra del DNI a partir del número
function calculaLetra(num) {
    letra = _letrasDni[num % 23];
    return letra;
}




// ------------------ ENTRADA DE DATOS  ------------------

do {
    numeroDNI = prompt("Introduzca los dígitos de su DNI:");
    $$formatoCorrecto = chequearNumeroIntroducido(numeroDNI);
} while (!$$formatoCorrecto);
/* hasta que la funcion 'chequearNumeroIntroducido' no devuelva
 'true' se estará repitiendo el bucle 'do...while' que contiene 
 el prompt para la entrada de datos */
{
}




// ---------------- CÁLCULO DE LA LETRA E IMPRESIÓN -------

$letraDNI = calculaLetra(numeroDNI);

console.log(`Su DNI completo es: ${numeroDNI}${$letraDNI}`);



// end
