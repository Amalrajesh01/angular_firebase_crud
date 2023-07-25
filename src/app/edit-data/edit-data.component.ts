import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Data } from '../interfaces/data';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  dataArray: any[] = [];
  myForm!: FormGroup;
  currentId!: any;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router, private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
    debugger
    this.currentId = this.route.snapshot.params['id']
    if (this.currentId) {

      this.dataService.getAll().then(() => this.dataArray = this.dataService.dataArray)
    }
    console.log(this.dataArray);

  }

  onSubmit() {
    if (this.myForm.valid) {
      const data: Data = this.myForm.value
      console.log('data', data);
      this.dataService.updateItem(this.currentId, data)
      this.myForm.reset();
      this.router.navigate(['/all'])
    }
  }

}
