import { Component, OnInit } from '@angular/core';
import { BlogCrudState } from '../store/blog-crud.state';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { GetModel } from 'crud-state';

@Component({
  selector: 'app-blog-state-details',
  templateUrl: './blog-state-details.component.html',
  styleUrls: ['./blog-state-details.component.scss'],
})
export class BlogStateDetailsComponent {
  @Select(BlogCrudState.model)
  public blog$: Observable<Blog>;

  @Select(BlogCrudState.loading)
  public loading$: Observable<boolean>;

  constructor(private readonly store: Store, private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.store.dispatch(new GetModel(BlogCrudState, { id: +params.id })),
    );
  }
}
