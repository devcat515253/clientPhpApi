import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }


  getData() {

    return this.http.get('http://phpapi/photo');
  }

  getDirector() {
    // console.log(this.http.get('http://phpapi/photo',{ 'withCredentials': true}));
    return this.http.get('http://phpapi/photo/director');
  }

  getForId(id: number)  {
    //return this.http.get('https://dog.ceo/api/breeds/list/all');
    return this.http.get('http://phpapi/photo/' + id);
  }


}


