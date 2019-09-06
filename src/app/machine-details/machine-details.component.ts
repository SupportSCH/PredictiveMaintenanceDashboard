import { Component, OnInit } from '@angular/core';
import { MachineChartsService } from '../services/machine/machine-charts.service';
import { MachineApiService } from '../services/machine/machine-api.service';
import { MachineService } from '../services/machine/machine.service';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})
export class MachineDetailsComponent implements OnInit {

  constructor(public machineChartsService: MachineChartsService,
    public machineApiService: MachineApiService,
    public machineService: MachineService) { }

  ngOnInit() {
    this.machineService.fetchMachineDetails();
    this.machineChartsService.timeSeriesVibrationSignalChart();
    this.machineChartsService.machineLearningRULEstimationChart();
    this.machineChartsService.frequencyAnalysisChart();
    this.machineChartsService.conditioningMonitoringChart();
  }

  ngOnDestroy() {
    this.machineChartsService.destroyCharts();
  }

}
