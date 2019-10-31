import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BlogStateListComponent } from './blog-state-list/blog-state-list.component';
import { BlogStateDetailsComponent } from './blog-state-details/blog-state-details.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailsComponent,
    BlogStateListComponent,
    BlogStateDetailsComponent,
  ],
  exports: [],
  imports: [CommonModule, BrowserModule, RouterModule],
})
export class BlogModule {}
