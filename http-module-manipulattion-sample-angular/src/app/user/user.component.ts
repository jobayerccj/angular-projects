import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];
  private url= 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        console.log(response.json());
        this.users = response.json();
      });
   }

   addUser(user: HTMLInputElement){
     let newUser = {name: user.value};
     console.log(user.value);
     this.http.post(this.url, JSON.stringify(newUser))
     .subscribe(response=>{
      newUser["id"] = response.json().id;
       this.users.splice(0,0, newUser);
       console.log(this.users);
     });
 
   }

   updateUser(user: HTMLInputElement){
    
    this.http.put(this.url + '/'+  user.id, JSON.stringify(user))
    .subscribe(response=>{
      console.log(response.json());
    });

  }

  deleteUser(user: HTMLInputElement){

    this.http.delete(this.url + '/'+  user.id, JSON.stringify(user))
    .subscribe(response=>{
      let index = this.users.indexOf(user);
      this.users.splice(index, 1);
      //console.log(this.users);
    });

  }

  ngOnInit() {
  }

}
