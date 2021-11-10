import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from './Character-interface';
import { PeticionApiService } from './services/peticion-api.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})


//Clase donde se va a obtener la informacion de la Api de superheroes

export class ComponentListComponent implements OnInit {

  //Declaracion de variables


  //CharacterResponseInterface: CharacterResponseInterface;

  //Lista que almacena informacion de tipo superherointerface, en la cual almacenamos la informacion de la api
  CharacterResponseInterface: CharacterResponseInterface;
  CharacterList: CharacterInterface[] = [];
  CharacterList_completa: CharacterInterface[] = [];
  limit: number;
  filter: string;
  url_base = 'https://rickandmortyapi.com/api/character/?page=';
  actual_page: number;

  constructor(private PeticionApiService: PeticionApiService) {
    this.filter = '';
    this.limit = 10; //Numero de paginas que vamos a cargar (10*20 personajes)
    this.actual_page = 0;
    console.log("Estoy en el constructor");

    // Inicializacion de la variable para que no aparezcan errores en la consola, aunque funciona igualmente.
    // Esto se debe a que se carga el html antes de el ngonInit, y en el ngif no encuentra la variable
    this.CharacterResponseInterface = {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    };
    // Para recopilar todos los personajes, igual hay que en vez de hacerlo con el ?limit=, hay que recorrer 
    // un bucle que ira de 1 a this.limit, y que vaya haciendo fetch de cada personaje.
    // No es tan optimo, pero sino no se me ocurre otra forma de sacar mas personajes.

    //console.log(this.CharacterResponseInterface);
    /* for (let i = 0; i < this.limit; i++) {
      this.PeticionApiService.getCharacters(this.url_base+i).subscribe((data: CharacterResponseInterface) => {
        const results: CharacterInterface[] = data.results;
        //console.log(results);
        for (let character in results) {
          let character_aux: CharacterInterface;
          character_aux = {
            id: results[character].id, name: results[character].name, image: results[character].image,
            species: results[character].species, status: results[character].status, url: results[character].url
          }
          //...Construyendo la lista completa
          this.CharacterList_completa.push(character_aux)
          this.CharacterResponseInterface = data;
        }
      })
    } */
    console.log(this.CharacterList_completa)
  }

  // Al arrancar nuestra aplicacion
  ngOnInit(): void {

    console.log("Estoy aqui");
    //Unicamente vamos a cargar la primera pagina cuando arrancamos esta aplicacion 
    this.PeticionApiService.getCharacters(this.url_base+1).subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;
      //console.log(results);
      let character_list_aux:CharacterInterface[] = [];
      for (let character in results) {
        let character_aux: CharacterInterface;
        character_aux = {
          id: results[character].id, name: results[character].name, image: results[character].image,
          species: results[character].species, status: results[character].status, url: results[character].url
        }
        //...Construyendo la lista completa
        character_list_aux.push(character_aux)
      }
      this.CharacterList = character_list_aux;


      console.log("La lista que estaria mostrando el nginit");
      console.log(this.CharacterList);

      this.CharacterResponseInterface = data;
    })
    console.log("CharacterResponseInterface");
    this.actual_page += 1;
    //console.log(this.CharacterResponseInterface);
  }

  next(){
    this.PeticionApiService.getCharacters(this.CharacterResponseInterface.info.next).subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;
      //console.log(results);
      let character_list_aux:CharacterInterface[] = [];
      for (let character in results) {
        let character_aux: CharacterInterface;
        character_aux = {
          id: results[character].id, name: results[character].name, image: results[character].image,
          species: results[character].species, status: results[character].status, url: results[character].url
        }
        //...Construyendo la lista completa
        character_list_aux.push(character_aux)
      }
      this.CharacterList = character_list_aux;
      this.CharacterResponseInterface = data;
    })

    this.actual_page += 1;
    console.log("CharacterResponseInterface")
    console.log(this.CharacterResponseInterface)

  }

  back(){

    this.PeticionApiService.getCharacters(this.CharacterResponseInterface.info.prev).subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;
      //console.log(results);
      let character_list_aux:CharacterInterface[] = [];
      for (let character in results) {
        let character_aux: CharacterInterface;
        character_aux = {
          id: results[character].id, name: results[character].name, image: results[character].image,
          species: results[character].species, status: results[character].status, url: results[character].url
        }
        //...Construyendo la lista completa
        character_list_aux.push(character_aux)
      }
      this.CharacterList = character_list_aux;
      this.CharacterResponseInterface = data;
      this.actual_page -= 1;
    })

  }

}
