import { InjectionToken } from '@angular/core';

export interface PermissionConfig {
  defaultPermissionMode: string;
}

export const PERMISSION_CONFIGURATION = new InjectionToken<PermissionConfig>('PERMISSION_CONFIGURATION');
