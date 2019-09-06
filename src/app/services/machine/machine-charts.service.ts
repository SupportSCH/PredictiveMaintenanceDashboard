import { Injectable, NgZone } from '@angular/core';

// For Amcharts
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Injectable({
  providedIn: 'root'
})
export class MachineChartsService {

  TimeSeriesVibrationSignalChart: am4charts.XYChart;
  MachineLearningRULEstimationChart: am4charts.XYChart;
  FrequencyAnalysisChart: am4charts.XYChart;
  ConditioningMonitoringChart: am4charts.XYChart;

  constructor(public zone: NgZone) {
    am4core.options.commercialLicense = true;
  }

  destroyCharts() {

    if (this.TimeSeriesVibrationSignalChart) {
      this.TimeSeriesVibrationSignalChart.clearCache()
      this.TimeSeriesVibrationSignalChart.dispose();
      this.TimeSeriesVibrationSignalChart = null;
    }

    if (this.MachineLearningRULEstimationChart) {
      this.MachineLearningRULEstimationChart.clearCache()
      this.MachineLearningRULEstimationChart.dispose();
      this.MachineLearningRULEstimationChart = null;
    }

    if (this.FrequencyAnalysisChart) {
      this.FrequencyAnalysisChart.clearCache()
      this.FrequencyAnalysisChart.dispose();
      this.FrequencyAnalysisChart = null;
    }

    if (this.ConditioningMonitoringChart) {
      this.ConditioningMonitoringChart.clearCache()
      this.ConditioningMonitoringChart.dispose();
      this.ConditioningMonitoringChart = null;
    }

  }

  timeSeriesVibrationSignalChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.TimeSeriesVibrationSignalChart) {
        // Create chart
        let chart = am4core.create("TimeSeriesVibrationSignalChartID", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.data = generateChartData();

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };

        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        // dateAxis.title.text = "Time";
        dateAxis.title.fontSize = 10;
        dateAxis.renderer.fontSize = 10;
        dateAxis.baseInterval = { count: 30, timeUnit: "second" };
        dateAxis.renderer.minGridDistance = 30;
        dateAxis.dateFormatter.dateFormat = "mm:ss";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Amplitude";
        valueAxis.title.fontSize = 10;
        valueAxis.renderer.fontSize = 10;


        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{visits}[/]";
        series.fillOpacity = 0;
        series.fill = new am4core.InterfaceColorSet().getFor("fill");
        series.stroke = am4core.color("#4286f4");
        series.strokeWidth = 2;
        series.tensionX = 0.8;
        series.name = "Sensor 1";

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "visits2";
        series2.tooltipText = "Visits: [bold]{visits2}[/]";
        series2.fillOpacity = 0;
        series2.fill = new am4core.InterfaceColorSet().getFor("fill");
        series2.stroke = am4core.color("#c40101");
        series2.strokeWidth = 2;
        series2.tensionX = 0.8;
        series2.name = "Sensor 2";

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.dateX = "date";
        series3.dataFields.valueY = "visits3";
        series3.tooltipText = "Visits: [bold]{visits3}[/]";
        series3.fillOpacity = 0;
        series3.fill = new am4core.InterfaceColorSet().getFor("fill");
        series3.stroke = am4core.color("#70a6ff");
        series3.strokeWidth = 2;
        series3.tensionX = 0.8;
        series3.name = "Sensor 3";

        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.dateX = "date";
        series4.dataFields.valueY = "visits4";
        series4.tooltipText = "Visits: [bold]{visits4}[/]";
        series4.fillOpacity = 0;
        series4.fill = new am4core.InterfaceColorSet().getFor("fill");
        series4.stroke = am4core.color("#bad3ff");
        series4.strokeWidth = 2;
        series4.tensionX = 0.8;
        series4.name = "Sensor 4";

        series.adapter.add("fill", (fill, target) => {
          return am4core.color("#4286f4");
        })

        chart.legend = new am4charts.Legend();

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 0, end: 1 });
        });

        this.TimeSeriesVibrationSignalChart = chart;
      } else {
        this.TimeSeriesVibrationSignalChart.data = generateChartData()
      }

      function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        let visits = 50;
        let visits2 = 50;
        let visits3 = 50;
        let visits4 = 50;

        for (var i = 0; i < 500; i++) {
          let newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          // visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
          // visits2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
          // visits3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
          // visits4 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);

          visits = Math.random() * 50 + 1;
          visits2 = Math.random() * 50 + 1;
          visits3 = Math.random() * 50 + 1;
          visits4 = Math.random() * 50 + 1;


          // add data item to the array
          chartData.push({
            date: newDate,
            visits: visits,
            visits2: visits2,
            visits3: visits3,
            visits4: visits4
          });
        }
        return chartData;
      }
    })

  }

  machineLearningRULEstimationChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.MachineLearningRULEstimationChart) {
        // Create chart
        let chart = am4core.create("MachineLearningRULEstimationChartID", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.data = generateChartData();

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        // dateAxis.title.text = "Hours";
        dateAxis.title.fontSize = 10;
        dateAxis.renderer.fontSize = 10;
        dateAxis.renderer.minGridDistance = 30;


        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Hours";
        valueAxis.title.fontSize = 10;
        valueAxis.renderer.fontSize = 10;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0;
        series.fill = new am4core.InterfaceColorSet().getFor("fill");
        series.stroke = am4core.color("#4286f4");
        series.strokeWidth = 2;
        series.tensionX = 0.8;
        series.name = "Actual RUL";

        let predictionSeries = chart.series.push(new am4charts.LineSeries());
        predictionSeries.dataFields.dateX = "date";
        predictionSeries.dataFields.valueY = "visits2";
        predictionSeries.tooltipText = "Visits: [bold]{valueY}[/]";
        predictionSeries.fillOpacity = 0;
        predictionSeries.fill = new am4core.InterfaceColorSet().getFor("fill");
        predictionSeries.stroke = am4core.color("#c40101");
        predictionSeries.strokeWidth = 2;
        predictionSeries.tensionX = 0.8;
        predictionSeries.name = "Predictive RUL";

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 0, end: 1 });
        });

        chart.legend = new am4charts.Legend();

        this.MachineLearningRULEstimationChart = chart;
      } else {
        this.MachineLearningRULEstimationChart.data = generateChartData()
      }

      function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        let visits = 30;
        let visits2 = 30;

        for (var i = 0; i < 30; i++) {
          let newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          // add data item to the array
          visits += Math.round((Math.random() < 0.9 ? -1 : 1) * Math.random() * 10);
          visits2 += Math.round((Math.random() < 0.9 ? -1 : 1) * Math.random() * 10);

          chartData.push({
            date: newDate,
            visits: visits,
            visits2: visits2
          });
        }
        return chartData;
      }
    })
  }

  frequencyAnalysisChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.FrequencyAnalysisChart) {
        // Create chart
        let chart = am4core.create("FrequencyAnalysisChartID", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.data = generateChartData();

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        dateAxis.title.text = "(Hz)";
        dateAxis.renderer.fontSize = 10;


        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "(Watts)";
        valueAxis.title.fontSize = 10;
        valueAxis.renderer.fontSize = 10;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.6;
        series.fill = new am4core.InterfaceColorSet().getFor("fill");
        series.stroke = am4core.color("#62a1d1");
        series.strokeWidth = 2;
        // series.tensionX = 0.8;
        // series.name = "Actual RUL";

        series.adapter.add("fill", (fill, target) => {
          return am4core.color("#62a1d1");
          // return am4core.color("#249639");
        })


        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 0, end: 1 });
        });

        this.FrequencyAnalysisChart = chart;
      } else {
        this.FrequencyAnalysisChart.data = generateChartData()
      }

      function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
          let newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          // add data item to the array
          chartData.push({
            date: newDate,
            visits: visits
          });
        }
        return chartData;
      }
    })
  }

  conditioningMonitoringChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.ConditioningMonitoringChart) {
        // Create chart
        let chart = am4core.create("ConditioningMonitoringChartID", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.data = generateChartData();

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        dateAxis.title.text = "Time (min)";
        dateAxis.renderer.fontSize = 10;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Mean Peak Frequency(Hz)";
        valueAxis.title.fontSize = 10;
        valueAxis.renderer.fontSize = 10;


        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.8;
        series.fill = new am4core.InterfaceColorSet().getFor("fill");
        series.stroke = am4core.color("#d14747");
        series.strokeWidth = 2;
        // series.tensionX = 0.8;
        // series.name = "Actual RUL";

        series.adapter.add("fill", (fill, target) => {
          return am4core.color("#d14747");
        })

        // Add a guide
        let range = valueAxis.axisRanges.create();
        range.value = 550;
        range.grid.stroke = am4core.color("#000");
        range.grid.strokeWidth = 4;
        range.grid.strokeOpacity = 1;
        range.grid.strokeDasharray = "3,3";
        range.label.inside = true;
        range.label.text = "Threshold";
        range.label.fill = range.grid.stroke;
        range.label.verticalCenter = "bottom";
        range.label.fontSize = 10;
        range.label.fontWeight = "bold";

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 0, end: 1 });
        });

        this.ConditioningMonitoringChart = chart;
      } else {
        this.ConditioningMonitoringChart.data = generateChartData()
      }

      function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
          let newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          // add data item to the array
          chartData.push({
            date: newDate,
            visits: visits
          });
        }
        return chartData;
      }
    })
  }


}
