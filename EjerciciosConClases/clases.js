/*
Calculadora
Propiedades
    resultado (número), inicializa en 0
Métodos
    sumar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
    restar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
    multiplicar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
    dividir(numero): divide resultado por numero, y actualiza resultado con el valor de dicha operación
    obtenerResultado(): devuelve resultado
    reiniciar(): pone resultado en 0
Observaciones
    arrojar un error cuando el argumento ingresado no sea un número, con Number.isFinite()
    arrojar un error cuando se intenta dividir por 0
 */


    /*
class Calculadora {
   #resultado;

   constructor() {
    this.#resultado = 0;
   }

   obtenerResultado() {
    return this.#resultado;
   }

   reiniciar() {
    this.#resultado = 0;
   }

   sumar(numero) {
    try {
        if(isNaN(numero)) {
            throw Error(`No se ha introducido un numero valido`)
        } else {
            this.#resultado = this.#resultado + numero
        }
    } catch(err) {
        console.log(err.message);
    }
   };

   restar(numero) {this.#resultado = this.#resultado - numero};

   multiplicar(numero) {this.#resultado = this.#resultado * numero}
    
   dividir(numero) {
    try {
        if( numero === 0 || isNaN(numero)) {
            throw Error(`No se pude dividir en 0 o no se ha introducido un numero valido`)
        } else {
            this.#resultado = this.#resultado / numero;
        }
    } catch(err) {
        console.error(err.message);
    }
   }
} 

let calc = new Calculadora();
console.log(calc.obtenerResultado());
 calc.sumar(5);
 console.log(calc.obtenerResultado());
 calc.dividir(2);
 console.log(calc.obtenerResultado());
 calc.restar(2);
 console.log(calc.obtenerResultado());
 calc.multiplicar(5);
 console.log(calc.obtenerResultado());
 calc.dividir(2);
 console.log(calc.obtenerResultado());
 calc.sumar(`Hola`);
 console.log(calc.obtenerResultado());
 calc.reiniciar();
 console.log(calc.obtenerResultado())
    */

 /*

Auto
    Propiedades
        encendido (booleano), inicializa en false
        velocidad (número), inicializa en 0
        marca (string)
        modelo (número)
        patente (string)
    Constructor
     pide como argumentos marca, modelo, patente y los asigna a sus respectivas propiedades
    Métodos
        arrancar() pone encendido en true
        apagar() pone encendido en false
        acelerar() suma 10 a velocidad y actualiza dicha propiedad
        desacelerar() resta 10 a velocidad y actualiza dicha propiedad
        toString() devuelve un string con la siguiente plantilla ${marca} ${modelo}, patente ${patente}
    Observaciones
        sólo se puede acelerar o desacelerar si el auto se encuentra prendido
        sólo se puede apagar el auto si la velocidad es 0
        la velocidad mínima es 0
 */

        /*
class Auto {
    #encendido;
    #velocidad;
    #marca;
    #modelo;
    #patente;

    constructor(marca, modelo, patente) {
        this.#encendido = false;
        this.#velocidad = 0;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#patente = patente;
    }

    toString() {
        return `Marca: ${this.#marca}, Modelo: ${this.#modelo}, Patente: ${this.#patente}`
    };

    arrancar() { return `El coche esta arrancado! ${this.#encendido = true}` };

    apagar() {
            if( this.#velocidad != 0) {
                throw Error(`No se puede apagar el coche mientras su velocidad sea mayor que 0!`)
            } else {
              return `El coche esta apagado perfectamente return ${this.#encendido = false}`
            }
    };

    acelerar() {
            if ( this.#encendido != true) {
                throw Error(`El auto no esta encendido!`)
            } else {
                this.#velocidad = this.#velocidad + 10;
            }    
    };

    desacelerar() {
            if ( this.#encendido != true) {
                throw Error(`El auto no esta encendido!`)
            } else {
                if ( this.#velocidad === 0) {
                    throw Error(`La velocidad ya esta a minimo!(0)`);
                } else {
                    this.#velocidad = this.#velocidad - 10;
                }
            }
    }

    
}

let coche = new Auto(`BMW`, `Serie1`, `Derechos reservados por BMW`);
console.log(coche.toString());

coche.arrancar()
coche.acelerar();
coche.desacelerar();
coche.apagar();
    */




/*
Televisor
    Propiedades

        encendido (booleano), inicializa en false
        canal (número), inicializa en 0
        canales (número)
        volumen (número), inicializa en 0
        marca (string)
    Constructor

        pide como argumentos marca y canales y los asigna a sus respectivas propiedades
    Métodos

        prender() pone encendido en true
        apagar() pone encendido en false
        verCanalSiguiente() suma 1 a canal y actualiza dicha propiedad
        verCanalAnterior() resta 1 a canal y actualiza dicha propiedad
        cambiarCanal(canal) actualiza la propiedad canal con el valor del parámetro canal
        subirVolumen() suma 1 a volumen y actualiza dicha propiedad
        bajarVolumen() resta 1 a volumen y actualiza dicha propiedad
        toString() devuelve un string como el siguiente ejemplo:

Televisor Samsung
- Canales: 100
- Canal actual: 23
- Volumen actual: 34
    Observaciones

        solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
        canales representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
        solo se puede cambiar a un canal que exista
        el volumen mínimo es 0 y el máximo 5
*/


