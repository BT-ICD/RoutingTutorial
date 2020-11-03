import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeamMember } from '../iteam-member';
import { TeamMemberDataService } from '../team-member-data.service';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css']
})
export class TeamMemberListComponent implements OnInit {
teamMembers:ITeamMember[];
teamMembersActual:ITeamMember[];
filterForId:string;
  constructor(private teamMemberDataService:TeamMemberDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.teamMembersActual = this.teamMemberDataService.getTeamMembers();
    this.teamMembers= this.teamMembersActual;
    //To read queryParams value
    this.route.queryParamMap.subscribe(params=>{
      //console.log('From list filterString'+ params.get('filterString'));
      let filterById = params.get('filterString');
      if(filterById!=null){
        this.filterRecords(filterById);
        this.filterForId=filterById
      }
      else
      {
        this.filterForId='';
      }
    });
    
  }
  filterRecords(content:string){
    if(content =='') 
      this.teamMembers= this.teamMembersActual; 
    else
      this.teamMembers = this.teamMembersActual.filter(member=>member.id==+(content));
  }
  getFilterStatusString():string{
    let status = `${this.teamMembers.length}/${this.teamMembersActual.length}`;
    return status;
  }

}
