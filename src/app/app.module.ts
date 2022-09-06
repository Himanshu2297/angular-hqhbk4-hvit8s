import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CruisesComponent } from './cruises/cruises.component';
import { SortComponent } from './sort/sort.component';

// import { SearchComponent } from './search-component/search.component';

// import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      // { path: '', component: CarsSearchComponent },
      {
        path: '',
        loadChildren: () =>
          import('./cars-search/cars-search.module').then(
            (m) => m.CarsSearchModule
          ),
      },
      { path: 'flights', component: FlightsComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'cruises', component: CruisesComponent },
      // { path: 'sort', component: SortComponent },

      // {
      //   path: 'search',
      //   component: SearchComponent,
      // },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    // CarsSearchComponent,
    NavBarComponent,
    FlightsComponent,
    HotelsComponent,
    CruisesComponent,
    // SortComponent,
    // SearchComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
