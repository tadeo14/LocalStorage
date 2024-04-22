//traemos la etiqueta
const handleNuevoUsuario = document.querySelector('#handleNuevoUsuario');

//evento  de envio del formulario
handleNuevoUsuario.addEventListener('click', addUser);

//guardar el nombre en un arreglo

function addUser() {
    //leer lo que el usuario ingreso
    const nombre = document.querySelector('#usuarioNuevo').value;
    console.log(nombre);
}   