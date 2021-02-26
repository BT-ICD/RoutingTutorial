/**
 * To learn about SignalR integration
 * npm Package to install npm install @aspnet/signalr --save 
 * Reference: https://codeburst.io/how-to-notify-your-angular-5-app-using-signalr-5e5aea2030b2
 * https://code-maze.com/netcore-signalr-angular/
 * 
 */
import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection } from '@aspnet/signalr';

@Component({
  selector: 'app-signal-rdemo',
  templateUrl: './signal-rdemo.component.html',
  styleUrls: ['./signal-rdemo.component.css']
})
export class SignalRDemoComponent implements OnInit {
messages: string[]=[];
private _hubConnection:HubConnection;
  constructor() { }

  ngOnInit(): void {
    this._hubConnection=  new signalR.HubConnectionBuilder().withUrl('https://localhost:44305/message').build();
    this._hubConnection
      .start()
      .then(()=>console.log('Connection started'))
      .catch(err=>console.log('Error while starting connection: ' + err))

      this._hubConnection.on('sentToClient',(data)=>{
        console.log(data);
      })

  }

}
