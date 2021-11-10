import { Component, OnInit } from '@angular/core';
import { FormedCharacter } from '../formed-character';

@Component({
  selector: 'app-list-formed-character',
  templateUrl: './list-formed-character.component.html',
  styleUrls: ['./list-formed-character.component.scss']
})
export class ListFormedCharacterComponent implements OnInit {


  formed_characters: FormedCharacter[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch("http://localhost:3000/characters")
    .then( async response => response.json())
    .then(async data => {
      let aux: FormedCharacter;
      for (let i in data){
        aux = {
          id: data[i].id,
          name: data[i].name,
          image: data[i].image,
          species: data[i].species,
          status: data[i].status
        };
        this.formed_characters.push(aux);
      }
    });
  }

}
