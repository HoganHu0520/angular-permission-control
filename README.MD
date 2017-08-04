[![npm version](https://badge.fury.io/js/angular-permission-control.svg)](https://badge.fury.io/js/angular-permission-control)

# Angular Permission Control

## Initial Permissions
Add default permission: p1, p2, p3
```typescript
import { AngularPermissionControlModule, PermissionControlService } from 'angular-permission-control';

permissionControlService.initPermissions(['p1', 'p2', 'p3']);
```

## Use permission directive
```html
<div *hhPermission="permissions; mode: 'or'">hello</div>
```

`permissions`: Permission array '[p1, p5]'.

`mode`: Permission check mode 'or' and 'and'.
