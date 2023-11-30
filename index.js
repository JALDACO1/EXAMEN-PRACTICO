let botonVerde =document.querySelector("#boton1");
let botonRojo =document.querySelector("#boton2");

let eventos = ["Jorge","JP","Denisse","Gany","Imanol","Rosa","Chabelo","Ian","Aldaco","Massaky"];

Dom("listaDesordenada", eventos);
show(eventos);

botonVerde.addEventListener("click", ()=>{
    let input = document.querySelector("#input").value;
    eventos.unshift(input);
    updateList("listaDesordenada",eventos);
});

botonRojo.addEventListener("click", ()=>{
    eventos.pop();
    updateList("listaDesordenada",eventos);
});

function show(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function Dom(element, arr) {
    document.getElementById(element).innerHTML = "";
    for (let i= 0; i < arr.length; i++){
        document.getElementById(element).innerHTML += "<li>" + arr[i] + "</li>";
    
    }
}

function updateList(element, arr){
    let lista = document.getElementById(element);
    lista.innerHTML="";
    for (let i= 0; i<arr.length; i++){
        lista.innerHTML+= "<li>" + arr[i] + "</li>";
    }
}





