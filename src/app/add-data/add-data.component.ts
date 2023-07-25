import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Data, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  myForm!: FormGroup;
  dataArray: any[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

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
      console.log('data', data);
      this.dataService.addData(data)
      this.myForm.reset();
      this.router.navigate(['/all'])
    }
  }
}