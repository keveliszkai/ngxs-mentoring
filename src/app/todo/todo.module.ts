import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TodoListComponent, TodoDetailsComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
})
export class TodoModule {}
