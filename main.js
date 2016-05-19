import 'zone.js/dist/zone';
import 'reflect-metadata/Reflect';
import platformBrowserDynamic from '@angular/platform-browser-dynamic';

import './styles.less';
import app from './app/app.component';

platformBrowserDynamic.bootstrap(app);
