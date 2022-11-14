import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { Component, OnInit } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {


  constructor(private routers: Router, private active_router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
