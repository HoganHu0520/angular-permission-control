import { InjectionToken } from '@angular/core';

export interface PermissionConfig {
  grantType: string;
  appid: string;
  secret: string;
}

export const PERMISSION_CONFIGURATION = new InjectionToken<PermissionConfig>('PERMISSION_CONFIGURATION');
