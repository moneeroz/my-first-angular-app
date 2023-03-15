import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  students = [
    {id: 1, name: 'Moneer Alromimah', age: 28, department: 'Web Development'},
    {id: 1, name: 'Marc', age: 34, department: 'Data Analysis'},
    {id: 1, name: 'Moose', age: 68, department: 'Web Designer'}
  ];

  constructor() { }
}
