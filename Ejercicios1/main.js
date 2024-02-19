//1.Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
console.log("Hola mundo!");
//2.Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
let saludo = ("Hola mundo en una variable");
console.log(saludo);
/* 
3.Escribir un programa que pregunte el nombre del usuario en 
la consola y después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola \<nombre>!, donde \<nombre> es el nombre que el usuario haya introducido. */

  /*  var nombre = prompt("Pon tu nombre");
    console.log("Hola " + nombre + "!");
    */

/*
4.Escribir un programa que pregunte el nombre del usuario en la consola y un número entero e 
imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número introducido. */

    /* 
    var nombre = prompt("Pon tu nombre");
    var numero = prompt("Pon un numero entero:");

    let i = 0;

    while ( i < numero) {
    console.log(nombre);
    i++;
    } */

/*
5.Escribir un programa que pregunte el nombre del usuario en la consola y 
después de que el usuario lo introduzca muestre por pantalla \<NOMBRE> tiene \<n> letras,
donde \<NOMBRE> es el nombre de usuario en mayúsculas y \<n> es el número de letras que tienen el nombre.
*/

/*
var nombre = prompt("Pon tu nombre");

var nombreMayusculas = nombre.toUpperCase();

var contarLetras = nombre.length;


document.write(nombreMayusculas + " tiene " + contarLetras + " letras "); */

/* 
6.Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga que le corresponde.
*/

/* 
var horasTrabajo = prompt("Pon tus horas trabajadas: ");
var costeHora = prompt("Pon el coste por hora: ");
var paga = costeHora * horasTrabajo;

console.log("Tu paga correspondiente es: " + paga + "$"); */

/*
7.Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), 
calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la 
frase: Tu índice de masa corporal es \<imc>.
*/

  /* var peso = prompt("Pon tu peso en kg: ");
var estatura = prompt("Pon tu estatura en metros: ");

var IMC = peso/estatura;

console.log("Tu indice de masa corporal es: " + IMC); */

/*
8.Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión.
 */

  /* var cantidadInvertir = prompt("Pon una cantidad para invertir: ");
var interesAnual = prompt("Interes anual: ");
var numeroYear = prompt("Numero de años: ");

var capObtenido = (cantidadInvertir * (interesAnual/100) * numeroYear);

console.log("Capital obtenido en la inversion: ", + capObtenido);
 */

/*
9.Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo 
y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y
 muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g.
 Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.
 */

  /* var pesoPayaso = 112;
var pesoMuneca = 75;

var numPayasos = prompt("Introduzca el número de payasos: ");
var numMunecas = prompt("Introduzca el número de munecas: ");

var pesoTotal = pesoPayaso * numPayasos + pesoMuneca * numMunecas;

console.log("Peso total del paquete con " + numPayasos + " payasos y " + numMunecas + " munecas es: " + pesoTotal + "g");
*/

/*
10.Una panadería vende barras de pan a 3.49€ cada una. 
El pan que no es el día tiene un descuento del 60%. Escribir un programa que comience leyendo el número de barras vendidas que no son del día. 
Después el programa debe mostrar el precio habitual de una barra de pan, el descuento que se le hace por no ser fresca y el coste final total.

  */

var barraPan = 3.49;
var barraPanVieja = (barraPan * 0.6);


var cantidadVendida = prompt("Barras de pan viejo vendidas: ");
var barrasViejasVendidas = barraPanVieja * cantidadVendida;

console.log("El precio habital del pan es: " + barraPan + "$" + " , el descuento es de 60% por no ser fresca. Coste final total es: ", barrasViejasVendidas + "$");


