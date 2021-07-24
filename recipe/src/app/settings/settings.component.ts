import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated // default - make ur styles belongs to only for ur component
  // encapsulation: ViewEncapsulation.Native // ur styles will apply for all components, but external styles won't apply like bootsrrap, material design
  encapsulation: ViewEncapsulation.None // ur styles will apply for all components, u can check global style in the head section of our HTML.
})
export class SettingsComponent implements OnInit {
  toggle = false;
  constructor() { }

  ngOnInit() {
  }

}
