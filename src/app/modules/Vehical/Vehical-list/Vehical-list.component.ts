import { Component, OnInit } from '@angular/core';
import { Vehical } from 'src/app/model/Vehical.model';
import { ParkingService } from '../../shared/Parking.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Vehical-list',
  templateUrl: './Vehical-list.component.html',
  styleUrls: ['./Vehical-list.component.css']
})
export class VehicalListComponent implements OnInit {
  
msg;
AllVehical: Vehical[];

  constructor( private ParkService: ParkingService) { }

  ngOnInit(): void {
    this.getAllVehical();
  }

  getAllVehical(){
    this.ParkService.getAllVehicals().subscribe(
      (data:Vehical[]) => {
        this.AllVehical = data;

      });
    
    }

    deleteVehical(id:number){
      console.log(id);
      this.ParkService.deleteVehical(id).subscribe(
        (data:Vehical)=>{
          this.getAllVehical();
        });
    }

    edit(Vehical){
      this.ParkService.currentVehical = Object.assign({}, Vehical);
    }

}
