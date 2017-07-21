import {createPackageBuildTasks} from 'angular-permission-control-build-tools';

// Create gulp tasks to build the different packages in the project.

createPackageBuildTasks('angular-permission-control');

import './tasks/clean';
import './tasks/development';
