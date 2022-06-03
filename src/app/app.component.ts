import { Component } from '@angular/core';
import { TodoComponent } from './MyComponent/todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list1';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed the title";
    // }, 5000);
  }
  
}
