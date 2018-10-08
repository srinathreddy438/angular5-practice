import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-grid-with-pipes',
  templateUrl: './grid-with-pipes.component.html',
  styleUrls: ['./grid-with-pipes.component.css']
})
export class GridWithPipesComponent implements OnInit {
  title = 'app';
  apiRoot: string = "http://demo8213882.mockable.io/fetchProperties";
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

  constructor(private http: Http) {
    
  }
  getPropertyList() {
    let url = `${this.apiRoot}`;
    this.http.get(url)
      .toPromise()
      .then(
        res => {
          console.log(res.json())
          this.propertiesList = res.json().data;
        },
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`) 
      );
  }

}

