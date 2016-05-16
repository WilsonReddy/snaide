import { bootstrap }    from '@angular/platform-browser-dynamic';
import {JSONP_PROVIDERS} from '@angular/http'

// Our main component
import { AppComponent } from './app.component';

import {enableProdMode} from '@angular/core';

enableProdMode();

bootstrap(AppComponent, [JSONP_PROVIDERS]);
