import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-with-pipes-with-resolve',
  templateUrl: './grid-with-pipes-with-resolve.component.html',
  styleUrls: ['./grid-with-pipes-with-resolve.component.scss']
})
export class GridWithPipesWithResolveComponent implements OnInit {
  propertiesList;
  searchProperty;
  searchRent;
  locality;
  public news: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.news = this.route.snapshot.data['news'];
    this.propertiesList = this.route.snapshot.data['gridList'].data;
    this.searchProperty = 1500;
    this.searchRent = 30000;
    this.locality = '';
  }

}
