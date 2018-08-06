import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
    "selector": "app-login",
    "template": `<a>
        <span>Login</span>
        <span>Logout</span>
    </a>`
})

export class LoginComponent {
    constructor(private auth: AuthService) {

    }
    sessionExists() {
        return this.auth.isAuthenticated();
    }
    returnFinalValueFun(name) {
        return name;
    }
}