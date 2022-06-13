import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var window: any;

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

if (typeof window['cordova'] !== 'undefined') {
  console.log("We are running Cordova!");
  document.addEventListener(
    'deviceready',
    () => {
      bootstrap();
    },
    false
  );
} else {
  console.log("We are NOT running Cordova!");
  bootstrap();
}
