import { Injectable } from '@angular/core';
import { IEmployeeSkill, ISkill } from './demo-type';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  constructor() { }
  getEmployee():IEmployeeSkill{
    let obj: IEmployeeSkill={name:'Rajesh Shah',skills:[{id:1,name:'Coding'},{id:2,name:'Testing'}]};
    return obj;
            
  }
  getSkills():ISkill[]{
    let skills:ISkill[]=[
      {id:1,name:'Coding'},
      {id:2,name:'Testing'},
      {id:3,name:'Marketting'},
      {id:4,name:'Requirement Understanding'}
    ]
    return skills;
  }
}
// {name:'Minoli',skills:[{id:3,name:'Marketting'},{id:4,name:'Requirement Understanding'}]}
    
