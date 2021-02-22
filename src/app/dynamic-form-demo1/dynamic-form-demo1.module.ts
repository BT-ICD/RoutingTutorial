import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import {  RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MainFormComponent } from './main-form/main-form.component';



@NgModule({
  declarations: [DynamicFormQuestionComponent,  DynamicFormComponent, MainFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
    // RouterModule.forChild([
    //   {
    //     path:'dynamicdemo1',
    //     component:DynamicFormComponent
    //   }
    // ])
  ]
})
export class DynamicFormDemo1Module { }
