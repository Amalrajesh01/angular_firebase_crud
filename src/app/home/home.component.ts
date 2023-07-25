import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Data } from '../interfaces/data';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.dataService.getAll();
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const data: Data = this.myForm.value
      this.dataService.addData(data)
      this.myForm.reset();
      this.router.navigate(['/all'])
    }
  }
}