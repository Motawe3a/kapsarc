import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public exerciseA: boolean = true;
  public exerciseB: boolean = false;

  constructor() { }

  ngOnInit(): void {

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
