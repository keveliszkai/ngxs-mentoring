import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogStateListComponent } from './blog/blog-state-list/blog-state-list.component';
import { BlogStateDetailsComponent } from './blog/blog-state-details/blog-state-details.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogListComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogDetailsComponent,
  },
  {
    path: 'todos',
    component: TodoListComponent,
  },
  {
    path: 'todos/create',
    component: TodoCreateComponent,
  },
  {
    path: 'todos/:id',
    component: TodoEditComponent,
  },
  {
    path: 'crud/blogs',
    component: BlogStateListComponent,
  },
  {
    path: 'crud/blogs/:id',
    component: BlogStateDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
