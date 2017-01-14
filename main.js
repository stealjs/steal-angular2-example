import 'zone.js/dist/zone';
import 'reflect-metadata/Reflect';
import platformBrowserDynamic from '@angular/platform-browser-dynamic';

import './styles.less';
import AppModule from './app/app.module';

platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
