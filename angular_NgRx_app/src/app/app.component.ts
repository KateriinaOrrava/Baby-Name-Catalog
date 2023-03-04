import { Component, Input } from '@angular/core';
import { NamesService } from './services/names.service';
import { Name } from './types/types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NAME_CATALOG_APP';
  names: Name[] = [];
  gender: string = 'girl';

  constructor(private namesService: NamesService) {}

  getData() {
    this.namesService.getData(this.gender).subscribe((response) => {
      this.names = response;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  switchGenderMain(changedGender: string) {
    this.gender = changedGender;
    this.namesService.getData(this.gender).subscribe((response) => {
      this.names = response;
    });
  }

  getDeleteName(name: string) {
    this.namesService.deleteData(name).subscribe((response) => {
      console.log(response);
      // this.names = this.names.filter((item) => item.name !== name);
    });
  }

  addNameMain(nameItem: Name) {
    this.namesService.addData(nameItem).subscribe((nameItem) => {
      
      this.names.push(nameItem)
      console.log(this.names.push(nameItem), this.names)
      return this.names
    });

  }
}
