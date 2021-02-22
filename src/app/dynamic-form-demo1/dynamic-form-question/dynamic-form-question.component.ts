/**
 * The DynamicFormQuestionComponent is responsible for rendering the details of an individual question based on values in the data-bound question object. The form relies on a [formGroup] directive to connect the template HTML to the underlying control objects. The DynamicFormQuestionComponent creates form groups and populates them with controls defined in the question model, specifying display and validation rules.
 * Reference: https://angular.io/guide/dynamic-form
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
@Input() question: QuestionBase<string>;
@Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  get isValid(){
    return this.form.controls[this.question.key].valid;
  }
  onSubmit():void{
    
  }
}
