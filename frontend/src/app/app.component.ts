import { Component, OnInit } from '@angular/core';
import { MatTab } from '@angular/material/tabs/typings/tab';
import { isNullOrUndefined } from 'util';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  enabled: boolean = true;
  tabLinks = [
    {label: 'Notes', link: 'note'},
    {label: 'Categories', link: 'category'},
    {label: 'Profile', link: 'edit'},
  ];
  tabNavBackground: 'black';
  ngOnInit(): void {
  }


  constructor() {
    console.log(Cookie.getAll());
  }
}
