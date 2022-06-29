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
  constructor() { 
  }

  ngOnInit(): void {
  }



  onUserInput(){
    this.allowReset=true;
  }

  resetUser(){
    this.username= '';
    this.allowReset=false;
  }


}
