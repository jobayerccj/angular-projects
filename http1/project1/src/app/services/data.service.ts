import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
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
    let body = {"name": "Umar"};
    //let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //let options       = new RequestOptions({ headers: headers });
    
    return this.http.post('http://localhost/talha_training/index.php/welcome/insert_member', 
    {"name": "Umar"})
    .subscribe(response=> {
      console.log(response.json())
    });
  }

}
