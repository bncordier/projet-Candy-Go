import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule} from 'ngx-countdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { CandyBoxComponent } from './candy-box/candy-box.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { RulesgameComponent } from './rulesgame/rulesgame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    GeolocalisationComponent,
    CandyBoxComponent,
    ContactComponent,
    RulesgameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbCollapseModule,
    AngularOpenlayersModule,
    NgbModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
