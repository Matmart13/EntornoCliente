document.addEventListener("DOMContentLoaded", function() {
   
const sectionPrincipal = document.getElementById('principal');

//Creamos los elementos
const divP = document.createElement('div');
divP.classList.add('contenedor');
const parrafo1 = document.createElement('p');

//Añadimos los elementos al DOM
parrafo1.classList.add('parrafo');
parrafo1.innerText = 'Soy un parrafo';

//Lo acabo de mete en el documento HTML
divP.append(parrafo1);
sectionPrincipal.append(divP);


//Añadimos 3 botones
const boton1 = document.createElement('button');
const boton2 = document.createElement('button');
const boton3 = document.createElement('button');

//Añdimos estilos a los botones

});