import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoDataService } from '../demo-data.service';
import { IEmployeeSkill, ISkill } from '../demo-type';

@Component({
  selector: 'app-rlab1',
  templateUrl: './rlab1.component.html',
  styleUrls: ['./rlab1.component.css']
})
export class RLab1Component implements OnInit {
  emplForm: FormGroup;
  emp: IEmployeeSkill;
  skillData: ISkill[];

  constructor(private fb: FormBuilder, private demoDataService: DemoDataService) { }
  ngOnInit(): void {
    this.skillData = this.demoDataService.getSkills();
    this.emp = this.demoDataService.getEmployee();
    // Initialize Form Group
    this.emplForm = this.fb.group({
      firstName: [this.emp.name, Validators.required],
      skills: this.fb.array([
        this.fb.control(this.emp.skills[0].id)

      ])
    });
    //Fill Skills to Form Group
    this.fillSkills();
  }
  fillSkills() {
    this.skills.clear();
    this.emp.skills.forEach((obj) => {
      this.skills.push(this.fb.control(obj.id));
    })
  }
  get skills() {
    return this.emplForm.get('skills') as FormArray;
  }

  onSubmit() {
    console.log(this.emplForm.valid);
    console.log(this.emplForm.value);
  }
}
