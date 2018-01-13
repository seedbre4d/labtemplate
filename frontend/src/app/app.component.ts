import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  public screen: {
    sidenavMode: string;
    sidenavOpened: boolean;
    sidenavButton: boolean;
  };
  ngOnInit(): void {

    this.screen = {
      sidenavOpened: true,
      sidenavButton: true,
      sidenavMode: 'side'
    };
  }


  constructor() {

  }
}
