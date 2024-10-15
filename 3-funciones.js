// 3-funciones.js

// 1. Tu primera función
function despedir() {
    console.log("Adiós");
}

function multiplicarPorDos(numero) {
    return numero * 2;
}

function esMayorDeEdad(edad) {
    return edad > 18;
}

function multiplicar(a, b) {
    return a * b;
}

function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`;
}

function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

const multiplicarDOS = function(a, b) {
    return a * b;
};

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};

const esPar = function(numero) {
    return numero % 2 === 0;
};

const multiplicarFlecha = (a, b) => a * b;

const saludarFlecha = nombre => `Hola ${nombre}`;

const calcularArea = radio => Math.PI * Math.pow(radio, 2);

function suma(n) {
    if (n === 0) {
        return 0;
    }
    return n + suma(n - 1);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

// Llamadas para probar las funciones
despedir();
console.log(multiplicarPorDos(5)); // 10
console.log(esMayorDeEdad(20)); // true
console.log(multiplicar(4, 5)); // 20
console.log(saludarPersonalizado("Juan", "Pérez")); // Hola, Juan Pérez
console.log(calcularPotencia(2, 3)); // 8
console.log(restar(10, 5)); // 5
console.log(dividir(10, 2)); // 5
console.log(multiplicarDOS(3, 4)); // 12
console.log(saludar("Ana")); // Hola, Ana
console.log(esPar(6)); // true
console.log(multiplicarFlecha(2, 3)); // 6
console.log(saludarFlecha("Luis")); // Hola Luis
console.log(calcularArea(5)); // 78.53981633974483
console.log(suma(3)); // 6
console.log(fibonacci(6)); // 8
console.log(factorial(5)); // 120
console.log(potencia(2, 3)); // 8

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    multiplicarFlecha,
    saludarFlecha,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
};
