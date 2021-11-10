import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './home/component-home/component-home.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListFormedCharacterComponent } from './form-component/list-formed-character/list-formed-character.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component:  ComponentHomeComponent },
  { path: 'list_character', component: ComponentListComponent},
  { path: 'character/:characterId', component: CharacterDetailComponent},
  { path: 'form_character', component: FormComponentComponent},
  { path: 'list_formed_character', component: ListFormedCharacterComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
