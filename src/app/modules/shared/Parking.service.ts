import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehical } from 'src/app/model/Vehical.model';


//-------------------headers---------------------
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ParkingService {
mockUrl= "http://localhost:3000/Employee";

currentVehical: Vehical = {
  
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
  constructor( public httpc: HttpClient) { }

  getAllVehicals(): Observable<Vehical[]> {
    return this.httpc.get<Vehical[]>(this.mockUrl, headerOption);
  }

  
  deleteVehical(id:number):Observable<Vehical> {
return this.httpc.delete<Vehical>(this.mockUrl + '/' + id, headerOption);
  }

  createVehical(Vehical: Vehical):Observable<Vehical>{
    return this.httpc.post<Vehical>(this.mockUrl, Vehical, headerOption);
  }

  updateVehical(Vehical: Vehical):Observable<Vehical>{
    return this.httpc.put<Vehical>(this.mockUrl + '/' + Vehical.id, Vehical, headerOption);
  }
}
