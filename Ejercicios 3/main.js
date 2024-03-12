/* Ejercicio 1
Dado un array de números, crear una función vAbsoluto que reciba un array 
y que devuelve un array con los valores absolutos de los números del array que se pasa como parámetro
Pista: usar Math.abs
*/


// let numeros = [1,25,-12,-4,5];

// function vAbsoluto(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(Math.abs(arr[i]));
//     };

//     return newArray;
// };

// console.log(numeros);
// console.log(vAbsoluto(numeros));

/* Ejercicio 2
Dado el array de alumnos, crear una función getFullStackStudents
 a la que se lo pasamos como parámetro y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack
Pista: usar filter
*/

// alumnosLista = [
//     {
//         nombre: `Alejandro`,
//         curso: `FullStack`
//     },
//     {
//         nombre: `David`,
//         curso: `Blockchain`
//     },
//     {
//         nombre: `Nikita`,
//         curso: `FullStack`
//     }
// ]

// function getFullStackStudets(alumnosLista) {
//     return alumnosLista.filter(student => student.curso === `FullStack`)
// }

// console.log(getFullStackStudets(alumnosLista));

/* Ejercicio 3
Dado el array de alumnos, crear una función llamada nStudentFullStack que nos 
devuelva el número de usuarios que pertenecen a dicha formación. De igual manera para el resto de las formaciones
Pista: usar reduce o filter (más eficiente reduce)
*/

/*
alumnosLista = [
    {
        nombre: `Alejandro`,
        curso: `FullStack`
   },
    {
        nombre: `David`,
        curso: `Blockchain`
    },
   {
        nombre: `Nikita`,
        curso: `FullStack`
    },
    {
        nombre: `Mireia`,
        curso: `Blockchain`
    }
]

function nStudentFullStack(alumnos) { 
    let numAlumnosFull = alumnos.filter(alumno => alumno.curso === `FullStack`);
    let numAlumnosBlock = alumnos.filter(alumno => alumno.curso === `Blockchain`);
    let numPertenecesFull = numAlumnosFull.length;
    let numPertenecesBlock = numAlumnosBlock.length;
    return `El numero de usuarios que pertenecen a FullStak es: ${numPertenecesFull}, que pertenecen a Blockchain es: ${numPertenecesBlock}`;
    
};

console.log(nStudentFullStack(alumnosLista));
*/

/* /* Ejercicio 4
Dado el array de alumnos, crear una función llamada
 getAdultStudents que reciba el array por parámetro y devuelva un array únicamente de los mayores de edad
*/

/*
alumnosLista = [
    {
        nombre: `Alejandro`,
        curso: `FullStack`,
        edad: 24
   },
    {
        nombre: `David`,
        curso: `Blockchain`,
        edad: 15
    },
   {
        nombre: `Nikita`,
        curso: `FullStack`,
        edad: 19
    },
    {
        nombre: `Mireia`,
        curso: `Blockchain`,
        edad: 22
    }
]

function getAdultStudents(alumnos) {
    let alumnosTotal = alumnos.length;
    let alumnosMayorEdad = [];
    for ( i = 0; i < alumnosTotal; i++) {
        if (alumnos[i].edad > 18) {
            alumnosMayorEdad.push(alumnos[i])
        }
    }

    return alumnosMayorEdad;
}

console.log(getAdultStudents(alumnosLista));

*/


/* Ejercicio 6

Dado el array de alumnos,
 crear una función llamada mayor que reciba el array como parámetro y que devuelva el alumno mayor de toda la lista de alumnos
Pista: usa reduce o for
*/

alumnosLista = [
    {
        nombre: `Alejandro`,
        curso: `FullStack`,
        edad: 25
   },
    {
        nombre: `David`,
        curso: `Blockchain`,
        edad: 12
    },
   {
        nombre: `Nikita`,
        curso: `FullStack`,
        edad: 19
    },
    {
        nombre: `Mireia`,
        curso: `Blockchain`,
        edad: 22
    }
]

function mayor(arr) {
    let alumnosTotal = arr.lenght;
    let alumnoMayor = [];
    for(i = 0; i < alumnosTotal; i++) {
        let k = 0;
        if (k < err[i].edad) {
            alumnoMayor.push(err[i]);
            k = err[i];
        }
        return alumnoMayor
    }   
    console.log(alumnoMayor);

}

console.log(mayor(alumnosLista));