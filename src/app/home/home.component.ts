import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppTimerComponent } from '../app-timer/app-timer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy , AfterViewInit{
duration1:number=10;
duration2:number=15;
@ViewChild('t1') t1Ref:AppTimerComponent;
@ViewChild('t2') t2Ref:AppTimerComponent;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.t1Ref);
    //this.t1 = this.t1Ref.nativeElement as AppTimerComponent;
    //console.log(this.t1);
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  ontimer1():void{
    let d = new Date();
    console.log("Timer 1 complete" + d.getMinutes().toString() + ':' +d.getSeconds().toString()  );
  }
  ontimer2():void{
    let d = new Date();
    console.log("Timer 2 complete" + d.getMinutes().toString() + ':' +d.getSeconds().toString()  );  
  }
  stopt1():void{
    this.t1Ref.stop();
  }
  start1():void{
    this.t1Ref.start();
  }
  stopt2():void{
    this.t2Ref.stop();
  }
  start2():void{
    this.t2Ref.start();
  }
}
