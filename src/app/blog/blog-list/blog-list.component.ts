import { Component, OnInit } from '@angular/core';
import { BlogActions } from '../store/blog.actions';
import { Store, Select } from '@ngxs/store';
import { BlogState } from '../store/blog.state';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  @Select(BlogState.list)
  public blogs$: Observable<Blog[]>;

  @Select(BlogState.loading)
  public loading$: Observable<Blog[]>;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(new BlogActions.GetBlogs({ size: 10 }));
  }
}
