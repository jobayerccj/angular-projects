import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
//declare var firebase:any;
//declare var students_list: any[];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students_list: any[];
  constructor(private dataService:DataService) {
    this.dataService.getStudentsInfo().subscribe((students) => {
      //console.log(students);
      this.students_list = students;
      //console.log(this.students_list);
    });

    this.dataService.AddStudentInfo();
  }

  ngOnInit() {

  }



  deleteUser(student){
    alert('Are you sure?');
  }

}
