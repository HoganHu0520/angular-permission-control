import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PermissionConfig, PERMISSION_CONFIGURATION } from './config';
import { Permission } from './model';
import { intersectionBy, anyBy } from './utils';

export class PermissionMode {
  static And = 'and';
  static Or = 'or';
}

@Injectable()
export class PermissionControlService {
  private _initPermissions: Promise<Permission[]>;
  private _defaultPermissionMode: string;

  constructor(@Inject(PERMISSION_CONFIGURATION) private config: PermissionConfig) {
    this._defaultPermissionMode = config.defaultPermissionMode || PermissionMode.And;
  }

  /**
   * Set initial permissions.
   * @param permissions Initial permissions
   */
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

  public checkPermissions(permissions: Permission[] | string[], mode: string = this._defaultPermissionMode): Observable<boolean> {
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
      let temp: any[];
      switch (mode.toLowerCase()) {
        case PermissionMode.And:
        case '&':
          temp = intersectionBy(tempPermissions, initPermissions, p => p.value);
          result.next(temp.length == permissions.length);
          break;
        case PermissionMode.Or:
        case '|':
          temp = intersectionBy(tempPermissions, initPermissions, p => p.value);
          result.next(temp.length > 0);
          break;
        default:
          result.next(false);
          break;
      }

    });
    return result.asObservable();
  }
}
