import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface tableData {
  feed: string;
  config: string;
  avg: string;
}
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
  baseUrl = 'https://assets-assignment-532.onrender.com';

  @Input() displayedColumns: string[] = ['feed', 'config', 'avg'];
  public dataSource!: MatTableDataSource<tableData>;
  posts: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // handle pagination from frontend side
    this.http.get(`${this.baseUrl}/api/v1/avg_composition?size=230`).subscribe((res: any) => {

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
