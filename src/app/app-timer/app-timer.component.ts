import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-app-timer',
  templateUrl: './app-timer.component.html',
  styleUrls: ['./app-timer.component.css']
})
export class AppTimerComponent implements OnInit , OnDestroy{
@Input() duration:number;
@Output() onTimerComplete= new EventEmitter();

private source = interval(1000);
private intervalSub:Subscription;
counter:number=0;
  constructor() { }
  ngOnDestroy(): void {
    this.stop();
  }

  ngOnInit(): void {
    this.start();
  }
  start():void{
    this.intervalSub= this.source.subscribe((data)=>this.tick());
  }
  tick():void{
    this.counter+=1
    if(this.counter==this.duration){
      this.counter=0;
      this.onTimerComplete.emit();
    }
  }
  stop():void{
    if(this.intervalSub){
      this.intervalSub.unsubscribe();
    }
  }
  

}
