import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  ngOnInit(): void {
    // this.graficasServices.getUsuariosRedesSociales().subscribe(data => {
    //   console.log(data);
    //     const labels = Object.keys(data)
    //     const dataChart = Object.values(data)
    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{data:Object.values(data)}]
    //     }
    //   });
    this.graficasServices.getDonaData()
    .subscribe( ({labels,datasets}) => {
    
      this.doughnutChartData = {labels,datasets}
    })
  }
  constructor(private graficasServices:GraficasService){}
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
   ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
     

    ]
    
  };
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [ '#915DD9','#6BA1F8','#FAE0E8']

 
}
