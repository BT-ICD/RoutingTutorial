/**
 * A dynamic form uses a service to create grouped sets of input controls, based on the form model. The following QuestionControlService collects a set of FormGroup instances that consume the metadata from the question model. You can specify default values and validation rules.
 * Reference: https://angular.io/guide/dynamic-form
 */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }
  toFormGroup(questions:QuestionBase<string>[]){
    const group:any={};
    questions.forEach(question=>{
      group[question.key] = question.required? new FormControl(question.value||'', Validators.required)
        : new FormControl(question.value || '');
      
    });
    return new FormGroup(group);
  }
}
