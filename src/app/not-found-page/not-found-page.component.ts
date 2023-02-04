import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
})
export class NotFoundPageComponent implements OnInit {
  //ngStyle
  myColor = 'red';

  //ngIf Demo
  showElement = true;

  //ngFor

  num = ['Page is Broken', 'For Maintainance.'];

  constructor() {}

  ngOnInit() {}
}
