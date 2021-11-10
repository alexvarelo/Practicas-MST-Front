import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormedCharacter } from './formed-character';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  public userForm: FormGroup = null;


  // variable submitted a false
  public submitted: boolean = false;


  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      image: ['', [Validators.required, Validators.maxLength(800)]],
      status: ['', [Validators.required, Validators.maxLength(20)]],
      species: ['', [Validators.required, Validators.maxLength(20)]],
      id: ['', [Validators.required, Validators.maxLength(4)]]
    });
  }

  ngOnInit(): void {
    this.submitted=false;
   }


  // Se activa cuando se clicka el boton de submit
  public async onSubmit(): Promise<void> {

    if (this.userForm.valid) {

      //Recuperamos la informacion del usuario que ha insertado en la pantalla
      var formedCharacter_aux: FormedCharacter = {
        id: this.userForm.get('id').value,
        name: this.userForm.get('name').value,
        image: this.userForm.get('image').value,
        status: this.userForm.get('status').value,
        species: this.userForm.get('species').value,
      }


      //Lo añadimos a nuestro db.json 
      fetch("http://localhost:3000/characters", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(formedCharacter_aux)
      });

      this.userForm.reset();
      this.submitted=true;
    }
  }

}
