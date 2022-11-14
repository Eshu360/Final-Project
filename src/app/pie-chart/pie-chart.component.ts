import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [['Download Sales'], ['InStore Sales'], 'Mail Sales'];
  public pieChartDatasets = [
    { data: [300, 500, 100] }
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
