// 1. Qué son los Arrays
function procesarPedido(pedido) {
    const cliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(cliente);
    return pedido;
}

// 2. Iteración de Arrays en Javascript
function sumarPares(numeros) {
    let suma = 0;
    for (let num of numeros) {
        if (num % 2 === 0) {
            suma += num;
        }
    }
    return suma;
}

// 3. Buscar en Arrays
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith("a"));
}

function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    return index !== -1 ? words.slice(index + 1) : [];
}

function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const index = matrix[i].indexOf("JavaScript");
        if (index !== -1) {
            return [i, index];
        }
    }
    return [-1, -1];
}

function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i;
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i;
        }
    }
    return [minIndex, maxIndex];
}

// Prueba las funciones aquí
console.log(procesarPedido(['Juan', 'pizza', 'agua']));
console.log(sumarPares([1, 2, 3, 4, 5, 6]));
console.log(palabrasTerminanConA(['casa', 'silla', 'mesa']));
console.log(buscaPalabras(['hola', 'mundo', 'javascript', 'node'], 'mundo'));
console.log(findJavaScript([['HTML', 'CSS', 'JavaScript'], ['Java', 'C++', 'Python'], ['Ruby', 'Go', 'Swift']]));
console.log(findMinMaxPages([350, 120, 540, 275, 390, 130, 670]));
