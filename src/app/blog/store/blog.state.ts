import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Blog } from '../models/blog.model';
import { BlogActions, BlogStateModel } from './blog.actions';
import { BlogService } from '../services/blog.service';
import { CrudStateModel } from '../../shared/crud/store/crud.state-model';
import { CrudStateInterface } from '../../shared/crud/store/crud-state.interface';
import { extend } from 'webdriver-js-extender';
import { CrudState } from '../../shared/crud/store/crud.state';

@State<BlogStateModel>({
  name: 'blog',
  defaults: {
    list: [],
    isLoading: false,
  },
})
export class BlogState {
  constructor(readonly service: BlogService) {}

  @Selector()
  static list(state: CrudStateModel<Blog>) {
    return state.list;
  }

  @Selector()
  static model(state: CrudStateModel<Blog>) {
    return state.model;
  }

  @Selector()
  static loading(state: CrudStateModel<Blog>) {
    return state.isLoading;
  }

  @Action(BlogActions.GetBlogs)
  getBlogs(ctx: StateContext<CrudStateModel<Blog>>, { payload }: BlogActions.GetBlogs) {
    const state = ctx.getState();

    if (state.list.length) {
      ctx.dispatch(new BlogActions.GetBlogsSucceeded({ list: state.list }));
    } else {
      ctx.patchState({ isLoading: true });
      this.service
        .getAll(payload.size)
        .subscribe(
          list => ctx.dispatch(new BlogActions.GetBlogsSucceeded({ list })),
          () => ctx.dispatch(new BlogActions.GetBlogsFailed()),
        );
    }
  }

  @Action(BlogActions.GetBlogsSucceeded)
  getBlogsSucceeded(
    ctx: StateContext<CrudStateModel<Blog>>,
    { payload }: BlogActions.GetBlogsSucceeded,
  ) {
    ctx.patchState({
      list: payload.list,
      isLoading: false,
    });
  }

  @Action(BlogActions.GetBlog)
  getBlog(ctx: StateContext<CrudStateModel<Blog>>, { payload }: BlogActions.GetBlog) {
    const state = ctx.getState();
    if (state.model && (state.model as any).id === payload.id) {
      ctx.dispatch(new BlogActions.GetBlogSucceeded({ model: state.model }));
    } else {
      ctx.patchState({ isLoading: true });
      this.service
        .getById(+payload.id)
        .subscribe(
          model => ctx.dispatch(new BlogActions.GetBlogSucceeded({ model })),
          () => ctx.dispatch(new BlogActions.GetBlogFailed()),
        );
    }
  }

  @Action(BlogActions.GetBlogSucceeded)
  getBlogSucceeded(
    ctx: StateContext<CrudStateModel<Blog>>,
    { payload }: BlogActions.GetBlogSucceeded,
  ) {
    ctx.patchState({
      model: payload.model,
      isLoading: false,
    });
  }

  @Action([BlogActions.GetBlogsFailed, BlogActions.GetBlogFailed])
  getBlogsFailed(ctx: StateContext<CrudStateModel<Blog>>) {
    ctx.patchState({
      isLoading: false,
    });
  }
}
