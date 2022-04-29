import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GatinhosService } from './shared/gatinhos.service';
import { CardPetComponent } from './components/card-pet/card-pet.component';
import { CatsComponent } from './components/cats/cats.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes:Routes = [
  
  {path:'', component: AppComponent },
  {path:'cats', component: CatsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CardPetComponent,
    CatsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [GatinhosService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
