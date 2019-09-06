import { Injectable } from '@angular/core';
import { DashboardChartsService } from './dashboard-charts.service';
import { DashboardApiService } from './dashboard-api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(public dashboardChartsService: DashboardChartsService,
    public dashboardApiService: DashboardApiService) {

  }

  // For Refresh
  refresh() {
    this.fetchMachineStatus();
  }

  fetchMachineStatus() {
    this.dashboardApiService.fetchMachineStatusAPI()
    .subscribe((response: any) => {
      if(response.data.length > 0) {
        this.dashboardApiService.MachineStatusArray = response.data;
      } else {
        this.dashboardApiService.MachineStatusArray = [];
      }
    })
  }

}
