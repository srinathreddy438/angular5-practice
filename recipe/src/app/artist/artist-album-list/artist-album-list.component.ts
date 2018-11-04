import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {

  loading;
  artistAlbumList;
  checkData = 'intian value';
  getArtistAlbumDetails(artistId) {
    this.loading = true;
    this.searchServe.artistAlbumList(artistId).then(
      res => {
        this.loading = false;
        this.artistAlbumList = res;
      }
    );
  }
  constructor(private searchServe: SearchService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.parent.params.subscribe(params => {
      console.log(params);
      this.getArtistAlbumDetails(params.artistId);
    });
  }

  ngOnInit() {
    this.searchServe.updateDate.subscribe((data) => {
      console.log(data);
      this.checkData = data;
    });
  }

}
