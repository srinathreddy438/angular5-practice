import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormControl } from '@angular/forms';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ISubscription } from 'rxjs/Subscription';
// import { of } from 'rxjs';
// import {retry} from 'rxjs/add/operator/retry';
@Component({
  selector: 'app-api-info',
  templateUrl: './api-info.component.html',
  styleUrls: ['./api-info.component.scss']
})
export class ApiInfoComponent implements OnInit, AfterViewInit {
  loading: boolean;
  data: any;
  apiRoot: string;
  searchField: FormControl;
  statusMessage: string;
  subscription: ISubscription;
  constructor(private searchServe: SearchService, private httpCall: HttpClient) {
    console.log('constructor');
  }

  ngOnInit() {
    this.apiRoot = 'http://httpbin.org';
    console.log('ngOnInit');
    // test service
    // console.log(this.searchServe.testName('abcdef'));
    // console.log(this.searchServe.name);

    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      // .map( term => this.searchServe.doSearchListAsObservable(term))
      .switchMap(term => this.searchServe.doSearchListAsObservable(term))
      .subscribe(value => {
        this.data = value;
      });


    // fork join: call multiple api's at a time
    const character = this.httpCall.get('http://private-1ad25-initializeng.apiary-mock.com/settings');
    const characterHomeworld = this.httpCall.get('http://private-1ad25-initializeng.apiary-mock.com/settings');
    forkJoin([character, characterHomeworld]).subscribe(results => {
      console.log('fork join');
      console.log(results);
    },
      err => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  doGETAsObservable() {
    console.log('GET');
    const url = `${this.apiRoot}/get`; // in es6 we can concat like this. `${}` will indicate it is a variable
    // let url = this.apiRoot + '/get'; // normal concatination
    // this.http.get(url).subscribe((res) => {console.log(res.text())}); -> below line and this is same
    // this.http.get(url).subscribe(res => console.log(res.text()));
    // if we want print in terms of object
    // below angular 4.4 params and headers
    /*
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    // this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));
    // in ES6 if key and value both same u can write {search: search} to {search}
    // this.http.get(url, {search}).subscribe(res => console.log(res.json()));
    // if it is a post call u will send second paramenter as payload and 3rd param is search params
    // success and error callbacks and pass headers
    const headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    const options = new RequestOptions();
    options.headers = headers;
    options.search = search;
    */
   // above angular 4.4 params and headers
    const params = new HttpParams().set('foo', 'moo').set('limit', '25');
    const headers = new HttpHeaders().set('Authorization', btoa('username:password'));

    this.httpCall.get(url, {params}).subscribe(
      res => console.log('success'), error => console.log(`error: ${error.status} ${error.statusText}`)
    );
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE ERROR');
    const url = `${this.apiRoot}/get`;
    this.httpCall.get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doSearchUsingPromise(searchTerm) {
    this.loading = true;
    this.searchServe.doSearchList(searchTerm).then((res) => {
      this.loading = false;
      this.data = res; console.log('res:' + res);
    });
    console.log('from ts file');
  }

  testRetry() {
    const url = `${this.apiRoot}/get1`;
    const params = new HttpParams().set('foo', 'moo').set('limit', '25');
    this.loading = true;
    this.subscription = this.httpCall.get(url, {params})
    /* .retry(3)  //call 3 times if api fails */
    // .retryWhen((err) => err.delay(1000)) //this api call for every 1 second
    .retryWhen((err) => {       /* retry end after 5 times */
      return err.scan((retryCount) => {
        retryCount++;
        if (retryCount < 5) {
          this.statusMessage = `Retrying Attemt... ${retryCount}`;
          return retryCount;
        } else {
          throw(err); // end observable incase 5 times also api failing
        }
      }, 0).delay(1000);
    })
    .subscribe(
      res => {
        console.log('success');
        this.loading = false;
      },
      (error) => {
        console.log(`error: ${error.status} ${error.statusText}`);
        this.loading = false;
      }
    );
  }

  cancelApi() {
    this.loading = false;
    this.statusMessage = 'API Request Cancelled.'
    this.subscription.unsubscribe();
  }
}




/* https://www.youtube.com/watch?v=eAz5RFsewd8 */
