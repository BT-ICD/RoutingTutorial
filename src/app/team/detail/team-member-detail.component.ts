import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route:ActivatedRoute, private teamMemberDataService:TeamMemberDataService, private router:Router) {
    //Read value of state object - using NavigationExtra - This is available in constructor - cannot available once routing completed or available as history.state
    //Reference - https://rangle.io/blog/routing-features-angular-7-2-0/ 
    //Referfence - https://medium.com/ableneo/how-to-pass-data-between-routed-components-in-angular-2306308d8255
    let stateobj = this.router.getCurrentNavigation().extras.state;
    console.log(this.router.getCurrentNavigation());
    console.log(stateobj);
    
   }

  ngOnInit(): void {
    let teams:ITeamMember[]
    //read values from query string parameters
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      this.name = params.get('name');
      this.mobile=params.get('mobile');

    });
    //To get details of state object passed during routing
    console.log(history.state);
    teams= this.teamMemberDataService.getTeamMembers().filter(obj=>obj.id==this.id);
    console.log(teams);
    if(teams.length==1){
      this.teamMember=teams[0];
    }
  }

}
