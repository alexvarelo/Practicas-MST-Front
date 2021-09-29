
// Dado el event podemos extraer el id del div que pusimos anteriormente, y que coincide con el id del elemento.

//TODO: hacerlo para que se pueda pasar el objeto por parametro. Hemos probado pasando el objeto del tipo class, tambien como tipo objeto parseandolo con JSON,
// y tambien hemos probado a pasarlo por parametros elemento a elemento.

// Hay veces que se clica un elemento pero aparece como undefined. Eso es porque esta funcion tiene que esperar a que llegue el event?


function generate_detail(event) {
    console.log(event);
    id = event.target.id;
    console.log(id);
    fetch("https://rickandmortyapi.com/api/character/" + id)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(data => {

            console.log(data);

            try {
                if (data.id != id) {
                    throw ("El id solicitado no es el mismo que el buscado");
                }
                else {
                    console.log("El id si es el solicitado");
                }
            } catch (error) {
                console.log(error)
            }
            // Primero borramos la lista de elementos para poder mostrar el detail

            let contenido_lista = document.getElementsByClassName("landing-list__contenido")[0];
            let contenido_detail = document.getElementsByClassName("landing-list__detail")[0];

            contenido_lista.innerHTML = "";

            // Creamos la vista Detail

            divdetail = document.createElement("div");
            divdetail.id = id;
            divdetail.class = "landing-list__detail";

            title_detail = document.createElement("h2");
            title_detail.id = id;
            title_detail.appendChild(document.createTextNode(data.name));

            img = document.createElement("img");
            img.src = data.image;
            img.style.height = "500px";

            description_detail = document.createElement("div");
            description_detail.id = id;
            description_detail.appendChild(document.createTextNode(data.status));
            description_detail.appendChild(document.createTextNode(data.species));

            divdetail.appendChild(title_detail);
            divdetail.appendChild(img);
            divdetail.appendChild(description_detail);

            contenido_detail.appendChild(divdetail);

        });
}