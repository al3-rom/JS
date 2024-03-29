// Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
    /*document.querySelector('p').textContent = `Hola que tal?`;*/

// Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
    /*
        let primerParrafo = document.querySelector(`p`);
        let segundoEnlace = primerParrafo.querySelectorAll(`a`);

    segundoEnlace[1].href = `https://www.google.com`;
*/

//Selecciona el penúltimo hijo de una etiqueta con el id "milista"
    /*
        let lista = document.querySelector(`#milista > :nth-last-child(2)`);
        lista.textContent = `SISISISIS`;
    */

// Desactiva el atributo class del último p de la página
    /*
        let ultimoP = document.querySelector(`p:last-of-type`);
        ultimoP.removeAttribute(`Class`);
    */

// Crea un elemento h3 e insertalo al final del body
    /*
        let h3 = document.createElement(`h3`);
        h3.textContent = `Este es nuevo elemento h3`;
        document.body.appendChild(h3);
        h3.id = `Mih3Unico`;
    */
// Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
    /*    
        let h3Seleccionado = document.querySelector(`#Mih3Unico`);
        let nuevoSpan = document.createElement(`span`);
        nuevoSpan.textContent = ` Soy nuevo`;
        h3Seleccionado.appendChild(nuevoSpan);
    */
// Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
    /*
        let segundaP = document.querySelector(`p > :nth-of-type(2)`);
        let textoA = document.createElement(`a`);
        textoA.textContent = ` Aqui`;
        textoA.href = `https://google.com`;
        segundaP.appendChild(textoA);
        */
// Comprueba que todos los p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
    /*
        let todosP = document.querySelectorAll(`div.hero p`);
        let todosConClase = true;

        todosP.forEach ( p => {
            if (p.className === ``) {
        todosConClase = false;
            }
        })

        if ( todosConClase ) {
            let divHero = document.querySelector(`div.hero`);
            divHero.remove()
        } else {
            console.error(`No todos los P tienen clase!`);
        }
    */
// Selecciona el último nodo hijo de body
    /*
        let ultimoHijo = document.body.lastChild;
        console.log(ultimoHijo);
    */

// Selecciona el siguiente elemento hermano del primer p
    /*
        let primerP = document.querySelector(`p :first-of-type`);
        let hermanoP = primerP.nextElementSibling;
        console.log(hermanoP);
    */

// Borra el último elemento de body
    /*
        let ultimoElementoBody = document.body.lastElementChild;
        ultimoElementoBody.remove();
        */

// Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame  a "cambiado"
    /*
        let todosIMG = document.querySelectorAll(`img`);
        todosIMG.forEach( function(img) {
            if (img.getAttribute(`src`) === `cambiame`) {
                img.setAttribute(`src`, `cambiado`);
            }
        })
    */
// Dale la clase "claseejemplo" al primer p
    /*
        let primerP = document.querySelector(`p :first-of-type`);
        primerP.setAttribute(`class`, `claseejemplo`);
    */

// Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
    /*
       let todosUl = document.querySelectorAll(`ul`);
        todosUl.forEach ( function(ul) {
            let itemsLi = ul.querySelectorAll(`li`);
            if(itemsLi.length === 2) {
                let nuevoLi = document.createElement(`li`);
                nuevoLi.textContent = `Tercer Elemento`;

                ul.appendChild(nuevoLi);
            }
        })
    */
// Selecciona el padre del primer p
    /*
        let primerP = document.querySelector(`p`);
        let padre = primerP.parentNode;
        console.log(padre)
    */
// Selecciona el hermano anterior del primer p
    /*
        let primerP = document.querySelector(`p`);
        let hermanoAnterior = primerP.previousElementSibling;
        hermanoAnterior.style.color = `green`;
    */

// Selecciona el primer div con clase "container" y modifica su background-color a red
    /*
        var divClass = document.querySelector(`div.container`);
        divClass.style.backgroundColor = `red`;
    */
// Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
    /*
        var pText = document.querySelector(`#text`);
        pText.innerHTML = `<a href= "https://www.google.com">Visita Google</a>`;
    */

// Selecciona los div con clase "eustakio"
    /*
        let divEustakio = document.querySelectorAll(`div.eustakio`);
        console.log(divEustakio);
    */
// Selecciona los párrafos con un ID con valor "paisa"
    /*
        let pPaisa = document.querySelectorAll(`#paisa`);
        console.log(pPaisa);
    */
// Selecciona el primer párrafo hijo de un div
    /*
        let primerP = document.querySelector(`div > p`);
        console.log(primerP);
    */
// Selecciona el penúltimo enlace de la página.
    /*
        var penA = document.querySelectorAll(`a`);
    
        var indicePen = penA.length - 2;
        console.log(penA.length);

        var penUltA = (penA[indicePen]);
        console.log(penUltA);
    */
// Selecciona el padre del primer li de la página
    /*
        let primerli = document.querySelector(`li`)
        let padreLi = primerli.parentElement;
        console.log(padreLi);
    */

// Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
    /*
        var listasOrdenadas = document.querySelectorAll(`ol`);
        listasOrdenadas.forEach(function(lista) {
            if(lista.children.length === 2) {
                var nuevoLi = document.createElement(`li`);
                nuevoLi.textContent = `Elemento intermedio insertado`;

                lista.children[0].after(nuevoLi);
            }
        });
    */
// Añade el atributo class con valor azul al último elemento p
    /*
        let todosP = document.querySelectorAll(`p`);
        let ultimoP = todosP[todosP.length-1];

        ultimoP.classList.add(`azul`);
    */
// Comprueba los elementos div que tengan el atributo class, si lo tiene se debe añadir el valor container, y si no lo tiene no se hace nada.
    /*
        let todosDiv = document.querySelectorAll(`div`);
        todosDiv.forEach(function(div) {
            if(div.hasAttribute(`class`)){
                div.classList.add(`container`);
            };
        });
    */
// Obtén el valor del atributo alt de la última imagen
    /*
        let imagenes = document.querySelectorAll(`img`);
        let ultimaImagen = imagenes[imagenes.length-1];
        let valorAtributo = ultimaImagen.getAttribute(`alt`);
        console.log(valorAtributo);
    */
// Si tenemos lo siguiente, modifica el estilo para que el font-size sea de 40px, el color sea naranja y el texto se alinee a la derecha.
        /*
         h1{
            font-size: 20px;
            color: red;
            text-align: center;
            }
        */
    /*
        let estiloh1 = document.querySelector(`h1`);
        estiloh1.style.fontSize = `40px`;
        estiloh1.style.color = `orange`;
        estiloh1.style.textAlign = `right`;
    */
// Suponiendo que tenemos el siguiente código. Añade debajo un tercer p que diga "soy el tres";
    /*
     <div id="parrafos">
        <p>hola soy el uno</p>
        <p>hola soy el dos</p>
    </div>
    */
   
   /*
        var nuevoP = document.createElement(`p`);
        nuevoP.textContent = `soy el tres`;
        var divParrafos = document.querySelector(`#parrafos`);
        divParrafos.appendChild(nuevoP);
    */

// Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto "hola yo soy el uno y medio".
    /*
         var nuevoP = document.createElement(`p`);
        nuevoP.textContent = `soy yo soy el uno y medio`;
        var divParrafos = document.querySelector(`#parrafos p`);
        divParrafos.appendChild(nuevoP);
    */

// Añade un nuevo elemento a una lista de modo que ocupe la primera posición.
    /*
        let unaLista = document.querySelector(`ol`);
        console.log(unaLista);
        let nuevoElemento = document.createElement(`li`);
        nuevoElemento.textContent = `Ahora yo soy el primero!`;
        unaLista.prepend(nuevoElemento);
    */
// Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.
    /*
        let todosClase = document.querySelector(`.class`);
        console.log(todosClase);
        todosClase.remove();
    */

// Convierte el primer elemento de una lista en un enlace.
    /*
        let primerElementoLista = document.querySelector(`ol li`);
        console.log(primerElementoLista);
        let unEnlace = document.createElement(`a`);
        unEnlace.href = `https://www.google.com`;
        unEnlace.textContent = primerElementoLista.textContent;
        primerElementoLista.innerHTML = ``;
        primerElementoLista.appendChild(unEnlace);
    */
// Borra el atributo title de todas las imágenes con la clase 'img'.
    /*
        let imagenes = document.querySelectorAll(`img`);
        console.log(imagenes);
        imagenes.forEach(function(img) {
            img.removeAttribute(`title`);
        })
    */

// Añade un punto final al texto contenido por las etiquetas p.
    /*
        let todasP = document.querySelectorAll(`p`);
        todasP.forEach(function(p) {
            var textoActual = p.textContent;
        p.textContent = textoActual + `.`;
        })
    */
// De un conjunto de etiquetas article hijos de un section con la clase 'products', selecciona 
// aquellos que tengan la clase 'oferta' y establece el valor de su atributo data-iva a cero
    /*
        let conOferta = document.querySelector(`.products article.oferta`);
        console.log(conOferta);
        conOferta.setAttribute(`data-iva`, `0%`);
    */
// Añade el texto "Modificado" al tercer li de todos los ol
    /*
        let losOl = document.querySelectorAll(`ol`);
        losOl.forEach(function(lista) {
            var tercerElemento = lista.querySelector(`li:nth-child(3)`);

            if(tercerElemento) {
                tercerElemento.textContent += ` Modificado`;
            }
        })
    */
// Incluye la clase porelasterisco en todos los p que tengan la clase preparado
    /*
        let pPreparado = document.querySelectorAll(`p.preparado`);
        console.log(pPreparado);
        pPreparado.forEach(function(p) {
            p.classList.add(`porelasterisco`);
        })
    */
// Inserta un div con la clase pepaino y cuyo border sea rojo, con dos etiquetas hijas p,
// en las que el primer párrafo sea la clase del div y el segundo párrafo sea el color del border.
    /*
        let unDiv = document.createElement(`div`);
        unDiv.setAttribute(`class`, `pepaino`);
        unDiv.style.borderColor = `red`;
        let primeraP = document.createElement(`p`);
        let segundaP = document.createElement(`p`);
        primeraP.textContent = `pepaino`;
        segundaP.textContent = `red`;

        unDiv.appendChild(primeraP);
        unDiv.appendChild(segundaP);
        var contenedor = document.body;

        contenedor.prepend(unDiv);
    */
// De las listas ordenadas, selecciona el primer y último hijo "li" y sus hermanos anteriores o posteriores y cambiales el color a rojo;
    /*
        let listasOrdenadas = document.querySelectorAll(`ol`);
        listasOrdenadas.forEach(function(lista) {
            var primerLi = lista.querySelector(`li:first-of-type`);
            var ultimoLi = lista.querySelector(`li:last-of-type`);
            var hermanoAnteriorUno = primerLi.previousElementSibling;
            var hermanoAnteriorDos = ultimoLi.previousElementSibling;
            primerLi.style.color = `red`;
            ultimoLi.style.color = `red`;
            hermanoAnteriorDos.style.color = `red`;
            hermanoAnteriorDos.style.color = `red`;
            
            
            
        })
    */
// Seleccionar los span que sean hijos de un "p" 
// cuyo padre del elemento "p" sea un div con la clase "padre"y cambia los estilos del div poniendo un color de fondo azul
    /*
        let losSpan = document.querySelector(`div.padre p span`);
        console.log(losSpan);
        document.querySelector(`div.padre`).style.backgroundColor = `blue`;
    */
   

    
