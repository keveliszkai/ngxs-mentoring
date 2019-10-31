import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private readonly http: HttpClient) {}

  public getAll(size: number): Observable<Blog[]> {
    return this.http.get<Blog[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${size}`,
    );
  }

  public getById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
