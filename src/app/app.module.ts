import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import {EmployeeService} from './employee.service';
import { TreeComponent } from './tree/tree.component';
import { NodeComponent } from './node/node.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent
    ]
})
export class AppModule { }
