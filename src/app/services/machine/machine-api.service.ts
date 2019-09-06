import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class MachineApiService {

  machine_code: any  = localStorage.getItem("MACHINE_CODE");

  Machine_Status_Array: any = [];
  Machine_Signals_Array: any = [];

  constructor(public http: HttpClient,
    public sharedService: SharedService) {
      this.machine_code  = localStorage.getItem("MACHINE_CODE");
     }

  // For Fetching the Machine Status from the server
  fetchMachineDetailsAPI() {
    let data = {
      "token": "machine_details",
      "machine_code": this.machine_code
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'PM_API/machine_details/api/machine_details.php', JSON.stringify(data), requestOptions);
  }
}
