import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  declarations: [TodoListComponent, TodoDetailsComponent, TodoCreateComponent, TodoPageComponent, TodoEditComponent],
  imports: [CommonModule, BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class TodoModule {}
