import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  private loading; 
  private artistTrackList;
  getArtistTrackDetails(artistId) {
    this.loading = true;
    this.searchServe.artistTrackList(artistId).then(
      res => {
        this.loading = false;
        this.artistTrackList = res
      }
    )
  }
  constructor( private searchServe: SearchService, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.parent.params.subscribe( params => {
      this.getArtistTrackDetails(params.artistId);
    });
  }
  ngOnInit() {
  }

}
