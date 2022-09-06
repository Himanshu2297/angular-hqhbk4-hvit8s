import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsSearchComponent } from './cars-search.component';
import { CarListComponent } from '../car-list/car-list.component';
import { SortComponent } from '../sort/sort.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CarsSearchComponent,
      },
      {
        path: 'search',
        component: CarListComponent,
      },
      { path: 'sort', component: SortComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsSearchRoutingModule {}
