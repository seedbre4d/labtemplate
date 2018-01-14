import { Component, OnInit } from '@angular/core';
import { MatTab } from '@angular/material/tabs/typings/tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  tabLinks = [
    {label: 'Notes', link: 'note'},
    {label: 'Categories', link: 'category'},
    {label: 'Profile', link: 'user'},
  ];
  tabNavBackground: 'black';
  ngOnInit(): void {
  }


  constructor() {

  }
}
