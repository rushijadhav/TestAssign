import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { candidate } from '../app.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns = [];
  private dataSource;
  candidate_data = [];
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  
  constructor() { 
  this.displayedColumns = ['id','name','department','joining_date'];
  this.dataSource = new MatTableDataSource<candidate>();
  }
  ngOnInit() {
    this.candidate_data=[
      {"id":11,"name":"Ash","department":"Finance","joining_date":new Date("8/10/2016")},
      {"id":12,"name":"John","department":"HR","joining_date":new Date("1/18/2011")},
      {"id":13,"name":"Zuri","department":"Operations","joining_date":new Date("11/28/2019")},
      {"id":14,"name":"Vish","department":"Development","joining_date":new Date("7/7/2017")},
      {"id":15,"name":"Barry","department":"Operations","joining_date":new Date("8/19/2014")},
      {"id":16,"name":"Ady","department":"Finance","joining_date":new Date("10/5/2014")},
      {"id":17,"name":"Gare","department":"Development","joining_date":new Date("4/6/2014")},
      {"id":18,"name":"Hola","department":"Development","joining_date":new Date("12/8/2010")},
      {"id":19,"name":"Ola","department":"HR","joining_date":new Date("5/7/2011")},
      {"id":20,"name":"Kim","department":"Finance","joining_date":new Date("10/20/2010")}
    ]
    this.dataSource.data = this.candidate_data as candidate[];
  }
  //search by name...
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  // sort by name and date
  ngAfterViewInit() {
    this.dataSource.sort = this.sort; 
  }
  // remove department:developement
  removeDepat(){
    this.dataSource.data=this.candidate_data.filter(function(value){
      return value.department!=="Development";
    });
  }
  // set all data original
  refresh(){
    this.dataSource.data = this.candidate_data;
  }

}
