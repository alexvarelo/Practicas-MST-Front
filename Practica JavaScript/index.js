//import {actualizar_vista_list} from "list.js";

/*
document.querySelector("logo-page").addEventListener("click", function () {
    funcionalidadlogo();
});*/

function funcionalidadlogo(event) {
    window.location.href = "index.html";
}


function funcionalidadhome(event) {
    var content_landing = document.getElementsByClassName("landing-list__contenido")[0];
    var detail_landing = document.getElementsByClassName("landing-list__detail")[0];
    if (content_landing.innerHTML == "" & detail_landing.innerHTML == "" ) {
        alert("Ya estamos aqui");
    }
    else {
        window.location.href = "index.html";
    }
}

//document.getElementById("homepage").addEventListener("click", actionhome);



function funcionalidadtw(event) {
    window.open("https://twitter.com/?lang=es");
}

function funcionalidadig(event) {
    window.open("https://www.instagram.com/?hl=es");
}

function funcionalidadface(event) {
    window.open("https://es-es.facebook.com/");
}
