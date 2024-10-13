// Operadores de comparación
function compareTenAndNine() {
    console.log(10 >= 9); // true
}

function compareZeroAndZero() {
    console.log(0 === 0); // true
}

function compareSeven() {
    console.log(7 > 8 && 7 < 10); // false
}

// Operadores lógicos
function canBuyProduct() {
    const productoPrecio = 1500;
    const descuento = 0.25;
    const dineroDisponible = 1150;
    const precioFinal = productoPrecio * (1 - descuento);
    console.log(dineroDisponible >= precioFinal); // false
}

// Variables
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje); // "Hola JavaScript"
}

function createSumVariable() {
    let resultado = 2 + 3;
    console.log(resultado); // 5
}

function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED); // true
}

// Null y Undefined
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad); // null
}

function createUndefinedVariable() {
    let dinero;
    console.log(dinero); // undefined
}

// typeof
function checkUserNameType() {
    let userName = "usuario";
    console.log(typeof userName); // "string"
}

function checkDogIdIsString() {
    let dogId = "12345";
    console.log(typeof dogId); // "string"
}

// console.log()
function logMessage() {
    console.log("Este es un mensaje de prueba."); // "Este es un mensaje de prueba."
}

function logAge() {
    let edad = 30;
    console.log(edad); // 30
}

function logVersion() {
    let version = 2024;
    console.log('La versión de JavaScript es ' + version); // "La versión de JavaScript es 2024"
}

// Llamar a las funciones para probarlas
compareTenAndNine();
compareZeroAndZero();
compareSeven();
canBuyProduct();
createMessageVariable();
createSumVariable();
createDisabledConstant();
createNullVariable();
createUndefinedVariable();
checkUserNameType();
checkDogIdIsString();
logMessage();
logAge();
logVersion();
