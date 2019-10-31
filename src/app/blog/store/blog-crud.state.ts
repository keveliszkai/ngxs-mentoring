import { CrudState, CrudStateModel, defaultEntityState } from 'crud-state';
import { Blog } from '../models/blog.model';
import { State } from '@ngxs/store';
import { BlogService } from '../services/blog.service';

@State<CrudStateModel<Blog>>({
  name: 'blogCrud',
  defaults: defaultEntityState(),
})
export class BlogCrudState extends CrudState<Blog> {
  constructor(readonly service: BlogService) {
    super(BlogCrudState, service);
  }
}
