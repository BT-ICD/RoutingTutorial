import { Component, OnInit } from '@angular/core';
import { ITeamMember } from '../iteam-member';
import { TeamMemberDataService } from '../team-member-data.service';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css']
})
export class TeamMemberListComponent implements OnInit {
teamMembers:ITeamMember[]
  constructor(private teamMemberDataService:TeamMemberDataService) { }

  ngOnInit(): void {
    this.teamMembers = this.teamMemberDataService.getTeamMembers();
  }

}
