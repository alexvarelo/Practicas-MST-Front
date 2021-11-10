import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ComponentListComponent } from './component-list/component-list.component';
import { CardListComponent } from './component-list/card-list/card-list.component';
import { ComponentNavbarComponent } from './component-navbar/component-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PeticionApiService } from './component-list/services/peticion-api.service';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { DetailNameComponent } from './character-detail/detail-name/detail-name.component';
import { DetailImageComponent } from './character-detail/detail-image/detail-image.component';
import { DetailFeaturesComponent } from './character-detail/detail-features/detail-features.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFormedCharacterComponent } from './form-component/list-formed-character/list-formed-character.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    CardListComponent,
    ComponentNavbarComponent,
    CharacterDetailComponent,
    DetailNameComponent,
    DetailImageComponent,
    DetailFeaturesComponent,
    FormComponentComponent,
    ListFormedCharacterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PeticionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
