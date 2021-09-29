//En esta funcion va a recoger todos los elementos de la api, y cada elemento va a ser volcado en un objeto rickmorty. A partir de ese objeto se va a crear
//un elemento html que va a ser mostrado cuando se presione el boton de lista.
function generar_elementos(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
        let rickymorty_list = [];
            //Recogemos de la API de pokemon todos los pokemons, está capado a 20, así que iremos recibiendo de 20 en 20...
            for (i in data.results){
                rickymorty = new Rickymorty(data.results[i].name, data.results[i].id, data.results[i].image, data.results[i].status, data.results[i].specie);
                rickymorty_list.push(rickymorty);   
            }


            //Generamos cada elemento html con la informacion de los objetos contenidos en la lista rickymorty_list

            var contenedor_lista = document.getElementsByClassName("landing-list__contenido")[0];

            //console.log(contenedor_lista)

            for (i in rickymorty_list){ 
                //Contenedor del elemento
                divrickymorty = document.createElement("div");
                divrickymorty.id = rickymorty_list[i].id; // Para despues poder recuperar el id en detail
                divrickymorty.className = "landing-list__rickymorty";
                //objeto = JSON.parse(JSON.stringify(rickymorty_list[i]))
                //console.log(objeto);
                //divrickymorty.onclick = generate_detail(rickymorty_list[i]); // Paso por parametro el objeto construido para simplemente crear los elementos con el mismo.
                divrickymorty.onclick = generate_detail;

                //Nombre del elemento

                name_rickymorty = document.createElement("h5");
                name_rickymorty.id = rickymorty_list[i].id;
                name_rickymorty.appendChild(document.createTextNode(rickymorty_list[i].nombre));


                //Imagen del elemento
                img = document.createElement("img");
                img.src = rickymorty_list[i].image;
                img.style.height = "100px";

                divrickymorty.appendChild(name_rickymorty);
                divrickymorty.appendChild(img);

                contenedor_lista.appendChild(divrickymorty);
            }
        });
}
