import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { CharacterResponseInterface } from '../Character-interface';

@Injectable({
  providedIn: 'root'
})

export class PeticionApiService {

  constructor(private http: HttpClient) { }

  getCharacters(url:string) {
    return this.http.get<CharacterResponseInterface>(url);
  }

}
