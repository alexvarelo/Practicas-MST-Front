import { Component } from '@angular/core';
import {Input} from "@angular/core";
import { CharacterInterface } from '../Character-interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent{

  @Input('parentToChild') character: any;

}
