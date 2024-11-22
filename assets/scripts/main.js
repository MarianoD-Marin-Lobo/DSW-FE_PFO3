function printSeparador() {
    console.log(' ');
    console.log(`//////////////////////////////////////////////////////////`);
    console.log(' ');
}


// Ejercicio - 1) Calcular el área de un rectángulo.

function calcularAreaRectangulo(leng, widt) {
    let resultado = leng * widt;
    return resultado;
}

const largo = 15;
const ancho = 20;
console.log(`Solución-1: Calcular el área de un rectángulo.`);
console.log(`Medidas Rectángulo ---> Largo = ${largo} - Ancho = ${ancho}`);
console.log(`Area del Rectángulo = ${calcularAreaRectangulo(largo,ancho)}`);
printSeparador();

/*Pasos y elementos que deberia definir para la funcion/aplicacion:
1- Definir la función que calculará el Area del Rectángulo según lo solicitado.
2- Definir dentro de la función una variable que almacene el resultado del producto de los lados.
3- Invocar, como se pide, a la funcion desde un Console.log para mostrar directamente el resultado.*/



/////////////////////////////////////////////////////////////////////////////////////////////



// Ejercicio - 2. Contar palabras en una cadena 

function contarPalabrasEnCadena(stringIntroduced) {
    let arrayPalabras = stringIntroduced.split(" ")

    let cantPalabras = arrayPalabras.length;

    return cantPalabras;
}

const stringToReverse = 'La caída de la Casa Usher';
console.log(`Solución-2: Contar palabras en una cadena.`);
console.log(`Cadena ingresada ---> "${stringToReverse}"`);
console.log(`Cantidad de palabras = ${contarPalabrasEnCadena(stringToReverse)}`);
printSeparador();

/* Pasos y elementos que deberia definir para la funcion/aplicacion:
1- Definir la función que devolverá el número de palabras presentes en una cadena.
2- Definir dentro de la función un arreglo que almacene las palabras indidivduales luego de aplicársele a la oración la funcion 'split()'
3- Definir dentro de la función una variable que almacene el resultado del conteo de palabras que será básicamente la cantidad de elementos del array generado de acuerdo al punto anterior.*/



/////////////////////////////////////////////////////////////////////////////////////////////



// Ejercicio - 3. Invertir una cadena

function invertirCadena(stringIntroduced) {

    let stringArray =stringIntroduced.split(''); 

    let reversedStringArray = stringArray.reverse(); 

    let reversedString = '';

    for (let i = 0; i < reversedStringArray.length; i++) {
        reversedString += reversedStringArray[i]; 
    }

    return reversedString;
}

const cadenaIngresada = 'Murciélago';
console.log(`Solución-3: Invertir una cadena.`);
console.log(`Cadena ingresada ---> "${cadenaIngresada}"`);
console.log(`Cadena invertida = ${invertirCadena(cadenaIngresada)}`);
printSeparador(); 

/* Pasos y elementos que debía definir para la funcion/aplicacion:
1- Definir la función que devolverá la cadena ingresada pero invertida.
2- Definir dentro de la función un arreglo que almacene los elementos individuales de la cadena.
3- Definir dentro de la función otro arreglo que almacene, en orden invertido, los elementos individuales de la cadena ingresada inicialmente y cuyos elementos se almacenaron en el arreglo anterior.
4- Definir dentro de la función una variable que almacene el nuevo string con la cadena invertida generado a partir de la concatenación de los elementos del arreglo generado en el punto anterior
5- Definir dentro de la función un ciclo que recorra el arreglo concatenando sus elementos en la variable mencionada en el punto anterior.*/



/////////////////////////////////////////////////////////////////////////////////////////////



/*  Ejercicio - 4. Encontrar el palíndromo
        Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo. */

function encontrarPalindromo(stringIntroduced) {

    let stringArray =stringIntroduced.split(''); 

    let reversedStringArray = [...stringArray].reverse(); 

    let matchCounter = 0;

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].toLowerCase() === reversedStringArray[i].toLowerCase()) {
            matchCounter += 1;
        }
    }

    return (stringArray.length === matchCounter);
}

const palindTrue = 'Reconocer';
const palinFalse = 'Software';
console.log(`Solución-4: Encontrar el palíndromo.`);
console.log('----- Caso VERDADERO:')
console.log(`Cadena ingresada ---> "${palindTrue}"`);
console.log(`Es palíndromo = ${encontrarPalindromo(palindTrue)}`);
console.log('----- Caso FALSO:')
console.log(`Cadena ingresada ---> "${palinFalse}"`);
console.log(`Es palíndromo = ${encontrarPalindromo(palinFalse)}`);
printSeparador();

/* Pasos y elementos que deberia definir para la funcion/aplicacion:
1- Definir la función que devolverá TRUE ó FALSE según si la cadena ingresada es o no un palíndromo.
 2- Definir dentro de la función un arreglo que almacene los elementos individuales de la cadena.
3- Definir dentro de la función otro arreglo que almacene, en orden invertido, los elementos individuales de la cadena ingresada inicialmente y cuyos elementos se almacenaron en el arreglo anterior.*/



/////////////////////////////////////////////////////////////////////////////////////////////



/*  Ejercicio - 5. Crear un programa para convertir la edad de un perro a años humanos
        Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina, que equivale a 7 veces la edad humana.
        Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo */

function convertirEdadCaninaAHumana() {
    let dogYearsHumanEquiv;
    
    let dogYearsString = prompt ("Ingrese los años que tiene su perro/a");
    
    const dogYears = Number(dogYearsString);

    if (dogYears == null || dogYears == "") {
        dogYearsHumanEquiv = "No ingresó ninguna edad. Reinicie la aplicación para calcular.";
    } else {
        dogYearsHumanEquiv = `Tu perro tiene ${dogYears*7} años humanos.`;
    }
    
    console.log(`Solución-5: Convertir la edad de un perro a años humanos.`);
    console.log(`Edad canina ---> "${dogYearsString} años."`);
    console.log(`Edad humana equivalente = ${dogYearsHumanEquiv}`);
    printSeparador();
}

convertirEdadCaninaAHumana();

/* Para esta función primero se debía definir una variable para almecenar el ingreso de la edad que se hiciera mediante el 'prompt', teniendo en cuenta que todo número que se ingresa mediante metodos similares, no es leído por JavaScript como tal tipo sino que los lee como string, por lo que al nombre de dicha variable se le agregó la terminacion 'string'.
Luego, se debía definir una segunda variable para almacenar el valor ingresado como un número propiamente dicho y poder disponer de el para realizar el producto que representaba la equivalencia entre las edades canina y humana, y, por ende, se definió la variable 'dogYears' sin la terminación string.
Finalemte, se definió una tercer variable para almacenar la cadena de mensaje que mostrar la equivalencia, según si el usuario había ingresado, o no, un valor valido.*/