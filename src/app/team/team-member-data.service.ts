import { Injectable } from '@angular/core';
import { ITeamMember } from './iteam-member';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberDataService {

  constructor() { }
  getTeamMembers():ITeamMember[]{
    let team:ITeamMember[]=[
      {id:101,name:'Rajesh', country:'India',mobile:'1011231231',doj: new Date('12-Nov-2018')},
      {id:102,name:'Mitesh', country:'India',mobile:'1021231231',doj: new Date('10-DEC-2015')},
      {id:103,name:'Manali', country:'India',mobile:'1031231231',doj: new Date('22-JAN-2010')}
    ]
    return team;
  }
}
