import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students;

  // constructor() {
  //   // dependancy injection
  //   const service = new StudentService();
  //   this.students = service.students;
  // }
  // itis preferred to be written as follows: 
  constructor(private service:StudentService) {

    this.students = service.students;
  }

}
