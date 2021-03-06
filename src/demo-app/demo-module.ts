import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularPermissionControlModule, PermissionControlService } from 'angular-permission-control';

import { AppCompnent } from './app/app';

@NgModule({
  imports: [
    BrowserModule,
    AngularPermissionControlModule.forRoot({
      defaultPermissionMode: 'or'
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  declarations: [
    AppCompnent
  ],
  entryComponents: [],
  bootstrap: [AppCompnent]
})
export class DemoModule {
  constructor(private injector: Injector, private permissionControlService: PermissionControlService) {
    permissionControlService.initPermissions(['1', '2', '3']);

    const data = permissionControlService.checkPermissions(['1', '2']);
    console.log(data);
    data.subscribe(value => {
      console.log(value, 'check');
    });

  }
}
