import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { Permission } from './model';
import { PermissionControlService, PermissionMode } from './service';

@Directive({
  selector: '[hhPermission]'
})
export class PermissionDirective {
  private hasView = false;
  private _permissions: Permission[] | string[] = [];
  private _permissionMode: string = PermissionMode.And;
  private _runBy: () => boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionControlService
  ) {
    viewContainer.clear();
  }

  @Input() set hhPermission(permissions: Permission[] | string[]) {
    this._permissions = permissions;
    this._refreshViewContainer();
  }

  @Input() set hhPermissionMode(mode: string) {
    this._permissionMode = mode;
    this._refreshViewContainer();
  }

  private _refreshViewContainer() {
    this.permissionService.checkPermissions(this._permissions, this._permissionMode).subscribe(result => {
      if (result && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!result && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }
}