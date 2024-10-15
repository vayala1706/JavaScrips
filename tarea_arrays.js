// 1. Qué son los Arrays
function procesarPedido(pedido) {
    const cliente = pedido.shift(); // Saca el primer elemento (nombre del cliente)
    pedido.unshift("bebida"); // Añade "bebida" al inicio del array
    pedido.push(cliente); // Añade el nombre del cliente al final
    return pedido;
}

// 2. Iteración de Arrays en Javascript
function sumarPares(numeros) {
    let suma = 0;
    for (let num of numeros) {
        if (num % 2 === 0) {
            suma += num; // Suma solo los números pares
        }
    }
    return suma;
}

// 3. Buscar en Arrays
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith("a")); // Verifica si todas las palabras terminan en "a"
}

function buscaPalabras(words, word) {
    const index = words.indexOf(word); // Busca el índice de la palabra
    return index !== -1 ? words.slice(index + 1) : []; // Devuelve las palabras después de la palabra buscada
}

function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const index = matrix[i].indexOf("JavaScript"); // Busca "JavaScript" en la matriz
        if (index !== -1) {
            return [i, index]; // Devuelve la posición si la encuentra
        }
    }
    return [-1, -1]; // Devuelve [-1, -1] si no la encuentra
}

function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualiza el índice del libro con menos páginas
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualiza el índice del libro con más páginas
        }
    }
    return [minIndex, maxIndex]; // Devuelve los índices de mínimo y máximo
}

// Prueba las funciones aquí
console.log(procesarPedido(['Juan', 'pizza', 'agua'])); // Ejemplo de salida
console.log(sumarPares([1, 2, 3, 4, 5, 6])); // Ejemplo de salida
console.log(palabrasTerminanConA(['casa', 'silla', 'mesa'])); // true
console.log(buscaPalabras(['hola', 'mundo', 'javascript', 'node'], 'mundo')); // ['javascript', 'node']
console.log(findJavaScript([['HTML', 'CSS', 'JavaScript'], ['Java', 'C++', 'Python'], ['Ruby', 'Go', 'Swift']])); // [0, 2]
console.log(findMinMaxPages([350, 120, 540, 275, 390, 130, 670])); // [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
