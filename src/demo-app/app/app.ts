import { Component } from '@angular/core';
import { PlatformLocation, LocationStrategy }from '@angular/common';

@Component({
  selector: 'demo-app',
  providers: [
  ],
  template: `
  <div>
    <div>test</div>
    <div *hhPermission="permissions; mode: 'or'">hello</div>
  </div>
  `,
  styleUrls: ['app.scss']
})
export class AppCompnent {

  permissions = ['1', '2', '5'];

  constructor(
    private platformLocation: PlatformLocation,
    private locationStrategy: LocationStrategy,
  ) {
  }
}
