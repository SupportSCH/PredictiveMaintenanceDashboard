import { Component, OnInit } from '@angular/core';
import { DashboardChartsService } from '../services/dashboard/dashboard-charts.service';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { DashboardApiService } from '../services/dashboard/dashboard-api.service';
import { Router } from '@angular/router';
import { MachineApiService } from '../services/machine/machine-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboardChartsService: DashboardChartsService,
    public dashboardService: DashboardService,
    public dashboardApiService: DashboardApiService,
    public machineApiService: MachineApiService,
    public router: Router) { }

  ngOnInit() {
    this.dashboardService.refresh();
  }

  ngOnDestroy() {
    this.dashboardChartsService.disposeCharts();
  }

  onDateChangeEvent(date) {
    let days = 1;
    this.dashboardApiService.Search_Date = this.dashboardApiService.fullDateStringToDateConversion(new Date(new Date(date.target.value).setDate(new Date(date.target.value).getDate() + days)).toISOString());
    this.dashboardService.refresh();
  }

  gotoDetails(machine_code) {
    this.machineApiService.machine_code = machine_code;
    localStorage.setItem("MACHINE_CODE", machine_code)
    this.router.navigate(['/machine-details']);
  }

 

}
