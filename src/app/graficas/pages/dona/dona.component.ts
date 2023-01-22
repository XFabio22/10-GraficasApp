import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [ 
    'Download Sales', 
    'In-Store Sales', 
    'Mail-Order Sales'
   ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: '#FF5F5D',
        hoverBackgroundColor: '#FF9933',
      },
      {
        data: [50, 150, 120],
        backgroundColor: '#3F7C85',
        hoverBackgroundColor: '#0099DD',
      },
      {
        data: [250, 130, 70],
        backgroundColor: '#00CCBF',
        hoverBackgroundColor: '#00ABBD',
      },
    ]
    
  };
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [ '#915DD9','#6BA1F8','#FAE0E8']
}
