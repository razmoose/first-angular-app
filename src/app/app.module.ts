import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
