import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import { EChartOption } from 'echarts';
import ECharts = echarts.ECharts;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pocEchart';




  measureData= [820, 932, 901, 934, 1290, 1330, 1320];



  chartOption = {
      grid: {
        left: '0%',
      },



        graphic: {
          type: 'image',


          // left: 'start', // Position at the center horizontally.
          // Position beyond the bottom boundary 10%.
          style: {
            image: 'Map.png',
          }
        }
      ,



      tooltip: {
        backgroundColor: 'rgba(255,255,255,255)',
        textStyle: {
          color: '#333'
        }
      },
      xAxis: {
        show: 'false',
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        show: 'false',
        type: 'value'
      },
      series: [{
        data: this.measureData,
        // legend:{'true','false','true','false','false','false'],
        type: 'scatter',


      },

      ],
      visualMap: {
        type: 'continuous',
        orient: 'horizontal',
        right: 30,
        top: 40,
        min: 0,
        max: 100,
        align: 'bottom',
        text: [null, 'FG:   '],
        dimension: 4,
        calculable: true,
        textStyle: {
          color: '#eee'
        },

        inRange: {
          // color: ['rgba(241,222,158, 0.3)', 'rgba(241,222,158, 1)']
          color: ['green', 'yellow']
        }
      }
    };




}
