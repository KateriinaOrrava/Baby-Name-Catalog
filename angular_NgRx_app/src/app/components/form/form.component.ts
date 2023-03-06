import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Name } from 'src/app/types/types';
import { NamesService } from 'src/app/services/names.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Name>();  
  constructor() {}
  addNameItem(val:Name){
    this.newItemEvent.emit(val);
    console.log('this is emitter', val)
  }

  ngOnInit(): void {}
  @ViewChild('nameForm')
  form!: NgForm;

  onNameCreate() {
    const newNameItem: Name = this.form.value;
    this.addNameItem(newNameItem)
    this.form.resetForm();
  }
}