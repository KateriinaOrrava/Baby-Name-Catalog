import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();  
  constructor() {}
  switchGender(val: string) {
    this.newItemEvent.emit(val);
    console.log('this is emitter', val)
  }

  ngOnInit(): void {}
  @ViewChild('genderSwitch')
  form!: NgForm;
  gender: string = 'girl';
  isChecked = false;

  changeGender() {
    this.isChecked = !this.isChecked;
    this.gender === 'girl' ? (this.gender = 'boy') : this.gender = 'girl';
    this.switchGender(this.gender)
  }
}
