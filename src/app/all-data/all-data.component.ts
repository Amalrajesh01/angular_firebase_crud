import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../interfaces/data';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss']
})
export class AllDataComponent implements OnInit {
  dataArray: any[] = [];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getAll().then(() => this.dataArray = this.dataService.dataArray);

    console.warn(this.dataArray);

  }
  delete(id: any) {
    const result = window.confirm('Are you sure you want to delete?');
    if (result) {
      this.dataService.deleteItem(id);
    }
  }

}
