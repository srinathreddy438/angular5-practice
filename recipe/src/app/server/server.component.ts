import { Component, OnInit } from '@angular/core';

@Component({
  //as a element
  selector: 'app-server',
  //as a attribute 
  //selector: "[app-server-as-attribute1, app-server-as-attribute2]",
  //as a class
  //selector: '.app-server-as-a-class',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  disableBtn = true;

  //attribute directive
  serverOnlineStatus = "Offline";
  constructor() { //constructor function will call by angular while creating component
    setTimeout(() => {
      this.disableBtn = false;
    }, 2000);
    this.serverOnlineStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  getBackground() {
    return this.serverOnlineStatus === "Online" ? "green" : "red";
  }

  ngOnInit() {
  }

}
