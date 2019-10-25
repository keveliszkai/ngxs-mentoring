import { Blog } from '../models/blog.model';

export interface BlogStateModel {
  list: Blog[];
  model?: Blog;
  isLoading: boolean;
  error?: any;
  paginatObject?: any;
  filters?: any[];
  search?: string;
}

// tslint:disable-next-line: no-namespace
export namespace BlogActions {
  export class GetBlogs {
    static readonly type = '[Blog] Get Blogs';
    constructor(public payload: { size: number }) {}
  }

  export class GetBlogsSucceeded {
    static readonly type = '[Blog] Get Blogs Success';
    constructor(public payload: { list: Blog[] }) {}
  }

  export class GetBlogsFailed {
    static readonly type = '[Blog] Get Blogs Failed';
  }

  export class GetBlog {
    static readonly type = '[Blog] Get Blog';
    constructor(public payload: { id: number | string }) {}
  }

  export class GetBlogSucceeded {
    static readonly type = '[Blog] Get Blog Success';
    constructor(public payload: { model: Blog }) {}
  }

  export class GetBlogFailed {
    static readonly type = '[Blog] Get Blog Failed';
  }
}
