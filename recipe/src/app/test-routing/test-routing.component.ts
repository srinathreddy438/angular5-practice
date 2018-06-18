import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-routing',
  templateUrl: './test-routing.component.html',
  styleUrls: ['./test-routing.component.css']
})
export class TestRoutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToApiPage() {
    this.router.navigate(['api-info']);
  }

  //if path like this http://localhost:4200/api-info/test then u can write like this.router.navigate(['api-info', 'test']);


}
