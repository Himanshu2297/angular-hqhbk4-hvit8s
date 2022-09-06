import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  event$;
  pageHeader;

  constructor(private router: Router) {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        if (event.url == '/sort') {
          this.pageHeader = 'Sort';
        } else if (event.url == '/search') {
          this.pageHeader = 'Search';
        } else {
          this.pageHeader = 'Travtor';
        }
      }
    });
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
