/**
 * To learn about timer using RxJs 
 * Reference: https://rxjs-dev.firebaseapp.com/api/index/function/timer
 * When we open alert this timer will stop processing. Need to learn more on this.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-rxs-sdemo',
  templateUrl: './rxs-sdemo.component.html',
  styleUrls: ['./rxs-sdemo.component.css']
})
export class RxsSDemoComponent implements OnInit, OnDestroy {
readonly numbers = timer(60000, 60000);
numbersSub:Subscription;
cnt:number=0;
timeString:string;
  constructor() { }
  ngOnDestroy(): void {
    console.log('on destroy life cycle hook');
    if(this.numbersSub){
      this.numbersSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.numbersSub= this.numbers.subscribe((data)=>{
       this.onTimeChange();
     });
    
  }
  onTimeChange(){
    // if(this.cnt==59){
    //   this.cnt=0
    // }
    // else{
    //   this.cnt++;
    // }
    
    // console.log(this.cnt);
    let date = new Date();
    this.timeString='Minute elipsed' + date.getMinutes() + ' - ' + date.getSeconds()
    console.log(this.timeString);
   }
   buttonClick(){
     alert('dialog tocheck timer');
   }
}
