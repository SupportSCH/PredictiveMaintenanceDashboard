import { Injectable } from '@angular/core';
import { MachineApiService } from './machine-api.service';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(public machineApiService: MachineApiService) { }

  fetchMachineDetails() {
    this.machineApiService.fetchMachineDetailsAPI()
    .subscribe((response: any) => {
      if(response) {
        this.machineApiService.Machine_Status_Array = response.machine_status[0];
        this.machineApiService.Machine_Signals_Array = response.machine_signals[0];
      }
    })
  }

}
