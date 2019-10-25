import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private readonly http: HttpClient) {}

  public getAll(size: number): Observable<Blog[]> {
    return this.http
      .get<{ data: Blog[] }>(
        `http://yoga.demo.api.stilldesign.work/cms?page=1&size=${size}&orders=-createdAt&filters%5B0%5D=type.name=blog&fields=*`,
      )
      .pipe(map(res => res.data));
  }

  public getById(id: number): Observable<Blog> {
    return this.http
      .get<{ data: Blog }>(`http://yoga.demo.api.stilldesign.work/cms/${id}`)
      .pipe(map(res => res.data));
  }
}
