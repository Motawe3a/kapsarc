import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartComponentB } from './components/chartB/chartB.component';
import { TableBComponent } from './components/tableB/tableB.component';
import { Table2Component } from './components/table2/table2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    Table2Component,
    TableBComponent,
    ChartComponent,
    ChartComponentB
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
