// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea un array para almacenar los nombres.
let amigosSorteo = [];

//Capturar el valor del campo de entrada.
function agregarAmigo() {

    let input = document.getElementById ("amigo");
    let nombre = input.value.trim();
    //Validar la entrada
    if (nombre === ""){
        alert("Por favor agrege un nombre");
        return;
    }
    //Actualizar la lista de amigos
    amigosSorteo.push(nombre);
    input.value = ""; //limpiar el campo para agregar otro nombre.

//Mostrar la lista en pantalla
mostrarLista();
}

//Funcion para mostrar la lista de amigos en pantalla
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpia la lista antes de mostrar

//Iterar sobre el arreglo y agregar elementos a la lista.
    for (let i = 0; i < amigosSorteo.length; i++) {
        let li = document.createElement ("li");
        li.textContent = amigosSorteo[i];
        lista.appendChild(li);
    }
 
}

function sortearAmigos(){
    let resultado = document.getElementById("resultado");

    //Validar que hay amigos disponibles en el array
    if (amigosSorteo.length === 0) {
        alert("Agrega al menos un amigo al sorteo");
        return
    }

}
//Generar un indice aleatorio.
let indiceAleatorio = Math.floor(Math.random() * amigosSorteo.length);

//Obtener el nombre sorteado
let amigoSorteado = amigosSorteo[indiceAleatorio];

//Mostrar el resultado
resultado.innerHTML = `<li> El amigo sorteado es: <strong>${amigoSorteado}</strong> </li>`;
