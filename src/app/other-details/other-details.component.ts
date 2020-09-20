import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { candidate } from '../app.model';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.css']
})
export class OtherDetailsComponent implements OnInit {

  displayedColumns = [];
  private dataSource;
  candidate_data = [];
  count = 0;
  obj = {};
  temp = [];
  store = [];
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  private title:string="Experience More than 2 Years."
  constructor(private router:Router) { 
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
      this.dataSource.data = this.candidate_data.filter(function(value){
        console.log(new Date().getFullYear()-new Date(value.joining_date).getFullYear() > 2);
        return new Date().getFullYear()-new Date(value.joining_date).getFullYear() > 2
      });

      for(let i=0;i<this.dataSource.data.length;i++){
        this.count = 0;
        if(!this.store.includes(this.dataSource.data[i].department)){ 
          for(let j=0;j<this.dataSource.data.length;j++){
            if(this.dataSource.data[i].department === this.dataSource.data[j].department){
              this.count++;
            }
          }
          this.obj = {
            department : this.dataSource.data[i].department,
            count:this.count
          }
          this.temp.push(this.obj);
          this.store.push(this.dataSource.data[i].department);
        }
      }
       console.log("temp.....",this.temp);
    }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort; 
    }
    back(){
      this.router.navigate(['/list']);
    }
}
