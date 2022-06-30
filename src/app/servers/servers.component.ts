import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowReset = false;
  serverCreationStatus = 'No server created';
  username = '';
  isReset=false;
  showPara=false;
  servers = ['testserver','testserver2'];
  buttonLog=[2];
  constructor() {
  }

  ngOnInit(): void {
  }

  togglePara(){
    if (this.showPara===false)
      this.showPara=true;
      else
      this.showPara=false;
  }

  logClick($event:Event){
    this.buttonLog.push($event.timeStamp);
  }

  onUserInput(){
    this.allowReset=true;
    this.isReset=false;
  }

  resetUser(){
    this.username= '';
    this.allowReset=false;
    this.isReset=true;
  }

  addServer(){
    this.servers.push(this.username);
  }


}
