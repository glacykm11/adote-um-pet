import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPetComponent } from './components/card-pet/card-pet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatsComponent } from './components/cats/cats.component';
import { RouterModule } from '@angular/router';
import { SkeletonDirective } from './directives/skeleton-directive/skeleton.directive';

@NgModule({
  declarations: [
    CardPetComponent,
    NavbarComponent,
    CatsComponent,
    SkeletonDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardPetComponent,
    NavbarComponent,
    CatsComponent,
    SkeletonDirective,
  ],
})
export class SharedModule {}
