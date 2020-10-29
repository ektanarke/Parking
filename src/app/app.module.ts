import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicalsModule } from './modules/Vehical/Vehicals.module';
import { HttpClientModule } from '@angular/common/http';
import { ParkingService } from './modules/shared/Parking.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehicalsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]

})
export class AppModule { }



