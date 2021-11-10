import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { HomeAbstractComponent } from './component-home/home-abstract/home-abstract.component';
import { HomeFuncionamientoComponent } from './component-home/home-funcionamiento/home-funcionamiento.component';
import { HomeRequisitosComponent } from './component-home/home-requisitos/home-requisitos.component';



@NgModule({
  declarations: [
    ComponentHomeComponent,
    HomeAbstractComponent,
    HomeFuncionamientoComponent,
    HomeRequisitosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeAbstractComponent,
    HomeFuncionamientoComponent,
    HomeRequisitosComponent
  ]
})
export class HomeModule { }
