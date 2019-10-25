import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BlogState } from '../store/blog.state';
import { Blog } from '../models/blog.model';
import { Observable } from 'rxjs';
import { BlogActions } from '../store/blog.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  @Select(BlogState.model)
  public blog$: Observable<Blog>;

  @Select(BlogState.loading)
  public loading$: Observable<boolean>;

  constructor(private readonly store: Store, private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.store.dispatch(new BlogActions.GetBlog({ id: +params.id })),
    );
  }
}
