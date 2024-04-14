/* 
document.querySelector('#sonido_tecla_pom').play();
esta linea de codigo  ejecutara la función play() del objeto seleccionado indefinidamente 
cuando se carge la pagina web debido al script, esto provocara un error en el que la función play
fallara por que el usuario no interactuó con el documento primero. Se puede solucionar esto colocando
la linea de codigo en una función que sea llamada cuando el usuario interactue con el documento
por ejemplo cuando de click en un boton.
*/

function playSonido (IdElementoAudio) {
    return document.querySelector(IdElementoAudio).play();
}

//lista de objetos con la clase '.tecla' o sea lso botones de cada sonido 
const listaDeTeclas = document.querySelectorAll('.tecla');

//el bucle for optimiza el codigo en caso de querer agregar más instrumentos, por ende más teclas y por ende el length del array crece
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    //la tecla es asignada al elemento del array deacuerdo a su posición en el mismo array
    const tecla = listaDeTeclas[contador];
    //el instrumento es asignado a la segunda clase del array de clases clases del elemento tecla
    const instrumento = tecla.classList[1];
    //se construye el id de cada audio conforme el for recorre el array
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    
    //para el atributo onclick se utiliza una función anonima en la que se llamara a la función playSonido()
    tecla.onclick = function (){
        return playSonido(idAudio);
    }

    //captura el evento cuando una tecla sea presionada (onkeydown) y una función anonima retorne la incorporación de la clase 'activa' para la tecla
    tecla.onkeydown = function (event){
        //si se presiona la tecla Enter o la tecla Space
        if ((event.code === 'Enter') || (event.code === 'Space')) {
            //aparece en la consola el codeValue de la tecla Enter o de la tecla Space 
            console.log(event.code);

            //se añade la calse 'activa' a la tecla
            tecla.classList.add('activa');

            //se deja de presionar la tecla Enter o la tecla Space se remueve la clase 'activa'
            tecla.onkeyup = function (){
                tecla.classList.remove('activa');
            }  
        }
    }
}
