import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'scrud-state';

@Injectable({
  providedIn: 'root',
})
export class BlogService implements ServiceBase<Blog> {
  constructor(private readonly http: HttpClient) {}

  public getAll(params: { page: number; size: number }): Observable<Blog[]> {
    return this.http.get<Blog[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=${params.page}&_limit=${params.size}`,
    );
  }

  public getById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
