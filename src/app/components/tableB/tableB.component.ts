import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface tableData {
  Country: string;
  month_year: string;
  value: string;
}
@Component({
  selector: 'app-tableB',
  templateUrl: './tableB.component.html',
  styleUrls: ['./tableB.component.scss']
})
export class TableBComponent implements OnInit {
  baseUrl = 'https://assets-assignment-532.onrender.com';

  public dataSource!: MatTableDataSource<any>;
  posts: any;

  @Input() displayedColumns: string[] = ['Country', 'month_year', 'value'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // handle pagination from frontend side
    this.http.get(`${this.baseUrl}/api/v1/extracted_data?size=250`).subscribe((res: any) => {

      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
