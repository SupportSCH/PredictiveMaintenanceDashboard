import { Injectable, NgZone } from '@angular/core';

// For Amcharts
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { DashboardApiService } from './dashboard-api.service';

am4core.useTheme(am4themes_animated);

@Injectable({
  providedIn: 'root'
})
export class DashboardChartsService {
  
  constructor(public zone: NgZone,
    public dashboardAPIService: DashboardApiService) {
    am4core.options.commercialLicense = true;
  }

  disposeCharts() {

  }


}
