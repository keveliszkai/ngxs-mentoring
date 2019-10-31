import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Blog } from '../models/blog.model';
import { BlogActions, BlogStateModel } from './blog.actions';
import { BlogService } from '../services/blog.service';

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
  static model(state: BlogStateModel) {
    return state.model;
  }

  @Selector()
  static list(state: BlogStateModel) {
    return state.list;
  }

  @Selector()
  static loading(state: BlogStateModel) {
    return state.isLoading;
  }

  @Action(BlogActions.GetBlogs)
  getBlogs(ctx: StateContext<BlogStateModel>, { payload }: BlogActions.GetBlogs) {
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
  getBlogsSucceeded(ctx: StateContext<BlogStateModel>, { payload }: BlogActions.GetBlogsSucceeded) {
    ctx.patchState({
      list: payload.list,
      isLoading: false,
    });
  }

  @Action(BlogActions.GetBlog)
  getBlog(ctx: StateContext<BlogStateModel>, { payload }: BlogActions.GetBlog) {
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
  getBlogSucceeded(ctx: StateContext<BlogStateModel>, { payload }: BlogActions.GetBlogSucceeded) {
    ctx.patchState({
      model: payload.model,
      isLoading: false,
    });
  }

  @Action([BlogActions.GetBlogsFailed, BlogActions.GetBlogFailed])
  getBlogsFailed(ctx: StateContext<BlogStateModel>) {
    ctx.patchState({
      isLoading: false,
    });
  }
}
