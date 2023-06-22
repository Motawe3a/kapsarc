import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'line-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart: any = []
  baseUrl = 'https://assets-assignment-532.onrender.com';
  chartLabels: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData() {
    this.http.get(`${this.baseUrl}/api/v1/assets_classifications_with_capacities?config=Config_4`).subscribe((res: any) => {
      for (const key in res.data) {
        if (Object.prototype.hasOwnProperty.call(res.data, key)) {
          if(key !== 'config') {
            this.chartLabels.push(key)
          }
        }
      }
      this.defineChart();
    });
  }

  defineChart() {
    this.chart = new Chart('canvasA', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'CAP',
            data: [10, 20, 50],
            backgroundColor: [
              'rgba(97, 162, 79, 0.1)',

            ],
            borderColor: [
              'rgb(97, 162, 79)',

            ],
            borderWidth: 1,
          },
          {
            label: 'DGO',
            data: [65, 59, 40, 91, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgb(255, 159, 64)',

            ],
            borderWidth: 2,
          },
          {
            label: 'GAS',
            data: [65, 59, 30, 91, 76, 55, 40],
            backgroundColor: [
              'rgba(255, 205, 86, 0.2)',

            ],
            borderColor: [
              'rgb(255, 205, 86)',

            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          //@ts-ignore
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
