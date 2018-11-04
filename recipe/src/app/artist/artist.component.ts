import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  loading;
  artistDetails;
  // checkData = "intian value";
  getArtistDetails(artistId) {
    this.loading = true;
    this.searchServe.artistDetail(artistId).then(
      res => {
        this.loading = false;
        this.artistDetails = res[0];
      }
    );
  }
  constructor(private searchServe: SearchService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params => {
      this.getArtistDetails(params.artistId);
    });
  }

  updateServiceData() {
    // this.searchServe.storeData('sri');
    this.searchServe.updateDate.emit('this is new data');
  }

  ngOnInit() {
    // this.searchServe.updateDate.subscribe((data)=> {
    //   console.log(data);
    //   this.checkData = data;
    // })
  }

}
