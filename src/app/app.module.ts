import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GatinhosService } from './shared/gatinhos.service';
import { CardPetComponent } from './components/card-pet/card-pet.component';
import { CatsComponent } from './components/cats/cats.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'gatinhos', component: CatsComponent },
  {path:'', component: AppComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CardPetComponent,
    CatsComponent
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
