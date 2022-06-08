import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponent/todo/todo.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { TodoAddComponent } from './MyComponent/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImdbratingComponent } from './MyComponent/imdbrating/imdbrating.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    TodoAddComponent,
    AboutComponent,
    HomeComponent,
    ImdbratingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'imdbrating', component: ImdbratingComponent},
      {path: 'about', component: AboutComponent},
      {path: 'todo', component: TodoComponent},
      {path: '', component: HomeComponent},
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
