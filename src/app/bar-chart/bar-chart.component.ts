import { Component, OnInit } from '@angular/core';
import { ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLInes: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: "green",
        }
      }
    }
  }
  public barChartLabels = ['2019', '2020', '2021', '2022', '2023'];
  public barChartType: ChartType = 'bar';
  public barChartLegends = true;

  public barChartData = [
    { data: [10, 20, 30, 40, 50, 60], label: 'series A' },
    { data: [60, 30, 40, 50, 70, 90], label: 'series B', backgroundColor: ["green"] },
    { data: [22, 32, 44, 38, 58, 120], label: 'series C', backgroundColor: ["black"] },
  ]
  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  public barChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
  }

}
