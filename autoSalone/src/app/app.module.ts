import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainComponent/navbar/navbar.component';
import { FooterComponent } from './mainComponent/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FiatComponent } from './fiat/fiat.component';
import { AudiComponent } from './audi/audi.component';
import { FordComponent } from './ford/ford.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FiatComponent,
    AudiComponent,
    FordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
