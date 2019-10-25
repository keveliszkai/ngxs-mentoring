import { Component } from '@angular/core';
import { Blog } from './blog/models/blog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngxs';

  constructor() {
    Blog.sayHello();
  }
}
