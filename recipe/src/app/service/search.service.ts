import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http'; 

@Injectable()
export class SearchService {
  
  constructor(private http: Http) { }
  //test service 
  /*
  testName(name) {
    return name;
  }
  name = 'srinath';
  */
  results = [];
  apiUrl:string = 'https://itunes.apple.com/search';
  doSearchList(term) {
      var promise = new Promise((resolve, reject) => {
        var options = new RequestOptions();
        var search = new URLSearchParams();
        search.set("term", term);
        search.set("media", "music");
        search.set("limit", '200');
        options.search = search;
        this.http.get(this.apiUrl, options).toPromise().then(
          res => {
            this.results = res.json().results;
            resolve(this.results);
          },
          err => {
            reject(err);
          }
        );
      });
      return promise;
  }
}
