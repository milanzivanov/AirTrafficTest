import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootObject } from './rootInterface';
import { AirTrafficService } from './air-traffic.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ListItemInfoComponent } from './list-item-info/list-item-info.component';
import { PNfComponent } from './p-nf/p-nf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListItemInfoComponent,
    PNfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
