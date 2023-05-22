// establezo un arreglo con los colores que quiero mostrar cuando de click
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// con document. algo interacuto a traves de clases e id con el html y sus contenedores
// primero document.getelement id traigo el id de button del main
const btn= document.getElementById("btn");
// seleccion la clase color del span
const color=document.querySelector(".color");
// creo una funcion que me genere numeros aleatorios
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
// el .add es el que le agrega la logica de programacion a mi botton
btn.addEventListener("click",function(){
    // primero creo un numero aleatorio que sera el que acceda a mi arreglo de colors
    const randomNumber=getRandomNumber();
    // con el syle y el backgorund accedo a mi arrelgo
    document.body.style.backgroundColor=colors[randomNumber];
    // utilizo la funcion tex content para mostar en texto el color, arriba pongo de fondo color aqui el nombre
    color.textContent=colors[randomNumber];
});

