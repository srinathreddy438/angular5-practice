import { Component, OnInit } from '@angular/core';

@Component ({
    selector: "app-servers",
    templateUrl : "./servers.component.html",
    //imline template
    //template: "<app-server></app-server><app-server></app-server><app-server></app-server>",
    styleUrls: ['./servers.component.scss']
    //inline styles
    /*styles: [
        `h1 {
            color: red;
        }
        h2 {
            color: green;
        }
        `
    ]*/
})

/*export class ServersComponent implements OnInit {
    changeText = "this will change when we click on above button";
     constructor () {

    }

    ngOnInit() {

    }
    onChangeText() {
        this.changeText = "text chnaged";
    }
}*/

export class ServersComponent {
    changeText = "this will change when we click on above button";
    serverStatus = false;
    servers = ["server1", "server2", "server3"];
    onChangeText() {
        this.changeText = "text chnaged";
        this.serverStatus = true;
    }
    onUpdateText(event) {
        this.changeText = event.target.value;
    }
}