/*
class Televisor {
    #encendido;
    #canal;
    #canales;
    #volumen;
    #marca;


    constructor(canales, marca) {
        this.#encendido = false;
        this.#canal = 0;
        this.#canales = Number(canales);
        this.#volumen = 0;
        this.#marca = marca;
        
    };

    prender() {
        if (this.#encendido === false) {
           return this.#encendido = true;
        } else {
            console.log(`La tele ya esta encendida!`);
        }
    };

    apagar() {
        if (this.#encendido === true) {
           return this.#encendido = false;
        } else {
            console.log(`La tele ya esta apagada!`);
        }
    };

    verCanalSugiente() {
        
        if (this.#encendido === true) {
            if (this.#canal != this.#canales) {
                return   this.#canal += 1;
            } else {
                return  this.#canal = 0;
            }
        } else {
            console.log(`La tele esta apagada! No se puede ver canal suguiente!`);
        }
    };

    verCanalAnterior() {
        
        if (this.#encendido === true) {
            if (this.#canal === 0) {
                return   this.#canal = this.#canales
            } else {
                return this.#canal -= 1;
            }
        } else {
            console.log(`La tele esta apagada! No se puede ver canal anterior!`);
        }
    };

    cambiarCanal(canal) {
        if(this.#canales >= canal) {
           return this.#canal = canal;
        } else {
            console.log(`Canal no existe`);
        }
    };

    subirVolumen() {
        if (this.#volumen < 5) {
          return  this.#volumen += 1;
        } else {
            console.log(`El volumen esta a su maximo!`);
        }
    }

    bajarVolumen() {
        if (this.#volumen > 0) {
            return this.#volumen -= 1;
        } else {
            console.log(`El volumen esta a minimo!`);
        }
    }

    toString() {
        return `Televisor ${this.#marca}
                -Canales: ${this.#canales}
                -Canal actual: ${this.#canal}
                -Volumen actual: ${this.#volumen}`
    };
}

let TV = new Televisor(15, `LG`);

console.log(TV.toString());
TV.prender();

TV.verCanalSugiente();
console.log(TV.toString());
TV.cambiarCanal(15);
console.log(TV.toString());
TV.verCanalAnterior();
console.log(TV.toString());
TV.verCanalSugiente();
TV.subirVolumen();
console.log(TV.toString());
TV.verCanalSugiente();
console.log(TV.toString());
TV.verCanalSugiente();
console.log(TV.toString());
TV.verCanalAnterior();
console.log(TV.toString());
TV.verCanalAnterior();
console.log(TV.toString());

*/

/*
Anotador
    Propiedades

        titulo (string)
        notas (array de strings), inicializa vacío
    Constructor

        pide como argumento titulo y lo asigna a sus respectiva propiedad
    Método

        agregarNota(nota) agrega nota al array de notas
        actualizarNota(id, nota) actualiza el ítem con índice id, reemplazándolo por nota
        obtenerNota(id) devuelve el ítem del array notas con índice id
        eliminarNota(id) elimina de notas el ítem con índice id
        eliminarNotas() borra todos los ítems de notas
        listarNotas() devuelve un string con todas las notas y sus respectivos ids, por ejemplo

Cosas para hacer
------------------------
1. Ir al súper
2. Ver serie
3. Programar
4. Leer libro

*/

/*
class Anotador {
    #titulo;
    #notas;

    constructor(titulo) {
        this.#notas = [];
        this.#titulo = titulo;
    }

    agregarNota(nota) {
       return this.#notas.push(nota);
    }

    actualizarNota(id, nota) {
        this.#notas[id-1] = nota;
    }

    obtenerNota(id) {
        return this.#notas[id-1];
    }

    eliminarNota(id) {
        let idParaElemninar = (id-1);
        this.#notas.splice(idParaElemninar, 1);
    }

    eliminarNotas() {
        this.#notas.length = 0;
    }

    listarNotas() {
        let resultado = `${this.#titulo}
        ----------------`
        
        for(let i = 0; i < this.#notas.length; i++) {
             resultado += `
             ${i+1}. ${this.#notas[i]}`
        }

        return resultado;
    }

}

let NuevaLista = new Anotador(`Cosas pendientes`);

NuevaLista.agregarNota(`Barrer`);
console.log(NuevaLista.listarNotas());
NuevaLista.agregarNota(`Fregar`);
NuevaLista.agregarNota(`Estudiar`);
NuevaLista.agregarNota(`Ir al GYM`);
console.log(NuevaLista.listarNotas());
NuevaLista.actualizarNota(1, `Ducharse`);
console.log(NuevaLista.listarNotas());
console.log(NuevaLista.obtenerNota(3));
NuevaLista.eliminarNota(3);
console.log(NuevaLista.listarNotas());
NuevaLista.eliminarNotas();
console.log(NuevaLista.listarNotas());
*/





