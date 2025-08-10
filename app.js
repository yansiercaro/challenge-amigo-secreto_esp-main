// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crea un array para almacenar los nombres.
let amigosSorteo = [];
//Capturar el valor del campo de entrada.
function agregarAmigo() {
    let input = document.getElementById ("amigo");
    //Validar la entrada
    if (nombre === ""){
        alert("Por favor agrege un nombre");
        return;
    }
    //Actualizar la lista de amigos
    nombre.push(nombre);
    input.value = ""; //limpiar el campo para agregar otro nombre.

    mostrarLista ();
}
