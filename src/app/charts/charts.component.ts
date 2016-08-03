import { Component, OnInit } from '@angular/core';
import {LineChartComponent} from './line/line-chart.component';
// import {LineChartComponent} from './charts';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-charts',
  styleUrls: ['charts.component.css'],
  templateUrl: 'charts.component.html',
  directives: [LineChartComponent]
})
export class ChartsComponent {
  chartConfig;
  private start;
  private end;
  private intervalId;

  constructor() {
    this.start = moment("201607300630", "YYYYMMDDHHmm");
    this.end = moment("201607301300", "YYYYMMDDHHmm");
    this.chartConfig = {
      margin: { top: 20, right: 20, bottom: 40, left: 40 },
      startTime: this.start.valueOf(),
      endTime: this.end.valueOf(),
      data: []
    };

    this.intervalId = window.setInterval(
        () => {
          this.populateData();
        }
      
      
      , 500);


    
    
    
  }

  private populateData() {
      var dataPoint = {
        asOf: this.start.valueOf(),
        px: Math.random() * 100,
        iovp: Math.random() * 100,
        bid: Math.random() * 100,
        ask: Math.random() * 100
      };

      if (this.chartConfig.data.length == 0) {

        this.chartConfig.data.push(dataPoint);

        // graphData.forEach(function(d, i) {
        //   d.px = Math.random() * 100;
        // });

      } else {
        window.clearInterval(this.intervalId);
      }

      // if (that.width === "500") {
      //   that.width = "600";
      // } else {
      //   that.width = "500";
      // }

      this.start = this.start.add(60, 'seconds');

      if (this.start >= this.end) {
        this.start = moment("201607300630", "YYYYMMDDHHmm");
        this.chartConfig.data = [];
      }
    }




};
