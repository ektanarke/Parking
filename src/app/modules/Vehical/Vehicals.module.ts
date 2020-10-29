import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicalComponent } from './Vehical/Vehical.component';
// import { VehicalListComponent } from './Vehical-list/Vehical-list.component';
import { ParkingService } from '../shared/Parking.service';
import { FormsModule } from '@angular/forms';
import { VehicalListComponent } from './Vehical-list/Vehical-list.component';


@NgModule({
  declarations: [VehicalComponent, VehicalListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[VehicalComponent, VehicalListComponent],
  providers:[ParkingService]
})
export class VehicalsModule { }
