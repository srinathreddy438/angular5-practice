import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-with-pipes',
  templateUrl: './grid-with-pipes.component.html',
  styleUrls: ['./grid-with-pipes.component.scss']
})
export class GridWithPipesComponent implements OnInit {
  title = 'app';
  apiRoot = 'http://demo8213882.mockable.io/fetchProperties';
  propertiesList;
  searchProperty;
  searchRent;
  locality;
  ngOnInit() {
    this.getPropertyList();
    this.searchProperty = 1500;
    this.searchRent = 30000;
    this.locality = '';
  }

  // constructor(private http: Http) {
  constructor(private http: HttpClient) {

  }
  getPropertyList() {
    const url = `${this.apiRoot}`;
    this.http.get(url)
      .toPromise()
      .then(
        res => {
          this.propertiesList = res['data'];
        },
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

}

