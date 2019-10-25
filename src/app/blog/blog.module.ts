import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NgxsModule } from '@ngxs/store';
import { BlogState } from './store/blog.state';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogListComponent, BlogDetailsComponent],
  exports: [BlogListComponent, BlogDetailsComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
})
export class BlogModule {}
