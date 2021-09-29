
class Rickymorty {
    // Clase en la que va a crear un objeto por cada personaje que hay de ricky y morty
    constructor(nombre, id, image, status, specie){
        this.nombre = nombre;
        this.id = id;
        this.image = image;
        this.status = status;
        this.specie = specie;
    }
}


//Comprobacion de que recoge bien los elementos de la API
fetch("https://rickandmortyapi.com/api/character/")
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(data => {
      console.log(data);
      for (n in data.results){
          id = data.results[n].id;
          console.log(data.results[n].id);
          console.log(data.results[n].name);
      }
});





// Hay que controlar que si esta en la vista detail y quiere volver a la vista de lista de contenidos, tiene que borrar lo de detail y actualizar la vista
function addContent() {
    var content_landing = document.getElementsByClassName("landing-list__contenido")[0];
    console.log(content_landing);
    if (content_landing.innerHTML === ""){
        document.getElementsByClassName("main-landing__intro")[0].innerHTML = ""; //Ocular la principal landing
        generar_elementos();
        var content_detail = document.getElementsByClassName("landing-list__detail")[0];
        content_detail.innerHTML = "";
    }
    else {
        alert("Ya estas en la pagina");
    }

}