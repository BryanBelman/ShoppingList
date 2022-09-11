let $boton = document.getElementById("boton");
var id = 1;
let guardarelementos = [];

window.onload = ()=>{
    
    let lstorage =JSON.parse (localStorage.getItem("guardar"));
    for(let i=0; i<lstorage.length; i++){
        crearelementos(lstorage[i]);
    }

}



$boton.addEventListener("click", () => {
    let nombre = document.getElementById("Name");
    let cantidad = document.getElementById("Number");
    let savenumber = cantidad.value;
    let savename = nombre.value;
    let $alert = document.getElementById("alert");

    if (savename.replace(" ", "") == "" || savenumber.replace(" ", "") == "") {

        $alert.style.display = "block";

    }
    else {
        $alert.style.display = "none";
        agregarlistas(savename, savenumber);
        nombre.value = "";
        cantidad.value = "";
    }

})

function crearprecio() {
    return Math.floor(Math.random() * 50);
}

function agregarlistas(savename, savenumber) {
    let agregar = {
        "id": id,
        "nombre": savename,
        "cantidad": savenumber,
        "precio": `$ ${crearprecio()}`
    }
   
    crearelementos(agregar);

    id = id + 1;
    guardarelementos.push(agregar);
    localStorage.setItem("guardar", JSON.stringify(guardarelementos));

}

function crearelementos(agregar) {
    let tabla = document.getElementById("tabla");
    let crearfila = document.createElement("ul");
    let crearfilali = document.createElement("li");
    let crearfilali2 = document.createElement("li");
    let crearfilali3 = document.createElement("li");
    let crearfilali4 = document.createElement("li");

    let insertartexto = document.createTextNode(agregar.nombre);
    let insertartexto2 = document.createTextNode(agregar.cantidad);
    let insertartexto3 = document.createTextNode(agregar.precio);
    let insertartexto4 = document.createTextNode(`${agregar.id}`);

    crearfila.classList.add("list-group", "list-group-horizontal");
    crearfilali.classList.add("col-md-2", "mb-6", "list-group-item");
    crearfilali2.classList.add("col-md-4", "mb-6", "list-group-item");
    crearfilali3.classList.add("col-md-4", "mb-6", "list-group-item");
    crearfilali4.classList.add("col-md-2", "mb-6", "list-group-item");

    crearfilali.appendChild(insertartexto4);
    crearfilali2.appendChild(insertartexto);
    crearfilali3.appendChild(insertartexto2);
    crearfilali4.appendChild(insertartexto3);

    crearfila.appendChild(crearfilali);
    crearfila.appendChild(crearfilali2);
    crearfila.appendChild(crearfilali3);
    crearfila.appendChild(crearfilali4);
    tabla.appendChild(crearfila);
}

