import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';
import { BlogModule } from './blog/blog.module';
import { BlogState } from './blog/store/blog.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { BlogCrudState } from './blog/store/blog-crud.state';
import { TodoCrudState } from './todo/store/todo-crud.state';
import { TodoModule } from './todo/todo.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    TodoModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([BlogState, BlogCrudState, TodoCrudState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
