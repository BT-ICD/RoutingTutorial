import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingTutorial';
  
  constructor(private router:Router) {
    this.router.events.subscribe((routerEvent:Event)=>{
    this.checkRouterEvent(routerEvent);
    });
    
  }
  checkRouterEvent(routerEvent:Event){
    if(routerEvent instanceof NavigationStart){
      console.log('Event : NavigationStart');
    }
    else if (routerEvent instanceof NavigationCancel){
      console.log('Event : NavigationCancel');
    }
    else if (routerEvent instanceof NavigationEnd){
      console.log('Event : NavigationEnd');
    }
    else if (routerEvent instanceof NavigationError){
      console.log('Event : NavigationError');
    }
  }
}
