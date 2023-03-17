import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first angular app';
  name = 'Moneer';
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74VClRl6IRXdfl_8JnEFf3Q19tQB19SKtmA&usqp=CAU';
  url = 'https://youtube.ca';
  numColumnCollapse = 2;
  cssClass = 'border green';
  bgColor = 'orange';
  showBlueColor = true;
  names = ['Moneer', 'Carlos', 'Pete', 'Moose'];

  onSubmit() {
    alert('I just got clicked')
  }
}
