/* document.querySelector('#sonido_tecla_pom').play();
esta linea de codigo  ejecutara la función play() del objeto seleccionado indefinidamente 
cuando se carge la pagina web debido al script, esto provocara un error en el que la función play
fallara por que el usuario no interactuó con el documento primero. Se puede solucionar esto colocando
la linea de codigo en una función que sea llamada cuando el usuario interactue con el documento
por ejemplo cuando de click en un boton. */

function playSonido (IdElementoAudio) {
    return document.querySelector(IdElementoAudio).play();
}

//lista de objetos con la clase '.tecla' o sea lso botones de cada sonido 
const listaDeTeclas = document.querySelectorAll('.tecla');

/* el contador tendra el valor de los indices de cada elemento de la lista respectivamente para cada ciclo del while
cuando contador = 0 el bucle trabajara con el primer elemento de la lista
cuando contador = 1 el bucle trabajara con el segundo elemento de la lista */
let contador = 0
while (contador < 9) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    //para el atributo onclick se utiliza una función anonima en la que se llamara a la función playSonido()
    tecla.onclick = function (){
        return playSonido(idAudio);
    }
    contador++;
}

console.log(listaDeTeclas);

//para guardar el valor de una función en un atributo se deben omitir los parentecis y así no se ejecuta inmediatamente
//document.querySelector('.tecla_pom').onclick = playSonidoPom;
