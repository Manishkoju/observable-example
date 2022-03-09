import { Component, OnInit } from '@angular/core';
import {Todo} from './models/todo.model';
import {TodoService} from './services/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Observable Demo";
  todos:Todo[]=[];
  constructor(private todoService:TodoService){}

  ngOnInit(): void {
      const todoObservable = this.todoService.getTodoList();
      todoObservable.subscribe((todo: Todo[]) => {
          this.todos = todo;
          console.log('todos',this.todos);
      });


  }
}
