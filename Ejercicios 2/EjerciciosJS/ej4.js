/*1 🔢 Números impares
Crear un programa que muestre en 
consola los números impares entre el 0 y el 20
*/

/*

for (let i = 0; i <= 20; i++) {
    console.log(`Numeros impares de 0 a 20:`);
    if ( i % 2 != 0) {
        console.log(i);
    }
}

*/


/*
2 📀 Playlist
Crear un programa que pida al usuario ingresar el nombre
de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir 
pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando
la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el
momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.
*/

/*
let playlist = prompt(`Pon nombre de tu playlist!`);
let cantidadCanciones = Number(prompt(`Pon la cantidad de cacnciones que quieres añadir`));
let listaCanciones = [];
    for (i = 1; i <= cantidadCanciones; i++) {
       var nombreCancion = prompt(`Pon nombre de la cancion(Cancion numero ${i}, cantidad que queda por agregar es ${cantidadCanciones - i})`);
        listaCanciones.push(nombreCancion);
    }

console.log(`Nombre del playlist ${playlist}`);
console.log(`Lista de las canciones:
${listaCanciones.join("\n")}`);

*/

/*


/*
3 🏃‍♀️ Carrera
Crear un programa para controlar las vueltas de una deportista.
 Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo 
 en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y 
 el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s
*/

/*
let cantidadVueltas = parseInt(prompt("Pon la cantidad de vueltas que quieres hacer"));
var vueltasTiempo = [];
var sumaVueltasTotal = 0;

for (i = 1; i <= cantidadVueltas; i++) {
    let tiempoVuelta = parseInt(prompt(("Pon el tiempo de cada vuelta en segundos")));
    vueltasTiempo.push(tiempoVuelta);  
    sumaVueltasTotal += tiempoVuelta;
}

console.log(`Cantidad de vueltas: ${cantidadVueltas}`);
for ( i = 0; i < cantidadVueltas; i++) {
    console.log(`Vuelta ${i+1}: ${vueltasTiempo[i]}s`);
}

resultadoPromedio = parseInt((sumaVueltasTotal / cantidadVueltas));

console.log(`Tiempo promedio: ${resultadoPromedio}`);
*/


/*

4 📐 Patrón

Crear un programa que muestre en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
*/

/*
let numeroDeLineas = 13;
for (let linea = 1; linea <= numeroDeLineas; linea++) {
    console.log("*".repeat(linea));
}
*/



/*
Bucle while
5 🔐 Múltiples intentos
Crear un programa que pida ingresar usuario y contraseña. 
El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos.
Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa.
El usuario y la contraseña ya deben estar guardadas en variables.
*/

/*
let user = "wortowl";
let password = 123123;
let intentos = 3;

while (intentos != 0) {
    intentos -= 1;
    let userIntento = prompt("Ingresa el usuario");
    let passwordIntento = prompt("Ingresa contraseña");
    if ( userIntento == user && passwordIntento == password) { 
        alert(`Bienvenida!`);   
        break
    } else if ( intentos >= 1){
        alert(`El usuario o contraseña no estan introducidos correctamente! Intenta de nuevo!`)
        alert(`Quedan ${intentos} intentos!`);
    } else {
        alert(`ERROR`);
        alert(`No quedan intentos!`);
    }
}
*/