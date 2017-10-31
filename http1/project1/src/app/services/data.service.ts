import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('dataService connected..');
  }

  getStudentsInfo(){
    return this.http.get('http://localhost/talha_training/')
    .map(res => res.json());
  }

  AddStudentInfo(){
    let body:any = {"name": "Umar"};
    return this.http.post('http://localhost/talha_training/index.php/welcome/insert_member?user="Umar"', {"id":1}).subscribe();
  }

}
