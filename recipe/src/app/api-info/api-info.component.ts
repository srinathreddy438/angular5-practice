import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { SearchService } from '../service/search.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-api-info',
  templateUrl: './api-info.component.html',
  styleUrls: ['./api-info.component.css']
})
export class ApiInfoComponent implements OnInit {
  apiRoot: string = "http://httpbin.org";
  private searchField: FormControl;
  constructor(private http: Http, private searchServe: SearchService) { }
  
  doGETAsObservable() {
    console.log("GET");
    let url = `${this.apiRoot}/get`; //in es6 we can concat like this. `${}` will indicate it is a variable
    //let url = this.apiRoot + '/get'; //normal concatination
    //this.http.get(url).subscribe((res) => {console.log(res.text())}); -> below line and this is same
    //this.http.get(url).subscribe(res => console.log(res.text()));
    //if we want print in terms of object

    var search = new URLSearchParams();
    search.set("foo", "moo");
    search.set('limit', '25');
    //this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));
    //in ES6 if key and value both same u can write {search: search} to {search}
    //this.http.get(url, {search}).subscribe(res => console.log(res.json()));
    //if it is a post call u will send second paramenter as payload and 3rd param is search params
    //success and error callbacks and pass headers
    var headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    var options = new RequestOptions();
    options.headers = headers;
    options.search = search;
    this.http.get(url, options).subscribe(
      res => console.log("success"), error => console.log(`error: ${error.status} ${error.statusText}`)
    );
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`) 
      );
  }

 
  

  private loading;
  private data;
  doSearchUsingPromise(searchTerm) {
    this.loading = true;
    this.searchServe.doSearchList(searchTerm).then((res) => {this.loading = false, this.data = res; console.log("res:"+res)});
    console.log("from ts file");
  }

  
  ngOnInit() {
    //test service
    //console.log(this.searchServe.testName('abcdef'));
    //console.log(this.searchServe.name);
    
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        //.map( term => this.searchServe.doSearchListAsObservable(term))
        .switchMap( term => this.searchServe.doSearchListAsObservable(term))
        .subscribe( value => { 
          this.data = value;
    });
  }
}
