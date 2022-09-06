import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarsSearchRoutingModule } from './cars-search-routing.module';
import { CarsSearchComponent } from './cars-search.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarListComponent } from '../car-list/car-list.component';
import { SortComponent } from '../sort/sort.component';

@NgModule({
  declarations: [CarsSearchComponent, CarListComponent, SortComponent],
  providers: [],
  imports: [
    CarsSearchRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarsSearchModule {}
