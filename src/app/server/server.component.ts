import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {

  ServerId:number=1;
  ServerStatus:string="online";
  AllowedAddServer:boolean=false;
  servercreationstatus:string="no server was created ";
  server_name:string="test server"
  constructor(){
    setTimeout(() => {
      this.AllowedAddServer=true
    }, 300);
  }
  Getserverstatus(){
    return this.ServerStatus;
  }
  
  oncreateserver(){
    this.servercreationstatus="server created successufelly";
  }
  
}
