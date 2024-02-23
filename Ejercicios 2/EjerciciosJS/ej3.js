/*
1 🔢 Número par o impar
Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.
*/

/*
let parImpar = parseInt(prompt("Ingresa un numero"));
if (parImpar % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}
*/

/*
2 📆 Días del mes
Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.
*/

/*
let mes = prompt("Pon un mes");
mes = mes.toLowerCase();


function obtenerDias(mes) {
    switch(mes) {
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
          return 31;
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
          return 30;
        case 'febrero':
          return 28;
    }
}

let dias = obtenerDias(mes);

if (typeof dias === 'number') {
    console.log(`El mes del ${mes} tiene ${dias} dias`);
} else {
    console.log(`Mes desconocido`);
}
*/

/*
3 🔐 Cambio de contraseña
Hacer un programa que permita cambiar la contraseña de usuario. 
Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, 
tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta 
fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.
*/

/*
let changePassword = confirm("Quieres cambiar contraseña?");

let pregunta1 = `john`;
let pregunta2 = `si`;
let pregunta3 = `ok`;

if (changePassword) {
    alert(`Muy bien! Pero tienes que responder a 3 preguntas!`)
    let respuesta1 = prompt(`Como se llama el que Cena?`);
   
    if (respuesta1.toLowerCase() == pregunta1) {
        alert(`Correcto!`);
        let respuesta2 = prompt(`Tienes hermanos?`);
        if ( respuesta2.toLowerCase() == pregunta2) {
            alert(`Correcto!`);
            let respuesta3 = prompt(`Que dijo el Yayo cuando le han dicho de ir a la carcel?`);
            if(respuesta3.toLowerCase() == pregunta3) {
                alert("Correcto!")
                let newPassword = prompt("Ingresa nueva contraseña!");
                alert("Contraseña fue cambiadada correctamente!");
            } else {
                alert(`La respuesta es incorrecta!`);
            }
        } else {
            alert(`La respuesta es incorrecta!`);
        }
        
    } else {
        alert(`La respuesta es incorrecta!`);
    }
} else {
    alert(`Pues no la vamos a cambiarla!`);
}
*/


/*
4 ✊🤚✌️ Piedra, papel o tijera
Crear un programa que permita ingresar al jugador piedra, papel o tijera,
 genere de forma aleatorcia la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.
*/

/*
let opciones = ["piedra", "papel", "tijeras"];

function valorRandomComputadora() {
    const indiceRandom = Math.floor(Math.random() * opciones.length);
    return opciones[indiceRandom];
}

function elegirGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "Empate";
      } else if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "tijera" && computadora === "papel") ||
        (jugador === "papel" && computadora === "piedra")
      ) {
        return "¡Ganaste!";
      } else {
        return "La computadora gana";
      }
    }

let opcionJugador = prompt(`Elige entre: 'piedra', 'papel' o 'tijera'`).toLowerCase();

console.log(elegirGanador(opcionJugador, valorRandomComputadora()));
*/


/*
5 🗓 Meses del año
Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.
*/
/*
function determinarMes(numero) {
    switch(numero) {
        case 1: return 'Enero';
        case 2: return 'Febrero';
        case 3: return 'Marzo';
        case 4: return 'April';
        case 5: return 'Mayo';
        case 6: return 'Junio';
        case 7: return 'Julio';
        case 8: return 'Agosto';
        case 9: return 'Septiembre';
        case 10: return 'Octubre';
        case 11: return 'Noviembre';
        case 12: return 'Diciembre';
    }
}

let numero = prompt("Pon un numero");
numero = parseInt(numero);



mes = determinarMes(numero);
alert(mes);
*/


/*
11 🧮 Calculadora
Crear un programa que permita elegir entre las operaciones:
SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella.
*/

/*
function suma(num1,num2) {
    let resultado = (num1 + num2)
    return resultado;
}

function resta(num1,num2) {
    let resultado = (num1 - num2)
    return resultado;
}

function division(num1,num2) {
    let resultado = (num1 / num2)
    return resultado;
}

function multiplicacion(num1,num2) {
    let resultado = (num1 * num2)
    return resultado;
}

let operacion = prompt(`Elige una de las operaciones: SUMA, RESTA, DIVISION, MULTIPLICACION`).toLowerCase();

if (operacion == `suma`) {
    let operacionNumero1 = Number(prompt(`Indica 1 numero para tu operacion!`));
    let operacionNumero2 = Number(prompt(`Indica 2 numero para tu operacion!`));
        console.log(suma(operacionNumero1, operacionNumero2));
} else if (operacion == `resta`) {
    operacionNumero1 = Number(prompt(`Indica 1 numero para tu operacion!`));
    operacionNumero2 = Number(prompt(`Indica 2 numero para tu operacion!`));
        console.log(resta(operacionNumero1, operacionNumero2));
} else if (operacion == `division`) {
    operacionNumero1 = Number(prompt(`Indica 1 numero para tu operacion!`));
    operacionNumero2 = Number(prompt(`Indica 2 numero para tu operacion!`));
        console.log(division(operacionNumero1, operacionNumero2));
} else if (operacion == `multiplicacion`) {
    operacionNumero1 = Number(prompt(`Indica 1 numero para tu operacion!`));
    operacionNumero2 = Number(prompt(`Indica 2 numero para tu operacion!`));
        console.log(multiplicacion(operacionNumero1, operacionNumero2));
} else {
    alert(`Error! Revise tus operaciones!`);
}
*/

