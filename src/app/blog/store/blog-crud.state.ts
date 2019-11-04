import { ScrudState, ScrudStateModel, defaultState } from '@stilldesign/scrud';
import { Blog } from '../models/blog.model';
import { State } from '@ngxs/store';
import { BlogService } from '../services/blog.service';

@State<ScrudStateModel<Blog>>({
  name: 'blogScrud',
  defaults: defaultState(),
})
export class BlogCrudState extends ScrudState<Blog> {
  constructor(readonly service: BlogService) {
    super(BlogCrudState, service);
  }
}
