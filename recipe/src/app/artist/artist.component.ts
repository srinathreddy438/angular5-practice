import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private loading; 
  private artistDetails;
  getArtistDetails(artistId) {
    this.loading = true;
    this.searchServe.artistDetail(artistId).then(
      res => {
        this.loading = false;
        this.artistDetails = res[0];
      }
    )
  }
  constructor( private searchServe: SearchService, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe( params => {
      this.getArtistDetails(params.artistId);
    });
  }

  ngOnInit() {
  }
}
