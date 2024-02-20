/*
1 Número mayor a 100
Crear un programa que permita ingresar tres números y muestre si alguno de ellos es mayor a 100
*/

/*

let num1 = parseInt(prompt("Pon un numero"));
let num2 = parseInt(prompt("Pon segundo numero"));
let num3 = parseInt(prompt("Pon tercer numero"));

if (num1 > 100) {
    console.log(`${num1} es mayor que 100`);
} else if (num2 > 100) {
    console.log(`${num2} es mayor que 100`);
} else if (num3 > 100) {
    console.log(`${num3} es mayor que 100`);
} else {
    console.log(`No hay numeros mayores que 100`);
}
*/

/*2 Número dentro de rango
Crear un programa que pida al usuario ingresar un número que represente
el límite inferior del rango, uno que represente el límite mayor, y luego otro cualquiera y
mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.
*/


/*
let numLimiteInf = parseInt(prompt("Ingresa un número del limite inferior"));
let numLimiteMay = parseInt(prompt("Ingresa un número del limite mayor"));
let numNormal = parseInt(prompt("Cualquier numero"));

if (numNormal >= numLimiteInf && numNormal <= numLimiteMay) {
    console.log(`El numero ${numNormal} se encuentra dentro de los limites (limite inferior ${numLimiteInf} y limite mayor ${numLimiteMay})`);
} else {
    console.log(`El numero ${numNormal} esta fuera de los limites`);
}
*/


/*
3 Donación de sangre
Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente,
si ha tenido o tiene hepatitis, si tiene anemia. Si responde a alguna de ellas afirmativamente,
debe mostrar un mensaje que indique si puede o no donar sangre
*/

/*
let tatu = confirm("Has hecho tatuajes recientemente?");
let hepatitis = confirm("Tienes o has tenido hepatitis?");
let anemia = confirm("Tienes anemia?");

if (tatu || hepatitis || anemia) {
    console.log("No puedes donar sangre!");
} else {
    console.log("Perfecto! Puedes donar sangre!");
}
*/

/*

4 Autenticación
Crear un programa que pida ingresar el usuario y la contraseña y los compare con 
el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado
*/

/*
const user_login = [prompt("Ingresa el nombre del usuario"), parseInt(prompt("Ingresa la constraseña"))];
const user = ["Alejandro", parseInt(223223)];

if (user_login[0] == user[0] && user_login[1] == user[1]) {
    console.log("El acceso autorizado!");
}else {
    console.log("El acceso denegado");
}
*/

/*
5 Número más grande (2 números)
Hacer un programa que pida ingresar 2 números, y muestre como resultado el 
más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los 
números es igual a otro, debe mostrar un mensaje diciéndolo.
*/

/*
let num1 = parseInt(prompt("Pon un numero"));
let num2 = parseInt(prompt("Pon otro numero"));

if (num1 > num2) {
    console.log(`El numero ${num1} es mas grande`);
} else if (num1 < num2){
    console.log(`El numero ${num2} es mas grande`);
} else {
    console.log(`El numero ${num1} es igual a numero ${num2}`);
}
*/

/*
6 Número más grande (3 números)
Hacer un programa que pida ingresar 3 números, y 
muestre como resultado el más grande de ellos. Una vez hecho esto, a
gregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.
*/

/*
let num1 = parseInt(prompt("Pon un numero"));
let num2 = parseInt(prompt("Pon otro numero"));
let num3 = parseInt(prompt("Pon tercer numero"));


if (num1 == num2 && num1 == num3 && num2 == num3) {
    console.log("Todos los numeros son iguales");
}else if (num1 == num2){
    console.log(`El numero mayor es ${Math.max(num1,num2,num3)}`);
    console.log(`Los numeros ${num1} y ${num2} son iguales`);
}else if (num2 == num3) {
    console.log(`El numero mayor es ${Math.max(num1,num2,num3)}`);
    console.log(`Los numeros ${num2} y ${num3} son iguales`);
}else if (num3 == num1) {
    console.log(`El numero mayor es ${Math.max(num1,num2,num3)}`);
    console.log(`Los numeros ${num3} y ${num1} son iguales`);
} else {
    console.log(`El numero mayor es ${Math.max(num1,num2,num3)}`)
}
*/

/*
7 Términos y condiciones de uso
Crear un programa que pregunte si acepta los términos y condiciones de uso. 
Si el usuario responde que sí, debe mostrar un mensaje que diga "Continuando con el proceso...". 
Si responde que no, debe mostrar un mensaje que diga "No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".
*/

/*
let terminosYcondiciones = confirm("Aceptas los terminos y condiciones de uso?");

if (terminosYcondiciones) {
    console.log("Continuando con el proceso...");
} else {
    console.log("No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso.");
}
*/

/*
8 Quizz
Crear un programa que sea un cuestionario con 3 preguntas de sí o no.  
Al finalizar, mostrar un mensaje de felicitaciones si se respondió bien a todas, 
o uno de que ha perdido el juego si respondió mal al menos una.
*/

/*

let pregunta1 = confirm("Eres humano?");
let pregunta2 = confirm("Comes?");
let pregunta3 = confirm("Duermes?");

if (pregunta1 && pregunta2 && pregunta3) {
    console.log("Felicidades! Has respondido bien a todas las preguntas!");
} else {
    console.log("Lo sentimos, pero has perdido el juego!");
}
*/


/*
9 Juez de gusto
Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). 
Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. 
Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia y volver a pedir dicho número.
*/

/* 
function pedirEvaluacion() {
    let evaluacion = prompt("Del 1 a 10, cuanto te gustan manzanas?");
    evaluacion = parseInt(evaluacion);

if (!evaluacion || evaluacion < 1 || evaluacion > 11) {
    alert("Por favor, ingresa un numero del 1 a 10!");
    pedirEvaluacion();
} else {
    mostrarMensaje(evaluacion);
}
}

function mostrarMensaje(evaluacion) {
    if (evaluacion >= 1 && evaluacion <= 3) {
        alert(`Parece que no te gustan manzanas!`);
    } else if (evaluacion >= 4 && evaluacion <= 6){
        alert(`Parece que te da igual comer una manzana!`);
    } else if (evaluacion >= 7 && evaluacion <= 8) {
        alert(`Parece que te gustan manzanas!`);
    }  else if (evaluacion >= 9 && evaluacion <= 10) {
        alert(`Parece que te encantan manzanas!`);
    }
}

pedirEvaluacion();
*/

/*
10 Calificación

Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, y muestre un mensaje que diga:
¡Excelente!, si la nota es 10
¡Muy bien!, si la nota es 8 o 9
Aprobado, si la nota es 6 o 7
Reprobado, si la nota es menor a 6
*/

function resultadoEvaluacion() {
    let evaluacion = prompt("Ingresa un numero de 1 a 10!");
    evaluacion = parseInt(evaluacion);

if (!evaluacion || evaluacion < 1 || evaluacion > 11) {
    alert("Por favor, ingresa un numero del 1 a 10!");
    resultadoEvaluacion();
} else {
    mostrarMensaje(evaluacion);
}
}

function mostrarMensaje(evaluacion) {
    if (evaluacion < 6) {
        alert(`Reprobado`);
    } else if (evaluacion >= 6 && evaluacion <= 7){
        alert(`Aprobado`);
    } else if (evaluacion >= 8 && evaluacion <= 9) {
        alert(`¡Muy bien!`);
    }  else if (evaluacion = 10) {
        alert(`¡Excelente!`);
    }
}

resultadoEvaluacion();