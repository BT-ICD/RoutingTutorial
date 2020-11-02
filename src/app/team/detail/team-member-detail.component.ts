import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeamMember } from '../iteam-member';
import { TeamMemberDataService } from '../team-member-data.service';

@Component({
  selector: 'app-team-member-detail',
  templateUrl: './team-member-detail.component.html',
  styleUrls: ['./team-member-detail.component.css']
})
export class TeamMemberDetailComponent implements OnInit {
teamMember:ITeamMember;
id:number;
name:string;
mobile:string;
  constructor(private route:ActivatedRoute, private teamMemberDataService:TeamMemberDataService) { }

  ngOnInit(): void {
    let teams:ITeamMember[]
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      this.name = params.get('name');
      this.mobile=params.get('mobile');

    });
    //read values from query string parameters
    

    teams= this.teamMemberDataService.getTeamMembers().filter(obj=>obj.id==this.id);
    console.log(teams);
    if(teams.length==1){
      this.teamMember=teams[0];
    }
  }

}
