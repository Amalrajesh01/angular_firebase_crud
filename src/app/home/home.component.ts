import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Data } from '../interfaces/data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private dataService:DataService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const data: Data = this.myForm.value
      console.log('data',data);
      this.dataService.addData(data)
      // You can perform further actions here, e.g., sending the data to a server.
    }
  }
}