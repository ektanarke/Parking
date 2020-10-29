import { Component, OnInit } from '@angular/core';
import { Vehical } from 'src/app/model/Vehical.model';
import { ParkingService } from '../../shared/Parking.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Vehical',
  templateUrl: './Vehical.component.html',
  styleUrls: ['./Vehical.component.css']
})
export class VehicalComponent implements OnInit {

  constructor( public ParkingService: ParkingService) { }

  ngOnInit(): void {
  }

  createAndUpdate(currentVehical: Vehical){
console.log(currentVehical);
if(currentVehical.id != null){
this.updateVehical(currentVehical);
}else {
  this.createVehical(currentVehical)
}
  }

  createVehical(Vehical: Vehical){
this.ParkingService.createVehical(Vehical).subscribe();
  }

  updateVehical(Vehical: Vehical){
    this.ParkingService.updateVehical(Vehical).subscribe();
  }
  clear(){
    this.ParkingService.currentVehical={
      vehicalName: '',
      fullName: '',
      Date: '',
      contact: null,
      id: null,
      address: '',
      VehicalNumber: null,
      Time: '',
      VehicalType:'',
      PackingBlockNumber: null,
      ParkingStatus:''
    }
    
  }
}
