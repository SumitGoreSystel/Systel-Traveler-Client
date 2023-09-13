import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss']
})
export class ColorTableComponent{
  WCColors = ["c584d3", "a084d2", "60a5e8", "60d9d9", "5ce7a1", "aae272", "fce153", "f8c459", "febc5a", "eb8a5b"];

  @Input() columns: string[] = [];
  @Input() tableData:any[]=[];
  @Input() enableCheckboxColumn: boolean = false;
  @Input() checkboxColumnLabel: string = 'Select';
  @Input() enableActionColumn: boolean = false;
  @Input() actionColumnLabel: string = 'Actions';
  @Input() actionOptions: any[] = [];
  @Input() checkboxStateBinding: string = 'isActive';

  @Output() checkboxChange: EventEmitter<{ row: any, isChecked: boolean }> = new EventEmitter<{ row: any, isChecked: boolean }>();

  onCheckboxChange(row: any) {
    const isChecked = row[this.checkboxStateBinding];
    this.checkboxChange.emit({ row, isChecked });
  }


  

}
