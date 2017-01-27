import { Component, Directive, OnInit, ElementRef, Input,
  DoCheck, ChangeDetectionStrategy, KeyValueDiffers, IterableDiffers, HostListener } from '@angular/core';



import * as moment from 'moment';
import 'd3'
declare var d3;


@Component({
  moduleId: module.id,
  selector: 'pomodoro-line-chart',
  template: `<ng-content></ng-content>`,
  // changeDetection: ChangeDetectionStrategy.OnPush
  styleUrls: ['line-chart.component.css']

})
export class LineChartComponent implements OnInit, DoCheck {

  @Input() config;
  divs: any;
  configDiffer: any;
  dataDiffer: any;
  private width;
  private height;
  private margin;
  private xScale;
  private yScale;

  
  private htmlElement: HTMLElement;
  private host:any;
  private chart:any;
  private visCont: any;
  private xAxis: any;
  private yAxis: any;
  private priceLine: any;
  private numberPoints: any;
  private minMaxPoints: any;
  
  constructor(private el: ElementRef,
        private keyValueDiffers: KeyValueDiffers,
        private iterableDiffers: IterableDiffers) {
    this.htmlElement = this.el.nativeElement;
    this.host = d3.select(this.htmlElement);
    this.configDiffer = this.keyValueDiffers.find({}).create(null);
    this.dataDiffer = this.iterableDiffers.find([]).create(null);

    this.numberPoints = ["px", "iopv", "ask", "bid"];
    this.resetMinMaxPoints();
  }

  ngOnInit() {
    this.chart = this.host.append('svg').attr('class', 'chart');
    this.visCont = this.chart.append("g").attr('class', 'vis');
    this.xAxis = this.visCont.append("g").attr("class", "x axis");
    this.yAxis = this.visCont.append("g").attr("class", "y axis");
    this.yAxis
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");
    this.priceLine = this.visCont.append("path").attr("class", "price line");
    
  }

  resetMinMaxPoints() {
    this.minMaxPoints = {};
    this.numberPoints.forEach((key) => {
      this.minMaxPoints[key] = {};
    });
  }

  render() {
    if (!this.config.data) return;
    this.setup();

    this.chart
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);
    this.visCont
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");



  	var data = [];
    var lineData = [];
    var bidAskData = [];
    var priceData = [];
    var iopvData = [];
    this.resetMinMaxPoints();

    // for (var i = 0; i < this.config.data.length; i++) {
    //   if (this.config.data[i].asOf.getTime() > endTime) {
    //     break;
    //   }

    //   if (inData[i].asOf.getTime() >= startTime) {
    //     data.push(inData[i]);
        
    //     if (inData[i].asOf.getTime() >= chartStart && inData[i].asOf.getTime() <= chartEnd) {
    //       lineData.push(inData[i]);
    //       if (angular.isDefined(inData[i].bid) && angular.isDefined(inData[i].ask)) {
    //         bidAskData.push(inData[i]);
    //         setMin(minMaxPoints.bid, inData[i].bid);
    //         setMax(minMaxPoints.bid, inData[i].bid);
    //         setMin(minMaxPoints.ask, inData[i].ask);
    //         setMax(minMaxPoints.ask, inData[i].ask);
    //       }
    //       if (angular.isDefined(inData[i].px)) {
    //         priceData.push(inData[i]);
    //         setMin(minMaxPoints.px, inData[i].px);
    //         setMax(minMaxPoints.px, inData[i].px);
    //       }
    //       if (angular.isDefined(inData[i].iopv)) {
    //         iopvData.push(inData[i]);
    //         setMin(minMaxPoints.iopv, inData[i].iopv);
    //         setMax(minMaxPoints.iopv, inData[i].iopv);
    //       }
          
    //     }
        
    //   }
    // }
      





    var xAxis = d3.axisBottom()
      .scale(this.xScale);

    var yAxis = d3.axisLeft()
      .scale(this.yScale);


    var line = d3.line()
      .x((d) => { return this.xScale(d.asOf); })
      .y((d) => { return this.yScale(d.px); });

    this.xScale.domain([this.config.startTime, this.config.endTime]);
    this.yScale.domain(d3.extent(this.config.data, function(d) { return d.px; }));

    this.xAxis.attr("transform", "translate(0," + this.height + ")")
      .call(xAxis);

    this.yAxis
      .call(yAxis);

    this.priceLine.attr("d", line(this.config.data));

      /*
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");
      */    

    /*
    this.divs = this.chart
      .style('width', this.width + 'px')
      .style('height', this.height + 'px')
      .selectAll('div');
      

    var divs = this.divs.data(this.config.data);
    divs.text(d => d.px + '%');

    var deletedDivs = divs.exit();
    deletedDivs.remove();


    var newDivs = divs.enter();
    newDivs
    .append('div')
    .style('width', d => d.px + '%')
    .text(d => d.px + '%');

    */

  }

  private setup(): void {
    this.margin = this.config.margin;
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
    this.height = this.htmlElement.clientHeight - this.margin.top - this.margin.bottom;
    this.xScale = d3.scaleTime().range([0, this.width]);
    this.yScale = d3.scaleLinear().range([this.height, 0]);
  }


  

  ngDoCheck() {
    var changes = this.configDiffer.diff(this.config) || this.dataDiffer.diff(this.config.data);
    if (changes) {
      this.render();
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.render();
  // }

};
