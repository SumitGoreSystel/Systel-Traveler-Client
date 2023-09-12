import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss']
})
export class ColorTableComponent{
  @Input() columns: string[] = [];
  @Input() tableData:any[]=[];


  getRowValue(row: any, columnIndex: number): any {
    const rowKeys = Object.keys(row);
    const keyAtIndex = rowKeys[columnIndex];
    return row[keyAtIndex];
  }

}
