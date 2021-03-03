import { Component,  OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-demo',
  templateUrl: './question-demo.component.html',
  styleUrls: ['./question-demo.component.css']
})
export class QuestionDemoComponent implements OnInit {
  text: string;
  studentForm:FormGroup;
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.studentForm= this.fb.group({
      firstName:['', Validators.required],
      lastName:[''],
      addresses:this.fb.array([this.addAddress()])
    })
  }
  addAddress():FormGroup{
    let address = this.fb.group({
      area:['',Validators.required],
      city:['']
    })
    return address;
  }
  get addresses():FormArray{
    return this.studentForm.get('addresses') as FormArray;
  }
  addNewAddress():void{
    this.addresses.push(this.addAddress());
  }
  onSubmit():void{
    console.log(this.studentForm.value)
  }
  
}
