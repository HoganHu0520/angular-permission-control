import {NgModule, ModuleWithProviders} from '@angular/core';

import {PermissionConfig, PERMISSION_CONFIGURATION} from './config';
import {PermissionControlService} from './service';


@NgModule({
  imports: [
  ]
})
export class AngularPermissionControlModule {
  static forRoot(config?: PermissionConfig): ModuleWithProviders {
    return {
      ngModule: AngularPermissionControlModule,
      providers: [
        {provide: PERMISSION_CONFIGURATION, useValue: config ? config : {}},
        PermissionControlService
      ]
    }
  }
}