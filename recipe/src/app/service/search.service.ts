import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  // constructor(private http: HttpClient) { }
  // test service
  /*
  testName(name) {
    return name;
  }
  name = 'srinath';
  */
  /*updateDate : Observable<any> = new Observable((observer: Observer<any>)=> {
   observer.next("service init value");
 }) ;*/
  updateDate = new EventEmitter<any>();
  setData: string;
  results = [];
  apiUrl: string = 'https://itunes.apple.com/search';
  artistBaseApi: string = 'https://itunes.apple.com/lookup';
  // promise
  doSearchList(term) {
    const promise = new Promise((resolve, reject) => {
      const options = new RequestOptions();
      const search = new URLSearchParams();
      search.set('term', term);
      search.set('media', 'music');
      search.set('limit', '200');
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

  // observable
  doSearchListAsObservable(term) {
    const options = new RequestOptions();
    const search = new URLSearchParams();
    search.set('term', term);
    search.set('media', 'music');
    search.set('limit', '200');
    options.search = search;
    return this.http.get(this.apiUrl, options).map(res => res.json().results);
  }

  // artist details
  artistDetail(artistId) {
    const promise = new Promise((resolve, reject) => {
      const options = new RequestOptions();
      const search = new URLSearchParams();
      search.set('id', artistId);
      options.search = search;
      this.http.get(this.artistBaseApi, options).toPromise().then(
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

  // artist album list
  artistAlbumList(artistId) {
    const promise = new Promise((resolve, reject) => {
      const options = new RequestOptions();
      const search = new URLSearchParams();
      search.set('id', artistId);
      search.set('entity', 'album');
      options.search = search;
      this.http.get(this.artistBaseApi, options).toPromise().then(
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

  // artist track list
  artistTrackList(artistId) {
    const promise = new Promise((resolve, reject) => {
      const options = new RequestOptions();
      const search = new URLSearchParams();
      search.set('id', artistId);
      search.set('entity', 'song');
      options.search = search;
      this.http.get(this.artistBaseApi, options).toPromise().then(
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
