import { Component } from '@angular/core';

@Component({
  //selector works like a css selector
  // selector: [app-servers],
  // this would create a sitch where you use the component as an atribute
  // selectpr '.app-servers

  // cannot use psudo elements
  // cannot use IDs
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: []
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offilne';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
