import { Component } from '@angular/core';

import { EChartOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocEchart';
  chartOption: EChartOption = {
    backgroundColor: 'rgba(255,255,255,0.9)',
        tooltip: {
            backgroundColor: 'rgba(255,255,255,0.9)',
            textStyle: {
                color: '#333'
            }
        },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
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
    dimension: 3,
    calculable: true,
    textStyle: {
        color: '#eee'
    },
    formatter: '{value} %',
    inRange: {
        // color: ['rgba(241,222,158, 0.3)', 'rgba(241,222,158, 1)']
        color: ['green', 'yellow']
    }
}
  }
}
