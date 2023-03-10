import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { AllComponent } from './components/observable/all/all.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { PluckComponent } from './components/pluck/pluck.component';
import { SwitchmapComponent } from './components/switchmap/switchmap.component'
import {FormsModule} from '@angular/forms';
import { CartComponent } from './components/cart/cart.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    MapComponent,
    PluckComponent,
    SwitchmapComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
