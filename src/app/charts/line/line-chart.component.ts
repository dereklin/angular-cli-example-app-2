import { Component, Directive, OnInit, ElementRef, Input,
  DoCheck, ChangeDetectionStrategy, KeyValueDiffers, IterableDiffers } from '@angular/core';



import * as moment from 'moment';
import 'd3'
declare var d3;


@Component({
  
  selector: 'pomodoro-line-chart',
  template: `<ng-content></ng-content>`,
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class LineChartComponent implements OnInit, DoCheck {

  @Input() config;
  divs: any;
  differ: any;
  private width;
  private height;
  private margin;
  private xScale;
  private yScale;

  
  private htmlElement: HTMLElement;
  private host:any;
  

  private setup(): void {
    this.margin = this.config.margin;
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
    this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
    this.xScale = d3.scaleTime().range([0, this.width]);
    this.yScale = d3.scaleLinear().range([this.height, 0]);
  }

  ngOnInit() {
    this.setup();

    this.divs = this.host.append('div').attr('class', 'chart')
      .style('width', this.width + 'px')
      .style('height', this.height + 'px')
      .style('background-color', 'yellow')
      .selectAll('div');


    




  }

  constructor(private el: ElementRef,
        private differs: IterableDiffers) {
    this.htmlElement = this.el.nativeElement;
    this.host = d3.select(this.htmlElement);
    this.differ = differs.find([]).create(null);

  }

  render(newValue) {
    if (!newValue || newValue.length == 0) return;

    var divs = d3.select('.chart').selectAll('div').data(newValue);
    divs.text(d => d.px + '%');

    var deletedDivs = divs.exit();
    deletedDivs.remove();


    var newDivs = divs.enter();
    newDivs
    .append('div')
    .style('width', d => d.px + '%')
    .text(d => d.px + '%');



  }

  ngOnChanges(): void {
    
  }

  ngDoCheck() {

    var changes = this.differ.diff(this.config.data);
    if (changes) {
      this.render(this.config.data);

    }

    

  }

};
