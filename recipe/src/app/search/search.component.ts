import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading;
  data;
  doSearchUsingPromise(searchTerm) {
    this.loading = true;
    this.searchServe.doSearchList(searchTerm).then((res) => {
      this.loading = false, this.data = res;
    },
      (err) => {
        console.log(err);
      }
    );
  }

  constructor(private searchServe: SearchService, private activatedRoute: ActivatedRoute, private router: Router) {
    /*
      route param we will get in 2 ways 1 is by subscribing params and 2nd one is by using snapshot.
      whenever route param dont change then we can use snapshot
      in below case whenever search happen url param will chnage. so we should use subscribe
     */
    // angula2
    /* this.activatedRoute.params.subscribe(
        params => {
          // url should be like http://localhost:4200/search;term=123;name=sri
          // console.log(params.term) //will give all params
          this.doSearchUsingPromise(params.term);
        }
      );
    */
    // angiular 4 above
    this.activatedRoute.paramMap.subscribe(
      params => {
        // url should be like http://localhost:4200/search;term=123;name=sri
        // console.log(params.term) //will give all params
        this.doSearchUsingPromise(params.get('term'));
      }
    );

    // angular 2
    // const searchURLTerm = this.activatedRoute.snapshot.params.term;
    // above angular 4 instaed of params we should replace paramMap.get(param name) ex:
    /*const searchURLTerm = this.activatedRoute.snapshot.paramMap.get('term');
    this.doSearchUsingPromise(searchURLTerm);*/
  }

  ngOnInit() {
  }

  doSearch(searchTerm) {
    /*
      we will pass 1st param as route,  next params as comma separated required parameters
      and after that we will pass optional parameters as a object
      example route: this.router.navigate(['artist', "requiredParam1", "requiredParam2", {term: searchTerm, name: srinath}]);
    */
    this.router.navigate(['artist', { term: searchTerm }]);
  }
}
