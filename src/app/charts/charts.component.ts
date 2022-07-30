import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { Component, OnInit } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public barChartOptions= {
    scaleShowVerticalLInes:false,
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

      }
  public barChartLabels=['2019','2020','2021','2022','2023'];
  // public barChartType='bar';
  public barChartType: ChartType = 'bar';
  public barChartLegends= true;
  public barChartData=[
    {data:[10,20,30,40,50,60],label:'series A'},
    {data:[60,30,40,50,70,90],label:'series B'},
    {data:[10,20,30,40,50,60,],label:'series C'},
  ]
  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
