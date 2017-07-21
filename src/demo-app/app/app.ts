import { Component } from '@angular/core';
import { PlatformLocation, LocationStrategy }from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'demo-app',
  providers: [
  ],
  template: `
    hello
   `,
  styleUrls: ['app.scss']
})
export class AppCompnent {

  constructor(
    private platformLocation: PlatformLocation,
    private locationStrategy: LocationStrategy,
  ) {
  }
}
