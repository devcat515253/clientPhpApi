import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() id_parent: number;

  employees: Employee[] = [];
  expanded: boolean;
  loading: boolean;




  constructor(private httpService: EmployeeService) { }

  ngOnInit() {
    this.loading = true;
    this.httpService.getForId(this.id_parent).subscribe((data) => {
      this.employees = data.json();
      console.log(data);
      this.loading = false;
    });
    this.expanded = false;

  }

  expandClick(event) {

    this.expanded = event;

  }

}
