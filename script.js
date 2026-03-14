let miLista = [];

function actualizarLista() {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";
    for(let i = 0; i < miLista.length; i++){
        let li = document.createElement("li");
        li.textContent = miLista[i] + " ";

        let botonQuitar = document.createElement("button");
        botonQuitar.textContent = "-";

        botonQuitar.onclick = function(){
            miLista.splice(i, 1);
            actualizarLista();
        }

        li.appendChild(botonQuitar);
        ul.appendChild(li);
    }
}

function agregarLista(nombre){
    if(!miLista.includes(nombre)){
        miLista.push(nombre);
        actualizarLista();
        alert(nombre + " agregado a tu lista");
    } else {
        alert(nombre + " ya está en tu lista");
    }
}

function mostrar(id) {
    let pantallas = document.getElementsByClassName('pantalla');
    for (let i = 0; i < pantallas.length; i++) {
        pantallas[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

function volverHome() {
    mostrar('home');
}

function mostrarLista() {
    mostrar('listaPantalla');
}

function filtrarCards() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let cards = document.querySelectorAll('#home .card');

    cards.forEach(function(card){
        let titulo = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = titulo.includes(input) ? 'block' : 'none';
    });
}