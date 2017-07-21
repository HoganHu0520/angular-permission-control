import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PermissionConfig, PERMISSION_CONFIGURATION } from './config';
import { Permission } from './model';
import {intersectionBy} from './utils';

@Injectable()
export class PermissionControlService {
  private _initPermissions: Promise<Permission[]>;

  constructor(@Inject(PERMISSION_CONFIGURATION) private config: PermissionConfig) {}

  public initPermissions(permissions: Permission[] | string[]) {
    var result: Subject<Permission[]> = new Subject<Permission[]>();
    var resultPermissions: Permission[] = [];
    if (permissions.length > 0) {
      if (typeof permissions[0] === 'string') {
        for (var index = 0; index < permissions.length; index++) {
          var element = permissions[index];
          resultPermissions.push(new Permission({ key: element, value: element }));
        }
      } else {
        resultPermissions = permissions as Permission[];
      }
    }

    this._initPermissions = new Promise<Permission[]>((resolve) => {
      resolve(resultPermissions);
    });
  }

  public checkPermissions(permissions: Permission[] | string[]): Observable<boolean> {
    var result: Subject<boolean> = new Subject<boolean>();
    var tempPermissions: Permission[] = [];
    if (permissions.length > 0) {
      if (typeof permissions[0] === 'string') {
        for (var index = 0; index < permissions.length; index++) {
          var element = permissions[index];
          tempPermissions.push(new Permission({ key: element, value: element }));
        }
      } else {
        tempPermissions = permissions as Permission[];
      }
    }

    this._initPermissions.then((initPermissions: Permission[]) => {
      const temp = intersectionBy(tempPermissions, initPermissions, p => p.value);
      result.next(temp.length == permissions.length);
    });
    return result.asObservable();
  }
}
