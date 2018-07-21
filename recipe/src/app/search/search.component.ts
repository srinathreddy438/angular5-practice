import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  private loading;
  private data;
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
  
  constructor( private searchServe: SearchService, private activatedRoute: ActivatedRoute, private router: Router ) {
    this.activatedRoute.params.subscribe(
      params => {
        //url should be like http://localhost:4200/search;term=123;name=sri
        //console.log(params.term) //will give all params 
        this.doSearchUsingPromise(params.term);
      }
    )
  }

  ngOnInit() {
  }

  doSearch(searchTerm) {
    this.router.navigate(['artist', {term: searchTerm}]);
  }
}
