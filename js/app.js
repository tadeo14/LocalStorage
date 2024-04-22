//traemos la etiqueta parrafo desde el html. 
const nombreUsuario = document.querySelector('#nombre');
//traemos lo que hay guardado y lo convertimos en objeto js
const nombre = JSON.parse(localStorage.getItem('usuario'));

//Mostramos lo sucedido en js en la pagina

nombreUsuario.textContent = nombre; 
