import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLabels = [['Download Sales'], ['InStore Sales'], 'Mail Sales'];
  public lineChartDatasets = [
    { data: [300, 500, 100], label: 'Download Sales' },
    { data: [10, 50, 200], label: 'InStore Sales' },
    { data: [30, 152.16, 100], label: 'Mail Sales' }
  ];
  public lineChartLegend = true;
  public lineChartPlugins = [];

}
