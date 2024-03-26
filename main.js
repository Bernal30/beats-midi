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

//el bucle for optimiza el codigo en caso de querer agregar más instrumentos, por ende más teclas y por ende el length del array crece
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    //para el atributo onclick se utiliza una función anonima en la que se llamara a la función playSonido()
    tecla.onclick = function (){
        return playSonido(idAudio);
    }

    //captura el evento cuando una tecla sea presionada (onkeydown) y una función anonima retorne la incorporación de la clase 'activa' para la tecla
    tecla.onkeydown = function (){
        tecla.classList.add('activa');
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('active');
    }
}
