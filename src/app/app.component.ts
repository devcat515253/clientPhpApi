import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from "./employee";

class User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'app';

  employees: Employee[] = [];
  expanded: boolean;



  constructor(private httpService: EmployeeService) {}

  ngOnInit() {

   // this.httpService.getData().subscribe((data) => {
     // this.employees = data.json();
     //console.log(data);
      //this.getDirector();
  //  });

    this.httpService.getDirector().subscribe((data) => {
      this.employees = data.json();
      console.log(data);
      //this.getDirector();
    });

    //this.httpService.getData().subscribe((data) =>  console.log(data));
   console.log(this.employees);
   this.expanded = false;

  }
  getDirector() {

  }
  // getDirector(){
  //   var positiveArr = this.employees.filter(function(employee) {
  //     return employee.position === 'директор';
  //   });
  //   console.log(positiveArr);
  // }
  expandClick(event) {
    // this.httpService.getForId(this.id_parent).subscribe((data) => {
    //   this.employees = data.json();
    //   //this.getDirector();
    //this.expanded = !this.expanded;
    this.expanded = event;
    // });
  }
}


