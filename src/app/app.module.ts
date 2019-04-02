import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routes';
import { Login4Component } from './login4/login4.component';

@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    Login2Component,
    Login3Component,
    MenuComponent,
    Login4Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
