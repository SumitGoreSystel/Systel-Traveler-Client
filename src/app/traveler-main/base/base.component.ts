import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  tableData = [
    { Name: 'John', Age: 30, City: 'New York',Phone:1234546,number:12 },
    { Name: 'Alice', Age: 25, City: 'San Francisco',Phone:1234546,number:12 },
    { Name: 'Bob', Age: 35, City: 'Los Angeles',Phone:1234546,number:12 }
  ];

}
