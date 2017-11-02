import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Output() expandEvent = new EventEmitter();
   expanded: boolean;

  constructor() { }

  ngOnInit() {
  }
  expandClick() {

    this.expanded = !this.expanded;
    this.expandEvent.emit(this.expanded);


  }

}
