import { Injectable } from '@angular/core';
import { IEmployee } from './employee-types';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }
  getEmployees():IEmployee[]{
    let emp:IEmployee[]=[
      {id:101,name:'Rajesh',experience:10,subject:'C++'},
      {id:102,name:'James',experience:6,subject:'Angular, TypeScript, JavaScript'},
      {id:103,name:'Scott',experience:15,subject:'C#'},
      {id:104,name:'Allen',experience:10,subject:'Java'},
      {id:105,name:'Ward',experience:7,subject:'Mobile App Development'}
    ];
    return emp;
  }
  
}
