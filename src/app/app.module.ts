import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GatinhosService } from './shared/services/gatinhos.service';
import { CardPetComponent } from './pages/card-pet/card-pet.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CatsComponent } from './pages/cats/cats.component';
import { SkeletonDirective } from './shared/directives/skeleton-directive/skeleton.directive';

const routes:Routes = [
  {path:'', component: AppComponent },
  {path:'cats', component: CatsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CardPetComponent,
    CatsComponent,
    NavbarComponent,
    SkeletonDirective
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
