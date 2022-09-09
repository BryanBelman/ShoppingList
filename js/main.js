let $boton = document.getElementById("boton");

$boton.addEventListener("click", () => {
    let nombre = document.getElementById("Name");
    let cantidad = document.getElementById("Number");
    let savenumber = cantidad.value;
    let savename = nombre.value;
    let $alert = document.getElementById("alert");

    if (savename.replace(" ","") == "" || savenumber.replace(" ","") == "") {

        $alert.style.display = "block";

    }
    else {
        $alert.style.display = "none";
    }
})

function(){
    
}