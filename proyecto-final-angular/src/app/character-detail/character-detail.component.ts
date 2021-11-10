import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardListComponent } from '../component-list/card-list/card-list.component';
import { CharacterInterface } from '../component-list/Character-interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  id_character: string;
  character_detailed: CharacterInterface;
  url_base = 'https://rickandmortyapi.com/api/character/';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    //Sacamos el id gracias al routing de angular. TODO: habria otra forma de hacero? que este componente sea hijo del de la lista
    this.route.paramMap.subscribe(params => {
      this.id_character = params.get('characterId');
      console.log(this.id_character);
      fetch(this.url_base + this.id_character).then(response => response.json()).
        then(data => {
          console.log("Datos del detail")
          console.log(data);
          this.character_detailed = {
            id: data.id,
            name: data.name,
            status:data.status,
            image:data.image, 
            url:data.url,
            species:data.species
          }
        })
    })
  }

}
