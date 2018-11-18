import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {

  // updateDate: any;
  // results: any;
  private apiUrl = 'https://itunes.apple.com/search';
  private artistBaseApi = 'https://itunes.apple.com/lookup';
  public updateDate = new EventEmitter<any>();
  constructor(private httpCall: HttpClient) { }
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
  // promise
  doSearchList(term) {
    const promise = new Promise((resolve, reject) => {
      // angular 4.4
      /*
      const params = new RequestOptions();
      const search = new URLSearchParams();
      search.set('term', term);
      search.set('media', 'music');
      search.set('limit', '200');
      params.search = search;
      */
      // above angular 4.4
      const params = new HttpParams().set('term', term).set('media', 'music').set('limit', '200');
      this.httpCall.get(this.apiUrl, { params }).toPromise().then(
        res => {
          const results = res && res['results'];
          resolve(results);
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
    const params = new HttpParams().set('term', term).set('media', 'music').set('limit', '200');
    return this.httpCall.get(this.apiUrl, {params}).map(res => res['results']);
  }

  // artist details
  artistDetail(artistId) {
    const promise = new Promise((resolve, reject) => {
      const params = new HttpParams().set('id', artistId);
      this.httpCall.get(this.artistBaseApi, {params}).toPromise().then(
        res => {
          const results = res['results'];
          resolve(results);
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
      const params = new HttpParams().set('id', artistId).set('entity', 'album');
      this.httpCall.get(this.artistBaseApi, {params}).toPromise().then(
        res => {
          const results = res['results'];
          resolve(results);
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
      const params = new HttpParams().set('id', artistId).set('entity', 'song');
      this.httpCall.get(this.artistBaseApi, {params}).toPromise().then(
        res => {
          const results = res['results'];
          resolve(results);
        },
        err => {
          reject(err);
        }
      );
    });
    return promise;
  }

}
