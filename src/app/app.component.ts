import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: Link[];

  constructor() {
    this.links = [
      new Link('Angular', 'https://angular.io', 100),
      new Link('GitHub', 'https://github.com', 500),
      new Link('Google', 'https://google.com', 300),
      new Link('YouTube', 'https://youtube.com', 150),
    ];
  }
  AddNewLink(title: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Link(title.value, link.value));
    title.value = "";
    link.value = "";
    return false;
  }
}
