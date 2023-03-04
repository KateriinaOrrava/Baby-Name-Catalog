import { Component, Input, OnInit , EventEmitter, Output } from '@angular/core';
import { NamesService } from 'src/app/services/names.service';
import { Name } from 'src/app/types/types';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() namesList: Name[] = [];

  constructor() {}
  sendNameToDelete(val: string) {
    this.newItemEvent.emit(val);
  }
  ngOnInit(): void {
    console.log('fromListComponent', this.namesList);
  }

  deleteName(name: string) {
    this.sendNameToDelete(name)
  }
}
