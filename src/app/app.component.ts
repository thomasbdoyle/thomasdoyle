import { Component, OnInit } from '@angular/core';

declare var GitHubActivity: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    GitHubActivity.feed({
      username: 'thomasbdoyle',
      selector: '#feed',
      limit: 10
    });
  }
}
