/*
1 Saludo
    Crear un programa que pida al usuario ingresar un nombre y apellido por separado, 
    y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".
 */

/* 
let nombre = prompt("Introduzca tu nombre");
let apellido = prompt("Introduzca tu apellido");

console.log(`Hola ${nombre} ${apellido}, bienvenido a Ada!`)
*/

/*

2 Heladería
    Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, 
    "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".
*/

/*
let sabor1 = prompt("Pon primer sabor del helado");
let sabor2 = prompt("Pon segundo sabor del helado");
let sabor3 = prompt("Pon tercer sabor del helado");

console.log(`Aquí tiene su helado de ${sabor1}, ${sabor2} y ${sabor3}`);
*/

/*
3 Datos personales
Crear un programa que pida al usuario ingresar, 
por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que 
diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.
*/

/*
let nombre = prompt("Pon tu nombre: ");
let apellido = prompt("Pon tu apellido: ");
let edad = prompt("Pon tu edad: ");
let nacionalidad = prompt("Pon tu nacionalidad: ");
let documento = prompt("Pon tu documento: ");

const usuario = [nombre, apellido, edad, nacionalidad, documento];

let user = usuario.join('-');

console.log(`Nuevo usuario agregado al sistema: ${user}`);
*/


/*
4 Lista de reproducción
Crear un programa que pida al usuario ingresar, por separado, 
el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que
diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".
*/

/* 
let nombrePlaylist = prompt("Pon nombre de una playlist");
let titulo1 = prompt("El titulo de la cancion");
let titulo2 = prompt("El titulo de la cancion");
let titulo3 = prompt("El titulo de la cancion");

console.log(`Se ha creado la playlist '${nombrePlaylist}' con las canciones '${titulo1[0]}', '${titulo2}', '${titulo3}'`);
*/

/* 
5 Dirección completa
Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, 
la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".
*/

/*
const direccion = [prompt("Pon la calle"), prompt("El numero"), prompt("El departamento"), prompt("El codigo postal"), prompt("La ciudad"), prompt("El pais")];

console.log(`La direccion que ha ingresado es: ${direccion[0]} ${direccion[1]}, ${direccion[2]}, ${direccion[3]}, ${direccion[4]}, ${direccion[5]}`);
*/


/*
7 Miembros de la familia
Crear una variable que contengan un array de strings con los nombres de integrantes de la familia y 
completarlo con todos o algunos nombres. Mostrarlos en un mensaje que los liste.

*/



let familia = ["Rafael", "Elena", "Maria", "Alex", "Maxim", "Danco", "Lia."];

console.log("En la familia estan: " + familia.join(', '));


/*
8 Minutos a segundos
Crear un programa que pida ingresar una cantidad en minutos mediante un
y muestre un mensaje con el resultado de la conversión en segundos.
*/

/*
const minutos = prompt("Pon una cantidad en minutos para convertir en segundos");
console.log(`Tu cantidad de ${minutos} minutos es igual a ${minutos*60} segundos! `);
*/

/*

/*
9 Área de un triangulo

Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.
*/

/*
let altura = prompt("Pon altura de un triangulo");
let base = prompt("Pon la base de un triangulo");

let area = base * altura / 2;

console.log(`El area de una base ${base} con altura ${altura} es igual a ${area}`);
*/

/*

/*
10 Múltiplos
Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. *
*/

/*
let num1 = parseInt(prompt("Pon un numero"));
let num2 = parseInt(prompt("Pon otro numero"));

if (num1 % num2 == 0) {
    console.log(`El ${num1} es multiplo del ${num2}!`);
} else {
    console.log(`El ${num1} no es multiplo del ${num2}!`);
}
*/

