import {NgModule, ModuleWithProviders} from '@angular/core';

import {PermissionConfig, PERMISSION_CONFIGURATION} from './config';
import {PermissionControlService} from './service';
import {PermissionDirective} from './directives';


@NgModule({
  imports: [],
  declarations: [PermissionDirective],
  exports: [PermissionDirective]
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