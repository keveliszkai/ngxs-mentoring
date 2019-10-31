import { Component, OnInit } from '@angular/core';
import { BlogCrudState } from '../store/blog-crud.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { GetList } from 'crud-state';

@Component({
  selector: 'app-blog-state-list',
  templateUrl: './blog-state-list.component.html',
  styleUrls: ['./blog-state-list.component.scss'],
})
export class BlogStateListComponent implements OnInit {
  @Select(BlogCrudState.list)
  public blogs$: Observable<Blog[]>;

  @Select(BlogCrudState.loading)
  public loading$: Observable<Blog[]>;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetList(BlogCrudState));
  }
}
