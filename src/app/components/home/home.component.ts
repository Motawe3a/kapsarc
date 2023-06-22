import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  baseUrl = 'https://assets-assignment-532.onrender.com';

  tableData1: any = [];
  tableData2: any = [];

  public exerciseA: boolean = true;
  public exerciseB: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initializeData();

  }

  initializeData() {
    this.http.get(`${this.baseUrl}/api/v1/composition_limit?page=1&size=250`).subscribe((res: any) => {
      this.tableData1 = res.data;
    });
  }

  showExercisePage(page: string) {
    if (page === 'A') {
      this.exerciseA = true;
      this.exerciseB = false;
    } else {
      this.exerciseA = false;
      this.exerciseB = true;

    }
  }

}
