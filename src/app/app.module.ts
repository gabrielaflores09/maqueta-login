import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    Login2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
