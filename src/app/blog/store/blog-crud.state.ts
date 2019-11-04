import { ScrudState, ScrudStateModel, defaultEntityState } from '@stilldesign/scrud';
import { Blog } from '../models/blog.model';
import { State } from '@ngxs/store';
import { BlogService } from '../services/blog.service';

@State<ScrudStateModel<Blog>>({
  name: 'blogScrud',
  defaults: defaultEntityState(),
})
export class BlogCrudState extends ScrudState<Blog> {
  constructor(readonly service: BlogService) {
    super(BlogCrudState, service);
  }
}
